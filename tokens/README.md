# Design Tokens

The Dragonfly Design System uses a comprehensive token system for consistent design values across all components.

## Token Categories

### Core Tokens
- **`colors.css`** - Color palettes with semantic names and scales (50-900)
- **`spacing.css`** - Spacing values for margins, padding, and gaps
- **`typography.css`** - Font sizes, weights, and aliases
- **`radius.css`** - Border-radius values for various components
- **`layout.css`** - Layout-specific tokens
- **`transitions.css`** - Animation and transition values
- **`effects.css`** - Shadows, glows, and visual effects
- **`themes.css`** - Theme-specific properties

### Component Tokens
- **`components.css`** - Component-specific tokens for UI elements

## Token Usage in Components

### Color Tokens
Components use semantic color tokens with scales:

```css
/* Alert component */
.alert-info {
  background-color: var(--color-info-100, #e0f2fe);
  color: var(--color-info-800, #1e40af);
}

/* Badge component */
.badge--primary {
  background-color: var(--color-primary-500);
  color: var(--color-text-inverse, white);
}
```

**Available Color Scales:**
- `--color-primary-{50-900}`
- `--color-secondary-{50-900}`
- `--color-success-{50-900}`
- `--color-warning-{50-900}`
- `--color-error-{50-900}`
- `--color-info-{50-900}`
- `--color-neutral-{50-900}`
- `--color-gray-{50-900}` (alias for neutral)

### Typography Tokens
Both `--font-size-*` and `--text-*` aliases are supported:

```css
/* Various font sizes */
.alert {
  font-size: var(--text-sm, var(--font-size-sm, 0.875rem));
}

.badge {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}
```

**Available Text Sizes:**
- `--text-xs` / `--font-size-xs` (0.75rem)
- `--text-sm` / `--font-size-sm` (0.875rem)
- `--text-base` / `--font-size-base` (1rem)
- `--text-lg` / `--font-size-lg` (1.125rem)
- `--text-xl` / `--font-size-xl` (1.25rem)

**Font-Weight Aliases:**
- `--font-light` / `--font-weight-light` (300)
- `--font-normal` / `--font-weight-normal` (400)
- `--font-medium` / `--font-weight-medium` (500)
- `--font-semibold` / `--font-weight-semibold` (600)
- `--font-bold` / `--font-weight-bold` (700)

### Spacing Tokens
Used for padding, margins, and gaps:

```css
.alert {
  padding: var(--alert-padding, var(--space-4, 1rem));
  gap: var(--alert-gap, var(--space-3, 0.75rem));
}
```

### Component-Specific Tokens
Special tokens for individual components:

```css
/* Alert-specific tokens */
--alert-padding: var(--space-4)
--alert-padding-sm: var(--space-2)
--alert-padding-lg: var(--space-5)
--alert-gap: var(--space-3)
--alert-border-radius: var(--radius-md)

/* Badge-specific tokens */
--badge-padding-xs: 0.15rem 0.35rem
--badge-padding-sm: 0.2rem 0.4rem
--badge-padding-md: 0.25rem 0.5rem
--badge-padding-lg: 0.3rem 0.6rem
--badge-min-width-xs: 1.2rem
--badge-min-width-sm: 1.5rem
--badge-min-width-md: 1.75rem
--badge-min-width-lg: 2rem
```

## Token Implementation

### @property Definitions
All tokens use CSS `@property` for better typing and animation:

```css
@property --color-primary-500 {
  inherits: true;
  initial-value: #3b82f6;
  syntax: '<color>';
}

@property --space-4 {
  inherits: true;
  initial-value: 1rem;
  syntax: '<length>';
}
```

### Fallback Values
Every token has a fallback value for browser compatibility:

```css
.component {
  color: var(--color-primary-500, #3b82f6);
  padding: var(--space-4, 1rem);
}
```

## Migration of Existing Components

### Step 1: Update colors
```css
/* Before */
background-color: #3b82f6;
color: #1e40af;

/* After */
background-color: var(--color-primary-500);
color: var(--color-primary-800);
```

### Step 2: Standardize spacing
```css
/* Before */
padding: 1rem;
margin: 0.5rem;

/* After */
padding: var(--space-4);
margin: var(--space-2);
```

### Step 3: Use typography tokens
```css
/* Before */
font-size: 0.875rem;
font-weight: 500;

/* After */
font-size: var(--text-sm);
font-weight: var(--font-medium);
```

### Step 4: Component-specific tokens
```css
/* Before */
padding: 1rem;
border-radius: 0.5rem;

/* After */
padding: var(--alert-padding);
border-radius: var(--alert-border-radius);
```

## Theme Support

All tokens are theme-aware and automatically adapted in different themes:

```css
/* Light Theme */
--color-text: #1f2937;
--color-background: #ffffff;

/* Dark Theme */
--color-text: #f9fafb;
--color-background: #111827;
```

## Browser Compatibility

- **Modern Browsers**: Full support with `@property`
- **Older Browsers**: Fallback values ensure functionality
- **CSS Custom Properties**: Supported in all modern browsers

## Performance

- Tokens are loaded once and inherited via CSS Custom Properties
- `@property` enables optimized animations
- Minimal performance overhead due to efficient token structure 