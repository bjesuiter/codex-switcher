---
# codex-switcher-vghf
title: 'Research: Windows credential backend options'
status: completed
type: task
priority: normal
created_at: 2026-02-13T12:59:25Z
updated_at: 2026-02-25T20:58:57Z
parent: codex-switcher-i5g5
blocked_by:
    - codex-switcher-8j5t
---

Evaluate Windows-compatible secure storage options for Bun/Node CLI:
- DPAPI/Credential Manager wrappers
- Native deps and distribution impact
- Reliability in local + CI contexts
- Migration strategy from current macOS keychain-only implementation

## Summary of Changes

- Evaluated Windows credential backend direction and implemented cross-keychain integration in code.
- Added Windows backend selection (native-windows preferred, windows fallback) in lib/secrets/windows-cross-keychain.ts.
- Implemented encrypted Windows vault storage for account payloads and legacy compatibility cleanup, with tests in lib/secrets/windows-cross-keychain.test.ts.
