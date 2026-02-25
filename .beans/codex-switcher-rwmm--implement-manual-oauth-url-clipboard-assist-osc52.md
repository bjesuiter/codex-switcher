---
# codex-switcher-rwmm
title: Implement manual OAuth URL clipboard assist (OSC52 + local commands)
status: in-progress
type: task
priority: high
created_at: 2026-02-25T20:35:51Z
updated_at: 2026-02-25T20:35:51Z
blocking:
    - codex-switcher-i2ow
---

## Goal

Implement clipboard assist for manual OAuth URL flow so users on SSH/Blink can copy login URLs without selecting long text manually.

## Scope

- add clipboard helper module with local command + OSC52 support
- integrate into manual login URL UX
- keep behavior opt-in / non-blocking
- add tests for strategy and OSC52 behavior

## Acceptance criteria

- [ ] `lib/platform/clipboard.ts` exists with deterministic strategy selection
- [ ] manual login flow offers copy action and/or helper output
- [ ] SSH/Blink path attempts OSC52 when appropriate
- [ ] copy failure never blocks login
- [ ] tests cover command strategy + OSC52 output framing
- [ ] docs/help text updated where needed
