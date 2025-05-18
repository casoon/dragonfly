# Toast
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for toast elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.toast`
- Description: Styling for toast elements
- Uses: flex, fixed, flexbox
- Creates: Flexible layout container for child elements

#### `.content`
- Description: Styling for content elements
- Uses: flexbox properties
- Creates: Styled content appearance

#### `.icon`
- Description: Styling for icon elements
- Uses: flexbox properties
- Creates: Styled icon appearance

#### `.close`
- Description: Styling for close elements
- Uses: flexbox properties
- Creates: Styled close appearance

#### `.success`
- Description: Styling for success elements
- Uses: background-color properties
- Creates: Styled success appearance

#### `.error`
- Description: Styling for error elements
- Uses: background-color properties
- Creates: Styled error appearance

#### `.warning`
- Description: Styling for warning elements
- Uses: background-color, color properties
- Creates: Styled warning appearance

#### `.info`
- Description: Styling for info elements
- Uses: background-color properties
- Creates: Styled info appearance

#### `.top-right`
- Description: Styling for top right elements
- Uses: right, top properties
- Creates: Styled top right appearance

#### `.top-left`
- Description: Styling for top left elements
- Uses: left, top properties
- Creates: Styled top left appearance

#### `.bottom-right`
- Description: Styling for bottom right elements
- Uses: bottom, right properties
- Creates: Styled bottom right appearance

#### `.bottom-left`
- Description: Styling for bottom left elements
- Uses: bottom, left properties
- Creates: Styled bottom left appearance

### Special Effects

#### `.toast`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled toast appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes toast-slide-in`
- Animates position to create a sliding movement
- Uses: opacity, transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: toast-slide-in`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
