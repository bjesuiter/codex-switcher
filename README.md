# cdx

Simple CLI tool to switch between two or more OpenAI Pro subscriptions for OpenCode.

## Requirements

- macOS (uses Keychain via the `security` command)
- Bun

## Install

```bash
bun install
bun link
```

This exposes the `cdx` binary globally.

## Configure accounts

`cdx` stores OAuth secrets in the macOS Keychain and keeps a lightweight account list
in `~/.config/cdx/accounts.json` so it can cycle between subscriptions.

1. Add each account's OAuth JSON to Keychain.

```bash
security add-generic-password -a "ACCOUNT_ID" -s "cdx-openai-ACCOUNT_ID" -w '{"refresh":"REFRESH","access":"ACCESS","expires":1234567890,"accountId":"ACCOUNT_ID"}' -U
```

2. Create the accounts list.

```json
{
  "current": 0,
  "accounts": [
    { "accountId": "ACCOUNT_ID", "keychainService": "cdx-openai-ACCOUNT_ID" }
  ]
}
```

Save the JSON to `~/.config/cdx/accounts.json`.

## Usage

```bash
cdx switch
```

`cdx switch` cycles to the next configured account, reads its OAuth secrets from
Keychain, and writes `~/.local/share/opencode/auth.json` in the format OpenCode
expects.
