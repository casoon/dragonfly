# Publishing Process for @casoon/ui-lib

This documentation describes the process for preparing and publishing new versions of the UI library on npm.

## Preparation

Before publishing a new version, the following steps should be completed:

1. **Ensure all tests pass**:
   ```bash
   npm test
   npm run test:lightningcss
   ```

2. **Validate the npm package**:
   ```bash
   npm run validate:package
   ```
   This command checks if all files specified in `package.json` are present and if the package structure is correct.

3. **Update documentation**:
   ```bash
   npm run docs:all
   ```
   Updates all automatically generated documentation files and version notes.

## Versioning

The library follows the [Semantic Versioning](https://semver.org/) specification:

- **MAJOR** (x.0.0): Incompatible API changes
- **MINOR** (0.x.0): Functionality added in a backward-compatible manner
- **PATCH** (0.0.x): Backward-compatible bug fixes

To increment the version, use:

```bash
# Increases the patch version (default)
npm run bump-version

# Increases the minor version
npm run bump-version minor

# Increases the major version
npm run bump-version major
```

This script updates the version in `package.json`.

**Note**: After versioning, also update the changelog in README.md and CHANGELOG.md.

## Build for Publication

To create a package for publication:

```bash
npm run build:release
```

This command performs the following steps:
1. Running linting checks
2. Running CSS processing tests
3. Preparing the package and minifying CSS files

## Publication

After preparing the package, it can be published on npm:

### Test Publication

To test the publication without actually publishing the package:

```bash
npm publish --dry-run
```

This shows which files would be published and how large the package would be.

### Publishing on npm

```bash
# For a public publication
npm publish

# For a specific tag version (e.g., beta)
npm publish --tag beta
```

The `publishConfig` setting in package.json ensures that the package is publicly accessible.

## After Publication

After successful publication:

1. **Create GitHub release**:
   - Create a tag for the version (`git tag v0.6.1`)
   - Push the tag to GitHub (`git push origin v0.6.1`)
   - Create a release on GitHub with the release notes

2. **Update documentation**:
   - Ensure the documentation website reflects the latest version
   - Update examples and demos with the latest features

## Troubleshooting

### Publication Issues

If problems occur during publication:

1. **Check your npm login**:
   ```bash
   npm whoami
   ```
   Make sure you are logged in as the correct user.

2. **Check permissions**:
   Make sure you have publishing permissions for the @casoon/ui-lib package.

3. **Check version**:
   Make sure the version in package.json does not already exist on npm.

### Resolving Publication Problems

If a faulty version was published, it can be withdrawn within 72 hours:

```bash
npm unpublish @casoon/ui-lib@0.6.1
```

**Note**: Withdrawing versions should be avoided. It is better to publish a new corrected version. 