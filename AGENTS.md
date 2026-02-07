# Agent Instructions

## Reference Repos

- `docs/codexbar/` — Local clone of [steipete/CodexBar](https://github.com/steipete/CodexBar) for reference on OpenAI Plus/Pro usage tracking via the undocumented usage API.

## Releasing a new version

1. Increase version in `package.json`
2. Add changelog entry for the version in `CHANGELOG.md`
3. Copy the new release notes into the `README.md` "Latest Changes" section and delete the changes of the previous version
4. Commit the changes
5. Create a git tag with the version number (no prefix): `git tag X.Y.Z`
6. Push both the commit and the tag: `git push && git push --tags`
