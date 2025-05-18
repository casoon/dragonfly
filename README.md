# @casoon/ui-lib

A modular, lightweight CSS framework and design system for modern web projects. Optimized for Astro JS, LightningCSS, and Container Queries with @layer-based architecture and comprehensive accessibility.

## New in Version 0.5.0

- **Optimized Animation CSS**: Unified naming scheme (`slide-in-*` instead of `slide-from-*`), reduced redundancy, and improved custom properties
- **Enhanced Accessibility in Animations**: Implementation of `.motion-safe` and `.motion-reduce` utilities for optimal `prefers-reduced-motion` support
- **Experimental Feature**: Support for `animation-composition` to combine multiple animations (experimental)
- **Dialog Animations**: Special animations for modal windows and `<dialog>` elements with `.dialog-enter`/`.dialog-exit`
- **Animated Focus Indicators**: Pulsing focus rings for better accessibility with `.focus-ring-animated`
- **Staggered Animations**: Sequential animations for lists and groups with automatically delayed animations
- **Complete Dark Mode Integration**: Thorough implementation with `color-scheme: light dark` and `light-dark()` CSS function
- **Comprehensive RTL Support**: Enhanced bidirectional layouts with `[dir="rtl"]` selectors for all components
- **Modern CSS Validation**: Implementation of `:has()` selector validation with visual indicators
- **Improved Form Layouts**: New classes `.form-stacked`, `.form-layout-inline`, and `.form-inline-controls`

## New in Version 0.4.10

- **Revised Form System**: Comprehensive RTL support, improved Dark Mode support with `light-dark()`, and innovative validation with `:has()` selectors
- **Unified Form Nomenclature**: Consistent class names with `form-*` prefix and better organization through specialized classes like `form-layout-inline` and `form-inline-controls`
- **More Robust Light/Dark Mode Support**: Implementation of `color-scheme: light dark` and fallback mechanisms for optimal browser compatibility
- **Enhanced Accessibility**: Comprehensive keyboard navigation and optimized screen reader support

## New in Version 0.3.14

- **Optimized CSS Layer Structure**: Improved hierarchy and more precise documentation of all layers
- **Extended Flex and Grid Utilities**: More comprehensive layout tools for complex UI designs
- **Improved Container Query Integration**: Seamless adaptation of all components via the container query system
- **Consistent Logical Properties**: Better support for bidirectional layouts (RTL/LTR)
- **Strict Lint Rules**: Ensuring consistent code quality and optimal maintainability

## New in Version 0.3.4

- **Extended Container Queries**: Improved implementation with new utility classes and responsive components
- **New Layout Components**: `grid-responsive` and `flex-responsive` for intelligent container-based layouts
- **Container Query Utilities**: New classes like `container-xs:grid-cols-2` for component-based responsive designs
- **Better Performance**: Optimized container query selectors and `contain-intrinsic-size` for more stable layouts
- **Improved Documentation**: Detailed examples for container query components

## Introduction

CASOON UI Lib is a modern, lightweight CSS framework based on advanced web technologies such as CSS Layers, Custom Properties, Container Queries, and Logical Properties. It offers a thoughtful set of utility classes and design tokens that enable a consistent and customizable design system for professional web projects.

## Installation

```bash
# Via npm
npm install @casoon/ui-lib

# Via yarn
yarn add @casoon/ui-lib

# Via pnpm
pnpm add @casoon/ui-lib
```

## Usage

### Basic Usage

```html
<link rel="stylesheet" href="path/to/@casoon/ui-lib/core.css">
```

### With Bundlers (Webpack, Vite, etc.)

```js
// In your JavaScript file
import '@casoon/ui-lib/core.css';
```

### With Astro

```astro
---
// In your Astro component
import '@casoon/ui-lib/core.css';
---

<html>
  <!-- Content -->
</html>
```

## Container Query System

The library uses an advanced container query system for precise component-based responsiveness:

```html
<!-- Set container context -->
<div class="container-query">
  <!-- Contents here -->
  <div class="layout-flex sm:flex-row md:gap-6 lg:flex-nowrap">
    <div class="sm:flex-basis-1-3">Sidebar</div>
    <div class="sm:flex-basis-2-3">Main content</div>
  </div>
</div>
```

```css
/* Container definitions */
.container-query {
  container-type: inline-size;
  container-name: layout;
}

/* Responsive adjustments based on container size */
@container layout (min-width: 30rem) {
  .sm\:flex-row { flex-direction: row; }
  .sm\:flex-basis-1-3 { flex-basis: 33.3333%; }
  .sm\:flex-basis-2-3 { flex-basis: 66.6667%; }
}

@container layout (min-width: 48rem) {
  .md\:gap-6 { gap: var(--space-6); }
}

@container layout (min-width: 62rem) {
  .lg\:flex-nowrap { flex-wrap: nowrap; }
}
```

This enables more flexible and precise adaptation of components based on their container size rather than viewport size.

## CSS Layer System

The library uses a precisely configured hierarchy of CSS layers to control specificity, avoiding conflicts and improving maintainability. For more information, see the [Layer System Documentation](LAYER-SYSTEM.md).

### Layer Hierarchy

```css
@layer reset,                /* Basic browser reset */
       tokens,               /* Design tokens and variables */
       custom-properties,    /* Registered CSS properties */
       core,                 /* Core functionalities */
       logical-properties,   /* Bidirectional layouts (RTL/LTR) */
       colors,               /* Color system */
       color-mix,            /* Color mixtures and variants */
       layout,               /* Layout basics */
       layout-queries,       /* Responsive adjustments */
       typography,           /* Typography system */
       utilities,            /* Atomic utility classes */
       smooth-scroll,        /* Scroll behavior */
       accessibility,        /* Accessibility */
       icons,                /* Icon system */
       components,           /* UI components */
       animations,           /* Motion system */
       effects,              /* Visual effects */
       themes;               /* Theming system */
```

## Testing with Lightning CSS

The library contains comprehensive tests for compatibility with Lightning CSS:

```bash
# Run Lightning CSS tests
npm run test:lightningcss
```

## Creating Custom Components

You can include your own components in the `components` layer:

```css
/* Your component file */
@import url('path/to/@casoon/ui-lib/core.css');

@layer components {
  .my-component {
    /* Component styles using design tokens */
    padding: var(--space-4);
    color: var(--color-primary);
    border-radius: var(--radius-md);
  }
}
```

## Files and Modules

### CSS Files in the Main Directory

The main files in the root directory control the entire library:

- `core.css`: Central file with all layer imports
- `base.css`: Base imports and layer structure
- `layout.css`: Layout components and Grid/Flexbox utilities
- `layout.queries.css`: Container query-based responsive adjustments
- `typography.css`: Typography system and text formatting
- `animations.css`: Motion and transition system
- `effects.css`: Visual effects and interactions
- `components.css`: Import of all UI components
- `themes.css`: Theming system and color schemes
- `icons.css`: Icon system and integration

### Subdirectories

- `base/`: Basic CSS layers
- `components/`: UI components as CSS modules
  - See [Component Documentation](components/README.md) for details on all available components
- `effects/`: Special effects and interactions
- `themes/`: Theme variants and color schemes
- `icons/`: Icon definitions

## License

MIT

## Contributing

Contributions are welcome! Please read the [Contribution Guidelines](CONTRIBUTING.md) for details.

## About the Project

The Casoon UI Library is an advanced design system that serves as a solid foundation for modern web projects. It offers:

- A consistent foundation with a flexible design token system
- Reusable, accessible UI components
- Optimized integration with modern technologies like Astro JS and LightningCSS
- Full support for SSR, CSS streaming, and Container Queries
- Precise control through CSS layer architecture

> **Note**: This design system is intentionally slim and modular to provide maximum flexibility and performance. It focuses on quality, maintainability, and extensibility rather than the quantity of components.

## Status

🟡 **Beta Phase**: 
- Stable core functionality
- Continuous improvements
- API largely stabilized
- Suitable for production use in controlled environments
- Feedback and contributions very welcome

## Directory Structure

```
@casoon/ui-lib/
├── core.css              # Main CSS file with layer imports
├── base.css              # Base imports and layer structure
├── layout.css            # Layout components and utilities
├── layout.queries.css    # Container query responsiveness
├── typography.css        # Typography system
├── animations.css        # Animation and motion system
├── effects.css           # Visual effects
├── components.css        # Component imports
├── themes.css            # Theming system
├── icons.css             # Icon system
├── base/                 # Basic CSS layers
├── components/           # UI components as CSS modules
├── effects/              # Special effects and interactions
├── themes/               # Theme variants and color schemes
└── icons/                # Icon definitions
```

## New Features in Version 2.0

### Fluid Interpolation with interpolate-size

The new version supports `interpolate-size: allow-keywords`, a modern CSS feature that allows fluid transitions between size values (including keywords).

```css
/* Global setting in base/tokens.css */
:root {
  interpolate-size: allow-keywords;
}
```

#### Benefits:

- Smooth transitions between size values in responsive design
- Support for CSS keywords (small, medium, large)
- Better visual continuity at container and viewport size changes

### Fluid Typography

The framework now offers a comprehensive set of fluid typography elements:

```html
<!-- Fluid scaling headings -->
<h1 class="fluid-heading xxl">Large Heading</h1>
<h2 class="fluid-heading xl">Medium Heading</h2>

<!-- Paragraph with optimal readability and fluidity -->
<p class="fluid-paragraph">Text with optimal readability and fluid size adjustment.</p>

<!-- Blockquote with fluid scaling -->
<blockquote class="fluid-quote">An automatically scaled quote</blockquote>

<!-- Text classes working with interpolate-size:allow-keywords -->
<p class="size-keyword-text larger">This text uses interpolation between CSS keywords</p>
```

### Adaptive Components

Components can now scale with fluid transitions:

```html
<!-- Fluid scaling card -->
<div class="card fluid">
  <h3>Adaptive Card</h3>
  <p>Scales fluidly based on container size.</p>
</div>

<!-- Fluid scaling button -->
<button class="button fluid">Adaptive Button</button>
```

## Architecture

The framework is organized into logical layers:

- `base/`: Basic Design Tokens and Resets
- `typography.css`: Typography system including fluid text elements
- `layout/`: Layout system with Container Queries
- `components/`: Reusable UI Components
- `utilities/`: Helper functions and Utility Classes
- `effects/`: Animations, Transitions, and Visual Effects

## Browser Compatibility

The fluid interpolation with `interpolate-size: allow-keywords` is supported in:
- Chrome/Edge from Version 120
- Safari from Version 17
- Firefox from Version 121 (with flag)

For older browsers, fallback values are used.