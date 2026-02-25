---
# codex-switcher-rwmm
title: Implement manual OAuth URL clipboard assist (OSC52 + local commands)
status: completed
type: task
priority: high
created_at: 2026-02-25T20:35:51Z
updated_at: 2026-02-25T20:38:38Z
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

- [x] `lib/platform/clipboard.ts` exists with deterministic strategy selection
- [x] manual login flow offers copy action and/or helper output
- [x] SSH/Blink path attempts OSC52 when appropriate
- [x] copy failure never blocks login
- [x] tests cover command strategy + OSC52 output framing
- [x] docs/help text updated where needed

## Summary of Changes

Implemented manual OAuth URL clipboard assist with non-blocking behavior and SSH-friendly fallback support.

### What was implemented
- Added new module `lib/platform/clipboard.ts`:
  - deterministic clipboard target resolution
  - local command support (`pbcopy`, `clip`, `powershell`, `wl-copy`, `xclip`, `xsel`)
  - OSC52 emission with tmux/screen wrapping for remote terminal copy
  - helper command builder for manual fallback
- Integrated into manual login flow in `lib/oauth/login.ts`:
  - after showing manual auth URL, prompt user to copy URL to clipboard
  - attempt copy via resolved strategy
  - on failure, show actionable helper command when available
  - failures are warnings only and never block auth flow
- Added tests in `lib/platform/clipboard.test.ts`:
  - strategy ordering (macOS, Wayland Linux, remote SSH)
  - OSC52 framing behavior
  - fallback from command copy failure to OSC52
  - helper command generation
- Updated user docs in `README.md` command table and SSH tip to mention optional clipboard assist/OSC52 support.

### Validation
- `bun test lib/platform/clipboard.test.ts lib/oauth/login.test.ts`
- `bun test` (full suite)}
