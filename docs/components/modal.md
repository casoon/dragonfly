# Modal
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for modal elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.backdrop`
- Description: Styling for backdrop elements
- Uses: fixed properties
- Creates: Styled backdrop appearance

#### `.container`
- Description: Styling for container elements
- Uses: flex, relative, flexbox
- Creates: Flexible layout container for child elements

#### `.title`
- Description: Styling for title elements
- Uses: font-size, font-weight, margin
- Creates: Styled title appearance

#### `.body`
- Description: Styling for body elements
- Uses: color, font-size, max-height
- Creates: Styled body appearance

#### `.footer`
- Description: Styling for footer elements
- Uses: flex, flexbox properties
- Creates: Flexible layout container for child elements

#### `.container`
- Description: Styling for container elements
- Uses: max-width properties
- Creates: Styled container appearance

#### `.container`
- Description: Styling for container elements
- Uses: max-width properties
- Creates: Styled container appearance

#### `.container`
- Description: Styling for container elements
- Uses: max-width properties
- Creates: Styled container appearance

#### `.container`
- Description: Styling for container elements
- Uses: border-radius, height, max-width
- Creates: Styled container appearance

#### `.fluid`
- Description: Styling for fluid elements
- Uses: interpolate-size, font-size, border-radius
- Creates: Styled fluid appearance

#### `.container`
- Description: Styling for container elements
- Uses: border-radius, gap, padding
- Creates: Styled container appearance

#### `.title`
- Description: Styling for title elements
- Uses: font-size properties
- Creates: Styled title appearance

#### `.body`
- Description: Styling for body elements
- Uses: font-size properties
- Creates: Styled body appearance

#### `.footer`
- Description: Styling for footer elements
- Uses: gap, margin-top properties
- Creates: Styled footer appearance

#### `.container`
- Description: Styling for container elements
- Uses: max-width properties
- Creates: Styled container appearance

#### `.medium`
- Description: Styling for medium elements
- Uses: font-size, max-width properties
- Creates: Styled medium appearance

#### `.container`
- Description: Styling for container elements
- Uses: max-width properties
- Creates: Styled container appearance

#### `.large`
- Description: Styling for large elements
- Uses: font-size, max-width properties
- Creates: Styled large appearance

#### `.container`
- Description: Styling for container elements
- Uses: max-width properties
- Creates: Styled container appearance

#### `.x-large`
- Description: Styling for x large elements
- Uses: font-size, max-width properties
- Creates: Styled x large appearance

#### `.container`
- Description: Styling for container elements
- Uses: max-width properties
- Creates: Styled container appearance

#### `.adaptive`
- Description: Styling for adaptive elements
- Uses: container-type, border-radius, gap
- Creates: Styled adaptive appearance

#### `.container`
- Description: Styling for container elements
- Uses: border-radius, gap, max-width
- Creates: Styled container appearance

#### `.title`
- Description: Styling for title elements
- Uses: font-size properties
- Creates: Styled title appearance

#### `.body`
- Description: Styling for body elements
- Uses: font-size, max-height properties
- Creates: Styled body appearance

#### `.footer`
- Description: Styling for footer elements
- Uses: gap properties
- Creates: Styled footer appearance

#### `.container`
- Description: Styling for container elements
- Uses: box-shadow properties
- Creates: Styled container appearance

#### `.center`
- Description: Styling for center elements
- Uses: align-items properties
- Creates: Styled center appearance

#### `.top`
- Description: Styling for top elements
- Uses: flexbox properties
- Creates: Styled top appearance

#### `.container`
- Description: Styling for container elements
- Uses: border-top-left-radius, border-top-right-radius, margin-top
- Creates: Styled container appearance

#### `.bottom`
- Description: Styling for bottom elements
- Uses: flexbox properties
- Creates: Styled bottom appearance

#### `.container`
- Description: Styling for container elements
- Uses: border-bottom-left-radius, border-bottom-right-radius, margin-bottom
- Creates: Styled container appearance

### Variants

#### `.small`
- Description: Styling for small elements
- Uses: font-size, max-width properties
- Creates: Styled small appearance

### Special Effects

#### `.modal`
- Description: Applies smooth transitions between property states
- Uses: flex, fixed, transition, flexbox
- Creates: Flexible layout container for child elements

#### `.header`
- Description: Applies smooth transitions between property states
- Uses: flex, transition properties
- Creates: Flexible layout container for child elements

#### `.close`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled close appearance

#### `.modal`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled modal appearance

#### `.container`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled container appearance

#### `.container`
- Description: Animates the element using defined keyframes
- Uses: animation properties
- Creates: Styled container appearance

## CSS Custom Properties (Variables)



## Keyframe Animations

### `@keyframes modalFadeIn`
- Animates elements with the modalFadeIn effect
- Uses: opacity properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: modalFadeIn`

### `@keyframes modalSlideUp`
- Animates elements with the modalSlideUp effect
- Uses: opacity, transform properties
- Animation steps:
  1. Start: Initial animation state
  2. Middle: Transition state
  3. End: Final animation state
- Used in: Classes using `animation-name: modalSlideUp`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
