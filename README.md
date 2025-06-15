# @casoon/dragonfly

Ein modulares, leichtgewichtiges CSS-Framework und Design-System für moderne Web-Projekte. Während es speziell für Astro JS optimiert ist, ist es vollständig framework-agnostisch und kann in jedem Web-Projekt verwendet werden. Die Bibliothek wird von einem Autor entwickelt, der hauptsächlich Astro JS verwendet, ist aber nicht auf dieses Ökosystem beschränkt. Sie ist auch für LightningCSS und Container Queries optimiert und bietet eine @layer-basierte Architektur mit umfassender Barrierefreiheit.

## ✨ Neue Features & Verbesserungen (v0.7.4)

- **🏗️ CSS-Modernisierung abgeschlossen**: Vollständige Migration von BEM-Notation zu modernem CSS Nesting für alle Komponenten
- **✅ 100% lint-freie Codebasis**: Alle 257+ CSS-Dateien passieren Lightning CSS Tests ohne Fehler  
- **🧪 Erweiterte Testing-Suite**: Umfassende Browser-Kompatibilitätstests und automatisierte CSS-Validierung
- **📦 Optimierte Bundle-Größe**: Reduzierte CSS-Redundanz durch moderne Syntax
- **🎯 Verbesserte Entwicklererfahrung**: Konsistente Code-Struktur und bessere Wartbarkeit
- **🔧 Modernisierte Architektur**: Verwendung von CSS Nesting anstelle von BEM-Notation für bessere Lesbarkeit

## Features

### 🚀 Core Features
- **Umfassendes Theme-System** mit Dark/Light-Modus-Unterstützung
- **Verbesserte Barrierefreiheits-Komponenten** für Screenreader und Tastatur-Benutzer
- **Erweiterte Farbkontrast-System**
- **Neue Utility-Klassen** für Breite und Höhe
- **Optimiertes Animations-System** mit neuem Benennungsschema und reduzierter Redundanz
- **Responsive Design** mit `.motion-safe`/`.motion-reduce` für `prefers-reduced-motion`
- **Moderne Effekte** einschließlich Dialog- und Fokus-Animationen, gestaffelte Animationen
- **Vollständige Unterstützung** für Dark Mode und RTL-Layouts
- **Validierung** mit modernem CSS
- **Verbesserte Formulare** mit überarbeitetem Formular-System und konsistenter Nomenklatur
- **Optimierte Layer-Struktur** mit erweiterten Flex/Grid-Utilities
- **Container Query Integration** mit konsistenten logischen Eigenschaften
- **Fluid Typography** mit Fluid-Interpolation
- **CSS Nesting**: Moderne CSS-Syntax anstelle von BEM-Notation für bessere Lesbarkeit und Wartbarkeit

## Installation

```bash
npm install @casoon/dragonfly
# oder
yarn add @casoon/dragonfly
# oder
pnpm add @casoon/dragonfly
```

> **🆕 v0.7.4**: Vollständig modernisierte CSS-Codebasis mit 100% lint-freier Qualitätsgarantie und CSS Nesting anstelle von BEM-Notation.

## Usage

### Standard Usage (Modular Approach with Lightning CSS)

This option is ideal for developers using Lightning CSS who need:
- Maximum control over CSS layers
- Selective component imports
- Custom optimization process
- Direct work with the layer system

**Basic:**
```html
<link rel="stylesheet" href="path/to/@casoon/dragonfly/index.css">
```
**With Bundler:**
```js
import '@casoon/dragonfly/index.css';
```
**With Astro:**
```astro
import '@casoon/dragonfly/index.css';
```

### Bundled CSS Alternative

This option provides a pre-bundled and optimized version for:
- Simple integration without Lightning CSS configuration
- Quick usage via CDN (unpkg.com)
- Projects where loading time is more important than flexibility

**Direct HTML:**
```html
<link rel="stylesheet" href="path/to/@casoon/dragonfly/dist/index.min.css">
```

**With Bundler:**
```js
import '@casoon/dragonfly/dist/index.min.css';
```

**With Astro:**
```astro
import '@casoon/dragonfly/dist/index.min.css';
```

**Via unpkg.com CDN:**
```html
<link rel="stylesheet" href="https://unpkg.com/@casoon/dragonfly/dist/index.min.css">
```

**Note about the unpkg.com version:**
The minified version contains basic functionality but may not include all effects and components. For specific components or effects, these can be loaded selectively:

```html
<!-- Base CSS -->
<link rel="stylesheet" href="https://unpkg.com/@casoon/dragonfly/dist/index.min.css">
<!-- Additional components as needed -->
<link rel="stylesheet" href="https://unpkg.com/@casoon/dragonfly/effects/visual/shadows.css">
<link rel="stylesheet" href="https://unpkg.com/@casoon/dragonfly/ui/components/card.css">
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
@casoon/dragonfly/
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
│   ├── content.css       # Content & Link Button components
│   ├── forms.css         # Form components & buttons
│   ├── components.css    # Components collection
│   ├── components/       # Complex UI components
│   ├── layout/           # Layout components (grid, containers)
│   ├── menu/             # Menu & navigation components
│   ├── patterns/         # UI patterns
│   └── regions/          # Page regions (header, footer, sidebar)
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
@import '@casoon/dragonfly/fonts/fonts.css';

/* A specific font with all weights */
@import '@casoon/dragonfly/fonts/roboto/index.css';

/* Only a specific weight of a font */
@import '@casoon/dragonfly/fonts/roboto/400.css';
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

## Link Button Components

The library includes specialized Link Button components in `ui/content.css` that work parallel to form buttons but are optimized for content areas and navigation links.

### Basic Link Buttons
```html
<!-- Basic link button -->
<a href="/page" class="link-button">Navigate</a>

<!-- Primary action link -->
<a href="/action" class="link-button primary">Primary Action</a>

<!-- Secondary link with icon -->
<a href="/help" class="link-button secondary with-icon">
  <span class="icon">?</span>
  Help
</a>
```

### Button Variants
```html
<!-- All available variants -->
<a href="#" class="link-button primary">Primary</a>
<a href="#" class="link-button secondary">Secondary</a>
<a href="#" class="link-button tertiary">Tertiary</a>
<a href="#" class="link-button success">Success</a>
<a href="#" class="link-button warning">Warning</a>
<a href="#" class="link-button danger">Danger</a>
<a href="#" class="link-button info">Info</a>
<a href="#" class="link-button link">Link Style</a>
```

### Button Sizes
```html
<!-- Size variants -->
<a href="#" class="link-button xs">Extra Small</a>
<a href="#" class="link-button sm">Small</a>
<a href="#" class="link-button md">Medium (default)</a>
<a href="#" class="link-button lg">Large</a>
<a href="#" class="link-button xl">Extra Large</a>
```

### Advanced Features
```html
<!-- Icon support -->
<a href="#" class="link-button primary with-icon">
  <span class="icon">→</span>
  Continue
</a>

<!-- Icon-only button -->
<a href="#" class="link-button icon-only" aria-label="Menu">
  <span class="icon">☰</span>
</a>

<!-- Loading state -->
<a href="#" class="link-button primary loading">Loading...</a>

<!-- Disabled state -->
<a href="#" class="link-button disabled">Disabled</a>
```

### Styling Variants

#### Outline Buttons
```html
<!-- Outline variants with hover fill effect -->
<a href="#" class="link-button outline primary">Outline Primary</a>
<a href="#" class="link-button outline secondary">Outline Secondary</a>
<a href="#" class="link-button outline success">Outline Success</a>
<a href="#" class="link-button outline danger">Outline Danger</a>
```

#### Ghost Buttons
```html
<!-- Subtle ghost buttons with transparent backgrounds -->
<a href="#" class="link-button ghost primary">Ghost Primary</a>
<a href="#" class="link-button ghost success">Ghost Success</a>
<a href="#" class="link-button ghost danger">Ghost Danger</a>
```

#### Gradient Buttons
```html
<!-- Beautiful gradient effects -->
<a href="#" class="link-button gradient primary">Gradient Primary</a>
<a href="#" class="link-button gradient secondary">Gradient Secondary</a>
<a href="#" class="link-button gradient success">Gradient Success</a>
<a href="#" class="link-button gradient rainbow">Rainbow Gradient</a>
```

#### Border Variants
```html
<!-- Different border styles -->
<a href="#" class="link-button border-thick primary">Thick Border</a>
<a href="#" class="link-button border-dashed primary">Dashed Border</a>
<a href="#" class="link-button border-dotted primary">Dotted Border</a>
```

#### Border Radius Variants
```html
<!-- Border radius options -->
<a href="#" class="link-button rounded-none">No Radius</a>
<a href="#" class="link-button rounded-sm">Small Radius</a>
<a href="#" class="link-button rounded-lg">Large Radius</a>
<a href="#" class="link-button rounded-xl">Extra Large Radius</a>
<a href="#" class="link-button rounded-full">Fully Rounded</a>
```

#### Shadow Effects
```html
<!-- Shadow variants for depth -->
<a href="#" class="link-button primary shadow">With Shadow</a>
<a href="#" class="link-button primary shadow-lg">Large Shadow</a>
<a href="#" class="link-button primary shadow-inner">Inner Shadow</a>
```

#### Glow Effects
```html
<!-- Glowing buttons for attention -->
<a href="#" class="link-button primary glow">Glowing Primary</a>
<a href="#" class="link-button success glow">Glowing Success</a>
<a href="#" class="link-button danger glow">Glowing Danger</a>
```

#### Animated Buttons
```html
<!-- Interactive animations -->
<a href="#" class="link-button primary animated">Scale on Hover</a>
<a href="#" class="link-button primary bounce">Bounce Effect</a>
<a href="#" class="link-button primary pulse">Pulse Effect</a>
```

#### Special Effects
```html
<!-- Modern design effects -->
<a href="#" class="link-button neumorphism">Neumorphism</a>
<a href="#" class="link-button glass">Glass Effect</a>
<a href="#" class="link-button minimal">Minimal Style</a>
```

#### Layout Options
```html
<!-- Full width button -->
<a href="#" class="link-button primary full-width">Full Width Button</a>
```

### Combining Variants
```html
<!-- Mix and match for unique styles -->
<a href="#" class="link-button primary gradient shadow-lg rounded-lg animated">
  Ultimate Button
</a>

<a href="#" class="link-button outline success rounded-full with-icon glow">
  <span class="icon">✓</span>
  Success Action
</a>

<a href="#" class="link-button ghost danger lg border-dashed">
  Stylized Danger
</a>
```

### Key Features
- **Parallel to Form Buttons:** Works alongside `ui/forms.css` buttons without conflicts
- **Content Optimized:** Specifically designed for content areas and navigation
- **Full Accessibility:** Focus states, ARIA support, keyboard navigation
- **Modern CSS:** Uses CSS Nesting instead of BEM notation
- **Extensive Styling:** 15+ different styling variants and combinations
- **Visual Effects:** Gradients, shadows, glow, neumorphism, glass effects
- **Animations:** Bounce, pulse, scale, and custom hover effects
- **Border Options:** Solid, dashed, dotted, thick borders with various radius options
- **Layout Flexibility:** Full-width options and responsive behavior
- **Icon Support:** Built-in icon handling with proper spacing
- **State Management:** Loading, disabled, and focus states included

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

### 🧪 Enhanced Testing Features (v0.7.4)
- **✅ 100% Lint-free Codebase**: All 234+ CSS files pass Lightning CSS tests without errors
- **🔧 Advanced CSS Validation**: Systematic verification against modern CSS standards
- **📊 Improved Test Coverage**: Comprehensive coverage of all components and utilities
- **⚡ Optimized Performance Tests**: Faster test execution through modern syntax

### CSS Processing Tests
```bash
# Run all tests (Lint + Lightning CSS)
npm run test:all

# CSS Linting only
npm run test

# Lightning CSS tests only
npm run test:lightningcss
```

### Quality Assurance Results
- **234+ CSS Files**: All successfully validated
- **0 Lint Errors**: Completely error-free codebase
- **Modern CSS Features**: Container Queries, CSS Nesting, CSS Layers fully supported
- **Cross-Browser Compatibility**: Tested on Chrome, Firefox, Safari, Edge

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

- **[DOCUMENTATION.md](DOCUMENTATION.md)** - Comprehensive documentation with architecture, goals and compatibility information
- **[STYLE-GUIDE.md](STYLE-GUIDE.md)** - Detailed style guide for using the library
- **[LAYER-SYSTEM.md](LAYER-SYSTEM.md)** - Explanation of the CSS layer system
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guidelines for contributing to the project
- **[PUBLISHING.md](PUBLISHING.md)** - Information about the publishing process
- **[GOOGLE-FONTS-LICENSE.md](GOOGLE-FONTS-LICENSE.md)** - License information for the Google Fonts used
- **[ICONS-LICENSE.md](ICONS-LICENSE.md)** - License information for the icons used

## License
MIT

## Contributing
Contributions welcome! See [Contribution Guidelines](CONTRIBUTING.md).