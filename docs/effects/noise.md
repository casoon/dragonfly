# Noise
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for noise elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.noise-film`
- Description: Styling for noise film elements
- Uses: background-image, data, http
- Creates: Styled noise film appearance

#### `.noise-digital`
- Description: Styling for noise digital elements
- Uses: background-image, data, http
- Creates: Styled noise digital appearance

#### `.noise-texture`
- Description: Styling for noise texture elements
- Uses: background-image, data, http
- Creates: Styled noise texture appearance

#### `.noise-grain`
- Description: Styling for noise grain elements
- Uses: background-image, data, http
- Creates: Styled noise grain appearance

#### `.noise-static`
- Description: Styling for noise static elements
- Uses: background-image, data, http
- Creates: Styled noise static appearance

### Special Effects

#### `.noise-animated`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled noise animated appearance

#### `.noise-animated`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled noise animated appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes noise-animation`
- Animates elements with the noise animation effect
- Uses: transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: noise-animation`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance

