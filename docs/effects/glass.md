# Glass Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a collection of glass morphism effects for modern UIs. It includes various glass styles with different opacity levels, borders, shadows, and interaction states. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Basic Glass Classes

#### `.glass`
- Description: Standard glass effect with blur and subtle transparency
- Uses: backdrop-filter for blur and transparent background
- Includes: Light border and subtle shadow

#### `.glass-sm`
- Description: Smaller/lighter glass effect with reduced blur and transparency
- Uses: Reduced backdrop-filter blur (5px) and lighter transparency
- Includes: Lighter border and smaller shadow

#### `.glass-lg`
- Description: Larger/heavier glass effect with increased blur and transparency
- Uses: Increased backdrop-filter blur (15px) and stronger transparency
- Includes: More visible border and expanded shadow

### Specialized Glass Styles

#### `.glass-morph`
- Description: Rounded glass morphism effect with curved edges
- Uses: Standard blur and transparency with rounded border-radius
- Includes: 20px border radius for soft appearance

#### `.glass-border`
- Description: Glass effect with enhanced gradient border
- Uses: Pseudo-element for creating a glowing gradient border
- Includes: Positioned border with z-index for layering

#### `.glass-shadow`
- Description: Glass effect with enhanced shadow definition
- Uses: Multiple box shadows for depth
- Includes: Inner border shadow for definition

#### `.glass-hover`
- Description: Interactive glass effect that changes on hover
- Uses: Transition for smooth state changes
- Includes: Enhanced background and shadow on hover state

### Glass Blur Variations

#### `.glass-blur`
- Description: Simplified glass effect with only blur and minimal background
- Uses: backdrop-filter without additional styling
- Useful for: Overlay areas that need minimal styling

#### `.glass-blur-sm`
- Description: Light blur effect (5px)
- Uses: Reduced backdrop-filter intensity
- Useful for: Subtle blurring effects

#### `.glass-blur-lg`
- Description: Heavy blur effect (15px)
- Uses: Increased backdrop-filter intensity
- Useful for: Strong background obscuring

### Color Variations

#### `.glass-color-primary`
- Description: Glass effect with primary color tint
- Uses: Primary color for background and border with transparency
- Useful for: Branded primary glass elements

#### `.glass-color-secondary`
- Description: Glass effect with secondary color tint
- Uses: Secondary color for background and border with transparency
- Useful for: Branded secondary glass elements

#### `.glass-color-success`
- Description: Glass effect with success color tint
- Uses: Success color for background and border with transparency
- Useful for: Success states and confirmations

#### `.glass-color-error`
- Description: Glass effect with error color tint
- Uses: Error color for background and border with transparency
- Useful for: Error states and alerts

#### `.glass-color-warning`
- Description: Glass effect with warning color tint
- Uses: Warning color for background and border with transparency
- Useful for: Warning states and notifications

#### `.glass-color-info`
- Description: Glass effect with info color tint
- Uses: Info color for background and border with transparency
- Useful for: Informational states and tooltips

## CSS Custom Properties (Variables)

The glass effects primarily use direct RGB color values with opacity settings rather than CSS custom properties, which allows for better browser compatibility with backdrop-filter and transparency effects.

Default values include:
- Background: `rgb(255 255 255 / 10%)` - White with 10% opacity
- Border: `rgb(255 255 255 / 20%)` - White with 20% opacity
- Box shadow: `rgb(31 38 135 / 37%)` - Blue-purple shade with 37% opacity

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables transitions on interactive glass effects
- Specifically targets `.glass-hover` to remove transition animations
- Ensures accessibility for users who are sensitive to motion 