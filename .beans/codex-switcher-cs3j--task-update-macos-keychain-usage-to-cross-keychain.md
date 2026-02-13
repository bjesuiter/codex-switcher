---
# codex-switcher-cs3j
title: 'Task: update macOS keychain usage to cross-keychain package'
status: completed
type: task
priority: normal
created_at: 2026-02-13T19:19:23Z
updated_at: 2026-02-13T19:24:21Z
---

Replace direct macOS `security` CLI usage with the cross-keychain-backed adapter path, keeping existing behavior and tests aligned across platforms.

## Summary of Changes

- Added `lib/secrets/macos-cross-keychain.ts` with a dedicated macOS cross-keychain adapter (`native-macos` preferred, `macos` fallback).
- Added fallback-consent enforcement for macOS writes when only the CLI fallback backend is selected.
- Wired the macOS runtime secret-store adapter in `lib/secrets/store.ts` to use the new cross-keychain adapter (`macos-cross-keychain`).
- Updated `lib/secrets/store.test.ts` to validate darwin now resolves to the macOS cross-keychain adapter.
