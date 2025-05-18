# Code
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for code elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.code-inline`
- Description: Styling for code inline elements
- Uses: background, border-radius, color
- Creates: Styled code inline appearance

#### `.code`
- Description: Styling for code elements
- Uses: block, grid properties
- Creates: Grid-based layout for precise element positioning

#### `.numbered`
- Description: Styling for numbered elements
- Uses: grid, grid properties
- Creates: Grid-based layout for precise element positioning

#### `.line-numbers`
- Description: Styling for line numbers elements
- Uses: border-right, color, padding-right
- Creates: Styled line numbers appearance

#### `.dark`
- Description: Styling for dark elements
- Uses: background-color, border-color, color
- Creates: Styled dark appearance

#### `.light`
- Description: Styling for light elements
- Uses: background-color, border-color, color
- Creates: Styled light appearance

#### `.terminal`
- Description: Styling for terminal elements
- Uses: background-color, border-color, color
- Creates: Styled terminal appearance

#### `.highlighted`
- Description: Styling for highlighted elements
- Uses: color, color, color
- Creates: Styled highlighted appearance

#### `.keyword`
- Description: Styling for keyword elements
- Uses: color properties
- Creates: Styled keyword appearance

#### `.string`
- Description: Styling for string elements
- Uses: color properties
- Creates: Styled string appearance

#### `.comment`
- Description: Styling for comment elements
- Uses: color, font-style properties
- Creates: Styled comment appearance

#### `.function`
- Description: Styling for function elements
- Uses: color properties
- Creates: Styled function appearance

#### `.number`
- Description: Styling for number elements
- Uses: color properties
- Creates: Styled number appearance

#### `.copy-button`
- Description: Styling for copy button elements
- Uses: opacity properties
- Creates: Styled copy button appearance

### Special Effects

#### `.code-container`
- Description: Makes the element fully transparent but still interactive
- Uses: relative, transition properties
- Creates: Element positioned precisely relative to its container

#### `.copy-button`
- Description: Makes the element fully transparent but still interactive
- Uses: absolute, transition properties
- Creates: Element positioned precisely relative to its container

## CSS Custom Properties (Variables)



## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
