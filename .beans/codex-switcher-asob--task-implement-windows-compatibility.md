---
# codex-switcher-asob
title: 'Task: implement Windows compatibility'
status: completed
type: task
priority: normal
created_at: 2026-02-13T12:59:25Z
updated_at: 2026-02-13T15:17:54Z
parent: codex-switcher-i5g5
blocked_by:
    - codex-switcher-3uu8
---

Implement Windows-specific support:
- Windows secure credential backend integration
- Windows path defaults for config/opencode/codex/pi targets
- Browser launcher + callback flow verification on Windows
- End-to-end switch/relogin/status validation on Windows



## Progress (2026-02-13)
- Added a Windows Credential Manager-backed secure store adapter (`windows-credential-manager`) and wired it into runtime adapter selection for `win32`.
- Implemented segmented credential storage for Windows (`refresh`, `access`, `expires`, optional `idToken`) to avoid oversized single-blob credentials.
- Added focused unit tests for Windows credential save/load/delete/list/exists behavior with an in-memory backend.
- Updated docs to describe Windows secure-store support and Windows config path defaults.

## Verification
- `bun test`
- `bun run build`
