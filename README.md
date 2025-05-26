# @casoon/ui-lib

A modular, lightweight CSS framework and design system for modern web projects. While it is especially optimized for use with Astro JS, it is fully framework-agnostic and can be used in any web project. The library is developed by an author who primarily uses Astro JS, but it is not limited to that ecosystem. It is also optimized for LightningCSS and Container Queries, featuring a @layer-based architecture and comprehensive accessibility.

## Changelog (Excerpt)

- **0.60**: Comprehensive theme system with dark/light mode support, improved accessibility components for screen readers and keyboard users, enhanced color contrast system, and new utility classes for width and height
- **0.5.0**: Optimized animation system (new naming scheme, less redundancy), `.motion-safe`/`.motion-reduce` for `prefers-reduced-motion`, experimental `animation-composition`, dialog and focus animations, staggered animations, full dark mode and RTL support, modern CSS validation, new form layouts
- **0.4.10**: Revised form system, consistent form nomenclature, more robust light/dark mode support, improved accessibility
- **0.3.x**: Optimized layer structure, extended flex/grid utilities, container query integration, consistent logical properties, stricter lint rules
- **2.0**: Fluid interpolation with `interpolate-size: allow-keywords`, comprehensive fluid typography, adaptive components

## Installation

```bash
npm install @casoon/ui-lib
# or
yarn add @casoon/ui-lib
# or
pnpm add @casoon/ui-lib
```

## Usage

### Standard Usage (Modular Approach with Lightning CSS)

This option is ideal for developers using Lightning CSS who need:
- Maximum control over CSS layers
- Selective component imports
- Custom optimization process
- Direct work with the layer system

**Basic:**
```html
<link rel="stylesheet" href="path/to/@casoon/ui-lib/index.css">
```
**With Bundler:**
```js
import '@casoon/ui-lib/index.css';
```
**With Astro:**
```astro
import '@casoon/ui-lib/index.css';
```

### Bundled CSS Alternative

This option provides a pre-bundled and optimized version for:
- Simple integration without Lightning CSS configuration
- Quick usage via CDN (unpkg.com)
- Projects where loading time is more important than flexibility

**Direct HTML:**
```html
<link rel="stylesheet" href="path/to/@casoon/ui-lib/dist/index.min.css">
```

**With Bundler:**
```js
import '@casoon/ui-lib/dist/index.min.css';
```

**With Astro:**
```astro
import '@casoon/ui-lib/dist/index.min.css';
```

**Via unpkg.com CDN:**
```html
<link rel="stylesheet" href="https://unpkg.com/@casoon/ui-lib/dist/index.min.css">
```

**Note about the unpkg.com version:**
The minified version contains basic functionality but may not include all effects and components. For specific components or effects, these can be loaded selectively:

```html
<!-- Base CSS -->
<link rel="stylesheet" href="https://unpkg.com/@casoon/ui-lib/dist/index.min.css">
<!-- Additional components as needed -->
<link rel="stylesheet" href="https://unpkg.com/@casoon/ui-lib/effects/visual/shadows.css">
<link rel="stylesheet" href="https://unpkg.com/@casoon/ui-lib/ui/components/card.css">
```

## Features & Architecture

- **Modern CSS technologies:** CSS Layers, Custom Properties, Container Queries, Logical Properties
- **Design tokens:** Consistent, customizable design foundation
- **Utility classes:** Extensive utilities for layout, typography, animation, effects
- **Components:** Reusable UI components
- **Accessibility:** Focus on accessibility, keyboard navigation, screen reader support
- **Dark mode & RTL:** Full support for color modes and bidirectional layouts
- **Animation system:** Optimized, accessible animations incl. stagger, dialog, focus, experimental composition
- **Fluid interpolation:** `interpolate-size: allow-keywords` for smooth transitions and typography
- **Container query system:** Precise, component-based responsiveness
- **Container layout system:** Comprehensive container components for various layout needs

## CSS Layer System

### 1. Structured Layers
- Implementation of a clearly defined layer system to control CSS specificity
- Distinct separation and documentation of layers like reset, tokens, custom-properties, utilities, animations, themes, and components
- Centralized definitions: All layer definitions are managed in a central file (layers.css)

### 2. Design Tokens & Custom Properties
- Uniform design tokens: Definition of consistent design tokens for colors, spacing, typography, etc.
- Use of CSS Custom Properties for easy customization and maintenance of the design

### 3. Component Architecture
- Modular components: Development of over 35 reusable UI components including buttons, cards, inputs, modals, etc.
- Framework-agnostic: Components are independent of specific JavaScript frameworks and integrate easily into different projects
- Responsive design: All components are fully responsive and function across various screen sizes

### 4. Effects & Animations
- Visual effects: Implementation of effects like neon, glassmorphism, shadows, and 3D transformations
- Interactive states: Definition of states such as hover, focus, active, success, error, loading, etc.

### 5. Theming & Customization
- Customizable themes: Enable easy creation and integration of different themes by adjusting design tokens
- Dark/Light Mode: Support for light and dark design variants

### 6. Integration with Build Tools
- Compatibility: Ensuring compatibility with modern build tools like Webpack, Vite, and Astro
- Easy installation: Providing clear instructions for installing and integrating the library into projects

### 7. Documentation & Examples
- Comprehensive documentation: Providing detailed documentation with examples for each component and function
- Example projects: Development of example projects to demonstrate the use of the library in real scenarios

### 8. Testing & Quality Assurance
- Automated tests: Implementation of tests to ensure the functionality and stability of components
- Stylelint configuration: Use of Stylelint to maintain CSS coding standards

## Layer & File Structure

```
@casoon/ui-lib/
├── index.css             # Main file with layer imports
├── dist/                 # Contains bundled versions
│   ├── index.min.css     # Minified bundle with all imports resolved
│   ├── index.min.css.map # Source map for debugging
│   └── index.bundled.css # Non-minified bundle for development
├── base/                 # Base styles and reset
│   ├── base.css          # Base imports
│   ├── reset.css         # CSS reset
│   ├── tokens.css        # Design tokens
│   ├── layers.css        # Layer definitions
│   └── custom-properties.css # CSS variables
├── layout/               # Layout system
│   ├── layout.css        # Layout components
│   ├── layout.queries.css # Container queries
│   └── containers/       # Container system
│       ├── index.css     # Container imports
│       ├── base.css      # Basic container components
│       ├── position.css  # Positioned containers with z-index
│       ├── responsive-containers.css # Responsive containers
│       ├── special.css   # Special containers (scrollable, masonry)
│       ├── asymmetric.css # Split layouts and aspect ratio containers
│       ├── visual.css    # Visual styling containers
│       ├── functional.css # Functional UI containers
│       ├── performance.css # Performance-optimized containers
│       ├── a11y.css      # Accessibility-optimized containers
│       └── advanced-queries.css # Advanced container query patterns
├── typography/           # Typography system
│   └── typography.css    # Typography styles
├── utility/              # Utility classes
│   ├── utilities.css     # Main utilities
│   ├── colors.css        # Color utilities
│   ├── spacing.css       # Spacing utilities
│   └── accessibility.css # A11y utilities
├── animation/            # Animation system
│   └── animations.css    # Animation definitions
├── effect/               # Effects system
│   └── effects.css       # Main effects file
├── theme/                # Theming system
│   └── themes.css        # Theme definitions
├── icon/                 # Icon system
│   └── icons.css         # Icon definitions
├── ui/                   # UI components (organized by type)
│   ├── ui.css            # Main UI components file
│   ├── elements/         # Basic UI elements (atoms)
│   │   ├── button.css    # Button element
│   │   ├── input.css     # Input element
│   │   └── ...           # Other elements
│   ├── components/       # Complex UI components (molecules/organisms)
│   │   ├── card.css      # Card component
│   │   ├── modal.css     # Modal component
│   │   └── ...           # Other components
│   ├── layout/           # Layout-specific components
│   │   ├── header.css    # Header component
│   │   ├── footer.css    # Footer component
│   │   └── ...           # Other layout components
│   └── patterns/         # UI patterns
│       ├── blog.css      # Blog pattern
│       └── ...           # Other patterns
├── effects/              # Effects & interactions (organized by type)
│   ├── motion/           # Motion-based effects
│   │   ├── animations.css # Animation effects
│   │   └── ...           # Other motion effects
│   ├── visual/           # Visual enhancements & styling
│   │   ├── shadows.css   # Shadow effects
│   │   └── ...           # Other visual effects
│   ├── interaction/      # State-based or user-interactive effects
│   │   ├── hover.css     # Hover effects
│   │   └── ...           # Other interaction effects
│   ├── layout-effects/   # Masking, layering, and geometric manipulation
│   │   ├── clip-path.css # Clipping effects
│   │   └── ...           # Other layout effects
│   ├── themes/           # Design techniques and style paradigms
│   │   ├── neumorphism.css # Neumorphism style
│   │   └── ...           # Other theme effects
│   └── particles/        # Particle-based visual effects
│       └── particles.css # Particle effects
└── base/                 # Base layer files
    └── accessibility/    # Accessibility helpers
        └── a11y-helper.js # A11y JavaScript helpers
```

**Layer hierarchy (excerpt):**
```css
@layer reset, tokens, custom-properties, core, logical-properties, colors, color-mix, layout, layout-queries, typography, utilities, smooth-scroll, accessibility, icons, components, animations, effects, themes;
```
See the [Layer System Documentation](LAYER-SYSTEM.md) for more details.

## Container Query Example

```html
<div class="container-query">
  <div class="layout-flex sm:flex-row md:gap-6 lg:flex-nowrap">
    <div class="sm:flex-basis-1-3">Sidebar</div>
    <div class="sm:flex-basis-2-3">Main content</div>
  </div>
</div>
```

## Container Layout System

The library provides a comprehensive container layout system with various specialized container types:

### Basic Containers
```html
<!-- Standard container with centered content and responsive padding -->
<div class="container">Content</div>

<!-- Container with specific size constraint -->
<div class="container container-md">Medium width container</div>

<!-- Container with custom padding -->
<div class="container container-padding-lg">Container with large padding</div>
```

### Positioned Containers
```html
<!-- Sticky containers -->
<div class="container-sticky-top">Sticks to the top</div>

<!-- Fixed containers -->
<div class="container-fixed-bottom">Fixed to the bottom</div>

<!-- Absolute containers -->
<div class="container-absolute-center">Centered absolutely</div>
```

### Special Containers
```html
<!-- Scrollable container -->
<div class="container-scrollable-md">
  Content with controlled height and scrolling
</div>

<!-- Masonry layout -->
<div class="container-masonry-3">
  <div class="masonry-item">Item 1</div>
  <div class="masonry-item">Item 2</div>
</div>
```

### Advanced Container Features
- **Visual containers:** Apply shadows, borders, and visual styling
- **Functional containers:** Create toasts, modals, dropdowns, and tooltips
- **Performance containers:** Optimize rendering with content-visibility
- **Accessibility containers:** Enhance keyboard navigation and screen reader support
- **Container queries:** Component-specific responsive behavior

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

## Compatibility

The library employs progressive enhancement and fallback strategies to ensure wide browser compatibility:

- **Modern Browsers**: Full support for Chrome/Edge 90+, Firefox 90+, Safari 15+
- **Older Browsers**: Core functionality works in older browsers through fallbacks
- **Feature Detection**: Uses `@supports` rules instead of browser detection
- **CSS Variables**: Fallbacks provided for browsers without CSS Custom Properties
- **Container Queries**: Media Query fallbacks for older browsers
- **Color Functions**: RGB/HSL fallbacks for browsers without OKLCH support
- **interpolate-size**: Graceful degradation for browsers without fluid sizing

For detailed compatibility information, browser support charts, and implemented fallback strategies, see [Browser Compatibility](compatibility.md).

## Testing

### CSS Processing Tests
```bash
npm run test:lightningcss
```

### Browser Compatibility Tests
The library includes a comprehensive browser compatibility testing suite that covers:

- Viewport Units (vw, vh, svw, svh, lvw, lvh, dvw, dvh)
- Theme System with Dark/Light Mode
- Accessibility Features
- Dimension Utilities

To run the tests:
```bash
# Start a local server
npx serve

# Access the test suite
# http://localhost:3000/tests/browser-compatibility/
```

The test suite provides automated feature detection and documentation tools to help identify and address compatibility issues across different browsers and devices.

## Further Documentation

For a comprehensive guide to all features, best practices, component usage, theming, utilities, and advanced techniques, please refer to the [Style Guide](STYLE-GUIDE.md).

For a detailed explanation of the CSS layer architecture, see the [Layer System Guide](LAYER-SYSTEM.md).

## License
MIT

## Contributing
Contributions welcome! See [Contribution Guidelines](CONTRIBUTING.md).

## Status
🟡 **Beta**: Stable core functionality, ongoing improvements, API largely stable, suitable for production use in controlled environments.