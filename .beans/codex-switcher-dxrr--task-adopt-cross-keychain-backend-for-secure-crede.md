---
# codex-switcher-dxrr
title: 'Task: adopt cross-keychain backend for secure credential storage'
status: completed
type: task
priority: normal
created_at: 2026-02-13T15:43:32Z
updated_at: 2026-02-13T15:48:18Z
parent: codex-switcher-i5g5
---

Replace custom in-repo Windows credential implementation with cross-keychain-backed secret store adapter so we do not maintain platform-specific credential API code ourselves.



## Progress (2026-02-13)
- Replaced the custom `lib/windows-credential.ts` implementation with a cross-keychain-backed Windows adapter (`lib/secrets/windows-cross-keychain.ts`).
- Updated secret-store adapter interface to async and migrated all call-sites (`switch`, `relogin`, `interactive`, `status`, `usage`, OAuth login/refresh path).
- Added `cross-keychain` dependency and regenerated lockfile.
- Removed obsolete custom Windows credential implementation/tests.

## Verification
- `bun test`
- `bun run build`
