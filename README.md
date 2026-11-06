# Nepali Saathi

A free app for learning to listen to, understand and speak Nepali: structured lessons from A1 to B1, a grammar course from A1 to C2, and an immersion path beyond B1.

Live app: https://paulobp1998.github.io/nepali-saathi/

## Files
- `content.js`: A1 lessons, conversations and sound pairs
- `content-more.js`: A2 and B1 lessons, more conversations, listening stories, levels and resources
- `grammar-a.js`, `grammar-b.js`, `grammar-c.js`: the grammar course (A1–A2, B1–B2, C1–C2): rules, tables, exceptions, examples and a check per chapter
- `app.js`: the app (including the daily reminder; `sw.js` shows it in the background where the browser allows)
- `audio/`: built-in Nepali recordings, one per phrase
- `sw.js`, `manifest.webmanifest`, `icons/`: offline support and install on phone

## Adding or fixing content
1. Edit `content.js`, `content-more.js` or a `grammar-*.js` file. Give every new phrase a unique `id`.
2. Run `python3 tools/fetch_audio.py` to download recordings for new phrases.
3. Change `V` in `sw.js` (for example `saathi-v6`) so phones pick up the update.
4. Commit and push. GitHub Pages republishes in about a minute.

Run locally: `python3 -m http.server 8765`, then open http://localhost:8765.
