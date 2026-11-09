#!/usr/bin/env python3
"""Download a Nepali recording (Google Translate's free voice) for every phrase in the course.
Files are named by the FNV-1a hash of the phrase's UTF-8 bytes, matching fnv() in app.js.
Run from the app folder:  python3 tools/fetch_audio.py   (safe to re-run; skips existing files)"""
import os, re, sys, time, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCES = ["content.js", "content-more.js", "trail.js", "grammar-a.js", "grammar-b.js", "grammar-c.js", "culture.js", "reading.js", "games.js", "app.js", "daily-content.js"]
EXTRA = ["नमस्ते! तपाईंलाई कस्तो छ?", "बिस्तारै बोल्नुहोस् न।"]

def fnv(s):
    h = 0x811c9dc5
    for b in s.encode("utf-8"):
        h ^= b
        h = (h * 0x01000193) & 0xffffffff
    return format(h, "08x")

def collect():
    """Every Nepali text the app can play, as a sorted list."""
    texts = list(EXTRA)
    for f in SOURCES:
        src = open(os.path.join(ROOT, f), encoding="utf-8").read()
        texts += re.findall(r'\bne: "([^"]+)"', src)
        texts += re.findall(r'\b\d+: "([^"]*[\u0900-\u097F][^"]*)"', src)  # bazaar prices
    return sorted({t.strip() for t in texts})

def main():
    texts = collect()
    out = os.path.join(ROOT, "audio")
    os.makedirs(out, exist_ok=True)
    got = fail = 0
    for i, t in enumerate(texts):
        path = os.path.join(out, fnv(t) + ".mp3")
        if os.path.exists(path) and os.path.getsize(path) > 1000:
            continue
        url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=ne&client=tw-ob&q=" + urllib.parse.quote(t)
        for attempt in range(6):
            try:
                req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
                data = urllib.request.urlopen(req, timeout=20).read()
                if len(data) < 1000:
                    raise ValueError("too small")
                open(path, "wb").write(data); got += 1
                break
            except Exception as e:
                wait = 20 * (attempt + 1) if "429" in str(e) else 3
                print(f"retry {t!r}: {e} (waiting {wait}s)", flush=True); time.sleep(wait)
        else:
            fail += 1
        time.sleep(0.5)
        if i % 50 == 0:
            print(f"{i}/{len(texts)}", flush=True)

    want = {fnv(t) for t in texts}
    for f in os.listdir(out):
        if f.endswith(".mp3") and f[:-4] not in want:
            os.remove(os.path.join(out, f))  # phrase was changed or removed
    have = sorted(f[:-4] for f in os.listdir(out) if f.endswith(".mp3"))
    open(os.path.join(ROOT, "audio-list.js"), "w").write("self.AUDIO_FILES=" + repr(have).replace("'", '"') + ";\n")
    print(f"done: {len(texts)} phrases, {got} downloaded, {fail} failed, {len(have)} files total", flush=True)

if __name__ == "__main__":
    main()
