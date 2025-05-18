# Skeleton
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for skeleton elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.skeleton-text`
- Description: Styling for skeleton text elements
- Uses: border-radius, height properties
- Creates: Styled skeleton text appearance

#### `.skeleton-circle`
- Description: Styling for skeleton circle elements
- Uses: aspect-ratio, border-radius properties
- Creates: Styled skeleton circle appearance

#### `.skeleton-square`
- Description: Styling for skeleton square elements
- Uses: aspect-ratio properties
- Creates: Styled skeleton square appearance

#### `.skeleton-image`
- Description: Styling for skeleton image elements
- Uses: aspect-ratio, border-radius properties
- Creates: Styled skeleton image appearance

#### `.skeleton-card`
- Description: Styling for skeleton card elements
- Uses: flex, flexbox properties
- Creates: Flexible layout container for child elements

#### `.skeleton-list`
- Description: Styling for skeleton list elements
- Uses: flex, flexbox properties
- Creates: Flexible layout container for child elements

#### `.skeleton-grid`
- Description: Controls grid layout behavior for the element
- Uses: grid, grid properties
- Creates: Grid-based layout for precise element positioning

### Variants

#### `.skeleton-sm`
- Description: Animates the element using defined keyframes
- Uses: animation-duration, background-size properties
- Creates: Styled skeleton sm appearance

#### `.skeleton-lg`
- Description: Animates the element using defined keyframes
- Uses: animation-duration, background-size properties
- Creates: Styled skeleton lg appearance

#### `.skeleton-text-sm`
- Description: Styling for skeleton text sm elements
- Uses: height properties
- Creates: Styled skeleton text sm appearance

#### `.skeleton-text-lg`
- Description: Styling for skeleton text lg elements
- Uses: height properties
- Creates: Styled skeleton text lg appearance

#### `.skeleton-circle-sm`
- Description: Styling for skeleton circle sm elements
- Uses: width properties
- Creates: Styled skeleton circle sm appearance

#### `.skeleton-circle-lg`
- Description: Styling for skeleton circle lg elements
- Uses: width properties
- Creates: Styled skeleton circle lg appearance

#### `.skeleton-square-sm`
- Description: Styling for skeleton square sm elements
- Uses: width properties
- Creates: Styled skeleton square sm appearance

#### `.skeleton-square-lg`
- Description: Styling for skeleton square lg elements
- Uses: width properties
- Creates: Styled skeleton square lg appearance

#### `.skeleton-image-sm`
- Description: Styling for skeleton image sm elements
- Uses: max-width properties
- Creates: Styled skeleton image sm appearance

#### `.skeleton-image-lg`
- Description: Styling for skeleton image lg elements
- Uses: max-width properties
- Creates: Styled skeleton image lg appearance

#### `.skeleton-card-sm`
- Description: Styling for skeleton card sm elements
- Uses: gap, padding properties
- Creates: Styled skeleton card sm appearance

#### `.skeleton-card-lg`
- Description: Styling for skeleton card lg elements
- Uses: gap, padding properties
- Creates: Styled skeleton card lg appearance

#### `.skeleton-list-sm`
- Description: Styling for skeleton list sm elements
- Uses: gap properties
- Creates: Styled skeleton list sm appearance

#### `.skeleton-list-lg`
- Description: Styling for skeleton list lg elements
- Uses: gap properties
- Creates: Styled skeleton list lg appearance

#### `.skeleton-grid-sm`
- Description: Controls grid layout behavior for the element
- Uses: grid properties
- Creates: Grid-based layout for precise element positioning

#### `.skeleton-grid-lg`
- Description: Controls grid layout behavior for the element
- Uses: grid properties
- Creates: Grid-based layout for precise element positioning

#### `.skeleton-sm`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled skeleton sm appearance

#### `.skeleton-lg`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled skeleton lg appearance

### Special Effects

#### `.skeleton`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled skeleton appearance

#### `.skeleton`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled skeleton appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes skeleton-loading`
- Animates elements with the skeleton loading effect
- Uses: background properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: skeleton-loading`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance

