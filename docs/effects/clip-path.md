# Clip Path Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a collection of clip-path effects for modern UIs. It includes various geometric shapes and decorative forms that can be applied to elements. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Basic Shape Clip Paths

#### `.clip-circle`
- Description: Circular clip path effect
- Uses: Circle function with 50% radius centered on the element
- Creates: Perfect circle shape from the center of the element

#### `.clip-polygon`
- Description: Hexagonal clip path effect
- Uses: Polygon function with six coordinate points
- Creates: Regular hexagon shape centered on the element

#### `.clip-star`
- Description: Star-shaped clip path effect
- Uses: Complex polygon function with ten coordinate points
- Creates: Five-pointed star shape centered on the element

### Functional Shape Clip Paths

#### `.clip-wave`
- Description: Wave-shaped clip path effect
- Uses: Path function with cubic Bézier curves
- Creates: Smooth wave shape along the bottom of the element

#### `.clip-arrow`
- Description: Arrow-shaped clip path effect
- Uses: Polygon function with directional coordinates
- Creates: Horizontal arrow pointing right

#### `.clip-chat`
- Description: Chat bubble clip path effect
- Uses: Polygon function with speech bubble coordinates
- Creates: Message/chat bubble shape with pointer at bottom center

### Interactive Clip Path

#### `.clip-hover`
- Description: Interactive clip path that changes on hover
- Uses: Custom variable `--clip-hover-path` for the target shape
- Creates: Smooth transition between initial and hover clip paths

## CSS Custom Properties (Variables)

### Clip Path Variables
- `--clip-hover-path` - Default: None (must be set by user)
  - Define this custom property to set the target clip path for hover effects
  - Example: `--clip-hover-path: circle(70% at center);`

### Transition Variables
- `--transition-normal` - Default: Inherited from global transitions
  - Controls the transition speed for hover effects

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables transitions on hover clip path effects
- Ensures accessibility for users who are sensitive to motion
- Specifically targets `.clip-hover` to remove transition animations 