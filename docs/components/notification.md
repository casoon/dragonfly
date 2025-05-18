# Notification
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for notification elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.success`
- Description: Styling for success elements
- Uses: background-color, color properties
- Creates: Styled success appearance

#### `.error`
- Description: Styling for error elements
- Uses: background-color, color properties
- Creates: Styled error appearance

#### `.warning`
- Description: Styling for warning elements
- Uses: background-color, color properties
- Creates: Styled warning appearance

#### `.info`
- Description: Styling for info elements
- Uses: background-color, color properties
- Creates: Styled info appearance

#### `.icon`
- Description: Styling for icon elements
- Uses: flexbox properties
- Creates: Styled icon appearance

#### `.content`
- Description: Styling for content elements
- Uses: flexbox properties
- Creates: Styled content appearance

#### `.title`
- Description: Styling for title elements
- Uses: font-weight, margin-bottom properties
- Creates: Styled title appearance

#### `.message`
- Description: Styling for message elements
- Uses: color, opacity properties
- Creates: Styled message appearance

#### `.actions`
- Description: Styling for actions elements
- Uses: flex properties
- Creates: Flexible layout container for child elements

#### `.timer`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: absolute properties
- Creates: Element positioned precisely relative to its container

#### `.top-right`
- Description: Styling for top right elements
- Uses: fixed properties
- Creates: Styled top right appearance

#### `.top-left`
- Description: Styling for top left elements
- Uses: fixed properties
- Creates: Styled top left appearance

#### `.bottom-right`
- Description: Styling for bottom right elements
- Uses: fixed properties
- Creates: Styled bottom right appearance

#### `.bottom-left`
- Description: Styling for bottom left elements
- Uses: fixed properties
- Creates: Styled bottom left appearance

#### `.top-right`
- Description: Styling for top right elements
- Uses: right, top properties
- Creates: Styled top right appearance

#### `.top-left`
- Description: Styling for top left elements
- Uses: left, top properties
- Creates: Styled top left appearance

#### `.bottom-right`
- Description: Styling for bottom right elements
- Uses: bottom, right properties
- Creates: Styled bottom right appearance

#### `.bottom-left`
- Description: Styling for bottom left elements
- Uses: bottom, left properties
- Creates: Styled bottom left appearance

#### `.with-timer`
- Description: Styling for with timer elements
- Uses: relative properties
- Creates: Styled with timer appearance

#### `.notification-center`
- Description: Styling for notification center elements
- Uses: flex, fixed, flexbox
- Creates: Flexible layout container for child elements

#### `.top-right`
- Description: Styling for top right elements
- Uses: margin, right, top
- Creates: Styled top right appearance

#### `.top-left`
- Description: Styling for top left elements
- Uses: left, margin, top
- Creates: Styled top left appearance

#### `.bottom-right`
- Description: Styling for bottom right elements
- Uses: bottom, margin, right
- Creates: Styled bottom right appearance

#### `.bottom-left`
- Description: Styling for bottom left elements
- Uses: bottom, left, margin
- Creates: Styled bottom left appearance

### Special Effects

#### `.notification`
- Description: Positions the element absolutely relative to its closest positioned ancestor
- Uses: flex, absolute, transition, flexbox
- Creates: Flexible layout container for child elements

#### `.close`
- Description: Applies smooth transitions between property states
- Uses: transition, flexbox properties
- Creates: Styled close appearance

#### `.notification`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled notification appearance

#### `.animate-in`
- Description: Animates the element using defined keyframes
- Uses: animation-duration, animation-name, animation-timing-function
- Creates: Styled animate in appearance

#### `.animate-out`
- Description: Animates the element using defined keyframes
- Uses: animation-duration, animation-fill-mode, animation-name
- Creates: Styled animate out appearance

#### `.timer`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled timer appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes notification-timer`
- Animates elements with the notification timer effect
- Uses: dimensions properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: notification-timer`

### `@keyframes notification-slide-in`
- Animates position to create a sliding movement
- Uses: opacity, transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: notification-slide-in`

### `@keyframes notification-slide-out`
- Animates position to create a sliding movement
- Uses: opacity, transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: notification-slide-out`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
