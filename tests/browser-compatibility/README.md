# Browser Compatibility Tests for @casoon/ui-lib

This directory contains tests and documentation for browser compatibility of the UI library.

## Purpose

Browser compatibility tests are crucial to ensure that the UI library functions as expected across different browsers. This is especially important for newer CSS features and features added in version 0.60.

## Tested Browsers

The library is tested in the following browsers:

- **Modern Browsers**:
  - Chrome (latest version)
  - Firefox (latest version)
  - Safari (latest version)
  - Edge (latest version)

- **Older Browsers**:
  - Chrome (version 90+)
  - Firefox (version 90+)
  - Safari (version 15+)
  - Edge (version 90+)

## Test Focus (v0.61)

For version 0.61, the focus is on the following aspects:

1. **New Viewport Units**: Testing compatibility of sv, lv, and dv units
   - Fallback behavior in browsers without support
   - Correct sizing in various scenarios

2. **Theme System**:
   - Correct switching between Light and Dark Mode
   - Persistence of theme settings
   - System preference detection (prefers-color-scheme)
   - Custom themes

3. **Accessibility Features**:
   - Correct display of focus rings
   - Functionality of skip links
   - Screen reader compatibility
   - Reduced Motion and High Contrast modes

4. **Dimension Utilities**:
   - Correct application of width and height classes
   - Aspect-Ratio support
   - Min/Max values

## Test Methodology

1. **Visual Tests**:
   - Manual verification in each browser
   - Screenshots for documentation and comparison
   - Responsive tests (different screen sizes)

2. **Functional Tests**:
   - Interactive elements (theme switcher, accessibility features)
   - JavaScript integration

3. **Automated Tests**:
   - BrowserStack tests for different environments
   - Lighthouse tests for performance and accessibility

## Test Documents

- `viewport-units-test.html`: Test for new viewport units
- `theme-system-test.html`: Test for the theme system
- `accessibility-test.html`: Test for accessibility features
- `dimensions-test.html`: Test for dimension utilities

## Documentation of Compatibility Issues

Discovered compatibility issues are documented in the `compatibility-issues.md` file with the following information:

- Affected browsers and versions
- Description of the problem
- Implemented fallback solution
- Screenshots/examples
- Recommendations for library users

## Running the Tests

1. Start a local server in the root directory:
   ```bash
   npx serve
   ```

2. Open the test files in the browsers to be tested:
   ```
   http://localhost:3000/tests/browser-compatibility/viewport-units-test.html
   ```

3. Document the results:
   ```bash
   npm run document-compatibility
   ``` 