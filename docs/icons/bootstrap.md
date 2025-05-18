# Bootstrap
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for bootstrap elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.bi`
- Description: Styling for bi elements
- Uses: var, var properties
- Creates: Styled bi appearance

#### `.bi-icon`
- Description: Styling for bi icon elements
- Uses: var, var properties
- Creates: Styled bi icon appearance

#### `.bi-house`
- Description: Styling for bi house elements
- Uses: mask-image, data, http
- Creates: Styled bi house appearance

#### `.bi-list`
- Description: Styling for bi list elements
- Uses: mask-image, data, http
- Creates: Styled bi list appearance

#### `.bi-x`
- Description: Styling for bi x elements
- Uses: mask-image, data, http
- Creates: Styled bi x appearance

#### `.bi-search`
- Description: Styling for bi search elements
- Uses: mask-image, data, http
- Creates: Styled bi search appearance

#### `.bi-xs`
- Description: Styling for bi xs elements
- Uses: height, width properties
- Creates: Styled bi xs appearance

#### `.bi-baseline`
- Description: Styling for bi baseline elements
- Uses: vertical-align properties
- Creates: Styled bi baseline appearance

#### `.bi-top`
- Description: Styling for bi top elements
- Uses: vertical-align properties
- Creates: Styled bi top appearance

#### `.bi-middle`
- Description: Styling for bi middle elements
- Uses: vertical-align properties
- Creates: Styled bi middle appearance

#### `.bi-bottom`
- Description: Styling for bi bottom elements
- Uses: vertical-align properties
- Creates: Styled bi bottom appearance

### Variants

#### `.bi-sm`
- Description: Styling for bi sm elements
- Uses: height, width properties
- Creates: Styled bi sm appearance

#### `.bi-lg`
- Description: Styling for bi lg elements
- Uses: height, width properties
- Creates: Styled bi lg appearance

#### `.bi-xl`
- Description: Styling for bi xl elements
- Uses: height, width properties
- Creates: Styled bi xl appearance

#### `.bi-2xl`
- Description: Styling for bi 2xl elements
- Uses: height, width properties
- Creates: Styled bi 2xl appearance

### Special Effects

#### `.bi-spin`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled bi spin appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes spin`
- Animates elements with the spin effect
- Uses: transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: spin`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
