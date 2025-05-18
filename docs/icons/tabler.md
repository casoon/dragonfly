# Tabler
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for tabler elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.ti`
- Description: Styling for ti elements
- Uses: var, var properties
- Creates: Styled ti appearance

#### `.ti-icon`
- Description: Styling for ti icon elements
- Uses: var, var properties
- Creates: Styled ti icon appearance

#### `.ti-home`
- Description: Styling for ti home elements
- Uses: mask-image, data, http
- Creates: Styled ti home appearance

#### `.ti-menu`
- Description: Styling for ti menu elements
- Uses: mask-image, data, http
- Creates: Styled ti menu appearance

#### `.ti-x`
- Description: Styling for ti x elements
- Uses: mask-image, data, http
- Creates: Styled ti x appearance

#### `.ti-search`
- Description: Styling for ti search elements
- Uses: mask-image, data, http
- Creates: Styled ti search appearance

#### `.ti-xs`
- Description: Styling for ti xs elements
- Uses: height, width properties
- Creates: Styled ti xs appearance

#### `.ti-baseline`
- Description: Styling for ti baseline elements
- Uses: vertical-align properties
- Creates: Styled ti baseline appearance

#### `.ti-top`
- Description: Styling for ti top elements
- Uses: vertical-align properties
- Creates: Styled ti top appearance

#### `.ti-middle`
- Description: Styling for ti middle elements
- Uses: vertical-align properties
- Creates: Styled ti middle appearance

#### `.ti-bottom`
- Description: Styling for ti bottom elements
- Uses: vertical-align properties
- Creates: Styled ti bottom appearance

### Variants

#### `.ti-sm`
- Description: Styling for ti sm elements
- Uses: height, width properties
- Creates: Styled ti sm appearance

#### `.ti-lg`
- Description: Styling for ti lg elements
- Uses: height, width properties
- Creates: Styled ti lg appearance

#### `.ti-xl`
- Description: Styling for ti xl elements
- Uses: height, width properties
- Creates: Styled ti xl appearance

#### `.ti-2xl`
- Description: Styling for ti 2xl elements
- Uses: height, width properties
- Creates: Styled ti 2xl appearance

### Special Effects

#### `.ti-spin`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled ti spin appearance

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
