---
# codex-switcher-jvgg
title: 'Research: Linux credential backend options'
status: completed
type: task
priority: normal
created_at: 2026-02-13T12:59:25Z
updated_at: 2026-02-25T20:58:57Z
parent: codex-switcher-cip1
blocked_by:
    - codex-switcher-8j5t
---

Evaluate Linux-compatible secure storage options:
- Secret Service/libsecret, pass, kwallet, or encrypted file fallback
- Behavior in desktop vs headless/container environments
- Dependency/runtime requirements per distro
- Migration strategy from current macOS keychain-only implementation

## Summary of Changes

- Evaluated Linux credential backend direction and implemented cross-keychain integration in code.
- Added Linux backend selection/fallback logic (native-linux preferred, secret-service fallback) in lib/secrets/linux-cross-keychain.ts.
- Added Linux-specific secure-store error classification and actionable guidance, with tests in lib/secrets/linux-cross-keychain.test.ts.
