---
# codex-switcher-ss01
title: 'Task: implement Linux compatibility'
status: completed
type: task
priority: normal
created_at: 2026-02-13T12:59:25Z
updated_at: 2026-02-25T20:58:57Z
parent: codex-switcher-cip1
blocked_by:
    - codex-switcher-3uu8
---

Implement Linux-specific support:
- Linux secure credential backend integration
- Linux path defaults and env override behavior validation
- Browser launcher + callback flow verification on Linux
- End-to-end switch/relogin/status validation on Linux

## Summary of Changes

- Implemented Linux secure credential handling via cross-keychain adapter (lib/secrets/linux-cross-keychain.ts).
- Implemented Linux/XDG path resolution with env override support (lib/platform/path-resolver.ts, tests in lib/platform/path-resolver.test.ts).
- Implemented Linux browser launcher support (xdg-open) and covered launcher behavior in lib/platform/browser.test.ts.
- Added cross-platform command/test coverage for login/switch/status flows using shared adapters.
