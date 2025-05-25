# @casoon/ui-lib

A modular, lightweight CSS framework and design system for modern web projects. While it is especially optimized for use with Astro JS, it is fully framework-agnostic and can be used in any web project. The library is developed by an author who primarily uses Astro JS, but it is not limited to that ecosystem. It is also optimized for LightningCSS and Container Queries, featuring a @layer-based architecture and comprehensive accessibility.

## Changelog (Excerpt)

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

**Basic:**
```html
<link rel="stylesheet" href="path/to/@casoon/ui-lib/core.css">
```
**With Bundler:**
```js
import '@casoon/ui-lib/core.css';
```
**With Astro:**
```astro
import '@casoon/ui-lib/core.css';
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
├── core.css              # Main file with layer imports
├── base.css              # Base imports and layer structure
├── layout.css            # Layout components & utilities
├── layout.queries.css    # Container query responsiveness
├── typography.css        # Typography system
├── animations.css        # Animation and motion system
├── effects.css           # Visual effects
├── components.css        # Component imports
├── themes.css            # Color & theming system
├── icons.css             # Icon system
├── base/                 # Base layers
├── components/           # UI components (CSS modules)
├── effects/              # Effects & interactions
├── themes/               # Color variants
└── icons/                # Icon definitions
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

- **interpolate-size: allow-keywords**: Chrome/Edge from 120, Safari from 17, Firefox from 121 (with flag). Fallbacks for older browsers are included.

## Testing

```bash
npm run test:lightningcss
```

## Further Documentation

For a comprehensive guide to all features, best practices, component usage, theming, utilities, and advanced techniques, please refer to the [Style Guide](STYLE-GUIDE.md).

For a detailed explanation of the CSS layer architecture, see the [Layer System Guide](LAYER-SYSTEM.md).

## License
MIT

## Contributing
Contributions welcome! See [Contribution Guidelines](CONTRIBUTING.md).

## Status
🟡 **Beta**: Stable core functionality, ongoing improvements, API largely stable, suitable for production use in controlled environments.