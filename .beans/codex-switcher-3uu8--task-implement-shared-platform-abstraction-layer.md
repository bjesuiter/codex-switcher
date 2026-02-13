---
# codex-switcher-3uu8
title: 'Task: implement shared platform abstraction layer'
status: todo
type: task
created_at: 2026-02-13T12:59:25Z
updated_at: 2026-02-13T12:59:25Z
parent: codex-switcher-zky5
blocked_by:
    - codex-switcher-8j5t
---

Create shared infrastructure used by both Windows and Linux support:
- Secure credential-store interface (save/load/delete/list)
- Platform-aware path resolver for config/auth targets
- Browser-open strategy with platform-specific launchers
- Capability diagnostics in cdx status (what is supported on this machine)
