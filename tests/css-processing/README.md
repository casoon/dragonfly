# CSS Processing Tests for @casoon/ui-lib

These tests check whether the CSS files of the UI library can be correctly processed with Lightning CSS.

## Setup

1. Install the dependencies:
   ```
   npm run setup
   ```

## Running Tests

To test all CSS files of the library with Lightning CSS:

```
npm run test
```

This test:
- Finds all CSS files in the project (root directory, layers/, themes/, components/, modules/, icons/)
- Processes each file with Lightning CSS
- Saves the output in a corresponding file in the `output/` directory
- Creates a report on successful and failed processing

## Visual Tests in the Browser

To visually check the output:

```
npm run test-browser
```

This command starts a local web server. You can then check the processed CSS files in the browser.

## What is Tested

1. **CSS Syntax**: Checks if the CSS code is syntactically correct and can be processed by Lightning CSS
2. **Modern CSS Features**: Tests the compatibility of modern CSS features such as:
   - Container Queries
   - CSS Nesting
   - CSS Layers (@layer)
   - Logical Properties
   - Custom Properties
   - @property Definitions

3. **Minification**: The files are tested with minification enabled

## Troubleshooting

If tests fail:

1. Check the error messages in the console output
2. Fix syntax problems in the corresponding CSS files
3. Make sure all features used are compatible with Lightning CSS

## Integration into the Development Process

These tests should be performed before each new release:

```bash
# In the main package.json
npm run prerelease
```

This command runs both the Lightning CSS tests and the linter to ensure that all CSS files are correct. 