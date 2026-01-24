---
# codex-switcher-c9jw
title: Add status command
status: completed
type: feature
priority: normal
created_at: 2026-01-24T12:43:17Z
updated_at: 2026-01-24T12:57:44Z
---

A `cdx status` command that shows the health/state of all configured accounts at a glance.

## Information to display
- Current active account (highlighted)
- For each account:
  - Label and account ID
  - Token expiration time and remaining validity (e.g. 'expires in 2h 15m' or 'EXPIRED 3d ago')
  - Whether keychain entry exists
  - Whether id_token is present (needed for Codex CLI switching)
- Whether opencode auth.json exists and which account it points to
- Whether codex auth.json exists and which account it points to

## Checklist
- [x] Add `cdx status` command to CLI
- [x] Read token expiry from keychain payloads and compute remaining time
- [x] Check auth file existence and parse current account from each
- [x] Format and display status table/list
- [x] Add status option to interactive mode menu
- [x] Add tests