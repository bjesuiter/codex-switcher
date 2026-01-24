---
# codex-switcher-kfr1
title: Fix writeAuthFile to preserve existing auth.json sections
status: completed
type: bug
priority: critical
created_at: 2026-01-24T13:05:46Z
updated_at: 2026-01-24T13:07:11Z
---

writeAuthFile overwrites the entire opencode auth.json, destroying non-openai sections (e.g. anthropic). Must read existing file, merge only the openai key, and write back.

## Checklist
- [x] Read existing auth.json if present, parse as object
- [x] Merge only the openai section into existing data
- [x] Write merged result back
- [x] Add test verifying other sections are preserved