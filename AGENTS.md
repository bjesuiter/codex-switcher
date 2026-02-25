# Agent Instructions

## Reference Repos

- `docs/codexbar/` — Local clone of [steipete/CodexBar](https://github.com/steipete/CodexBar) for reference on OpenAI Plus/Pro usage tracking via the undocumented usage API.

## Fish completion script maintenance

- Generated fish completion file path: `~/.config/fish/completions/cdx.fish`
- Whenever CLI commands or arguments/options change, regenerate and update this file yourself:
  - From repo root: `cdx complete fish > ~/.config/fish/completions/cdx.fish`

## Releasing a new version

1. Increase version in `package.json`
2. Add changelog entries for the version in `CHANGELOG.md`, based on the changes of current git HEAD compared to the latest release tag.
3. Copy the new release notes into the `README.md` "Latest Changes" section and delete the changes of the previous version
4. Commit the changes
5. Create a git tag with the version number (no prefix): `git tag X.Y.Z`
6. Push both the commit and the tag: `git push && git push --tags`
7. Watch the GitHub Actions release workflow triggered by the tag push and confirm success (use `gh`, e.g. `gh run list --workflow "Publish to npm" --limit 5` and `gh run watch <run-id> --exit-status`)
