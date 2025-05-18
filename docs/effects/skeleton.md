# Skeleton Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a comprehensive collection of skeleton loading effects for modern UIs. It includes various skeleton placeholders for text, images, cards, and layout structures that can be used during content loading. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Base Skeleton Classes

#### `.skeleton`
- Description: Base skeleton effect with animated loading gradient
- Uses: Linear gradient background with animation
- Creates: Shimmering loading effect that moves horizontally

#### `.skeleton-sm`
- Description: Faster, smaller skeleton effect
- Uses: Shortened animation duration (1s instead of 1.5s)
- Creates: Quicker loading shimmer effect

#### `.skeleton-lg`
- Description: Slower, larger skeleton effect
- Uses: Extended animation duration (2s instead of 1.5s)
- Creates: Slower, more pronounced loading shimmer effect

### Content-Specific Skeleton Classes

#### Text Skeletons

- `.skeleton-text` - Standard text line placeholder
- `.skeleton-text-sm` - Smaller text line placeholder
- `.skeleton-text-lg` - Larger text line placeholder

#### Shape Skeletons

- `.skeleton-circle` - Circular skeleton placeholder (perfect for avatars)
- `.skeleton-circle-sm` - Smaller circular skeleton placeholder
- `.skeleton-circle-lg` - Larger circular skeleton placeholder

- `.skeleton-square` - Square skeleton placeholder
- `.skeleton-square-sm` - Smaller square skeleton placeholder
- `.skeleton-square-lg` - Larger square skeleton placeholder

#### Image Skeletons

- `.skeleton-image` - Image placeholder with 16:9 aspect ratio
- `.skeleton-image-sm` - Smaller image placeholder (max-width: 200px)
- `.skeleton-image-lg` - Larger image placeholder (max-width: 400px)

### Layout Skeleton Classes

#### `.skeleton-card`
- Description: Card layout skeleton with flexbox structure
- Uses: Border radius, padding, and gap properties
- Creates: Placeholder for card components with spacing for content

#### `.skeleton-card-sm` / `.skeleton-card-lg`
- Variations with smaller/larger padding and gap values

#### `.skeleton-list`
- Description: Vertical list layout for skeleton items
- Uses: Flexbox column layout with appropriate spacing
- Creates: Stacked skeleton items for list displays

#### `.skeleton-list-sm` / `.skeleton-list-lg`
- Variations with smaller/larger gap values

#### `.skeleton-grid`
- Description: Grid layout for multiple skeleton items
- Uses: CSS Grid with responsive column sizing
- Creates: Responsive grid of skeleton placeholders

#### `.skeleton-grid-sm` / `.skeleton-grid-lg`
- Variations with smaller/larger item sizes and gap values

## Keyframe Animations

### `@keyframes skeleton-loading`
- Animates the background position to create shimmer effect
- Uses: Background position shift from 200% to -200%
- Creates: Continuous shimmer effect moving across the skeleton elements

## CSS Custom Properties (Variables)

### Skeleton Color Variables
- `--skeleton-start` - Default: `rgb(0 0 0 / 10%)` - Lighter color in the gradient
- `--skeleton-end` - Default: `rgb(0 0 0 / 20%)` - Darker color in the gradient

These variables can be customized to match your theme, for example:
- Light mode: Light gray to medium gray gradient
- Dark mode: Dark gray to medium gray gradient

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables the skeleton loading animation
- Replaces the animated gradient with a static background
- Uses the `--skeleton-start` color as a solid background
- Ensures accessibility for users who are sensitive to motion 