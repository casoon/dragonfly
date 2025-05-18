# CSS Layer Structure for Casoon UI

This document describes the standardized layer structure for the Casoon UI Design System and provides guidelines for its implementation.

## Basic Layer Hierarchy

The CSS layers are organized in a logical hierarchy to manage specificity and avoid conflicts between selectors. The order is as follows (from lowest to highest priority):

```css
@layer reset,        /* CSS reset and normalization */
       tokens,       /* Design tokens and variables */
       base,         /* Basic element styles (contains logical-properties, accessibility, elements) */
       logical-properties, /* Sub-layer of base: Logical properties for RTL/LTR support */
       accessibility, /* Sub-layer of base: Accessibility-related styles */
       elements,     /* Sub-layer of base: Basic HTML element styles */
       colors,       /* Color definitions and schema (contains color-mix) */
       color-mix,    /* Sub-layer of colors: Color mixtures and transformations */
       typography,   /* Typography styles */
       layout,       /* Layout systems and grid (contains layout-queries) */
       layout-queries, /* Sub-layer of layout: Container queries for layouts */
       utilities,    /* Helper style classes */
       components,   /* Component styles (contains form) */
       form,         /* Sub-layer of components: Form-related styles */
       animations,   /* Animation definitions (contains animation-contexts) */
       animation-contexts, /* Sub-layer of animations: Context-related animations */
       effects,      /* Visual effects (contains smooth-scroll) */
       smooth-scroll, /* Sub-layer of effects: Scrolling behavior and effects */
       icons,        /* Icon styles */
       themes;       /* Theme variants */
```

The logical hierarchy can be visualized as follows:

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

## Important Rules

### 1. Define Keyframes Outside of Layers

**Important:** All `@keyframes` definitions must be placed outside of `@layer` blocks to avoid compatibility issues with Lightning CSS.

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

## Examples

### Typical Component File

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

### Form Elements

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

## Combined Approach with Container Queries

The structure also supports container queries, which should follow the same pattern as media queries:

```css
@container (min-width: 30rem) {
    @layer components {
        .card {
            flex-direction: row;
            gap: var(--spacing-4);
        }
    }
}
```

## Documentation Best Practices

When documenting CSS files, follow these practices:

1. Use JSDoc-style comments to indicate the layer(s) used in a file
2. Document component variants with clear comments
3. Explain any special behavior or interactions

Example:

```css
/**
 * Alert Component
 * 
 * @layer components
 * @layer animations
 * 
 * Provides status and feedback messages to users.
 * Includes support for different severity levels and
 * optional animations for appearing/disappearing.
 */
```

## Layer-specific Naming Conventions

To make it easier to identify which layer a class belongs to, consider following these naming patterns:

- Utility classes: Functional, descriptive names (`flex`, `hidden`, `mt-4`)
- Component classes: Component name with modifiers (`button`, `button--primary`, `card__header`)
- Animation classes: Prefixed with animation intent (`fade-in`, `slide-from-left`)
- Effect classes: Describes the effect (`shadow-sm`, `glow`, `blur-bg`)

This approach helps maintain clarity about where styles should be placed in the layer structure. 