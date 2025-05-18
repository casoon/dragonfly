# Sparkle Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a collection of animated sparkle effects for modern UIs. It includes various sparkle animations that can be applied to elements for playful, attention-grabbing highlights. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Basic Sparkle Classes

#### `.sparkle`
- Description: Basic sparkle effect with two animated points
- Uses: Pseudo-elements to create sparkle points
- Creates: Two animated sparkle points that fade in and out

#### `.sparkle-many`
- Description: Enhanced sparkle effect with multiple animated points
- Uses: Pseudo-elements and spans to create multiple sparkle points
- Creates: Six animated sparkle points with staggered timing

### Sparkle Animation Variants

#### `.sparkle-hover`
- Description: Sparkle effect that activates on hover
- Uses: Animation triggered by hover state
- Creates: Interactive sparkle effect only when user hovers

## HTML Structure for Multiple Sparkles

For `.sparkle-many` to work properly, you need to include span elements in your HTML:

```html
<div class="sparkle-many">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
```

These spans will be positioned and animated as additional sparkle points with staggered timing.

## Keyframe Animations

### `@keyframes sparkle-effect`
- Animates the sparkle points with a fade-in/fade-out and scale effect
- Animation steps:
  1. Start: Invisible (0% opacity) and scaled to zero
  2. Middle: Fully visible (100% opacity) and normal size
  3. End: Fade out (0% opacity) and scaled back to zero
- Used in: All sparkle variants

## CSS Custom Properties (Variables)

### Sparkle Color Variable
- `--sparkle-color` - Default: `rgb(255 255 255 / 80%)` (semi-transparent white)
  - Controls the color of the sparkle points
  - Can be customized to match theme colors

## Technical Implementation Details

The sparkle effects use several CSS techniques:
- Pseudo-elements (::before, ::after) for the basic sparkle points
- Span elements for additional sparkle points in the enhanced version
- Absolute positioning to place sparkle points at different locations
- Scale transforms combined with opacity for the sparkle animation
- Animation delays to create staggered sparkling effect

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables all sparkle animations
- Affects: All sparkle classes and their variations
- Ensures accessibility for users who are sensitive to motion 