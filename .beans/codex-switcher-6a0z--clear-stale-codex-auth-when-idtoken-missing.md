---
# codex-switcher-6a0z
title: Clear stale Codex auth when idToken missing
status: todo
type: bug
created_at: 2026-01-24T14:46:41Z
updated_at: 2026-01-24T14:46:41Z
---

When switching to an account without an idToken, ensure any existing Codex auth file is cleared or overwritten so the CLI does not keep using the previous account.

## Checklist
- [ ] Detect switch to account missing idToken and remove/overwrite codex auth file.
- [ ] Ensure switch/status messaging reflects cleared Codex auth state.
- [ ] Add or update tests/coverage for missing-idToken switch behavior.