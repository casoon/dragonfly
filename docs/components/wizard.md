# Wizard
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for wizard elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.steps`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: flex, relative properties
- Creates: Flexible layout container for child elements

#### `.step`
- Description: Hides the element by removing it from the layout flow
- Uses: flex, relative, flexbox
- Creates: Invisible element that doesn't take up space

#### `.indicator`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: flex, absolute properties
- Creates: Flexible layout container for child elements

#### `.title`
- Description: Styling for title elements
- Uses: color, font-size, font-weight
- Creates: Styled title appearance

#### `.description`
- Description: Styling for description elements
- Uses: color, font-size, margin-top
- Creates: Styled description appearance

#### `.indicator`
- Description: Styling for indicator elements
- Uses: background-color, border-color, color
- Creates: Styled indicator appearance

#### `.title`
- Description: Styling for title elements
- Uses: color, font-weight properties
- Creates: Styled title appearance

#### `.completed`
- Description: Hides the element by removing it from the layout flow
- Uses: none, absolute properties
- Creates: Invisible element that doesn't take up space

#### `.indicator`
- Description: Styling for indicator elements
- Uses: background-color, border-color, color
- Creates: Styled indicator appearance

#### `.error`
- Description: Styling for error elements
- Uses: background-color, border-color, color
- Creates: Styled error appearance

#### `.indicator`
- Description: Styling for indicator elements
- Uses: background-color, border-color, color
- Creates: Styled indicator appearance

#### `.title`
- Description: Styling for title elements
- Uses: color properties
- Creates: Styled title appearance

#### `.disabled`
- Description: Styling for disabled elements
- Uses: cursor, opacity properties
- Creates: Styled disabled appearance

#### `.content`
- Description: Styling for content elements
- Uses: background-color, border, border-radius
- Creates: Styled content appearance

#### `.actions`
- Description: Styling for actions elements
- Uses: flex, flexbox properties
- Creates: Flexible layout container for child elements

#### `.end`
- Description: Styling for end elements
- Uses: flexbox properties
- Creates: Styled end appearance

#### `.vertical`
- Description: Styling for vertical elements
- Uses: flexbox properties
- Creates: Styled vertical appearance

#### `.steps`
- Description: Styling for steps elements
- Uses: flexbox properties
- Creates: Styled steps appearance

#### `.step`
- Description: Styling for step elements
- Uses: flexbox properties
- Creates: Styled step appearance

#### `.indicator`
- Description: Styling for indicator elements
- Uses: left, top properties
- Creates: Styled indicator appearance

#### `.completed`
- Description: Styling for completed elements
- Uses: height, left, top
- Creates: Styled completed appearance

#### `.content`
- Description: Styling for content elements
- Uses: flexbox properties
- Creates: Styled content appearance

### Interactive States

#### `.active`
- Description: Styling for active elements
- Uses: background-color, border-color, color
- Creates: Styled active appearance

### Special Effects

#### `.wizard`
- Description: Hides the element by removing it from the layout flow
- Uses: flex, relative, transition, flexbox
- Creates: Invisible element that doesn't take up space

#### `.with-progress`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled with progress appearance

#### `.progress-bar`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled progress bar appearance

#### `.fill`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled fill appearance

## CSS Custom Properties (Variables)

### Size Variables
- `--step-size` - Default: `2rem`
  - Defines the step size dimension

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
