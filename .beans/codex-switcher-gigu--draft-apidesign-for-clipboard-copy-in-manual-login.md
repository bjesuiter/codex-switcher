---
# codex-switcher-gigu
title: Draft API/design for clipboard copy in manual login flow (SSH/Blink/OSC52)
status: completed
type: task
priority: normal
created_at: 2026-02-25T20:30:31Z
updated_at: 2026-02-25T20:31:18Z
blocking:
    - codex-switcher-i2ow
---

## Goal

Draft a concrete implementation design (no code changes yet) for adding pbcopy-like URL copy support in manual OAuth flow, with focus on Blink on iOS over SSH/Mosh.

## Scope

- define module API and responsibilities
- define detection/capability strategy and fallback order
- define OSC52 handling (including tmux wrapper)
- define integration points in login flow
- define test matrix

## Acceptance criteria

- [x] Proposed `clipboard` module API drafted
- [x] Capability + strategy order documented (local commands vs OSC52 vs helper output)
- [x] Security/privacy defaults documented (opt-in behavior)
- [x] Integration points in current code identified
- [x] Manual validation matrix drafted

## Summary of Changes

Drafted a concrete no-code implementation plan for clipboard-friendly manual OAuth URL handling, tuned for Blink on iOS over SSH/Mosh.

Design highlights:
- Add a new `lib/platform/clipboard.ts` abstraction with capability probing + `tryCopyToClipboard(text, context)` API.
- Strategy order: local command copy (desktop/local), then OSC52 (remote/SSH capable terminals), then helper-command/raw-URL fallback.
- Keep copy behavior opt-in in interactive flow to avoid surprising clipboard overwrite/privacy issues.
- Treat Mosh as best-effort for OSC52; do not rely on it as sole mechanism.
- Integrate in manual login URL display path in `lib/oauth/login.ts`, and optionally expose diagnostics via runtime capability surfaces later.

Validation plan drafted for macOS, Linux (Wayland/X11/headless), Windows, SSH+Blink, SSH+tmux, and Mosh scenarios.
