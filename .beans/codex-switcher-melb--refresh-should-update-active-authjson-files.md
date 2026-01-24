---
# codex-switcher-melb
title: Refresh should update active auth.json files
status: todo
type: bug
created_at: 2026-01-24T14:47:13Z
updated_at: 2026-01-24T14:47:13Z
---

Refreshing tokens should also rewrite the active Codex/OpenCode auth.json files when the refreshed account is currently active, so CLI uses new tokens immediately.

## Checklist
- [ ] Detect when refreshed account matches current active account.
- [ ] Rewrite Codex/OpenCode auth.json files after refresh in that case.
- [ ] Add or update tests/coverage for refresh of active account.