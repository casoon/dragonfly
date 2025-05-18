# Radio
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for radio elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.label`
- Description: Styling for label elements
- Uses: color, cursor properties
- Creates: Styled label appearance

#### `.radio-group`
- Description: Styling for radio group elements
- Uses: flex, flexbox properties
- Creates: Flexible layout container for child elements

#### `.horizontal`
- Description: Styling for horizontal elements
- Uses: flexbox properties
- Creates: Styled horizontal appearance

### Variants

#### `.sm`
- Description: Styling for sm elements
- Uses: font-size, height, width
- Creates: Styled sm appearance

#### `.lg`
- Description: Styling for lg elements
- Uses: font-size, height, width
- Creates: Styled lg appearance

### Special Effects

#### `.radio`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: inline-flex, relative, transform, transition
- Creates: Element positioned precisely relative to its container

## CSS Custom Properties (Variables)



## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
