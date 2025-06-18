# CSS Layer System (Unified Guide)

> **Note:** This document replaces both the previous `LAYER-SYSTEM.md` and `CSS-LAYER-GUIDE.md`. It provides a comprehensive overview, best practices, and implementation guidelines for the Casoon UI CSS Layer System.

## Overview

The CSS Layer System of Casoon UI Lib uses `@layer` as a central organizational principle to precisely control the specificity and cascading of styles. This enables a predictable, maintainable, and conflict-free styling system with a clear hierarchy.

## Unified Layer Hierarchy

The CSS layers are organized in a logical hierarchy to manage specificity and avoid conflicts between selectors. The order is as follows (from lowest to highest priority):

```css
@layer reset,                /* Basic browser reset */
       tokens,               /* Design tokens and variables */
       base,                 /* Basic element styles (contains logical-properties, accessibility, elements) */
       logical-properties,   /* Sub-layer of base: Logical properties for RTL/LTR support */
       accessibility,        /* Sub-layer of base: Accessibility-related styles */
       elements,             /* Sub-layer of base: Basic HTML element styles */
       custom-properties,    /* Registered CSS properties */
       core,                 /* Core functionalities */
       colors,               /* Color system (contains color-mix) */
       color-mix,            /* Sub-layer of colors: Color mixtures and variants */
       typography,           /* Typography system */
       layout,               /* Layout basics (contains layout-queries) */
       layout-queries,       /* Sub-layer of layout: Container queries for layouts */
       utilities,            /* Atomic utility classes */
       components,           /* UI components (contains form) */
       form,                 /* Sub-layer of components: Form-related styles */
       animations,           /* Motion system (contains animation-contexts) */
       animation-contexts,   /* Sub-layer of animations: Context-related animations */
       effects,              /* Visual effects (contains smooth-scroll) */
       smooth-scroll,        /* Sub-layer of effects: Scrolling behavior and effects */
       icons,                /* Icon system */
       themes;               /* Theming system */
```

### Visualized Hierarchy

```
- base
  ├── logical-properties
  ├── accessibility
  └── elements
- colors
  └── color-mix
- layout
  └── layout-queries
- components
  └── form
- animations
  └── animation-contexts
- effects
  └── smooth-scroll
```

The order is crucial for cascading: layers that appear earlier in the list have a lower specificity than later layers, regardless of selector specificity within the layer.

## Architectural Principles

1. **Hierarchical Priority:** Later layers override earlier ones
2. **Functional Separation:** Each layer has a clearly defined responsibility
3. **Isolation:** Styles in one layer do not unintentionally affect other layers
4. **Extensibility:** New functionality can be integrated into existing layers or added in new layers
5. **Conflict Avoidance:** Reduction of specificity conflicts and !important declarations

## Layer Descriptions and Usage

### Basic Layers

- **reset:** Resets browser default styles and normalizes rendering across different browsers.
- **tokens:** Defines design token variables for the entire system.
- **base:** Basic element styles, including logical properties, accessibility, and elements.
- **logical-properties:** Logical properties for RTL/LTR support.
- **accessibility:** Accessibility-related styles.
- **elements:** Basic HTML element styles.
- **custom-properties:** Registers CSS properties with @property for animatable transitions and behavior.

### Core Functionality

- **core:** Fundamental styles and base components.
- **colors:** Color system and color-based classes.
- **color-mix:** Color mixtures and transformations.
- **typography:** Typography system and text formatting.
- **layout:** Layout basics, containers, grid, and flex containers.
- **layout-queries:** Responsive adjustments based on container queries.

### Additional Functionalities

- **utilities:** Atomic helper classes for common styling tasks.
- **components:** UI components and more complex component systems.
- **form:** Form-related styles as a sub-layer of components.
- **animations:** Animation definitions and motion system.
- **animation-contexts:** Context-related animations as a sub-layer of animations.
- **effects:** Visual effects and interactions.
- **smooth-scroll:** Scroll behavior and effects as a sub-layer of effects.
- **icons:** Icon system and integration.
- **themes:** Theming system for color schemes and dark mode.

## Best Practices & Rules

### 1. Define Keyframes Outside of Layers

All `@keyframes` definitions must be placed outside of `@layer` blocks to avoid compatibility issues with Lightning CSS.

```css
/* CORRECT ✅ */
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

@layer animations {
    .fade-in {
        animation-name: fade-in;
        animation-duration: var(--animation-duration-normal);
    }
}

/* INCORRECT ❌ */
@layer animations {
    @keyframes slide-in {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
}
```

### 2. Use Component Layers

Use the `components` layer for all component-related styles:

```css
/* CORRECT ✅ */
@layer components {
    .button {
        /* Button styles */
    }
}

/* INCORRECT ❌ */
@layer button {
    .button {
        /* Button styles */
    }
}
```

For form components and elements, use the `form` layer within the `components` layer:

```css
@layer form {
    .form-group {
        /* Form element styles */
    }
}
```

### 3. Media Queries with Layer Definitions Inside

Media queries should wrap layer definitions, not the other way around:

```css
/* CORRECT ✅ */
@media (max-width: 768px) {
    @layer components {
        .card {
            flex-direction: column;
        }
    }
}

/* INCORRECT ❌ */
@layer components {
    @media (max-width: 768px) {
        .card {
            flex-direction: column;
        }
    }
}
```

## Practical Application

### Basic Usage

Simply import the `core.css` file, which automatically loads the complete layer system:

```html
<link rel="stylesheet" href="path/to/@casoon/dragonfly/core.css">
```

### Custom Styles with Layer Integration

```css
/* Your own CSS file */
@import url('path/to/@casoon/dragonfly/core.css');

/* Add your own utility classes */
@layer utilities {
  .custom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-6);
  }
}

/* Create your own components */
@layer components {
  .feature-card {
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
  }
  
  .feature-card__title {
    font-size: var(--text-xl);
    font-weight: var(--font-bold);
    margin-bottom: var(--space-2);
  }
}
```

### Typical Component File Example

```css
/**
 * Button Component
 *
 * @layer components
 */

/* Keyframes outside of layers */
@keyframes button-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* Component styles */
@layer components {
    .button {
        /* Base styles */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        /* ... */
    }
    
    /* Variants */
    .button.primary { /* ... */ }
    .button.secondary { /* ... */ }
}

/* Animations for the component */
@layer animations {
    .button.animate-pulse {
        animation-name: button-pulse;
        animation-duration: var(--animation-duration-normal);
        animation-iteration-count: infinite;
    }
}

/* Effects for the component */
@layer effects {
    .button.glow {
        box-shadow: 0 0 10px var(--color-primary);
    }
}
```

### Form Elements Example

```css
/**
 * Form Elements
 *
 * @layer form
 */

@layer form {
    .form-group {
        margin-bottom: var(--spacing-4);
    }
    
    .form-label {
        display: block;
        margin-bottom: var(--spacing-2);
    }
    
    .form-control {
        width: 100%;
        padding: var(--spacing-2) var(--spacing-3);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
    }
}
```

## Migration of Existing Files

When migrating existing files to the new layer structure:

1. Extract all `@keyframes` definitions and place them outside the `@layer` blocks
2. Identify the appropriate layer for each CSS block according to the documented hierarchy
3. Check media queries and add layer definitions inside them if necessary
4. For component-specific layers, migrate to `@layer components`

### Example of a Migration

Before migration:

```css
/* Old structure with its own layer */
@layer card {
    .card {
        display: flex;
        flex-direction: column;
    }
}
```

After migration:

```css
/* New structure with components layer */
@layer components {
    .card {
        display: flex;
        flex-direction: column;
    }
}
``` 