# Reflection Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a collection of reflection effects for modern UIs. It includes various reflection styles with different intensities, colors, and animation options. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Base Reflection Class

#### `.reflection`
- Description: Standard reflection effect for elements
- Uses: Pseudo-element with linear gradient background
- Creates: Subtle mirrored reflection below the element

### Reflection Intensity Variants

#### `.reflection-strong`
- Description: More pronounced reflection effect
- Uses: Higher opacity and stronger gradient
- Creates: More visible, pronounced reflection

#### `.reflection-soft`
- Description: Subtle, delicate reflection effect
- Uses: Lower opacity and softer gradient
- Creates: Very gentle, barely noticeable reflection

### Colored Reflection

#### `.reflection-color`
- Description: Colored reflection that blends with the element
- Uses: Customizable color gradient with overlay blend mode
- Creates: Tinted reflection that integrates with the element's colors

### Interactive Reflection

#### `.reflection-hover`
- Description: Animated reflection that activates on hover
- Uses: Animation to create a subtle movement effect in the reflection
- Creates: Dynamic, shimmering reflection when the user hovers over the element

## HTML Structure

To create a reflection effect, simply add the reflection class to the container element:

```html
<div class="reflection">
  <!-- Your content here -->
</div>
```

For stronger or softer reflections, combine with intensity classes:

```html
<div class="reflection reflection-strong">
  <!-- Content with stronger reflection -->
</div>
```

## Keyframe Animations

### `@keyframes reflection-shine`
- Animates the reflection with a subtle up and down movement
- Uses: TranslateY transformation with scaleY(-1) for the mirrored effect
- Animation steps:
  1. Start: Normal position
  2. Middle: Moved down 10px
  3. End: Back to normal position
- Used in: `.reflection-hover:hover::after`

## CSS Custom Properties (Variables)

### Reflection Color Variable
- `--reflection-color` - Default: `rgb(255 255 255 / 20%)`
  - Controls the color and opacity of the reflection
  - Can be customized to match specific color schemes

## Technical Implementation Details

The reflection effects use several CSS techniques:
- Pseudo-elements (::after) to create the reflection without additional markup
- Linear gradients with transparency for natural fading effect
- CSS transforms with scaleY(-1) to create the mirrored appearance
- Animation for subtle movement in hover states
- Overflow hidden on the container to properly contain the reflection

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations on interactive reflection effects
- Specifically targets `.reflection-hover:hover::after`
- Ensures accessibility for users who are sensitive to motion 