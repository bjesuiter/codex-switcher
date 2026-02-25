---
# codex-switcher-j37v
title: Add Mosh-specific heuristics for clipboard assist in manual login flow
status: in-progress
type: task
priority: normal
created_at: 2026-02-25T20:40:17Z
updated_at: 2026-02-25T20:40:17Z
blocking:
    - codex-switcher-i2ow
---

## Goal

Improve clipboard assist behavior/messages for Mosh sessions where OSC52 support may be unreliable.

## Scope

- detect likely Mosh sessions
- apply safer heuristic around OSC52 attempt ordering and/or messaging
- ensure users get actionable fallback instructions
- add tests for Mosh-specific behavior

## Acceptance criteria

- [ ] Detect Mosh sessions in clipboard utility
- [ ] Adjust behavior or messaging to avoid overconfident success in Mosh
- [ ] Preserve non-blocking login flow
- [ ] Add/adjust tests for Mosh heuristics
- [ ] Update docs if behavior/user guidance changes
