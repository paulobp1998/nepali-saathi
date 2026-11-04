(() => {
"use strict";
const C = window.COURSE;
const LEVELS = ["A1", "A2", "B1"];
const DLG = Object.fromEntries(C.dialogues.map(d => [d.id, d]));
const STORY = Object.fromEntries((C.stories || []).map(s => [s.id, s]));
const $app = document.getElementById("app");

/* ---------- storage ---------- */
const KEY = "nepali-saathi-v1";
const DEF = { srs: {}, done: {}, dlg: {}, story: {}, xp: {}, imm: {}, mine: [], settings: { voice: "auto", slow: 0.7, script: false, goal: 30, drill: "ne-en", gap: 2 } };
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
function merge(j) { const d = JSON.parse(JSON.stringify(DEF)); return { ...d, ...j, settings: { ...d.settings, ...(j.settings || {}) } }; }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
const day = (d = new Date()) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
function addXP(n) { const t = day(); S.xp[t] = (S.xp[t] || 0) + n; save(); header(); }
function streak() {
  let n = 0; const d = new Date();
  if (!S.xp[day(d)]) d.setDate(d.getDate() - 1);
  while (S.xp[day(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* ---------- spaced repetition (Leitner boxes) ---------- */
const INT = [0, 1, 3, 7, 16, 35].map(d => d * 864e5);
function introduce(id) { if (!S.srs[id]) S.srs[id] = { box: 1, due: Date.now() + 6 * 36e5 }; }
function grade(id, ok) {
  const now = Date.now(); let r = S.srs[id];
  if (!r) r = S.srs[id] = { box: 0, due: now };
  if (ok) { if (r.due <= now || r.box === 0) { r.box = Math.min(5, r.box + 1); r.due = now + INT[r.box]; } }
  else { r.box = 1; r.due = now + 10 * 6e4; }
  save();
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
      const fin = () => { if (this.done === fin) this.done = null; res(); };
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

VIEWS.home = () => {
  const due = dueList().length, seen = seenList().length;
  const next = C.units.find(u => !S.done[u.id + ":learn"]) || C.units.find(u => !unitFlags(u).every(Boolean)) || C.units[0];
  const nextMode = !S.done[next.id + ":learn"] ? "learn" : !S.done[next.id + ":listen"] ? "listen" : "speak";
  const verb = { learn: "Learn", listen: "Listening quiz", speak: "Speaking practice" }[nextMode];
  const x = S.xp[day()] || 0;
  $app.innerHTML = `
  <section class="today">
    <div><p class="eyebrow">Listen · understand · speak</p><h1>Namaste! Ready to talk?</h1></div>
    <p class="stat muted"><b>${x}</b> / ${S.settings.goal} XP today</p>
  </section>
  <section class="cards">
    <button class="card lead" data-go="${nextMode}-${next.id}"><span class="k">Up next</span><h3>${esc(next.title)}</h3><span class="muted">${verb} · ${next.phrases.length} phrases</span></button>
    <button class="card" data-go="review"><span class="k">Review</span><h3>${due ? due + " phrases due" : "Nothing due"}</h3><span class="muted">${seen ? seen + " phrases in your memory bank" : "Phrases you learn come back here at the right time"}</span></button>
    <button class="card" data-go="drill"><span class="k">Hands-free</span><h3>Listening drill</h3><span class="muted">Audio only. For walking, cooking or commuting.</span></button>
  </section>
  <section class="cards">
    <button class="card" data-go="path"><span class="k">A1 → C2</span><h3>Your path</h3><span class="muted">${esc(levelNow())} now · ${immHours().toFixed(1)} h of real-world Nepali logged</span></button>
    <button class="card" data-go="mine"><span class="k">Sentence mining</span><h3>My phrases</h3><span class="muted">${S.mine.length ? S.mine.length + " phrases you added" : "Add phrases you hear in real life"}</span></button>
  </section>
  ${LEVELS.map(lv => {
    const us = C.units.filter(u => u.level === lv), lvInfo = C.levels.find(l => l.id === lv);
    const dl = C.dialogues.filter(d => (UNIT[d.unit] || {}).level === lv), sts = (C.stories || []).filter(s => s.level === lv);
    return `<section>
      <div class="row split"><h2>${esc(lvInfo.name)}</h2><span class="muted" style="font-size:.85rem">${us.filter(u => S.done[u.id + ":speak"]).length} / ${us.length} lessons spoken</span></div>
      <p class="muted">${esc(lvInfo.can)}</p>
      <div class="units">${us.map((u, i) => `
        <button class="unit-row" data-go="unit-${u.id}"><span class="num">${i + 1}</span><span><span class="t">${esc(u.title)}</span><br><span class="s">${esc(u.sub)}</span></span>${flagsHTML(unitFlags(u))}</button>`).join("")}
      </div>
      ${dl.length || sts.length ? `<h3 style="margin-top:8px">Conversations &amp; stories</h3><div class="list">${dl.map(d => `
        <button class="li" data-go="dialogue-${d.id}"><span class="play-dot">${I.play}</span><span><span class="ro">${esc(d.title)}</span><br><span class="en">Conversation · ${esc(d.scene)}</span></span>${S.dlg[d.id] ? '<span class="tick">Done</span>' : "<span></span>"}</button>`).join("")}${sts.map(s => `
        <button class="li" data-go="story-${s.id}"><span class="play-dot">${I.speaker}</span><span><span class="ro">${esc(s.title)}</span><br><span class="en">Listening story · ${esc(s.intro)}</span></span>${S.story[s.id] ? '<span class="tick">Done</span>' : "<span></span>"}</button>`).join("")}
      </div>` : ""}
    </section>`;
  }).join("")}
  <section class="cards">
    <button class="card" data-go="sounds"><span class="k">Ear training</span><h3>Sounds of Nepali</h3><span class="muted">Hear the sounds English doesn't have, then test your ear.</span></button>
    <button class="card" data-go="settings"><span class="k">Voice, mic &amp; backup</span><h3>Settings</h3><span class="muted">${esc(Voice.label())}</span></button>
  </section>`;
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
      if (Object.keys(answers).length === qs.length && Object.values(answers).filter(Boolean).length >= qs.length - 1 && !S.story[id]) { S.story[id] = true; save(); addXP(10); toast("Story complete"); }
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
      <div class="list">${S.mine.slice().reverse().map(p => `<div class="li"><button class="play-dot" data-say="${esc(p.ne)}" aria-label="Play">${I.speaker}</button><span><span class="ro">${esc(p.ro)}</span><br><span class="en">${esc(p.en)}</span></span><button class="btn small ghost" data-del="${p.id}">Delete</button></div>`).join("")}</div></section>`;
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
    $app.querySelectorAll("[data-del]").forEach(b => b.onclick = () => { S.mine = S.mine.filter(p => p.id !== b.dataset.del); delete S.srs[b.dataset.del]; save(); indexAll(); draw(); });
  };
  draw();
};

VIEWS.unit = id => {
  const u = UNIT[id]; if (!u) return go("home");
  const f = unitFlags(u), dl = C.dialogues.filter(d => d.unit === id);
  $app.innerHTML = `
  ${backBtn("home", "All lessons")}
  <section><p class="eyebrow">${esc(u.level)} · Lesson ${C.units.filter(x => x.level === u.level).indexOf(u) + 1}</p><h1>${esc(u.title)}</h1><p class="muted">${esc(u.sub)}</p></section>
  <section>${flagsHTML(f, true)}<div class="legend">${FLAG_NAMES.map((n, i) => `<span class="${f[i] ? "on" : ""}">${n}</span>`).join("")}</div></section>
  <section class="modes">
    <button class="card ${!f[0] ? "lead" : ""}" data-go="learn-${id}"><span class="k">1 · Learn</span><h3>Hear and repeat</h3><span class="muted">${u.phrases.length} phrases, one at a time</span></button>
    <button class="card ${f[0] && !f[1] ? "lead" : ""}" data-go="listen-${id}"><span class="k">2 · Listen</span><h3>Listening quiz</h3><span class="muted">Hear it, pick the meaning</span></button>
    <button class="card ${f[1] && !f[2] ? "lead" : ""}" data-go="speak-${id}"><span class="k">3 · Speak</span><h3>Say it in Nepali</h3><span class="muted">${Mic.ok ? "Your speech is checked" : "Say it aloud, then check"}</span></button>
  </section>
  <section class="tips"><h3>How it works</h3><ul>${u.tips.map(t => `<li>${t}</li>`).join("")}</ul></section>
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
      else { u.phrases.forEach(q => introduce(q.id)); const first = !S.done[id + ":learn"]; S.done[id + ":learn"] = true; save(); addXP(first ? 5 : 2); finish(`You've heard all ${u.phrases.length} phrases`, "Next: the listening quiz. You'll only hear the audio this time.", id, "listen"); }
    };
    if (u.phrases[i + 1]) Voice.prefetch(u.phrases[i + 1].ne);
    Voice.say(p.ne);
  };
  cleanup = () => { if (Rec.on) Rec.stop(); };
  draw();
};

function finish(title, sub, unitId, nextMode, extra = "") {
  const u = UNIT[unitId];
  $app.innerHTML = `
  <div class="stage">
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
function quiz({ items, pool, title, backTo, backLabel, onDone }) {
  let i = 0, right = 0, answered = false, selfMode = !Mic.ok;
  const total = items.length;
  const draw = () => {
    answered = false;
    const it = items[i], p = it.p;
    const top = `${backBtn(backTo, backLabel)}<div class="progress" aria-hidden="true"><i style="width:${i / total * 100}%"></i></div>`;
    if (it.type === "speak") {
      $app.innerHTML = `${top}
      <div class="stage">
        <p class="q">${esc(title)} · ${i + 1} of ${total} · say it in Nepali</p>
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
            if (!answered && (pct >= 70 || tries >= 3)) { answered = true; const ok = pct >= 70; if (ok) right++; grade(p.id, ok && !it.hinted); addXP(ok ? (pct >= 85 ? 3 : 2) : 0); $("next").hidden = false; $("skip").hidden = true; }
          } catch (err) {
            m.classList.remove("listening"); $("micTip").textContent = "Tap, then speak";
            const msg = micError(err); toast(msg);
            if (!Mic.ok) { selfMode = true; draw(); }
          }
        };
      }
      const mark = ok => { if (answered) return; answered = true; if (ok) right++; grade(p.id, ok && !it.hinted); if (ok) addXP(2); advance(); };
      $("skip").onclick = () => { if (!answered) grade(p.id, false); advance(); };
      $("next").onclick = advance;
    } else {
      const opts = shuffle([p, ...shuffle(pool.filter(q => q.id !== p.id && q.en !== p.en && q.ro !== p.ro)).slice(0, 3)]);
      const field = it.type === "meaning" ? "en" : "ro";
      $app.innerHTML = `${top}
      <div class="stage">
        <p class="q">${esc(title)} · ${i + 1} of ${total} · ${it.type === "meaning" ? "what does it mean?" : "which one did you hear?"}</p>
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
        grade(p.id, ok); if (ok) addXP(1);
        $("res").hidden = false; $("res").innerHTML = `<p class="verdict ${ok ? "good" : "bad"}">${ok ? "Correct" : "Not this time"}</p><p class="big-ro">${esc(p.ro)}</p>${ne(p)}<p>${esc(p.en)}</p>${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}`;
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
    const pass = r / t >= 0.7; if (pass) { const first = !S.done[id + ":listen"]; S.done[id + ":listen"] = true; save(); if (first) addXP(5); }
    finish(`${r} of ${t} right`, pass ? "Your ear is getting there. Next: say these phrases yourself." : "Get 7 of 10 to earn the flag. Each try trains your ear.", id, pass ? "speak" : "listen");
  } });
};

VIEWS.speak = id => {
  const u = UNIT[id]; if (!u) return go("home");
  const items = pickItems(u, Math.min(8, u.phrases.length)).map(p => ({ p, type: "speak" }));
  quiz({ items, pool: u.phrases, title: u.title, backTo: "unit-" + id, backLabel: u.title, onDone: (r, t) => {
    const pass = r / t >= 0.6; if (pass) { const first = !S.done[id + ":speak"]; S.done[id + ":speak"] = true; save(); if (first) addXP(5); }
    const nextU = C.units[C.units.indexOf(u) + 1];
    $app.innerHTML = ""; finish(`${r} of ${t} said well`, pass ? "Flag earned. These phrases now go into your review, which brings them back before you forget." : "Get 5 of 8 to earn the flag. Try the slow audio, then copy it.", id, pass ? null : "speak",
      pass && nextU ? `<button class="btn primary" data-go="unit-${nextU.id}">Next lesson: ${esc(nextU.title)}</button>` : "");
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
    addXP(3);
    finish(`${r} of ${t} right`, dueList().length ? `${dueList().length} more due. Missed phrases come back in 10 minutes.` : "All caught up. Missed phrases come back in 10 minutes; the rest when they're due.", null, null, `<button class="btn primary" data-go="review">Review more</button>`);
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
    const first = !S.dlg[id]; S.dlg[id] = true; save(); addXP(first ? 10 : 3);
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
        count++; paint(); if (count % 4 === 0) addXP(1);
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

/* Settings */
VIEWS.settings = () => {
  const st = S.settings;
  $app.innerHTML = `
  ${backBtn("home", "Home")}
  <section><h1>Settings</h1></section>
  <section>
    <div class="field"><label for="voice">Voice</label>
      <select id="voice"><option value="auto" ${st.voice === "auto" ? "selected" : ""}>Online Nepali voice, device voice when offline</option><option value="device" ${st.voice === "device" ? "selected" : ""}>Device voice only</option></select>
      <p class="muted">The online voice is Google Translate's free Nepali voice. Most Macs and iPhones have no Nepali voice, so offline they fall back to Hindi, which is close but not exact.</p>
      <div class="row"><button class="btn small" id="test">${I.speaker}Test voice</button><span class="muted" id="vlabel">${esc(Voice.label())}</span></div></div>
    <div class="field"><label for="slow">Slow speed: <span id="slowv">${Math.round(st.slow * 100)}%</span></label><input type="range" id="slow" min="0.5" max="0.9" step="0.05" value="${st.slow}"></div>
    <div class="field"><label class="switch"><input type="checkbox" id="script" ${st.script ? "checked" : ""}> Show Nepali script (Devanagari)</label><p class="muted">Off by default. Romanized text is enough for listening and speaking.</p></div>
    <div class="field"><label for="goal">Daily goal</label><select id="goal">${[15, 30, 60].map(n => `<option value="${n}" ${st.goal === n ? "selected" : ""}>${n} XP a day</option>`).join("")}</select></div>
    <div class="field"><label>Speech checking</label>
      <div class="status"><span>Recognition</span>${SRC ? '<span class="ok">Available</span>' : '<span class="no">Not in this browser</span>'}<span>Recording</span>${Rec.ok ? '<span class="ok">Available</span>' : '<span class="no">Not available</span>'}</div>
      <p class="muted">Speech checking uses the browser's free speech recognition. It works best in Google Chrome (computer or Android). Elsewhere you say the phrase aloud and check yourself.</p>
      ${SRC ? `<div class="row"><button class="btn small" id="mtest">${I.mic}Test: say "namaste"</button><span class="muted" id="mout"></span></div>` : ""}</div>
    <div class="field"><label>Move progress between devices</label><p class="muted">Progress is saved separately on each device. To move it, copy the backup code here and paste it on the other device (for example, send it to yourself by email).</p>
      <div class="row"><button class="btn small" id="bcopy">Copy backup code</button><span class="muted" id="bst"></span></div>
      <textarea id="bcode" class="inp" rows="3" placeholder="Paste a backup code here to restore it"></textarea>
      <div class="row"><button class="btn small" id="brestore">Restore from code</button></div></div>
    <div class="field"><label>Progress</label><p class="muted">Saved on this device only. Clearing browser data erases it, so keep a backup code somewhere safe.</p>
      <div class="row"><button class="btn small" id="reset">Reset all progress</button><span id="confirm" hidden><button class="btn small primary" id="yes" style="background:var(--bad);border-color:var(--bad);color:#fff">Yes, erase everything</button> <button class="btn small ghost" id="no">Cancel</button></span></div></div>
  </section>`;
  const $ = s => document.getElementById(s);
  $("voice").onchange = e => { st.voice = e.target.value; Voice.online = true; Voice.fails = 0; save(); $("vlabel").textContent = Voice.label(); };
  $("test").onclick = async () => { await Voice.say("नमस्ते! तपाईंलाई कस्तो छ?"); $("vlabel").textContent = Voice.label(); };
  $("slow").oninput = e => { st.slow = +e.target.value; save(); $("slowv").textContent = Math.round(st.slow * 100) + "%"; };
  $("slow").onchange = () => Voice.say("बिस्तारै बोल्नुहोस् न।", true);
  $("script").onchange = e => { st.script = e.target.checked; save(); };
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
    try { const j = JSON.parse(decodeURIComponent(escape(atob($("bcode").value.trim())))); if (!j.srs) throw 0; S = merge(j); save(); indexAll(); toast("Progress restored."); go("home"); }
    catch (e) { $("bst").textContent = "That code isn't valid. Copy the whole code and try again."; }
  };
  $("reset").onclick = () => { $("confirm").hidden = false; $("reset").hidden = true; };
  $("no").onclick = () => { $("confirm").hidden = true; $("reset").hidden = false; };
  $("yes").onclick = () => { const keep = S.settings; S = JSON.parse(JSON.stringify(DEF)); S.settings = keep; save(); indexAll(); toast("Progress erased."); go("home"); };
};

/* keyboard: space replays audio on practice screens */
document.addEventListener("keydown", e => {
  if (e.key === " " && !/INPUT|SELECT|TEXTAREA|BUTTON/.test(document.activeElement.tagName)) { const b = document.getElementById("play"); if (b) { e.preventDefault(); b.click(); } }
});

window.__test = { translit, key, score, normDeva, fnv };
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
route();
})();
