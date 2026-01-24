---
# codex-switcher-melb
title: Refresh should update active auth.json files
status: completed
type: bug
priority: normal
created_at: 2026-01-24T14:47:13Z
updated_at: 2026-01-24T14:55:46Z
---

Refreshing tokens should also rewrite the active Codex/OpenCode auth.json files when the refreshed account is currently active, so CLI uses new tokens immediately.

## Checklist
- [x] Detect when refreshed account matches current active account.
- [x] Rewrite Codex/OpenCode auth.json files after refresh in that case.
- [x] Add or update tests/coverage for refresh of active account.
