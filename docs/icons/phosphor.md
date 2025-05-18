# Phosphor
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for phosphor elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.ph`
- Description: Styling for ph elements
- Uses: var, var properties
- Creates: Styled ph appearance

#### `.ph-icon`
- Description: Styling for ph icon elements
- Uses: var, var properties
- Creates: Styled ph icon appearance

#### `.ph-house`
- Description: Styling for ph house elements
- Uses: mask-image, data, http
- Creates: Styled ph house appearance

#### `.ph-list`
- Description: Styling for ph list elements
- Uses: mask-image, data, http
- Creates: Styled ph list appearance

#### `.ph-x`
- Description: Styling for ph x elements
- Uses: mask-image, data, http
- Creates: Styled ph x appearance

#### `.ph-magnifying-glass`
- Description: Styling for ph magnifying glass elements
- Uses: mask-image, data, http
- Creates: Styled ph magnifying glass appearance

#### `.ph-regular`
- Description: Styling for ph regular elements
- Uses: fill, stroke-width properties
- Creates: Styled ph regular appearance

#### `.ph-bold`
- Description: Styling for ph bold elements
- Uses: fill, stroke-width properties
- Creates: Styled ph bold appearance

#### `.ph-fill`
- Description: Styling for ph fill elements
- Uses: fill, stroke-width properties
- Creates: Styled ph fill appearance

#### `.ph-duotone`
- Description: Styling for ph duotone elements
- Uses: fill, opacity, stroke-width
- Creates: Styled ph duotone appearance

#### `.ph-xs`
- Description: Styling for ph xs elements
- Uses: height, width properties
- Creates: Styled ph xs appearance

#### `.ph-baseline`
- Description: Styling for ph baseline elements
- Uses: vertical-align properties
- Creates: Styled ph baseline appearance

#### `.ph-top`
- Description: Styling for ph top elements
- Uses: vertical-align properties
- Creates: Styled ph top appearance

#### `.ph-middle`
- Description: Styling for ph middle elements
- Uses: vertical-align properties
- Creates: Styled ph middle appearance

#### `.ph-bottom`
- Description: Styling for ph bottom elements
- Uses: vertical-align properties
- Creates: Styled ph bottom appearance

### Variants

#### `.ph-sm`
- Description: Styling for ph sm elements
- Uses: height, width properties
- Creates: Styled ph sm appearance

#### `.ph-lg`
- Description: Styling for ph lg elements
- Uses: height, width properties
- Creates: Styled ph lg appearance

#### `.ph-xl`
- Description: Styling for ph xl elements
- Uses: height, width properties
- Creates: Styled ph xl appearance

#### `.ph-2xl`
- Description: Styling for ph 2xl elements
- Uses: height, width properties
- Creates: Styled ph 2xl appearance

### Special Effects

#### `.ph-spin`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled ph spin appearance

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
