# Gradient Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a collection of gradient effects for modern UIs. It includes theme-based gradients, animated rainbow gradients, and various specialty gradients. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Basic Theme Gradients

#### `.gradient-primary`
- Description: Linear gradient using primary theme colors
- Uses: 45-degree angle with primary and primary-light colors
- Creates: Smooth transition between brand primary colors

#### `.gradient-secondary`
- Description: Linear gradient using secondary theme colors
- Uses: 45-degree angle with secondary and secondary-light colors
- Creates: Smooth transition between brand secondary colors

#### `.gradient-accent`
- Description: Linear gradient using accent theme colors
- Uses: 45-degree angle with accent and accent-light colors
- Creates: Smooth transition between brand accent colors

### Specialty Gradients

#### `.gradient-rainbow`
- Description: Animated rainbow gradient with full spectrum colors
- Uses: Animated background-position shift
- Creates: Moving rainbow effect that cycles through all colors

#### `.gradient-metallic`
- Description: Silver/metallic effect gradient
- Uses: Light gray to white to light gray color transition
- Creates: Subtle metallic sheen appearance

#### `.gradient-iridescent`
- Description: Animated iridescent gradient with vibrant spectrum
- Uses: Animated background-position shift with expanded color range
- Creates: Moving iridescent effect with smooth transitions between bright colors

## Keyframe Animations

### `@keyframes gradient-shift`
- Animates background position for moving gradient effects
- Uses: Background position shifts from 0% 50% to 100% 50% and back
- Used in: `.gradient-rainbow`, `.gradient-iridescent`

## CSS Custom Properties (Variables)

### Theme Color Variables
- `--color-primary` - Primary brand color
- `--color-primary-light` - Lighter shade of primary color
- `--color-secondary` - Secondary brand color
- `--color-secondary-light` - Lighter shade of secondary color
- `--color-accent` - Accent brand color
- `--color-accent-light` - Lighter shade of accent color

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations on all animated gradients
- Specifically targets `.gradient-rainbow` and `.gradient-iridescent`
- Ensures accessibility for users who are sensitive to motion 