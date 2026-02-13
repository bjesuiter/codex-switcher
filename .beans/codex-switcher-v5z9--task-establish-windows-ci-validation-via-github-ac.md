---
# codex-switcher-v5z9
title: 'Task: implement testing for Windows via GitHub Actions'
status: completed
type: task
priority: normal
created_at: 2026-02-13T13:09:37Z
updated_at: 2026-02-13T20:02:17Z
parent: codex-switcher-zky5
blocked_by:
    - codex-switcher-8j5t
---

Define and implement a CI strategy to validate Windows behavior from macOS-based development:
- Add GitHub Actions Windows job(s) for cdx smoke/integration tests
- Validate PowerShell as official shell
- Add best-effort smoke checks for CMD and Git Bash
- Document shell support policy and known limitations

## Requested Update

Aligned this bean with the requested scope: implementing Windows testing via GitHub Actions.

## Summary of Changes

- Added a new CI workflow at `.github/workflows/ci.yml`.
- Added cross-platform test/build validation on `ubuntu-latest`, `macos-latest`, and `windows-latest`.
- Added dedicated Windows shell smoke checks for `pwsh` (official/required), plus non-blocking best-effort checks for `cmd` and `bash` (Git Bash).
- Added documentation for shell policy and limitations at `docs/windows-shell-support.md`.

## Follow-up

Adjusted CI trigger behavior: remove direct push trigger, keep manual trigger, and enforce execution as a pre-publish gate.

## Follow-up completion

- Removed push triggers from GitHub Actions CI workflow.
- Kept manual triggering enabled with workflow_dispatch.
- Wired publish workflow to call CI as a pre-publish gate via workflow_call.
