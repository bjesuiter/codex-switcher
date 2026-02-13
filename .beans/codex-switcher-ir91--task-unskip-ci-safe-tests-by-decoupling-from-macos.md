---
# codex-switcher-ir91
title: 'Task: unskip CI-safe tests by decoupling from macOS keychain'
status: in-progress
type: task
created_at: 2026-02-13T20:39:36Z
updated_at: 2026-02-13T20:39:36Z
---

Make test suites platform-aware: keep true integration tests gated, but run CI-safe status/switch and related tests on all platforms by replacing direct keychain dependencies with secret-store adapter mocks.
