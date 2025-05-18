# Neon Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a comprehensive collection of neon and glow effects for modern UIs. It includes text effects, borders, buttons, and animated variations with flicker and pulse animations. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Neon Text Classes

#### `.neon-text`
- Description: Standard neon text effect with pulsing animation
- Uses: Text shadow with multiple layers for glow effect
- Includes: Infinite alternating animation for realistic neon look

#### `.neon-text-secondary`
- Description: Neon text effect using secondary theme color
- Uses: Secondary color variable for text and shadow
- Matches: Secondary color scheme in design system

#### `.neon-text-accent`
- Description: Neon text effect using accent theme color
- Uses: Accent color variable for text and shadow
- Matches: Accent color scheme in design system

### Neon Border Classes

#### `.neon-border`
- Description: Element border with neon glow effect and animation
- Uses: Border with multiple box shadows for glow effect
- Includes: Infinite alternating animation for realistic neon look

#### `.neon-border-secondary`
- Description: Neon border using secondary theme color
- Uses: Secondary color variable for border and shadow
- Matches: Secondary color scheme in design system

#### `.neon-border-accent`
- Description: Neon border using accent theme color
- Uses: Accent color variable for border and shadow
- Matches: Accent color scheme in design system

### Animation Variants

#### `.neon-text-slow`
- Description: Slower pulsing animation for neon text
- Uses: Extended animation duration (4s)
- Creates: More subtle, gentle pulsing effect

#### `.neon-text-fast`
- Description: Faster pulsing animation for neon text
- Uses: Reduced animation duration (1s)
- Creates: More energetic, rapid pulsing effect

#### `.neon-text-flicker`
- Description: Realistic flickering effect for neon text
- Uses: Complex keyframe animation with uneven timing
- Creates: Authentic neon light flickering appearance

#### `.neon-text-hover`
- Description: Neon effect that activates on hover
- Uses: Transition for smooth effect application
- Creates: Interactive element with hover-triggered neon glow

### Additional Glow Effects

#### `.glow`
- Description: Generic text glow effect with customizable color
- Uses: `--glow-color` CSS variable (defaults to info theme color)
- Includes: Multiple text shadow layers for depth

#### `.glow-button`
- Description: Button with customizable glow effect
- Uses: `--glow-button-color` CSS variable (defaults to accent theme color)
- Includes: Multiple box shadow layers and z-index positioning

### Flicker Effects

#### `.flicker-element`
- Description: Element with standard flickering animation
- Uses: Opacity changes with irregular timing
- Creates: Standard flickering effect with 4s cycle

#### `.flicker-fast`
- Description: Element with rapid flickering animation
- Uses: Faster timing (2s cycle) for more dramatic effect
- Creates: Unstable, rapid flickering appearance

#### `.flicker-slow`
- Description: Element with slow flickering animation
- Uses: Extended timing (8s cycle) for subtle effect
- Creates: Occasional, gentle flickering appearance

## Keyframe Animations

### `@keyframes neon-pulse`
- Animates element opacity for pulsing neon effect
- Uses: opacity (100% to 70%)
- Used in: `.neon-text`, `.neon-border`

### `@keyframes neon-flicker`
- Creates irregular flickering pattern for realistic neon effect
- Uses: Complex pattern of text-shadow appearance and disappearance
- Used in: `.neon-text-flicker`

### `@keyframes flicker`
- Creates random opacity variations for generic flickering
- Uses: Multiple opacity stops at irregular intervals (100%, 70%, 100%, 80%, 50%)
- Used in: `.flicker-element`, `.flicker-fast`, `.flicker-slow`

## CSS Custom Properties (Variables)

### Color Variables
- `--theme-primary-500` - Primary theme color used for neon effects
- `--theme-secondary-500` - Secondary theme color for neon variations
- `--theme-accent-500` - Accent theme color for neon variations
- `--theme-info-500` - Information theme color used as default for glow

### Custom Effect Variables
- `--glow-color` - Custom color for text glow effects (default: `var(--theme-info-500)`)
- `--glow-button-color` - Custom color for button glow effects (default: `var(--theme-accent-500)`)

### Spacing Variables (Used in Shadow Definitions)
- `--spacing-0` - Zero spacing (0)
- `--spacing-2` - Border width (2px)
- `--spacing-5` - First shadow layer blur (5px)
- `--spacing-10` - Second shadow layer blur (10px)
- `--spacing-20` - Third shadow layer blur (20px)

## Responsive / Media Behavior

### `@container root (prefers-reduced-motion: reduce)`
- Disables all animations on neon and flickering elements
- Affects: All animated neon classes and flicker variations
- Ensures: Accessibility for users sensitive to motion or animation

### `@media (width <= 640px)`
- Adjusts font size and padding for neon elements on small screens
- Reduces border width for better mobile display
- Sets responsive aspect ratio and dimensions for neon boxes 