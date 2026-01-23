---
# codex-switcher-7g0x
title: CLI Foundation with Commander.js
status: completed
type: feature
priority: normal
created_at: 2026-01-22T08:48:58Z
updated_at: 2026-01-22T11:47:44Z
parent: codex-switcher-a5mb
blocking:
    - codex-switcher-zim6
---

Set up the CLI foundation using commander.js for argument parsing.

## Requirements
- Install commander.js and @clack/prompts dependencies
- Configure commander.js program with name 'cdx' and version
- Set up default action (no command) to launch interactive mode
- Ensure binary entry point works via package.json 'bin' field

## Checklist
- [x] Install dependencies: commander, @clack/prompts
- [x] Create basic commander.js program structure in cdx.ts
- [x] Configure default command to call interactive handler
- [x] Verify `bun run cdx.ts` works
- [x] Write tests using bun:test to validate CLI foundation behavior