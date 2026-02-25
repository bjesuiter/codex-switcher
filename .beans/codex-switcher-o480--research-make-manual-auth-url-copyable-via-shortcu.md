---
# codex-switcher-o480
title: 'Research: make manual auth URL copyable via shortcut/button'
status: todo
type: task
priority: normal
created_at: 2026-02-25T20:21:13Z
updated_at: 2026-02-25T20:21:13Z
blocking:
    - codex-switcher-i2ow
---

## Problem

In manual auth flow, copying the full login URL is cumbersome because users must select a long URL manually.

## Goal

Research whether we can provide a one-step way to copy the manual auth URL (for example a hotkey, explicit prompt action, platform clipboard integration, or shell-friendly command output).

## Questions

1. What UX options are available in terminal environments to make URL copying easier?
2. Which options work cross-platform (macOS/Linux/Windows) with minimal surprises?
3. Can we support both interactive TTY and non-interactive/remote SSH scenarios cleanly?
4. What security/privacy implications exist for automatically placing auth URLs on clipboard?

## Acceptance criteria

- [ ] Enumerate viable UX approaches (hotkey/button-like affordance/auto-copy/manual-copy helper)
- [ ] Document platform support + fallback behavior for each approach
- [ ] Recommend one default strategy + one fallback strategy
- [ ] Identify implementation touchpoints in current login/manual flow
- [ ] Define validation plan (manual tests per OS/shell context)
