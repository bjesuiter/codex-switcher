---
# codex-switcher-in66
title: Distribution & Installation
status: completed
type: feature
priority: normal
created_at: 2026-01-22T08:49:18Z
updated_at: 2026-01-22T12:18:11Z
parent: codex-switcher-a5mb
---

Finalize package configuration for global installation.

## Requirements
- CLI installable globally via `bun link`
- Binary name: `cdx`
- Bun script with proper shebang

## Checklist
- [x] Ensure package.json 'bin' field is correctly configured
- [x] Add proper shebang to cdx.ts (#!/usr/bin/env bun)
- [x] Test `bun link` installation
- [x] Test `cdx` command works globally after link
- [x] Document installation steps in README.md
- [x] Write tests using bun:test to validate distribution and installation behavior (verified via CLI execution tests)