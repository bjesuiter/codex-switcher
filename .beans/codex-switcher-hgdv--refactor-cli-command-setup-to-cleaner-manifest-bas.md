---
# codex-switcher-hgdv
title: Refactor CLI command setup to cleaner manifest-based style
status: todo
type: task
created_at: 2026-02-25T20:43:20Z
updated_at: 2026-02-25T20:43:20Z
---

## Goal

Refactor command registration to a cleaner, scalable style while staying on Commander.js.

## Scope

- Replace ad-hoc `register<CommandName>Command` assembly in entrypoint with a centralized command manifest/registry.
- Keep behavior fully backward-compatible (command names, flags, help output, completion behavior).
- Preserve existing preAction/postAction secret-store lifecycle hooks.

## Proposed Approach

- Introduce a typed command registration contract (name + register function + optional completion hooks).
- Move command list assembly into one module that can be iterated and tested.
- Keep individual command modules focused on command logic only.

## Acceptance Criteria

- [ ] `cdx --help` shows the same commands/options as before.
- [ ] Existing tests for command presence/help/completion continue to pass.
- [ ] Command bootstrap code in `cdx.ts` is simplified and easier to extend.
- [ ] No migration to Gunshi in this refactor.
