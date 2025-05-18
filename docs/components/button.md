# Button
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for button elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.secondary`
- Description: Styling for secondary elements
- Uses: background-color, background-color properties
- Creates: Styled secondary appearance

#### `.outline`
- Description: Styling for outline elements
- Uses: background-color, border, color
- Creates: Styled outline appearance

#### `.fluid`
- Description: Styling for fluid elements
- Uses: font-size, min-width, font-size
- Creates: Styled fluid appearance

#### `.loading`
- Description: Styling for loading elements
- Uses: relative properties
- Creates: Styled loading appearance

#### `.with-icon`
- Description: Styling for with icon elements
- Uses: inline-flex properties
- Creates: Styled with icon appearance

#### `.icon`
- Description: Styling for icon elements
- Uses: inline-flex properties
- Creates: Styled icon appearance

#### `.icon-only`
- Description: Styling for icon only elements
- Uses: aspect-ratio, padding, height
- Creates: Styled icon only appearance

#### `.icon`
- Description: Styling for icon elements
- Uses: height, width properties
- Creates: Styled icon appearance

### Variants

#### `.sm`
- Description: Styling for sm elements
- Uses: font-size, padding-block, padding-inline
- Creates: Styled sm appearance

#### `.lg`
- Description: Styling for lg elements
- Uses: font-size, padding-block, padding-inline
- Creates: Styled lg appearance

### Special Effects

#### `.button`
- Description: Applies smooth transitions between property states
- Uses: inline-flex, relative, transition
- Creates: Styled button appearance

#### `.button`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute, animation properties
- Creates: Element positioned precisely relative to its container

#### `.loading`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute, animation properties
- Creates: Element positioned precisely relative to its container

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
