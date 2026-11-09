(() => {
"use strict";
const C = window.COURSE;
const LEVELS = ["A1", "A2", "B1"];
const DLG = Object.fromEntries(C.dialogues.map(d => [d.id, d]));
const STORY = Object.fromEntries((C.stories || []).map(s => [s.id, s]));
const $app = document.getElementById("app");

/* ---------- storage ---------- */
const KEY = "nepali-saathi-v1";
const DEF = { srs: {}, done: {}, dlg: {}, story: {}, xp: {}, imm: {}, mine: [], stats: {}, daily: {}, badges: {}, best: {}, gram: {}, cult: {}, read: {}, freezes: 0, frozen: {}, gone: {}, epoch: 0, at: 0, settings: { voice: "auto", slow: 0.7, script: false, goal: 30, drill: "ne-en", gap: 2, sfx: true, remind: { on: false, time: "19:00" } } };
let S = load();
let ALL = [], BY_ID = {}, UNIT = {};
function indexAll() {
  ALL = []; BY_ID = {}; UNIT = {};
  C.units.forEach(u => { UNIT[u.id] = u; u.phrases.forEach(p => { p.unit = u.id; ALL.push(p); BY_ID[p.id] = p; }); });
  UNIT.mine = { id: "mine", level: "Mine", title: "My phrases", sub: "Phrases you added", tips: [], phrases: S.mine };
  S.mine.forEach(p => { p.unit = "mine"; p.own = true; ALL.push(p); BY_ID[p.id] = p; });
}
indexAll();
function load() {
  try { const j = JSON.parse(localStorage.getItem(KEY)); if (j) return merge(j); } catch (e) {}
  return JSON.parse(JSON.stringify(DEF));
}
const okMine = p => p && typeof p === "object" && /^[\w-]{1,60}$/.test(p.id) && ["ne", "ro", "en"].every(k => typeof p[k] === "string");
function merge(j) { const d = JSON.parse(JSON.stringify(DEF)); const o = { ...d, ...j, settings: { ...d.settings, ...(j.settings || {}) } }; o.mine = (Array.isArray(o.mine) ? o.mine : []).filter(okMine); return o; }
// Replace the state's contents but keep the S and S.settings objects, so views holding a reference never write to a stale copy.
function adopt(n) { const st = S.settings; Object.keys(st).forEach(k => delete st[k]); Object.assign(st, n.settings); Object.keys(S).forEach(k => delete S[k]); Object.assign(S, n, { settings: st }); }
let syncSoon = () => {};
function store() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function save() { S.at = Date.now(); store(); syncSoon(); }
const day = (d = new Date()) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
function addXP(n) {
  if (!n) return;
  const t = day(), before = rankOf(totalXP()), had = S.xp[t] || 0;
  S.xp[t] = had + n; save(); header(); track("xp", n);
  if (!had && typeof Remind !== "undefined") Remind.sync();
  const after = rankOf(totalXP());
  if (after !== before) levelUp(after);
  else if (had < S.settings.goal && S.xp[t] >= S.settings.goal) { setTimeout(() => { celebrate(); Sfx.win(); toast("Daily goal reached. Syaabaas!"); }, 300); }
}
function streak() {
  let n = 0; const d = new Date(), on = k => S.xp[k] || S.frozen[k];
  if (!on(day(d))) d.setDate(d.getDate() - 1);
  while (on(day(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
// A streak freeze (earned by finishing all daily quests) covers one missed day.
function applyFreeze() {
  const y = new Date(); y.setDate(y.getDate() - 1); const y2 = new Date(); y2.setDate(y2.getDate() - 2);
  const k = day(y), k2 = day(y2);
  if (!S.xp[k] && !S.frozen[k] && (S.xp[k2] || S.frozen[k2]) && S.freezes > 0) {
    S.frozen[k] = 1; S.freezes--; save();
    setTimeout(() => toast("You missed yesterday. A streak freeze kept your streak alive."), 900);
  }
}

/* ---------- spaced repetition (Leitner boxes) ---------- */
const INT = [0, 1, 3, 7, 16, 35].map(d => d * 864e5);
function introduce(id) { if (!S.srs[id]) S.srs[id] = { box: 1, due: Date.now() + 6 * 36e5, t: Date.now() }; }
function grade(id, ok) {
  const now = Date.now(); let r = S.srs[id];
  if (!r) r = S.srs[id] = { box: 0, due: now };
  if (ok) { if (r.due <= now || r.box === 0) { r.box = Math.min(5, r.box + 1); r.due = now + INT[r.box]; } }
  else { r.box = 1; r.due = now + 10 * 6e4; }
  r.t = now; save();
}
const dueList = () => Object.entries(S.srs).filter(([id, r]) => BY_ID[id] && r.due <= Date.now()).map(([id]) => BY_ID[id]);
const seenList = () => Object.keys(S.srs).filter(id => BY_ID[id]).map(id => BY_ID[id]);
function unitFlags(u) {
  const ps = u.phrases, boxes = ps.map(p => (S.srs[p.id] || {}).box || 0);
  return [
    !!S.done[u.id + ":learn"], !!S.done[u.id + ":listen"], !!S.done[u.id + ":speak"],
    boxes.filter(b => b >= 3).length >= Math.ceil(ps.length * 0.6),
    boxes.every(b => b >= 4)
  ];
}
const FLAG_NAMES = ["Learned", "Listened", "Spoken", "Remembered", "Mastered"];
const flagsHTML = (f, big) => `<span class="flags${big ? " big" : ""}" aria-label="${f.filter(Boolean).length} of 5 flags">${f.map((on, i) => `<i class="flag c${i}${on ? " on" : ""}" title="${FLAG_NAMES[i]}"></i>`).join("")}</span>`;

/* ---------- audio ---------- */
// Bundled recordings are named by an FNV-1a hash of the phrase's UTF-8 bytes (see tools/fetch_audio.py).
const LOCAL = new Set(window.AUDIO_FILES || []);
function fnv(s) { let h = 0x811c9dc5; for (const b of new TextEncoder().encode(s)) { h ^= b; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, "0"); }
const Voice = {
  list: [], online: true, fails: 0, cur: null, done: null, token: 0, cache: new Map(),
  init() {
    if (!("speechSynthesis" in window)) return;
    const f = () => { this.list = speechSynthesis.getVoices(); };
    f(); speechSynthesis.onvoiceschanged = f;
  },
  find(re) { return this.list.find(v => re.test(v.lang)); },
  get ne() { return this.find(/^ne/i); },
  get hi() { return this.find(/^hi/i); },
  get en() { return this.find(/^en[-_](GB|US)/i) || this.find(/^en/i); },
  web: t => "https://translate.google.com/translate_tts?ie=UTF-8&tl=ne&client=tw-ob&q=" + encodeURIComponent(t),
  local(t) { const h = fnv(t.trim()); return LOCAL.has(h) ? "audio/" + h + ".mp3" : null; },
  url(t) { return this.local(t) || this.web(t); },
  stop() {
    this.token++;
    if (this.cur) { this.cur.onended = this.cur.onerror = null; try { this.cur.pause(); } catch (e) {} this.cur = null; }
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (this.done) { const d = this.done; this.done = null; d(); }
  },
  prefetch(t) { if (S.settings.voice === "device" || (!this.online && !this.local(t))) return; const u = this.url(t); if (!this.cache.has(u)) { const a = new Audio(); a.preload = "auto"; a.src = u; this.cache.set(u, a); } },
  async say(text, slow = false) {
    this.stop(); const tok = this.token; const rate = slow ? S.settings.slow : 1;
    if (S.settings.voice !== "device" && this.local(text)) {
      try { await this.playOnline(text, rate, tok); return; } catch (e) { if (tok !== this.token) return; }
    }
    if (S.settings.voice !== "device" && this.online && navigator.onLine !== false && !this.local(text)) {
      try { await this.playOnline(text, rate, tok); this.fails = 0; return; }
      catch (e) { if (tok !== this.token) return; if (++this.fails >= 2) { this.online = false; toast("Online voice unavailable. Using this device's voice."); } }
    }
    if (tok !== this.token) return;
    await this.device(text, rate, "ne");
  },
  playOnline(text, rate, tok) {
    return new Promise((res, rej) => {
      const u = this.url(text); let a = this.cache.get(u);
      if (!a) { a = new Audio(); a.preload = "auto"; a.src = u; this.cache.set(u, a); }
      try { a.currentTime = 0; } catch (e) {}
      a.defaultPlaybackRate = rate; a.playbackRate = rate; a.preservesPitch = true;
      let started = false;
      const timer = setTimeout(() => { if (!started && tok === this.token) { a.pause(); this.done = null; rej(new Error("timeout")); } }, 7000);
      a.onplaying = () => { started = true; };
      a.onended = () => { clearTimeout(timer); this.done = null; res(); };
      a.onerror = () => { clearTimeout(timer); this.cache.delete(u); this.done = null; rej(new Error("net")); };
      this.cur = a; this.done = () => { clearTimeout(timer); res(); };
      const p = a.play(); if (p) p.catch(err => { clearTimeout(timer); this.done = null; rej(err); });
    });
  },
  device(text, rate, lang) {
    return new Promise(res => {
      if (!window.speechSynthesis) { res(); return; }
      const u = new SpeechSynthesisUtterance(text);
      const v = lang === "en" ? this.en : (this.ne || this.hi);
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = lang === "en" ? "en-GB" : "ne-NP";
      u.rate = lang === "en" ? 1 : rate * 0.9;
      // Some browsers never fire onend, so don't wait forever.
      const guard = setTimeout(() => fin(), 2500 + text.length * 150);
      const fin = () => { clearTimeout(guard); if (this.done === fin) this.done = null; res(); };
      u.onend = u.onerror = fin; this.done = fin;
      speechSynthesis.speak(u);
    });
  },
  async sayEn(text) { this.stop(); await this.device(text, 1, "en"); },
  label() {
    if (S.settings.voice !== "device" && LOCAL.size) return "Built-in Nepali recordings (work offline)";
    if (S.settings.voice !== "device" && this.online) return "Online Nepali voice (Google)";
    if (this.ne) return "Device Nepali voice: " + this.ne.name;
    if (this.hi) return "Device Hindi voice (close, not exact): " + this.hi.name;
    return "No Nepali voice on this device";
  }
};
Voice.init();

/* ---------- speech recognition + scoring ---------- */
const SRC = window.SpeechRecognition || window.webkitSpeechRecognition;
const Mic = {
  ok: !!SRC, rec: null,
  listen() {
    return new Promise((res, rej) => {
      const r = new SRC(); this.rec = r;
      r.lang = "ne-NP"; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
      let got = false;
      r.onresult = e => { got = true; res([...e.results[0]].map(a => a.transcript)); };
      r.onerror = e => rej(e.error || "error");
      r.onend = () => { if (!got) rej("no-speech"); };
      try { r.start(); } catch (e) { rej("busy"); }
    });
  },
  stop() { try { this.rec && this.rec.stop(); } catch (e) {} }
};
function micError(err) {
  if (err === "no-speech" || err === "aborted") return "I didn't hear anything. Tap the mic and speak right away.";
  Mic.ok = false;
  if (err === "not-allowed" || err === "service-not-allowed") return "The microphone is blocked. Allow it in the browser's address bar, then reload. For now you'll check yourself.";
  if (err === "network") return "Speech checking needs the internet. For now you'll check yourself.";
  if (err === "language-not-supported") return "This browser can't recognise Nepali. Use Google Chrome for speech checking. For now you'll check yourself.";
  return "Speech checking stopped working (" + err + "). For now you'll check yourself.";
}

const CONS = { "क":"k","ख":"kh","ग":"g","घ":"gh","ङ":"ng","च":"ch","छ":"chh","ज":"j","झ":"jh","ञ":"n","ट":"t","ठ":"th","ड":"d","ढ":"dh","ण":"n","त":"t","थ":"th","द":"d","ध":"dh","न":"n","प":"p","फ":"ph","ब":"b","भ":"bh","म":"m","य":"y","र":"r","ल":"l","व":"b","श":"sh","ष":"sh","स":"s","ह":"h","ळ":"l" };
const VOW = { "अ":"a","आ":"aa","इ":"i","ई":"i","उ":"u","ऊ":"u","ऋ":"ri","ए":"e","ऐ":"ai","ओ":"o","औ":"au" };
const SIGN = { "ा":"aa","ि":"i","ी":"i","ु":"u","ू":"u","ृ":"ri","े":"e","ै":"ai","ो":"o","ौ":"au" };
function translit(s) {
  s = s.replace(/ज्ञ/g, "ग्य");
  return s.split(/(\s+)/).map(w => {
    let out = "", syl = 0, lastConj = false; const ch = [...w];
    for (let i = 0; i < ch.length; i++) {
      const c = ch[i], n = ch[i + 1];
      if (CONS[c]) {
        out += (c === "व" && lastConj) ? "w" : CONS[c]; syl++;
        if (n === "्") { i++; lastConj = true; continue; }
        if (n === "़") i++;
        const nn = ch[i + 1];
        if (SIGN[nn]) { out += SIGN[nn]; i++; }
        else {
          const atEnd = !nn || !/[ऀ-ॿ]/.test(nn) || nn === "।";
          if (!(atEnd && syl > 1 && !lastConj)) out += "a";
        }
        lastConj = false;
      } else if (VOW[c]) { out += VOW[c]; syl++; lastConj = false; }
      else if (c === "ं" || c === "ँ") out += "n";
      else if (c === "ः") out += "h";
      else if (SIGN[c]) out += SIGN[c];
      else if (c === "।") out += ".";
      else if (!/[ऀ-ॿ]/.test(c)) out += c;
    }
    return out;
  }).join("");
}
const NUMW = { 1:"एक",2:"दुई",3:"तीन",4:"चार",5:"पाँच",6:"छ",7:"सात",8:"आठ",9:"नौ",10:"दस",15:"पन्ध्र",20:"बीस",30:"तीस",50:"पचास",100:"एक सय",120:"एक सय बीस",300:"तीन सय",400:"चार सय",500:"पाँच सय",1000:"एक हजार",1500:"पन्ध्र सय",2000:"दुई हजार" };
function normDeva(s) {
  s = s.replace(/[०-९]/g, d => "०१२३४५६७८९".indexOf(d)).replace(/(\d),(\d)/g, "$1$2");
  return s.replace(/\d+/g, d => NUMW[+d] || d);
}
function key(s) {
  return translit(normDeva(s)).toLowerCase().replace(/[^a-z\s]/g, " ").replace(/aa/g, "a").replace(/sh/g, "s").replace(/w/g, "b").replace(/\s+/g, " ").trim();
}
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
  return prev[n];
}
function score(target, alts) {
  const t = key(target), t2 = t.replace(/ /g, "");
  let best = { s: 0, heard: alts[0] || "" };
  for (const a of alts) {
    const k = key(a), k2 = k.replace(/ /g, "");
    const s = Math.max(1 - lev(t, k) / Math.max(t.length, k.length, 1), 1 - lev(t2, k2) / Math.max(t2.length, k2.length, 1));
    if (s > best.s) best = { s, heard: a };
  }
  return best;
}

/* ---------- self recording (shadowing) ---------- */
const Rec = {
  ok: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder),
  mr: null, stream: null, chunks: [],
  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mr = new MediaRecorder(this.stream); this.chunks = [];
    this.mr.ondataavailable = e => this.chunks.push(e.data); this.mr.start();
  },
  stop() {
    return new Promise(res => {
      if (!this.mr) return res(null);
      this.mr.onstop = () => { this.stream.getTracks().forEach(t => t.stop()); res(URL.createObjectURL(new Blob(this.chunks, { type: this.mr.mimeType }))); this.mr = null; };
      this.mr.stop();
    });
  },
  get on() { return !!this.mr; }
};

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const I = {
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
  speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M10 2h4"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/></svg>',
  stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
  flame: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 4 5 5.5 5 11a5 5 0 0 1-10 0c0-2.5 1.2-4 2.5-5 .2 1.6.9 2.6 2 3C11 8 11 5 12 2z" fill="currentColor"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>',
  target: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
  peak: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 20 L9 8 L12 12 L15 6 L22 20Z" fill="currentColor"/></svg>',
  momo: '<svg viewBox="0 0 40 30" aria-hidden="true"><path d="M3 24 Q2 10 20 6 Q38 10 37 24 Z" fill="#f4e7cf" stroke="#c9a978" stroke-width="1.5"/><path d="M11 21 Q15 12 20 7 M29 21 Q25 12 20 7 M20 22 L20 8" stroke="#d8bf94" stroke-width="1.2" fill="none"/></svg>',
  cards: '<svg viewBox="0 0 40 30" aria-hidden="true"><rect x="4" y="5" width="16" height="21" rx="3" fill="#2b5fa8" transform="rotate(-8 12 15)"/><rect x="18" y="4" width="16" height="21" rx="3" fill="#f0a050" transform="rotate(7 26 14)"/><path d="M23 12 l3 3 l3-3" stroke="#1a1006" stroke-width="2" fill="none"/></svg>',
  bag: '<svg viewBox="0 0 40 30" aria-hidden="true"><path d="M8 10 H32 L30 28 H10Z" fill="#c8352b"/><path d="M14 10 Q14 2 20 2 Q26 2 26 10" stroke="#e2ae17" stroke-width="2.5" fill="none"/><path d="M8 15 H32" stroke="#e2ae17" stroke-width="2"/></svg>',
  back: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>'
};
let toastT;
function toast(msg) {
  let t = document.querySelector(".toast"); if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 3200);
}
const ne = p => S.settings.script ? `<p class="big-ne">${esc(p.ne)}</p>` : "";
const backBtn = (to, label) => `<button class="back" data-go="${to}">${I.back}${esc(label)}</button>`;

function header() {
  const x = S.xp[day()] || 0, g = S.settings.goal, st = streak();
  document.getElementById("streak").textContent = st + (st === 1 ? " day" : " days");
  document.getElementById("xpn").textContent = Math.min(x, 999) + " / " + g + " XP";
  document.getElementById("ring").style.setProperty("--p", Math.min(100, Math.round(x / g * 100)));
}

/* ---------- fun: sounds, confetti, mascot, ranks, quests, badges ---------- */
const pick = a => a[Math.random() * a.length | 0];
const Sfx = {
  ctx: null,
  get on() { return S.settings.sfx !== false; },
  ac() {
    if (!this.ctx) { const A = window.AudioContext || window.webkitAudioContext; if (!A) return null; this.ctx = new A(); }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },
  // A soft struck-bell tone with inharmonic partials, like a small singing bowl.
  bell(f, t0 = 0, vol = 0.16, len = 1.4) {
    const c = this.ac(); if (!c) return; const t = c.currentTime + t0;
    [[1, 1], [2.76, 0.4], [5.4, 0.15]].forEach(([m, g]) => {
      const o = c.createOscillator(), v = c.createGain(); o.type = "sine"; o.frequency.value = f * m;
      v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(vol * g, t + 0.012); v.gain.exponentialRampToValueAtTime(0.0001, t + len / Math.sqrt(m));
      o.connect(v).connect(c.destination); o.start(t); o.stop(t + len);
    });
  },
  buzz(p) { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) {} },
  good(combo = 1) { if (!this.on) return; this.buzz(12); this.bell(523.25 * Math.pow(2, Math.min(combo - 1, 9) / 12)); },
  bad() {
    if (!this.on) return; this.buzz([25, 40, 25]); const c = this.ac(); if (!c) return;
    const t = c.currentTime, o = c.createOscillator(), v = c.createGain(); o.type = "triangle";
    o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.22);
    v.gain.setValueAtTime(0.1, t); v.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    o.connect(v).connect(c.destination); o.start(t); o.stop(t + 0.3);
  },
  win() { if (this.on) [392, 523.25, 659.25, 783.99].forEach((f, i) => this.bell(f, i * 0.11, 0.12, 1.8)); },
  bowl() { if (this.on) { this.bell(196, 0, 0.24, 5); this.bell(392, 0.9, 0.1, 3); } }
};
document.addEventListener("pointerdown", () => { if (Sfx.on) Sfx.ac(); }, { once: true });

// Marigold petals, as strung for Tihar.
function celebrate(n = 90) {
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = document.createElement("canvas"); cv.className = "confetti"; document.body.appendChild(cv);
  const dpr = window.devicePixelRatio || 1, W = cv.width = innerWidth * dpr, H = cv.height = innerHeight * dpr, x = cv.getContext("2d");
  const cols = ["#f0a050", "#e8890c", "#f6c13a", "#d9531e", "#ffd27a", "#c8352b"];
  const ps = Array.from({ length: n }, () => ({ x: Math.random() * W, y: -Math.random() * H * 0.6, r: (5 + Math.random() * 7) * dpr, vy: (1.6 + Math.random() * 2.6) * dpr, vx: (Math.random() - 0.5) * 1.4 * dpr, a: Math.random() * 6.28, va: (Math.random() - 0.5) * 0.18, c: pick(cols) }));
  const t0 = performance.now();
  (function step(t) {
    x.clearRect(0, 0, W, H);
    for (const p of ps) {
      p.x += p.vx + Math.sin((t + p.a * 400) / 420) * dpr * 0.7; p.y += p.vy; p.a += p.va;
      x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.beginPath(); x.ellipse(0, 0, p.r, p.r * 0.5, 0, 0, 6.283); x.fill(); x.restore();
    }
    if (t - t0 < 3400) requestAnimationFrame(step); else cv.remove();
  })(t0);
}

// Habre, the red panda (habre is Nepali for red panda).
function habre(mood = "happy", size = 72) {
  const eyes = mood === "happy"
    ? '<path d="M28 50 Q34 44 40 50" stroke="#1a1006" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M60 50 Q66 44 72 50" stroke="#1a1006" stroke-width="4" fill="none" stroke-linecap="round"/>'
    : '<circle cx="34" cy="50" r="5" fill="#1a1006"/><circle cx="66" cy="50" r="5" fill="#1a1006"/><circle cx="35.5" cy="48.5" r="1.6" fill="#fff"/><circle cx="67.5" cy="48.5" r="1.6" fill="#fff"/>';
  const mouth = mood === "happy" ? '<path d="M42 74 Q50 82 58 74" stroke="#1a1006" stroke-width="3" fill="#7a2a14" stroke-linecap="round"/>' : '<path d="M43 78 Q50 73 57 78" stroke="#1a1006" stroke-width="3" fill="none" stroke-linecap="round"/>';
  return `<svg class="habre" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
    <path d="M12 40 L18 10 L44 24 Z" fill="#7a2a14"/><path d="M88 40 L82 10 L56 24 Z" fill="#7a2a14"/>
    <path d="M18 34 L21 17 L36 26 Z" fill="#fff4e8"/><path d="M82 34 L79 17 L64 26 Z" fill="#fff4e8"/>
    <ellipse cx="50" cy="56" rx="41" ry="35" fill="#c8562a"/>
    <ellipse cx="32" cy="38" rx="8" ry="5" fill="#fff4e8"/><ellipse cx="68" cy="38" rx="8" ry="5" fill="#fff4e8"/>
    <path d="M14 62 Q28 52 42 62 Q50 67 58 62 Q72 52 86 62 Q80 89 50 90 Q20 89 14 62Z" fill="#fff4e8"/>
    <path d="M33 54 Q29 63 33 72" stroke="#7a2a14" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M67 54 Q71 63 67 72" stroke="#7a2a14" stroke-width="5" fill="none" stroke-linecap="round"/>
    ${eyes}<ellipse cx="50" cy="67" rx="6" ry="4.2" fill="#1a1006"/>${mouth}
    ${mood === "happy" ? '<ellipse cx="22" cy="66" rx="5" ry="3" fill="#f08a6a" opacity=".6"/><ellipse cx="78" cy="66" rx="5" ry="3" fill="#f08a6a" opacity=".6"/>' : ""}
  </svg>`;
}
function cheerHTML(kind = "good", size = 64) {
  const c = pick(C.cheers[kind] || C.cheers.good);
  return `<div class="habre-say">${habre(kind === "bad" ? "sad" : "happy", size)}<button class="say-line" data-say="${esc(c.ne)}"><span class="ro">${esc(c.ro)}</span><span class="en">${esc(c.en)}</span></button></div>`;
}
function modal(html, btn = "Keep going") {
  const m = document.createElement("div"); m.className = "modal";
  m.innerHTML = `<div class="modal-in" role="dialog" aria-modal="true">${html}<button class="btn primary" data-close>${btn}</button></div>`;
  document.body.appendChild(m); m.querySelector("[data-close]").focus();
  m.addEventListener("click", e => { if (e.target === m || e.target.closest("[data-close]")) m.remove(); });
}

const RANKS = [
  { xp: 0, ne: "पाहुना", ro: "paahunaa", en: "Guest" },
  { xp: 150, ne: "यात्री", ro: "yaatri", en: "Traveller" },
  { xp: 400, ne: "पदयात्री", ro: "padayaatri", en: "Trekker" },
  { xp: 900, ne: "गाइड", ro: "gaaid", en: "Guide" },
  { xp: 1800, ne: "पर्वतारोही", ro: "parbataarohi", en: "Mountaineer" },
  { xp: 3500, ne: "नेपालीजस्तै", ro: "nepaalijastai", en: "Practically Nepali" }
];
const totalXP = () => Object.values(S.xp).reduce((a, b) => a + b, 0);
const rankOf = xp => RANKS.filter(r => xp >= r.xp).pop();
function levelUp(r) {
  Sfx.bowl(); celebrate(150);
  modal(`${habre("happy", 110)}<p class="eyebrow">New rank</p><h1>${esc(r.en)}</h1><button class="say-line" data-say="${esc(r.ne)}"><span class="ro">${esc(r.ro)}</span><span class="en">Tap to hear it in Nepali</span></button><p class="muted">You've earned ${r.xp} XP in total. Keep climbing.</p>`);
}

const QUESTS = [
  { id: "xp", text: "Earn 30 XP", key: "xp", n: 30 },
  { id: "listen", text: "Get 10 listening answers right", key: "listenOK", n: 10 },
  { id: "speak", text: "Say 5 phrases well", key: "speakOK", n: 5 },
  { id: "game", text: "Play a game", key: "game", n: 1 },
  { id: "step", text: "Finish a lesson step", key: "step", n: 1 },
  { id: "review", text: "Finish a review", key: "review", n: 1 },
  { id: "convo", text: "Finish a conversation or story", key: "convo", n: 1 },
  { id: "drill", text: "Hear 15 phrases in the hands-free drill", key: "drill", n: 15 },
  { id: "momo", text: "Serve 10 momos in Momo Rush", key: "momo", n: 10 },
  { id: "gram", text: "Pass a grammar chapter check", key: "gram", n: 1 },
  { id: "cult", text: "Read a culture article", key: "cult", n: 1 },
  { id: "build", text: "Build 5 sentences in Nepali order", key: "build", n: 5 },
  { id: "readq", text: "Pass a Read Nepali practice", key: "readq", n: 1 }
];
function questsFor(t = day()) {
  let seed = 7; for (const ch of t) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const pool = QUESTS.slice(), out = [];
  while (out.length < 3) { seed = (Math.imul(seed, 1103515245) + 12345) >>> 0; out.push(pool.splice(seed % pool.length, 1)[0]); }
  return out;
}
function track(k, n = 1) {
  if (!n) return;
  const t = day(), d = S.daily[t] || (S.daily[t] = {});
  d[k] = (d[k] || 0) + n; S.stats[k] = (S.stats[k] || 0) + n;
  const h = new Date().getHours(); if (h >= 22 || h < 4) S.stats.night = 1; if (h >= 4 && h < 7) S.stats.early = 1;
  save(); checkQuests(); checkBadges();
}
function checkQuests() {
  const t = day(), d = S.daily[t] || (S.daily[t] = {}); d.q = d.q || {};
  const qs = questsFor(t);
  qs.forEach(q => {
    if (d.q[q.id] || (d[q.key] || 0) < q.n) return;
    d.q[q.id] = 1; save(); Sfx.win(); toast("Quest complete: " + q.text + ". +10 XP"); addXP(10);
    if (qs.every(x => d.q[x.id])) {
      const gotFreeze = S.freezes < 2; if (gotFreeze) { S.freezes++; save(); }
      setTimeout(() => { celebrate(140); Sfx.bowl(); modal(`${habre("happy", 100)}<p class="eyebrow">Daily quests</p><h1>All three done!</h1><p class="muted">+20 bonus XP${gotFreeze ? " and a streak freeze. A freeze protects your streak if you miss a day" : ""}. See you tomorrow for new quests.</p>`); }, 900);
      addXP(20);
    }
  });
}
const reachedAll = lv => C.units.filter(u => u.level === lv).every(u => S.done[u.id + ":speak"]);
const BADGES = [
  { id: "first", name: "First steps", desc: "Finish your first lesson step", test: () => (S.stats.step || 0) >= 1 },
  { id: "ears50", name: "Big ears", desc: "Get 50 listening answers right", test: () => (S.stats.listenOK || 0) >= 50 },
  { id: "ears500", name: "Bat ears", desc: "Get 500 listening answers right", test: () => (S.stats.listenOK || 0) >= 500 },
  { id: "talk25", name: "Chatterbox", desc: "Say 25 phrases well", test: () => (S.stats.speakOK || 0) >= 25 },
  { id: "talk250", name: "Orator", desc: "Say 250 phrases well", test: () => (S.stats.speakOK || 0) >= 250 },
  { id: "streak3", name: "Warming up", desc: "Practise 3 days in a row", test: () => streak() >= 3 },
  { id: "streak7", name: "One week strong", desc: "Practise 7 days in a row", test: () => streak() >= 7 },
  { id: "streak30", name: "Monsoon-proof", desc: "Practise 30 days in a row", test: () => streak() >= 30 },
  { id: "momo", name: "Momo master", desc: "Serve 20 momos in one round of Momo Rush", test: () => (S.best.momo || 0) >= 20 },
  { id: "memory", name: "Elephant memory", desc: "Finish Memory Match in 10 moves or fewer", test: () => S.best.memory && S.best.memory <= 10 },
  { id: "haggle", name: "Haggler", desc: "Get 40% off at Bargain Bazaar", test: () => (S.best.bazaar || 0) >= 40 },
  { id: "pokhara", name: "Lakeside", desc: "Reach Pokhara", test: () => !!S.done["time:speak"] },
  { id: "a1", name: "Valley explorer", desc: "Reach every A1 stop", test: () => reachedAll("A1") },
  { id: "thorong", name: "Over the pass", desc: "Cross Thorong La at 5,416 m", test: () => !!S.done["hobby:speak"] },
  { id: "a2", name: "Circuit complete", desc: "Reach every A2 stop", test: () => reachedAll("A2") },
  { id: "ebc", name: "Base camp", desc: "Reach Everest Base Camp", test: () => reachedAll("B1") },
  { id: "convo", name: "Conversationalist", desc: "Finish every conversation", test: () => C.dialogues.every(d => S.dlg[d.id]) },
  { id: "stories", name: "Storyteller", desc: "Finish every listening story", test: () => (C.stories || []).every(s => S.story[s.id]) },
  { id: "miner", name: "Sentence miner", desc: "Add 10 phrases of your own", test: () => S.mine.length >= 10 },
  { id: "imm10", name: "Into the wild", desc: "Log 10 hours of real-world Nepali", test: () => immHours() >= 10 },
  { id: "gram5", name: "Rule follower", desc: "Pass 5 grammar chapters", test: () => gramCount() >= 5 },
  { id: "gramB1", name: "Sentence builder", desc: "Pass every A1 to B1 grammar chapter", test: () => (C.grammar || []).filter(g => ["A1", "A2", "B1"].includes(g.level)).every(g => gramPassed(g.id)) },
  { id: "gramAll", name: "Grammarian", desc: "Pass every grammar chapter, A1 to C2", test: () => (C.grammar || []).length > 0 && gramCount() === C.grammar.length },
  { id: "cult6", name: "Culture curious", desc: "Pass 6 culture checks", test: () => Object.values(S.cult).filter(x => x.pass).length >= 6 },
  { id: "cultAll", name: "Nepal insider", desc: "Pass every culture check", test: () => (C.culture || []).length > 0 && (C.culture || []).every(c => S.cult[c.id] && S.cult[c.id].pass) },
  { id: "reader", name: "Devanagari reader", desc: "Pass every Read Nepali group", test: () => (C.reading || []).length > 0 && (C.reading || []).every(g => S.read[g.id] && S.read[g.id].pass) },
  { id: "build50", name: "Sentence smith", desc: "Build 50 sentences correctly", test: () => (S.stats.build || 0) >= 50 },
  { id: "night", name: "Night owl", desc: "Practise after 10 pm", test: () => !!S.stats.night },
  { id: "early", name: "Early bird", desc: "Practise before 7 am", test: () => !!S.stats.early }
];
function checkBadges() {
  BADGES.forEach(b => {
    if (S.badges[b.id] || !b.test()) return;
    S.badges[b.id] = day(); save();
    setTimeout(() => { Sfx.win(); celebrate(70); toast("Badge earned: " + b.name); }, 500);
  });
}
function phraseOfDay() {
  const pool = C.units.filter(u => u.level !== "B1").flatMap(u => u.phrases).filter(p => p.ro.length > 8);
  let h = 0; for (const ch of day()) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return pool[h % pool.length];
}
function greetWord() { const h = new Date().getHours(); return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening"; }
const mountains = () => '<svg class="mtn" viewBox="0 0 120 48" preserveAspectRatio="none" aria-hidden="true"><path d="M0 48 L28 20 L40 30 L62 4 L84 32 L96 22 L120 48Z" fill="var(--mtn)"/><path d="M62 4 L71 16 L66 15 L62 20 L57 14 L53 15Z" fill="var(--snow)"/><path d="M28 20 L34 26 L30 25 L27 28 L24 24Z" fill="var(--snow)"/></svg>';
const medal = i => `<svg class="medal c${i % 5}" viewBox="0 0 48 56" aria-hidden="true"><path d="M14 0 H22 L28 18 H20Z M34 0 H26 L20 18 H28Z" fill="var(--medal-ribbon)"/><circle cx="24" cy="34" r="18" fill="var(--medal)"/><circle cx="24" cy="34" r="13" fill="none" stroke="var(--medal-ring)" stroke-width="2"/><path d="M24 25 L26.8 31 L33 31.6 L28.2 35.6 L29.6 42 L24 38.6 L18.4 42 L19.8 35.6 L15 31.6 L21.2 31Z" fill="var(--medal-ring)"/></svg>`;

/* ---------- router ---------- */
let cleanup = null;
function go(h) { if (location.hash === "#" + h) route(); else location.hash = h; }
function route() {
  if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
  Voice.stop(); Mic.stop();
  const h = (location.hash || "#home").slice(1); const [v, arg] = h.split(/-(.+)/);
  const view = VIEWS[v] || VIEWS.home;
  view(arg);
  window.scrollTo(0, 0); header();
}
window.addEventListener("hashchange", route);
document.addEventListener("click", e => {
  const g = e.target.closest("[data-go]"); if (g) { e.preventDefault(); go(g.dataset.go); return; }
  const s = e.target.closest("[data-say]"); if (s) { Voice.say(s.dataset.say, s.dataset.slow === "1"); }
});

/* ---------- views ---------- */
const VIEWS = {};
const HOOKS = {}; // filled by modules (daily.js)

VIEWS.home = () => {
  const due = dueList().length;
  const next = C.units.find(u => !S.done[u.id + ":speak"]) || C.units[C.units.length - 1];
  const nextMode = !S.done[next.id + ":learn"] ? "learn" : !S.done[next.id + ":listen"] ? "listen" : "speak";
  const verb = { learn: "Learn", listen: "Listening quiz", speak: "Speaking practice" }[nextMode];
  const stop = C.trail[next.id] || {};
  const xpAll = totalXP(), rk = rankOf(xpAll), nx = RANKS[RANKS.indexOf(rk) + 1];
  const hi = pick(C.cheers.hello), pd = phraseOfDay(), st = streak();
  const d = S.daily[day()] || {}, qd = d.q || {};
  $app.innerHTML = `
  <section class="hero">
    <div class="hero-row">${habre("happy", 88)}
      <div class="hero-txt"><p class="eyebrow">${greetWord()}</p>
        <button class="say-line big" data-say="${esc(hi.ne)}"><span class="ro">${esc(hi.ro)}</span><span class="en">${esc(hi.en)}</span></button></div>
    </div>
    <div class="rankbar">
      <div class="row split">
        <span><span class="eyebrow">Rank</span><br><b class="rank-name">${esc(rk.en)}</b> <button class="ro-chip" data-say="${esc(rk.ne)}">${esc(rk.ro)}</button></span>
        <span class="streak ${st ? "lit" : ""}" title="Days in a row">${I.flame}<b>${st}</b><small>day${st === 1 ? "" : "s"}${S.freezes ? `<br>${S.freezes} freeze${S.freezes > 1 ? "s" : ""}` : ""}</small></span>
      </div>
      <div class="progress"><i style="width:${nx ? Math.round((xpAll - rk.xp) / (nx.xp - rk.xp) * 100) : 100}%"></i></div>
      <p class="muted small">${nx ? `${xpAll} XP · ${nx.xp - xpAll} more to ${esc(nx.en)}` : `${xpAll} XP · top rank`}</p>
    </div>
  </section>
  ${HOOKS.home ? HOOKS.home() : ""}
  <section class="quests">
    <div class="row split"><h2>Today's quests</h2><span class="muted small">+10 XP each · all three: +20 XP and a streak freeze</span></div>
    ${questsFor().map(q => { const v = Math.min(q.n, d[q.key] || 0), ok = qd[q.id]; return `
      <div class="quest ${ok ? "ok" : ""}"><span class="qicon">${ok ? I.check : I.target}</span><span class="qbody"><span>${esc(q.text)}</span><span class="progress"><i style="width:${v / q.n * 100}%"></i></span></span><span class="qn">${v}/${q.n}</span></div>`; }).join("")}
  </section>
  <details class="explore"><summary>Explore on your own</summary>
  <section class="cards">
    <button class="card" data-go="${nextMode}-${next.id}"><span class="k">Continue the trek</span><h3>${esc(stop.place || next.title)}</h3><span class="muted">${esc(next.title)} · ${verb}</span></button>
    <button class="card" data-go="grammar"><span class="k">How Nepali works</span><h3>Grammar</h3><span class="muted">${gramCount()} of ${(C.grammar || []).length} chapters · A1 → C2</span></button>
    <button class="card" data-go="culture"><span class="k">Religion, festivals, food</span><h3>Culture</h3><span class="muted">${Object.keys(S.cult).length} of ${(C.culture || []).length} articles read</span></button>
    <button class="card" data-go="build"><span class="k">Word order</span><h3>Sentence builder</h3><span class="muted">Tap the words into Nepali order</span></button>
    <button class="card" data-go="read"><span class="k">Devanagari</span><h3>Read Nepali</h3><span class="muted">${Object.values(S.read).filter(x => x.pass).length} of ${(C.reading || []).length} letter groups</span></button>
    <button class="card" data-go="games"><span class="k">Play</span><h3>Games</h3><span class="muted">Momo Rush, Memory Match, Bargain Bazaar</span></button>
    <button class="card" data-go="review"><span class="k">Review</span><h3>${due ? due + " phrases due" : "Nothing due"}</h3><span class="muted">Bring phrases back before you forget</span></button>
    <button class="card" data-go="drill"><span class="k">Hands-free</span><h3>Listening drill</h3><span class="muted">Audio only, for walks and commutes</span></button>
    <button class="card" data-go="roleplays"><span class="k">Speak your part</span><h3>Role-plays</h3><span class="muted">Branching scenes and conversations</span></button>
    <button class="card" data-go="mono"><span class="k">Monthly check-in</span><h3>My recordings</h3><span class="muted">${Object.keys(S.mono || {}).length} month${Object.keys(S.mono || {}).length === 1 ? "" : "s"} recorded</span></button>
  </section>
  </details>
  <section class="potd">
    <p class="eyebrow">Phrase of the day</p>
    <div class="potd-row"><button class="hear sm" data-say="${esc(pd.ne)}" aria-label="Play">${I.speaker}</button>
      <div><p class="potd-ro">${esc(pd.ro)}</p><p>${esc(pd.en)}</p>${pd.note ? `<p class="note">${esc(pd.note)}</p>` : ""}</div></div>
  </section>
  ${nepalTodayHTML()}
  ${trailHTML()}
  <section class="cards">
    <button class="card" data-go="badges"><span class="k">Collection</span><h3>Badges</h3><span class="muted">${Object.keys(S.badges).length} of ${BADGES.length} earned</span></button>
    <button class="card" data-go="path"><span class="k">A1 → C2</span><h3>Your path</h3><span class="muted">${esc(levelNow())} now · ${immHours().toFixed(1)} h of real-world Nepali</span></button>
    <button class="card" data-go="mine"><span class="k">Sentence mining</span><h3>My phrases</h3><span class="muted">${S.mine.length ? S.mine.length + " phrases you added" : "Add phrases you hear in real life"}</span></button>
    <button class="card" data-go="sounds"><span class="k">Ear training</span><h3>Sounds of Nepali</h3><span class="muted">The sounds English doesn't have</span></button>
    <button class="card" data-go="settings"><span class="k">Voice, sound &amp; backup</span><h3>Settings</h3><span class="muted">${esc(Voice.label())}</span></button>
    ${S.settings.remind && S.settings.remind.on ? "" : `<button class="card" data-go="settings-remind"><span class="k">Stay on track</span><h3>Daily reminder</h3><span class="muted">Get a nudge on days you haven't practised</span></button>`}
  </section>`;
  if (HOOKS.homeWire) HOOKS.homeWire();
};

function trailHTML() {
  const cur = C.units.find(u => !S.done[u.id + ":speak"]);
  return C.regions.map(rg => {
    if (rg.level === "B2+") {
      const h = immHours(), pct = Math.min(100, Math.round(h / IMM_GOALS.C2 * 100));
      return `<section class="region"><div class="region-head">${mountains()}<div><p class="eyebrow">B2 → C2</p><h2>${esc(rg.name)}</h2><p class="muted">${esc(rg.blurb)}</p></div></div>
        <div class="trail"><button class="stop ${cur ? "ahead" : "current"}" data-go="path"><span class="pin">${cur ? I.peak : habre("happy", 40)}</span><span class="stop-body"><span class="place">The summit</span> <span class="alt">8,849 m</span><br><span class="lesson">${h.toFixed(1)} of ${IMM_GOALS.C2} hours of real-world Nepali · ${pct}%</span></span><span></span></button></div></section>`;
    }
    const us = C.units.filter(u => u.level === rg.level), lv = C.levels.find(l => l.id === rg.level);
    const dl = C.dialogues.filter(dd => (UNIT[dd.unit] || {}).level === rg.level), sts = (C.stories || []).filter(s => s.level === rg.level);
    return `<section class="region">
      <div class="region-head">${mountains()}<div><p class="eyebrow">${esc(lv.name)}</p><h2>${esc(rg.name)}</h2><p class="muted">${esc(rg.blurb)}</p></div></div>
      <div class="trail">${us.map(u => {
        const t = C.trail[u.id] || {}, done = !!S.done[u.id + ":speak"], here = u === cur;
        return `<button class="stop ${done ? "reached" : here ? "current" : "ahead"}" data-go="unit-${u.id}">
          <span class="pin">${here ? habre("happy", 40) : done ? I.check : ""}</span>
          <span class="stop-body"><span class="place">${esc(t.place || u.title)}</span> <span class="alt">${(t.alt || 0).toLocaleString("en-US")} m</span><br><span class="lesson">${esc(u.title)} · ${esc(u.sub)}</span></span>
          ${flagsHTML(unitFlags(u))}</button>`; }).join("")}</div>
      ${dl.length || sts.length ? `<div class="side"><p class="eyebrow">Side trips: conversations &amp; stories</p><div class="list">${dl.map(dd => `
        <button class="li" data-go="dialogue-${dd.id}"><span class="play-dot">${I.play}</span><span><span class="ro">${esc(dd.title)}</span><br><span class="en">Conversation · ${esc(dd.scene)}</span></span>${S.dlg[dd.id] ? '<span class="tick">Done</span>' : "<span></span>"}</button>`).join("")}${sts.map(s => `
        <button class="li" data-go="story-${s.id}"><span class="play-dot">${I.speaker}</span><span><span class="ro">${esc(s.title)}</span><br><span class="en">Listening story · ${esc(s.intro)}</span></span>${S.story[s.id] ? '<span class="tick">Done</span>' : "<span></span>"}</button>`).join("")}
      </div></div>` : ""}
    </section>`;
  }).join("");
}

function postcard(u, reached) {
  const t = C.trail[u.id] || {}, n = C.units.filter(x => x.level === u.level).indexOf(u) + 1;
  return `<section class="postcard">
    <div class="pc-sky">${mountains()}<span class="pc-alt">${(t.alt || 0).toLocaleString("en-US")} m</span></div>
    <div class="pc-body"><p class="eyebrow">${reached ? "You've reached" : `${esc(u.level)} · Stop ${n}`} · ${esc(t.place || "")}</p>
      ${reached ? `<h1>${esc(t.place || u.title)}</h1>` : `<h1>${esc(u.title)}</h1><p class="muted">${esc(u.sub)}</p>`}
      <p class="pc-fact">${esc(t.fact || "")}</p></div>
  </section>`;
}

VIEWS.games = () => {
  const b = S.best;
  $app.innerHTML = `
  ${backBtn("home", "Home")}
  <section><p class="eyebrow">Play</p><h1>Games</h1><p class="muted">Short, fast rounds that train your ear on the phrases you've learned. Every game counts towards your quests.</p></section>
  <section class="modes">
    <button class="card game-card" data-go="momo"><span class="gicon">${I.momo}</span><span class="k">Fast listening</span><h3>Momo Rush</h3><span class="muted">60 seconds. Hear it, tap the meaning, serve momos.</span>${b.momo ? `<span class="chip">Best ${b.momo} momos</span>` : ""}</button>
    <button class="card game-card" data-go="memory"><span class="gicon">${I.cards}</span><span class="k">Memory</span><h3>Memory Match</h3><span class="muted">Pair each Nepali sound with its meaning.</span>${b.memory ? `<span class="chip">Best ${b.memory} moves</span>` : ""}</button>
    <button class="card game-card" data-go="bazaar"><span class="gicon">${I.bag}</span><span class="k">Numbers &amp; haggling</span><h3>Bargain Bazaar</h3><span class="muted">Catch the price by ear, then haggle in Nepali.</span>${b.bazaar ? `<span class="chip">Best ${b.bazaar}% off</span>` : ""}</button>
  </section>
  <p class="muted small">Games use phrases you've already learned. Until you've learned a few, they use the Greetings lessons.</p>`;
};

VIEWS.badges = () => {
  const n = Object.keys(S.badges).length, xpAll = totalXP(), rk = rankOf(xpAll);
  const st = [["XP earned", xpAll], ["Day streak", streak()], ["Listening answers right", S.stats.listenOK || 0], ["Phrases said well", S.stats.speakOK || 0], ["Games played", S.stats.game || 0], ["Momos served", S.stats.momo || 0], ["Lesson stops reached", C.units.filter(u => S.done[u.id + ":speak"]).length + " / " + C.units.length]];
  $app.innerHTML = `
  ${backBtn("home", "Home")}
  <section><p class="eyebrow">Collection</p><h1>Badges</h1><p class="muted">${n} of ${BADGES.length} earned</p></section>
  <section class="badges">${BADGES.map((b, i) => { const got = S.badges[b.id]; return `<div class="badge ${got ? "got" : ""}">${medal(i)}<b>${esc(b.name)}</b><span class="muted small">${esc(b.desc)}</span>${got ? `<span class="tick small">${got}</span>` : ""}</div>`; }).join("")}</section>
  <section><h2>Ranks</h2><div class="list">${RANKS.map(r => `<button class="li" data-say="${esc(r.ne)}"><span class="play-dot">${I.speaker}</span><span><span class="ro">${esc(r.en)} · ${esc(r.ro)}</span><br><span class="en">From ${r.xp.toLocaleString("en-US")} XP</span></span>${r === rk ? '<span class="tick">You</span>' : "<span></span>"}</button>`).join("")}</div></section>
  <section><h2>Your numbers</h2><div class="statgrid">${st.map(([k, v]) => `<div><b>${v}</b><span class="muted small">${k}</span></div>`).join("")}</div></section>`;
};

/* ---------- levels & immersion ---------- */
const IMM_GOALS = { B2: 300, C1: 800, C2: 1500 };
const immHours = () => Object.values(S.imm).reduce((a, b) => a + b, 0) / 60;
function levelDone(lv) { const us = C.units.filter(u => u.level === lv); return us.length && us.every(u => S.done[u.id + ":speak"] && unitFlags(u)[3]); }
function levelNow() {
  let cur = "A1";
  for (const lv of LEVELS) { if (levelDone(lv)) cur = LEVELS[LEVELS.indexOf(lv) + 1] || "B2"; else return cur; }
  const h = immHours(); if (h >= IMM_GOALS.C1) return "C2"; if (h >= IMM_GOALS.B2) return "C1"; return "B2";
}
function levelPct(lv) {
  if (LEVELS.includes(lv)) { const us = C.units.filter(u => u.level === lv); const f = us.flatMap(u => unitFlags(u)); return f.filter(Boolean).length / f.length; }
  const prev = { B2: 0, C1: IMM_GOALS.B2, C2: IMM_GOALS.C1 }[lv]; return Math.max(0, Math.min(1, (immHours() - prev) / (IMM_GOALS[lv] - prev)));
}

VIEWS.path = () => {
  const today = S.imm[day()] || 0, cur = levelNow();
  $app.innerHTML = `
  ${backBtn("home", "Home")}
  <section><p class="eyebrow">A1 → C2</p><h1>Your path to fluency</h1>
    <p class="muted">The app takes you through A1, A2 and B1 with structured lessons. Beyond B1, progress comes from real Nepali: native audio, conversations, and reading. Log that time here so you can see it add up.</p></section>
  <section class="list" style="border-top:0;gap:10px">${C.levels.map(l => {
    const pct = Math.round(levelPct(l.id) * 100), here = l.id === cur;
    return `<div class="tips" style="${here ? "border-color:var(--accent)" : ""}">
      <div class="row split"><h3>${esc(l.name)}</h3><span class="chip">${here ? "You are here · " : ""}${pct}%</span></div>
      <p class="muted">${esc(l.can)}</p>
      <div class="progress"><i style="width:${pct}%"></i></div>
      <p class="muted" style="font-size:.85rem">${LEVELS.includes(l.id) ? "Earn all five flags on every " + l.id + " lesson to complete it." : "Goal: " + IMM_GOALS[l.id] + " hours of real-world Nepali in total (a rough guide, not a rule)."}</p>
      ${(() => { const gs = (C.grammar || []).filter(g => g.level === l.id); return gs.length ? `<button class="btn small ghost" data-go="grammar" style="justify-self:start">Grammar: ${gs.filter(g => gramPassed(g.id)).length} of ${gs.length} ${esc(l.id)} chapters passed</button>` : ""; })()}
    </div>`; }).join("")}</section>
  <section class="tips">
    <h3>Log real-world Nepali</h3>
    <p class="muted">Count anything outside the app: podcasts, news, songs, films, a call with a language partner.</p>
    <div class="row"><button class="btn small" data-imm="15">+15 min</button><button class="btn small" data-imm="30">+30 min</button><button class="btn small" data-imm="60">+1 hour</button><button class="btn small ghost" data-imm="-15">−15 min</button></div>
    <p><b id="immToday">${today}</b> min today · <b id="immTotal">${immHours().toFixed(1)}</b> hours in total</p>
  </section>
  <section class="tips"><h3>Learn to read when you reach B1</h3><p class="muted">You don't need the alphabet for A1 and A2. From B1 on, reading Devanagari lets you use subtitles, song lyrics and the news. Start by turning on <b>Show Nepali script</b> in Settings, so you see it next to every phrase you already know.</p></section>
  <section><h2>Free resources by level</h2><div class="list">${C.resources.map(r => `
    <a class="li" href="${esc(r.url)}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none"><span class="chip">${esc(r.level)}</span><span><span class="ro">${esc(r.title)}</span><br><span class="en">${esc(r.body)}</span></span><span class="muted">↗</span></a>`).join("")}</div></section>`;
  $app.querySelectorAll("[data-imm]").forEach(b => b.onclick = () => {
    const t = day(), n = +b.dataset.imm; S.imm[t] = Math.max(0, (S.imm[t] || 0) + n); save();
    if (n > 0) addXP(Math.round(n / 5));
    document.getElementById("immToday").textContent = S.imm[t]; document.getElementById("immTotal").textContent = immHours().toFixed(1);
  });
};

/* Stories: one voice, sentence by sentence, then comprehension questions */
VIEWS.story = id => {
  const s = STORY[id]; if (!s) return go("home");
  let showWords = false, showEn = false, now = -1, gen = 0, answers = {};
  const qs = s.questions.map(q => ({ ...q, opts: shuffle([q.a, ...q.o]) }));
  const draw = () => {
    const nAns = Object.keys(answers).length, right = Object.values(answers).filter(Boolean).length;
    $app.innerHTML = `
    ${backBtn("home", "Home")}
    <section><p class="eyebrow">${esc(s.level)} · Listening story</p><h1>${esc(s.title)}</h1><p class="muted">${esc(s.intro)}</p></section>
    <div class="banner">Listen twice with the words hidden, answer the questions, then show the words and listen once more.</div>
    <div class="row split">
      <div class="toggles"><button class="tog" id="tw" aria-pressed="${showWords}">Words</button><button class="tog" id="te" aria-pressed="${showEn}">English</button></div>
      <button class="btn small primary" id="all">${gen && now >= 0 ? I.pause + "Stop" : I.play + "Play story"}</button>
    </div>
    <div class="chat">${s.lines.map((l, k) => `<button class="bubble ${k === now ? "now" : ""}" data-k="${k}" style="max-width:100%"><span class="play-dot">${I.speaker}</span><span>${showWords ? `<span class="ro">${esc(l.ro)}</span>${S.settings.script ? `<br><span class="ne">${esc(l.ne)}</span>` : ""}` : `<span class="dots">• • • • •</span>`}${showEn ? `<br><span class="en">${esc(l.en)}</span>` : ""}</span></button>`).join("")}</div>
    <section><h2>Questions</h2>${qs.map((q, qi) => `
      <div class="tips"><h3>${esc(q.q)}</h3><div class="opts">${q.opts.map(o => {
        const st = answers[qi] === undefined ? "" : o === q.a ? "right" : (answers[qi] === false && o === q.picked ? "wrong" : "");
        return `<button class="opt ${st}" data-q="${qi}" data-o="${esc(o)}" ${answers[qi] !== undefined ? "disabled" : ""}>${esc(o)}</button>`; }).join("")}</div></div>`).join("")}
      ${nAns === qs.length ? `<p class="verdict ${right === qs.length ? "good" : right ? "ok" : "bad"}">${right} of ${qs.length} right</p>` : ""}
    </section>`;
    const $ = x => document.getElementById(x);
    $("tw").onclick = () => { showWords = !showWords; draw(); };
    $("te").onclick = () => { showEn = !showEn; draw(); };
    $("all").onclick = () => { if (gen && now >= 0) { gen++; now = -1; Voice.stop(); draw(); } else play(); };
    $app.querySelectorAll(".bubble").forEach(b => b.onclick = () => { now = +b.dataset.k; draw(); Voice.say(s.lines[now].ne); });
    $app.querySelectorAll("[data-q]").forEach(b => b.onclick = () => {
      const qi = +b.dataset.q, q = qs[qi]; if (answers[qi] !== undefined) return;
      q.picked = b.dataset.o; answers[qi] = q.picked === q.a; if (answers[qi]) addXP(2);
      if (Object.keys(answers).length === qs.length && Object.values(answers).filter(Boolean).length >= qs.length - 1 && !S.story[id]) { S.story[id] = true; save(); addXP(10); track("convo"); celebrate(); Sfx.win(); toast("Story complete"); }
      const y = window.scrollY; draw(); window.scrollTo(0, y);
    });
  };
  const play = async () => {
    const g = ++gen;
    for (let k = 0; k < s.lines.length; k++) { if (g !== gen) return; now = k; draw(); await Voice.say(s.lines[k].ne); await sleep(700); }
    if (g !== gen) return; now = -1; gen = 0; draw();
  };
  cleanup = () => { gen++; };
  draw();
};

/* My phrases: add what you hear in real life */
async function toDeva(roman) {
  const r = await fetch("https://inputtools.google.com/request?itc=ne-t-i0-und&num=1&cp=0&cs=1&ie=utf-8&oe=utf-8&text=" + encodeURIComponent(roman));
  const j = await r.json(); if (j[0] !== "SUCCESS") throw new Error("no result");
  return j[1].map(x => x[1][0]).join(" ");
}
VIEWS.mine = () => {
  const draw = () => {
    $app.innerHTML = `
    ${backBtn("home", "Home")}
    <section><p class="eyebrow">Sentence mining</p><h1>My phrases</h1><p class="muted">Heard something useful in a podcast, a film or a chat? Add it here. It joins your review and the hands-free drill. This is how advanced learners keep growing after the lessons run out.</p></section>
    <section class="tips">
      <div class="field" style="border:0;padding-top:0"><label for="mro">Nepali, as you'd write it in English letters</label><input id="mro" class="inp" placeholder="e.g. ma bholi aaunchhu" autocomplete="off"></div>
      <div class="row"><button class="btn small" id="conv">Get Nepali script and audio</button><span class="muted" id="cst"></span></div>
      <div class="field" style="border:0"><label for="mne">Nepali script (check it, or paste it yourself)</label><input id="mne" class="inp deva" placeholder="म भोलि आउँछु"></div>
      <div class="field" style="border:0"><label for="men">Meaning in English</label><input id="men" class="inp" placeholder="I'll come tomorrow"></div>
      <div class="row"><button class="btn small" id="hearit">${I.speaker}Hear it</button><button class="btn primary" id="add">Add phrase</button></div>
      <p class="muted" style="font-size:.85rem">Needs the internet to convert and to play the first time. Converting from English letters can guess wrong, so listen and check before saving.</p>
    </section>
    <section><h2>${S.mine.length} saved</h2>${S.mine.length ? `<div class="row"><button class="btn small" data-go="review">Review them</button><button class="btn small" data-go="drill">Use in the drill</button></div>` : ""}
      <div class="list">${S.mine.slice().reverse().map(p => `<div class="li"><button class="play-dot" data-say="${esc(p.ne)}" aria-label="Play">${I.speaker}</button><span><span class="ro">${esc(p.ro)}</span><br><span class="en">${esc(p.en)}</span></span><button class="btn small ghost" data-del="${esc(p.id)}">Delete</button></div>`).join("")}</div></section>`;
    const $ = x => document.getElementById(x);
    $("conv").onclick = async () => {
      const ro = $("mro").value.trim(); if (!ro) return $("mro").focus();
      $("cst").textContent = "Converting…";
      try { $("mne").value = await toDeva(ro); $("cst").textContent = ""; Voice.say($("mne").value); }
      catch (e) { $("cst").textContent = "Couldn't convert. Check your connection, or paste the Nepali script."; }
    };
    $("hearit").onclick = () => { const n = $("mne").value.trim(); if (n) Voice.say(n); };
    $("add").onclick = () => {
      const n = $("mne").value.trim(), en = $("men").value.trim(); let ro = $("mro").value.trim();
      if (!n || !en) { toast("Add the Nepali script and the English meaning first."); return; }
      if (!ro) ro = translit(n);
      const p = { id: "u" + Date.now().toString(36), ne: n, ro, en };
      S.mine.push(p); indexAll(); introduce(p.id); S.srs[p.id].due = Date.now(); save(); addXP(2); Voice.prefetch(n); toast("Added to your review"); draw();
    };
    $app.querySelectorAll("[data-del]").forEach(b => b.onclick = () => { S.mine = S.mine.filter(p => p.id !== b.dataset.del); delete S.srs[b.dataset.del]; S.gone[b.dataset.del] = 1; save(); indexAll(); draw(); });
  };
  draw();
};

VIEWS.unit = id => {
  const u = UNIT[id]; if (!u) return go("home");
  const f = unitFlags(u), dl = C.dialogues.filter(d => d.unit === id);
  $app.innerHTML = `
  ${backBtn("home", "Trail")}
  ${postcard(u, false)}
  <section>${flagsHTML(f, true)}<div class="legend">${FLAG_NAMES.map((n, i) => `<span class="${f[i] ? "on" : ""}">${n}</span>`).join("")}</div></section>
  <section class="modes">
    <button class="card ${!f[0] ? "lead" : ""}" data-go="learn-${id}"><span class="k">1 · Learn</span><h3>Hear and repeat</h3><span class="muted">${u.phrases.length} phrases, one at a time</span></button>
    <button class="card ${f[0] && !f[1] ? "lead" : ""}" data-go="listen-${id}"><span class="k">2 · Listen</span><h3>Listening quiz</h3><span class="muted">Hear it, pick the meaning</span></button>
    <button class="card ${f[1] && !f[2] ? "lead" : ""}" data-go="speak-${id}"><span class="k">3 · Speak</span><h3>Say it in Nepali</h3><span class="muted">${Mic.ok ? "Your speech is checked" : "Say it aloud, then check"}</span></button>
  </section>
  <section class="tips"><h3>How it works</h3><ul>${u.tips.map(t => `<li>${t}</li>`).join("")}</ul></section>
  ${(() => { const L = (C.unitLinks || {})[id]; if (!L) return ""; const c = (C.culture || []).find(x => x.id === L.c), g = (C.grammar || []).find(x => x.id === L.g); return `<section><h2>Go deeper</h2><div class="cards">${c ? `<button class="card fact-card" data-go="cult-${c.id}">${(C.art || {})[c.art] ? `<span class="artbox thumb">${C.art[c.art]}</span>` : ""}<span class="k">Culture corner</span><h3>${esc(c.title)}</h3><span class="muted small">${esc(c.sub)}</span></button>` : ""}${g ? `<button class="card" data-go="gram-${g.id}"><span class="k">Grammar for this lesson · ${esc(g.level)}</span><h3>${esc(g.title)}</h3><span class="muted small">${esc(g.sub)}</span></button>` : ""}</div></section>`; })()}
  ${dl.length ? `<section><h2>Conversations</h2><div class="list">${dl.map(d => `<button class="li" data-go="dialogue-${d.id}"><span class="play-dot">${I.play}</span><span><span class="ro">${esc(d.title)}</span><br><span class="en">${esc(d.scene)}</span></span>${S.dlg[d.id] ? '<span class="tick">Done</span>' : "<span></span>"}</button>`).join("")}</div></section>` : ""}
  <section><h2>All phrases</h2><div class="list">${u.phrases.map(p => `
    <button class="li" data-say="${esc(p.ne)}"><span class="play-dot">${I.speaker}</span><span><span class="ro">${esc(p.ro)}</span><br><span class="en">${esc(p.en)}</span></span>${S.settings.script ? `<span class="ne">${esc(p.ne)}</span>` : "<span></span>"}</button>`).join("")}</div></section>`;
};

/* Learn: one card at a time, auto-play, shadow with your own recording */
VIEWS.learn = id => {
  const u = UNIT[id]; if (!u) return go("home");
  let i = 0, mine = null;
  const draw = () => {
    const p = u.phrases[i];
    $app.innerHTML = `
    ${backBtn("unit-" + id, u.title)}
    <div class="progress" aria-hidden="true"><i style="width:${(i + 1) / u.phrases.length * 100}%"></i></div>
    <div class="stage">
      <p class="q">${i + 1} of ${u.phrases.length} · listen, then say it out loud</p>
      <button class="hear" id="play" aria-label="Play">${I.speaker}</button>
      <p class="big-ro">${esc(p.ro)}</p>${ne(p)}
      <p class="big-en">${esc(p.en)}</p>
      ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
      <div class="row" style="justify-content:center">
        <button class="btn small" id="slow">${I.slow}Slowly</button>
        ${Rec.ok ? `<button class="btn small" id="rec">${I.mic}Record myself</button>` : ""}
        <button class="btn small" id="mine" ${mine ? "" : "hidden"}>${I.play}My try</button>
      </div>
      <p class="note" id="recnote" ${mine ? "" : "hidden"}>Compare: play the native voice, then your try. Match the rhythm, not just the sounds.</p>
    </div>
    <div class="row split">
      <button class="btn" id="prev" ${i ? "" : "disabled"}>Previous</button>
      <button class="btn primary" id="next">${i < u.phrases.length - 1 ? "Next" : "Finish"}</button>
    </div>`;
    const $ = s => document.getElementById(s);
    $("play").onclick = () => Voice.say(p.ne);
    $("slow").onclick = () => Voice.say(p.ne, true);
    if ($("rec")) $("rec").onclick = async () => {
      if (Rec.on) { mine = await Rec.stop(); $("rec").innerHTML = I.mic + "Record myself"; $("mine").hidden = false; $("recnote").hidden = false; return; }
      try { Voice.stop(); await Rec.start(); $("rec").innerHTML = I.stop + "Stop"; } catch (e) { toast("Microphone blocked. Allow it in the browser to record yourself."); }
    };
    $("mine").onclick = () => { if (mine) { Voice.stop(); new Audio(mine).play(); } };
    $("prev").onclick = () => { if (i) { i--; mine = null; draw(); } };
    $("next").onclick = () => {
      introduce(p.id);
      if (i < u.phrases.length - 1) { i++; mine = null; draw(); }
      else { u.phrases.forEach(q => introduce(q.id)); const first = !S.done[id + ":learn"]; S.done[id + ":learn"] = true; save(); addXP(first ? 5 : 2); track("step"); finish(`You've heard all ${u.phrases.length} phrases`, "Next: the listening quiz. You'll only hear the audio this time.", id, "listen"); }
    };
    if (u.phrases[i + 1]) Voice.prefetch(u.phrases[i + 1].ne);
    Voice.say(p.ne);
  };
  cleanup = () => { if (Rec.on) Rec.stop(); };
  draw();
};

function finish(title, sub, unitId, nextMode, extra = "", win = true) {
  const u = UNIT[unitId];
  if (win) { Sfx.win(); celebrate(); }
  $app.innerHTML = `
  <div class="stage">
    ${cheerHTML(win ? "good" : "bad", 96)}
    ${u ? flagsHTML(unitFlags(u), true) : ""}
    <h1>${esc(title)}</h1><p class="muted">${esc(sub)}</p>${extra}
    <div class="row" style="justify-content:center">
      ${nextMode ? `<button class="btn primary" data-go="${nextMode}-${unitId}">Continue</button>` : ""}
      ${u ? `<button class="btn" data-go="unit-${unitId}">Back to lesson</button>` : `<button class="btn" data-go="home">Home</button>`}
    </div>
  </div>`;
  header();
}

/* Generic quiz engine. item types: meaning | heard | speak */
function quiz({ items, pool, title, backTo, backLabel, onDone, at = 0, of }) {
  let i = 0, right = 0, answered = false, selfMode = !Mic.ok, combo = 0;
  const react = ok => { if (ok) { combo++; Sfx.good(combo); } else { combo = 0; Sfx.bad(); } };
  const comboChip = () => combo >= 3 ? `<p class="combo">${combo} in a row!</p>` : "";
  const total = items.length;
  const draw = () => {
    answered = false;
    const it = items[i], p = it.p;
    const top = `${backBtn(backTo, backLabel)}<div class="progress" aria-hidden="true"><i style="width:${(at + i) / (of || total) * 100}%"></i></div>`;
    if (it.type === "speak") {
      $app.innerHTML = `${top}
      <div class="stage">
        <p class="q">${esc(title)} · ${at + i + 1} of ${of || total} · say it in Nepali</p>
        <p class="prompt">${esc(p.en)}</p>
        <button class="btn small ghost" id="hint">Show hint</button>
        <p class="big-ro blur" id="hintText" hidden aria-hidden="true">${esc(p.ro)}</p>
        ${selfMode
          ? `<p class="muted">Say it out loud, then check.</p><button class="btn primary" id="check">I said it. Show me</button>`
          : `<button class="hear mic" id="mic" aria-label="Speak">${I.mic}</button><p class="muted" id="micTip">Tap, then speak</p>`}
        <div id="res" class="reveal" hidden></div>
      </div>
      <div class="row split"><button class="btn ghost" id="skip">Skip</button><button class="btn primary" id="next" hidden>Next</button></div>`;
      const $ = s => document.getElementById(s);
      $("hint").onclick = () => { $("hintText").hidden = false; $("hintText").classList.remove("blur"); $("hint").hidden = true; it.hinted = true; };
      const reveal = (html) => {
        $("res").hidden = false;
        $("res").innerHTML = html + `<p class="big-ro">${esc(p.ro)}</p>${ne(p)}<div class="row" style="justify-content:center"><button class="btn small" data-say="${esc(p.ne)}">${I.speaker}Again</button><button class="btn small" data-say="${esc(p.ne)}" data-slow="1">${I.slow}Slowly</button></div>`;
        $("hintText").hidden = true; $("hint").hidden = true;
        Voice.say(p.ne);
      };
      if (selfMode) {
        $("check").onclick = () => {
          $("check").hidden = true;
          reveal(`<p class="muted">Did you say it right?</p><div class="row" style="justify-content:center"><button class="btn small" id="no">Not yet</button><button class="btn small primary" id="yes">Got it</button></div>`);
          $("yes").onclick = () => mark(true); $("no").onclick = () => mark(false);
        };
      } else {
        let tries = 0;
        $("mic").onclick = async () => {
          const m = $("mic"); if (m.classList.contains("listening")) { Mic.stop(); return; }
          Voice.stop(); m.classList.add("listening"); $("micTip").textContent = "Listening… speak now";
          try {
            const alts = await Mic.listen(); m.classList.remove("listening"); tries++;
            const r = score(p.ne, alts), pct = Math.round(r.s * 100);
            const cls = pct >= 85 ? "good" : pct >= 70 ? "ok" : "bad";
            const word = pct >= 85 ? "Great!" : pct >= 70 ? "Close" : "Not quite";
            $("micTip").textContent = cls === "good" ? "Tap to try again" : "Listen, then tap to try again";
            reveal(`<p class="verdict ${cls}">${word} · ${pct}%</p><div class="meter"><i style="width:${pct}%;background:var(--${cls === "ok" ? "accent" : cls})"></i></div><p class="heard">I heard: <b>${esc(translit(normDeva(r.heard)) || "…")}</b></p>`);
            if (!answered && (pct >= 70 || tries >= 3)) { answered = true; const ok = pct >= 70; if (ok) { right++; track("speakOK"); } react(ok); if (ok && combo >= 3) $("res").insertAdjacentHTML("afterbegin", comboChip()); grade(p.id, ok && !it.hinted); addXP(ok ? (pct >= 85 ? 3 : 2) : 0); $("next").hidden = false; $("skip").hidden = true; }
          } catch (err) {
            m.classList.remove("listening"); $("micTip").textContent = "Tap, then speak";
            const msg = micError(err); toast(msg);
            if (!Mic.ok) { selfMode = true; draw(); }
          }
        };
      }
      const mark = ok => { if (answered) return; answered = true; if (ok) { right++; track("speakOK"); } react(ok); grade(p.id, ok && !it.hinted); if (ok) addXP(2); setTimeout(advance, ok ? 350 : 0); };
      $("skip").onclick = () => { if (!answered) grade(p.id, false); advance(); };
      $("next").onclick = advance;
    } else {
      const opts = shuffle([p, ...shuffle(pool.filter(q => q.id !== p.id && q.en !== p.en && q.ro !== p.ro)).slice(0, 3)]);
      const field = it.type === "meaning" ? "en" : "ro";
      $app.innerHTML = `${top}
      <div class="stage">
        <p class="q">${esc(title)} · ${at + i + 1} of ${of || total} · ${it.type === "meaning" ? "what does it mean?" : "which one did you hear?"}</p>
        <button class="hear" id="play" aria-label="Play again">${I.speaker}</button>
        <button class="btn small ghost" id="slow">${I.slow}Slowly</button>
        <div class="opts">${opts.map(o => `<button class="opt" data-id="${o.id}">${esc(o[field])}</button>`).join("")}</div>
        <div id="res" class="reveal" hidden></div>
      </div>
      <div class="row end"><button class="btn primary" id="next" hidden>Next</button></div>`;
      const $ = s => document.getElementById(s);
      $("play").onclick = () => Voice.say(p.ne); $("slow").onclick = () => Voice.say(p.ne, true);
      $app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        if (answered) return; answered = true;
        const ok = b.dataset.id === p.id; if (ok) right++;
        $app.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (x.dataset.id === p.id) x.classList.add("right"); });
        if (!ok) b.classList.add("wrong");
        grade(p.id, ok); react(ok); if (ok) { addXP(1); track("listenOK"); }
        $("res").hidden = false; $("res").innerHTML = `${comboChip()}${cheerHTML(ok ? "good" : "bad", 48)}<p class="verdict ${ok ? "good" : "bad"}">${ok ? "Correct" : "Not this time"}</p><p class="big-ro">${esc(p.ro)}</p>${ne(p)}<p>${esc(p.en)}</p>${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}`;
        $("next").hidden = false; $("next").focus();
      });
      $("next").onclick = advance;
      Voice.say(p.ne);
    }
    const nx = items[i + 1]; if (nx) Voice.prefetch(nx.p.ne);
  };
  const advance = () => { i++; if (i < total) draw(); else onDone(right, total); };
  draw();
}

function pickItems(u, n) { const ps = shuffle(u.phrases); while (ps.length < n) ps.push(...shuffle(u.phrases)); return ps.slice(0, n); }

VIEWS.listen = id => {
  const u = UNIT[id]; if (!u) return go("home");
  const items = pickItems(u, Math.min(10, u.phrases.length)).map((p, k) => ({ p, type: k % 3 === 2 ? "heard" : "meaning" }));
  quiz({ items, pool: u.phrases, title: u.title, backTo: "unit-" + id, backLabel: u.title, onDone: (r, t) => {
    const pass = r / t >= 0.7; if (pass) { const first = !S.done[id + ":listen"]; S.done[id + ":listen"] = true; save(); if (first) addXP(5); track("step"); }
    finish(`${r} of ${t} right`, pass ? "Your ear is getting there. Next: say these phrases yourself." : "Get 7 of 10 to earn the flag. Each try trains your ear.", id, pass ? "speak" : "listen", "", pass);
  } });
};

VIEWS.speak = id => {
  const u = UNIT[id]; if (!u) return go("home");
  const items = pickItems(u, Math.min(8, u.phrases.length)).map(p => ({ p, type: "speak" }));
  quiz({ items, pool: u.phrases, title: u.title, backTo: "unit-" + id, backLabel: u.title, onDone: (r, t) => {
    const pass = r / t >= 0.6; let arrived = false;
    if (pass) { arrived = !S.done[id + ":speak"]; S.done[id + ":speak"] = true; save(); if (arrived) addXP(5); track("step"); }
    const nextU = C.units[C.units.indexOf(u) + 1], nt = nextU && C.trail[nextU.id];
    $app.innerHTML = ""; finish(`${r} of ${t} said well`, pass ? "Flag earned. These phrases now go into your review, which brings them back before you forget." : "Get 5 of 8 to earn the flag. Try the slow audio, then copy it.", id, pass ? null : "speak",
      (arrived ? postcard(u, true) : "") + (pass && nextU ? `<button class="btn primary" data-go="unit-${nextU.id}">Trek on to ${esc(nt ? nt.place : nextU.title)}</button>` : ""), pass);
    if (arrived) setTimeout(() => Sfx.bowl(), 900);
  } });
};

VIEWS.review = () => {
  let ps = dueList(), extra = false;
  if (!ps.length) { ps = seenList(); extra = true; }
  if (!ps.length) {
    $app.innerHTML = `${backBtn("home", "Home")}<div class="stage"><h1>Your review is empty</h1><p class="muted">Learn your first lesson. Its phrases come back here a few hours later, then after 1, 3, 7, 16 and 35 days.</p><button class="btn primary" data-go="learn-${C.units[0].id}">Start: ${esc(C.units[0].title)}</button></div>`;
    return;
  }
  ps = shuffle(ps).slice(0, extra ? 10 : 20);
  const pool = seenList().length >= 4 ? seenList() : ALL;
  const items = ps.map((p, k) => ({ p, type: ["meaning", "speak", "heard"][k % 3] }));
  quiz({ items, pool, title: extra ? "Extra practice" : "Review", backTo: "home", backLabel: "Home", onDone: (r, t) => {
    addXP(3); track("review");
    finish(`${r} of ${t} right`, dueList().length ? `${dueList().length} more due. Missed phrases come back in 10 minutes.` : "All caught up. Missed phrases come back in 10 minutes; the rest when they're due.", null, null, `<button class="btn primary" data-go="review">Review more</button>`, r / t >= 0.6);
  } });
  if (extra) toast("Nothing is due, so here's extra practice.");
};

/* Dialogues: listen first (text hidden), then role-play as B */
VIEWS.dialogue = id => {
  const d = DLG[id]; if (!d) return go("home");
  const u = UNIT[d.unit];
  let showWords = false, showEn = false, now = -1, running = false, rp = null;
  const draw = () => {
    $app.innerHTML = `
    ${backBtn(u ? "unit-" + u.id : "home", u ? u.title : "Home")}
    <section><p class="eyebrow">Conversation</p><h1>${esc(d.title)}</h1><p class="muted">${esc(d.scene)} You are the person on the right.</p></section>
    <div class="banner">Step 1: press <b>Play all</b> with the words hidden and see what you catch. Step 2: show the words. Step 3: <b>Role-play</b> your part.</div>
    <div class="row split">
      <div class="toggles"><button class="tog" id="tw" aria-pressed="${showWords}">Words</button><button class="tog" id="te" aria-pressed="${showEn}">English</button></div>
      <div class="row"><button class="btn small" id="all">${running && !rp ? I.pause + "Stop" : I.play + "Play all"}</button><button class="btn small primary" id="rp">${rp ? I.stop + "Stop" : I.mic + "Role-play"}</button></div>
    </div>
    <div class="chat">${d.lines.map((l, k) => {
      const me = l.who === "B", hideB = rp && me && k >= now && !(rp.revealed || {})[k];
      return `<button class="bubble ${me ? "me" : ""} ${k === now ? "now" : ""}" data-k="${k}">
        <span class="play-dot">${I.speaker}</span>
        <span><span class="who">${me ? "You" : "Them"}</span><br>
        ${hideB ? `<span class="ro">${esc(l.en)}</span><br><span class="en">${k === now ? "Your turn: say it in Nepali" : "Your line"}</span>`
          : (showWords || (rp && (rp.revealed || {})[k]) ? `<span class="ro">${esc(l.ro)}</span>${S.settings.script ? `<br><span class="ne">${esc(l.ne)}</span>` : ""}` : `<span class="dots">• • • • •</span>`)
            + (showEn ? `<br><span class="en">${esc(l.en)}</span>` : "")}
        </span></button>`;
    }).join("")}</div>
    <div id="rpbar"></div>`;
    const $ = s => document.getElementById(s);
    $("tw").onclick = () => { showWords = !showWords; draw(); };
    $("te").onclick = () => { showEn = !showEn; draw(); };
    $("all").onclick = () => { if (running) { stopAll(); } else playAll(); };
    $("rp").onclick = () => { if (rp) stopAll(); else rolePlay(); };
    $app.querySelectorAll(".bubble").forEach(b => b.onclick = () => { if (running) return; now = +b.dataset.k; draw(); Voice.say(d.lines[now].ne); });
    if (rp && rp.bar) $("rpbar").innerHTML = rp.bar;
    if (rp && rp.wire) rp.wire();
  };
  let gen = 0;
  const stopAll = () => { gen++; running = false; rp = null; now = -1; Voice.stop(); Mic.stop(); draw(); };
  const playAll = async () => {
    const g = ++gen; running = true;
    for (let k = 0; k < d.lines.length; k++) { if (g !== gen) return; now = k; draw(); await Voice.say(d.lines[k].ne); await sleep(500); }
    if (g !== gen) return; running = false; now = -1; draw();
  };
  const waitUser = (bar, wire) => new Promise(res => { rp.bar = bar; rp.wire = () => wire(res); draw(); });
  const rolePlay = async () => {
    const g = ++gen; running = true; rp = { revealed: {} }; let good = 0, mine = 0;
    for (let k = 0; k < d.lines.length; k++) {
      if (g !== gen) return;
      const l = d.lines[k]; now = k; rp.bar = ""; rp.wire = null; draw();
      if (l.who === "A") { await Voice.say(l.ne); await sleep(400); continue; }
      mine++;
      let res = null;
      if (Mic.ok) {
        res = await waitUser(`<div class="stage"><p class="muted">Say: <b>${esc(l.en)}</b></p><button class="hear mic" id="rpmic" aria-label="Speak">${I.mic}</button><div class="row" style="justify-content:center"><button class="btn small ghost" id="rphint">Hint</button><button class="btn small ghost" id="rpskip">Skip</button></div><p class="muted" id="rptip"></p></div>`, done => {
          const b = document.getElementById("rpmic");
          document.getElementById("rphint").onclick = () => { document.getElementById("rptip").textContent = l.ro; };
          document.getElementById("rpskip").onclick = () => done({ s: 0 });
          b.onclick = async () => {
            b.classList.add("listening");
            try { const alts = await Mic.listen(); done(score(l.ne, alts)); }
            catch (err) { b.classList.remove("listening"); const m = micError(err); toast(m); if (!Mic.ok) done({ s: -1 }); }
          };
        });
      }
      if (g !== gen) return;
      if (!res || res.s < 0) {
        res = await waitUser(`<div class="stage"><p class="muted">Say it out loud: <b>${esc(l.en)}</b></p><button class="btn primary" id="rpok">I said it</button></div>`, done => { document.getElementById("rpok").onclick = () => done({ s: 1, self: true }); });
      }
      if (g !== gen) return;
      if (res.s >= 0.7) good++;
      rp.revealed[k] = true; rp.bar = res.self ? "" : `<p class="verdict ${res.s >= 0.85 ? "good" : res.s >= 0.7 ? "ok" : "bad"}" style="text-align:center">${Math.round(res.s * 100)}%</p>`; rp.wire = null; draw();
      await Voice.say(l.ne); await sleep(500);
    }
    if (g !== gen) return;
    const first = !S.dlg[id]; S.dlg[id] = true; save(); addXP(first ? 10 : 3); track("convo");
    running = false; rp = null; now = -1;
    finish("Conversation complete", Mic.ok ? `${good} of ${mine} of your lines were clear.` : "Do it again tomorrow without hints.", d.unit, null, `<button class="btn primary" data-go="dialogue-${id}">Again</button>`);
  };
  cleanup = () => { gen++; };
  draw();
};

/* Hands-free drill */
VIEWS.drill = () => {
  const learned = C.units.filter(u => S.done[u.id + ":learn"]).map(u => u.id);
  let sel = new Set(learned.length ? learned : [C.units[0].id]);
  let on = false, showText = true, count = 0, cur = null, g = 0, wake = null;
  const draw = () => {
    $app.innerHTML = `
    ${backBtn("home", "Home")}
    <section><p class="eyebrow">Hands-free</p><h1>Listening drill</h1><p class="muted">Plays phrases on a loop with gaps for you to repeat. Keep this screen open.</p></section>
    <section><h3>Lessons</h3>${LEVELS.map(lv => `<p class="eyebrow">${lv}</p><div class="toggles">${C.units.filter(u => u.level === lv).map(u => `<button class="tog" data-u="${u.id}" aria-pressed="${sel.has(u.id)}">${esc(u.title)}</button>`).join("")}</div>`).join("")}${S.mine.length ? `<p class="eyebrow">Mine</p><div class="toggles"><button class="tog" data-u="mine" aria-pressed="${sel.has("mine")}">My phrases (${S.mine.length})</button></div>` : ""}</section>
    <section><h3>Order</h3><div class="toggles">
      <button class="tog" data-m="ne-en" aria-pressed="${S.settings.drill === "ne-en"}">Nepali, then English</button>
      <button class="tog" data-m="en-ne" aria-pressed="${S.settings.drill === "en-ne"}">English, you say it, then Nepali</button>
      <button class="tog" data-m="shadow" aria-pressed="${S.settings.drill === "shadow"}">Nepali twice, you repeat</button></div>
      <label class="muted" for="gap">Gap to speak: <b id="gapv">${S.settings.gap}s</b></label><input type="range" id="gap" min="1" max="6" step="0.5" value="${S.settings.gap}">
      <label class="switch"><input type="checkbox" id="st" ${showText ? "checked" : ""}> Show text</label>
    </section>
    <div class="stage">
      <p class="q" id="dcount">${count} phrases played</p>
      <p class="big-ro" id="dro">${cur && showText ? esc(cur.ro) : on ? "…" : "Press play"}</p>
      <p class="big-en" id="den">${cur && showText ? esc(cur.en) : ""}</p>
      <button class="hear" id="go" aria-label="${on ? "Stop" : "Start"}">${on ? I.pause : I.play}</button>
    </div>`;
    $app.querySelectorAll("[data-u]").forEach(b => b.onclick = () => { const u = b.dataset.u; sel.has(u) ? sel.delete(u) : sel.add(u); if (!sel.size) sel.add(u); b.setAttribute("aria-pressed", sel.has(u)); });
    $app.querySelectorAll("[data-m]").forEach(b => b.onclick = () => { S.settings.drill = b.dataset.m; save(); $app.querySelectorAll("[data-m]").forEach(x => x.setAttribute("aria-pressed", x === b)); });
    document.getElementById("gap").oninput = e => { S.settings.gap = +e.target.value; save(); document.getElementById("gapv").textContent = S.settings.gap + "s"; };
    document.getElementById("st").onchange = e => { showText = e.target.checked; paint(); };
    document.getElementById("go").onclick = () => on ? stop() : start();
  };
  const paint = () => {
    const r = document.getElementById("dro"); if (!r) return;
    r.textContent = cur && showText ? cur.ro : on ? "…" : "Press play";
    document.getElementById("den").textContent = cur && showText ? cur.en : "";
    document.getElementById("dcount").textContent = count + " phrases played";
  };
  const stop = () => { g++; on = false; Voice.stop(); if (wake) { wake.release().catch(() => {}); wake = null; } draw(); };
  const start = async () => {
    on = true; const my = ++g; draw();
    try { wake = await navigator.wakeLock.request("screen"); } catch (e) {}
    while (my === g) {
      const list = shuffle(ALL.filter(p => sel.has(p.unit)));
      for (const p of list) {
        if (my !== g) return;
        cur = p; paint(); const gap = S.settings.gap * 1000, m = S.settings.drill;
        if (m === "en-ne") { await Voice.sayEn(p.en); if (my !== g) return; await sleep(gap + 600); if (my !== g) return; await Voice.say(p.ne); await sleep(gap); }
        else if (m === "shadow") { await Voice.say(p.ne); await sleep(gap); if (my !== g) return; await Voice.say(p.ne, true); await sleep(gap); }
        else { await Voice.say(p.ne); await sleep(900); if (my !== g) return; await Voice.sayEn(p.en); await sleep(gap); }
        if (my !== g) return;
        count++; paint(); track("drill"); if (count % 4 === 0) addXP(1);
        const nx = list[list.indexOf(p) + 1]; if (nx) Voice.prefetch(nx.ne);
      }
    }
  };
  cleanup = () => { g++; if (wake) wake.release().catch(() => {}); };
  draw();
};

/* Sounds */
VIEWS.sounds = () => {
  $app.innerHTML = `
  ${backBtn("home", "Home")}
  <section><p class="eyebrow">Ear training</p><h1>Sounds of Nepali</h1><p class="muted">Tap a word to hear it. Then press <b>Test my ear</b>: you'll hear one word and pick which it was.</p></section>
  ${C.sounds.map((s, gi) => `
  <section class="tips" data-g="${gi}">
    <h3>${esc(s.title)}</h3><p class="muted">${esc(s.body)}</p>
    <div class="opts">${s.pairs.map((p, k) => `<button class="opt" data-k="${k}"><span>${esc(p.ro)}</span> <span class="muted" style="font-weight:400">· ${esc(p.en)}</span></button>`).join("")}</div>
    <div class="row"><button class="btn small" data-test="${gi}">${I.speaker}Test my ear</button><span class="muted" data-out="${gi}"></span></div>
  </section>`).join("")}`;
  const state = {};
  $app.querySelectorAll("[data-g]").forEach(sec => {
    const gi = +sec.dataset.g, s = C.sounds[gi], out = sec.querySelector("[data-out]");
    sec.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const k = +b.dataset.k;
      if (state[gi] != null) {
        const ok = k === state[gi];
        sec.querySelectorAll(".opt").forEach(x => x.classList.remove("right", "wrong"));
        sec.querySelector(`.opt[data-k="${state[gi]}"]`).classList.add("right"); if (!ok) b.classList.add("wrong");
        out.textContent = ok ? "Yes! Test again?" : "That was " + s.pairs[state[gi]].ro + ". Listen to both again.";
        if (ok) addXP(1); state[gi] = null;
      } else Voice.say(s.pairs[k].ne);
    });
    sec.querySelector("[data-test]").onclick = () => {
      sec.querySelectorAll(".opt").forEach(x => x.classList.remove("right", "wrong"));
      state[gi] = Math.random() * s.pairs.length | 0; out.textContent = "Which word was that? Tap it.";
      Voice.say(s.pairs[state[gi]].ne);
    };
  });
};

/* ---------- grammar ---------- */
const GLEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const GRAM = Object.fromEntries((C.grammar || []).map(g => [g.id, g]));
const gramPassed = id => !!(S.gram[id] && S.gram[id].pass);
const gramCount = () => (C.grammar || []).filter(g => gramPassed(g.id)).length;
function gramBlock(b) {
  if (b.h) return `<h2 class="g-h">${b.h}</h2>`;
  if (b.p) return `<p>${b.p}</p>`;
  if (b.rule) return `<div class="g-rule"><span class="eyebrow">The rule</span><p>${b.rule}</p></div>`;
  if (b.warn) return `<div class="g-warn"><span class="eyebrow">Watch out</span><p>${b.warn}</p></div>`;
  if (b.list) return `<ul class="g-list">${b.list.map(x => `<li>${x}</li>`).join("")}</ul>`;
  if (b.table) {
    const t = b.table;
    return `<div class="g-tablewrap">${t.cap ? `<p class="eyebrow">${t.cap}</p>` : ""}<div class="g-scroll" tabindex="0"><table class="g-table"><thead><tr>${t.head.map(h => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map((c, i) => i ? `<td>${c}</td>` : `<th scope="row">${c}</th>`).join("")}</tr>`).join("")}</tbody></table></div></div>`;
  }
  if (b.ex) return `<div class="list g-ex">${b.ex.map(e => `<button class="li" data-say="${esc(e.ne)}"><span class="play-dot">${I.speaker}</span><span><span class="ro">${esc(e.ro)}</span><br><span class="ne">${esc(e.ne)}</span><br><span class="en">${esc(e.en)}</span>${e.note ? `<br><span class="g-note">${esc(e.note)}</span>` : ""}</span><span></span></button>`).join("")}</div>`;
  return "";
}

VIEWS.grammar = () => {
  const all = C.grammar || [], n = gramCount(), next = all.find(g => !gramPassed(g.id));
  $app.innerHTML = `
  ${backBtn("home", "Home")}
  <section><p class="eyebrow">A1 → C2</p><h1>Grammar</h1>
    <p class="muted">Clear rules, tables and exceptions, from your first sentence to native-level nuance. Read a chapter, tap the examples to hear them, then pass its check (80%) to tick it off.</p>
    <div class="progress"><i style="width:${all.length ? n / all.length * 100 : 0}%"></i></div>
    <p class="muted small">${n} of ${all.length} chapters passed</p></section>
  <section class="cards">
    ${next ? `<button class="card lead" data-go="gram-${next.id}"><span class="k">${S.gram[next.id] ? "Continue" : "Next chapter"} · ${next.level}</span><h3>${esc(next.title)}</h3><span class="muted">${esc(next.sub)}</span></button>` : `<div class="card lead"><span class="k">All done</span><h3>Every chapter passed</h3><span class="muted">Re-take any check to keep the rules fresh.</span></div>`}
    <button class="card" data-go="conj"><span class="k">Quick reference</span><h3>Verb tables</h3><span class="muted">Every tense on one page</span></button>
  </section>
  ${GLEVELS.map(lv => {
    const gs = all.filter(g => g.level === lv); if (!gs.length) return "";
    const L = C.levels.find(l => l.id === lv);
    return `<section><div class="row split"><h2>${esc(L ? L.name : lv)}</h2><span class="chip">${gs.filter(g => gramPassed(g.id)).length} / ${gs.length}</span></div>
      <div class="list">${gs.map(g => `<button class="li" data-go="gram-${g.id}"><span class="play-dot g-num">${all.indexOf(g) + 1}</span><span><span class="ro">${esc(g.title)}</span><br><span class="en">${esc(g.sub)}</span></span>${gramPassed(g.id) ? '<span class="tick">Passed</span>' : S.gram[g.id] ? '<span class="muted small">Read</span>' : "<span></span>"}</button>`).join("")}</div></section>`;
  }).join("")}`;
};

VIEWS.gram = id => {
  const g = GRAM[id]; if (!g) return go("grammar");
  const all = C.grammar, i = all.indexOf(g), nx = all[i + 1], pv = all[i - 1];
  if (!S.gram[id]) { S.gram[id] = { read: day() }; save(); }
  const best = S.gram[id].best;
  $app.innerHTML = `
  ${backBtn("grammar", "Grammar")}
  <section><p class="eyebrow">${esc(g.level)} · Chapter ${i + 1} of ${all.length}${gramPassed(id) ? " · Passed" : ""}</p><h1>${esc(g.title)}</h1><p class="muted">${esc(g.sub)}</p></section>
  <article class="g-body">${g.blocks.map(gramBlock).join("")}</article>
  <section class="tips"><h3>Check yourself</h3><p class="muted">${g.quiz.length} questions, each with an explanation. Get 80% to pass the chapter.${best != null ? ` Your best: ${Math.round(best * 100)}%.` : ""}</p><button class="btn primary" data-go="gquiz-${id}">Start the check</button></section>
  <div class="row split g-nav">${pv ? `<button class="btn small ghost" data-go="gram-${pv.id}">← ${esc(pv.title)}</button>` : "<span></span>"}${nx ? `<button class="btn small ghost" data-go="gram-${nx.id}">${esc(nx.title)} →</button>` : ""}</div>`;
};

// Shared multiple-choice runner: one question at a time, explanation after each answer.
function mcq({ title, qs, back, backLabel, onDone }) {
  const items = qs.map(q => ({ ...q, opts: shuffle([q.a, ...q.o]) }));
  let k = 0, right = 0;
  const draw = () => {
    if (k >= items.length) return onDone(right, items.length);
    const q = items[k];
    $app.innerHTML = `
    ${backBtn(back, backLabel)}
    <div class="stage">
      <p class="eyebrow">${esc(title)} · ${k + 1} of ${items.length}</p>
      <div class="progress" style="width:100%"><i style="width:${k / items.length * 100}%"></i></div>
      ${q.say ? `<button class="hear" id="play" data-say="${esc(q.say)}" aria-label="Play">${I.speaker}</button>` : ""}
      <h2 class="g-q">${q.q}</h2>
      <div class="opts">${q.opts.map((o, j) => `<button class="opt${q.deva ? " deva-opt" : ""}" data-j="${j}">${o}</button>`).join("")}</div>
      <div id="gwhy" class="g-why" hidden></div>
    </div>`;
    $app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const ok = q.opts[+b.dataset.j] === q.a;
      $app.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (q.opts[+x.dataset.j] === q.a) x.classList.add("right"); });
      if (ok) { right++; Sfx.good(right); } else { b.classList.add("wrong"); Sfx.bad(); }
      if (q.after) Voice.say(q.after);
      const w = document.getElementById("gwhy"); w.hidden = false;
      w.innerHTML = `<p class="verdict ${ok ? "good" : "bad"}">${ok ? pick(["Right!", "Correct!", "Syaabaas!"]) : "Not quite"}</p>${q.why ? `<p>${q.why}</p>` : ""}<button class="btn primary" id="gnext">${k + 1 < items.length ? "Next question" : "See result"}</button>`;
      const nb = document.getElementById("gnext"); nb.onclick = () => { k++; draw(); }; nb.focus();
    });
  };
  draw();
}
function mcqResult({ right, n, pass, first, xp, nextBtn, retry, reread, back, backLabel }) {
  $app.innerHTML = `
  ${backBtn(back, backLabel)}
  <div class="stage">${cheerHTML(pass ? "good" : "bad")}
    <h1>${right} of ${n} right</h1>
    <p class="muted">${pass ? (first ? `Passed. +${xp} XP` : "Passed again. Repetition is how it sticks.") : "Not quite there yet. Have another look, then try again."}</p>
    <div class="row" style="justify-content:center">${pass && nextBtn ? nextBtn : reread ? `<button class="btn primary" data-go="${reread}">Have another look</button>` : ""}<button class="btn" data-go="${retry}">Try again</button></div>
  </div>`;
  if (pass) { celebrate(first ? 110 : 40); Sfx.win(); }
}

VIEWS.gquiz = id => {
  const g = GRAM[id]; if (!g) return go("grammar");
  mcq({ title: g.title, qs: shuffle(g.quiz), back: "gram-" + id, backLabel: g.title, onDone: (right, n) => {
    const pct = right / n, pass = pct >= 0.8, r = S.gram[id] || (S.gram[id] = {}), first = pass && !r.pass;
    r.best = Math.max(r.best || 0, pct); if (pass && !r.pass) r.pass = day(); save();
    addXP(first ? 10 : 2); if (pass) track("gram");
    const nx = C.grammar[C.grammar.indexOf(g) + 1];
    mcqResult({ right, n, pass, first, xp: 10, nextBtn: nx && `<button class="btn primary" data-go="gram-${nx.id}">Next: ${esc(nx.title)}</button>`, retry: "gquiz-" + id, reread: "gram-" + id, back: "grammar", backLabel: "Grammar" });
  } });
};

// Every conjugation table from the tense chapters, on one page.
VIEWS.conj = () => {
  const ids = ["be", "pres", "imp", "past", "was", "cont", "fut", "perf", "habit", "if", "pass", "honor"];
  const chs = ids.map(id => GRAM[id]).filter(Boolean);
  $app.innerHTML = `
  ${backBtn("grammar", "Grammar")}
  <section><p class="eyebrow">Quick reference</p><h1>Verb tables</h1><p class="muted">The model verbs are <b>garnu</b> (to do, a consonant stem) and <b>khaanu</b> (to eat, a vowel stem). Most verbs follow one of them. Tap a heading for the full explanation.</p></section>
  ${chs.map(g => `<section><button class="g-reflink" data-go="gram-${g.id}"><span class="chip">${esc(g.level)}</span> <h2>${esc(g.title)}</h2></button>${g.blocks.filter(b => b.table || b.rule).map(gramBlock).join("")}</section>`).join("")}`;
};

/* ---------- culture ---------- */
const CULT = Object.fromEntries((C.culture || []).map(c => [c.id, c]));
const cultPassed = id => !!(S.cult[id] && S.cult[id].pass);
const FACTS = (C.culture || []).flatMap(c => c.facts.map(f => ({ f, id: c.id })));
const seedOf = (t, salt = 0) => { let h = 7 + salt; for (const ch of t) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h; };
const factOfDay = () => FACTS[seedOf(day(), 3) % FACTS.length];
// Nepali (Bikram Sambat) month, approximately: months start around the 14th–17th of Western months; Baisakh ≈ mid-April.
function bsNow(d = new Date()) {
  let i = (d.getMonth() - 3 + 12) % 12; if (d.getDate() < 15) i = (i + 11) % 12;
  const y = d.getFullYear() + ((d.getMonth() > 3 || (d.getMonth() === 3 && d.getDate() >= 14)) ? 57 : 56);
  return { m: C.months[i], i, y };
}
const artOf = (key, cls = "") => `<span class="artbox ${cls}">${(C.art || {})[key] || ""}</span>`;
function nepalTodayHTML() {
  const fd = factOfDay(), bs = bsNow();
  if (!fd || !bs.m) return "";
  return `<section class="nepal-today">
    <div class="row split"><h2>Nepal today</h2><button class="btn small ghost" data-go="culture">Culture →</button></div>
    <div class="cards">
      <button class="card month-card" data-go="culture"><span class="k">This month · ${bs.y} BS</span><h3><span class="deva">${esc(bs.m.ne)}</span> ${esc(bs.m.ro)}</h3><span class="muted small">${esc(bs.m.g)}</span><span>${esc(bs.m.fest)}</span></button>
      <button class="card fact-card" data-go="cult-${fd.id}">${artOf(CULT[fd.id].art, "thumb")}<span class="k">Did you know?</span><span class="fact">${esc(fd.f)}</span><span class="muted small">Read: ${esc(CULT[fd.id].title)} →</span></button>
    </div></section>`;
}

VIEWS.culture = () => {
  const all = C.culture || [], n = all.filter(c => cultPassed(c.id)).length, bs = bsNow();
  $app.innerHTML = `
  ${backBtn("home", "Home")}
  <section class="cult-hero">${artOf("stupa", "hero-art")}<div><p class="eyebrow">Culture</p><h1>Nepal, up close</h1>
    <p class="muted">Religion, festivals, food, manners and history: the background that makes conversations click. Every article has key words to hear and a short check.</p>
    <p class="muted small">${n} of ${all.length} checks passed</p></div></section>
  <section class="cgrid">${all.map(c => `<button class="ccard" data-go="cult-${c.id}">${artOf(c.art)}<span class="ccard-body"><b>${esc(c.title)}</b><span class="muted small">${esc(c.sub)}</span>${cultPassed(c.id) ? '<span class="tick small">Checked</span>' : S.cult[c.id] ? '<span class="muted small">Read</span>' : ""}</span></button>`).join("")}</section>
  <section><div class="row split"><h2>The festival year</h2><span class="chip">Now: ${esc(bs.m.ro)} ${bs.y}</span></div>
    <p class="muted">Nepal's calendar, Bikram Sambat, starts in mid-April. Most festivals follow the moon, so their Western dates move a little each year.</p>
    <div class="months">${C.months.map((m, i) => `<div class="month ${i === bs.i ? "now" : ""}"><div class="row split"><b><span class="deva">${esc(m.ne)}</span> · ${esc(m.ro)}</b><span class="muted small">${esc(m.g)}</span></div><p>${esc(m.fest)}</p><p class="muted small">${esc(m.tip)}</p></div>`).join("")}</div></section>`;
};

VIEWS.cult = id => {
  const c = CULT[id]; if (!c) return go("culture");
  if (!S.cult[id]) { S.cult[id] = { read: day() }; save(); track("cult"); addXP(2); }
  const units = Object.entries(C.unitLinks || {}).filter(([, l]) => l.c === id).map(([u]) => UNIT[u]).filter(Boolean);
  const all = C.culture, i = all.indexOf(c), nx = all[i + 1];
  $app.innerHTML = `
  ${backBtn("culture", "Culture")}
  <section class="cult-banner">${artOf(c.art, "banner")}<p class="eyebrow">Culture · ${i + 1} of ${all.length}</p><h1>${esc(c.title)}</h1><p class="lede">${esc(c.intro)}</p></section>
  <article class="g-body">${c.sections.map(s => `<h2 class="g-h">${esc(s.h)}</h2><p>${s.p}</p>`).join("")}</article>
  <section class="dyk"><p class="eyebrow">Did you know?</p><ul>${c.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul></section>
  <section><h2>Words to know</h2><div class="list g-ex">${c.words.map(w => `<button class="li" data-say="${esc(w.ne)}"><span class="play-dot">${I.speaker}</span><span><span class="ro">${esc(w.ro)}</span><br><span class="ne">${esc(w.ne)}</span><br><span class="en">${esc(w.en)}</span></span><span></span></button>`).join("")}</div></section>
  ${units.length ? `<section><h2>Practise it in a lesson</h2><div class="list">${units.map(u => `<button class="li" data-go="unit-${u.id}"><span class="chip">${esc(u.level)}</span><span><span class="ro">${esc(u.title)}</span><br><span class="en">${esc(u.sub)}</span></span><span class="muted">→</span></button>`).join("")}</div></section>` : ""}
  <section class="tips"><h3>Culture check</h3><p class="muted">${c.quiz.length} quick questions.${cultPassed(id) ? " Passed." : ""}</p><button class="btn primary" data-go="cquiz-${id}">Start the check</button></section>
  ${nx ? `<div class="row end"><button class="btn small ghost" data-go="cult-${nx.id}">Next: ${esc(nx.title)} →</button></div>` : ""}`;
};

VIEWS.cquiz = id => {
  const c = CULT[id]; if (!c) return go("culture");
  mcq({ title: c.title, qs: shuffle(c.quiz), back: "cult-" + id, backLabel: c.title, onDone: (right, n) => {
    const pass = right / n >= 0.66, r = S.cult[id] || (S.cult[id] = {}), first = pass && !r.pass;
    if (first) r.pass = day(); save(); addXP(first ? 5 : 1); if (pass) track("cultq");
    const nx = C.culture[C.culture.indexOf(c) + 1];
    mcqResult({ right, n, pass, first, xp: 5, nextBtn: nx && `<button class="btn primary" data-go="cult-${nx.id}">Next: ${esc(nx.title)}</button>`, retry: "cquiz-" + id, reread: "cult-" + id, back: "culture", backLabel: "Culture" });
  } });
};

/* ---------- read Nepali (Devanagari) ---------- */
const RGRP = Object.fromEntries((C.reading || []).map(g => [g.id, g]));
const readPassed = id => !!(S.read[id] && S.read[id].pass);
VIEWS.read = () => {
  const all = C.reading || [], n = all.filter(g => readPassed(g.id)).length;
  $app.innerHTML = `
  ${backBtn("home", "Home")}
  <section><p class="eyebrow">Devanagari</p><h1>Read Nepali</h1>
    <p class="muted">Nepali is written in Devanagari. Reading it unlocks signs, menus, subtitles, song lyrics and the news, and makes your pronunciation sharper. Learn one group at a time: tap each letter to hear a word that uses it, then pass the practice round.</p>
    <div class="progress"><i style="width:${all.length ? n / all.length * 100 : 0}%"></i></div><p class="muted small">${n} of ${all.length} groups passed</p></section>
  <section class="list">${all.map((g, i) => `<button class="li" data-go="letters-${g.id}"><span class="play-dot g-num">${i + 1}</span><span><span class="ro">${esc(g.title)}</span><br><span class="en deva">${esc(g.sub)}</span></span>${readPassed(g.id) ? '<span class="tick">Passed</span>' : "<span></span>"}</button>`).join("")}</section>
  <section class="tips"><h3>Tip</h3><p class="muted">Turn on <b>Show Nepali script</b> in Settings once you know the first groups, so you see Devanagari next to every phrase you already know.</p></section>`;
};
VIEWS.letters = id => {
  const g = RGRP[id]; if (!g) return go("read");
  $app.innerHTML = `
  ${backBtn("read", "Read Nepali")}
  <section><p class="eyebrow">Group ${C.reading.indexOf(g) + 1}</p><h1>${esc(g.title)}</h1><p class="muted">${esc(g.intro)}</p></section>
  <section class="lgrid">${g.items.map((it, j) => `<button class="ltile" data-j="${j}" data-say="${esc(it.ne)}"><span class="lbig deva">${esc(it.l)}</span><span class="lsnd">${esc(it.r)}</span><span class="lword"><span class="deva">${esc(it.ne)}</span><br><span class="muted small">${esc(it.ro)} · ${esc(it.en)}</span></span></button>`).join("")}</section>
  <section class="tips"><h3>Practise</h3><p class="muted">Ten questions: name the sound of a letter, and read whole words. Get 8 to pass.</p><button class="btn primary" data-go="rquiz-${id}">Start practice</button></section>`;
};
VIEWS.rquiz = id => {
  const g = RGRP[id]; if (!g) return go("read");
  const items = g.items, sounds = [...new Set(items.map(x => x.r))];
  const others = (arr, not, n = 3) => shuffle(arr.filter(x => x !== not)).slice(0, n);
  const wordPool = (C.reading || []).flatMap(x => x.items).map(x => x.ro);
  const qs = shuffle(items).slice(0, 10).map((it, k) => k % 2 === 0
    ? { q: `Which sound is <span class="qdeva deva">${esc(it.l)}</span> ?`, a: it.r, o: others(sounds, it.r), why: `<span class="deva">${esc(it.l)}</span> = ${esc(it.r)}, as in <span class="deva">${esc(it.ne)}</span> (${esc(it.ro)}, ${esc(it.en)}).`, after: it.ne }
    : { q: `Read this word: <span class="qdeva deva">${esc(it.ne)}</span>`, a: it.ro, o: others([...new Set(wordPool)], it.ro), why: `${esc(it.ro)} means “${esc(it.en)}”.`, after: it.ne });
  mcq({ title: g.title, qs, back: "letters-" + id, backLabel: g.title, onDone: (right, n) => {
    const pass = right / n >= 0.8, r = S.read[id] || (S.read[id] = {}), first = pass && !r.pass;
    if (first) r.pass = day(); r.best = Math.max(r.best || 0, right / n); save(); addXP(first ? 8 : 2); if (pass) track("readq");
    const nx = C.reading[C.reading.indexOf(g) + 1];
    mcqResult({ right, n, pass, first, xp: 8, nextBtn: nx && `<button class="btn primary" data-go="letters-${nx.id}">Next: ${esc(nx.title)}</button>`, retry: "rquiz-" + id, reread: "letters-" + id, back: "read", backLabel: "Read Nepali" });
  } });
};

/* ---------- sentence builder: put the words in Nepali order ---------- */
const toks = ro => ro.replace(/[.?!,;:“”"]/g, "").trim().split(/\s+/).filter(Boolean);
function buildPool(lv) {
  const want = lv === "B2+" ? ["B2", "C1", "C2"] : [lv];
  const fromGram = (C.grammar || []).filter(g => want.includes(g.level)).flatMap(g => g.blocks.filter(b => b.ex).flatMap(b => b.ex.map(e => ({ ...e, src: g.title, gid: g.id }))));
  const fromUnits = C.units.filter(u => want.includes(u.level)).flatMap(u => u.phrases.map(p => ({ ...p, src: u.title })));
  return [...fromGram, ...fromUnits].filter(e => { const t = toks(e.ro); return t.length >= 3 && t.length <= 9 && !/[\/()…]/.test(e.ro + e.en); });
}
VIEWS.build = lv => {
  const LV = ["A1", "A2", "B1", "B2+"]; lv = LV.includes(lv) ? lv : (S.settings.buildLv || "A1"); S.settings.buildLv = lv; save();
  const round = shuffle(buildPool(lv)).slice(0, 8);
  let k = 0, good = 0;
  const draw = () => {
    if (k >= round.length) {
      addXP(Math.max(2, good)); track("build", good);
      $app.innerHTML = `${backBtn("home", "Home")}<div class="stage">${cheerHTML(good >= 6 ? "good" : "bad")}<h1>${good} of ${round.length} built</h1><p class="muted">Word order is the skeleton of Nepali: subject, then time and place, then object, verb last.</p><div class="row" style="justify-content:center"><button class="btn primary" data-go="build-${lv}">Another round</button><button class="btn" data-go="grammar">Grammar</button></div></div>`;
      if (good >= 6) { celebrate(60); Sfx.win(); }
      return;
    }
    const e = round[k], target = toks(e.ro);
    let bank = shuffle(target.map((w, i) => ({ w, i }))), ans = [], checked = false;
    if (bank.every((b, i) => b.i === i)) bank.reverse();
    const paint = () => {
      $app.innerHTML = `
      ${backBtn("home", "Home")}
      <div class="row lvchips">${LV.map(x => `<button class="chip ${x === lv ? "on" : ""}" data-go="build-${x}">${x}</button>`).join("")}</div>
      <div class="stage">
        <p class="eyebrow">Sentence builder · ${k + 1} of ${round.length}</p>
        <div class="progress" style="width:100%"><i style="width:${k / round.length * 100}%"></i></div>
        <h2 class="g-q">${esc(e.en)}</h2>
        <div class="answer ${checked ? (ans.map(a => a.w).join(" ") === target.join(" ") ? "ok" : "bad") : ""}">${ans.length ? ans.map((a, j) => `<button class="tile" data-a="${j}" ${checked ? "disabled" : ""}>${esc(a.w)}</button>`).join("") : '<span class="muted small">Tap the words in Nepali order</span>'}</div>
        <div class="bank">${bank.map((b, j) => `<button class="tile" data-b="${j}" ${checked ? "disabled" : ""}>${esc(b.w)}</button>`).join("")}</div>
        <div id="bres" class="g-why"></div>
        <div class="row" style="justify-content:center">${checked ? `<button class="btn primary" id="bnext">${k + 1 < round.length ? "Next" : "See result"}</button>` : `<button class="btn" id="bhint">Hint</button><button class="btn primary" id="bcheck" ${bank.length ? "disabled" : ""}>Check</button>`}</div>
      </div>`;
      $app.querySelectorAll("[data-b]").forEach(t => t.onclick = () => { ans.push(bank.splice(+t.dataset.b, 1)[0]); paint(); });
      $app.querySelectorAll("[data-a]").forEach(t => t.onclick = () => { bank.push(ans.splice(+t.dataset.a, 1)[0]); paint(); });
      const res = document.getElementById("bres");
      if (checked) {
        const ok = ans.map(a => a.w).join(" ") === target.join(" ");
        res.innerHTML = `<p class="verdict ${ok ? "good" : "bad"}">${ok ? pick(["Perfect order!", "Syaabaas!", "Exactly right"]) : "Almost"}</p><button class="say-line" data-say="${esc(e.ne)}"><span class="ro">${esc(e.ro)}</span><span class="en deva">${esc(e.ne)}</span></button>${e.note ? `<p class="muted small">${esc(e.note)}</p>` : ""}<p class="muted small">From: ${e.gid ? `<a href="#gram-${e.gid}">${esc(e.src)}</a>` : esc(e.src)}</p>`;
        document.getElementById("bnext").onclick = () => { k++; draw(); };
      } else {
        document.getElementById("bhint").onclick = () => { Voice.say(e.ne); const first = target[ans.length]; if (first != null) toast(`Next word: ${first}`); };
        document.getElementById("bcheck").onclick = () => { checked = true; const ok = ans.map(a => a.w).join(" ") === target.join(" "); if (ok) { good++; Sfx.good(good); } else Sfx.bad(); Voice.say(e.ne); paint(); };
      }
    };
    paint();
  };
  draw();
};

/* ---------- daily reminder ---------- */
// Web apps can't schedule exact alarms. Three layers: a timer while the app is open or in the background,
// Periodic Background Sync on Android/Chrome (installed app), and a repeating calendar event that works everywhere.
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const standalone = () => window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
const Remind = {
  ok: "Notification" in window,
  timer: null,
  cfg() { return S.settings.remind || (S.settings.remind = { on: false, time: "19:00" }); },
  lastDay() { return Object.keys(S.xp).filter(k => S.xp[k] > 0).sort().pop() || ""; },
  async sync() {
    const r = this.cfg(), st = { on: !!r.on, time: r.time, last: this.lastDay(), notified: S.remindShown || "", streak: streak(), pd: phraseOfDay() };
    try { const c = await caches.open("saathi-state"); await c.put("state.json", new Response(JSON.stringify(st), { headers: { "Content-Type": "application/json" } })); } catch (e) {}
    this.arm();
  },
  arm() {
    clearTimeout(this.timer);
    const r = this.cfg(); if (!r.on || !this.ok || Notification.permission !== "granted") return;
    const [h, m] = r.time.split(":").map(Number), at = new Date(); at.setHours(h, m, 0, 0);
    let wait = at - Date.now(); if (wait <= 0) wait += 864e5; // past today's time: arm for tomorrow
    this.timer = setTimeout(() => { if (!S.xp[day()] && S.remindShown !== day()) { S.remindShown = day(); save(); this.show(); this.sync(); } }, wait);
  },
  async reg() {
    if (!("serviceWorker" in navigator)) return null;
    return Promise.race([navigator.serviceWorker.getRegistration().then(r => r || null), sleep(1500).then(() => null)]);
  },
  async show(test) {
    const pd = phraseOfDay(), st = streak();
    const title = test ? "Reminders are on" : st ? `Keep your ${st}-day streak going` : "Time for some Nepali";
    const body = `${pd.ro}: ${pd.en}. Five minutes today is enough.`;
    const opt = { body, icon: "icons/icon-192.png", badge: "icons/icon-192.png", tag: "saathi-daily" };
    try { const reg = await this.reg(); if (reg) { await reg.showNotification(title, opt); return true; } } catch (e) {}
    try { new Notification(title, opt); return true; } catch (e) { return false; }
  },
  async background(on) {
    try {
      const reg = await this.reg(); if (!reg || !("periodicSync" in reg)) return false;
      if (!on) { await reg.periodicSync.unregister("saathi-daily"); return false; }
      const p = await navigator.permissions.query({ name: "periodic-background-sync" });
      if (p.state !== "granted") return false;
      await reg.periodicSync.register("saathi-daily", { minInterval: 4 * 36e5 }); return true;
    } catch (e) { return false; }
  },
  appUrl() { return location.href.split("#")[0]; },
  stamp(d, h, m) { return d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0") + "T" + String(h).padStart(2, "0") + String(m).padStart(2, "0") + "00"; },
  ics() {
    const [h, m] = this.cfg().time.split(":").map(Number), d = new Date(); d.setDate(d.getDate() + 1);
    const now = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
    return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Nepali Saathi//Daily practice//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
      "UID:daily-practice-" + Date.now() + "@nepali-saathi", "DTSTAMP:" + now, "DTSTART:" + this.stamp(d, h, m), "DURATION:PT15M", "RRULE:FREQ=DAILY",
      "SUMMARY:Nepali practice", "DESCRIPTION:15 minutes with Nepali Saathi keeps your streak alive. " + this.appUrl(), "URL:" + this.appUrl(),
      "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:Time for Nepali practice", "TRIGGER:PT0S", "END:VALARM", "END:VEVENT", "END:VCALENDAR", ""].join("\r\n");
  },
  google() {
    const [h, m] = this.cfg().time.split(":").map(Number), d = new Date(); d.setDate(d.getDate() + 1);
    const e = new Date(d); e.setHours(h, m + 15);
    const q = new URLSearchParams({ action: "TEMPLATE", text: "Nepali practice", details: "15 minutes with Nepali Saathi keeps your streak alive. " + this.appUrl(), recur: "RRULE:FREQ=DAILY", dates: this.stamp(d, h, m) + "/" + this.stamp(e, e.getHours(), e.getMinutes()) });
    return "https://calendar.google.com/calendar/render?" + q.toString();
  }
};

/* Settings */
VIEWS.settings = arg => {
  const st = S.settings;
  $app.innerHTML = `
  ${backBtn("home", "Home")}
  <section><h1>Settings</h1></section>
  <section>
    <div class="field" id="remind"><label>Daily reminder</label>
      <label class="switch"><input type="checkbox" id="rem" ${Remind.cfg().on ? "checked" : ""}> Remind me to practise every day</label>
      <div class="row"><label for="remt" class="muted">Time</label><input type="time" id="remt" class="inp" value="${Remind.cfg().time}" style="width:auto"></div>
      <p class="muted" id="remst"></p>
      <div class="row"><button class="btn small" id="remtest">Send a test</button><button class="btn small" id="remics">Add to my calendar</button><a class="btn small" id="remg" href="${esc(Remind.google())}" target="_blank" rel="noopener">Google Calendar</a></div>
      <p class="muted">Phones only let web apps wake up in limited ways. On <b>Android</b> with the app installed, reminders can arrive even when it's closed (the time may drift a little). On <b>iPhone</b> and computers, notifications arrive while the app is open or in the background. For a reminder that <b>always</b> arrives, also add the repeating calendar event: it rings at your chosen time every day.</p></div>
    <div class="field"><label for="voice">Voice</label>
      <select id="voice"><option value="auto" ${st.voice === "auto" ? "selected" : ""}>Nepali recordings (recommended)</option><option value="device" ${st.voice === "device" ? "selected" : ""}>Device voice only</option></select>
      <p class="muted">Every lesson phrase has a built-in recording of a Nepali voice, which also works offline. Phrases you add yourself use Google's free online Nepali voice. "Device voice only" uses your phone's own voice, which may be Hindi on some devices: close, but not exact.</p>
      <div class="row"><button class="btn small" id="test">${I.speaker}Test voice</button><span class="muted" id="vlabel">${esc(Voice.label())}</span></div></div>
    <div class="field"><label for="slow">Slow speed: <span id="slowv">${Math.round(st.slow * 100)}%</span></label><input type="range" id="slow" min="0.5" max="0.9" step="0.05" value="${st.slow}"></div>
    <div class="field"><label class="switch"><input type="checkbox" id="script" ${st.script ? "checked" : ""}> Show Nepali script (Devanagari)</label><p class="muted">Off by default. Romanized text is enough for listening and speaking.</p></div>
    <div class="field"><label class="switch"><input type="checkbox" id="sfx" ${st.sfx !== false ? "checked" : ""}> Sound effects</label><p class="muted">Singing-bowl chimes for right answers and celebrations.</p></div>
    <div class="field"><label for="goal">Daily goal</label><select id="goal">${[15, 30, 60].map(n => `<option value="${n}" ${st.goal === n ? "selected" : ""}>${n} XP a day</option>`).join("")}</select></div>
    <div class="field"><label>Speech checking</label>
      <div class="status"><span>Recognition</span>${SRC ? '<span class="ok">Available</span>' : '<span class="no">Not in this browser</span>'}<span>Recording</span>${Rec.ok ? '<span class="ok">Available</span>' : '<span class="no">Not available</span>'}</div>
      <p class="muted">Speech checking uses the browser's free speech recognition. It works best in Google Chrome (computer or Android). Elsewhere you say the phrase aloud and check yourself.</p>
      ${SRC ? `<div class="row"><button class="btn small" id="mtest">${I.mic}Test: say "namaste"</button><span class="muted" id="mout"></span></div>` : ""}</div>
    <div class="field" id="sync"><label>Sync across devices</label>
      ${Sync.on ? `<p class="muted">On. Progress made here is saved to a private gist in your GitHub account and shows up on your other synced devices a few seconds later.</p>
      <p class="muted" id="syncst"></p>
      <div class="row"><button class="btn small" id="syncnow">Sync now</button><button class="btn small ghost" id="syncoff">Stop syncing on this device</button></div>`
      : `<p class="muted">Keep the same progress on your phone and computer, for free. The app keeps it in a private gist in your own GitHub account. Do this once on each device:</p>
      <ol class="muted"><li>Open <a href="${SYNC_NEW_KEY}" target="_blank" rel="noopener">GitHub's new-key page</a> and sign in. The note and the <b>gist</b> box are already filled in. Set <b>Expiration</b> to <b>No expiration</b>, then press <b>Generate token</b> at the bottom.</li><li>Copy the key (it starts with <code>ghp_</code>), paste it below and press Connect.</li></ol>
      <input class="inp" id="synctok" type="password" autocomplete="off" spellcheck="false" placeholder="Paste your GitHub key">
      <div class="row"><button class="btn small primary" id="syncgo">Connect</button><span class="muted" id="syncst"></span></div>
      <p class="muted">The key can only read and write your gists, nothing else in your account, and it stays on this device.</p>`}</div>
    <div class="field"><label>Backup code</label><p class="muted">A manual copy of your progress. Paste it on another device, or keep it somewhere safe.</p>
      <div class="row"><button class="btn small" id="bcopy">Copy backup code</button><span class="muted" id="bst"></span></div>
      <textarea id="bcode" class="inp" rows="3" placeholder="Paste a backup code here to restore it"></textarea>
      <div class="row"><button class="btn small" id="brestore">Restore from code</button></div></div>
    <div class="field"><label>Progress</label><p class="muted">${Sync.on ? "Saved on this device and in your private GitHub gist. Resetting here also erases it on your other synced devices." : "Saved on this device only. Clearing browser data erases it, so turn on sync or keep a backup code."}</p>
      <div class="row"><button class="btn small" id="reset">Reset all progress</button><span id="confirm" hidden><button class="btn small primary" id="yes" style="background:var(--bad);border-color:var(--bad);color:#fff">Yes, erase everything</button> <button class="btn small ghost" id="no">Cancel</button></span></div></div>
  </section>`;
  const $ = s => document.getElementById(s);
  const remStatus = (msg) => {
    const r = Remind.cfg(); let t = msg || "";
    if (!t) {
      if (!Remind.ok) t = isIOS && !standalone() ? "On iPhone, first add this app to your Home Screen (Share → Add to Home Screen), open it from there, then turn this on." : "This browser can't show notifications. Use the calendar reminder below.";
      else if (Notification.permission === "denied") t = "Notifications are blocked for this app. Allow them in your browser or phone settings, or use the calendar reminder.";
      else if (r.on && Notification.permission === "granted") t = `On: a nudge at ${r.time} on days you haven't practised yet.`;
      else t = "Off.";
    }
    $("remst").textContent = t;
  };
  remStatus();
  $("rem").onchange = async e => {
    const r = Remind.cfg();
    if (e.target.checked) {
      if (!Remind.ok) { e.target.checked = false; remStatus(); return; }
      let p = Notification.permission;
      if (p === "default") { try { p = await Notification.requestPermission(); } catch (err) { p = "denied"; } }
      if (p !== "granted") { e.target.checked = false; r.on = false; save(); remStatus(); return; }
      r.on = true; save(); await Remind.sync();
      const bg = await Remind.background(true);
      remStatus(`On: a nudge at ${r.time} on days you haven't practised yet.${bg ? " Background reminders are enabled on this device." : ""}`);
    } else { r.on = false; save(); Remind.sync(); Remind.background(false); remStatus(); }
  };
  $("remt").onchange = e => { if (!e.target.value) return; Remind.cfg().time = e.target.value; save(); Remind.sync(); $("remg").href = Remind.google(); remStatus(); };
  $("remtest").onclick = async () => {
    if (!Remind.ok || Notification.permission !== "granted") { remStatus(Remind.ok && Notification.permission === "default" ? "Turn the reminder on first, so your device can ask for permission." : ""); return; }
    remStatus((await Remind.show(true)) ? "Test sent. If you don't see it, check your device's notification settings for this app." : "Your device didn't allow the test notification.");
  };
  $("remics").onclick = () => {
    const ics = Remind.ics();
    if (isIOS) { location.href = "data:text/calendar;charset=utf-8," + encodeURIComponent(ics); return; }
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" })); a.download = "nepali-practice.ics";
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    remStatus("Calendar file created. Open it to add a daily “Nepali practice” event with an alert.");
  };
  Sync.paint();
  if ($("syncgo")) $("syncgo").onclick = async () => {
    const t = $("synctok").value.trim(); if (!t) { $("syncst").textContent = "Paste the key first."; return; }
    $("syncgo").disabled = true; $("syncst").textContent = "Connecting…";
    try { await Sync.connect(t); toast("Sync is on"); go("settings"); }
    catch (e) {
      $("syncgo").disabled = false;
      $("syncst").textContent = e.status === 401 ? "GitHub didn't accept that key. Copy the whole key and try again." : e.status === 403 || e.status === 404 ? "That key can't save gists. Create a new key with the gist box ticked." : "Couldn't reach GitHub. Check your connection and try again.";
    }
  };
  if ($("syncnow")) $("syncnow").onclick = async () => { $("syncst").textContent = "Syncing…"; await Sync.run(); Sync.paint(); };
  if ($("syncoff")) $("syncoff").onclick = () => { Sync.disconnect(); toast("Sync is off on this device"); go("settings"); };
  if (arg === "remind") setTimeout(() => $("remind").scrollIntoView({ block: "start" }), 50);
  $("voice").onchange = e => { st.voice = e.target.value; Voice.online = true; Voice.fails = 0; save(); $("vlabel").textContent = Voice.label(); };
  $("test").onclick = async () => { await Voice.say("नमस्ते! तपाईंलाई कस्तो छ?"); $("vlabel").textContent = Voice.label(); };
  $("slow").oninput = e => { st.slow = +e.target.value; save(); $("slowv").textContent = Math.round(st.slow * 100) + "%"; };
  $("slow").onchange = () => Voice.say("बिस्तारै बोल्नुहोस् न।", true);
  $("script").onchange = e => { st.script = e.target.checked; save(); };
  $("sfx").onchange = e => { st.sfx = e.target.checked; save(); if (st.sfx) Sfx.good(1); };
  $("goal").onchange = e => { st.goal = +e.target.value; save(); header(); };
  if ($("mtest")) $("mtest").onclick = async () => {
    $("mout").textContent = "Listening…"; Mic.ok = true;
    try { const a = await Mic.listen(); const r = score("नमस्ते", a); $("mout").textContent = `Heard "${translit(normDeva(r.heard))}": ${Math.round(r.s * 100)}% match. It works.`; }
    catch (err) { $("mout").textContent = micError(err); if (err === "no-speech") Mic.ok = true; }
  };
  $("bcopy").onclick = () => {
    const code = btoa(unescape(encodeURIComponent(JSON.stringify(S)))); $("bcode").value = code;
    const ok = () => { $("bst").textContent = "Copied. Paste it somewhere safe."; };
    const fb = () => { $("bcode").select(); $("bst").textContent = "Selected. Copy it with your device's copy command."; };
    try { navigator.clipboard.writeText(code).then(ok, fb); } catch (e) { fb(); }
  };
  $("brestore").onclick = () => {
    try { const j = JSON.parse(decodeURIComponent(escape(atob($("bcode").value.trim())))); if (!j.srs) throw 0; const ep = S.epoch || 0; S = merge(j); S.epoch = Math.max(ep, S.epoch || 0); save(); indexAll(); toast("Progress restored."); go("home"); }
    catch (e) { $("bst").textContent = "That code isn't valid. Copy the whole code and try again."; }
  };
  $("reset").onclick = () => { $("confirm").hidden = false; $("reset").hidden = true; };
  $("no").onclick = () => { $("confirm").hidden = true; $("reset").hidden = false; };
  $("yes").onclick = () => { const keep = S.settings; S = JSON.parse(JSON.stringify(DEF)); S.settings = keep; S.epoch = Date.now(); save(); indexAll(); toast("Progress erased."); go("home"); };
};

/* ---------- sync across devices: progress lives in a private gist in the learner's GitHub account ---------- */
const GFILE = "nepali-saathi-progress.json", SKEY = "nepali-saathi-sync";
const SYNC_NEW_KEY = "https://github.com/settings/tokens/new?scopes=gist&description=Nepali%20Saathi%20sync";
const LOCAL_SET = ["voice", "remind"]; // device-specific settings, never synced
const isNum = v => typeof v === "number";
// Combine one field from two devices: numbers take the max (or min), dates the earliest, flags and maps the union.
function mergeVal(x, y, low) {
  if (x === undefined || x === null) return y;
  if (y === undefined || y === null) return x;
  if (isNum(x) && isNum(y)) return low ? Math.min(x, y) : Math.max(x, y);
  if (typeof x === "string" && typeof y === "string") return x < y ? x : y;
  if (typeof x === "object" && typeof y === "object" && !Array.isArray(x) && !Array.isArray(y)) {
    const o = {}; new Set([...Object.keys(x), ...Object.keys(y)]).forEach(k => { o[k] = mergeVal(x[k], y[k]); }); return o;
  }
  return x || y;
}
const newerCard = (r, q) => (r.t || 0) !== (q.t || 0) ? (r.t || 0) > (q.t || 0) : r.box !== q.box ? r.box > q.box : r.due > q.due;
// a: this device, b: the copy from the gist
function combine(a, b) {
  a = merge(a); b = merge(b);
  const keepLocal = w => { const s = { ...w.settings }; LOCAL_SET.forEach(k => { s[k] = a.settings[k]; }); return { ...w, settings: s, remindShown: a.remindShown }; };
  // A reset starts a new epoch: the newer epoch replaces everything.
  if ((a.epoch || 0) !== (b.epoch || 0)) return keepLocal((a.epoch || 0) > (b.epoch || 0) ? a : b);
  const bNewer = (b.at || 0) > (a.at || 0);
  const o = keepLocal(bNewer ? b : a); // settings and freezes follow the device used last
  ["done", "dlg", "story", "xp", "stats", "daily", "badges", "gram", "cult", "read", "frozen", "gone", "gm", "week", "mono", "rp", "pat"].forEach(k => { o[k] = mergeVal(a[k], b[k]) || {}; });
  o.imm = bNewer ? { ...a.imm, ...b.imm } : { ...b.imm, ...a.imm };
  o.best = {}; new Set([...Object.keys(a.best || {}), ...Object.keys(b.best || {})]).forEach(k => { o.best[k] = mergeVal(a.best[k], b.best[k], k === "memory"); });
  o.srs = { ...b.srs }; Object.entries(a.srs).forEach(([id, r]) => { const q = o.srs[id]; if (!q || newerCard(r, q)) o.srs[id] = r; });
  const seen = {}; o.mine = [...a.mine, ...b.mine].filter(p => p && p.id && !o.gone[p.id] && !seen[p.id] && (seen[p.id] = 1));
  Object.keys(o.gone).forEach(id => { delete o.srs[id]; });
  o.at = Math.max(a.at || 0, b.at || 0); o.epoch = a.epoch || 0;
  return o;
}
const pack = s => { const o = { ...s, settings: { ...s.settings } }; LOCAL_SET.forEach(k => delete o.settings[k]); delete o.remindShown; return o; };
const canon = v => JSON.stringify(v, (k, x) => x && typeof x === "object" && !Array.isArray(x) ? Object.fromEntries(Object.keys(x).sort().map(k2 => [k2, x[k2]])) : x);
const SAFE_VIEWS = ["roleplays", "home", "path", "badges", "games", "grammar", "culture", "read", "settings", "mine", "unit", "gram", "cult", "letters", "conj"];
const Sync = {
  cfg() { try { return JSON.parse(localStorage.getItem(SKEY)) || {}; } catch (e) { return {}; } },
  put(c) { try { if (c) localStorage.setItem(SKEY, JSON.stringify(c)); else localStorage.removeItem(SKEY); } catch (e) {} },
  get on() { return !!this.cfg().token; },
  busy: null, again: false, timer: 0,
  async api(path, opt = {}, token = this.cfg().token) {
    const r = await fetch("https://api.github.com" + path, { ...opt, cache: "no-store",
      headers: { Accept: "application/vnd.github+json", Authorization: "Bearer " + token, ...(opt.body ? { "Content-Type": "application/json" } : {}) } });
    if (!r.ok) { const e = new Error("github " + r.status); e.status = r.status; throw e; }
    return r.json();
  },
  async findGist(token) {
    for (let p = 1; p <= 10; p++) {
      const l = await this.api(`/gists?per_page=100&page=${p}`, {}, token);
      const g = l.find(x => x.files && x.files[GFILE]); if (g) return g.id;
      if (l.length < 100) break;
    }
    return null;
  },
  create(token) {
    return this.api("/gists", { method: "POST", body: JSON.stringify({ description: "Nepali Saathi progress (kept in sync by the app)", public: false, files: { [GFILE]: { content: JSON.stringify(pack(S)) } } }) }, token);
  },
  async connect(token) {
    const id = (await this.findGist(token)) || (await this.create(token)).id;
    this.put({ token, gist: id });
    return this.run();
  },
  disconnect() { clearTimeout(this.timer); this.put(null); },
  soon() { if (!this.on) return; clearTimeout(this.timer); this.timer = setTimeout(() => this.run(), 3000); },
  run() {
    if (!this.on || navigator.onLine === false) { this.paint(); return Promise.resolve(false); }
    if (this.busy) { this.again = true; return this.busy; }
    clearTimeout(this.timer);
    this.busy = this._run().finally(() => { this.busy = null; if (this.again) { this.again = false; this.run(); } });
    return this.busy;
  },
  async _run() {
    const c = this.cfg(), keep = () => { if (this.cfg().token === c.token) this.put(c); };
    try {
      let g = c.gist ? await this.api("/gists/" + c.gist).catch(e => { if (e.status === 404) return null; throw e; }) : null;
      if (!g) { const id = await this.findGist(c.token); g = id ? await this.api("/gists/" + id) : await this.create(c.token); c.gist = g.id; keep(); }
      const f = g.files && g.files[GFILE]; let txt = f ? f.content : "";
      if (f && f.truncated) txt = await (await fetch(f.raw_url, { cache: "no-store" })).text();
      let remote = null; try { remote = JSON.parse(txt); } catch (e) {}
      let changed = false;
      if (remote && remote.srs) {
        const next = combine(S, remote);
        if (JSON.stringify(next) !== JSON.stringify(S)) { adopt(next); store(); indexAll(); changed = true; }
      }
      const out = pack(S);
      if (!remote || canon(out) !== canon(remote)) await this.api("/gists/" + c.gist, { method: "PATCH", body: JSON.stringify({ files: { [GFILE]: { content: JSON.stringify(out) } } }) });
      c.last = Date.now(); delete c.err; keep();
      if (changed) this.refresh();
      return true;
    } catch (e) {
      c.err = e.status === 401 ? "auth" : e.status === 403 || e.status === 429 ? "limit" : "net"; keep();
      return false;
    } finally { this.paint(); }
  },
  refresh() {
    header();
    const v = (location.hash || "#home").slice(1).split(/-(.+)/)[0];
    if (SAFE_VIEWS.includes(v) && !document.querySelector(".modal")) route();
  },
  label() {
    const c = this.cfg(); if (!c.token) return "";
    if (c.err === "auth") return "GitHub no longer accepts this device's key (it may have expired). Stop syncing on this device, then connect again with a new key.";
    if (c.err === "limit") return "GitHub asked the app to slow down. It will try again shortly.";
    if (c.err === "net" || navigator.onLine === false) return "Couldn't reach GitHub. Your progress is safe on this device and will sync when you're back online.";
    if (!c.last) return "Not synced yet.";
    const m = Math.round((Date.now() - c.last) / 6e4);
    return "Last synced " + (m < 1 ? "just now" : m < 60 ? m + " min ago" : new Date(c.last).toLocaleString()) + ".";
  },
  paint() { const el = document.getElementById("syncst"); if (el && this.on) el.textContent = this.label(); }
};

/* keyboard: space replays audio on practice screens */
document.addEventListener("keydown", e => {
  if (e.key === " " && !/INPUT|SELECT|TEXTAREA|BUTTON/.test(document.activeElement.tagName)) { const b = document.getElementById("play"); if (b) { e.preventDefault(); b.click(); } }
});

window.__test = { translit, key, score, normDeva, fnv };
const API = {
  get S() { return S; }, C, $app, save, addXP, track, Voice, Mic, Sfx, celebrate, habre, cheerHTML, esc, shuffle, sleep, toast, I, backBtn, go, score, micError,
  setCleanup: f => { cleanup = f; },
  VIEWS, HOOKS, quiz, gramBlock, GRAM, UNIT, DLG, grade, introduce, dueList, seenList, day, Rec, header, modal, ne, pick, levelNow, postcard, route, translit, normDeva,
  get ALL() { return ALL; }, get BY_ID() { return BY_ID; },
  pool(min = 8) { const s = seenList().filter(p => !p.own && p.en.length < 60); return s.length >= min ? s : C.units.slice(0, 3).flatMap(u => u.phrases); }
};
applyFreeze();
Remind.sync();
Object.entries(window.GAMES || {}).forEach(([k, f]) => { VIEWS[k] = arg => f(API, arg); });
(window.MODULES || []).forEach(f => f(API));
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
route();
syncSoon = () => Sync.soon();
document.addEventListener("visibilitychange", () => Sync.run());
window.addEventListener("pagehide", () => Sync.run());
window.addEventListener("online", () => Sync.run());
Sync.run();
})();
