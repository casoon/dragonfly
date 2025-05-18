# CSS Layer System

## Overview

The CSS Layer System of CASOON UI Lib uses `@layer` as a central organizational principle to precisely control the specificity and cascading of styles. This enables a predictable, maintainable, and conflict-free styling system with a clear hierarchy.

## Structure of the Layer System

The layers are defined in `base.css` in a precise hierarchy:

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

The order is crucial for cascading: layers that appear earlier in the list have a lower specificity than later layers, regardless of selector specificity within the layer.

## Architectural Principles

The layer system follows these central principles:

1. **Hierarchical Priority**: Later layers override earlier ones
2. **Functional Separation**: Each layer has a clearly defined responsibility
3. **Isolation**: Styles in one layer do not unintentionally affect other layers
4. **Extensibility**: New functionality can be integrated into existing layers or added in new layers
5. **Conflict Avoidance**: Reduction of specificity conflicts and !important declarations

## Layer Descriptions and Usage

### Basic Layers

#### reset
Resets browser default styles and normalizes rendering across different browsers.

```css
@layer reset {
  /* Reset browser defaults */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
```

#### tokens
Defines design token variables for the entire system. These are the building blocks of the design.

```css
@layer tokens {
  :root {
    --space-1: 0.25rem;
    --color-primary: #3b82f6;
    --radius-md: 0.375rem;
    /* more tokens... */
  }
}
```

#### custom-properties
Registers CSS properties with @property for animatable transitions and behavior.

```css
@layer custom-properties {
  @property --color-mix {
    syntax: '<color>';
    inherits: false;
    initial-value: transparent;
  }
}
```

### Core Functionality

#### core
Contains fundamental styles and base components.

```css
@layer core {
  body {
    font-family: var(--font-family-base);
    line-height: var(--line-height-normal);
  }
}
```

#### logical-properties
Implements bidirectional layout with logical properties.

```css
@layer logical-properties {
  .margin-inline-auto {
    margin-inline: auto;
  }
  
  .padding-inline {
    padding-inline: var(--space-4);
  }
}
```

#### colors
Defines the color system and color-based classes.

```css
@layer colors {
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .text-secondary {
    color: var(--color-secondary);
  }
}
```

### Layout and Structure

#### layout
Defines basic layout components such as containers, grid, and flex containers.

```css
@layer layout {
  .container {
    width: 100%;
    max-width: var(--container-lg);
    margin-inline: auto;
    padding-inline: var(--space-4);
  }
  
  .container-query {
    container-type: inline-size;
    container-name: layout;
  }
}
```

#### layout-queries
Implements responsive adjustments based on container queries.

```css
@layer layout-queries {
  @container layout (min-width: 30rem) {
    .sm\:flex-row { flex-direction: row; }
    .sm\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  }
}
```

### Additional Functionalities

#### utilities
Atomic helper classes for common styling tasks.

```css
@layer utilities {
  .flex { display: flex; }
  .gap-4 { gap: var(--space-4); }
  .w-full { width: 100%; }
}
```

#### components
UI components and more complex component systems.

```css
@layer components {
  .card {
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }
  
  .button {
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    background-color: var(--color-primary);
    color: white;
  }
}
```

#### themes
Theming system for color schemes and dark mode.

```css
@layer themes {
  [data-theme="dark"] {
    --color-background: hsl(222 47% 11%);
    --color-text: hsl(213 31% 91%);
  }
}
```

## Practical Application

### Basic Usage

Simply import the `core.css` file, which automatically loads the complete layer system:

```html
<link rel="stylesheet" href="path/to/@casoon/ui-lib/core.css">
```

### Custom Styles with Layer Integration

```css
/* Your own CSS file */
@import url('path/to/@casoon/ui-lib/core.css');

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

## Available Layers in Detail

### Component Layers

The `components` layer is divided into sublayers for different component types:

```css
@layer components {
  @layer base, layout, inputs, feedback, navigation, overlays;
}
```

This allows for precise control over component priority:

- `components.base`: Basic components like buttons, badges
- `components.layout`: Layout components like cards, sections
- `components.inputs`: Form elements and input fields
- `components.feedback`: Alert messages, notifications
- `components.navigation`: Navigation elements, menus
- `components.overlays`: Modal dialogs, popups, tooltips

### Animation and Effect Layers

The animation system is organized in sequence:

```css
@layer animations {
  @layer keyframes, transitions, motion;
}

@layer effects {
  @layer shadows, transforms, filters, interactions;
}
```

### Layer Naming Conventions

Layer names follow consistent conventions:
- Singular nouns for concept layers (layout, typography)
- Plural nouns for collection layers (utilities, components)
- Descriptive compound names for specialized layers (layout-queries)

## Layer Inheritance

The system uses `@layer` inheritance to create sublayers:

```css
/* Parent layer */
@layer components {
  /* Base component styles */
}

/* Sublayer */
@layer components.feedback {
  /* Feedback component specific styles */
}
```

## Best Practices

1. **Respect the Layer Hierarchy**: Place styles in the appropriate layer based on their purpose
2. **Avoid Layer Overrides**: Don't use `!important` or high-specificity selectors to override styles from other layers
3. **Maintain Modularity**: Keep related styles grouped in the same layer
4. **Use Design Tokens**: Reference variables from the tokens layer instead of hardcoding values
5. **Document Layer Extensions**: When adding to layers, document the purpose and intent of new styles

By following this layered architecture, you create maintainable, conflict-free CSS with clear organization and predictable behavior. 