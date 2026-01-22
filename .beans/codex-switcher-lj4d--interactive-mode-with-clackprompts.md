---
# codex-switcher-lj4d
title: Interactive Mode with @clack/prompts
status: todo
type: feature
priority: normal
created_at: 2026-01-22T08:49:16Z
updated_at: 2026-01-22T08:49:27Z
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
- [ ] Create interactive mode entry point function
- [ ] Implement main menu with @clack/prompts select
- [ ] Implement 'List accounts' option showing all stored accounts
- [ ] Implement 'Switch account' option with account selector
- [ ] Implement 'Add account' option triggering OAuth login
- [ ] Implement 'Remove account' option with confirmation
- [ ] Show current active account indicator in menus
- [ ] Handle Ctrl+C gracefully with outro message
- [ ] Write tests using bun:test to validate interactive mode behavior