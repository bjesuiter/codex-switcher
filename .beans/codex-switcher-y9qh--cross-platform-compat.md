---
# codex-switcher-y9qh
title: cross-platform-compat
status: completed
type: milestone
priority: normal
created_at: 2026-02-13T12:58:55Z
updated_at: 2026-02-25T21:00:08Z
---

Enable codex-switcher to support Windows and Linux with secure credential handling, platform-correct paths, and reliable OAuth/browser flows.

## Summary of Changes

- Delivered cross-platform support for Linux and Windows with platform-correct path resolution and secure credential storage adapters.
- Added cross-platform browser/OAuth flow handling and fallback paths for launcher failures, remote/headless usage, and callback-port conflicts.
- Added platform-specific test coverage and CI validation to keep cross-platform workflows stable.
- Deferred standalone packaging channels are tracked separately and are not required for this milestone scope.
