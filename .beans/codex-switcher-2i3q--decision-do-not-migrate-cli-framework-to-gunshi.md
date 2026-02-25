---
# codex-switcher-2i3q
title: 'Decision: do not migrate CLI framework to Gunshi'
status: completed
type: task
created_at: 2026-02-25T20:43:14Z
updated_at: 2026-02-25T20:43:14Z
---

## Decision

We evaluated whether codex-switcher should migrate from Commander.js (+ @bomb.sh/tab) to Gunshi and decided **not to migrate** at this time.

## Rationale

- codex-switcher already has working shell completion and dynamic account completions via `@bomb.sh/tab`.
- Gunshi completion support (`@gunshi/plugin-completion`) currently requires Node.js, while this project is Bun-based for development/runtime workflows.
- Full migration would add non-trivial churn (command wiring, hooks, tests, completion integration) with limited user-facing payoff right now.

## Summary of Changes

- Documented architectural decision to keep the current Commander.js-based CLI foundation.
- Established follow-up direction: improve command organization style without framework migration.
