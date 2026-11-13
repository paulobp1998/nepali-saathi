# Nepali Saathi

A free app for learning to listen to, understand and speak Nepali: structured lessons, conversations and stories from A1 to C2, word packs for extra vocabulary, a grammar course from A1 to C2, and an hours log for real-world Nepali from B2 on.

Live app: https://paulobp1998.github.io/nepali-saathi/

## Files
- `content.js`: A1 lessons, conversations and sound pairs
- `content-more.js`: A2 and B1 lessons, more conversations, listening stories, levels and resources
- `content-adv.js`: B2, C1 and C2 lessons with their conversations and stories
- `listening.js`: extra conversations and stories for A1 to B1. A story with a `unit` is also played in the daily session when that lesson is finished
- `vocab.js`: word packs (extra vocabulary tied to a lesson; the words arrive in the daily session once the lesson's phrases are met, and never hold up the trail)
- `trail.js`: the trek (one real place per lesson) and Habre's cheers
- `grammar-a.js`, `grammar-b.js`, `grammar-c.js`: the grammar course (A1–A2, B1–B2, C1–C2): rules, tables, exceptions, examples and a check per chapter
- `usage-a.js`, `usage-b.js`, `usage-c.js`: “Which word, when?” (A1, A2, B1 and up): short notes on words English speakers mix up (ahile / aba, linu / lyaaunu, taato / garmi…), each with a table, a rule, examples and four situations to check yourself. The format is described at the top of `usage-a.js`
- `culture.js`: illustrated culture articles, the festival calendar by Nepali month, and links from each lesson
- `reading.js`: the Read Nepali (Devanagari) trainer
- `daily.js`: the daily session that the home screen centres on (reviews, new phrases with word-by-word help and "why it's built this way" notes, grammar in small parts with checks, word order, “which word, when?” notes on the first phrase that uses their words (their questions return on later days), reading known phrases in Devanagari, speaking from English, culture moment, role-play at the end of each unit, followed by the unit's listening story when it has one), plus role-plays, the weekly real-world task and the monthly 60-second recording. It plugs into `app.js` through `API`/`window.MODULES`.
- `daily-content.js`: data for `daily.js`: which grammar chapters each unit teaches (`gplan`), word glosses and endings, sentence-pattern notes, branching role-plays, weekly tasks, monthly topics
- `daily.css`: styles for the above
- `app.js`: the app (including the daily reminder; `sw.js` shows it in the background where the browser allows)
- Progress sync: Settings → Sync across devices. Each device stores a GitHub key (classic token, `gist` scope only) and the app keeps progress in a private gist named `nepali-saathi-progress.json`, merging both copies so nothing is lost.
- `audio/`: built-in Nepali recordings, one per phrase
- `sw.js`, `manifest.webmanifest`, `icons/`: offline support and install on phone

## Adding or fixing content
1. Edit a content file (`content*.js`, `listening.js`, `vocab.js`, `grammar-*.js` or `usage-*.js`). Give every new phrase a unique `id`.
2. Run `python3 tools/fetch_audio.py` to download recordings for new phrases.
3. Optional: `node tools/check_ro.js [file]` lists romanizations that disagree with the Devanagari (a few harmless ones are expected).
4. Run `python3 tools/validate.py`: it checks ids, recordings, romanization and the offline file list, and starts the app without a browser to make sure saved progress still loads (`tools/smoke.js`). GitHub runs the same check on every push.
5. Change `V` in `sw.js` (for example `saathi-v10`) so phones pick up the update. Recordings are kept in their own cache, so phones only download the new ones.
6. Commit and push. GitHub Pages republishes in about a minute.

Run locally: `python3 -m http.server 8765`, then open http://localhost:8765.
