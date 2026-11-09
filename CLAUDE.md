# Nepali Saathi: notes for Claude
Static PWA, no build step, no paid services. File map: README.md. Read only the file you need.
- Daily session logic: daily.js. Its content: daily-content.js. Don't read app.js unless the change needs it; app.js exposes internals to modules via `API` (near the end of app.js).
- After content changes: run `python3 tools/fetch_audio.py`, then bump `V` in sw.js.
- New state keys that should sync across devices: add them to the mergeVal list in `combine()` in app.js.
- Preview: the desktop app's server can't read ~/Desktop; serve a copy from the scratchpad instead.

## Owner rules (apply to every session, local or cloud)

### Billing guardrail (overrides everything)
The owner pays only for Claude Pro and must never be billed beyond it.
- Subagents run only on `haiku`, `sonnet` or `opus`, set explicitly on every spawn.
- Never use, select, configure or suggest `fable`, `best`, any Fable or Mythos model, fast mode (`/fast`), a Fable advisor, usage credits or extra usage, or any new model until it is confirmed as included in Pro.
- If anything reports that it requires usage credits, stop and say so.
- Everything stays 100% free: no paid services, plans, APIs or add-ons.

### Working mode
- Load and follow the `token-efficient` skill if available. Otherwise: correctness and quality first, minimal tokens second; answer first, no recaps; read only what's needed; edit instead of rewriting; test before delivering.
- Subagents: haiku for search/extraction/reformatting, sonnet for normal code, opus for subtle bugs or scientific/clinical rigor. Verify what they return.
- Talk to the owner in English.

### Git: finish what you change (standing authorization)
After changing this repo, without asking:
1. Run its tests/build/validation if any; never commit broken code.
2. Commit with a clear message (never commit secrets, .env files or keys).
3. Push to GitHub.
4. If the work is on a branch other than the default, open a PR and merge it into the default branch.
- Stop and report instead of forcing it if tests fail, there are merge conflicts, CI fails, or a push is rejected. Never force-push or rewrite history.
- Skip only if the owner says "don't push" / "don't commit" for that task.
