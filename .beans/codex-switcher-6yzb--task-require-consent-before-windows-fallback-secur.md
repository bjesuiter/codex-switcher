---
# codex-switcher-6yzb
title: 'Task: require consent before fallback secure-store writes'
status: completed
type: task
priority: normal
created_at: 2026-02-13T16:25:47Z
updated_at: 2026-02-13T18:57:21Z
parent: codex-switcher-i5g5
---

Before first credential save on Windows, inspect cross-keychain backend availability and require explicit user confirmation when only fallback backend is available; include clear security risk messaging.



## Progress (2026-02-13)
- Added backend availability inspection before Windows credential writes using `cross-keychain` backend listing.
- Added one-time fallback consent flow when only fallback backend is available, with explicit security warning and persisted consent file (`<configDir>/secure-store-fallback-consent.json`).
- Added non-interactive escape hatch for explicit acceptance: `CDX_ALLOW_SECURE_STORE_FALLBACK=1`.
- Updated README with fallback consent behavior and override env var.

## Verification
- `bun test`
- `bun run build`



## Scope update
- Expanded from Windows-only fallback consent to platform-wide fallback consent handling for Windows, macOS, and Linux secure-store fallback paths.
