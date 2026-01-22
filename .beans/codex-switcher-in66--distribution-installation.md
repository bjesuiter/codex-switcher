---
# codex-switcher-in66
title: Distribution & Installation
status: todo
type: feature
created_at: 2026-01-22T08:49:18Z
updated_at: 2026-01-22T08:49:18Z
parent: codex-switcher-a5mb
---

Finalize package configuration for global installation.

## Requirements
- CLI installable globally via `bun link`
- Binary name: `cdx`
- Bun script with proper shebang

## Checklist
- [ ] Ensure package.json 'bin' field is correctly configured
- [ ] Add proper shebang to cdx.ts (#!/usr/bin/env bun)
- [ ] Test `bun link` installation
- [ ] Test `cdx` command works globally after link
- [ ] Document installation steps in README.md