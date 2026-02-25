---
# codex-switcher-o480
title: 'Research: make manual auth URL copyable via shortcut/button'
status: completed
type: task
priority: normal
created_at: 2026-02-25T20:21:13Z
updated_at: 2026-02-25T20:23:51Z
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

- [x] Enumerate viable UX approaches (hotkey/button-like affordance/auto-copy/manual-copy helper)
- [x] Document platform support + fallback behavior for each approach
- [x] Recommend one default strategy + one fallback strategy
- [x] Identify implementation touchpoints in current login/manual flow
- [x] Define validation plan (manual tests per OS/shell context)

## Summary of Changes

Completed a feasibility research pass for improving manual OAuth URL copy UX without code changes.

Findings:
- Terminal "button" UX is limited; practical options are explicit prompt action, helper command output, OSC52 clipboard sequence, and optional clickable hyperlinks.
- Cross-platform command-based clipboard support is viable but fragmented:
  - macOS: `pbcopy`
  - Windows: `clip` / PowerShell `Set-Clipboard`
  - Linux: `wl-copy` (Wayland), `xclip`/`xsel` (X11), often unavailable on headless/SSH hosts.
- OSC52 can copy to local clipboard over SSH in compatible terminals, but support varies and may be disabled/truncated (tmux/screen/terminal policy).
- Auto-copy by default has privacy and surprise risks (overwrites clipboard, exposes auth URL into clipboard history managers).

Recommendation:
1) Default strategy: explicit opt-in copy action in manual flow (e.g. prompt: "Copy URL to clipboard now?") with clear success/failure messaging and continue path.
2) Fallback strategy: always print a one-line platform-specific copy helper command so users can run a single command instead of selecting a long URL.

Likely implementation touchpoints (for follow-up implementation bean):
- `lib/oauth/login.ts` (manual flow + browser-fallback output paths around URL display)
- new helper module such as `lib/platform/clipboard.ts` (capability detection + copy attempt order)
- optional capability surfacing in `lib/platform/capabilities.ts` + `doctor` output
- tests similar to `lib/platform/browser.test.ts` pattern for deterministic command selection/failure handling

Validation plan:
- macOS Terminal/iTerm interactive run
- Linux Wayland + X11 + headless SSH run
- Windows PowerShell/CMD run
- SSH over tmux (OSC52 on/off)
- non-interactive mode behavior (no prompts, helper output only)
- verify failure paths are actionable and never block login continuation.
