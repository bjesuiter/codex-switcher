---
# codex-switcher-zky5
title: shared-compat
status: completed
type: epic
priority: normal
created_at: 2026-02-13T12:59:06Z
updated_at: 2026-02-25T20:59:40Z
parent: codex-switcher-y9qh
---

Shared cross-platform foundations to avoid duplicated Windows/Linux implementation work (platform adapters, path resolution, secure-store abstraction, and capability checks).

## Requirements

- Use a **secrets adapter interface** pattern so credential storage is pluggable.
- Keep the default OS-native secure-store adapter(s), but design for additional adapters later (e.g. fnox integration, 1Password, Bitwarden).
- Avoid hard-coding store-specific logic outside adapters; all secret operations should go through the shared interface.

## Summary of Changes

- Added shared cross-platform foundations for path resolution, browser launching, and capability checks under lib/platform/.
- Added a pluggable secret-store adapter interface in lib/secrets/store.ts with platform-specific adapters for macOS, Windows, and Linux.
- Kept adapter boundaries clean so secret operations flow through shared interfaces, enabling deferred follow-up adapters later.
