---
# codex-switcher-2fv8
title: Implement cdx usage command and enhance cdx status with OpenAI usage data
status: todo
type: feature
priority: high
created_at: 2026-01-24T12:58:36Z
updated_at: 2026-01-24T12:58:36Z
---

## Summary

Add a `cdx usage` command that queries OpenAI Plus/Pro usage information for the current account, and integrate usage summary into `cdx status` (which needs to be exposed as a CLI command first).

## Background / Research

CodexBar (https://github.com/steipete/CodexBar) demonstrates how to query OpenAI Plus/Pro subscription usage via an undocumented API:

- **Endpoint**: `GET https://chatgpt.com/backend-api/wham/usage`
- **Auth**: `Authorization: Bearer <access_token>` (same OAuth tokens we already store)
- **Headers**: `User-Agent: CodexBar` (or similar), `Accept: application/json`
- **Optional Header**: `ChatGPT-Account-Id: <account_id>`
- **Response** contains:
  - `plan_type` (e.g. 'plus', 'pro')
  - `rate_limit` with primary (5h) and secondary (weekly) windows:
    - `usage_percentage` (0-100)
    - `reset_at` (ISO timestamp)
  - `credits` balance info

**Important**: This is an undocumented/unofficial OpenAI API endpoint. It may change without notice.

**Reference code**: [CodexOAuthUsageFetcher.swift](https://github.com/steipete/CodexBar/blob/c1e05761e55ddd3d66cdd43edbe7823f627ee6a8/Sources/CodexBarCore/Providers/Codex/CodexOAuth/CodexOAuthUsageFetcher.swift#L149-L189)

## Our Existing Infrastructure

- OAuth tokens already stored in macOS Keychain per account
- `refreshAccessToken()` in `lib/oauth/auth.ts` handles token refresh
- `lib/status.ts` exists with account/credential status (not yet a CLI command)
- Commander.js CLI pattern in `cdx.ts`
- @clack/prompts for interactive UI

## Checklist

- [ ] Create `lib/usage.ts` module:
  - [ ] Define TypeScript types for the usage API response (`UsageResponse`, `RateLimit`, `RateLimitWindow`, `Credits`)
  - [ ] Implement `fetchUsage(accessToken: string, accountId?: string): Promise<UsageResponse>` 
  - [ ] Hit `GET https://chatgpt.com/backend-api/wham/usage` with Bearer token
  - [ ] Handle token expiry: if 401, refresh token via `refreshAccessToken()`, retry once
  - [ ] Handle errors gracefully (network, auth, unexpected response)
  - [ ] Implement `formatUsage(usage: UsageResponse): string` for human-readable output
    - Show plan type
    - Show primary window (5h): usage %, reset time (human-readable relative)
    - Show secondary window (weekly): usage %, reset time
    - Show credits balance if available

- [ ] Register `cdx usage` command in `cdx.ts`:
  - [ ] Add `usage` command with description 'Show OpenAI usage for current account'
  - [ ] Optional `[account]` argument to query a specific account (default: current)
  - [ ] Load credentials from keychain for the target account
  - [ ] Call `fetchUsage()` and display formatted output
  - [ ] Follow existing error handling pattern (try/catch, stderr, exit 1)

- [ ] Register `cdx status` command in `cdx.ts`:
  - [ ] Expose existing `getStatus()` from `lib/status.ts` as CLI command
  - [ ] Format and display status info (accounts list, current account, auth file status, token expiry)
  - [ ] Optionally include a brief usage summary (plan type + primary window %) for the current account
  - [ ] Handle case where usage fetch fails gracefully (show status without usage)

- [ ] Add tests:
  - [ ] Unit test for `fetchUsage()` with mocked fetch responses
  - [ ] Unit test for `formatUsage()` output formatting
  - [ ] Test token refresh retry logic on 401

- [ ] Update README.md command table with `cdx usage` and `cdx status`

## Design Decisions

- Token refresh on 401: Refresh once, retry. If still failing, report auth error and suggest `cdx login`.
- The usage endpoint is undocumented — add a note in code comments about this.
- `cdx status` should work even if usage fetch fails (graceful degradation).
- `cdx usage` is the detailed view; `cdx status` includes a compact usage summary.
