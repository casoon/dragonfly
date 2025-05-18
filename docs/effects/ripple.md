# Ripple Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a collection of material-style ripple effects for modern UIs. It includes various interactive ripple animations for buttons and other clickable elements. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Base Ripple Classes

#### `.ripple`
- Description: Standard material design ripple effect
- Uses: Pseudo-element with radial gradient and scale transformation
- Creates: Circular ripple animation that radiates outward on click

#### `.ripple-sm`
- Description: Smaller, more subtle ripple effect
- Uses: Smaller radial gradient (5% vs. 10%)
- Creates: More delicate ripple animation for smaller elements

#### `.ripple-lg`
- Description: Larger, more pronounced ripple effect
- Uses: Larger radial gradient (15% vs. 10%)
- Creates: More prominent ripple animation for larger elements

### Timing Variants

#### `.ripple-slow`
- Description: Slower ripple animation
- Uses: Extended transition duration (0.8s vs. 0.5s)
- Creates: More gradual, slower-spreading ripple effect

#### `.ripple-fast`
- Description: Faster ripple animation
- Uses: Reduced transition duration (0.3s vs. 0.5s)
- Creates: Quicker, more responsive ripple effect

### Color Variants

#### `.ripple-color-primary`
- Description: Primary-colored ripple effect
- Uses: Theme primary color with transparency
- Creates: Brand-consistent ripple in primary theme color

#### `.ripple-color-secondary`
- Description: Secondary-colored ripple effect
- Uses: Theme secondary color with transparency
- Creates: Brand-consistent ripple in secondary theme color

#### `.ripple-color-success`
- Description: Success-colored ripple effect
- Uses: Success color with transparency
- Creates: Feedback-appropriate ripple for success actions

#### `.ripple-color-error`
- Description: Error-colored ripple effect
- Uses: Error color with transparency
- Creates: Feedback-appropriate ripple for error/danger actions

#### `.ripple-color-warning`
- Description: Warning-colored ripple effect
- Uses: Warning color with transparency
- Creates: Feedback-appropriate ripple for warning actions

#### `.ripple-color-info`
- Description: Info-colored ripple effect
- Uses: Info color with transparency
- Creates: Feedback-appropriate ripple for informational actions

### Alternate Ripple Style

#### `.ripple-outline`
- Description: Border ripple effect instead of fill
- Uses: Expanding border instead of radial gradient
- Creates: Circular outline ripple that expands outward on click

## Technical Implementation

The ripple effects use several advanced CSS techniques:
1. Pseudo-elements (::after) to create the ripple without additional markup
2. Scale transformations to create the expanding effect
3. Opacity transitions for the fade in/out effect
4. Radial gradients to create the circular appearance
5. Position reset on active state to restart the animation

The implementation ensures high performance by:
- Using hardware-accelerated properties (transform, opacity)
- Preventing pointer events on the pseudo-element
- Using efficient transitions with defined durations

## CSS Custom Properties (Variables)

### Ripple Color Variables
- `--ripple-color` - Default: `rgb(255 255 255 / 30%)`
- `--ripple-color-sm` - Default: `rgb(255 255 255 / 20%)`
- `--ripple-color-lg` - Default: `rgb(255 255 255 / 40%)`
- `--ripple-primary` - Default: `rgb(59 130 246 / 30%)`
- `--ripple-secondary` - Default: `rgb(107 114 128 / 30%)`
- `--ripple-success` - Default: `rgb(16 185 129 / 30%)`
- `--ripple-error` - Default: `rgb(239 68 68 / 30%)`
- `--ripple-warning` - Default: `rgb(245 158 11 / 30%)`
- `--ripple-info` - Default: `rgb(6 182 212 / 30%)`
- `--ripple-outline-color` - Default: `rgb(255 255 255 / 30%)`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables all ripple animations
- Removes transitions from all ripple variants
- Ensures accessibility for users who are sensitive to motion 