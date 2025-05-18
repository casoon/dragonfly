# Light
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for light elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.light-spot`
- Description: Styling for light spot elements
- Uses: relative properties
- Creates: Styled light spot appearance

#### `.light-spot`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute, transform properties
- Creates: Element positioned precisely relative to its container

#### `.light-beam`
- Description: Styling for light beam elements
- Uses: relative properties
- Creates: Styled light beam appearance

#### `.light-beam`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute, transform properties
- Creates: Element positioned precisely relative to its container

#### `.light-ambient`
- Description: Styling for light ambient elements
- Uses: relative properties
- Creates: Styled light ambient appearance

#### `.light-ambient`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute properties
- Creates: Element positioned precisely relative to its container

### Interactive States

#### `.light-hover`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled light hover appearance

#### `.light-hover`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled light hover appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes light-move`
- Animates elements with the light move effect
- Uses: transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: light-move`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance

