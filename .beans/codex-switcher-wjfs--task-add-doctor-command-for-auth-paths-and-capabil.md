---
# codex-switcher-wjfs
title: 'Task: add doctor command for auth paths and capabilities'
status: completed
type: task
priority: normal
created_at: 2026-02-13T19:12:03Z
updated_at: 2026-02-13T19:13:56Z
parent: codex-switcher-zky5
---

Add cdx doctor command that shows auth files with explicit paths and runtime capabilities. Remove auth/capabilities section from cdx status to reduce clutter.



## Progress (2026-02-13)
- Added `cdx doctor` command to show auth file state with explicit auth file paths for OpenCode/Codex/Pi.
- Added runtime capabilities output to `doctor` (platform, path profile, secret-store capability, browser launcher capability).
- Removed auth files + capabilities sections from `cdx status` to keep status output focused on account state/usage.
- Updated command wiring/exports and README command descriptions.
- Added CLI tests for doctor command registration/help visibility.

## Verification
- `bun test`
- `bun run build`
