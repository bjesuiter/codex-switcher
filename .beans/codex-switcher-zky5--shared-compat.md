---
# codex-switcher-zky5
title: shared-compat
status: todo
type: epic
priority: normal
created_at: 2026-02-13T12:59:06Z
updated_at: 2026-02-13T13:05:26Z
parent: codex-switcher-y9qh
---

Shared cross-platform foundations to avoid duplicated Windows/Linux implementation work (platform adapters, path resolution, secure-store abstraction, and capability checks).

## Requirements

- Use a **secrets adapter interface** pattern so credential storage is pluggable.
- Keep the default OS-native secure-store adapter(s), but design for additional adapters later (e.g. fnox integration, 1Password, Bitwarden).
- Avoid hard-coding store-specific logic outside adapters; all secret operations should go through the shared interface.
