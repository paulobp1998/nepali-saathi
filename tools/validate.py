#!/usr/bin/env python3
"""Check the course data before publishing. Run from the app folder:  python3 tools/validate.py
Errors (exit code 1): duplicate phrase ids, a Nepali text without a recording, audio-list.js out of step
with audio/, a phrase without romanization or English, a script missing from the page or the offline list,
a JavaScript syntax error (when node is installed).
Warnings (exit code 0): things worth a look, such as "म ... छैन" without the final nasal."""
import os, re, shutil, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch_audio import ROOT, SOURCES, collect, fnv

errors, warnings = [], []
read = lambda f: open(os.path.join(ROOT, f), encoding="utf-8").read()

# 1. Phrase ids are unique (progress is stored by id).
seen = {}
for f in ["content.js", "content-more.js"]:
    for m in re.finditer(r'\{ id: "([^"]+)", ne:', read(f)):
        if m.group(1) in seen:
            errors.append(f"duplicate phrase id {m.group(1)!r} in {f} and {seen[m.group(1)]}")
        seen[m.group(1)] = f

# 2. Every Nepali text has a recording, and audio-list.js matches the audio folder.
texts = collect()
disk = {f[:-4] for f in os.listdir(os.path.join(ROOT, "audio")) if f.endswith(".mp3")}
listed = set(re.findall(r'"([0-9a-f]{8})"', read("audio-list.js")))
for t in texts:
    if fnv(t) not in disk:
        errors.append(f"no recording for {t!r}: run python3 tools/fetch_audio.py")
if disk != listed:
    errors.append(f"audio-list.js is out of step with audio/ ({len(listed)} listed, {len(disk)} files): run python3 tools/fetch_audio.py")
orphans = disk - {fnv(t) for t in texts}
if orphans:
    warnings.append(f"{len(orphans)} recordings are no longer used: run python3 tools/fetch_audio.py to remove them")

# 3. Every Nepali text comes with romanization and English; style checks.
EN_REQUIRED = {"content.js", "content-more.js", "grammar-a.js", "grammar-b.js", "grammar-c.js"}
for f in SOURCES:
    src = read(f)
    for m in re.finditer(r'\bne: "([^"]+)"', src):
        ne, rest = m.group(1), src[m.end():m.end() + 600]
        nxt = rest.find("ne: \"")
        rest = rest if nxt < 0 else rest[:nxt]
        ro = re.search(r'\bro: "([^"]*)"', rest)
        if not ro or not ro.group(1).strip():
            errors.append(f"{f}: no romanization for {ne!r}")
        elif re.search(r"ee|oo", ro.group(1)):
            warnings.append(f"{f}: romanization {ro.group(1)!r} uses ee/oo; the course writes i/u")
        if f in EN_REQUIRED and not re.search(r'\ben: "', rest):
            errors.append(f"{f}: no English for {ne!r}")
        if re.search(r"(^|\s)म\s[^।?!]*(छैन|होइन)[।?!]*$", ne):
            warnings.append(f"{f}: {ne!r}: with म the negative is written छैनँ / होइनँ")

# 4. Every script on the page exists and is saved for offline use.
page, sw = read("index.html"), read("sw.js")
shell = re.search(r"const SHELL = \[(.*?)\];", sw, re.S)
shell = set(re.findall(r'"([^"]+)"', shell.group(1))) if shell else set()
if not shell:
    errors.append("sw.js: SHELL list not found")
for src in re.findall(r'<script src="([^"]+)"', page) + re.findall(r'<link rel="stylesheet" href="([^":]+)"', page):
    if not os.path.exists(os.path.join(ROOT, src)):
        errors.append(f"index.html loads {src}, which does not exist")
    elif src not in shell:
        errors.append(f"{src} is on the page but not in SHELL in sw.js, so it would be missing offline")
for f in shell - {"./"}:
    if not os.path.exists(os.path.join(ROOT, f)):
        errors.append(f"sw.js SHELL lists {f}, which does not exist")

# 5. JavaScript parses (needs node; skipped without it).
node = shutil.which("node")
if node:
    for f in sorted(f for f in os.listdir(ROOT) if f.endswith(".js")):
        r = subprocess.run([node, "--check", os.path.join(ROOT, f)], capture_output=True, text=True)
        if r.returncode:
            errors.append(f"{f}: syntax error\n{r.stderr.strip()[:400]}")

for w in warnings:
    print("warning:", w)
for e in errors:
    print("ERROR:", e)
print(f"{len(seen)} phrases, {len(texts)} Nepali texts, {len(disk)} recordings: {len(errors)} errors, {len(warnings)} warnings"
      + ("" if node else " (JavaScript syntax not checked: node not installed)"))
sys.exit(1 if errors else 0)
