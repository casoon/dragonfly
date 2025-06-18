# UI-Lib Core Components

This directory contains fundamental CSS definitions for the UI-Lib.

## Tokens and Modern CSS Features

In `tokens.css`, all fundamental design tokens and modern CSS features are defined:

### Modern CSS Features

```css
:root {
  /* Enables smooth size interpolation with keywords */
  interpolate-size: allow-keywords;
}
```

The `interpolate-size: allow-keywords` property enables:

- Smooth transitions between size values (e.g., font sizes, padding, margin) in responsive designs
- Also supports interpolation of keywords like `small`, `medium`, `large`
- Particularly useful for container queries and viewport size changes

### Usage Examples:

```css
/* Fluid typography with interpolation */
.responsive-text {
  font-size: clamp(var(--text-sm), 5vw, var(--text-xl)); 
}

/* Spacing that scales smoothly */
.adaptive-container {
  padding: clamp(var(--space-4), 5%, var(--space-8));
}
```

## Additional Core Components

- `colors.css`: Color definitions
- `elements.css`: Basic HTML element styles
- `reset.css`: CSS reset and normalization
- `utilities.css`: Utility classes
- etc. 