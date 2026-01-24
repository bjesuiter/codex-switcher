---
# codex-switcher-w8mk
title: Refine status command output with card-style layout
status: todo
type: feature
created_at: 2026-01-24T13:35:31Z
updated_at: 2026-01-24T13:35:31Z
---

Redesign the `cdx status` output to use a slimmer, card-style layout per account.

## Requirements

Each account should be displayed as a compact "card" with:
1. Account label on the first line
2. Account ID on the next line
3. Expires in on the next line
4. Usage info directly in that card (instead of separate section at the bottom)

## Current Behavior
- Accounts listed as single lines with all info crammed together
- Usage shown separately at the bottom for current account only

## Desired Behavior
- One card per account, visually distinct
- Information spread across multiple lines for readability
- Usage embedded per-account in the card