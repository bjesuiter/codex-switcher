---
# codex-switcher-4bf0
title: Fix doctor keychain ACL spinner rendering
status: in-progress
type: bug
created_at: 2026-02-13T22:19:31Z
updated_at: 2026-02-13T22:19:31Z
---

Auth files:
  OpenCode: active: bjesuiter@gmail.com
    Path: /Users/bjesuiter/.local/share/opencode/auth.json
  Codex CLI: active: bjesuiter@gmail.com
    Path: /Users/bjesuiter/.codex/auth.json
  Pi Agent: active: bjesuiter@gmail.com
    Path: /Users/bjesuiter/.pi/agent/auth.json

Capabilities:
  Platform: darwin
  Path profile: xdg
  Secret store: macOS Keychain (cross-keychain) — available
  Browser launcher: open — available

Keychain ACL checks:
  Runtime executable: /Users/bjesuiter/.bun/bin/bun
[?25l│
◇  Keychain ACL checks complete.
[?25h  bjesuiter@gmail.com: runtime is in trusted apps
  work.bjesuiter@gmail.com: runtime is in trusted apps keychain ACL spinner currently appears only after checks finish because ACL retrieval blocks the event loop. Make spinner render during check execution.
