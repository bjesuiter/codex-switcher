---
# codex-switcher-7dgt
title: OAuth login failure should resolve and exit non-zero
status: completed
type: bug
priority: normal
created_at: 2026-01-22T19:35:01Z
updated_at: 2026-01-22T19:37:25Z
---

Login flow can hang when OAuth callback lacks code or state mismatches, and CLI exits 0 even on login failure.

## Checklist
- [x] Resolve OAuth wait promise on error callbacks and close server
- [x] Fail login command with non-zero exit when performLogin returns null
- [x] Add or update tests covering error callback and login exit status
