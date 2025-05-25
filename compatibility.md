# Compatibility Information for @casoon/ui-lib

This documentation provides an overview of the UI library's browser compatibility, supported CSS features, and implemented fallback strategies for older browsers.

## Supported Browsers

The UI library supports the following browsers in their latest and second-latest versions:

- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & Mobile)
- Edge (Chromium-based)

Support for Internet Explorer has been discontinued.

## Modern CSS Features and Fallbacks

The library uses modern CSS features for optimal display and functionality, but implements fallback strategies for older browsers.

### Container Queries

**Feature:** `@container` queries are used for responsive components.

**Browser support:** [Can I Use: Container Queries](https://caniuse.com/css-container-queries)

**Fallback strategy:** 
- Components are pre-configured with a sensible base display
- Media queries as a secondary breakpoint strategy
- Feature detection via CSS feature queries (`@supports`)

```css
/* Base styling for all browsers */
.component {
  width: 100%;
  padding: var(--space-4);
}

/* Container query for modern browsers */
@supports (container-type: inline-size) {
  @container (min-width: 400px) {
    .component {
      padding: var(--space-6);
    }
  }
}

/* Fallback with media query for older browsers */
@supports not (container-type: inline-size) {
  @media (min-width: 768px) {
    .component {
      padding: var(--space-6);
    }
  }
}
```

### CSS Color Functions (OKLCH)

**Feature:** OKLCH color format for extended color space and better color contrasts.

**Browser support:** [Can I Use: OKLCH Colors](https://caniuse.com/mdn-css_types_color_oklch)

**Fallback strategy:**
- Double declaration with RGB/HSL as fallback
- Automatic color conversion in build process

```css
:root {
  /* Fallback with RGB */
  --color-primary-500: rgb(0, 100, 200);
  /* Modern color definition with OKLCH */
  --color-primary-500: oklch(60% 0.2 240);
}
```

### CSS Nesting

**Feature:** Native CSS nesting for better readability and maintainability.

**Browser support:** [Can I Use: CSS Nesting](https://caniuse.com/css-nesting)

**Fallback strategy:**
- Build process with LightningCSS or PostCSS to compile nested selectors
- No manual fallbacks needed as they are processed during the build

### Logical Properties

**Feature:** Logical properties (`margin-inline`, `padding-block`) for improved internationalization.

**Browser support:** [Can I Use: Logical Properties](https://caniuse.com/css-logical-props)

**Fallback strategy:**
- Double declaration for critical elements
- Build process transformation

```css
.element {
  /* Fallbacks for older browsers */
  margin-left: auto;
  margin-right: auto;
  
  /* Logical properties for modern browsers */
  margin-inline: auto;
}
```

### CSS Grid

**Feature:** CSS Grid for complex layouts.

**Browser support:** [Can I Use: CSS Grid](https://caniuse.com/css-grid)

**Fallback strategy:**
- Flexbox as primary fallback
- Simple single-column layout as base fallback

```css
.grid-container {
  /* Base layout for very old browsers */
  display: block;
  
  /* Fallback for browsers with Flexbox but without Grid */
  @supports (display: flex) {
    display: flex;
    flex-wrap: wrap;
  }
  
  /* Modern Grid layout */
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--grid-gutter);
  }
}
```

### Custom Properties (CSS Variables)

**Feature:** CSS variables for theming and consistency.

**Browser support:** [Can I Use: CSS Variables](https://caniuse.com/css-variables)

**Fallback strategy:**
- Direct color values as fallback
- PostCSS plugin to compile variables for older browsers

```css
.element {
  /* Fallback for browsers without CSS variable support */
  color: #0066cc;
  /* Using CSS variables */
  color: var(--color-primary-500, #0066cc);
}
```

### Interpolate Size (Fluid Typography)

**Feature:** `interpolate-size` for fluid typography and size adjustments.

**Browser support:** Chrome/Edge from version 120, Safari from version 17, Firefox from version 121 (with flag)

**Fallback strategy:**
- Viewport-based calculations with `calc()` as primary fallback
- Media queries for step-by-step adjustments as secondary fallback
- Feature detection via `@supports`

```css
.fluid-text {
  /* Fallback with calc() for older browsers */
  font-size: calc(1rem + 0.5vw);
  
  /* Modern fluid typography with interpolate-size */
  @supports (interpolate-size: auto) {
    interpolate-size: allow-keywords;
    font-size: medium;
  }
  
  /* Fallback with media queries for important breakpoints */
  @supports not (interpolate-size: auto) {
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
    
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
}
```

## Build Process and Progressive Enhancement

The UI library uses an optimized build process with the following tools:

- **LightningCSS:** For CSS optimization and transformations
- **PostCSS:** For additional transformations and fallbacks
- **Autoprefixer:** For automatic vendor prefixes

## Feature Detection Strategy

Instead of relying on browser detection, the library uses feature detection:

1. **CSS:** Using `@supports` for feature detection
2. **JavaScript:** Using feature tests instead of user agent detection
3. **Progressive Enhancement:** Basic functionality for all browsers, enhanced features for modern browsers

## Implementation Guidelines for New Features

When implementing new CSS features, the following should be considered:

1. **Check browser support** on caniuse.com
2. **Develop a fallback strategy** for unsupported browsers
3. **Implement feature detection** instead of browser detection
4. **Document** the fallback strategy in comments

## Compatibility Tests

The library is regularly tested in the following browsers:
- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)
- iOS Safari (latest version)
- Android Chrome (latest version)

## Performance Optimization

To optimize performance even in older browsers:

1. **Modular imports** allow loading only needed components
2. **Critical CSS** identify for first paint and include inline
3. **Lazy loading** implement for non-critical styles 