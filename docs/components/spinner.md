# Spinner
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for spinner elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.spinner`
- Description: Styling for spinner elements
- Uses: border, border-radius, border-top-color
- Creates: Styled spinner appearance

### Special Effects

#### `.spinner`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled spinner appearance

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
