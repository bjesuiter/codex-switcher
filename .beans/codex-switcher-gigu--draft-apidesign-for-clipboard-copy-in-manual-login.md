---
# codex-switcher-gigu
title: Draft API/design for clipboard copy in manual login flow (SSH/Blink/OSC52)
status: in-progress
type: task
priority: normal
created_at: 2026-02-25T20:30:31Z
updated_at: 2026-02-25T20:30:31Z
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

- [ ] Proposed `clipboard` module API drafted
- [ ] Capability + strategy order documented (local commands vs OSC52 vs helper output)
- [ ] Security/privacy defaults documented (opt-in behavior)
- [ ] Integration points in current code identified
- [ ] Manual validation matrix drafted
