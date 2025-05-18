# Progress
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for progress elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.label`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute, transform properties
- Creates: Element positioned precisely relative to its container

#### `.bar`
- Description: Styling for bar elements
- Uses: background-color properties
- Creates: Styled bar appearance

#### `.bar`
- Description: Styling for bar elements
- Uses: background-color properties
- Creates: Styled bar appearance

#### `.bar`
- Description: Styling for bar elements
- Uses: background-color properties
- Creates: Styled bar appearance

#### `.bar`
- Description: Styling for bar elements
- Uses: background-color properties
- Creates: Styled bar appearance

#### `.label`
- Description: Styling for label elements
- Uses: font-size properties
- Creates: Styled label appearance

#### `.label`
- Description: Styling for label elements
- Uses: font-size properties
- Creates: Styled label appearance

#### `.bar`
- Description: Styling for bar elements
- Uses: background-image, background-size properties
- Creates: Styled bar appearance

#### `.progress-steps`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: flex, relative, transform, flexbox
- Creates: Flexible layout container for child elements

#### `.step`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: relative, transform, flexbox
- Creates: Element positioned precisely relative to its container

#### `.completed`
- Description: Styling for completed elements
- Uses: color, background-color, border-color
- Creates: Styled completed appearance

### Variants

#### `.sm`
- Description: Styling for sm elements
- Uses: height, font-size properties
- Creates: Styled sm appearance

#### `.md`
- Description: Styling for md elements
- Uses: height properties
- Creates: Styled md appearance

#### `.lg`
- Description: Styling for lg elements
- Uses: height, font-size properties
- Creates: Styled lg appearance

### Interactive States

#### `.active`
- Description: Styling for active elements
- Uses: color, background-color, border-color
- Creates: Styled active appearance

### Special Effects

#### `.progress`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: relative, transform, transition
- Creates: Element positioned precisely relative to its container

#### `.bar`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled bar appearance

#### `.progress`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled progress appearance

#### `.bar`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled bar appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes progress-animation`
- Animates elements with the progress animation effect
- Uses: background properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: progress-animation`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
