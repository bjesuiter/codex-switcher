---
# codex-switcher-w0gd
title: Handle missing Keychain entry during interactive switch
status: todo
type: bug
created_at: 2026-01-23T13:12:05Z
updated_at: 2026-01-23T13:12:05Z
---

Switching to an account whose Keychain payload is missing throws and exits the interactive loop. The menu should handle missing credentials gracefully with a friendly message and remain active.\n\n## Checklist\n- [ ] Detect missing keychain payload before switch\n- [ ] Show a friendly message and keep menu running\n- [ ] Add/adjust tests for missing keychain payload