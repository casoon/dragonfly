# Switch
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for switch elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.toggle`
- Description: Styling for toggle elements
- Uses: outline, outline-offset properties
- Creates: Styled toggle appearance

#### `.toggle`
- Description: Applies visual transformation effects to the element
- Uses: transform properties
- Creates: Shifted element with altered position

#### `.toggle`
- Description: Styling for toggle elements
- Uses: background-color, cursor, opacity
- Creates: Styled toggle appearance

#### `.label`
- Description: Styling for label elements
- Uses: color, cursor properties
- Creates: Styled label appearance

#### `.toggle`
- Description: Styling for toggle elements
- Uses: background-color properties
- Creates: Styled toggle appearance

#### `.toggle`
- Description: Styling for toggle elements
- Uses: background-color properties
- Creates: Styled toggle appearance

#### `.toggle`
- Description: Styling for toggle elements
- Uses: background-color properties
- Creates: Styled toggle appearance

#### `.toggle`
- Description: Styling for toggle elements
- Uses: background-color properties
- Creates: Styled toggle appearance

#### `.checked`
- Description: Applies visual transformation effects to the element
- Uses: transform properties
- Creates: Shifted element with altered position

#### `.toggle`
- Description: Applies visual transformation effects to the element
- Uses: transform properties
- Creates: Shifted element with altered position

### Variants

#### `.sm`
- Description: Styling for sm elements
- Uses: --switch-width, --switch-height, font-size
- Creates: Styled sm appearance

#### `.lg`
- Description: Styling for lg elements
- Uses: --switch-width, --switch-height, font-size
- Creates: Styled lg appearance

### Special Effects

#### `.switch`
- Description: Makes the element fully transparent but still interactive
- Uses: inline-flex, relative, transform, transition
- Creates: Element positioned precisely relative to its container

#### `.toggle`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: inline-block, relative, transition
- Creates: Element positioned precisely relative to its container

## CSS Custom Properties (Variables)

### Size Variables
- `--switch-width` - Default: `2rem`
  - Defines the switch width dimension
- `--switch-height` - Default: `1rem`
  - Defines the switch height dimension
- `--switch-width` - Default: `3.5rem`
  - Defines the switch width dimension
- `--switch-height` - Default: `1.75rem`
  - Defines the switch height dimension

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
