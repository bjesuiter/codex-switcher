# cdx

CLI tool to switch between multiple OpenAI accounts for [OpenCode](https://opencode.ai).

## Supported Configurations

- **OpenAI Plus & Pro subscription accounts**: Log in to multiple OpenAI accounts via OAuth and switch the active auth credentials used by OpenCode.

## Requirements

- macOS (uses Keychain via the `security` command)
- [Bun](https://bun.sh) runtime

## Install

```bash
bun add -g @bjesuiter/codex-switch
```

This exposes the `cdx` binary globally.

## Usage

### Add your first account

```bash
cdx login
```

Opens your browser to authenticate with OpenAI. After successful login, your credentials are stored securely in macOS Keychain.

### Switch between accounts

```bash
cdx switch
```

Interactive picker to select an account. Writes credentials to `~/.local/share/opencode/auth.json`.

```bash
cdx switch --next
```

Cycles to the next configured account without prompting.

```bash
cdx switch <account-id-or-label>
```

Switch directly to a specific account by ID or label.

### Label accounts

```bash
cdx label
```

Interactive prompt to assign a friendly name to an account.

```bash
cdx label <account> <new-label>
```

Assign a label directly.

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
| `cdx switch` | Switch account (interactive picker) |
| `cdx switch --next` | Cycle to next account |
| `cdx switch <id>` | Switch to specific account |
| `cdx label` | Label an account (interactive) |
| `cdx label <account> <label>` | Assign label directly |
| `cdx --help` | Show help |
| `cdx --version` | Show version |

## How It Works

- OAuth credentials are stored securely in macOS Keychain
- Account list is stored in `~/.config/cdx/accounts.json`
- Active account credentials are written to `~/.local/share/opencode/auth.json`

## For Developers

### Install from source

```bash
git clone https://github.com/bjesuiter/codex-switcher.git
cd codex-switcher
bun install
bun link
```

### Releasing a new version

1. Increase version in `package.json`
2. Add changelog entry for the version in `CHANGELOG.md`
3. Commit the changes
4. Create a git tag with the version number (no prefix): `git tag X.Y.Z`
5. Push both the commit and the tag: `git push && git push --tags`

### Manual Configuration (Advanced)

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
