---
# codex-switcher-ocdn
title: 'Task: rename status keychainExists to secureStoreExists'
status: completed
type: task
priority: low
created_at: 2026-02-13T16:21:55Z
updated_at: 2026-02-13T16:22:44Z
parent: codex-switcher-i5g5
---

Rename AccountStatus field from keychainExists to secureStoreExists for platform-neutral terminology and update references/tests.



## Progress (2026-02-13)
- Renamed `AccountStatus.keychainExists` to `AccountStatus.secureStoreExists` in `lib/status.ts`.
- Updated all references in CLI presentation paths (`lib/interactive.ts`, `lib/commands/status.ts`) and tests (`lib/status.test.ts`).

## Verification
- `bun test`
- `bun run build`
