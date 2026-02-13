---
# codex-switcher-686n
title: Add spinner for doctor keychain ACL checks
status: completed
type: task
priority: normal
created_at: 2026-02-13T22:15:18Z
updated_at: 2026-02-13T22:17:18Z
---

Improve cdx doctor UX by showing a spinner while keychain ACL checks run, since security dump parsing can take several seconds.

## Summary of Changes

- Added a @clack/prompts spinner to `cdx doctor` during macOS Keychain ACL inspection.
- Spinner now starts before keychain ACL fetching and stops once checks are complete.
- Kept existing ACL diagnostics output unchanged while adding progress feedback for slower keychain reads.
