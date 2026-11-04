// Mini-games. Each receives the app's API (see API in app.js) and draws into $app.
window.GAMES = (function () {
const momoSVG = '<svg viewBox="0 0 40 30" aria-hidden="true"><path d="M3 24 Q2 10 20 6 Q38 10 37 24 Z" fill="#f4e7cf" stroke="#c9a978" stroke-width="1.5"/><path d="M20 6 Q19 3 20 1 Q21 3 20 6" fill="#c9a978"/><path d="M11 21 Q15 12 20 7 M29 21 Q25 12 20 7 M20 22 L20 8" stroke="#d8bf94" stroke-width="1.2" fill="none"/></svg>';

function intro(A, { title, eyebrow, body, rules, best, start }) {
  A.$app.innerHTML = `
  ${A.backBtn("games", "Games")}
  <div class="stage game-intro">
    ${A.habre("happy", 96)}
    <p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="muted" style="max-width:46ch">${body}</p>
    <ul class="rules">${rules.map(r => `<li>${r}</li>`).join("")}</ul>
    ${best ? `<p class="chip">Best: ${best}</p>` : ""}
    <button class="btn primary" id="start">Start</button>
  </div>`;
  document.getElementById("start").onclick = start;
}

/* ---------- Momo Rush: 60 seconds of fast listening ---------- */
function momo(A) {
  const S = A.S, pool = A.pool(8);
  intro(A, { title: "Momo Rush", eyebrow: "Listening game · 60 seconds",
    body: "The momo stall is open and the orders come fast. Listen to each phrase and tap what it means before the time runs out.",
    rules: ["Each right answer serves a momo.", "Three in a row doubles your momos, six in a row triples them.", "A wrong answer costs 3 seconds."],
    best: S.best.momo ? S.best.momo + " momos" : "", start: play });
  function play() {
    let left = 60, momos = 0, combo = 0, right = 0, total = 0, busy = false, over = false, cur = null;
    const end0 = Date.now() + 60000; let deadline = end0;
    A.$app.innerHTML = `
    ${A.backBtn("games", "Games")}
    <div class="row split"><span class="chip" id="mtime">60 s</span><span class="chip" id="mcombo" hidden></span><span class="chip"><b id="mcount">0</b>&nbsp;momos</span></div>
    <div class="progress"><i id="mbar" style="width:100%"></i></div>
    <div class="stage">
      <div class="plate" id="plate" aria-hidden="true"></div>
      <button class="hear" id="play" aria-label="Play again">${A.I.speaker}</button>
      <div class="opts" id="mopts"></div>
    </div>`;
    const $ = x => document.getElementById(x);
    const tick = setInterval(() => {
      left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      $("mtime").textContent = left + " s"; $("mbar").style.width = (left / 60 * 100) + "%";
      if (left <= 0) finish();
    }, 200);
    A.setCleanup(() => { over = true; clearInterval(tick); });
    const plate = () => { $("plate").innerHTML = Array.from({ length: Math.min(momos, 30) }, (_, i) => `<span style="--i:${i}">${momoSVG}</span>`).join(""); };
    function round() {
      if (over) return;
      busy = false; cur = pool[Math.random() * pool.length | 0];
      const opts = A.shuffle([cur, ...A.shuffle(pool.filter(p => p.en !== cur.en)).slice(0, 3)]);
      $("mopts").innerHTML = opts.map(o => `<button class="opt" data-id="${o.id}">${A.esc(o.en)}</button>`).join("");
      $("mopts").querySelectorAll(".opt").forEach(b => b.onclick = () => answer(b));
      A.Voice.say(cur.ne);
    }
    function answer(b) {
      if (busy || over) return; busy = true; total++;
      const ok = b.dataset.id === cur.id;
      $("mopts").querySelectorAll(".opt").forEach(x => { x.disabled = true; if (x.dataset.id === cur.id) x.classList.add("right"); });
      if (ok) {
        combo++; right++; const mult = combo >= 6 ? 3 : combo >= 3 ? 2 : 1; momos += mult; A.Sfx.good(combo);
        $("mcount").textContent = momos; plate();
        $("mcombo").hidden = combo < 3; $("mcombo").textContent = `${combo} in a row · ×${mult}`;
      } else {
        b.classList.add("wrong"); combo = 0; $("mcombo").hidden = true; A.Sfx.bad(); deadline -= 3000;
      }
      setTimeout(round, ok ? 450 : 1100);
    }
    function finish() {
      if (over) return; over = true; clearInterval(tick); A.Voice.stop();
      const prev = S.best.momo || 0; if (momos > prev) S.best.momo = momos; A.save();
      A.track("game"); A.track("momo", momos); A.track("listenOK", right); A.addXP(Math.max(1, momos));
      if (momos > prev && momos > 0) { A.celebrate(); A.Sfx.win(); }
      A.$app.innerHTML = `
      <div class="stage">
        <div class="plate big" aria-hidden="true">${Array.from({ length: Math.min(momos, 30) }, (_, i) => `<span style="--i:${i}">${momoSVG}</span>`).join("")}</div>
        <h1>${momos} momos served</h1>
        <p class="muted">${right} of ${total} orders right${momos > prev && prev ? ` · new record (was ${prev})` : prev ? ` · best ${Math.max(prev, momos)}` : ""}</p>
        ${A.cheerHTML(right >= total * 0.7 ? "good" : "bad")}
        <div class="row" style="justify-content:center"><button class="btn primary" id="again">Play again</button><button class="btn" data-go="games">Games</button></div>
      </div>`;
      document.getElementById("again").onclick = play;
    }
    round();
  }
}

/* ---------- Memory Match: pair each sound with its meaning ---------- */
function memory(A) {
  const S = A.S;
  intro(A, { title: "Memory Match", eyebrow: "Listening game · 6 pairs",
    body: "Half the cards speak Nepali, half show the meaning. Flip two at a time and pair each sound with what it means.",
    rules: ["Tap a speaker card to hear it. Remember what it said.", "Find all six pairs in as few moves as you can.", "Ten moves or fewer earns a badge."],
    best: S.best.memory ? S.best.memory + " moves" : "", start: play });
  function play() {
    const ps = A.shuffle(A.pool(6).filter((p, i, a) => a.findIndex(q => q.en === p.en) === i)).slice(0, 6);
    const cards = A.shuffle(ps.flatMap(p => [{ p, kind: "ne" }, { p, kind: "en" }]));
    let open = [], moves = 0, found = 0, lock = false; const t0 = Date.now();
    A.$app.innerHTML = `
    ${A.backBtn("games", "Games")}
    <div class="row split"><span class="chip"><b id="mm">0</b>&nbsp;moves</span><span class="chip"><b id="mf">0</b>&nbsp;/ 6 pairs</span></div>
    <div class="memgrid">${cards.map((c, i) => `<button class="mem" data-i="${i}" aria-label="Card ${i + 1}"><span class="back">${A.habre("happy", 34)}</span><span class="face">${c.kind === "ne" ? `<span class="mem-ne">${A.I.speaker}<small>Nepali</small></span>` : `<span class="mem-en">${A.esc(c.p.en)}</span>`}</span></button>`).join("")}</div>`;
    A.$app.querySelectorAll(".mem").forEach(b => b.onclick = () => {
      const i = +b.dataset.i, c = cards[i];
      if (c.kind === "ne" && (b.classList.contains("up") || b.classList.contains("done"))) { A.Voice.say(c.p.ne); return; }
      if (lock || b.classList.contains("up") || b.classList.contains("done")) return;
      b.classList.add("up"); open.push(b); if (c.kind === "ne") A.Voice.say(c.p.ne);
      if (open.length < 2) return;
      moves++; document.getElementById("mm").textContent = moves;
      const [x, y] = open.map(o => cards[+o.dataset.i]); const pair = open; open = [];
      if (x.p.id === y.p.id && x.kind !== y.kind) {
        found++; A.Sfx.good(found); pair.forEach(o => o.classList.add("done")); document.getElementById("mf").textContent = found; A.track("listenOK");
        if (found === 6) setTimeout(done, 700);
      } else { lock = true; setTimeout(() => { A.Sfx.bad(); pair.forEach(o => o.classList.remove("up")); lock = false; }, 1100); }
    });
    function done() {
      const secs = Math.round((Date.now() - t0) / 1000), prev = S.best.memory;
      if (!prev || moves < prev) S.best.memory = moves; A.save();
      A.track("game"); A.addXP(moves <= 10 ? 12 : 8); A.celebrate(); A.Sfx.win();
      A.$app.innerHTML = `
      <div class="stage">
        <h1>All pairs found</h1><p class="muted">${moves} moves in ${secs} seconds${prev && moves < prev ? ` · new record (was ${prev})` : prev ? ` · best ${Math.min(prev, moves)}` : ""}</p>
        ${A.cheerHTML("good")}
        <div class="list" style="width:100%;text-align:left">${ps.map(p => `<button class="li" data-say="${A.esc(p.ne)}"><span class="play-dot">${A.I.speaker}</span><span><span class="ro">${A.esc(p.ro)}</span><br><span class="en">${A.esc(p.en)}</span></span><span></span></button>`).join("")}</div>
        <div class="row" style="justify-content:center"><button class="btn primary" id="again">Play again</button><button class="btn" data-go="games">Games</button></div>
      </div>`;
      document.getElementById("again").onclick = play;
    }
  }
}

/* ---------- Bargain Bazaar: catch the price, then haggle in Nepali ---------- */
function bazaar(A) {
  const S = A.S, B = A.C.bazaar;
  intro(A, { title: "Bargain Bazaar", eyebrow: "Listening & speaking game · Asan market",
    body: "A shopkeeper names a price in Nepali. Catch the number by ear, then haggle with real phrases. How much can you save?",
    rules: ["First pick the price you heard.", "Then answer in Nepali: tap a phrase" + (A.Mic.ok ? " or say it into the mic." : "."), "Push too hard and the shopkeeper may let you walk away. Walking away can also bring the price down."],
    best: S.best.bazaar ? S.best.bazaar + "% off" : "", start: play });
  const r100 = n => Math.max(300, Math.min(2000, Math.round(n / 100) * 100));
  const fmt = n => "Rs " + n.toLocaleString("en-US");
  function play() {
    const item = B.items[Math.random() * B.items.length | 0];
    let price = item.start, known = 0, rounds = 0, ears = 0, asked = 0, log = [], showWords = false, gen = 0;
    const draw = (panel = "") => {
      A.$app.innerHTML = `
      ${A.backBtn("games", "Games")}
      <section><p class="eyebrow">Bargain Bazaar</p><h1>${A.esc(item.name)}</h1></section>
      <div class="row split"><span class="chip">Price: <b>&nbsp;${known ? fmt(known) : "?"}</b></span><button class="tog" id="tw" aria-pressed="${showWords}">Words</button></div>
      <div class="chat">${log.map(l => `<div class="bubble ${l.me ? "me" : ""}"><button class="play-dot" data-say="${A.esc(l.ne)}" aria-label="Play">${A.I.speaker}</button><span><span class="who">${l.me ? "You" : "Shopkeeper"}</span><br>${showWords || l.me ? `<span class="ro">${A.esc(l.ro)}</span><br><span class="en">${A.esc(l.en)}</span>` : `<span class="dots">• • • • •</span>`}</span></div>`).join("")}</div>
      <div id="panel">${panel}</div>`;
      document.getElementById("tw").onclick = () => { showWords = !showWords; draw(panel); wire(); };
      wire();
    };
    let wire = () => {};
    const shop = async (...parts) => {
      const g = gen;
      log.push({ ne: parts.map(p => p.ne).join(" "), ro: parts.map(p => p.ro).join(" "), en: parts.map(p => p.en).join(" ") }); draw();
      for (const p of parts) { if (g !== gen) return; await A.Voice.say(p.ne); }
    };
    const priceLine = n => ({ ne: B.prices[n], ro: B.priceRo[n] + " rupaiyaan", en: fmt(n) });
    A.setCleanup(() => { gen++; });

    async function askPrice(lead) {
      await shop(lead, priceLine(price)); asked++;
      const opts = A.shuffle([price, ...A.shuffle([100, 200, -100, -200, 1000, -1000].map(d => r100(price + d)).filter((v, i, a) => v !== price && a.indexOf(v) === i)).slice(0, 3)]);
      wire = () => {
        document.querySelectorAll("[data-p]").forEach(b => b.onclick = () => {
          known = price; const ok = +b.dataset.p === price; if (ok) { ears++; A.Sfx.good(ears); A.track("listenOK"); } else A.Sfx.bad();
          document.querySelectorAll("[data-p]").forEach(x => { x.disabled = true; if (+x.dataset.p === price) x.classList.add("right"); });
          if (!ok) b.classList.add("wrong");
          setTimeout(respond, ok ? 600 : 1400);
        });
        document.getElementById("rehear").onclick = () => A.Voice.say(B.prices[price]);
      };
      draw(`<div class="stage"><p class="q">What price did you hear?</p><button class="btn small" id="rehear">${A.I.speaker}Hear the price again</button><div class="opts">${opts.map(o => `<button class="opt" data-p="${o}">${fmt(o)}</button>`).join("")}</div></div>`);
    }
    function respond() {
      wire = () => {
        document.querySelectorAll("[data-r]").forEach(b => b.onclick = () => choose(B.you.find(y => y.id === b.dataset.r)));
        const mic = document.getElementById("bmic");
        if (mic) mic.onclick = async () => {
          mic.classList.add("listening");
          try {
            const alts = await A.Mic.listen(); mic.classList.remove("listening");
            const best = B.you.map(y => ({ y, s: A.score(y.ne, alts).s })).sort((a, b) => b.s - a.s)[0];
            if (best.s >= 0.6) choose(best.y); else { A.toast("I didn't catch that. Try again, or tap a phrase."); A.Sfx.bad(); }
          } catch (err) { mic.classList.remove("listening"); A.toast(A.micError(err)); }
        };
      };
      draw(`<div class="stage"><p class="q">Your answer</p>${A.Mic.ok ? `<button class="hear mic" id="bmic" aria-label="Say it">${A.I.mic}</button><p class="muted">Say one of these, or tap it</p>` : ""}
        <div class="opts">${B.you.map(y => `<button class="opt" data-r="${y.id}">${A.esc(y.ro)}<br><small class="muted" style="font-weight:400">${A.esc(y.en)}</small></button>`).join("")}</div></div>`);
    }
    async function choose(y) {
      log.push({ me: true, ne: y.ne, ro: y.ro, en: y.en }); draw(); await A.Voice.say(y.ne); rounds++;
      if (y.id === "ok") { await shop(B.say.deal); return end(true); }
      if (y.id === "no") {
        if (price > item.min && Math.random() < 0.75) { price = Math.max(item.min, r100((price + item.min) / 2)); return askPrice(B.say.callback); }
        await shop(B.say.bye); return end(false);
      }
      if (price <= item.min || rounds >= 5) {
        if (log.some(l => l.en === B.say.last.en)) { await shop(B.say.bye); return end(false); }
        await shop(B.say.last); return askPrice(B.say.price);
      }
      const cut = y.id === "exp" ? 0.8 + Math.random() * 0.1 : 0.88 + Math.random() * 0.06;
      price = Math.max(item.min, r100(price * cut)); return askPrice(B.say.lower);
    }
    function end(deal) {
      const off = deal ? Math.round((item.start - price) / item.start * 100) : 0;
      const stars = !deal ? 0 : off >= 40 ? 3 : off >= 25 ? 2 : 1;
      if (deal && off > (S.best.bazaar || 0)) S.best.bazaar = off; A.save();
      A.track("game"); A.addXP(3 + stars * 3 + ears);
      if (stars >= 2) { A.celebrate(); A.Sfx.win(); }
      wire = () => { document.getElementById("again").onclick = play; };
      draw(`<div class="stage">
        <h2>${deal ? `You bought it for ${fmt(price)}` : "No deal this time"}</h2>
        <p class="stars" aria-label="${stars} of 3 stars">${[1, 2, 3].map(i => `<span class="${i <= stars ? "on" : ""}">★</span>`).join("")}</p>
        <p class="muted">${deal ? `${off}% off the first price of ${fmt(item.start)}. ` : ""}You caught ${ears} of ${asked} prices by ear.</p>
        ${A.cheerHTML(stars >= 2 ? "good" : "bad")}
        <div class="row" style="justify-content:center"><button class="btn primary" id="again">Next shop</button><button class="btn" data-go="games">Games</button></div>
      </div>`);
    }
    gen++;
    (async () => { await shop(B.say.open); askPrice(B.say.price); })();
  }
}

return { momo, memory, bazaar };
})();
