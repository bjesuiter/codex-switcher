---
# codex-switcher-gg04
title: 'Task: add fnox secrets adapter for WSL/headless support'
status: todo
type: task
priority: deferred
created_at: 2026-02-13T13:13:01Z
updated_at: 2026-02-13T13:13:01Z
parent: codex-switcher-zky5
---

Implement a fnox-backed secrets adapter to enable secure credential storage where OS keyring is unavailable or unreliable (e.g. WSL/headless Linux).

Goals:
- Plug into shared secrets adapter interface
- Provide WSL/headless compatible storage path
- Document setup and security expectations

Note: explicitly out of current cross-platform v1 scope; tracked as deferred follow-up.
