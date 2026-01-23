---
# codex-switcher-lj4d
title: Interactive Mode with @clack/prompts
status: completed
type: feature
priority: normal
created_at: 2026-01-22T08:49:16Z
updated_at: 2026-01-22T12:17:13Z
parent: codex-switcher-a5mb
blocking:
    - codex-switcher-in66
---

Implement interactive mode as the default CLI behavior.

## Requirements
- Running `cdx` without arguments launches interactive mode
- Use @clack/prompts for beautiful terminal UI
- Provide menu to: list accounts, switch account, add new account, remove account

## Checklist
- [x] Create interactive mode entry point function
- [x] Implement main menu with @clack/prompts select
- [x] Implement 'List accounts' option showing all stored accounts
- [x] Implement 'Switch account' option with account selector
- [x] Implement 'Add account' option triggering OAuth login
- [x] Implement 'Remove account' option with confirmation
- [x] Show current active account indicator in menus
- [x] Handle Ctrl+C gracefully with outro message
- [x] Write tests using bun:test to validate interactive mode behavior