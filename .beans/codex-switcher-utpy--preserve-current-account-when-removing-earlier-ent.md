---
# codex-switcher-utpy
title: Preserve current account when removing earlier entry
status: todo
type: bug
created_at: 2026-01-23T13:12:01Z
updated_at: 2026-01-23T13:12:01Z
---

Removing an account that appears before the current index shifts the active account unintentionally because the current pointer is left unchanged unless it goes out of bounds.\n\n## Checklist\n- [ ] Detect removals that occur before the current index\n- [ ] Decrement current index to keep the same account selected\n- [ ] Add/adjust tests for removal behavior