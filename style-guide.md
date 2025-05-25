# Casoon UI Style Guide

This document describes the structure, concepts, and usage of the Casoon UI design system. Casoon UI is a modern, modular, and continuously evolving CSS framework. It is built on the latest CSS standards, prioritizes accessibility, and offers a wide range of reusable components and effects. All features are designed to be framework-agnostic and can be used individually or as a complete system.

## Table of Contents

- [Project Structure](#project-structure)
- [CSS Architecture](#css-architecture)
- [CSS Nesting & Component Structure](#css-nesting--component-structure)
- [Design Tokens](#design-tokens)
- [Colors](#colors)
- [Typography](#typography)
- [Layout](#layout)
- [Components](#components)
- [Themes](#themes)
- [Brand Customization](#brand-customization)
- [Utility Classes](#utility-classes)
- [Usage in Projects](#usage-in-projects)
- [Forms](#forms)
- [Animations](#animations)
- [Accessibility Best Practices](#accessibility-best-practices)
- [Integration with Build Tools](#integration-with-build-tools)

## Project Structure

The Casoon UI design system is organized as follows:

```
casoon-ui-lib/
├── core.css              # Main CSS file with layer imports
├── components/           # CSS modules for components
├── layers/               # CSS layers for core functionality
│   ├── tokens.css        # Design tokens and variables
│   ├── reset.css         # CSS reset
│   ├── colors.css        # Color definitions
│   ├── typography.css    # Typography styles
│   ├── layout.css        # Layout system
│   ├── utilities.css     # Utility classes
│   ├── animations.css    # Animations
│   ├── effects.css       # Effects (main file)
│   ├── effects/          # Additional effects
│   ├── forms.css         # Form base styles
│   ├── smooth-scroll.css # Scroll behavior
│   └── icons.css         # Icon styles
├── themes/               # Theme variants
│   ├── theme-base.css    # Base theme
│   ├── brand.css         # Brand customizations
│   ├── dark-mode.css     # Dark mode
│   ├── day.css           # Day theme
│   ├── night.css         # Night theme
│   └── more themes...
└── icons/                # Icon styles
```

## CSS Architecture

The design system uses modern CSS features and follows a layer-based architecture:

### CSS Layers

CSS styles are organized into logical layers, defined using the `@layer` directive:

```css
@layer core {
    /* Core styles */
}

@layer icons {
    /* Icon styles */
}

@layer animations {
    /* Animations */
}

@layer effects {
    /* Effects */
}

@layer themes {
    /* Themes */
}
```

This layer structure enables a clear hierarchy and conflict resolution for CSS selectors.

### CSS Modules

Components use CSS modules located in the `components/` directory. These can be imported selectively in projects:

```js
import styles from 'casoon-ui-lib/components/button.module.css';
```

## CSS Nesting & Component Structure

The design system uses modern CSS with native nesting instead of BEM methodology for more readable and maintainable code.

### Principles

1. **Component-based structure** – Each component is defined in its own module with its own namespace (`@layer`)
2. **CSS nesting** – Elements and states are defined using nested selectors instead of naming conventions (BEM)
3. **Flat class structure** – Avoids nested classes like `.button__icon` in favor of `.button .icon`
4. **Modifiers as direct classes** – Uses combined classes (`.button.primary`) instead of BEM modifiers (`.button--primary`)

### Component Structure Example

A typical component in Casoon UI follows this structure:

```css
@layer components {
  .component-name {
    /* Base styling for the component */
    
    /* Child elements */
    h3 {
      /* Styling for direct h3 children */
    }
    
    p {
      /* Styling for direct p children */
    }
    
    .icon {
      /* Styling for .icon children within the component */
    }
    
    /* States */
    &:hover {
      /* Hover state */
    }
    
    &:focus {
      /* Focus state */
    }
    
    &:disabled {
      /* Disabled state */
    }
    
    /* Variants/Modifiers */
    &.primary {
      /* Primary variant */
    }
    
    &.small {
      /* Small size variant */
    }
    
    &.large {
      /* Large size variant */
    }
    
    /* Complex nesting */
    &.with-icon {
      /* Layout with icon */
      
      .icon {
        /* Icon styling specific to this variant */
      }
    }
    
    /* Responsive behavior */
    @media (min-width: 768px) {
      /* Changes for larger screens */
    }
  }
}
```

### Naming Conventions

| Type         | Convention                | Example            | Previous BEM Equivalent |
|--------------|---------------------------|--------------------|------------------------|
| Component    | `.component`              | `.card`            | `.card`                |
| Sub-element  | `.component element` or direct selector | `.card h3` or `.card .title` | `.card__title`          |
| Variant/Modifier | `.component.variant`   | `.card.primary`    | `.card--primary`        |
| State        | `.component.state` or `.component:state` | `.card.active` or `.card:hover` | `.card--active`         |
| Size variant | `.component.size`         | `.card.small`      | `.card--small`          |

### Example: Button Component

#### Before (BEM):
```css
.button { /* Base styling */ }
.button--primary { /* Primary variant */ }
.button--small { /* Small size */ }
.button__icon { /* Icon element */ }
```

#### After (CSS Nesting):
```css
.button {
  /* Base styling */
  
  &.primary {
    /* Primary variant */
  }
  
  &.small {
    /* Small size */
  }
  
  .icon {
    /* Icon element */
  }
}
```

### HTML Usage

#### Before (BEM):
```html
<button class="button button--primary button--small">
  <span class="button__icon">→</span>
  Click me
</button>
```

#### After (Flat Structure):
```html
<button class="button primary small">
  <span class="icon">→</span>
  Click me
</button>
```

### Advantages of the new approach

1. **Readability** - The structure of the component and its variants are clearly structured in the CSS and visually representable
2. **Simplified HTML** - Less classes in the markup, better readability
3. **Maintainability** - Related styles stay together, no fragmentation across multiple selectors
4. **Performance** - Lower selector specificity, better browser optimization
5. **Compatibility with Utility Classes** - Easy combination with Utility Classes for quick adaptations

## Design Tokens

Design tokens are defined in `layers/tokens.css` and include:

### Spacing

```css
:root {
    --space-0: 0;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-7: 1.75rem;
    --space-8: 2rem;
    --space-9: 2.25rem;
    --space-10: 2.5rem;
    --space-11: 2.75rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    --space-32: 8rem;
    --space-40: 10rem;
    --space-48: 12rem;
    --space-56: 14rem;
    --space-64: 16rem;
    --space-72: 18rem;
    --space-80: 20rem;
    --space-96: 24rem;
    --space-px: 1px;
}
```

### Breakpoints

```css
--breakpoint-xs: 0px;     /* Extra small (phones) */
--breakpoint-sm: 640px;   /* Small (large phones, small tablets) */
--breakpoint-md: 768px;   /* Medium (tablets) */
--breakpoint-lg: 1024px;  /* Large (desktops, large tablets) */
--breakpoint-xl: 1280px;  /* Extra large (large desktops) */
--breakpoint-2xl: 1536px; /* 2X large (extra large desktops) */
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 var(--color-black-alpha-5);
--shadow: 0 1px 3px 0 var(--color-black-alpha-10), 0 1px 2px 0 var(--color-black-alpha-6);
--shadow-md: 0 4px 6px -1px var(--color-black-alpha-10);
--shadow-lg: 0 10px 15px -3px var(--color-black-alpha-10);
--shadow-xl: 0 20px 25px -5px var(--color-black-alpha-10), 0 10px 10px -5px var(--color-black-alpha-4);
```

### Border-Radius

```css
--border-radius-sm: 0.25rem;
--border-radius-md: 0.5rem;
--border-radius-lg: 1rem;
--border-radius-xl: 0.75rem;
--border-radius-2xl: 1rem;
--border-radius-full: 9999px;
```

### Z-Index

```css
--z-index-dropdown: 1000;
--z-index-sticky: 1020;
--z-index-fixed: 1030;
--z-index-modal-backdrop: 1040;
--z-index-modal: 1050;
--z-index-popover: 1060;
--z-index-tooltip: 1070;
```

## Colors

The color palette is defined in `layers/colors.css` and uses the modern OKLCH color model for better color reproduction and accessibility:

### Primary colors

```css
--color-primary: var(--color-blue-600);
--color-primary-light: var(--color-blue-500);
--color-primary-dark: var(--color-blue-700);
```

### Secondary colors

```css
--color-secondary: var(--color-gray-600);
--color-secondary-light: var(--color-gray-500);
--color-secondary-dark: var(--color-gray-700);
```

### Accent colors

```css
--color-accent: var(--color-orange-500);
--color-accent-light: var(--color-orange-400);
--color-accent-dark: var(--color-orange-600);
```

### Status colors

```css
--color-success: var(--color-green-600);
--color-warning: var(--color-yellow-500);
--color-error: var(--color-red-600);
--color-info: var(--color-blue-600);
```

### Color palette

The system contains extensive color palettes in 10-step increments (50-900) for the following colors:

- Blue tones (blue)
- Sky blue (sky)
- Cyan (cyan)
- Mint (mint)
- Green (green)
- Lime (lime)
- Yellow (yellow)
- Gold (gold)
- Orange (orange)
- Coral (coral)
- Red (red)
- Pink (pink)
- Rose (rose)
- Violet (purple)
- Indigo (indigo)
- Gray (gray)
- Warm gray (warm-gray)
- Cool gray (cool-gray)

## Typography

Typography is defined in `layers/typography.css`:

### Font families

```css
--font-family-sans: system-ui, -apple-system, blinkmacsystemfont, "segoe ui", roboto, "helvetica neue", arial, sans-serif;
--font-family-serif: georgia, cambria, "times new roman", times, serif;
--font-family-mono: ui-monospace, sfmono-regular, menlo, monaco, consolas, "liberation mono", "courier new", monospace;
```

### Font sizes

```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.25rem;    /* 20px */
--font-size-xl: 1.5rem;     /* 24px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */
```

### Text-Wrap Optimization

The design system uses modern `text-wrap` properties for improved readability and optimal text rendering:

```css
/* Optimized line breaks for headings */
h1, h2, h3, h4, h5, h6 { text-wrap: balance; }

/* Text-Wrap Utilities */
.text-balance { text-wrap: balance; }
.text-pretty { text-wrap: pretty; }
```

#### Text-Wrap Properties

| Property | Description | Application Case |
|-------------|--------------|---------------|
| `text-wrap: balance` | Optimizes line breaks for uniform line lengths | Ideal for headings, short texts, buttons |
| `text-wrap: pretty` | Avoids single words at the end of the line (stutter) | Ideal for flowing texts, paragraphs, longer text sections |

#### Example Application

```html
<!-- Heading with balanced line lengths -->
<h1 class="text-balance">This heading has balanced line lengths</h1>

<!-- Longer text with optimized break -->
<p class="text-pretty">
  This paragraph uses text-wrap: pretty for optimal readability,
  by avoiding single words at the end of text blocks and
  achieving a more uniform text distribution.
</p>
```

### Font weights

```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line heights

```css
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
```

## Layout

The layout system is defined in `layers/layout.css` and offers flexible options for Grid and Flex layouts:

### Container

```css
.container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-4);
    padding-right: var(--space-4);
}

@media (min-width: var(--breakpoint-sm)) {
    .container { max-width: var(--container-sm); }
}

@media (min-width: var(--breakpoint-md)) {
    .container { max-width: var(--container-md); }
}

/* other breakpoints... */
```

### Grid System

The grid system is based on modern CSS Grid technologies and offers several flexible layout options:

#### Standard Grid

```css
.grid {
    display: grid;
    gap: var(--space-0);
}

/* Column Configuration */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

/* Column Spanning */
.col-span-1 { grid-column: span 1; }
.col-span-2 { grid-column: span 2; }
/* ... until .col-span-12 and .col-span-full */
```

#### Container-based Grids

The system uses modern container queries for component-based responsive layouts:

```css
/* Grid-Responsive with Container Queries */
.grid-responsive {
    display: grid;
    gap: var(--space-sm);
    grid-template-columns: 1fr;

    @container component (min-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-md);
    }

    @container component (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @container component (min-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-lg);
    }

    @container component (min-width: 1000px) {
        grid-template-columns: repeat(5, 1fr);
    }
}

/* Layout-Grid with Container Queries */
.layout-grid {
    display: grid;
    gap: var(--space-4);
    grid-template-columns: 1fr;

    @container layout (min-width: 30rem) {
        grid-template-columns: repeat(2, 1fr);
    }

    @container layout (min-width: 48rem) {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
    }

    @container layout (min-width: 62rem) {
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-8);
    }
}
```

#### Auto-fitting Grids

```css
.grid-auto-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);
}

.grid-auto-fill {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--space-4);
}
```

#### Responsive Breakpoint Utilities

All grid classes have responsive variants with Breakpoint prefixes:

```css
/* At Viewport widths above 768px (md) */
.md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.md\:col-span-4 { grid-column: span 4; }
```

### Container Queries

The system supports container queries for component-based responsive layouts:

```css
--container-query-xs: 240px;
--container-query-sm: 380px;
--container-query-md: 540px;
--container-query-lg: 720px;
--container-query-xl: 960px;
```

## Components

Casoon UI provides a comprehensive set of UI components, each implemented as a CSS module and organized in the `components/` directory. Components are structured using the `@layer components` system, with each major component in its own sub-layer to avoid conflicts and ensure maintainability.

### Key Features
- **Over 30 ready-to-use components**: Button, Card, Input, Modal, Tabs, File, Progress, Notification, Switch, Chip, Tag, Avatar, Tooltip, Wizard, and more.
- **Sub-layer structure**: Each component can have its own sub-layer (e.g., `@layer components.button`) for precise control.
- **Import flexibility**: Import all components at once via `components.css` or only the ones you need:
  ```css
  /* Import a single component */
  @import url('@casoon/ui-lib/components/button.css');
  /* Import all components */
  @import url('@casoon/ui-lib/components.css');
  ```
- **Accessibility**: All components are designed with accessibility in mind (focus states, ARIA, keyboard navigation, color contrast).
- **Responsive & themable**: Components adapt to different screen sizes and support dark mode, RTL, and custom themes.
- **State handling**: Support for states like `:hover`, `:active`, `:focus`, `:disabled`, `.invalid`, etc.
- **Utility-first**: Components can be extended and combined with utility classes for rapid customization.

### Best Practices
- Use the provided CSS variables (design tokens) for colors, spacing, and sizing.
- Extend components by adding your own styles in the appropriate sub-layer.
- Use semantic HTML and ARIA attributes for accessibility.
- Combine components with effects and utility classes for advanced UIs.

### Example: Advanced File Upload Component
```html
<div class="file with-preview">
  <input type="file" id="file-upload-preview">
  <label for="file-upload-preview" class="label">Choose file</label>
  <div class="preview">
    <img src="preview.jpg" alt="Preview">
  </div>
</div>
```

### Example: Progress Bar with Steps
```html
<div class="progress-steps">
  <div class="step completed">Step 1</div>
  <div class="step active">Step 2</div>
  <div class="step">Step 3</div>
</div>
```

### Example: Tabs with Variants
```html
<div class="tabs pills">
  <div class="nav">
    <button class="tab active">Tab 1</button>
    <button class="tab">Tab 2</button>
  </div>
  <div class="content">
    <div class="panel active">Content 1</div>
    <div class="panel">Content 2</div>
  </div>
</div>
```

For a full list and detailed usage, see the [components README](components/README.md) and the individual component CSS files.

## Themes

The design system supports an extensive theming system:

### Base Theme

The Base Theme (`themes/theme-base.css`) defines the base colors and can be overridden by other themes.

### Season Themes

- Day (`day.css`) - Light theme with blue tones
- Night (`night.css`) - Dark theme with purple accent
- Summer (`summer.css`) - Warm theme with yellow/orange tones
- Winter (`winter.css`) - Cool theme with blue/cyan tones
- Autumn (`autumn.css`) - Autumn theme with orange/red tones
- Spring (`spring.css`) - Fresh theme with green tones

### Special Themes

- Forest (`forest.css`) - Natural theme with green variations
- Ocean (`ocean.css`) - Sea theme with cyan/blue tones
- Pastel (`pastel.css`) - Soft theme with pastel colors
- Neon (`neon.css`) - Bright theme with glowing colors
- Retro (`retro.css`) - Vintage look with warm colors
- Monochrome (`monochrome.css`) - Minimalist black-and-white theme
- Sunset (`sunset.css`) - Warm theme with orange/red tones

### Function Themes

- Dark Mode (`dark-mode.css`) - Adjustments for dark mode
- Accessibility (`accessibility.css`) - Theme with high contrast for better accessibility

## Brand Customization

The design system supports brand customization through the `themes/brand.css` file:

```css
.brand {
    /* Font families */
    --font-heading: 'Satoshi', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-accent: 'Poppins', sans-serif;

    /* Direct color values */
    --color-primary: #111827;
    --color-secondary: #4B5563;
    --color-accent: #3245FF;
    --color-background: #F9FAFB;
    --color-text: #111827;
    --color-text-light: #6B7280;
    --color-border: #E5E7EB;
    --color-white: #FFF;
    
    /* Color Variants */
    --color-primary-50: #F9FAFB;
    --color-primary-100: #F3F4F6;
    /* other color variants... */
}
```

## Utility Classes

The design system contains extensive utility classes in `layers/utilities.css` for quick styling adaptations:

### Spacing Utilities

```css
.m-0 { margin: var(--space-0); }
.m-1 { margin: var(--space-1); }
.m-2 { margin: var(--space-2); }
/* other Margin Utilities... */

.p-0 { padding: var(--space-0); }
.p-1 { padding: var(--space-1); }
.p-2 { padding: var(--space-2); }
/* other Padding Utilities... */
```

### Flex Utilities

```css
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
/* other Flex Utilities... */
```

### Text Utilities

```css
.text-xs { font-size: var(--font-size-xs); }
.text-sm { font-size: var(--font-size-sm); }
.text-base { font-size: var(--font-size-base); }
/* other Text Size Utilities... */

.font-normal { font-weight: var(--font-weight-normal); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-bold { font-weight: var(--font-weight-bold); }
/* other Font-Weight Utilities... */
```

### Color Utilities

```css
.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-accent { background-color: var(--color-accent); }
/* other Background-Color Utilities... */

.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-accent { color: var(--color-accent); }
/* other Text-Color Utilities... */
```

### Responsive Utilities

All utility classes can be used with Breakpoint prefixes:

```css
.sm:flex { /* above 640px */ }
.md:hidden { /* above 768px */ }
.lg:grid-cols-3 { /* above 1024px */ }
/* other responsive Utilities... */
```

### Height & Width Utilities

Casoon UI provides a comprehensive set of utility classes for controlling element height and width using viewport units, percentages, and fixed pixel values. These utilities are available in the `utilities` layer and can be combined with responsive and state classes.

#### Height Utilities

```css
/* Height with viewport units */
.h-100svh { height: 100svh; }
.h-100lvh { height: 100lvh; }
.h-100dvh { height: 100dvh; }
.h-100vh  { height: 100vh; }

/* Min-Height */
.min-h-100svh { min-height: 100svh; }
.min-h-100lvh { min-height: 100lvh; }
.min-h-100dvh { min-height: 100dvh; }
.min-h-100vh  { min-height: 100vh; }

/* Max-Height */
.max-h-100svh { max-height: 100svh; }
.max-h-100lvh { max-height: 100lvh; }
.max-h-100dvh { max-height: 100dvh; }
.max-h-100vh  { max-height: 100vh; }

/* Percentage heights */
.h-25p { height: 25%; }
.h-50p { height: 50%; }
.h-75p { height: 75%; }
.h-100p { height: 100%; }

.min-h-25p { min-height: 25%; }
.min-h-50p { min-height: 50%; }
.min-h-75p { min-height: 75%; }
.min-h-100p { min-height: 100%; }

.max-h-25p { max-height: 25%; }
.max-h-50p { max-height: 50%; }
.max-h-75p { max-height: 75%; }
.max-h-100p { max-height: 100%; }

/* Fixed pixel heights */
.h-100px { height: 100px; }
.h-500px { height: 500px; }

.min-h-100px { min-height: 100px; }
.max-h-500px { max-height: 500px; }
```

#### Width Utilities

```css
/* Width with viewport units */
.w-100svw { width: 100svw; }
.w-100lvw { width: 100lvw; }
.w-100dvw { width: 100dvw; }
.w-100vw  { width: 100vw; }

/* Min-Width */
.min-w-100svw { min-width: 100svw; }
.min-w-100lvw { min-width: 100lvw; }
.min-w-100dvw { min-width: 100dvw; }
.min-w-100vw  { min-width: 100vw; }

/* Max-Width */
.max-w-100svw { max-width: 100svw; }
.max-w-100lvw { max-width: 100lvw; }
.max-w-100dvw { max-width: 100dvw; }
.max-w-100vw  { max-width: 100vw; }

/* Percentage widths */
.w-25p { width: 25%; }
.w-50p { width: 50%; }
.w-75p { width: 75%; }
.w-100p { width: 100%; }

.min-w-25p { min-width: 25%; }
.min-w-50p { min-width: 50%; }
.min-w-75p { min-width: 75%; }
.min-w-100p { min-width: 100%; }

.max-w-25p { max-width: 25%; }
.max-w-50p { max-width: 50%; }
.max-w-75p { max-width: 75%; }
.max-w-100p { max-width: 100%; }

/* Fixed pixel widths */
.w-100px { width: 100px; }
.w-500px { width: 500px; }

.min-w-100px { min-width: 100px; }
.max-w-500px { max-width: 500px; }
```

These utilities make it easy to build responsive layouts and control sizing precisely across all modern browsers.

## Usage in Projects

### Integration with Astro

```astro
---
import 'casoon-ui-lib/core.css';
import styles from 'casoon-ui-lib/components/button.css';
---

<button class={styles.button}>
  Click me
</button>
```

### Theme Activation

```html
<body class="theme-ocean">
  <!-- Ocean-Theme content -->
</body>
```

### Brand Customization

```html
<body class="brand">
  <!-- Brand-specific content -->
</body>
```

### Utility Classes Usage

```html
<div class="flex justify-between items-center p-4 bg-primary text-white rounded-md">
  <h2 class="text-xl font-bold">Title</h2>
  <button class="px-4 py-2 bg-accent rounded-md">Action</button>
</div>
```

### Responsive Design

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsive Grid: 1 column on mobile, 2 on tablets, 3 on desktops -->
</div>
```

### Container Queries

```html
<div class="cq-container">
  <div class="grid cq-md:grid-cols-2 gap-4">
    <!-- 1 column on small containers, 2 columns above container size MD -->
  </div>
</div>
```

## Animations

The animation system of Casoon UI has been fundamentally redesigned and now offers a uniform, performant, and accessible solution for movements in the user interface.

### Principles

1. **Uniform Naming** - All animations follow a consistent naming scheme (e.g. `slide-in-*` instead of different variants)
2. **Custom Properties** - Animation parameters are controlled via CSS variables for easy adaptations
3. **Accessibility** - Full support for `prefers-reduced-motion` and special Utility Classes
4. **Performance** - Optimized Keyframe Animations, utilizing GPU acceleration

### Animation Structure

Animations are organized into the following categories:

```css
/* Base Keyframes for frequently used animations */
@keyframes fade-in { ... }
@keyframes slide-in-up { ... }
@keyframes scale-in { ... }

@layer animations {
  /* Animation Parameters as Custom Properties */
  :root {
    --animation-duration-normal: 300ms;
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --move-md: 16px;
    /* ... other parameters ... */
  }

  /* Base Classes for All Animations */
  @layer animation-base { ... }
  
  /* Animation Modifiers (Duration, Delay, etc.) */
  @layer animation-duration { ... }
  @layer animation-delay { ... }
  @layer animation-iterations { ... }
  
  /* Accessibility Utilities */
  @layer motion-preferences { ... }
  
  /* Animation Categories */
  @layer fade-animations { ... }
  @layer slide-animations { ... }
  @layer scale-animations { ... }
  @layer scroll-animations { ... }
  @layer complex-animations { ... }
}
```

### Animation Classes

| Category | Classes | Description |
|-----------|---------|--------------|
| Fade | `.fade-in`, `.fade-out` | Fade in/out of elements |
| Slide | `.slide-in-up`, `.slide-in-down`, `.slide-in-left`, `.slide-in-right` | Slide in elements |
| Scale | `.scale-in`, `.scale-out` | Size change when fading in/out |
| Scroll | `.scroll-fade-in`, `.scroll-slide-in-up`, `.scroll-slide-in-left`, `.scroll-slide-in-right` | Scroll-driven animations |
| Complex | `.animate-bounce`, `.animate-pulse`, `.animate-spin`, `.animate-ping`, `.animate-wiggle`, `.animate-float`, `.animate-shake`, `.animate-heartbeat`, `.animate-elastic` | Complex animation effects |

### Parameter Adjustment

Animation parameters can be adjusted via CSS variables:

```css
/* Global Adjustment */
:root {
  --animation-duration-normal: 500ms; /* Longer Default Duration */
  --ease-bounce: cubic-bezier(0.5, -0.5, 0.1, 1.5); /* Stronger Bounce Effect */
}

/* Adjustment for Individual Elements */
.my-element {
  --slide-distance: 30px; /* Larger Movement Distance */
  --bounce-height: 40%; /* Higher Jump */
}
```

### Accessibility

The animation system considers accessibility by:

1. **Automatic Deactivation** - All animations are automatically deactivated when `prefers-reduced-motion: reduce` is preferred
2. **Motion-Safe Utility** - Elements marked with `.motion-safe` are only animated when no reduced motion is preferred
3. **Motion-Reduce Utility** - Elements marked with `.motion-reduce` are only displayed when reduced motion is preferred

```html
<!-- Will only animate if no reduced motion is preferred -->
<div class="card motion-safe animate fade-in">
  <!-- Animated Content -->
</div>

<!-- Alternative Version for Reduced Motion -->
<div class="card motion-reduce">
  <!-- Static Content without Animation -->
</div>
```

### Examples

#### Simple Fade Animation:
```html
<div class="animate fade-in">
  This content will fade in smoothly.
</div>
```

#### Complex Animation with Parameters:
```html
<div class="animate animate-bounce infinite" style="--bounce-height: 20%;">
  This element will bounce repeatedly by 20% of its height.
</div>
```

#### Scroll-driven Animation:
```html
<div class="scroll-slide-in-up">
  This element will slide in from the bottom when it scrolls into view.
</div>
```

#### Animation with Adjusted Parameters:
```html
<div class="animate slide-in-left duration-slow delay-md">
  This element will slide in slowly from the left, with medium delay.
</div>
```

### Animation Context Classes

With Animation Context Classes, you can override animation parameters for an entire container and all its child elements without changing the global values:

```html
<!-- Container with Faster Animations -->
<div class="animation-context-fast">
  <button class="animate fade-in">Will fade in faster</button>
  <div class="animate slide-in-up">Will slide in faster</div>
  
  <!-- Animation parameters can still be individually adjusted -->
  <div class="animate slide-in-left duration-slow">
    Slower than Standard Animations in Fast Context
  </div>
</div>

<!-- Container with Larger Scaling Effects -->
<div class="scale-context-lg">
  <div class="animate scale-in">
    Will fade in with Larger Scaling
  </div>
</div>
```

#### Available Context Classes

| Type | Classes | Affected Parameters |
|-----|---------|------------------------|
| **Speed** | `.animation-context-fastest`<br>`.animation-context-fast`<br>`.animation-context-slow` | `--animation-duration-*` |
| **Scaling** | `.scale-context-xs`<br>`.scale-context-sm`<br>`.scale-context-md`<br>`.scale-context-lg` | `--scale-*` |
| **Movement Distance** | `.move-context-small`<br>`.move-context-medium`<br>`.move-context-large` | `--move-*`, `--slide-distance` |
| **Delay** | `.delay-context-short`<br>`.delay-context-medium`<br>`.delay-context-long` | `--delay-*`, `--stagger-*` |

#### Animation Presets

The framework also offers predefined animation styles that adjust multiple parameters at once:

```html
<!-- Energetic, Fast Animations -->
<div class="animation-context-energetic">
  <!-- All Animations here will be more dynamic and energetic -->
</div>

<!-- Subtle, Deceptive Animations -->
<div class="animation-context-subtle">
  <!-- All Animations here will be more restrained and deceptive -->
</div>

<!-- Playful Animations with Bounce Effects -->
<div class="animation-context-playful">
  <!-- All Animations here will be more playful with more spring force -->
</div>
```

#### Nested Context Classes

Context classes can be nested, where the innermost class overrides the outer:

```html
<div class="animation-context-slow">
  <!-- Slow Animations -->
  
  <div class="animation-context-fast">
    <!-- Fast Animations override the slow context -->
  </div>
</div>
```

#### Combining with Container Queries

Especially useful is the combination with Container Queries for responsive animations:

```html
<style>
  @container (max-width: 600px) {
    .responsive-container {
      /* Small Screens: subtle Animations */
      composes: animation-context-subtle;
    }
  }
  
  @container (min-width: 601px) {
    .responsive-container {
      /* Large Screens: playful Animations */
      composes: animation-context-playful;
    }
  }
</style>

<div class="container-query responsive-container">
  <!-- Animations automatically adjust to Container Size -->
</div>
```

### Backdrop Components

Backdrops are semi-transparent overlays used as backgrounds for modal dialogs, popovers, and other UI elements. They help focus the attention on the foreground content and create a visual hierarchy.

```html
<!-- Standard Backdrop (Dark Background) -->
<div class="backdrop">
  <!-- Foreground Content -->
</div>

<!-- Backdrop with Blur Effect -->
<div class="backdrop backdrop-blur">
  <!-- Foreground Content -->
</div>

<!-- Light Backdrop -->
<div class="backdrop backdrop-light">
  <!-- Foreground Content -->
</div>

<!-- Backdrop with Stronger Opacity -->
<div class="backdrop backdrop-strong">
  <!-- Foreground Content -->
</div>
```

#### Backdrop Variants

| Class | Description |
|--------|--------------|
| `.backdrop` | Standard Backdrop with Dark Background (75% Opacity) |
| `.backdrop-blur` | Adds Blur Effect (4px Default Blur) |
| `.backdrop-light` | Light Background with Lower Opacity (25%) |
| `.backdrop-dark` | Dark Background (75% Opacity) |
| `.backdrop-medium` | Medium Opacity (50%) |
| `.backdrop-strong` | High Opacity (85%) |

#### Animated Backdrops

Backdrop components can also be faded in and out with transitions:

```html
<!-- Backdrop with CSS Transition instead of Animation -->
<div class="backdrop-transition">
  <!-- Foreground Content -->
</div>

<!-- Backdrop Fade Out -->
<script>
  // Backdrop fade out
  document.querySelector('.backdrop-transition').classList.add('exit');
  
  // Remove after Animation
  setTimeout(() => {
    document.querySelector('.backdrop-transition').remove();
  }, 300); // Equals var(--backdrop-animation-duration)
</script>
```

#### Adjustable Parameters

```css
:root {
  --backdrop-opacity: 0.75;       /* Basic Opacity */
  --backdrop-blur: 4px;           /* Blur Strength */
  --backdrop-bg-color: rgb(0 0 0 / var(--backdrop-opacity)); /* Background Color */
  --backdrop-animation-duration: 300ms; /* Animation-/Transition Duration */
}
```

### Transition Behavior: Allow-Discrete

With the new CSS property `transition-behavior: allow-discrete`, transitions between normally non-interpolable properties like `display`, `visibility`, or `position` can be realized. This allows smoother UI transitions without JavaScript hacks.

```html
<!-- Element with Transition between Visible and Invisible -->
<div class="fade-discrete">
  This will fade in and out smoothly, including visibility change.
</div>

<!-- Element that is completely removed from the DOM when invisible -->
<div class="fade-remove">
  This will fade in and out smoothly and remove from flow when invisible.
</div>
```

#### Available Utility Classes

| Class | Description |
|--------|--------------|
| `.transition-allow-discrete` | Base class that activates `transition-behavior: allow-discrete` |
| `.fade-discrete` | Transition between visible and invisible (`opacity` + `visibility`) |
| `.fade-remove` | Transition between visible and removed (`opacity` + `visibility` + `display`) |
| `.transition-aria-state` | Allows smooth transitions when changing ARIA states simultaneously |
| `.animate-visibility` | Controlled fade in/out via the `.visible` class |

#### Example Application with `.animate-visibility`

```html
<div class="animate-visibility">
  This content is standard not visible.
</div>

<script>
  // Element fade in
  document.querySelector('.animate-visibility').classList.add('visible');
  
  // Later fade out
  document.querySelector('.animate-visibility').classList.remove('visible');
</script>
```

#### Combining with ARIA States for Accessibility

```html
<button aria-expanded="false" class="transition-aria-state">
  Show Menu
</button>
<div id="menu" aria-hidden="true" class="animate-visibility">
  <!-- Menu Content -->
</div>

<script>
  const button = document.querySelector('button');
  const menu = document.querySelector('#menu');
  
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    // Update ARIA states (with smooth transition)
    button.setAttribute('aria-expanded', !isExpanded);
    menu.setAttribute('aria-hidden', isExpanded);
    
    // Visibility toggle
    menu.classList.toggle('visible', !isExpanded);
  });
</script>
```

#### Advantages Over Traditional Techniques

1. **Cleaner Code** - No JavaScript timers or callback hacks needed
2. **Better Performance** - Browser can optimize transitions
3. **Improved Accessibility** - ARIA states can be synchronized with visual changes
4. **Avoiding Layout Shifts** - Smooth transitions between different layout states

### Fluid Interpolation with interpolate-size

The CSS property `interpolate-size: allow-keywords` allows fluid transitions between CSS keywords like `small`, `medium`, and `large`. This opens new possibilities for responsive and adaptive animations.

```html
<!-- Element with fluid size adjustment -->
<div class="animate-keyword-size keyword-size-md">
  This font size will adjust fluidly
</div>

<!-- Element that grows when hovered -->
<div class="hover-grow">
  This text will grow when hovered
</div>
```

#### Available Utility Classes

| Class | Description |
|--------|--------------|
| `.animate-keyword-size` | Base class for fluid interpolation between keywords |
| `.keyword-size-xs` | Sets the font size to `x-small` |
| `.keyword-size-sm` | Sets the font size to `small` |
| `.keyword-size-md` | Sets the font size to `medium` |
| `.keyword-size-lg` | Sets the font size to `large` |
| `.keyword-size-xl` | Sets the font size to `x-large` |
| `.hover-grow` | Element grows when hovered from `medium` to `large` |
| `.animate-grow-fade` | Combined animation with size growth and fade in |

#### Example Application with Hover Effect

```html
<div class="hover-grow">
  This text will grow smoothly when hovered
</div>

<!-- Combining with Other Animation Effects -->
<div class="hover-grow animate-pulse">
  This text will pulse and grow when hovered
</div>
```

#### Keyframe Animations with Keywords

```html
<div class="animate-grow-fade">
  This animation will start from x-small and fade in, 
  while smoothly growing to large
</div>
```

#### Advantages of interpolate-size

1. **More Natural Transitions** - Fluid interpolation instead of abrupt changes
2. **Easier Mediaquery Integration** - Combinable with Container and Viewport Queries
3. **No Jumps** - Prevents sudden size changes at breakpoints
4. **Better UX** - Smoother visual changes for the user
5. **Semantic Size Designations** - Use of descriptive keywords instead of pixel values

## Accessibility Best Practices

Casoon UI is designed with accessibility in mind. To ensure your projects are accessible to all users, follow these best practices:

### ARIA Roles & Attributes
- Use appropriate ARIA roles (e.g., `role="dialog"`, `role="alert"`, `role="button"`) to communicate the purpose of elements to assistive technologies.
- Use `aria-label`, `aria-labelledby`, and `aria-describedby` to provide accessible names and descriptions.
- Update ARIA states (e.g., `aria-expanded`, `aria-checked`, `aria-hidden`) dynamically when UI state changes.

### Color Contrast
- Ensure sufficient contrast between text and background. Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify compliance with WCAG AA/AAA standards.
- Avoid using color as the only means of conveying information (e.g., use icons or text in addition to color).

### Focus Management
- Always provide a visible focus indicator for interactive elements (buttons, links, form fields). Casoon UI includes animated focus ring utilities for this purpose.
- Manage focus programmatically when opening dialogs, modals, or popovers (e.g., focus the first interactive element inside a modal).
- Return focus to the triggering element when closing overlays or dialogs.

### Keyboard Navigation
- Ensure all interactive elements are reachable and usable via keyboard (Tab, Shift+Tab, Enter, Space, Arrow keys).
- Use semantic HTML elements (`<button>`, `<a>`, `<input>`) whenever possible for built-in keyboard support.
- For custom components, implement keyboard event handlers to mimic native behavior (e.g., closing a modal with Escape, navigating menus with Arrow keys).

### Screen Reader Support
- Use headings (`<h1>`–`<h6>`) to structure content logically.
- Provide skip links for quick navigation (e.g., "Skip to main content").
- Hide purely decorative elements from assistive tech with `aria-hidden="true"` or `role="presentation"`.

### Motion & Reduced Motion
- Respect user preferences for reduced motion by using `.motion-safe` and `.motion-reduce` utilities.
- Avoid auto-playing animations or transitions that could cause discomfort.

For more, see the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) and [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/).

## Integration with Build Tools

Casoon UI is framework-agnostic and can be integrated with all major build tools and frameworks. Below are examples for common setups:

### Vite
```js
// vite.config.js
import { defineConfig } from 'vite';
import postcss from './postcss.config.js';

export default defineConfig({
  css: { postcss },
});
```
```js
// main.js or main.ts
import '@casoon/ui-lib/core.css';
```

### Webpack
```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
```
```js
// index.js
import '@casoon/ui-lib/core.css';
```

### Astro
```astro
---
import '@casoon/ui-lib/core.css';
---
<html>
  <body>
    <!-- Your content -->
  </body>
</html>
```

### Next.js
```js
// next.config.js
module.exports = {
  reactStrictMode: true,
  // ...other config
};
```
```js
// pages/_app.js or pages/_app.tsx
import '@casoon/ui-lib/core.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### General Tips
- For best results, ensure your build tool supports PostCSS and modern CSS features (e.g., nesting, custom properties, @layer).
- If you use LightningCSS or another CSS optimizer, check compatibility with Casoon UI's advanced features.
- You can import only the CSS modules you need for optimal bundle size.
- For SSR (Server-Side Rendering), make sure to include the CSS in the server-rendered HTML.

## Project Status & Contribution

Casoon UI is under active development. New components, effects, and utilities are added regularly. Feedback, issues, and contributions are highly welcome!

- See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
- Join the community to suggest features or report bugs.