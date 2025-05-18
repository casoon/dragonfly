# Feather
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for feather elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.feather`
- Description: Styling for feather elements
- Uses: var, var properties
- Creates: Styled feather appearance

#### `.feather-icon`
- Description: Styling for feather icon elements
- Uses: var, var properties
- Creates: Styled feather icon appearance

#### `.feather-xs`
- Description: Styling for feather xs elements
- Uses: height, width properties
- Creates: Styled feather xs appearance

#### `.feather-baseline`
- Description: Styling for feather baseline elements
- Uses: vertical-align properties
- Creates: Styled feather baseline appearance

#### `.feather-top`
- Description: Styling for feather top elements
- Uses: vertical-align properties
- Creates: Styled feather top appearance

#### `.feather-middle`
- Description: Styling for feather middle elements
- Uses: vertical-align properties
- Creates: Styled feather middle appearance

#### `.feather-bottom`
- Description: Styling for feather bottom elements
- Uses: vertical-align properties
- Creates: Styled feather bottom appearance

#### `.fe-home`
- Description: Styling for fe home elements
- Uses: mask-image, data, http
- Creates: Styled fe home appearance

#### `.fe-menu`
- Description: Styling for fe menu elements
- Uses: mask-image, data, http
- Creates: Styled fe menu appearance

#### `.fe-x`
- Description: Styling for fe x elements
- Uses: mask-image, data, http
- Creates: Styled fe x appearance

#### `.fe-search`
- Description: Styling for fe search elements
- Uses: mask-image, data, http
- Creates: Styled fe search appearance

### Variants

#### `.feather-sm`
- Description: Styling for feather sm elements
- Uses: height, width properties
- Creates: Styled feather sm appearance

#### `.feather-lg`
- Description: Styling for feather lg elements
- Uses: height, width properties
- Creates: Styled feather lg appearance

#### `.feather-xl`
- Description: Styling for feather xl elements
- Uses: height, width properties
- Creates: Styled feather xl appearance

#### `.feather-2xl`
- Description: Styling for feather 2xl elements
- Uses: height, width properties
- Creates: Styled feather 2xl appearance

### Special Effects

#### `.feather-spin`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled feather spin appearance

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
