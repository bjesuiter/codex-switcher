---
# codex-switcher-hgdv
title: Refactor CLI command setup to cleaner manifest-based style
status: scrapped
type: task
priority: normal
created_at: 2026-02-25T20:43:20Z
updated_at: 2026-02-25T20:53:54Z
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

- [x] `cdx --help` shows the same commands/options as before.
- [x] Existing tests for command presence/help/completion continue to pass.
- [x] Command bootstrap code in `cdx.ts` is simplified and easier to extend.
- [x] No migration to Gunshi in this refactor.

## Summary of Changes

- Added `lib/commands/manifest.ts` with a centralized typed command registry and a single `registerCommands(...)` entry point.
- Updated `cdx.ts` to use `registerCommands(...)` instead of manually calling each `register<CommandName>Command` function.
- Centralized account-argument completion targets in the command manifest and iterated them from `configureTabCompletion(...)`.
- Kept command names/options/behavior unchanged and validated with `bun test cdx.test.ts`.

## Reasons for Scrapping

- User reviewed the manifest-based registration refactor and reported it as worse than the previous structure.
- The new abstraction added indirection without improving readability for this codebase.
- Decision: discard this implementation and revert code changes; revisit command-organization improvements with a simpler approach later.
