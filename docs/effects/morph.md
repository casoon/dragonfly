# Morph
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for morph elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.morph`
- Description: Styling for morph elements
- Uses: border-radius properties
- Creates: Styled morph appearance

#### `.morph-blob`
- Description: Styling for morph blob elements
- Uses: border-radius properties
- Creates: Styled morph blob appearance

#### `.morph-wave`
- Description: Styling for morph wave elements
- Uses: border-radius properties
- Creates: Styled morph wave appearance

#### `.morph-color-primary`
- Description: Styling for morph color primary elements
- Uses: background properties
- Creates: Styled morph color primary appearance

#### `.morph-color-secondary`
- Description: Styling for morph color secondary elements
- Uses: background properties
- Creates: Styled morph color secondary appearance

#### `.morph-color-success`
- Description: Styling for morph color success elements
- Uses: background properties
- Creates: Styled morph color success appearance

#### `.morph-color-error`
- Description: Styling for morph color error elements
- Uses: background properties
- Creates: Styled morph color error appearance

#### `.morph-color-warning`
- Description: Styling for morph color warning elements
- Uses: background properties
- Creates: Styled morph color warning appearance

#### `.morph-color-info`
- Description: Styling for morph color info elements
- Uses: background properties
- Creates: Styled morph color info appearance

### Variants

#### `.morph-sm`
- Description: Styling for morph sm elements
- Uses: border-radius properties
- Creates: Styled morph sm appearance

#### `.morph-lg`
- Description: Styling for morph lg elements
- Uses: border-radius properties
- Creates: Styled morph lg appearance

#### `.morph-blob-sm`
- Description: Styling for morph blob sm elements
- Uses: border-radius properties
- Creates: Styled morph blob sm appearance

#### `.morph-blob-lg`
- Description: Styling for morph blob lg elements
- Uses: border-radius properties
- Creates: Styled morph blob lg appearance

#### `.morph-wave-sm`
- Description: Styling for morph wave sm elements
- Uses: border-radius properties
- Creates: Styled morph wave sm appearance

#### `.morph-wave-lg`
- Description: Styling for morph wave lg elements
- Uses: border-radius properties
- Creates: Styled morph wave lg appearance

#### `.morph-pulse-sm`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled morph pulse sm appearance

#### `.morph-pulse-lg`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled morph pulse lg appearance

#### `.morph-pulse-sm`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled morph pulse sm appearance

#### `.morph-pulse-lg`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled morph pulse lg appearance

### Special Effects

#### `.morph`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled morph appearance

#### `.morph-slow`
- Description: Applies smooth transitions between property states
- Uses: transition-duration properties
- Creates: Styled morph slow appearance

#### `.morph-fast`
- Description: Applies smooth transitions between property states
- Uses: transition-duration properties
- Creates: Styled morph fast appearance

#### `.morph-blob`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled morph blob appearance

#### `.morph-wave`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled morph wave appearance

#### `.morph-pulse`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled morph pulse appearance

#### `.morph`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled morph appearance

#### `.morph-blob`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled morph blob appearance

#### `.morph-wave`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled morph wave appearance

#### `.morph-pulse`
- Description: Animates the element using defined keyframes
- Uses: animation, transition properties
- Creates: Styled morph pulse appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes morph-pulse`
- Animates size or opacity to create a pulsing effect
- Uses: CSS transition properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: morph-pulse`

### `@keyframes morph-pulse-sm`
- Animates size or opacity to create a pulsing effect
- Uses: CSS transition properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: morph-pulse-sm`

### `@keyframes morph-pulse-lg`
- Animates size or opacity to create a pulsing effect
- Uses: CSS transition properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: morph-pulse-lg`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance

