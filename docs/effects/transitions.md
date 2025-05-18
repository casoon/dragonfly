# Transition Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a comprehensive set of transition effects for modern user interfaces. It includes standard CSS transitions as utility classes and supports the modern View Transitions API for cross-document and element transitions. All effects are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Basic Transition Classes

#### `.transition-all`
- Description: Applies transition to all properties
- Uses: 150ms duration with ease curve
- Depends on: `cubic-bezier(0.4, 0, 0.2, 1)` timing function

#### `.transition-transform`
- Description: Applies transition only to transform properties
- Uses: 150ms duration with ease curve
- Useful for: Animations that only change position, rotation, or scale

#### `.transition-opacity`
- Description: Applies transition only to opacity changes
- Uses: 150ms duration with ease curve
- Useful for: Fade effects and visibility changes

#### `.transition-colors`
- Description: Applies transition to color-related properties
- Uses: 150ms duration with ease curve
- Affects: color, background-color, border-color, text-decoration-color, fill, stroke

#### `.transition-shadow`
- Description: Applies transition only to box-shadow property
- Uses: 150ms duration with ease curve
- Useful for: Elevation and hover effects

#### `.transition-width`
- Description: Applies transition only to width property
- Uses: 150ms duration with ease curve
- Useful for: Expanding elements horizontally

#### `.transition-height`
- Description: Applies transition only to height property
- Uses: 150ms duration with ease curve
- Useful for: Expanding elements vertically

#### `.transition-spacing`
- Description: Applies transition to margin and padding
- Uses: 150ms duration with ease curve
- Useful for: Spacing animations that don't affect other properties

### Duration Classes

#### `.transition-fast`
- Description: Applies a fast transition duration
- Sets: `transition-duration: 75ms`

#### `.transition-normal`
- Description: Applies the default transition duration
- Sets: `transition-duration: 150ms`

#### `.transition-slow`
- Description: Applies a slow transition duration
- Sets: `transition-duration: 300ms`

#### `.transition-slower`
- Description: Applies a slower transition duration
- Sets: `transition-duration: 500ms`

#### `.transition-slowest`
- Description: Applies the slowest transition duration
- Sets: `transition-duration: 1000ms`

### Timing Function Classes

#### `.transition-ease`
- Description: Standard ease timing function
- Sets: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)`

#### `.transition-linear`
- Description: Linear timing function with no easing
- Sets: `transition-timing-function: linear`

#### `.transition-ease-in`
- Description: Ease-in timing function (slow start, fast end)
- Sets: `transition-timing-function: cubic-bezier(0.4, 0, 1, 1)`

#### `.transition-ease-out`
- Description: Ease-out timing function (fast start, slow end)
- Sets: `transition-timing-function: cubic-bezier(0, 0, 0.2, 1)`

#### `.transition-ease-in-out`
- Description: Ease-in-out timing function (slow start, slow end)
- Sets: `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)`

### View Transition API Classes

#### Named Transition Elements

- `.view-transition-basic` - Enables auto-named view transitions
- `.view-transition-hero` - Names an element as "hero" for hero transitions
- `.view-transition-card` - Names an element as "card" for card transitions
- `.view-transition-header` - Names an element as "header" for header transitions
- `.view-transition-content` - Names an element as "content" for content transitions
- `.view-transition-poster` - Names an element as "poster" for poster transitions

#### Poster Transition Classes

- `.poster-cover` - Uses object-fit: cover for poster transitions
- `.poster-contain` - Uses object-fit: contain for poster transitions
- `.poster-zoom-in` - Applies zoom effect to poster transitions
- `.poster-flip` - Applies 3D flip effect to poster transitions
- `.poster-reveal` - Applies circular reveal effect to poster transitions

#### Cross-Document Transition Classes

- `.cross-fade` - Simple fade transition between pages
- `.cross-slide-left` - Slide transition from right to left
- `.cross-slide-right` - Slide transition from left to right
- `.cross-scale` - Scale transition with fade effect

## Keyframe Animations

### `@keyframes fade-out`
- Animates from full opacity to transparent
- Uses: opacity (100% to 0%)
- Used in: `::view-transition-old(root)`

### `@keyframes fade-in`
- Animates from transparent to full opacity
- Uses: opacity (0% to 100%)
- Used in: `::view-transition-new(root)`

### `@keyframes scale-down-fade-out`
- Combined scale and fade out animation
- Uses: scale transform (1 to 0.8) and opacity
- Used in: `::view-transition-old(hero)`

### `@keyframes scale-up-fade-in`
- Combined scale and fade in animation
- Uses: scale transform (0.8 to 1) and opacity
- Used in: `::view-transition-new(hero)`

### `@keyframes slide-left-fade-out`
- Combined slide left and fade out animation
- Uses: translateX transform (0 to -30px) and opacity
- Used in: `::view-transition-old(card)`

### `@keyframes slide-right-fade-in`
- Combined slide right and fade in animation
- Uses: translateX transform (30px to 0) and opacity
- Used in: `::view-transition-new(card)`

### `@keyframes cross-fade`
- Simple cross-fade animation for page transitions
- Uses: opacity (0% to 100%)
- Used in: `.cross-fade`

### `@keyframes cross-slide-left`
- Slide from right to left for page transitions
- Uses: translateX transform (100% to 0)
- Used in: `.cross-slide-left`

### `@keyframes cross-slide-right`
- Slide from left to right for page transitions
- Uses: translateX transform (-100% to 0)
- Used in: `.cross-slide-right`

### `@keyframes cross-scale`
- Scale up with fade for page transitions
- Uses: scale transform (0.9 to 1) and opacity
- Used in: `.cross-scale`

### `@keyframes zoom-out`
- Zoom out with fade effect
- Uses: scale transform (1 to 1.2) and opacity
- Used in: `.poster-zoom-in ::view-transition-old(poster)`

### `@keyframes zoom-in`
- Zoom in with fade effect
- Uses: scale transform (0.8 to 1) and opacity
- Used in: `.poster-zoom-in ::view-transition-new(poster)`

### `@keyframes flip-out`
- 3D flip out effect using perspective
- Uses: rotateY transform (0 to -90deg) and opacity
- Used in: `.poster-flip ::view-transition-old(poster)`

### `@keyframes flip-in`
- 3D flip in effect using perspective
- Uses: rotateY transform (90deg to 0) and opacity
- Used in: `.poster-flip ::view-transition-new(poster)`

### `@keyframes circle-out`
- Circular clip-path animation that closes
- Uses: clip-path (circle(100% at center) to circle(0% at center))
- Used in: `.poster-reveal ::view-transition-old(poster)`

### `@keyframes circle-in`
- Circular clip-path animation that opens
- Uses: clip-path (circle(0% at center) to circle(100% at center))
- Used in: `.poster-reveal ::view-transition-new(poster)`

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables all transitions by setting `transition: none`
- Disables all animations by setting `animation: none`
- Ensures accessibility for users who are sensitive to motion
- Affects all transition utility classes and view transition animations 