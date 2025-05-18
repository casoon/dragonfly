# Base
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for base elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.icon`
- Description: Styling for icon elements
- Uses: inline-block properties
- Creates: Styled icon appearance

#### `.icon-xs`
- Description: Styling for icon xs elements
- Uses: height, width properties
- Creates: Styled icon xs appearance

#### `.icon-baseline`
- Description: Styling for icon baseline elements
- Uses: vertical-align properties
- Creates: Styled icon baseline appearance

#### `.icon-top`
- Description: Styling for icon top elements
- Uses: vertical-align properties
- Creates: Styled icon top appearance

#### `.icon-middle`
- Description: Styling for icon middle elements
- Uses: vertical-align properties
- Creates: Styled icon middle appearance

#### `.icon-bottom`
- Description: Styling for icon bottom elements
- Uses: vertical-align properties
- Creates: Styled icon bottom appearance

### Variants

#### `.icon-sm`
- Description: Styling for icon sm elements
- Uses: height, width properties
- Creates: Styled icon sm appearance

#### `.icon-lg`
- Description: Styling for icon lg elements
- Uses: height, width properties
- Creates: Styled icon lg appearance

#### `.icon-xl`
- Description: Styling for icon xl elements
- Uses: height, width properties
- Creates: Styled icon xl appearance

#### `.icon-2xl`
- Description: Styling for icon 2xl elements
- Uses: height, width properties
- Creates: Styled icon 2xl appearance

### Special Effects

#### `.icon-spin`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled icon spin appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes icon-spin`
- Animates elements with the icon spin effect
- Uses: transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: icon-spin`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
