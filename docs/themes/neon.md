# Neon
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for neon elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.neon-text-secondary`
- Description: Styling for neon text secondary elements
- Uses: color, text-shadow properties
- Creates: Styled neon text secondary appearance

#### `.neon-text-accent`
- Description: Styling for neon text accent elements
- Uses: color, text-shadow properties
- Creates: Styled neon text accent appearance

#### `.neon-border-secondary`
- Description: Styling for neon border secondary elements
- Uses: border, box-shadow properties
- Creates: Styled neon border secondary appearance

#### `.neon-border-accent`
- Description: Styling for neon border accent elements
- Uses: border, box-shadow properties
- Creates: Styled neon border accent appearance

#### `.glow`
- Description: Styling for glow elements
- Uses: color, text-shadow properties
- Creates: Styled glow appearance

#### `.glow-button`
- Description: Styling for glow button elements
- Uses: relative properties
- Creates: Styled glow button appearance

#### `.neon-sign`
- Description: Styling for neon sign elements
- Uses: font-size, padding properties
- Creates: Styled neon sign appearance

#### `.neon-border`
- Description: Styling for neon border elements
- Uses: border-width properties
- Creates: Styled neon border appearance

#### `.neon-box`
- Description: Styling for neon box elements
- Uses: aspect-ratio, height, width
- Creates: Styled neon box appearance

### Interactive States

#### `.neon-text-hover`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled neon text hover appearance

#### `.neon-text-hover`
- Description: Styling applied when the user hovers over the element
- Uses: text-shadow properties
- Creates: Styled neon text hover appearance

### Special Effects

#### `.neon-text`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled neon text appearance

#### `.neon-border`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled neon border appearance

#### `.neon-text-slow`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled neon text slow appearance

#### `.neon-text-fast`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled neon text fast appearance

#### `.neon-text-flicker`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled neon text flicker appearance

#### `.flicker-element`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled flicker element appearance

#### `.flicker-fast`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled flicker fast appearance

#### `.flicker-slow`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled flicker slow appearance

#### `.neon-text`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled neon text appearance

#### `.neon-border`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled neon border appearance

#### `.flicker-element`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled flicker element appearance

#### `.flicker-fast`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled flicker fast appearance

#### `.flicker-slow`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled flicker slow appearance

## CSS Custom Properties (Variables)

### Color Variables
- `--glow-color` - Default: `#0ff`
  - Controls the color value for glow color elements
- `--glow-button-color` - Default: `#ff00ff`
  - Controls the color value for glow button color elements

## Keyframe Animations

### `@keyframes neon-pulse`
- Animates size or opacity to create a pulsing effect
- Uses: opacity properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: neon-pulse`

### `@keyframes neon-flicker`
- Animates elements with the neon flicker effect
- Uses: color properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: neon-flicker`

### `@keyframes flicker`
- Animates elements with the flicker effect
- Uses: opacity properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: flicker`

## Responsive / Media Behavior

### `@media (width <= 640px)`
- Adjusts layout and styling for specific screen conditions

