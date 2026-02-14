---
# codex-switcher-4e1k
title: 'Windows doctor: verify secure-store payload availability for all configured accounts'
status: in-progress
type: task
priority: high
created_at: 2026-02-14T00:06:42Z
updated_at: 2026-02-14T00:06:42Z
parent: codex-switcher-i5g5
---

## Request

Add a Windows-only `cdx doctor` check that validates secure-store credential availability for all accounts registered in config.

## Acceptance criteria

- Runs only on Windows.
- Iterates all configured accounts.
- Reports whether each account credential can be loaded from secure storage.
- Surfaces missing entries and load/decrypt errors clearly in doctor output.
