---
# codex-switcher-ir91
title: 'Task: unskip CI-safe tests by decoupling from macOS keychain'
status: completed
type: task
priority: normal
created_at: 2026-02-13T20:39:36Z
updated_at: 2026-02-13T20:41:45Z
---

Make test suites platform-aware: keep true integration tests gated, but run CI-safe status/switch and related tests on all platforms by replacing direct keychain dependencies with secret-store adapter mocks.

## Summary of Changes

- Made status and switch test suites CI-safe by replacing direct keychain dependency with an in-memory SecretStoreAdapter test double.
- Removed CI-wide skip guards from lib/status.test.ts and lib/switch.test.ts so these tests now run on Windows/Linux/macOS CI.
- Kept keychain integration tests as platform-gated by updating skip conditions to skip on non-darwin platforms (and CI).
- Verified updated suites locally with bun test lib/status.test.ts lib/switch.test.ts and bun test lib/keychain.test.ts.
