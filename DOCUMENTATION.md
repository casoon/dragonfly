# @casoon/ui-lib - Documentation

This documentation provides a comprehensive overview of @casoon/ui-lib, its requirements, architecture, and compatibility.

## Table of Contents
1. [Goals and Requirements](#goals-and-requirements)
2. [Architecture](#architecture)
3. [Compatibility](#compatibility)
4. [Browser Compatibility Tests](#browser-compatibility-tests)
5. [Fonts](#fonts)
6. [Custom Components](#custom-components)
7. [Further Documentation](#further-documentation)

## Goals and Requirements

### 1. Design System – A Consistent, Scalable Foundation

**Goal:** Build a modular, consistent design system that can be reused across different projects.

**Requirements:**
- Systematic naming and structural organization for all tokens and components
- A token-based design foundation that uses CSS Custom Properties
- Theming support and extensibility through a layer-based architecture (e.g., tokens, utilities, components)

### 2. Design Principles – Clear Visual and Functional Rules

**Goal:** Ensure that all UI components follow shared principles to maintain coherence in appearance and behavior.

**Requirements:**
- Uniform rules for layout, spacing, typography, and sizing
- Components should be understandable and usable even without relying on external design tools
- Clear separation of presentation and logic in structure and styling

### 3. Functional Patterns – Reusable, Adaptive Component Blueprints

**Goal:** Provide abstract patterns for common interactions and functional behaviors.

**Requirements:**
- Modular component patterns like Dialog, Accordion, Dropdown, designed with minimal JavaScript
- Components should be easily configurable and adaptable to various use cases
- Accessibility (a11y) must be considered a first-class concern

### 4. Perceptual Patterns – Intuitive Feedback and Visual Communication

**Goal:** Implement perceptual cues that improve user understanding and feedback.

**Requirements:**
- Definition and support for component states like hover, focus, disabled, error, loading, success
- Utility classes or animations to support interactive transitions and effects
- All components should respond properly across screen sizes and devices (responsive design)

### 5. Shared Language – Unified Naming and API Convention

**Goal:** Promote a common language between design and development.

**Requirements:**
- Token names, components, and utilities should follow a consistent and documented naming convention
- Clear CSS class API (e.g., btn-primary, gap-md, card-lg) that is intuitive and predictable
- Terminology and structure should reflect a systemized mental model shared across the project

## Architecture

The library uses a clearly defined CSS layer architecture to avoid specificity conflicts and improve maintainability.

### Layer Hierarchy

```css
@layer reset, tokens, custom-properties, core, logical-properties, colors, color-mix, layout, layout-queries, typography, utilities, smooth-scroll, accessibility, icons, components, animations, effects, themes;
```

### Layer Structure
1. **reset**: Basic CSS resets for uniform browser rendering
2. **tokens**: Design tokens for colors, spacing, typography, etc.
3. **custom-properties**: CSS variable definitions
4. **core**: Core styles for basic elements
5. **layout**: Layout system with Flexbox and Grid
6. **typography**: Typography system
7. **utilities**: Utility classes
8. **components**: UI components
9. **animations**: Animation system
10. **effects**: Visual effects
11. **themes**: Theming system

A detailed description of the layer structure can be found in [LAYER-SYSTEM.md](LAYER-SYSTEM.md).

## Compatibility

The library uses progressive enhancement and fallback strategies to ensure broad browser compatibility:

- **Modern Browsers**: Full support for Chrome/Edge 90+, Firefox 90+, Safari 15+
- **Older Browsers**: Core functionality works in older browsers through fallbacks
- **Feature Detection**: Uses `@supports` rules instead of browser detection
- **CSS Variables**: Fallbacks for browsers without CSS Custom Properties
- **Container Queries**: Media Query fallbacks for older browsers
- **Color Functions**: RGB/HSL fallbacks for browsers without OKLCH support
- **Interpolate-size**: Graceful degradation for browsers without fluid sizing

### Known Compatibility Issues

#### Viewport Units (svh, svw)

**Affected Browsers:**
- Safari < 15.4
- Chrome < 108
- Firefox < 101

**Issue:** Small Viewport Units are not supported.

**Solution:** The library implements a fallback using regular viewport units (vh, vw) with CSS feature detection:

```css
@supports not (height: 1svh) {
  .use-svh {
    height: 100vh; /* Fallback */
  }
}

@supports (height: 1svh) {
  .use-svh {
    height: 100svh;
  }
}
```

#### Container Queries

**Affected Browsers:**
- Safari < 16
- Chrome < 105
- Firefox < 110

**Issue:** Container Queries are not supported.

**Solution:** The library uses Media Queries as fallbacks and provides a `no-container-queries` class for targeted styling.

## Browser Compatibility Tests

The library includes a browser compatibility test suite that covers:

- Viewport Units (vw, vh, svw, svh, lvw, lvh, dvw, dvh)
- Theme System with Dark/Light Mode
- Accessibility Features (focus rings, skip links, screen reader compatibility)
- CSS Feature Support Detection (container queries, layers, custom properties)
- Media Query Support (prefers-color-scheme, prefers-reduced-motion)

The tests are designed for compatibility with the following browsers:
- Modern browsers (Chrome, Firefox, Safari, Edge - latest versions)
- Older browsers (Chrome, Firefox, Safari, Edge - version 90+)

To run the tests:
```bash
# Start a local server
npx serve

# Access the test suite
# http://localhost:3000/tests/browser-compatibility/
```

The test files include:
- `viewport-units-test.html` - Tests for viewport unit implementation
- `theme-system-test.html` - Tests for theme switching and persistence
- `accessibility-test.html` - Tests for accessibility features

The test suite provides browser information and documents compatibility issues in `compatibility-issues.md`, helping developers identify and address browser-specific challenges when using the library.

## Fonts

The library includes a collection of optimized Google Fonts in WOFF2 format for better performance and privacy. Using self-hosted fonts eliminates external requests to Google's servers and reduces load times.

### Directory Structure

The fonts are organized in an improved structure:

```
/fonts/
├── fonts.css                 # Main CSS file with all variables and utility classes
├── README.md                 # Documentation
│
├── roboto/                   # Each font has its own directory
│   ├── 400.css              # CSS for regular weight
│   ├── 700.css              # CSS for bold weight
│   ├── index.css            # Imports all weights
│   ├── roboto-regular.woff2 # WOFF2 file for regular weight
│   └── roboto-bold.woff2    # WOFF2 file for bold weight
```

### Using the Fonts

You can include the fonts in different ways:

```css
/* Only the CSS variables and utility classes, without the fonts themselves */
@import '@casoon/ui-lib/fonts/fonts.css';

/* A specific font with all weights */
@import '@casoon/ui-lib/fonts/roboto/index.css';

/* Only a specific weight of a font */
@import '@casoon/ui-lib/fonts/roboto/400.css';
```

For Astro projects, you can simply import the CSS files as shown above. Vite (used by Astro) or Webpack will automatically analyze the CSS and include the font files in your project's build without requiring any plugins or manual copying.

## Custom Components

You can add your own components in the `components` layer:
```css
@layer components {
  .my-component {
    padding: var(--space-4);
    color: var(--color-primary);
    border-radius: var(--radius-md);
  }
}
```

## Further Documentation

For a comprehensive guide to all features, best practices, component usage, theming, utilities, and advanced techniques, please refer to the [Style Guide](STYLE-GUIDE.md).

For a detailed explanation of the CSS layer architecture, see the [Layer System Guide](LAYER-SYSTEM.md). 