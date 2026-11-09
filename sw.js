// Offline support: caches the app and its recordings. Bump V when publishing changes.
const V = "saathi-v7";
const TTS = "saathi-tts";
const STATE = "saathi-state"; // reminder settings shared by the app (see Remind in app.js)
importScripts("audio-list.js");
const SHELL = ["./", "index.html", "app.js", "content.js", "content-more.js", "trail.js", "grammar-a.js", "grammar-b.js", "grammar-c.js", "culture.js", "reading.js", "games.js", "audio-list.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil((async () => {
    const c = await caches.open(V);
    await c.addAll(SHELL);
    const audio = (self.AUDIO_FILES || []).map(h => "audio/" + h + ".mp3");
    for (let i = 0; i < audio.length; i += 25) await Promise.all(audio.slice(i, i + 25).map(u => c.add(u).catch(() => {})));
  })());
});
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== V && k !== TTS && k !== STATE) await caches.delete(k);
  await self.clients.claim();
})()));

async function ranged(req, res) {
  const range = req.headers.get("range");
  if (!range || !res || res.status !== 200) return res;
  const buf = await res.arrayBuffer(), m = /bytes=(\d*)-(\d*)/.exec(range);
  const start = m && m[1] ? +m[1] : 0, end = m && m[2] ? +m[2] : buf.byteLength - 1;
  return new Response(buf.slice(start, end + 1), { status: 206, headers: {
    "Content-Type": "audio/mpeg", "Content-Range": `bytes ${start}-${end}/${buf.byteLength}`, "Content-Length": String(end - start + 1), "Accept-Ranges": "bytes" } });
}

self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.origin === location.origin) {
    if (u.pathname.includes("/audio/")) {
      e.respondWith((async () => {
        const c = await caches.open(V);
        const key = u.origin + u.pathname;
        let hit = await c.match(key);
        if (!hit) { try { const r = await fetch(key); if (!r.ok) return r; await c.put(key, r.clone()); hit = r; } catch (err) { return Response.error(); } }
        return ranged(req, hit.clone());
      })());
    } else {
      e.respondWith(fetch(req).then(r => { if (r.ok) { const cp = r.clone(); caches.open(V).then(c => c.put(req, cp)); } return r; })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
    }
  } else if (u.hostname === "translate.google.com") {
    e.respondWith(caches.open(TTS).then(async c => {
      const hit = await c.match(req.url); if (hit) return hit;
      const r = await fetch(req.url, { mode: "no-cors" }); c.put(req.url, r.clone()); return r;
    }));
  }
});

/* Daily reminder: Periodic Background Sync (Chrome/Android, installed app) wakes this worker now and then.
   Show one nudge a day, after the chosen time, only if the learner hasn't practised yet. */
const ymd = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
async function maybeRemind() {
  const c = await caches.open(STATE), r = await c.match("state.json"); if (!r) return;
  const s = await r.json(), now = new Date(), today = ymd(now);
  if (!s.on || s.last === today || s.notified === today) return;
  const [h, m] = String(s.time || "19:00").split(":").map(Number);
  if (now.getHours() * 60 + now.getMinutes() < h * 60 + m) return;
  s.notified = today; await c.put("state.json", new Response(JSON.stringify(s), { headers: { "Content-Type": "application/json" } }));
  const title = s.streak ? `Keep your ${s.streak}-day streak going` : "Time for some Nepali";
  const body = s.pd ? `${s.pd.ro}: ${s.pd.en}. Five minutes today is enough.` : "Five minutes of Nepali today is enough.";
  await self.registration.showNotification(title, { body, icon: "icons/icon-192.png", badge: "icons/icon-192.png", tag: "saathi-daily" });
}
self.addEventListener("periodicsync", e => { if (e.tag === "saathi-daily") e.waitUntil(maybeRemind()); });
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(ws => {
    for (const w of ws) if ("focus" in w) return w.focus();
    return self.clients.openWindow("./");
  }));
});
