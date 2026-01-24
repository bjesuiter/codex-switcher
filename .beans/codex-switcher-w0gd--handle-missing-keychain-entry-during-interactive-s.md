---
# codex-switcher-w0gd
title: Handle missing Keychain entry during interactive switch
status: completed
type: bug
priority: normal
created_at: 2026-01-23T13:12:05Z
updated_at: 2026-01-24T12:54:12Z
---

Switching to an account whose Keychain payload is missing throws and exits the interactive loop. The menu should handle missing credentials gracefully with a friendly message and remain active.

## Checklist
- [x] Detect missing keychain payload before switch
- [x] Show a friendly message and keep menu running
- [x] Add/adjust tests for missing keychain payload — not feasible to unit test (interactive @clack/prompts UI); fix is a minimal try/catch