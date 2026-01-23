---
# codex-switcher-ekt9
title: Add account labels for friendly display in switcher
status: completed
type: feature
priority: normal
created_at: 2026-01-23T21:43:23Z
updated_at: 2026-01-23T21:45:40Z
---

The accountId from OpenAI JWT is opaque (user-brXKNnM9Urg...). Add an optional label field to AccountRecord, prompt for it during login, and display it in the picker.

## Checklist
- [ ] Add label?: string to AccountRecord type
- [ ] Prompt for label during cdx login (after successful OAuth)
- [ ] Update getAccountDisplay to show label (fallback to accountId)
- [ ] Update switchToAccount to also match by label
- [ ] Update switchNext output to show label
- [ ] Update tests
- [ ] Verify all tests pass