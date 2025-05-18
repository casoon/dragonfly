# Widget
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for widget elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.widget`
- Description: Hides the element by removing it from the layout flow
- Uses: flex, relative properties
- Creates: Invisible element that doesn't take up space

#### `.header`
- Description: Styling for header elements
- Uses: flex properties
- Creates: Flexible layout container for child elements

#### `.title`
- Description: Styling for title elements
- Uses: font-size, font-weight, margin
- Creates: Styled title appearance

#### `.actions`
- Description: Styling for actions elements
- Uses: flex properties
- Creates: Flexible layout container for child elements

#### `.action`
- Description: Styling for action elements
- Uses: background, border, border-radius
- Creates: Styled action appearance

#### `.body`
- Description: Styling for body elements
- Uses: padding properties
- Creates: Styled body appearance

#### `.footer`
- Description: Styling for footer elements
- Uses: background-color, border-top, color
- Creates: Styled footer appearance

#### `.primary`
- Description: Styling for primary elements
- Uses: border-color, background-color, color
- Creates: Styled primary appearance

#### `.header`
- Description: Styling for header elements
- Uses: background-color, color properties
- Creates: Styled header appearance

#### `.secondary`
- Description: Styling for secondary elements
- Uses: border-color, background-color, color
- Creates: Styled secondary appearance

#### `.header`
- Description: Styling for header elements
- Uses: background-color, color properties
- Creates: Styled header appearance

#### `.light`
- Description: Styling for light elements
- Uses: background-color, border-color, background-color
- Creates: Styled light appearance

#### `.header`
- Description: Styling for header elements
- Uses: background-color, border-bottom-color properties
- Creates: Styled header appearance

#### `.dark`
- Description: Styling for dark elements
- Uses: background-color, border-color, color
- Creates: Styled dark appearance

#### `.header`
- Description: Styling for header elements
- Uses: background-color, border-bottom-color properties
- Creates: Styled header appearance

#### `.footer`
- Description: Styling for footer elements
- Uses: background-color, border-top-color, color
- Creates: Styled footer appearance

#### `.header`
- Description: Styling for header elements
- Uses: padding, font-size properties
- Creates: Styled header appearance

#### `.title`
- Description: Styling for title elements
- Uses: font-size properties
- Creates: Styled title appearance

#### `.body`
- Description: Styling for body elements
- Uses: padding properties
- Creates: Styled body appearance

#### `.footer`
- Description: Styling for footer elements
- Uses: font-size, padding properties
- Creates: Styled footer appearance

#### `.header`
- Description: Styling for header elements
- Uses: padding, font-size properties
- Creates: Styled header appearance

#### `.title`
- Description: Styling for title elements
- Uses: font-size properties
- Creates: Styled title appearance

#### `.body`
- Description: Styling for body elements
- Uses: padding properties
- Creates: Styled body appearance

#### `.footer`
- Description: Styling for footer elements
- Uses: padding properties
- Creates: Styled footer appearance

#### `.full`
- Description: Styling for full elements
- Uses: width properties
- Creates: Styled full appearance

#### `.loading`
- Description: Styling for loading elements
- Uses: relative properties
- Creates: Styled loading appearance

#### `.collapsed`
- Description: Hides the element by removing it from the layout flow
- Uses: none properties
- Creates: Invisible element that doesn't take up space

#### `.body`
- Description: Hides the element by removing it from the layout flow
- Uses: none properties
- Creates: Invisible element that doesn't take up space

#### `.footer`
- Description: Hides the element by removing it from the layout flow
- Uses: none properties
- Creates: Invisible element that doesn't take up space

#### `.header`
- Description: Styling for header elements
- Uses: border-bottom properties
- Creates: Styled header appearance

#### `.highlight`
- Description: Styling for highlight elements
- Uses: background-color, border-color properties
- Creates: Styled highlight appearance

### Variants

#### `.sm`
- Description: Styling for sm elements
- Uses: padding, font-size, padding
- Creates: Styled sm appearance

#### `.lg`
- Description: Styling for lg elements
- Uses: padding, font-size, padding
- Creates: Styled lg appearance

### Special Effects

#### `.widget`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute, animation properties
- Creates: Element positioned precisely relative to its container

#### `.loading`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute, animation properties
- Creates: Element positioned precisely relative to its container

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes loading`
- Animates elements with the loading effect
- Uses: transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: loading`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
