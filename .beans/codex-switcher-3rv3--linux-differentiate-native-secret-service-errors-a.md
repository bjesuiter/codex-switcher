---
# codex-switcher-3rv3
title: 'Linux: differentiate native secret service errors after auth'
status: completed
type: bug
priority: high
created_at: 2026-02-25T20:18:51Z
updated_at: 2026-02-25T20:36:00Z
parent: codex-switcher-cip1
---

## Problem

After completing authentication on Linux, users can get:

`native secret service error: no matching entry found in secure storage`

## Questions to answer

1. Exactly when does this error happen in the auth/login flow?
2. Is this message only emitted when an entry is missing, or also when no secret store backend is available/unusable?

## Expected behavior

On first login there is no existing secret entry yet. This should be treated as normal and the entry should be created instead of surfacing an error.

## Acceptance criteria

- [x] Reproduce and document the exact trigger point in Linux auth flow
- [x] Distinguish "entry not found" from "secret store unavailable" conditions
- [x] Show a specific actionable error when secret store is unavailable
- [x] Treat missing entry during first login as non-error and create/write the new secret
- [x] Add/update tests for both branches (missing entry vs unavailable store)

## Implementation notes

- Trigger point identified in Linux credential save path (`saveLinuxCrossKeychainPayload`) when native backend returns `Native secret service error: no matching entry found in secure storage` on first write.
- Added Linux error classification (`missing_entry` vs `store_unavailable`) and normalization in `lib/secrets/linux-cross-keychain.ts`.
- Added fallback recovery: if native Linux save fails with missing-entry semantics, switch to `secret-service` fallback backend and retry the write (with existing fallback-consent checks).
- Added actionable secure-store unavailable guidance so users get setup hints instead of raw backend errors.
- Added tests:
  - `lib/secrets/linux-cross-keychain.test.ts` for missing-entry vs unavailable classification branches.
  - `lib/secrets/store.test.ts` marker coverage for native Linux missing-entry error text.
