// Daily session: one mixed lesson a day. Reviews, new phrases with word-by-word help, grammar in small
// parts with quick checks, "which word, when?" notes, listening, speaking from English, word order, a culture
// moment and, at the end of each unit, a spoken role-play and the unit's listening story (if it has one). Also: the notes to browse, role-plays, weekly
// real-world tasks and the monthly recording. Content lives in daily-content.js and usage-*.js. app.js passes its internals in through API (see MODULES there).
window.MODULES = (window.MODULES || []).concat(function (A) {
const { C, VIEWS, HOOKS, esc, I, shuffle, Voice, Mic, Sfx } = A;
const $ = id => document.getElementById(id);
const toks = ro => ro.replace(/[.?!,;:“”"]/g, "").trim().split(/\s+/).filter(Boolean);
const seed = t => { let h = 7; for (const ch of t) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h; };
const SIZES = { short: { n: 3, r: 6, g: 1, w: 1, u: 1, ur: 1, rd: 1, label: "Short" }, normal: { n: 4, r: 10, g: 1, w: 2, u: 1, ur: 2, rd: 2, label: "Normal" }, long: { n: 6, r: 16, g: 2, w: 4, u: 2, ur: 3, rd: 3, label: "Long" } };
const size = () => SIZES[A.S.settings.size] || SIZES.normal;

/* ---------- course position ---------- */
const unitDone = u => !!A.S.done[u.id + ":speak"];
const curUnit = () => C.units.find(u => !unitDone(u)) || null;
const PLANNED = new Set(Object.values(C.gplan).flat());
const passed = g => !!(A.S.gram[g] && A.S.gram[g].pass);
function sections(g) {
  const out = [];
  g.blocks.forEach(b => { if (b.h || !out.length) out.push([]); out[out.length - 1].push(b); });
  return out;
}
const gm = id => { const m = A.S.gm || (A.S.gm = {}); return m[id] || (m[id] = { s: 0, q: {} }); };
// Quiz items belonging to section k, spread evenly across the chapter.
const checksFor = (g, k) => { const n = sections(g).length; return g.quiz.map((q, i) => i).filter(i => Math.floor(i * n / g.quiz.length) === k); };
function gramQueue(ids) {
  return ids.map(id => A.GRAM[id]).filter(g => g && !passed(g.id)).flatMap(g => {
    const n = sections(g).length; return Array.from({ length: n }, (_, s) => ({ g: g.id, s })).filter(x => x.s >= gm(g.id).s);
  });
}
const unitChapters = u => C.gplan[u.id] || [];
const beyondChapters = () => (C.grammar || []).map(g => g.id).filter(id => !PLANNED.has(id));
function evalChapter(id) {
  const g = A.GRAM[id], m = gm(id); if (!g || passed(id) || m.s < sections(g).length) return;
  const ans = g.quiz.map((q, i) => m.q[i]); if (ans.some(v => v == null)) return;
  const pct = ans.filter(v => v === 1).length / ans.length, r = A.S.gram[id] || (A.S.gram[id] = {});
  r.best = Math.max(r.best || 0, pct);
  if (pct >= 0.8) { r.pass = A.day(); A.addXP(10); A.track("gram"); A.toast("Grammar chapter passed: " + g.title.replace(/<[^>]+>/g, "")); }
  A.save();
}
const rpFor = u => (C.roleplays || []).find(r => r.unit === u.id);
const dlgFor = u => C.dialogues.filter(d => d.unit === u.id);
const storyFor = u => (C.stories || []).find(s => s.unit === u.id && !A.S.story[s.id]);

/* ---------- which word, when? (usage-*.js) ---------- */
const USE = Object.fromEntries((C.usage || []).map(n => [n.id, n]));
const NOTES = (C.usage || []).filter(n => n.blocks); // notes with their own text; the others point to a grammar chapter
const flat = ro => " " + ro.toLowerCase().replace(/[^a-z\s-]/g, " ").replace(/\s+/g, " ").trim() + " ";
const hits = (n, r) => (n.words || []).some(w => w.endsWith("-") ? r.includes(" " + w.slice(0, -1)) : w[0] === "-" ? r.includes(w.slice(1) + " ") : r.includes(" " + w + " "));
const um = id => { const m = A.S.use || (A.S.use = {}), r = m[id] || (m[id] = {}); r.q = r.q || {}; return r; };
const met = id => !!((A.S.use || {})[id] || {}).d;
const meet = id => { const m = um(id); if (!m.d) { m.d = A.day(); m.due = Date.now() + 20 * 36e5; A.save(); } };
const GAPS = [2, 4, 9, 20, 45, 90]; // days until a note's next question, after each right answer
// Notes ready to be shown: the current lesson's, once one of their words has come up, then older lessons' (catching up).
function useQueue(u, fresh) {
  const order = C.units.map(x => x.id), cur = u ? order.indexOf(u.id) : order.length;
  const ok = n => !met(n.id) && (!n.need || A.S.settings[n.need]);
  const now = !u ? [] : NOTES.filter(n => ok(n) && n.unit === u.id).map(n => {
    const ps = u.phrases.filter(p => hits(n, flat(p.ro)));
    return { n, p: fresh.find(p => ps.includes(p)), due: !ps.length || ps.some(p => A.S.srs[p.id]) };
  }).filter(x => x.p || x.due);
  return [...now.sort((a, b) => !!b.p - !!a.p), ...NOTES.filter(n => ok(n) && order.indexOf(n.unit) < cur).map(n => ({ n }))];
}
const useSteps = n => [{ t: "use", id: n.id }, ...[0, 1].filter(i => n.quiz[i]).map(i => ({ t: "uq", id: n.id, q: i }))];
// One question from each note that is due again: first the ones answered wrong, then the ones not asked yet.
function useReviews(k) {
  const now = Date.now();
  return Object.entries(A.S.use || {}).filter(([id, m]) => USE[id] && USE[id].quiz && m.d && (m.due || 0) <= now).sort((a, b) => (a[1].due || 0) - (b[1].due || 0)).slice(0, k).map(([id, m]) => {
    const qs = USE[id].quiz.map((q, i) => i), a = m.q || {}, bad = qs.filter(i => a[i] === 0), todo = qs.filter(i => a[i] == null);
    return { t: "uq", id, q: bad.length ? bad[0] : todo.length ? todo[0] : qs[(m.r || 0) % qs.length], rv: 1 };
  });
}

/* ---------- building today's session ---------- */
function plan() {
  const S = A.S, sz = size(), u = curUnit(), learn = [];
  const rev = shuffle(A.dueList().sort((a, b) => S.srs[a.id].due - S.srs[b.id].due).slice(0, sz.r)).map(p => ({ t: "rev", id: p.id }));
  const gramSteps = q => [{ t: "gram", g: q.g, s: q.s }, ...checksFor(A.GRAM[q.g], q.s).map(i => ({ t: "gq", g: q.g, q: i }))];
  if (u) {
    const left = u.phrases.filter(p => !S.srs[p.id]), fresh = left.slice(0, sz.n);
    const secs = gramQueue(unitChapters(u)), sessions = Math.max(1, Math.ceil(left.length / sz.n));
    const G = secs.slice(0, Math.min(sz.g + 1, Math.max(sz.g, Math.ceil(secs.length / sessions)))).map(gramSteps);
    fresh.forEach((p, k) => {
      learn.push({ t: "new", id: p.id });
      if (k) learn.push({ t: "echo", id: fresh[k - 1].id, m: k % 2 ? "speak" : "heard" });
      if (k === 1 && G.length) learn.push(...G.shift());
    });
    if (fresh.length) learn.push({ t: "echo", id: fresh[fresh.length - 1].id, m: "speak" });
    const b = fresh.slice(1).concat(fresh[0] || []).find(p => { const n = toks(p.ro).length; return n >= 3 && n <= 9; });
    if (b) learn.splice(Math.ceil(learn.length * 0.6), 0, { t: "order", id: b.id });
    G.forEach(g => learn.push(...g));
    useQueue(u, fresh).slice(0, sz.u).forEach(x => {
      const at = x.p ? learn.findIndex(s => s.t === "new" && s.id === x.p.id) : -1;
      if (at < 0) learn.push(...useSteps(x.n)); else learn.splice(at + 1, 0, ...useSteps(x.n));
    });
    if (!fresh.length) {
      if (!secs.length) learn.push(...finale(u));
      else learn.push(...shuffle(u.phrases).slice(0, 3).map(p => ({ t: "echo", id: p.id, m: "speak" })));
    }
    const L = (C.unitLinks || {})[u.id], c = L && (C.culture || []).find(x => x.id === L.c);
    if (c && c.facts && c.facts.length) learn.push({ t: "fact", c: c.id, i: seed(A.day()) % c.facts.length });
  } else {
    gramQueue(beyondChapters()).slice(0, sz.g).forEach(q => learn.push(...gramSteps(q)));
    useQueue(null, []).slice(0, sz.u).forEach(x => learn.push(...useSteps(x.n)));
    const strong = shuffle(A.seenList().filter(p => (S.srs[p.id] || {}).box >= 3)).slice(0, 4);
    strong.forEach(p => learn.push({ t: "echo", id: p.id, m: "speak" }));
    const rps = C.roleplays || []; if (rps.length) learn.push({ t: "rp", id: rps[seed(A.day()) % rps.length].id });
  }
  // Vocabulary top-up: a few words from the packs of lessons whose phrases have all been met.
  const words = (C.packs || []).filter(k => { const pu = A.UNIT[k.unit]; return pu && pu.phrases.every(p => S.srs[p.id]); })
    .flatMap(k => k.words).filter(p => !S.srs[p.id]).slice(0, sz.w);
  words.forEach((p, k) => { learn.push({ t: "new", id: p.id }); if (k) learn.push({ t: "echo", id: words[k - 1].id, m: "heard" }); });
  if (words.length) learn.push({ t: "echo", id: words[words.length - 1].id, m: "speak" });
  learn.splice(Math.min(2, learn.length), 0, ...useReviews(sz.ur));
  // Reading practice for learners of the script: phrases they know well, shown in Devanagari only.
  if (S.settings.script || Object.values(S.read || {}).some(x => x && x.pass))
    shuffle(A.seenList().filter(p => (S.srs[p.id] || {}).box >= 2 && toks(p.ro).length <= 6)).slice(0, sz.rd).forEach(p => learn.push({ t: "read", id: p.id }));
  const out = rev.splice(0, 3);
  learn.forEach((st, k) => { out.push(st); if (k % 3 === 2 && rev.length) out.push(...rev.splice(0, 2)); });
  out.push(...rev, { t: "end" });
  return out;
}
function finale(u) {
  const out = [];
  unitChapters(u).forEach(id => { const g = A.GRAM[id], m = gm(id); if (g && !passed(id)) g.quiz.forEach((q, i) => { if (m.q[i] !== 1) out.push({ t: "gq", g: id, q: i }); }); });
  const r = rpFor(u), ds = dlgFor(u);
  if (r) out.push({ t: "rp", id: r.id });
  const d = ds.find(x => !A.S.dlg[x.id]) || ds[0];
  if (d) out.push({ t: "rp", id: d.id });
  const s = storyFor(u); if (s) out.push({ t: "story", id: s.id });
  if (!r && !d) shuffle(u.phrases).slice(0, 4).forEach(p => out.push({ t: "echo", id: p.id, m: "speak" }));
  out.push({ t: "unit", u: u.id });
  return out;
}
function today(fresh) {
  const S = A.S;
  if (fresh || !S.td || S.td.d !== A.day()) { S.td = { d: A.day(), steps: plan(), i: 0, ok: 0, n: 0, round: fresh && S.td && S.td.d === A.day() ? (S.td.round || 1) + 1 : 1 }; A.save(); }
  return S.td;
}

/* ---------- running it ---------- */
const top = () => { const T = A.S.td; return `${A.backBtn("home", "Home")}<div class="progress" aria-hidden="true"><i style="width:${T.i / T.steps.length * 100}%"></i></div>`; };
const PH = new Set(["rev", "echo"]);
function modeOf(st) {
  if (st.m) return st.m;
  const b = (A.S.srs[st.id] || {}).box || 0;
  return b >= 3 ? "speak" : b === 2 && seed(st.id + A.day()) % 2 ? "heard" : "meaning";
}
function next(n = 1) { const T = A.S.td; T.i += n; A.save(); run(); }
function run() {
  const T = A.S.td; window.scrollTo(0, 0); A.header();
  if (T.i >= T.steps.length) return wrap();
  const st = T.steps[T.i];
  if (PH.has(st.t)) {
    let j = T.i; const items = [];
    while (j < T.steps.length && PH.has(T.steps[j].t)) { const p = A.BY_ID[T.steps[j].id]; if (p) items.push({ p, type: modeOf(T.steps[j]) }); j++; }
    if (!items.length) return next(j - T.i);
    const u = A.UNIT[items[0].p.unit], pool = [...new Map([...A.seenList(), ...(u ? u.phrases : [])].map(p => [p.id, p])).values()];
    A.quiz({ items, pool: pool.length >= 4 ? pool : A.ALL, title: "Today", backTo: "home", backLabel: "Home", at: T.i, of: T.steps.length,
      onDone: (r, t) => { T.ok += r; T.n += t; next(j - T.i); } });
    return;
  }
  (R[st.t] || ((s, done) => done()))(st, () => next());
}

const R = {};
/* A unit's tips are shown one at a time, each on the first new phrase that uses the word it explains
   (tips that match no phrase keep the old rhythm: one every fourth phrase). */
const TIPS = new Map();
function tipFor(u, idx) {
  if (!u.tips || !u.tips.length) return null;
  if (!TIPS.has(u.id)) {
    const at = {}, ros = u.phrases.map(p => " " + p.ro.toLowerCase().replace(/[^a-z\s-]/g, " ").replace(/\s+/g, " ").trim() + " ");
    const free = j => j < ros.length && at[j] == null;
    u.tips.forEach((t, k) => {
      const terms = [...t.matchAll(/<b>(.*?)<\/b>/g)].flatMap(m => m[1].toLowerCase().split(/\/|\.\.\./)).map(s => s.replace(/[^a-z\s-]/g, " ").replace(/\s+/g, " ").trim()).filter(s => s.replace(/-/g, "").length > 1);
      const hit = r => terms.some(w => w[0] === "-" ? r.includes(w.slice(1) + " ") : r.includes(" " + w + " "));
      let j = ros.findIndex((r, i) => free(i) && hit(r));
      if (j < 0) j = [k * 4, ...ros.keys()].find(free);
      if (j != null && j >= 0) at[j] = k;
    });
    TIPS.set(u.id, at);
  }
  const k = TIPS.get(u.id)[idx]; return k == null ? null : u.tips[k];
}

/* New phrase: hear it, see it word by word, learn why it's built that way, say it. */
R.new = (st, done) => {
  const p = A.BY_ID[st.id]; if (!p) return done();
  const u = A.UNIT[p.unit] || { title: "", phrases: [p], tips: [] }, idx = u.phrases.indexOf(p);
  const pk = p.pack && A.PACK[p.pack], tip = pk ? null : tipFor(u, idx);
  A.$app.innerHTML = `${top()}
  <div class="stage">
    <p class="q">${pk ? "New word · " + esc(pk.title) : "New phrase · " + esc(u.title)}</p>
    <button class="hear" id="play" aria-label="Play">${I.speaker}</button>
    <p class="big-ro">${esc(p.ro)}</p>${A.ne(p)}
    <p class="big-en">${esc(p.en)}</p>
    ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
    ${wordsHTML(p)}${whyHTML(p)}
    ${tip ? `<div class="why tip"><p class="eyebrow">Good to know</p><p>${tip}</p></div>` : ""}
    <div class="row" style="justify-content:center"><button class="btn small" id="slow">${I.slow}Slowly</button>${Mic.ok ? `<button class="btn small" id="try">${I.mic}Say it</button>` : ""}</div>
    <p class="muted" id="tryres" aria-live="polite">${Mic.ok ? "" : "Say it out loud twice, copying the rhythm."}</p>
  </div>
  <div class="row end"><button class="btn primary" id="next">Next</button></div>`;
  $("play").onclick = () => Voice.say(p.ne);
  $("slow").onclick = () => Voice.say(p.ne, true);
  if ($("try")) $("try").onclick = async () => {
    const b = $("try"); Voice.stop(); b.classList.add("listening"); $("tryres").textContent = "Listening… speak now";
    try { const r = A.score(p.ne, await Mic.listen()), pct = Math.round(r.s * 100); $("tryres").innerHTML = `<span class="verdict ${pct >= 85 ? "good" : pct >= 70 ? "ok" : "bad"}">${pct >= 85 ? "Great" : pct >= 70 ? "Close" : "Not quite"} · ${pct}%</span>`; if (pct >= 70) { Sfx.good(1); A.track("speakOK"); } }
    catch (err) { $("tryres").textContent = A.micError(err); }
    b.classList.remove("listening");
  };
  $("next").onclick = () => { A.introduce(p.id); A.addXP(1); done(); };
  Voice.say(p.ne);
};

function parse(w) {
  const lw = w.toLowerCase();
  if (C.gloss[lw]) return { w, g: C.gloss[lw], v: VERBS.has(lw) };
  if (!C.notSuffix.includes(lw)) for (const [s, g, k] of C.suffix) {
    const stem = lw.slice(0, -s.length);
    if (!lw.endsWith(s) || stem.length < (k === "v" ? 2 : 3)) continue;
    const r = k === "v" ? C.roots[stem] || C.roots[stem.replace(/n$/, "")] : C.gloss[stem];
    return { w, stem, suf: s, g: (r ? r + " + " : "") + g, v: k === "v" };
  }
  return { w, g: "" };
}
const VERBS = new Set(["ho", "hoina", "chha", "chhaina", "chhu", "chhan", "hun", "hunchha", "hunuhunchha", "bhayo", "thiyo", "thiena", "laagyo", "laagchha", "parchha", "chaahiyo", "pugyo", "jaaun", "gaen", "bujhen", "bujhina", "sakchhu", "sakdina"]);
const WNOTE = new Map();
function noteOf(w) {
  const lw = w.toLowerCase();
  if (!WNOTE.has(lw)) WNOTE.set(lw, ((C.usage || []).find(n => (n.words || []).some(t => !t.includes(" ") && (t.endsWith("-") ? lw.startsWith(t.slice(0, -1)) : t[0] === "-" ? lw.endsWith(t.slice(1)) : lw === t))) || {}).id || null);
  return WNOTE.get(lw);
}
function wordsHTML(p) {
  const ws = toks(p.ro).map(parse); if (ws.length < 2 || ws.filter(x => x.g).length < 2) return "";
  const chip = (x, k) => {
    const id = noteOf(x.w), in_ = `<b>${x.suf ? `${esc(x.stem)}<i>-${esc(x.suf)}</i>` : esc(x.w)}</b><small>${esc(x.g || "·")}${x.v && k === ws.length - 1 ? " · verb last" : ""}</small>`, cls = `wchip${x.v && k === ws.length - 1 ? " v" : ""}`;
    return id ? `<button class="${cls} link" data-note="${id}" title="${esc(USE[id].title)}">${in_}</button>` : `<span class="${cls}">${in_}</span>`;
  };
  return `<div class="words" aria-label="Word by word"><p class="eyebrow">Word by word</p><div class="wchips">${ws.map(chip).join("")}</div>${ws.some(x => noteOf(x.w)) ? `<p class="muted small wnote-hint">Tap a dashed word: which one, when?</p>` : ""}</div>`;
}
function whyHTML(p) {
  const ro = p.ro.toLowerCase(), seen = A.S.pat || (A.S.pat = {});
  const hits = C.patterns.filter(x => x.re.test(ro) && (seen[x.g] || 0) < 6).sort((a, b) => (seen[a.g] || 0) - (seen[b.g] || 0)).slice(0, 2);
  if (!hits.length) return "";
  hits.forEach(x => { seen[x.g] = (seen[x.g] || 0) + 1; });
  return `<div class="why"><p class="eyebrow">Why it's built this way</p>${hits.map(x => `<p>${x.note}</p>`).join("")}</div>`;
}

/* Word order: tap the words into Nepali order. */
R.order = (st, done) => {
  const p = A.BY_ID[st.id]; if (!p) return done();
  const target = toks(p.ro);
  let bank = shuffle(target.map((w, i) => ({ w, i }))), ans = [], checked = false;
  if (bank.every((b, i) => b.i === i)) bank.reverse();
  const paint = () => {
    const ok = ans.map(a => a.w).join(" ") === target.join(" ");
    A.$app.innerHTML = `${top()}
    <div class="stage">
      <p class="q">Word order · tap the words in Nepali order</p>
      <h2 class="g-q">${esc(p.en)}</h2>
      <div class="answer ${checked ? (ok ? "ok" : "bad") : ""}">${ans.length ? ans.map((a, j) => `<button class="tile" data-a="${j}" ${checked ? "disabled" : ""}>${esc(a.w)}</button>`).join("") : '<span class="muted small">Tap the words below</span>'}</div>
      <div class="bank">${bank.map((b, j) => `<button class="tile" data-b="${j}" ${checked ? "disabled" : ""}>${esc(b.w)}</button>`).join("")}</div>
      ${checked ? `<div class="g-why"><p class="verdict ${ok ? "good" : "bad"}">${ok ? A.pick(["Perfect order!", "Syaabaas!", "Exactly right"]) : "Almost. Here's the order:"}</p><p class="big-ro">${esc(p.ro)}</p>${wordsHTML(p)}</div>` : ""}
      <div class="row" style="justify-content:center">${checked ? `<button class="btn primary" id="bnext">Next</button>` : `<button class="btn" id="bhint">Hint</button><button class="btn primary" id="bcheck" ${bank.length ? "disabled" : ""}>Check</button>`}</div>
    </div>`;
    A.$app.querySelectorAll("[data-b]").forEach(t => t.onclick = () => { ans.push(bank.splice(+t.dataset.b, 1)[0]); paint(); });
    A.$app.querySelectorAll("[data-a]").forEach(t => t.onclick = () => { bank.push(ans.splice(+t.dataset.a, 1)[0]); paint(); });
    if (checked) $("bnext").onclick = done;
    else {
      $("bhint").onclick = () => { Voice.say(p.ne); const w = target[ans.length]; if (w != null) A.toast("Next word: " + w); };
      $("bcheck").onclick = () => { checked = true; const T = A.S.td; T.n++; if (ok) { T.ok++; Sfx.good(1); A.addXP(2); A.track("build"); } else Sfx.bad(); Voice.say(p.ne); paint(); };
    }
  };
  paint();
};

/* Grammar, one part at a time. */
R.gram = (st, done) => {
  const g = A.GRAM[st.g]; if (!g) return done();
  const secs = sections(g), sec = secs[st.s] || [];
  A.$app.innerHTML = `${top()}
  <section><p class="eyebrow">How Nepali works · ${esc(g.level)} · part ${st.s + 1} of ${secs.length}</p><h1>${esc(g.title)}</h1>${st.s ? "" : `<p class="muted">${esc(g.sub)}</p>`}</section>
  <article class="g-body">${sec.map(A.gramBlock).join("")}</article>
  <div class="row end"><button class="btn primary" id="next">Got it</button></div>`;
  $("next").onclick = () => { const m = gm(g.id); m.s = Math.max(m.s, st.s + 1); A.addXP(1); A.save(); evalChapter(g.id); done(); };
};
// One multiple-choice question with its explanation (grammar checks and "which word" questions).
function ask(q, label, done, record, note) {
  const opts = shuffle([q.a, ...q.o]);
  A.$app.innerHTML = `${top()}
  <div class="stage">
    <p class="eyebrow">${esc(label)}</p>
    ${q.say ? `<button class="hear" data-say="${esc(q.say)}" aria-label="Play">${I.speaker}</button>` : ""}
    <h2 class="g-q">${q.q}</h2>
    <div class="opts">${opts.map((o, j) => `<button class="opt${q.deva ? " deva-opt" : ""}" data-j="${j}">${o}</button>`).join("")}</div>
    <div id="gwhy" class="g-why" hidden></div>
  </div>`;
  A.$app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    const ok = opts[+b.dataset.j] === q.a, T = A.S.td;
    A.$app.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (opts[+x.dataset.j] === q.a) x.classList.add("right"); });
    if (ok) { Sfx.good(1); A.addXP(2); T.ok++; } else { b.classList.add("wrong"); Sfx.bad(); }
    T.n++; record(ok); A.save();
    if (q.after) Voice.say(q.after);
    const w = $("gwhy"); w.hidden = false;
    w.innerHTML = `<p class="verdict ${ok ? "good" : "bad"}">${ok ? A.pick(["Right!", "Correct!", "Syaabaas!"]) : "Not quite"}</p>${q.why ? `<p>${q.why}</p>` : ""}${note && !ok ? `<button class="btn small ghost" data-note="${note}">See the note again</button>` : ""}<button class="btn primary" id="gnext">Next</button>`;
    $("gnext").onclick = done; $("gnext").focus();
  });
}
R.gq = (st, done) => {
  const g = A.GRAM[st.g], q = g && g.quiz[st.q]; if (!q) return done();
  ask(q, "Quick check · " + g.title, () => { evalChapter(g.id); done(); }, ok => { const m = gm(g.id); if (m.q[st.q] !== 1) m.q[st.q] = ok ? 1 : 0; });
};

/* Which word, when? A short note, two of its questions at once, the rest on later days. */
const noteBody = n => {
  if (n.blocks) return n.blocks.map(A.gramBlock).join("");
  const g = A.GRAM[n.gram]; if (!g) return "";
  const sec = n.sec && sections(g).find(x => x[0].h === n.sec);
  return (sec || g.blocks).map(A.gramBlock).join("");
};
R.use = (st, done) => {
  const n = USE[st.id]; if (!n || !n.blocks) return done();
  A.$app.innerHTML = `${top()}
  <section><p class="eyebrow">Which word, when? · ${esc(n.level)}</p><h1>${esc(n.title)}</h1><p class="muted">${esc(n.sub)}</p></section>
  <article class="g-body${n.level === "Script" ? " script" : ""}">${noteBody(n)}</article>
  <div class="row end"><button class="btn primary" id="next">Got it</button></div>`;
  $("next").onclick = () => { meet(n.id); A.addXP(2); done(); };
};
R.uq = (st, done) => {
  const n = USE[st.id], q = n && n.quiz && n.quiz[st.q]; if (!q) return done();
  ask(q, (st.rv ? "Which word, when? · " : "Quick check · ") + n.title, done, ok => {
    const m = um(n.id); m.q[st.q] = ok ? 1 : 0;
    if (st.rv) { m.r = ok ? (m.r || 0) + 1 : Math.max(0, (m.r || 0) - 1); m.due = Date.now() + (ok ? GAPS[Math.min(m.r, GAPS.length) - 1] : 1) * 864e5 - 4 * 36e5; }
  }, n.id);
};
// The note as a sheet over the current screen (from a word chip or after a wrong answer).
function noteSheet(id) {
  const n = USE[id]; if (!n) return;
  const m = document.createElement("div"); m.className = "modal";
  m.innerHTML = `<div class="modal-in sheet" role="dialog" aria-modal="true"><p class="eyebrow">Which word, when?</p><h2>${esc(n.title)}</h2><p class="muted">${esc(n.sub)}</p>
    <article class="g-body${n.level === "Script" ? " script" : ""}">${noteBody(n)}</article><button class="btn primary" data-close>Close</button></div>`;
  document.body.appendChild(m); m.querySelector("[data-close]").focus();
  m.addEventListener("click", e => { if (e.target === m || e.target.closest("[data-close]")) m.remove(); });
}
document.addEventListener("click", e => { const b = e.target.closest && e.target.closest("[data-note]"); if (b) { e.preventDefault(); noteSheet(b.dataset.note); } });

/* Read it: a phrase you know, in Devanagari only. Pick how it is said, then hear it. */
R.read = (st, done) => {
  const p = A.BY_ID[st.id]; if (!p) return done();
  const n = toks(p.ro).length, near = shuffle(A.seenList().filter(x => x.ro !== p.ro)).sort((a, b) => Math.abs(toks(a.ro).length - n) - Math.abs(toks(b.ro).length - n)).slice(0, 2);
  if (near.length < 2) return done();
  const opts = shuffle([p, ...near]);
  A.$app.innerHTML = `${top()}
  <div class="stage">
    <p class="q">Read it · how is this said?</p>
    <p class="big-ne read-ne">${esc(p.ne)}</p>
    <div class="opts">${opts.map((o, j) => `<button class="opt" data-j="${j}">${esc(o.ro.replace(/[.?!]+$/, ""))}</button>`).join("")}</div>
    <div id="gwhy" class="g-why" hidden></div>
  </div>`;
  A.$app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    const ok = opts[+b.dataset.j] === p, T = A.S.td;
    A.$app.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (opts[+x.dataset.j] === p) x.classList.add("right"); });
    if (ok) { Sfx.good(1); A.addXP(2); T.ok++; } else { b.classList.add("wrong"); Sfx.bad(); }
    T.n++; A.save(); Voice.say(p.ne);
    const w = $("gwhy"); w.hidden = false;
    w.innerHTML = `<p class="verdict ${ok ? "good" : "bad"}">${ok ? A.pick(["Right!", "You read that!", "Syaabaas!"]) : "Not quite"}</p><p class="big-ro">${esc(p.ro)}</p><p>${esc(p.en)}</p><button class="btn primary" id="gnext">Next</button>`;
    $("gnext").onclick = done; $("gnext").focus();
  });
};

R.fact = (st, done) => {
  const c = (C.culture || []).find(x => x.id === st.c); if (!c) return done();
  A.$app.innerHTML = `${top()}
  <div class="stage"><p class="eyebrow">Culture moment · ${esc(c.title)}</p><p class="fact-text">${c.facts[st.i % c.facts.length]}</p>
  <a class="small" href="#cult-${c.id}">Read the whole article later</a></div>
  <div class="row end"><button class="btn primary" id="next">Next</button></div>`;
  $("next").onclick = () => { A.addXP(1); done(); };
};

R.rp = (st, done) => playRP(st.id, { inSession: true, onDone: done });
R.story = (st, done) => A.VIEWS.story(st.id, { top, done: (r, n) => { const T = A.S.td; T.ok += r; T.n += n; done(); } });

R.unit = (st, done) => {
  const u = A.UNIT[st.u]; if (!u) return done();
  const first = !unitDone(u);
  ["learn", "listen", "speak"].forEach(m => { A.S.done[u.id + ":" + m] = true; });
  u.phrases.forEach(p => A.introduce(p.id)); A.save();
  if (first) { A.addXP(10); A.celebrate(140); setTimeout(() => Sfx.bowl(), 600); }
  const nx = C.units[C.units.indexOf(u) + 1], place = (C.trail[u.id] || {}).place;
  A.$app.innerHTML = `${top()}<div class="stage">${A.cheerHTML("good", 96)}<p class="eyebrow">Unit complete</p><h1>${esc(u.title)}</h1>
  <p class="muted">${place ? `You've trekked to ${esc(place)}. ` : ""}Its phrases now live in your daily reviews.${nx ? ` Next: ${esc(nx.title)}.` : " That was the last unit. From now on, sessions go beyond B1."}</p>
  ${A.postcard ? A.postcard(u, true) : ""}</div><div class="row end"><button class="btn primary" id="next">Continue</button></div>`;
  $("next").onclick = done;
};

function wrap() {
  const T = A.S.td, firstFinish = !T.done;
  if (firstFinish) { T.done = true; A.addXP(5); A.track("step"); if (T.steps.some(s => s.t === "rev")) A.track("review"); A.save(); A.celebrate(120); Sfx.win(); }
  const nw = T.steps.filter(s => s.t === "new").length, u = curUnit(), due = A.dueList().length;
  A.$app.innerHTML = `
  <div class="stage">${A.cheerHTML("good", 96)}<p class="eyebrow">Today's session${T.round > 1 ? " · round " + T.round : ""}</p><h1>Done. Syaabaas!</h1>
    <p class="muted">${T.n ? `${T.ok} of ${T.n} answers right` : "Well done"}${nw ? ` · ${nw} new phrase${nw > 1 ? "s" : ""}` : ""} · ${A.S.xp[A.day()] || 0} XP today</p>
    <p class="muted small">${u ? `Tomorrow: your reviews, then more of ${esc(u.title)}.` : "Tomorrow: reviews, a grammar deep dive and a role-play."}${due ? ` ${due} phrase${due > 1 ? "s are" : " is"} still due; a second round picks them up.` : ""}</p>
    <div class="row" style="justify-content:center"><button class="btn primary" data-go="home">Home</button><button class="btn" id="more">Another round</button></div>
  </div>`;
  $("more").onclick = () => { today(true); run(); };
}

VIEWS.today = () => { today(); A.setCleanup(() => { Voice.stop(); Mic.stop(); }); run(); };

/* ---------- which word, when? the notes to browse ---------- */
const LVL = lv => ((C.levels || []).find(l => l.id === lv) || {}).name || (lv === "Script" ? "Reading the script" : lv);
function useRow(n) {
  const m = (A.S.use || {})[n.id] || {}, right = n.quiz ? n.quiz.filter((q, i) => (m.q || {})[i] === 1).length : 0;
  const state = n.gram ? (passed(n.gram) ? '<span class="tick">Passed</span>' : '<span class="muted small">Grammar</span>') : !m.d ? '<span class="muted small">New</span>' : right === n.quiz.length ? '<span class="tick">Solid</span>' : `<span class="muted small">${right} / ${n.quiz.length}</span>`;
  return `<button class="li" data-go="word-${n.id}" data-find="${esc((n.title + " " + n.sub + " " + (n.words || []).join(" ")).toLowerCase())}"><span class="play-dot g-num">${n.gram ? "§" : "?"}</span><span><span class="ro">${esc(n.title)}</span><br><span class="en">${esc(n.sub)}</span></span>${state}</button>`;
}
VIEWS.which = () => {
  const all = C.usage || [], nMet = NOTES.filter(n => met(n.id)).length;
  A.$app.innerHTML = `${A.backBtn("home", "Home")}
  <section><p class="eyebrow">A1 → C2</p><h1>Which word, when?</h1>
    <p class="muted">One English word, several Nepali ones. Each note says which to use when, with examples to hear and situations to test yourself on. Notes arrive in your daily session as their words come up, and their questions come back on later days. Here you can read any of them.</p>
    <div class="progress"><i style="width:${NOTES.length ? nMet / NOTES.length * 100 : 0}%"></i></div><p class="muted small">${nMet} of ${NOTES.length} notes met</p>
    <input class="find" id="wfind" type="search" placeholder="Search: now, take, hot, laagyo…" aria-label="Search the notes"></section>
  <section class="cards"><button class="card lead" data-go="wquiz-mix"><span class="k">Practise</span><h3>Ten mixed situations</h3><span class="muted">${nMet ? "From the notes you've met" : "From the first notes"}</span></button></section>
  ${[...new Set(all.map(n => n.level))].map(lv => `<section data-grp><h2>${esc(LVL(lv))}</h2><div class="list">${all.filter(n => n.level === lv).map(useRow).join("")}</div></section>`).join("")}`;
  $("wfind").oninput = e => {
    const q = e.target.value.trim().toLowerCase();
    A.$app.querySelectorAll("[data-find]").forEach(b => { b.hidden = !!q && !b.dataset.find.includes(q); });
    A.$app.querySelectorAll("[data-grp]").forEach(g => { g.hidden = !g.querySelector("[data-find]:not([hidden])"); });
  };
};
VIEWS.word = id => {
  const n = USE[id]; if (!n) return A.go("which");
  const u = A.UNIT[n.unit], g = n.gram && A.GRAM[n.gram];
  if (n.blocks) meet(id);
  A.$app.innerHTML = `${A.backBtn("which", "Which word, when?")}
  <section><p class="eyebrow">${esc(n.level)}${u ? " · " + esc(u.title) : ""}</p><h1>${esc(n.title)}</h1><p class="muted">${esc(n.sub)}</p></section>
  <article class="g-body${n.level === "Script" ? " script" : ""}">${noteBody(n)}</article>
  ${n.blocks ? `<section class="tips"><h3>Check yourself</h3><p class="muted">${n.quiz.length} situations, each with an explanation.</p><button class="btn primary" data-go="wquiz-${id}">Start</button></section>`
    : g ? `<section class="tips"><h3>From the grammar course</h3><p class="muted">${esc(g.title)}. Its check is in the chapter.</p><button class="btn primary" data-go="gram-${g.id}">Open the chapter</button></section>` : ""}`;
};
VIEWS.wquiz = id => {
  const mix = id === "mix", n = USE[id]; if (!mix && !(n && n.quiz)) return A.go("which");
  const metNotes = NOTES.filter(x => met(x.id)), pool = mix ? (metNotes.length ? metNotes : NOTES.slice(0, 4)) : [n];
  const qs = shuffle(pool.flatMap(x => x.quiz.map((q, i) => ({ ...q, on: ok => { um(x.id).q[i] = ok ? 1 : 0; } })))).slice(0, mix ? 10 : 99);
  if (!qs.length) return A.go("which");
  const back = mix ? "which" : "word-" + id, label = mix ? "Which word, when?" : n.title;
  A.mcq({ title: label, qs, back, backLabel: label, onDone: (right, total) => {
    const pass = right / total >= 0.8;
    if (!mix && right === total) { const m = um(id); m.r = (m.r || 0) + 1; m.due = Date.now() + GAPS[Math.min(m.r, GAPS.length) - 1] * 864e5; }
    A.addXP(right); A.save();
    A.$app.innerHTML = `${A.backBtn(back, label)}<div class="stage">${A.cheerHTML(pass ? "good" : "bad")}<h1>${right} of ${total} right</h1>
      <p class="muted">${pass ? "These are settling in. Their questions will come back in your daily sessions." : "Have another look at the notes, then try again."}</p>
      <div class="row" style="justify-content:center"><button class="btn primary" data-go="${back}">${mix ? "All notes" : "Back to the note"}</button><button class="btn" data-go="wquiz-${id}">Try again</button></div></div>`;
    if (pass) { A.celebrate(40); Sfx.win(); }
  } });
};
HOOKS.unit = id => { const ns = (C.usage || []).filter(n => n.unit === id); return ns.length ? `<section><h2>Which word, when?</h2><div class="list">${ns.map(useRow).join("")}</div></section>` : ""; };

/* ---------- role-plays ---------- */
function getRP(id) {
  const r = (C.roleplays || []).find(x => x.id === id); if (r) return r;
  const d = A.DLG[id]; if (!d) return null;
  const nodes = {}; let k = 0, cur = nodes.n0 = { say: [] };
  d.lines.forEach(l => {
    if (l.who === "A") cur.say.push(l);
    else { const nid = "n" + (++k); cur.opts = [{ ne: l.ne, ro: l.ro, en: l.en, go: nid }]; cur = nodes[nid] = { say: [] }; }
  });
  cur.end = true;
  return { id, dlg: true, unit: d.unit, title: d.title, scene: d.scene, start: "n0", nodes };
}
let rpGen = 0;
function playRP(id, { inSession, onDone }) {
  const rp = getRP(id); if (!rp) return onDone ? onDone() : A.go("roleplays");
  const g = ++rpGen, log = []; let node = rp.start, words = true, en = false, tries = 0, good = 0, mine = 0, scored = 0, busy = false;
  const alive = () => g === rpGen;
  const paint = () => {
    const n = rp.nodes[node], turn = !busy && n && n.opts;
    A.$app.innerHTML = `${inSession ? top() : A.backBtn("roleplays", "Role-plays")}
    <section><p class="eyebrow">Role-play${rp.dlg ? "" : " · your choices change the scene"}</p><h1>${esc(rp.title)}</h1><p class="muted">${esc(rp.scene)}</p></section>
    <div class="toggles"><button class="tog" id="tw" aria-pressed="${words}">Words</button><button class="tog" id="te" aria-pressed="${en}">English</button></div>
    <div class="chat">${log.map(l => `<button class="bubble ${l.you ? "me" : ""}" data-say="${esc(l.ne)}"><span class="play-dot">${I.speaker}</span><span><span class="who">${l.you ? "You" : "Them"}</span><br>${words || l.you ? `<span class="ro">${esc(l.ro)}</span>` : `<span class="dots">• • • • •</span>`}${en || l.you ? `<br><span class="en">${esc(l.en)}</span>` : ""}${l.s != null ? `<br><span class="verdict ${l.s >= 0.85 ? "good" : l.s >= 0.7 ? "ok" : "bad"}">${Math.round(l.s * 100)}%</span>` : ""}</span></button>`).join("")}</div>
    ${turn ? `<div class="stage rp-turn">
      <p class="q">Your turn${n.opts.length > 1 ? `: choose what to say, then say it in Nepali` : `: say it in Nepali`}</p>
      <div class="opts">${n.opts.map((o, j) => `<button class="opt rp-opt" data-o="${j}"><span>${esc(o.en)}</span><span class="ro hint" hidden>${esc(o.ro)}</span></button>`).join("")}</div>
      ${Mic.ok ? `<button class="hear mic" id="rpmic" aria-label="Speak">${I.mic}</button><p class="muted small" id="rptip">${tries ? "Not clear yet. Try again, or tap what you meant." : "Tap the mic and say your choice. No mic right now? Say it aloud and tap it."}</p>` : `<p class="muted small">Say your choice out loud, then tap it to hear how it sounds.</p>`}
      <button class="btn small ghost" id="rphint">Show the words</button>
    </div>` : ""}`;
    $("tw").onclick = () => { words = !words; paint(); };
    $("te").onclick = () => { en = !en; paint(); };
    if (!turn) return;
    $("rphint").onclick = () => A.$app.querySelectorAll(".rp-opt .hint").forEach(h => { h.hidden = !h.hidden; });
    A.$app.querySelectorAll(".rp-opt").forEach(b => b.onclick = () => {
      choose(n.opts[+b.dataset.o], null);
    });
    if ($("rpmic")) $("rpmic").onclick = async () => {
      const m = $("rpmic"); if (m.classList.contains("listening")) { Mic.stop(); return; }
      Voice.stop(); m.classList.add("listening"); $("rptip").textContent = "Listening… speak now";
      try {
        const alts = await Mic.listen(); if (!alive()) return;
        const sc = n.opts.map(o => A.score(o.ne, alts).s), best = sc.indexOf(Math.max(...sc));
        if (sc[best] >= 0.55) choose(n.opts[best], sc[best]); else { tries++; Sfx.bad(); paint(); }
      } catch (err) { if (!alive()) return; m.classList.remove("listening"); A.toast(A.micError(err)); paint(); }
    };
  };
  const choose = async (o, s) => {
    busy = true; tries = 0; mine++; if (s != null) { scored++; if (s >= 0.7) good++; }
    if (s != null && s >= 0.7) { Sfx.good(good); A.track("speakOK"); }
    log.push({ ...o, you: true, s }); paint(); await Voice.say(o.ne); if (!alive()) return; await A.sleep(300);
    node = o.go; busy = false; play();
  };
  const play = async () => {
    const n = rp.nodes[node]; if (!n) return end();
    busy = true;
    for (const l of [].concat(n.say || [])) { log.push(l); paint(); await Voice.say(l.ne); if (!alive()) return; await A.sleep(350); }
    busy = false;
    if (n.end || !n.opts) return end();
    paint();
  };
  const end = () => {
    const S = A.S, first = !(S.rp || {})[id]; S.rp = S.rp || {}; S.rp[id] = (S.rp[id] || 0) + 1;
    if (rp.dlg) S.dlg[id] = true;
    A.save(); A.addXP(first ? 10 : 3); A.track("convo");
    const T = S.td; if (inSession && T) { T.n += scored; T.ok += good; }
    A.$app.innerHTML = `${inSession ? top() : A.backBtn("roleplays", "Role-plays")}
    <div class="stage">${A.cheerHTML("good", 80)}<h1>Scene complete</h1><p class="muted">${mine} line${mine === 1 ? "" : "s"} spoken${scored ? `, ${good} of ${scored} clear to the mic` : ""}.${rp.dlg ? "" : " Next time, pick the other choices: the scene goes differently."}</p>
    <div class="row" style="justify-content:center">${inSession ? `<button class="btn primary" id="next">Continue</button>` : `<button class="btn primary" data-go="rp-${id}">Again</button><button class="btn" data-go="roleplays">All role-plays</button>`}</div></div>`;
    Sfx.win(); A.celebrate(60);
    if (inSession) $("next").onclick = onDone;
  };
  A.setCleanup(() => { rpGen++; Voice.stop(); Mic.stop(); });
  play();
}
VIEWS.rp = id => playRP(id, {});
VIEWS.roleplays = () => {
  const S = A.S, done = S.rp || {}, row = (id, t, sub) => `<button class="li" data-go="rp-${id}"><span class="play-dot">${I.mic}</span><span><span class="ro">${esc(t)}</span><br><span class="en">${esc(sub)}</span></span><span class="muted small">${done[id] ? "×" + done[id] : ""}</span></button>`;
  A.$app.innerHTML = `${A.backBtn("home", "Home")}
  <section><p class="eyebrow">Speak your part</p><h1>Role-plays</h1><p class="muted">They speak, you answer out loud. In the branching scenes, what you say decides what happens next.</p></section>
  <section><h2>Branching scenes</h2><div class="list">${(C.roleplays || []).map(r => row(r.id, r.title, (A.UNIT[r.unit] || {}).title + " · " + r.scene)).join("")}</div></section>
  <section><h2>Conversations</h2><div class="list">${C.dialogues.map(d => row(d.id, d.title, ((A.UNIT[d.unit] || {}).title || "") + " · " + d.scene)).join("")}</div></section>`;
};

/* ---------- weekly real-world task ---------- */
const weekKey = () => { const d = new Date(); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return A.day(d); };
const band = () => { const l = A.levelNow(); return l === "A1" || l === "A2" ? "start" : l === "B1" ? "mid" : "beyond"; };
function weekTask() {
  const pool = C.weekly[band()], w = (A.S.week || {})[weekKey()] || {};
  return pool.find(t => t.id === w.t) || pool[seed(weekKey()) % pool.length];
}
function weekHTML() {
  const t = weekTask(), w = (A.S.week || {})[weekKey()] || {};
  return `<section class="weekly ${w.done ? "ok" : ""}"><div class="row split"><p class="eyebrow">This week in the real world</p><span class="muted small">+${t.min} min of real Nepali</span></div>
    <h3>${esc(t.t)}</h3><p class="muted">${esc(t.d)}</p>
    <div class="row">${w.done ? `<span class="chip">${I.check}Done. A new task arrives on Monday.</span>` : `<button class="btn small primary" id="wdone">I did it</button><button class="btn small ghost" id="wswap">Another task</button>`}</div></section>`;
}
function weekWire() {
  const W = () => { const S = A.S; S.week = S.week || {}; return S.week[weekKey()] || (S.week[weekKey()] = {}); };
  if ($("wdone")) $("wdone").onclick = () => { const t = weekTask(), w = W(); w.t = t.id; w.done = A.day(); A.S.imm[A.day()] = (A.S.imm[A.day()] || 0) + t.min; A.addXP(15); A.save(); A.celebrate(80); Sfx.win(); A.toast(`Logged ${t.min} minutes of real-world Nepali. +15 XP`); A.go("home"); };
  if ($("wswap")) $("wswap").onclick = () => { const pool = C.weekly[band()], t = weekTask(), w = W(); w.t = pool[(pool.indexOf(t) + 1) % pool.length].id; A.save(); A.route(); };
}

/* ---------- monthly 60-second recording ---------- */
const monthKey = () => A.day().slice(0, 7);
const monoLevel = () => { const l = A.levelNow(); return C.monologue[l] ? l : "B2"; };
const IDB = {
  db: null,
  open() { return this.db || (this.db = new Promise((res, rej) => { const r = indexedDB.open("saathi-audio", 1); r.onupgradeneeded = () => r.result.createObjectStore("rec"); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); })); },
  async op(mode, f) { const db = await this.open(); return new Promise((res, rej) => { const t = db.transaction("rec", mode), q = f(t.objectStore("rec")); t.oncomplete = () => res(q && q.result); t.onerror = () => rej(t.error); }); },
  put(k, v) { return this.op("readwrite", s => s.put(v, k)); },
  get(k) { return this.op("readonly", s => s.get(k)); }
};
VIEWS.mono = () => {
  const S = A.S, lv = monoLevel(), m = C.monologue[lv], mk = monthKey(), past = Object.entries(S.mono || {}).sort((a, b) => a[0] < b[0] ? 1 : -1);
  let url = null, blob = null, timer = null, left = 60, rate = 0;
  const paint = () => {
    A.$app.innerHTML = `${A.backBtn("home", "Home")}
    <section><p class="eyebrow">Monthly check-in · ${esc(lv)}</p><h1>60 seconds: ${esc(m.t)}</h1><p class="muted">${esc(m.d)} Speak for a full minute without stopping. Mistakes are fine; keep going. Once a month, the same kind of topic, so you can hear yourself get smoother.</p></section>
    <div class="row">${m.hints.map(h => `<span class="chip">${esc(h)}</span>`).join("")}</div>
    <div class="stage">
      ${!A.Rec.ok ? `<p class="muted">This browser can't record. Try Chrome or Safari.</p>` : A.Rec.on ? `<p class="mono-count">${left}</p><button class="btn primary" id="mstop">${I.stop}Stop</button>` : url ? `
        <audio controls src="${url}"></audio>
        <p class="q">How did it feel?</p>
        <div class="row" style="justify-content:center">${["Very hard", "Hard", "OK", "Smooth", "Easy"].map((t, i) => `<button class="chip ${rate === i + 1 ? "on" : ""}" data-r="${i + 1}">${t}</button>`).join("")}</div>
        <div class="row" style="justify-content:center"><button class="btn" id="mredo">Record again</button><button class="btn primary" id="msave" ${rate ? "" : "disabled"}>Save this month's recording</button></div>`
      : `<button class="hear mic" id="mrec" aria-label="Start recording">${I.mic}</button><p class="muted">Tap to start. It stops by itself after 60 seconds.</p>`}
    </div>
    ${past.length ? `<section><h2>Your recordings</h2><p class="muted small">Recordings stay on the device where you made them.</p><div class="list">${past.map(([k, v]) => `<button class="li" data-play="${k}"><span class="play-dot">${I.play}</span><span><span class="ro">${esc(k)} · ${esc(v.lv)}</span><br><span class="en">Felt: ${["", "very hard", "hard", "OK", "smooth", "easy"][v.rate] || "?"}</span></span><span></span></button>`).join("")}</div></section>` : ""}`;
    const stop = async () => { clearInterval(timer); url = await A.Rec.stop(); blob = url && await (await fetch(url)).blob(); paint(); };
    if ($("mrec")) $("mrec").onclick = async () => {
      try { Voice.stop(); await A.Rec.start(); left = 60; paint(); timer = setInterval(() => { left--; const c = A.$app.querySelector(".mono-count"); if (c) c.textContent = left; if (left <= 0) stop(); }, 1000); }
      catch (e) { A.toast("The microphone is blocked. Allow it in the browser, then try again."); }
    };
    if ($("mstop")) $("mstop").onclick = stop;
    if ($("mredo")) $("mredo").onclick = () => { url = blob = null; rate = 0; paint(); };
    A.$app.querySelectorAll("[data-r]").forEach(b => b.onclick = () => { rate = +b.dataset.r; paint(); });
    if ($("msave")) $("msave").onclick = async () => {
      try { await IDB.put(mk, blob); } catch (e) { A.toast("Couldn't store the audio on this device. Your rating is saved."); }
      const first = !(S.mono || {})[mk]; S.mono = S.mono || {}; S.mono[mk] = { d: A.day(), lv, rate }; A.save();
      if (first) { A.addXP(20); A.celebrate(100); Sfx.win(); }
      A.toast("Saved. See you next month."); VIEWS.mono();
    };
    A.$app.querySelectorAll("[data-play]").forEach(b => b.onclick = async () => {
      try { const bl = await IDB.get(b.dataset.play); if (!bl) return A.toast("That one was recorded on another device."); Voice.stop(); new Audio(URL.createObjectURL(bl)).play(); }
      catch (e) { A.toast("Couldn't open the recording."); }
    });
  };
  A.setCleanup(() => { clearInterval(timer); if (A.Rec.on) A.Rec.stop(); });
  paint();
};

/* ---------- home: today's session first ---------- */
HOOKS.home = () => {
  const T = today(), st = T.steps, cnt = t => st.filter(s => s.t === t).length, u = curUnit();
  const gram = [...new Set(st.filter(s => s.t === "gram").map(s => s.g))].map(id => A.GRAM[id]).filter(Boolean);
  const rps = st.filter(s => s.t === "rp").map(s => getRP(s.id)).filter(Boolean);
  const nWords = st.filter(s => s.t === "new" && (A.BY_ID[s.id] || {}).pack).length;
  const mins = Math.max(3, Math.round(st.reduce((a, s) => a + ({ rev: 0.4, echo: 0.5, new: 0.8, gram: 2, gq: 0.5, use: 1.5, uq: 0.5, read: 0.4, order: 0.8, rp: 3, fact: 0.3 }[s.t] || 0), 0)));
  const mix = [cnt("rev") && `${cnt("rev")} reviews`, cnt("new") - nWords && `${cnt("new") - nWords} new phrases`, nWords && `${nWords} new word${nWords > 1 ? "s" : ""}`, ...gram.map(g => "Grammar: " + g.title.replace(/<[^>]+>/g, "")), ...st.filter(s => s.t === "use" && USE[s.id]).map(s => "Which word: " + USE[s.id].title),
    cnt("echo") && "Speaking from English", cnt("order") && "Word order", cnt("read") && "Reading Devanagari", ...rps.map(r => "Role-play: " + r.title), cnt("fact") && "Culture moment", cnt("unit") && "Unit finish"].filter((x, i, all) => x && all.indexOf(x) === i);
  const sz = A.S.settings.size || "normal", mk = monthKey();
  return `<section class="daily-card ${T.done ? "ok" : ""}">
    <div class="row split"><p class="eyebrow">Today's session · about ${mins} min${T.round > 1 ? " · round " + T.round : ""}</p>
      <span class="sizes" role="group" aria-label="Session length">${Object.entries(SIZES).map(([k, v]) => `<button class="chip ${k === sz ? "on" : ""}" data-size="${k}">${v.label}</button>`).join("")}</span></div>
    <h2>${T.done ? "Done for today. Syaabaas!" : u ? esc(u.title) + (T.i ? " · keep going" : "") : "Beyond B1"}</h2>
    <div class="mix">${mix.map(x => `<span class="chip">${esc(x)}</span>`).join("")}</div>
    ${T.i && !T.done ? `<div class="progress"><i style="width:${T.i / st.length * 100}%"></i></div>` : ""}
    <div class="row">${T.done ? `<button class="btn primary" id="tmore">Another round</button>` : `<button class="btn primary big" data-go="today">${T.i ? "Continue" : "Start today's session"}</button>`}</div>
  </section>
  ${weekHTML()}
  ${(A.S.mono || {})[mk] ? "" : `<button class="card lead mono-card" data-go="mono"><span class="k">Monthly check-in</span><h3>Record 60 seconds of Nepali</h3><span class="muted">Hear how much smoother you get, month by month</span></button>`}`;
};
HOOKS.homeWire = () => {
  A.$app.querySelectorAll("[data-size]").forEach(b => b.onclick = () => {
    A.S.settings.size = b.dataset.size; const T = A.S.td;
    if (T && T.d === A.day() && !T.i && !T.done) A.S.td = null; // not started yet: rebuild at the new length
    A.save(); A.route();
  });
  if ($("tmore")) $("tmore").onclick = () => { today(true); A.go("today"); };
  weekWire();
};
});
