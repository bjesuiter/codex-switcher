---
# codex-switcher-4bf0
title: Fix doctor keychain ACL spinner rendering
status: completed
type: bug
priority: normal
created_at: 2026-02-13T22:19:31Z
updated_at: 2026-02-13T22:21:14Z
---

`cdx doctor` keychain ACL spinner currently appears only after checks finish because ACL retrieval blocks the event loop. Make spinner render during check execution.

## Summary of Changes

- Added non-blocking `runSecuritySafeAsync(...)` in `lib/keychain.ts` using `Bun.spawn`.
- Added `getKeychainDecryptAccessByServiceAsync(...)` in `lib/keychain-acl.ts`.
- Updated `cdx doctor` to await the async keychain ACL fetch while the spinner is active.
- Verified behavior by running `bun run cdx.ts doctor`; spinner now animates during ACL checks instead of rendering only at completion.
