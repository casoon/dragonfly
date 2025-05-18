# Filter Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a comprehensive collection of CSS filter effects for modern UIs. It includes basic filter utilities like blur, brightness, and contrast, as well as combined filters for special effects. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Basic Filter Classes

#### Blur Filters
- `.filter-blur` - Standard blur effect (4px)
- `.filter-blur-sm` - Small blur effect (2px)
- `.filter-blur-lg` - Large blur effect (8px)

#### Brightness Filters
- `.filter-brightness` - Standard brightness increase (1.2)
- `.filter-brightness-sm` - Small brightness increase (1.1)
- `.filter-brightness-lg` - Large brightness increase (1.3)

#### Contrast Filters
- `.filter-contrast` - Standard contrast increase (1.2)
- `.filter-contrast-sm` - Small contrast increase (1.1)
- `.filter-contrast-lg` - Large contrast increase (1.3)

#### Grayscale Filters
- `.filter-grayscale` - Full grayscale effect (1)
- `.filter-grayscale-sm` - Partial grayscale effect (0.5)
- `.filter-grayscale-lg` - Strong grayscale effect (0.8)

#### Hue Rotation Filters
- `.filter-hue-rotate` - Standard hue rotation (90deg)
- `.filter-hue-rotate-sm` - Small hue rotation (45deg)
- `.filter-hue-rotate-lg` - Large hue rotation (180deg)

#### Invert Filters
- `.filter-invert` - Full invert effect (1)
- `.filter-invert-sm` - Partial invert effect (0.5)
- `.filter-invert-lg` - Strong invert effect (0.8)

#### Opacity Filters
- `.filter-opacity` - Standard opacity reduction (0.5)
- `.filter-opacity-sm` - Small opacity reduction (0.7)
- `.filter-opacity-lg` - Large opacity reduction (0.3)

#### Saturation Filters
- `.filter-saturate` - Standard saturation increase (1.5)
- `.filter-saturate-sm` - Small saturation increase (1.2)
- `.filter-saturate-lg` - Large saturation increase (1.8)

#### Sepia Filters
- `.filter-sepia` - Full sepia effect (1)
- `.filter-sepia-sm` - Partial sepia effect (0.5)
- `.filter-sepia-lg` - Strong sepia effect (0.8)

### Combined Filter Effects

#### `.filter-vintage`
- Description: Creates an aged, vintage photo effect
- Uses: Combination of sepia, contrast, and brightness filters
- Effect: Warm-toned, slightly contrasted vintage appearance

#### `.filter-cool`
- Description: Creates a cool-toned color shift
- Uses: Saturation and positive hue-rotation
- Effect: Cooler, bluer color temperature

#### `.filter-warm`
- Description: Creates a warm-toned color shift
- Uses: Saturation and negative hue-rotation
- Effect: Warmer, more orange/yellow color temperature

#### `.filter-dramatic`
- Description: Creates a high-contrast, cinematic look
- Uses: Strong contrast with saturation and darker brightness
- Effect: Bold, dramatic image with deeper shadows

#### `.filter-soft`
- Description: Creates a dreamy, soft focus effect
- Uses: Slight blur with increased brightness and reduced contrast
- Effect: Gentle, soft-focus dreamy appearance

### Hover Filter Effects

#### `.filter-hover`
- Description: Standard hover filter effect
- Uses: Transition with brightness and contrast increase
- Effect: Elements become brighter and more defined on hover

#### `.filter-hover-sm`
- Description: Subtle hover filter effect
- Uses: Transition with small brightness and contrast increase
- Effect: Slight enhancement of elements on hover

#### `.filter-hover-lg`
- Description: Prominent hover filter effect
- Uses: Transition with larger brightness and contrast increase
- Effect: Strong enhancement of elements on hover

## CSS Custom Properties (Variables)

Unlike some other effect files, the filter utilities don't rely on CSS custom properties, but instead use standard CSS filter functions with specific values for each class.

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables transitions on all interactive filter hover effects
- Specifically targets `.filter-hover`, `.filter-hover-sm`, and `.filter-hover-lg`
- Ensures accessibility for users who are sensitive to motion 