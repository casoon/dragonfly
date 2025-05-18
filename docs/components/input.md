# Input
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for input elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.invalid`
- Description: Styling for invalid elements
- Uses: background-color, border-color properties
- Creates: Styled invalid appearance

#### `.primary`
- Description: Styling for primary elements
- Uses: border-color properties
- Creates: Styled primary appearance

#### `.success`
- Description: Styling for success elements
- Uses: border-color properties
- Creates: Styled success appearance

#### `.warning`
- Description: Styling for warning elements
- Uses: border-color properties
- Creates: Styled warning appearance

#### `.danger`
- Description: Styling for danger elements
- Uses: border-color properties
- Creates: Styled danger appearance

#### `.input-wrapper`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: flex, relative properties
- Creates: Flexible layout container for child elements

#### `.input`
- Description: Styling for input elements
- Uses: padding-left properties
- Creates: Styled input appearance

#### `.input-icon`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute properties
- Creates: Element positioned precisely relative to its container

### Variants

#### `.sm`
- Description: Styling for sm elements
- Uses: font-size, padding properties
- Creates: Styled sm appearance

#### `.lg`
- Description: Styling for lg elements
- Uses: font-size, padding properties
- Creates: Styled lg appearance

### Special Effects

#### `.input`
- Description: Applies smooth transitions between property states
- Uses: block, transition properties
- Creates: Styled input appearance

## CSS Custom Properties (Variables)



## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
