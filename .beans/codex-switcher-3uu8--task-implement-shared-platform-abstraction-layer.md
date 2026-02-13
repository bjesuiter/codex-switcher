---
# codex-switcher-3uu8
title: 'Task: implement shared platform abstraction layer'
status: completed
type: task
priority: normal
created_at: 2026-02-13T12:59:25Z
updated_at: 2026-02-13T13:34:56Z
parent: codex-switcher-zky5
blocked_by:
    - codex-switcher-8j5t
---

Create shared infrastructure used by both Windows and Linux support:
- Secure credential-store interface (save/load/delete/list)
- Platform-aware path resolver for config/auth targets
- Browser-open strategy with platform-specific launchers
- Capability diagnostics in cdx status (what is supported on this machine)


## Progress

- [x] Secure credential-store adapter interface introduced (`lib/secrets/store.ts`)
- [x] Runtime adapter selection added (macOS keychain adapter + explicit unsupported adapter for non-macOS for now)
- [x] Platform-aware path resolver introduced (`lib/platform/path-resolver.ts`) and wired into `lib/paths.ts`
- [x] Browser-open strategy extracted (`lib/platform/browser.ts`) and wired into OAuth login
- [x] Capability diagnostics added to status output (platform, path profile, secret-store state, browser launcher)
- [x] Added focused tests for new shared infrastructure (`lib/platform/*.test.ts`, `lib/secrets/store.test.ts`)

## Notes

- Windows/Linux-specific secret-store implementations were intentionally **not** added yet.
- Current non-macOS behavior remains explicitly unsupported for secrets via default adapter (as planned for phased rollout).

## Summary of Changes

Implemented a shared abstraction layer without starting Windows/Linux platform implementations:

- Added a pluggable secret-store adapter interface and runtime selection in `lib/secrets/store.ts`.
- Switched core credential flows (login/relogin/switch/status/usage/interactive) to consume the shared secret-store adapter instead of direct keychain calls.
- Added a platform path resolver (`lib/platform/path-resolver.ts`) and wired `lib/paths.ts` to runtime path profiles (`xdg` / `windows-appdata`).
- Added browser launcher strategy extraction (`lib/platform/browser.ts`) and wired OAuth login browser-opening through it.
- Added capability diagnostics surfaced by `cdx status` (platform, path profile, secret store availability, browser launcher availability).
- Added tests for new shared modules and resolver behavior.

Verification performed:
- `bun test`
- `bun run build`
