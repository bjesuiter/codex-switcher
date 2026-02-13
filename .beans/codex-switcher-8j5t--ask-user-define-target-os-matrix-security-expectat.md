---
# codex-switcher-8j5t
title: 'Ask user: define target OS matrix + security expectations'
status: todo
type: task
priority: critical
created_at: 2026-02-13T12:59:25Z
updated_at: 2026-02-13T12:59:25Z
parent: codex-switcher-zky5
---

Clarify product expectations before implementation.

Open questions:
- Windows scope: Windows 10/11 only? PowerShell/CMD/Git Bash support?
- Linux scope: Ubuntu-only vs broad distro support? WSL in/out of scope?
- Secret storage policy: strict OS keyring only, or encrypted file fallback allowed?
- Non-GUI/headless behavior: required or optional?
- Packaging expectations per platform (npm global, standalone binary, both)?
