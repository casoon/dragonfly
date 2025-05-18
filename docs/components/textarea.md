# Textarea
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for textarea elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.error`
- Description: Styling for error elements
- Uses: background-color, border-color, box-shadow
- Creates: Styled error appearance

#### `.success`
- Description: Styling for success elements
- Uses: background-color, border-color, box-shadow
- Creates: Styled success appearance

#### `.readonly`
- Description: Styling for readonly elements
- Uses: background-color, cursor properties
- Creates: Styled readonly appearance

#### `.auto-resize`
- Description: Styling for auto resize elements
- Uses: overflow-y properties
- Creates: Styled auto resize appearance

#### `.textarea-container`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: relative properties
- Creates: Element positioned precisely relative to its container

#### `.counter`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute properties
- Creates: Element positioned precisely relative to its container

#### `.textarea`
- Description: Styling for textarea elements
- Uses: padding-bottom properties
- Creates: Styled textarea appearance

### Variants

#### `.sm`
- Description: Styling for sm elements
- Uses: font-size, min-height, padding
- Creates: Styled sm appearance

#### `.lg`
- Description: Styling for lg elements
- Uses: font-size, min-height, padding
- Creates: Styled lg appearance

### Special Effects

#### `.textarea`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled textarea appearance

## CSS Custom Properties (Variables)



## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
