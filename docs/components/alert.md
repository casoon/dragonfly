# Alert
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for alert elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.info`
- Description: Styling for info elements
- Uses: background-color, color properties
- Creates: Styled info appearance

#### `.success`
- Description: Styling for success elements
- Uses: background-color, color properties
- Creates: Styled success appearance

#### `.warning`
- Description: Styling for warning elements
- Uses: background-color, color properties
- Creates: Styled warning appearance

#### `.error`
- Description: Styling for error elements
- Uses: background-color, color properties
- Creates: Styled error appearance

#### `.icon`
- Description: Styling for icon elements
- Uses: flexbox properties
- Creates: Styled icon appearance

#### `.content`
- Description: Styling for content elements
- Uses: flexbox properties
- Creates: Styled content appearance

#### `.with-icon`
- Description: Styling for with icon elements
- Uses: padding-left properties
- Creates: Styled with icon appearance

### Variants

#### `.dismissible`
- Description: Styling for dismissible elements
- Uses: padding-right properties
- Creates: Styled dismissible appearance

### Special Effects

#### `.alert`
- Description: Applies smooth transitions between property states
- Uses: flex, transition, flexbox
- Creates: Flexible layout container for child elements

#### `.close`
- Description: Applies smooth transitions between property states
- Uses: transition, flexbox properties
- Creates: Styled close appearance

#### `.alert`
- Description: Animates the element using defined keyframes
- Uses: animation-duration, animation-name, animation-timing-function
- Creates: Styled alert appearance

#### `.animate`
- Description: Animates the element using defined keyframes
- Uses: animation-duration, animation-name, animation-timing-function
- Creates: Styled animate appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes alertFadeIn`
- Animates elements with the alertFadeIn effect
- Uses: opacity, transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: alertFadeIn`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
