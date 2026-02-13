---
# codex-switcher-h6oi
title: Add settings command for secret-store preference
status: todo
type: task
priority: normal
created_at: 2026-02-13T20:32:20Z
updated_at: 2026-02-13T20:32:30Z
---

Add a dedicated settings command to manage persistent CLI preferences in accounts.json.

## Scope
- Add `cdx settings` command group
- Add `cdx settings secret-store <mode>` to set `secretStore` in config
- Keep `--secret-store` as run-level override
- Document command usage in README
- Add tests for settings command behavior
