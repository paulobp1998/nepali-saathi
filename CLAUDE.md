# Nepali Saathi: notes for Claude
Static PWA, no build step, no paid services. File map: README.md. Read only the file you need.
- Daily session logic: daily.js. Its content: daily-content.js. Don't read app.js unless the change needs it; app.js exposes internals to modules via `API` (near the end of app.js).
- After content changes: run `python3 tools/fetch_audio.py`, then bump `V` in sw.js.
- New state keys that should sync across devices: add them to the mergeVal list in `combine()` in app.js.
- Preview: the desktop app's server can't read ~/Desktop; serve a copy from the scratchpad instead.
