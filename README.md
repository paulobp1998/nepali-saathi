# Nepali Saathi

A free app for learning to listen to, understand and speak Nepali, from A1 to B1 with structured lessons and beyond B1 with an immersion path.

Live app: https://paulobp1998.github.io/nepali-saathi/

## Files
- `content.js`: A1 lessons, conversations and sound pairs
- `content-more.js`: A2 and B1 lessons, more conversations, listening stories, levels and resources
- `app.js`: the app
- `audio/`: built-in Nepali recordings, one per phrase
- `sw.js`, `manifest.webmanifest`, `icons/`: offline support and install on phone

## Adding or fixing content
1. Edit `content.js` or `content-more.js`. Give every new phrase a unique `id`.
2. Run `python3 tools/fetch_audio.py` to download recordings for new phrases.
3. Change `V` in `sw.js` (for example `saathi-v3`) so phones pick up the update.
4. Commit and push. GitHub Pages republishes in about a minute.

Run locally: `python3 -m http.server 8765`, then open http://localhost:8765.
