# cdx specification

## Goal

Provide a Bun-based CLI that makes it easy to switch OpenCode between multiple
OpenAI Pro subscriptions while keeping OAuth secrets in the macOS Keychain.

## Naming

- CLI name: `cdx` (for codex)
- Package binary: `cdx`

## OAuth login

- The CLI supports logging in to multiple accounts via OAuth.
- OAuth secrets are stored in macOS Keychain entries (not plaintext files).
- Each account has a stable account identifier.

## Switch behavior

- Command: `cdx switch`
- The command cycles through all configured subscriptions.
- The active subscription is written to `~/.local/share/opencode/auth.json`.

### auth.json format

```json
{
  "openai": {
    "type": "oauth",
    "refresh": "<refresh_token>",
    "access": "<access_token>",
    "expires": <timestamp>,
    "accountId": "<my account id string>"
  }
}
```

## Distribution

- The CLI is a Bun script.
- `package.json` declares the `cdx` binary.
- The binary can be installed globally via `bun link`.
