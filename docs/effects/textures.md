# Texture Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a collection of texture effects for modern UIs. It includes various SVG-based noise patterns and textures that can be applied as background overlays. All effects are performance-optimized and use inline SVG data URIs to eliminate the need for external image requests.

## CSS Utility Classes

### Basic Texture Classes

#### `.texture-noise`
- Description: Subtle noise texture overlay
- Uses: SVG fractalNoise with medium frequency
- Applies: Overlay blend mode with 10% opacity
- Creates: Subtle organic noise pattern

#### `.texture-grain`
- Description: Fine grain texture overlay
- Uses: SVG fractalNoise with higher frequency
- Applies: Multiply blend mode with 5% opacity
- Creates: Fine film grain effect

#### `.texture-paper`
- Description: Paper-like texture overlay
- Uses: SVG fractalNoise with lower frequency and more octaves
- Applies: Overlay blend mode with 15% opacity
- Creates: Subtle paper-like texture resembling natural fibers

#### `.texture-concrete`
- Description: Concrete-like texture overlay
- Uses: SVG fractalNoise with medium frequency
- Applies: Multiply blend mode with 20% opacity
- Creates: Rougher concrete or stone-like texture

## Technical Implementation

All textures are implemented using inline SVG with the `feTurbulence` filter to generate procedural noise patterns. This approach has several advantages:

1. No external file requests are needed
2. The textures scale infinitely without loss of quality
3. The patterns can be customized through SVG filter parameters

Key SVG parameters used:
- `type="fractalNoise"` - Creates organic noise patterns
- `baseFrequency` - Controls the density/size of the noise (higher = finer grain)
- `numOctaves` - Controls the complexity/detail level of the noise
- `stitchTiles="stitch"` - Ensures seamless tiling

The textures are applied as background images with blend modes to create subtle effects that enhance rather than overwhelm the UI.

## CSS Custom Properties (Variables)

The texture effects don't use custom CSS properties, as they rely on inline SVG parameters for their appearance.

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables any animations that might be applied to textures
- Ensures accessibility for users who are sensitive to motion
- While the textures themselves are static, this precaution prevents any added animations 