# cdx

Simple CLI tool to switch between multiple OpenAI Pro subscriptions for OpenCode.

## Requirements

- macOS (uses Keychain via the `security` command)
- Bun

## Install

```bash
git clone https://github.com/bjesuiter/codex-switcher.git
cd codex-switcher
bun install
bun link
```

This exposes the `cdx` binary globally.

## Quick Start

### Add your first account

```bash
cdx login
```

This opens your browser to authenticate with OpenAI. After successful login, your credentials are stored securely in macOS Keychain.

### Switch between accounts

```bash
cdx switch
```

Cycles to the next configured account and writes credentials to `~/.local/share/opencode/auth.json`.

### Interactive mode

```bash
cdx
```

Running `cdx` without arguments opens an interactive menu to:
- List all configured accounts
- Switch to a different account
- Add a new account (OAuth login)
- Remove an account

## Commands

| Command | Description |
|---------|-------------|
| `cdx` | Interactive mode |
| `cdx login` | Add a new OpenAI account via OAuth |
| `cdx switch` | Switch to the next configured account |
| `cdx --help` | Show help |
| `cdx --version` | Show version |

## How it works

- OAuth credentials are stored securely in macOS Keychain
- Account list is stored in `~/.config/cdx/accounts.json`
- Active account credentials are written to `~/.local/share/opencode/auth.json`

## Manual Configuration (Advanced)

You can also manually add accounts to Keychain:

```bash
security add-generic-password -a "ACCOUNT_ID" -s "cdx-openai-ACCOUNT_ID" -w '{"refresh":"REFRESH","access":"ACCESS","expires":1234567890,"accountId":"ACCOUNT_ID"}' -U
```

And create the accounts list manually:

```json
{
  "current": 0,
  "accounts": [
    { "accountId": "ACCOUNT_ID", "keychainService": "cdx-openai-ACCOUNT_ID" }
  ]
}
```

Save to `~/.config/cdx/accounts.json`.
