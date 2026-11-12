// Start-up test: runs every script on the page without a browser and checks that the app starts and that
// saved progress survives the start. tools/validate.py runs it (with node, or with jsc on a Mac without node).
// By hand:  node tools/smoke.js [app folder]     or     jsc tools/smoke.js -- "$PWD"
var isNode = typeof process !== "undefined" && !!(process.versions && process.versions.node);
var root = (isNode ? process.argv[2] || require("path").join(__dirname, "..") : (typeof arguments !== "undefined" && arguments[0]) || ".").replace(/\/$/, "");
var read = isNode ? function (f) { return require("fs").readFileSync(root + "/" + f, "utf8"); } : function (f) { return readFile(root + "/" + f); };
var run = isNode ? function (f) { require("vm").runInThisContext(read(f), { filename: f }); } : function (f) { load(root + "/" + f); };
var say = isNode ? console.log : print;
var G = globalThis;
function def(name, value) { Object.defineProperty(G, name, { value: value, writable: true, configurable: true }); }

// A stand-in for page elements and browser objects: any property or call gives another stand-in, and values set on it are kept.
function any() {
  return new Proxy(function () {}, {
    get: function (t, k) {
      if (k === Symbol.toPrimitive) return function () { return ""; };
      if (k === Symbol.iterator) return function* () {};
      if (k === "then" || k === "toJSON") return undefined;
      return k in t ? t[k] : (t[k] = any());
    },
    set: function (t, k, v) { t[k] = v; return true; },
    has: function () { return true; },
    apply: function () { return any(); },
    construct: function () { return any(); }
  });
}
var store = {}, els = {};
var noop = function () { return 0; };
def("window", G); def("self", G);
def("localStorage", {
  getItem: function (k) { return k in store ? store[k] : null; },
  setItem: function (k, v) { store[k] = String(v); },
  removeItem: function (k) { delete store[k]; }
});
def("document", {
  getElementById: function (id) { return els[id] || (els[id] = any()); },
  querySelector: function () { return null; },
  querySelectorAll: function () { return []; },
  createElement: any, addEventListener: noop, removeEventListener: noop,
  body: any(), documentElement: any(), activeElement: any(), hidden: false, title: ""
});
def("navigator", { onLine: false, language: "en", userAgent: "smoke" });
def("location", { hash: "", protocol: "file:", hostname: "", href: "file:///", search: "" });
def("addEventListener", noop);
def("removeEventListener", noop);
def("setTimeout", noop); def("setInterval", noop); def("clearTimeout", noop); def("clearInterval", noop);
def("requestAnimationFrame", noop);
def("matchMedia", function () { return { matches: false, addEventListener: noop, addListener: noop }; });
def("fetch", function () { return new Promise(function () {}); });
def("scrollTo", noop);

var fails = [];
function check(ok, what) { if (!ok) fails.push(what); }
var KEY = "nepali-saathi-v1", A = null;
var scripts = (read("index.html").match(/<script src="[^"]+"/g) || []).map(function (s) { return s.slice(13, -1); });
check(scripts[scripts.length - 1] === "app.js", "app.js is not the last script on the page");

try {
  scripts.filter(function (f) { return f !== "app.js"; }).forEach(run);
  G.MODULES = (G.MODULES || []).concat(function (api) { A = api; });

  // 1. A first visit: nothing saved.
  run("app.js");
  check(A && A.S && Object.keys(A.S.srs).length === 0, "a first visit does not start with empty progress");
  check(typeof els.app.innerHTML === "string" && els.app.innerHTML.length > 200, "the home screen was not drawn on a first visit");

  // 2. A returning learner: the saved progress must be what the app starts with, and what it saves again.
  var ids = G.COURSE.units[0].phrases.slice(0, 3).map(function (p) { return p.id; });
  var u0 = G.COURSE.units[0].id, now = Date.now();
  var seed = { srs: {}, done: {}, xp: { "2026-01-05": 40 }, at: now - 1000, settings: { goal: 50 },
    mine: [{ id: "my-1", ne: "नमस्ते", ro: "namaste", en: "hello" }, { id: "not a valid id!", ne: "x" }, null] };
  ids.forEach(function (id) { seed.srs[id] = { box: 3, due: now + 864e5, t: now - 864e5 }; });
  seed.done[u0] = true;
  store = {}; store[KEY] = JSON.stringify(seed); els = {}; A = null;
  run("app.js");
  var kept = function (s, where) {
    check(s && ids.every(function (id) { return s.srs && s.srs[id] && s.srs[id].box === 3; }), "saved phrases are lost " + where);
    check(s && s.xp && s.xp["2026-01-05"] === 40, "saved XP is lost " + where);
    check(s && s.done && s.done[u0] === true, "finished lessons are lost " + where);
    check(s && s.settings && s.settings.goal === 50, "saved settings are lost " + where);
    check(s && Array.isArray(s.mine) && s.mine.length === 1 && s.mine[0].id === "my-1", "the learner's own phrases are not kept (or a broken one is not dropped) " + where);
  };
  kept(A && A.S, "when the app starts");
  if (A) { A.save(); kept(JSON.parse(store[KEY] || "null"), "when the app saves after starting"); }
  check(els.app && typeof els.app.innerHTML === "string" && els.app.innerHTML.length > 200, "the home screen was not drawn for a returning learner");

  // 3. The "which word, when?" notes (usage-*.js) are well formed.
  var seenNote = {}, unitIds = G.COURSE.units.map(function (u) { return u.id; }), gramIds = (G.COURSE.grammar || []).map(function (g) { return g.id; });
  (G.COURSE.usage || []).forEach(function (n) {
    var w = "note " + n.id + ": ";
    check(/^w-[a-z0-9-]+$/.test(n.id || "") && !seenNote[n.id], w + "the id is missing, malformed or used twice"); seenNote[n.id] = 1;
    check(n.title && n.sub && n.level && Array.isArray(n.words), w + "title, sub, level or words is missing");
    check(unitIds.indexOf(n.unit) >= 0, w + "unit " + n.unit + " does not exist");
    if (n.gram) check(gramIds.indexOf(n.gram) >= 0, w + "grammar chapter " + n.gram + " does not exist");
    else {
      check(Array.isArray(n.blocks) && n.blocks.length >= 3 && Array.isArray(n.quiz) && n.quiz.length >= 3, w + "needs blocks and at least three questions");
      (n.quiz || []).forEach(function (q, i) {
        check(q.q && q.a && q.why && Array.isArray(q.o) && q.o.length === 2 && q.o.indexOf(q.a) < 0 && q.o[0] !== q.o[1], w + "question " + (i + 1) + " needs q, a, why and two different wrong options");
      });
    }
  });
} catch (e) {
  fails.push("the app stops with an error while starting: " + e + (e && e.stack ? "\n" + String(e.stack).split("\n").slice(0, 4).join("\n") : ""));
}

fails.forEach(function (f) { say("FAIL: " + f); });
say(fails.length ? "start-up test: " + fails.length + " failed" : "start-up test: ok (" + scripts.length + " scripts)");
if (isNode) process.exit(fails.length ? 1 : 0);
else if (fails.length) throw new Error("start-up test failed");
else quit();
