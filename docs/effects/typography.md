# Typography
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for typography elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.text-shadow-glow`
- Description: Styling for text shadow glow elements
- Uses: text-shadow properties
- Creates: Styled text shadow glow appearance

#### `.text-shadow-neon`
- Description: Styling for text shadow neon elements
- Uses: text-shadow properties
- Creates: Styled text shadow neon appearance

#### `.text-gradient`
- Description: Styling for text gradient elements
- Uses: background, background-clip, color
- Creates: Styled text gradient appearance

#### `.text-outline`
- Description: Styling for text outline elements
- Uses: text-shadow properties
- Creates: Styled text outline appearance

### Variants

#### `.text-shadow-sm`
- Description: Styling for text shadow sm elements
- Uses: text-shadow properties
- Creates: Styled text shadow sm appearance

#### `.text-shadow-md`
- Description: Styling for text shadow md elements
- Uses: text-shadow properties
- Creates: Styled text shadow md appearance

#### `.text-shadow-lg`
- Description: Styling for text shadow lg elements
- Uses: text-shadow properties
- Creates: Styled text shadow lg appearance

#### `.text-stroke-sm`
- Description: Styling for text stroke sm elements
- Uses: -webkit-text-stroke properties
- Creates: Styled text stroke sm appearance

#### `.text-stroke-md`
- Description: Styling for text stroke md elements
- Uses: -webkit-text-stroke properties
- Creates: Styled text stroke md appearance

#### `.text-stroke-lg`
- Description: Styling for text stroke lg elements
- Uses: -webkit-text-stroke properties
- Creates: Styled text stroke lg appearance

#### `.text-blur-sm`
- Description: Styling for text blur sm elements
- Uses: filter properties
- Creates: Styled text blur sm appearance

#### `.text-blur-md`
- Description: Styling for text blur md elements
- Uses: filter properties
- Creates: Styled text blur md appearance

#### `.text-blur-lg`
- Description: Styling for text blur lg elements
- Uses: filter properties
- Creates: Styled text blur lg appearance

### Special Effects

#### `.text-shine`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled text shine appearance

#### `.text-shine`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled text shine appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes text-shine`
- Animates elements with the text shine effect
- Uses: background properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: text-shine`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance

