# Glow
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for glow elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.glow-text`
- Description: Styling for glow text elements
- Uses: text-shadow properties
- Creates: Styled glow text appearance

#### `.glow-border`
- Description: Styling for glow border elements
- Uses: border, box-shadow properties
- Creates: Styled glow border appearance

#### `.glow-strong`
- Description: Styling for glow strong elements
- Uses: box-shadow properties
- Creates: Styled glow strong appearance

#### `.glow-soft`
- Description: Styling for glow soft elements
- Uses: box-shadow, filter properties
- Creates: Styled glow soft appearance

### Interactive States

#### `.glow-hover`
- Description: Styling applied when the user hovers over the element
- Uses: box-shadow properties
- Creates: Styled glow hover appearance

#### `.glow-hover`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled glow hover appearance

### Special Effects

#### `.glow`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled glow appearance

#### `.glow-pulse`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled glow pulse appearance

#### `.glow-pulse`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled glow pulse appearance

#### `.glow`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled glow appearance

#### `.glow-text`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled glow text appearance

#### `.glow-border`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled glow border appearance

#### `.glow-strong`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled glow strong appearance

#### `.glow-soft`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled glow soft appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes glow-pulse`
- Animates size or opacity to create a pulsing effect
- Uses: color properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: glow-pulse`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance

