---
# codex-switcher-h6oi
title: Add settings command for secret-store preference
status: in-progress
type: task
priority: normal
created_at: 2026-02-13T20:32:20Z
updated_at: 2026-02-13T20:53:58Z
---

Add a dedicated settings command to manage persistent CLI preferences in accounts.json.

## Scope
- Add `cdx settings` command group
- Add `cdx settings secret-store <mode>` to set `secretStore` in config
- Keep `--secret-store` as run-level override
- Document command usage in README
- Add tests for settings command behavior

## Progress

- Added persisted `secretStore` support in config loading/sanitization.
- Added global `--secret-store` resolution that falls back to configured preference.
- Added `cdx migrate-secrets` command wiring and migration implementation for macOS legacy keychain -> cross-keychain.
- Added config tests for `secretStore` parsing and invalid-value handling.

Remaining: add the dedicated `cdx settings` command group/UX described in scope.
