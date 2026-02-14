---
# codex-switcher-4e1k
title: 'Windows doctor: verify secure-store payload availability for all configured accounts'
status: completed
type: task
priority: high
created_at: 2026-02-14T00:06:42Z
updated_at: 2026-02-14T00:07:12Z
parent: codex-switcher-i5g5
---

## Request

Add a Windows-only `cdx doctor` check that validates secure-store credential availability for all accounts registered in config.

## Acceptance criteria

- Runs only on Windows.
- Iterates all configured accounts.
- Reports whether each account credential can be loaded from secure storage.
- Surfaces missing entries and load/decrypt errors clearly in doctor output.

## Summary of Changes

Implemented a Windows-only `cdx doctor` secure-store validation section:

- Added Windows doctor checks in `lib/commands/doctor.ts`.
- For every account registered in config (`status.accounts`), doctor now attempts `secretStore.load(accountId)`.
- Output now reports per-account status:
  - `credential payload load OK` when load succeeds
  - `missing secure-store entry for configured account` when missing
  - `secure-store load failed (<error>)` for other load/decrypt failures
- Added a summary line showing how many configured accounts passed the check.
- Check is gated to `process.platform === "win32"` only.
- Verified with `bun test`.
