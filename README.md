# Nepali Saathi

A free app for learning to listen to, understand and speak Nepali: structured lessons from A1 to B1, a grammar course from A1 to C2, and an immersion path beyond B1.

Live app: https://paulobp1998.github.io/nepali-saathi/

## Files
- `content.js`: A1 lessons, conversations and sound pairs
- `content-more.js`: A2 and B1 lessons, more conversations, listening stories, levels and resources
- `grammar-a.js`, `grammar-b.js`, `grammar-c.js`: the grammar course (A1–A2, B1–B2, C1–C2): rules, tables, exceptions, examples and a check per chapter
- `culture.js`: illustrated culture articles, the festival calendar by Nepali month, and links from each lesson
- `reading.js`: the Read Nepali (Devanagari) trainer
- `daily.js`: the daily session that the home screen centres on (reviews, new phrases with word-by-word help and "why it's built this way" notes, grammar in small parts with checks, word order, speaking from English, culture moment, role-play at the end of each unit), plus role-plays, the weekly real-world task and the monthly 60-second recording. It plugs into `app.js` through `API`/`window.MODULES`.
- `daily-content.js`: data for `daily.js`: which grammar chapters each unit teaches (`gplan`), word glosses and endings, sentence-pattern notes, branching role-plays, weekly tasks, monthly topics
- `daily.css`: styles for the above
- `app.js`: the app (including the daily reminder; `sw.js` shows it in the background where the browser allows)
- Progress sync: Settings → Sync across devices. Each device stores a GitHub key (classic token, `gist` scope only) and the app keeps progress in a private gist named `nepali-saathi-progress.json`, merging both copies so nothing is lost.
- `audio/`: built-in Nepali recordings, one per phrase
- `sw.js`, `manifest.webmanifest`, `icons/`: offline support and install on phone

## Adding or fixing content
1. Edit `content.js`, `content-more.js` or a `grammar-*.js` file. Give every new phrase a unique `id`.
2. Run `python3 tools/fetch_audio.py` to download recordings for new phrases.
3. Run `python3 tools/validate.py`: it checks ids, recordings, romanization and the offline file list. GitHub runs the same check on every push.
4. Change `V` in `sw.js` (for example `saathi-v10`) so phones pick up the update. Recordings are kept in their own cache, so phones only download the new ones.
5. Commit and push. GitHub Pages republishes in about a minute.

Run locally: `python3 -m http.server 8765`, then open http://localhost:8765.
