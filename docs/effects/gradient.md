# Gradient
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for gradient elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.gradient`
- Description: Styling for gradient elements
- Uses: background properties
- Creates: Styled gradient appearance

#### `.gradient-horizontal`
- Description: Styling for gradient horizontal elements
- Uses: background properties
- Creates: Styled gradient horizontal appearance

#### `.gradient-vertical`
- Description: Styling for gradient vertical elements
- Uses: background properties
- Creates: Styled gradient vertical appearance

#### `.gradient-radial`
- Description: Styling for gradient radial elements
- Uses: background properties
- Creates: Styled gradient radial appearance

#### `.gradient-conic`
- Description: Styling for gradient conic elements
- Uses: background properties
- Creates: Styled gradient conic appearance

#### `.gradient-text`
- Description: Styling for gradient text elements
- Uses: background, background-clip, color
- Creates: Styled gradient text appearance

#### `.gradient-border`
- Description: Styling for gradient border elements
- Uses: relative properties
- Creates: Styled gradient border appearance

#### `.gradient-color-primary`
- Description: Styling for gradient color primary elements
- Uses: --gradient-start, --gradient-end properties
- Creates: Styled gradient color primary appearance

#### `.gradient-color-secondary`
- Description: Styling for gradient color secondary elements
- Uses: --gradient-start, --gradient-end properties
- Creates: Styled gradient color secondary appearance

#### `.gradient-color-success`
- Description: Styling for gradient color success elements
- Uses: --gradient-start, --gradient-end properties
- Creates: Styled gradient color success appearance

#### `.gradient-color-error`
- Description: Styling for gradient color error elements
- Uses: --gradient-start, --gradient-end properties
- Creates: Styled gradient color error appearance

#### `.gradient-color-warning`
- Description: Styling for gradient color warning elements
- Uses: --gradient-start, --gradient-end properties
- Creates: Styled gradient color warning appearance

#### `.gradient-color-info`
- Description: Styling for gradient color info elements
- Uses: --gradient-start, --gradient-end properties
- Creates: Styled gradient color info appearance

### Interactive States

#### `.gradient-hover`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled gradient hover appearance

#### `.gradient-hover`
- Description: Styling applied when the user hovers over the element
- Uses: background-position properties
- Creates: Styled gradient hover appearance

#### `.gradient-hover`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled gradient hover appearance

#### `.gradient-hover`
- Description: Styling applied when the user hovers over the element
- Uses: background-position properties
- Creates: Styled gradient hover appearance

### Special Effects

#### `.gradient-animated`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled gradient animated appearance

#### `.gradient-animated`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled gradient animated appearance

## CSS Custom Properties (Variables)

### Component Variables
- `--gradient-start` - Default: `var(--gradient-primary-start, #3b82f6)`
  - Configures the gradient start setting
- `--gradient-end` - Default: `var(--gradient-primary-end, #1d4ed8)`
  - Configures the gradient end setting
- `--gradient-start` - Default: `var(--gradient-secondary-start, #6b7280)`
  - Configures the gradient start setting
- `--gradient-end` - Default: `var(--gradient-secondary-end, #374151)`
  - Configures the gradient end setting
- `--gradient-start` - Default: `var(--gradient-success-start, #10b981)`
  - Configures the gradient start setting
- `--gradient-end` - Default: `var(--gradient-success-end, #047857)`
  - Configures the gradient end setting
- `--gradient-start` - Default: `var(--gradient-error-start, #ef4444)`
  - Configures the gradient start setting
- `--gradient-end` - Default: `var(--gradient-error-end, #b91c1c)`
  - Configures the gradient end setting
- `--gradient-start` - Default: `var(--gradient-warning-start, #f59e0b)`
  - Configures the gradient start setting
- `--gradient-end` - Default: `var(--gradient-warning-end, #b45309)`
  - Configures the gradient end setting
- `--gradient-start` - Default: `var(--gradient-info-start, #06b6d4)`
  - Configures the gradient start setting
- `--gradient-end` - Default: `var(--gradient-info-end, #0e7490)`
  - Configures the gradient end setting

## Keyframe Animations

### `@keyframes gradient-shift`
- Animates elements with the gradient shift effect
- Uses: background properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: gradient-shift`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance

