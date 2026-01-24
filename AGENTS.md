# Agent Instructions

## Releasing a new version

1. Increase version in `package.json`
2. Add changelog entry for the version in `CHANGELOG.md`
3. Commit the changes
4. Create a git tag with the version number (no prefix): `git tag X.Y.Z`
5. Push both the commit and the tag: `git push && git push --tags`
