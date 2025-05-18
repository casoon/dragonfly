# Transform Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a comprehensive collection of CSS transform utilities for modern UIs. It includes various transform functions like scale, rotate, skew, and translate with different magnitudes, as well as transform origin controls. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Basic Transform Control

#### `.transform-none`
- Description: Resets any applied transforms
- Uses: `transform: none` to cancel out other transforms
- Useful for: Removing transforms at specific breakpoints or states

### Scale Transforms

#### `.transform-scale-sm`
- Description: Small scale reduction
- Uses: `scale(0.95)` to slightly shrink the element
- Creates: Subtle downsizing effect (95% of original size)

#### `.transform-scale-md`
- Description: Medium scale increase
- Uses: `scale(1.05)` to moderately enlarge the element
- Creates: Noticeable enlargement effect (105% of original size)

#### `.transform-scale-lg`
- Description: Large scale increase
- Uses: `scale(1.1)` to significantly enlarge the element
- Creates: Prominent enlargement effect (110% of original size)

### Rotation Transforms

#### `.transform-rotate-sm`
- Description: Small rotation effect
- Uses: `rotate(5deg)` for subtle rotation
- Creates: Slight tilt effect

#### `.transform-rotate-md`
- Description: Medium rotation effect
- Uses: `rotate(15deg)` for moderate rotation
- Creates: Noticeable angular displacement

#### `.transform-rotate-lg`
- Description: Large rotation effect
- Uses: `rotate(45deg)` for significant rotation
- Creates: Dramatic diagonal orientation

### Skew Transforms

#### `.transform-skew-sm`
- Description: Small skew effect
- Uses: `skew(5deg)` for subtle distortion
- Creates: Slight parallelogram shape

#### `.transform-skew-md`
- Description: Medium skew effect
- Uses: `skew(15deg)` for moderate distortion
- Creates: Noticeable parallelogram shape

#### `.transform-skew-lg`
- Description: Large skew effect
- Uses: `skew(45deg)` for significant distortion
- Creates: Extreme parallelogram shape

### Horizontal Translation Transforms

#### `.transform-translate-x-sm`
- Description: Small horizontal shift
- Uses: `translateX(0.25rem)` for subtle movement
- Creates: 4px rightward displacement

#### `.transform-translate-x-md`
- Description: Medium horizontal shift
- Uses: `translateX(0.5rem)` for moderate movement
- Creates: 8px rightward displacement

#### `.transform-translate-x-lg`
- Description: Large horizontal shift
- Uses: `translateX(1rem)` for significant movement
- Creates: 16px rightward displacement

### Vertical Translation Transforms

#### `.transform-translate-y-sm`
- Description: Small vertical shift
- Uses: `translateY(0.25rem)` for subtle movement
- Creates: 4px downward displacement

#### `.transform-translate-y-md`
- Description: Medium vertical shift
- Uses: `translateY(0.5rem)` for moderate movement
- Creates: 8px downward displacement

#### `.transform-translate-y-lg`
- Description: Large vertical shift
- Uses: `translateY(1rem)` for significant movement
- Creates: 16px downward displacement

### Transform Origin Controls

#### `.transform-origin-center`
- Description: Sets center transform origin (default)
- Uses: `transform-origin: center`
- Creates: Transformations that pivot from element center

#### `.transform-origin-top`
- Description: Sets top center transform origin
- Uses: `transform-origin: top`
- Creates: Transformations that pivot from top edge

#### `.transform-origin-bottom`
- Description: Sets bottom center transform origin
- Uses: `transform-origin: bottom`
- Creates: Transformations that pivot from bottom edge

#### `.transform-origin-left`
- Description: Sets left center transform origin
- Uses: `transform-origin: left`
- Creates: Transformations that pivot from left edge

#### `.transform-origin-right`
- Description: Sets right center transform origin
- Uses: `transform-origin: right`
- Creates: Transformations that pivot from right edge

#### Corner Origin Classes
- `.transform-origin-top-left` - Top left corner pivot point
- `.transform-origin-top-right` - Top right corner pivot point
- `.transform-origin-bottom-left` - Bottom left corner pivot point
- `.transform-origin-bottom-right` - Bottom right corner pivot point

## Technical Implementation

The transform utilities leverage CSS transform functions for high-performance manipulation of elements. Benefits include:
- Hardware acceleration via GPU rendering
- No impact on document flow
- Efficient animations with minimal repaints
- Compatibility with 3D transforms and perspective

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables transitions on all transform classes
- Ensures accessibility for users who are sensitive to motion
- Affects all scale, rotate, skew, and translate variants

## Usage Examples

These transform utilities can be combined with transitions for interactive effects:

```html
<div class="transform-scale-md transform-origin-top-left transition-transform">
  <!-- Element will scale from top-left origin with smooth transition -->
</div>
```

Or used with hover states for interactive elements:

```html
<button class="hover:transform-scale-md">
  <!-- Button will scale up when hovered -->
</button>
``` 