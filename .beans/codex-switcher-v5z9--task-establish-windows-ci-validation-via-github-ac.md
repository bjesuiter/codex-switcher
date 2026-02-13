---
# codex-switcher-v5z9
title: 'Task: implement testing for Windows via GitHub Actions'
status: completed
type: task
priority: normal
created_at: 2026-02-13T13:09:37Z
updated_at: 2026-02-13T20:32:16Z
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

## Parse-error fix

Fixing GitHub Actions parse error in `ci.yml` caused by matrix expression usage in step `shell` fields.

## Parse-error fix completion

- Replaced dynamic `shell: ${{ matrix.shell }}` usage with per-shell conditional steps.
- Added explicit static shell steps for `pwsh`, `cmd`, and `bash` in Windows smoke tests.
- This removes the GitHub parser error and keeps the same smoke coverage.

## Windows path assertions fix

Updating path-related tests to use platform-aware path joining so they pass consistently on Windows runners.

## Windows path assertions fix completion

- Updated `lib/platform/path-resolver.test.ts` to use `path.join(...)` for XDG and `PI_CODING_AGENT_DIR` expectations.
- Updated `lib/paths.test.ts` to assert PI override using `path.join(...)` instead of hardcoded POSIX separators.
- Verified with: `bun test lib/platform/path-resolver.test.ts lib/paths.test.ts`.
