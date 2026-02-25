---
# codex-switcher-j37v
title: Add Mosh-specific heuristics for clipboard assist in manual login flow
status: completed
type: task
priority: normal
created_at: 2026-02-25T20:40:17Z
updated_at: 2026-02-25T20:42:29Z
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

- [x] Detect Mosh sessions in clipboard utility
- [x] Adjust behavior or messaging to avoid overconfident success in Mosh
- [x] Preserve non-blocking login flow
- [x] Add/adjust tests for Mosh heuristics
- [x] Update docs if behavior/user guidance changes

## Summary of Changes

Added Mosh-specific heuristics for clipboard assist in manual login flow.

- Introduced explicit Mosh detection helper (`isLikelyMoshSession`) in `lib/platform/clipboard.ts`.
- Kept OSC52 as best-effort for Mosh, but now surfaces a caution warning when OSC52 is used in Mosh sessions to avoid overconfident success messaging.
- Updated login UX to display warning + fallback copy command hint when copy succeeded via OSC52 under Mosh but may not have reached clipboard reliably.
- Added tests for Mosh detection, Mosh target resolution, and Mosh OSC52 warning behavior in `lib/platform/clipboard.test.ts`.
- Updated README SSH/VPS tip to mention Mosh OSC52 reliability caveat and fallback guidance.

Validation:
- `bun test lib/platform/clipboard.test.ts lib/oauth/login.test.ts`
- `bun test`}
