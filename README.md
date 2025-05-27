# @casoon/ui-lib

A modular, lightweight CSS framework and design system for modern web projects. While it is especially optimized for use with Astro JS, it is fully framework-agnostic and can be used in any web project. The library is developed by an author who primarily uses Astro JS, but it is not limited to that ecosystem. It is also optimized for LightningCSS and Container Queries, featuring a @layer-based architecture and comprehensive accessibility.

## Features

- **Comprehensive theme system** with dark/light mode support
- **Improved accessibility components** for screen readers and keyboard users
- **Enhanced color contrast system**
- **New utility classes** for width and height
- **Optimized animation system** with new naming scheme and reduced redundancy
- **Responsive design** with `.motion-safe`/`.motion-reduce` for `prefers-reduced-motion`
- **Modern effects** including dialog and focus animations, staggered animations
- **Full support** for dark mode and RTL layouts
- **Validation** with modern CSS
- **Improved forms** with revised form system and consistent nomenclature
- **Optimized layer structure** with extended flex/grid utilities
- **Container query integration** with consistent logical properties
- **Fluid typography** using fluid interpolation

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
- Comprehensive documentation: Detailed documentation with examples for each component and function is available at https://casoon.github.io/ui-docs/
- Interactive examples: The documentation site includes interactive examples demonstrating how to use various library features in real scenarios

### 8. Testing & Quality Assurance
- Lightning CSS testing: Comprehensive testing with Lightning CSS parser to ensure compatibility and proper CSS processing
- Automated linting: Implementation of Stylelint with custom rules to maintain CSS coding standards and best practices
- Accessibility validation: Automated tests for WCAG compliance and accessibility features
- Browser compatibility testing: Testing across major browsers to ensure consistent rendering and functionality

## Layer & File Structure

```
@casoon/ui-lib/
├── index.css             # Main file with layer imports
├── dist/                 # Contains bundled versions
│   ├── index.min.css     # Minified bundle with all imports resolved
│   ├── index.min.css.map # Source map for debugging
│   ├── index.bundled.css # Non-minified bundle for development
│   ├── components.min.css # Minified bundle of UI components
│   ├── effects.min.css    # Minified bundle of effects
│   ├── icons.min.css      # Minified bundle of icons
│   └── themes.min.css     # Minified bundle of themes
├── core/                 # Core styles and reset
│   ├── reset.css         # CSS reset
│   ├── colors.css        # Base colors
│   ├── color-mix.css     # Color mixing utilities
│   ├── logical-properties.css # Logical properties
│   ├── smooth-scroll.css # Smooth scrolling
│   └── accessibility/    # Accessibility helpers
│       ├── aria.css      # ARIA utilities
│       ├── contrast.css  # Color contrast
│       ├── keyboard.css  # Keyboard navigation
│       └── screenreader.css # Screen reader utilities
├── layout/               # Layout system
│   ├── index.css         # Layout imports
│   ├── responsive.css    # Responsive breakpoints
│   ├── spacing.css       # Spacing utilities
│   ├── flex-layouts.css  # Flexbox utilities
│   ├── grid-system.css   # Grid utilities
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
│       └── a11y.css      # Accessibility-optimized containers
├── tokens/               # Design tokens
│   ├── index.css         # Token imports
│   ├── colors/           # Color tokens
│   ├── spacing/          # Spacing tokens
│   ├── typography/       # Typography tokens
│   └── effects/          # Effect tokens
├── typography/           # Typography system
│   ├── index.css         # Typography imports
│   ├── typography.css    # Typography styles
│   ├── hierarchy/        # Heading hierarchy
│   ├── baseline/         # Baseline grid
│   └── weights/          # Font weights
├── utilities/            # Utility classes
│   ├── index.css         # Utility imports
│   ├── helpers/          # Helper utilities
│   ├── mixins/           # CSS mixins
│   ├── variables/        # CSS variables
│   └── customize/        # Customization utilities
├── themes/               # Theming system
│   ├── index.css         # Theme imports
│   ├── base/             # Base theme
│   ├── mode/             # Light/dark modes
│   └── variants/         # Theme variants
├── icons/                # Icon system
│   ├── index.css         # Icon imports
│   ├── base.css          # Icon base styles
│   └── [icon-sets]/      # Various icon sets
├── fonts/                # Web fonts
│   ├── fonts.css         # Main CSS file with all variables and utility classes
│   ├── README.md         # Documentation
│   └── [font-name]/      # Directory for each font
│       ├── 400.css       # CSS for regular weight
│       ├── 700.css       # CSS for bold weight
│       ├── index.css     # Imports all weights
│       └── *.woff2       # WOFF2 files
├── ui/                   # UI components
│   ├── index.css         # UI imports
│   ├── elements.css      # Elements collection
│   ├── components.css    # Components collection
│   ├── elements/         # Basic UI elements
│   ├── components/       # Complex UI components
│   ├── layout/           # Layout components
│   └── patterns/         # UI patterns
├── effects/              # Effects & interactions
│   ├── interaction/      # Interaction effects
│   ├── layout-effects/   # Layout effects
│   ├── motion/           # Motion effects
│   ├── particles/        # Particle effects
│   ├── themes/           # Theme effects
│   ├── typography/       # Typography effects
│   └── visual/           # Visual effects
└── js/                   # JavaScript helpers
    ├── theme-switcher.js # Theme switching logic
    └── viewTransitions.js # View transition helpers
```

**Layer hierarchy (excerpt):**
```css
@layer reset, tokens, custom-properties, core, logical-properties, colors, color-mix, layout, layout-queries, typography, utilities, smooth-scroll, accessibility, icons, components, animations, effects, themes;
```
See the [Layer System Documentation](LAYER-SYSTEM.md) for more details.

## Web Fonts

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

For Astro projects, you can simply import the CSS files as shown above. Vite (used by Astro) or Webpack will automatically analyze the CSS and include the font files in your project's build without requiring any plugins or manual copying. For more information, see the [Fonts README](fonts/README.md).

### Included Fonts

The library includes the following Google Fonts:

- **Anton** - Bold display font for large headlines
- **Arimo** - Sans-serif font with good readability
- **Bebas Neue** - Condensed uppercase font
- **Cabin** - Humanist sans-serif with a touch of warmth
- **DM Sans** - Low-contrast geometric sans-serif
- **Dosis** - Rounded sans-serif with even stroke weights
- **Fira Sans** - Versatile, legible sans-serif
- **Inconsolata** - Monospace font for code
- **Inter** - Modern typeface designed for computer screens
- **Josefin Sans** - Elegant geometric sans-serif
- **Lato** - Balanced sans-serif with classical proportions
- **Merriweather** - Serif designed for screen readability
- **Montserrat** - Urban typeface inspired by old posters
- **Mukta** - Multi-script font with support for Devanagari
- **Noto Sans** - Part of Google's font family with broad language support
- **Nunito** - Well-balanced sans-serif with rounded terminals
- **Open Sans** - Neutral and friendly sans-serif
- **Oswald** - Condensed alternative to standards like Impact
- **Playfair Display** - Serif with high-contrast strokes
- **Poppins** - Geometric sans-serif with uniform stroke width
- **PT Sans** - Universal font for wide language support
- **Quicksand** - Display sans-serif with rounded terminals
- **Raleway** - Elegant sans-serif with a single thin weight
- **Roboto** - Default Android font with natural reading rhythm
- **Roboto Condensed** - Space-efficient version of Roboto
- **Source Sans Pro** - Adobe's first open-source font
- **Teko** - Modernist, condensed typeface
- **Titillium Web** - Sans-serif designed by students
- **Ubuntu** - The Ubuntu operating system font
- **Work Sans** - Optimized for on-screen text usage

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

For detailed compatibility information, browser support charts, and implemented fallback strategies, see the [Documentation](DOCUMENTATION.md).

## Testing

### CSS Processing Tests
```bash
npm run test:lightningcss
```

### Browser Compatibility Tests
The library includes a browser compatibility testing suite that covers:

- Viewport Units (vw, vh, svw, svh, lvw, lvh, dvw, dvh)
- Theme System with Dark/Light Mode
- Accessibility Features (focus rings, skip links, screen reader compatibility)
- CSS Feature Support Detection (container queries, layers, custom properties)
- Media Query Support (prefers-color-scheme, prefers-reduced-motion)

The tests are designed to ensure compatibility across:
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

### Container Compatibility Tests
Additional tests for container queries and related layout features are available in the `tests/container-compatibility` directory.

## Documentation

The library comes with comprehensive documentation to help you get started:

- **[DOCUMENTATION.md](DOCUMENTATION.md)** - Umfassende Dokumentation mit Architektur, Zielen und Kompatibilitätsinformationen
- **[STYLE-GUIDE.md](STYLE-GUIDE.md)** - Detaillierter Styleguide für die Verwendung der Bibliothek
- **[LAYER-SYSTEM.md](LAYER-SYSTEM.md)** - Erklärung des CSS-Layer-Systems
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Richtlinien für Beiträge zum Projekt
- **[PUBLISHING.md](PUBLISHING.md)** - Informationen zum Veröffentlichungsprozess
- **[GOOGLE-FONTS-LICENSE.md](GOOGLE-FONTS-LICENSE.md)** - Lizenzinformationen für die verwendeten Google Fonts
- **[ICONS-LICENSE.md](ICONS-LICENSE.md)** - Lizenzinformationen für die verwendeten Icons

## License
MIT

## Contributing
Contributions welcome! See [Contribution Guidelines](CONTRIBUTING.md).