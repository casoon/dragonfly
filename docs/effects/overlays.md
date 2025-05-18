# Overlay Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides various overlay effects for modern UIs to create interactive hover states and decorative elements. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Base Overlay Class

#### `.overlay`
- Description: Base class for all overlay effects
- Creates a positioned container for the overlay effect
- Uses: `position: relative`

#### `.overlay::after`
- Description: Pseudo-element used to create the overlay effect
- Uses: `--overlay-color` (default: `rgb(0 0 0 / 50%)`)
- Uses: `--transition-normal` for fade animation speed

#### `.overlay:hover::after`
- Description: Reveals the overlay on hover
- Changes opacity from 0% to 100%

### Gradient Overlay Variations

#### `.overlay-gradient::after`
- Description: Creates a vertical gradient overlay from transparent to color
- Uses: `--overlay-color` (default: `rgb(0 0 0 / 70%)`)

#### `.overlay-gradient-horizontal::after`
- Description: Creates a horizontal gradient overlay from transparent to color
- Uses: `--overlay-color` (default: `rgb(0 0 0 / 70%)`)

#### `.overlay-gradient-diagonal::after`
- Description: Creates a diagonal (135deg) gradient overlay
- Uses: `--overlay-color` (default: `rgb(0 0 0 / 70%)`)

#### `.overlay-gradient-radial::after`
- Description: Creates a radial gradient overlay from center
- Uses: `--overlay-color` (default: `rgb(0 0 0 / 70%)`)

#### `.overlay-gradient-multi::after`
- Description: Creates a multi-color gradient overlay with purple accent
- Uses: `--overlay-color` (default: `rgb(0 0 0 / 70%)`)
- Uses: Fixed color `rgb(100 0 200 / 40%)` for purple accent

#### `.overlay-gradient-conic::after`
- Description: Creates a conic gradient overlay for circular sweep effect
- Uses: `--overlay-color` (default: `rgb(0 0 0 / 30%)`)

### Special Effect Overlays

#### `.overlay-blur::after`
- Description: Creates a blurred backdrop overlay effect
- Uses: `backdrop-filter: blur(5px)`
- Uses: `--overlay-color` (default: `rgb(0 0 0 / 30%)`)

#### `.overlay-shine::after`
- Description: Creates a diagonal shine/highlight effect
- Uses: `--overlay-color` (default: `rgb(255 255 255 / 20%)`)

#### `.overlay-texture::after`
- Description: Applies a noise texture overlay using SVG
- Uses: `--overlay-color` (default: `rgb(0 0 0 / 50%)`)
- Uses: SVG noise filter with `background-blend-mode: overlay`

## CSS Custom Properties (Variables)

### Overlay Variables
- `--overlay-color` - Default: Varies by overlay type (typically `rgb(0 0 0 / 50%)`)
- `--transition-normal` - Default: Inherited from global transitions

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables transitions on all overlay effects by setting `transition: none`
- Ensures accessibility for users who are sensitive to motion
- Affects all overlay classes and their variations