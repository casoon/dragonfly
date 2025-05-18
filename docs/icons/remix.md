# Remix
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for remix elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.ri`
- Description: Styling for ri elements
- Uses: var, var properties
- Creates: Styled ri appearance

#### `.ri-icon`
- Description: Styling for ri icon elements
- Uses: var, var properties
- Creates: Styled ri icon appearance

#### `.ri-home`
- Description: Styling for ri home elements
- Uses: mask-image, data, http
- Creates: Styled ri home appearance

#### `.ri-menu`
- Description: Styling for ri menu elements
- Uses: mask-image, data, http
- Creates: Styled ri menu appearance

#### `.ri-close`
- Description: Styling for ri close elements
- Uses: mask-image, data, http
- Creates: Styled ri close appearance

#### `.ri-search`
- Description: Styling for ri search elements
- Uses: mask-image, data, http
- Creates: Styled ri search appearance

#### `.ri-line`
- Description: Styling for ri line elements
- Uses: fill, stroke-width properties
- Creates: Styled ri line appearance

#### `.ri-fill`
- Description: Styling for ri fill elements
- Uses: fill, stroke-width properties
- Creates: Styled ri fill appearance

#### `.ri-dual`
- Description: Styling for ri dual elements
- Uses: fill, opacity, stroke-width
- Creates: Styled ri dual appearance

#### `.ri-xs`
- Description: Styling for ri xs elements
- Uses: height, width properties
- Creates: Styled ri xs appearance

#### `.ri-baseline`
- Description: Styling for ri baseline elements
- Uses: vertical-align properties
- Creates: Styled ri baseline appearance

#### `.ri-top`
- Description: Styling for ri top elements
- Uses: vertical-align properties
- Creates: Styled ri top appearance

#### `.ri-middle`
- Description: Styling for ri middle elements
- Uses: vertical-align properties
- Creates: Styled ri middle appearance

#### `.ri-bottom`
- Description: Styling for ri bottom elements
- Uses: vertical-align properties
- Creates: Styled ri bottom appearance

### Variants

#### `.ri-sm`
- Description: Styling for ri sm elements
- Uses: height, width properties
- Creates: Styled ri sm appearance

#### `.ri-lg`
- Description: Styling for ri lg elements
- Uses: height, width properties
- Creates: Styled ri lg appearance

#### `.ri-xl`
- Description: Styling for ri xl elements
- Uses: height, width properties
- Creates: Styled ri xl appearance

#### `.ri-2xl`
- Description: Styling for ri 2xl elements
- Uses: height, width properties
- Creates: Styled ri 2xl appearance

### Special Effects

#### `.ri-spin`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled ri spin appearance

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
