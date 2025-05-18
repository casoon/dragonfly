# Lucide
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for lucide elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.lucide`
- Description: Styling for lucide elements
- Uses: var, var properties
- Creates: Styled lucide appearance

#### `.lucide-icon`
- Description: Styling for lucide icon elements
- Uses: var, var properties
- Creates: Styled lucide icon appearance

#### `.lu-home`
- Description: Styling for lu home elements
- Uses: mask-image, data, http
- Creates: Styled lu home appearance

#### `.lu-menu`
- Description: Styling for lu menu elements
- Uses: mask-image, data, http
- Creates: Styled lu menu appearance

#### `.lu-x`
- Description: Styling for lu x elements
- Uses: mask-image, data, http
- Creates: Styled lu x appearance

#### `.lu-search`
- Description: Styling for lu search elements
- Uses: mask-image, data, http
- Creates: Styled lu search appearance

#### `.lucide-xs`
- Description: Styling for lucide xs elements
- Uses: height, width properties
- Creates: Styled lucide xs appearance

#### `.lucide-baseline`
- Description: Styling for lucide baseline elements
- Uses: vertical-align properties
- Creates: Styled lucide baseline appearance

#### `.lucide-top`
- Description: Styling for lucide top elements
- Uses: vertical-align properties
- Creates: Styled lucide top appearance

#### `.lucide-middle`
- Description: Styling for lucide middle elements
- Uses: vertical-align properties
- Creates: Styled lucide middle appearance

#### `.lucide-bottom`
- Description: Styling for lucide bottom elements
- Uses: vertical-align properties
- Creates: Styled lucide bottom appearance

### Variants

#### `.lucide-sm`
- Description: Styling for lucide sm elements
- Uses: height, width properties
- Creates: Styled lucide sm appearance

#### `.lucide-lg`
- Description: Styling for lucide lg elements
- Uses: height, width properties
- Creates: Styled lucide lg appearance

#### `.lucide-xl`
- Description: Styling for lucide xl elements
- Uses: height, width properties
- Creates: Styled lucide xl appearance

#### `.lucide-2xl`
- Description: Styling for lucide 2xl elements
- Uses: height, width properties
- Creates: Styled lucide 2xl appearance

### Special Effects

#### `.lucide-spin`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled lucide spin appearance

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
