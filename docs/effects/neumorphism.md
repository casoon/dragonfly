# Neumorphism Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a comprehensive set of neumorphism (soft UI) effects for modern user interfaces. It includes various elevation types, component styles, and customization options with accessibility features for dark mode and reduced motion preferences.

## CSS Utility Classes

### Base Classes

#### `.neuro`
- Description: Base class for all neumorphic elements
- Applies basic styling including background color, border-radius, and transitions
- Uses: `--neuro-background`, `--neuro-radius`, `--neuro-transition`

### Elevation Type Classes

#### `.neuro-convex`
- Description: Creates a raised/convex neumorphic effect with outer shadows
- Uses: `--neuro-shadow-distance`, `--neuro-shadow-blur`, `--neuro-light-shadow-color`, `--neuro-dark-shadow-color`
- Includes subtle gradient background for enhanced depth perception

#### `.neuro-concave`
- Description: Creates a pressed/concave neumorphic effect with inner shadows
- Uses: `--neuro-shadow-distance`, `--neuro-shadow-blur`, `--neuro-light-shadow-color`, `--neuro-dark-shadow-color`
- Includes inverted gradient background compared to convex style

#### `.neuro-flat`
- Description: Creates a flat neumorphic effect with subtle outer shadows
- Uses: `--neuro-shadow-distance`, `--neuro-shadow-blur`, `--neuro-light-shadow-color`, `--neuro-dark-shadow-color`

### Component Classes

#### `.neuro-button`
- Description: Applies neumorphic styling to buttons
- Uses: Base neumorphic variables for consistent styling
- Includes proper padding, alignment, and cursor styling

#### `.neuro-button-convex`
- Description: Applies convex styling specifically for buttons
- Uses: Same shadow and gradient variables as `.neuro-convex`
- Includes hover state with enhanced shadow distance
- Includes active/pressed state that switches to an inset shadow effect

#### `.neuro-card`
- Description: Applies neumorphic styling to card elements
- Uses: Base neumorphic variables
- Includes proper padding and overflow handling

#### `.neuro-card-elevated`
- Description: Enhances card elevation with stronger shadows
- Uses: Enhanced `--neuro-shadow-blur` for more prominent elevation

#### `.neuro-input`
- Description: Applies neumorphic styling to input fields with inset shadows
- Uses: Base neumorphic variables with adjusted shadow properties
- Includes focus state with enhanced inner shadow effect

#### `.neuro-checkbox`
- Description: Creates a custom neumorphic checkbox
- Uses: Base neumorphic variables with adjusted shadow and size properties
- Includes checked state with custom checkmark created using borders

### Intensity Variation Classes

#### `.neuro-intensity-low`
- Description: Applies a subtle shadow intensity
- Sets: `--neuro-shadow-intensity: 0.05`

#### `.neuro-intensity-medium`
- Description: Applies a moderate shadow intensity (default)
- Sets: `--neuro-shadow-intensity: 0.1`

#### `.neuro-intensity-high`
- Description: Applies a strong shadow intensity
- Sets: `--neuro-shadow-intensity: 0.15`

### Size Variation Classes

#### `.neuro-small`
- Description: Applies smaller dimensions to neumorphic elements
- Sets: Smaller values for `--neuro-radius`, `--neuro-shadow-distance`, and `--neuro-shadow-blur`

#### `.neuro-medium`
- Description: Applies medium dimensions to neumorphic elements (default)
- Sets: Medium values for `--neuro-radius`, `--neuro-shadow-distance`, and `--neuro-shadow-blur`

#### `.neuro-large`
- Description: Applies larger dimensions to neumorphic elements
- Sets: Larger values for `--neuro-radius`, `--neuro-shadow-distance`, and `--neuro-shadow-blur`

## CSS Custom Properties (Variables)

### Base Variables
- `--neuro-radius` - Default: `1rem` - Border radius for neumorphic elements
- `--neuro-shadow-intensity` - Default: `0.1` - Base intensity for shadows
- `--neuro-shadow-distance` - Default: `0.5rem` - Distance of shadows from element
- `--neuro-shadow-blur` - Default: `1rem` - Blur radius of shadows
- `--neuro-light-shadow-color` - Default: `rgb(255 255 255 / var(--neuro-shadow-intensity))` - Color of light shadow
- `--neuro-dark-shadow-color` - Default: `rgb(0 0 0 / var(--neuro-shadow-intensity))` - Color of dark shadow
- `--neuro-background` - Default: `var(--surface-3, #f0f0f0)` - Background color of neumorphic elements
- `--neuro-transition` - Default: `200ms ease-out` - Transition timing for interactive effects
- `--neuro-surface-tint` - Default: `0.02` - Subtle tint amount for surface variation

## Responsive / Media Behavior

### `@media (prefers-color-scheme: dark)`
- Adjusts shadow intensities and gradients for dark mode
- Increases shadow intensity for better visibility in dark environments
- Modifies light shadow opacity to be more subtle in dark environments
- Adjusts gradient mixes for better visibility while maintaining the neumorphic effect

### `@media (prefers-reduced-motion: reduce)`
- Disables transitions on all neumorphic elements by setting `transition: none`
- Ensures accessibility for users who are sensitive to motion
- Affects all neumorphic component classes 