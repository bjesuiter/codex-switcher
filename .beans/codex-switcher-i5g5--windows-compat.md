---
# codex-switcher-i5g5
title: windows-compat
status: completed
type: epic
priority: normal
created_at: 2026-02-13T12:59:25Z
updated_at: 2026-02-25T20:59:58Z
parent: codex-switcher-y9qh
blocked_by:
    - codex-switcher-8j5t
---

Deliver Windows compatibility using shared abstractions: secure credential backend, paths, OAuth/browser flow, and QA coverage.

## Summary of Changes

- Implemented Windows secure-store support via cross-keychain in lib/secrets/windows-cross-keychain.ts.
- Added Windows path/profile handling (APPDATA/LOCALAPPDATA defaults + overrides) in lib/platform/path-resolver.ts.
- Added Windows browser-launch support (cmd /c start) and compatibility validation tests.
- Added Windows-focused follow-up hardening, including payload-size-safe encrypted vault handling and doctor checks.
