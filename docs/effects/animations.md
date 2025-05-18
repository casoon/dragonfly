# Animation Effects
> Last Modified: 18.05.2024

## File Purpose

This file contains a comprehensive collection of animation effects for modern user interfaces. It provides reusable animation classes, keyframes definitions, and utility classes for timing, delays, and motion preferences. All animations are performance-optimized and respect user preferences for reduced motion.

## CSS Utility Classes

### Basic Animation Controls

#### `.animate`
- Description: Base class for all animated elements
- Depends on: Animation duration variables

#### Animation Direction Classes
- `.direction-normal` - Plays animation in normal direction
- `.direction-reverse` - Plays animation in reverse
- `.direction-alternate` - Alternates between normal and reverse directions
- `.direction-alternate-reverse` - Alternates between reverse and normal directions

#### Animation Fill Mode Classes
- `.fill-none` - Animation effects won't apply before or after execution
- `.fill-forwards` - Element retains the state of the last keyframe when animation ends
- `.fill-backwards` - Animation will apply the property values from the first keyframe before execution
- `.fill-both` - Animation follows rules for both forwards and backwards

#### Animation Iteration Classes
- `.iteration-once`, `.once` - Plays animation once
- `.iteration-twice`, `.twice` - Plays animation twice
- `.iteration-thrice`, `.thrice` - Plays animation three times
- `.iteration-infinite`, `.infinite` - Repeats animation indefinitely

#### Animation Delay Classes
- `.delay-xs` - Extra small delay (50ms)
- `.delay-sm` - Small delay (100ms)
- `.delay-md` - Medium delay (200ms)
- `.delay-lg` - Large delay (500ms)
- `.delay-xl` - Extra large delay (1000ms)

#### Animation Duration Classes
- `.duration-fastest` - 100ms duration
- `.duration-fast` - 200ms duration
- `.duration-normal` - 300ms duration
- `.duration-slow` - 500ms duration
- `.duration-slower` - 700ms duration
- `.duration-slowest` - 1000ms duration

#### Motion Preference Classes
- `.motion-safe` - Animation only plays when user hasn't specified reduced motion
- `.motion-reduce` - Animation plays in reduced form or is disabled when reduced motion is preferred

### Animation Effect Classes

#### Fade Animations
- `.fade-in` - Fades element in from transparent to opaque
- `.fade-out` - Fades element out from opaque to transparent
- `.fade-discrete` - Manages fade transitions for discrete elements
- `.fade-remove` - Manages fade-out for elements being removed

#### Slide Animations
- `.slide-in-up` - Slides element in from below
- `.slide-in-down` - Slides element in from above
- `.slide-in-left` - Slides element in from left
- `.slide-in-right` - Slides element in from right

#### Scale Animations
- `.scale-in` - Scales element in from smaller size
- `.scale-out` - Scales element out to smaller size

#### Scroll-Triggered Animations
- `.scroll-fade-in` - Fades element in when scrolled into view
- `.scroll-slide-in-up` - Slides element up when scrolled into view
- `.scroll-slide-in-left` - Slides element in from left when scrolled into view
- `.scroll-slide-in-right` - Slides element in from right when scrolled into view

#### Interaction Animations
- `.interaction-scale` - Scales element slightly when interacted with
- `.hover-glow` - Adds glow effect on hover
- `.tap-feedback` - Provides tactile feedback on tap/click
- `.hover-grow` - Grows element on hover

#### Transition Utility Classes
- `.transition-opacity` - Smooth transition for opacity changes
- `.transition-transform` - Smooth transition for transform changes
- `.transition-shadow` - Smooth transition for shadow changes
- `.transition-colors` - Smooth transition for color changes
- `.transition-all` - Smooth transition for all properties

#### Continuous Animation Classes
- `.animate-bounce` - Applies bouncing animation
- `.animate-pulse` - Applies pulsing opacity animation
- `.animate-spin` - Applies spinning rotation animation
- `.animate-ping` - Applies ping/radar-like animation
- `.animate-wiggle` - Applies wiggling rotation animation
- `.animate-float` - Applies floating up and down animation
- `.animate-shake` - Applies horizontal shaking animation
- `.animate-heartbeat` - Applies heartbeat-like pulsing animation
- `.animate-elastic` - Applies elastic squishing animation
- `.animate-grow-fade` - Combines growing and fading animation

#### Combined Animation Classes
- `.animate-combined-bounce` - Combines bounce with other effects
- `.animate-combined-shake` - Combines shake with other effects
- `.animate-path` - Animation along a path
- `.animate-zoom-bounce` - Combines zoom and bounce effects

#### Dialog Animation Classes
- `.dialog-animated` - Applies animations to dialog elements
- `.dialog-enter` - Animation for dialog appearance
- `.dialog-exit` - Animation for dialog disappearance
- `.dialog-backdrop-animated` - Animates dialog backdrop

#### Focus Animation Classes
- `.focus-ring-animated` - Animated focus ring for accessibility
- `.sr-focus-style` - Enhanced focus styles for screen readers

#### Staggered Animation Classes
- `.staggered-container` - Container for staggered child animations
- `.staggered-fade-in` - Staggered fade-in for children
- `.staggered-slide-in-up` - Staggered slide-up for children
- `.staggered-slide-in-down` - Staggered slide-down for children
- `.staggered-slide-in-left` - Staggered slide-left for children
- `.staggered-slide-in-right` - Staggered slide-right for children
- `.stagger-group-1/2/3` - Different starting delay groups
- `.stagger-increment-small/normal/large` - Different delay increments
- `.stagger-reverse` - Reverses the stagger sequence

#### Backdrop Classes
- `.backdrop` - Backdrop effect for modal overlays
- `.backdrop-blur` - Blurred backdrop
- `.backdrop-light/dark/medium/strong` - Different backdrop intensity levels
- `.backdrop-transition` - Animated backdrop transitions

#### Animation Context Classes
- `.animation-context-fastest/fast/slow` - Sets speed context for child animations
- `.scale-context-xs/sm/md/lg` - Sets scale context for child animations
- `.move-context-small/medium/large` - Sets movement distance for child animations
- `.delay-context-short/medium/long` - Sets delay context for staggered animations
- `.animation-context-energetic/subtle/playful` - Sets animation style/personality

## Keyframe Animations

### `@keyframes fade-in`
- Animates element from transparent to opaque
- Uses: opacity (0% to 100%)
- Used in: `.fade-in`, `.scroll-fade-in`

### `@keyframes fade-out`
- Animates element from opaque to transparent
- Uses: opacity (100% to 0%)
- Used in: `.fade-out`

### `@keyframes scale-in`
- Scales and fades in an element
- Uses: `--scale-sm` (default: 0.95), opacity
- Used in: `.scale-in`

### `@keyframes slide-in-up`
- Slides element up into position while fading in
- Uses: `--slide-distance`, `--move-md` (default: 16px), opacity
- Used in: `.slide-in-up`, `.scroll-slide-in-up`

### `@keyframes slide-in-down`
- Slides element down into position while fading in
- Uses: `--slide-distance`, `--move-md` (default: 16px), opacity
- Used in: `.slide-in-down`, `.scroll-slide-in-down`

### `@keyframes slide-in-left`
- Slides element left into position while fading in
- Uses: `--slide-distance`, `--move-md` (default: 16px), opacity
- Used in: `.slide-in-left`, `.scroll-slide-in-left`

### `@keyframes slide-in-right`
- Slides element right into position while fading in
- Uses: `--slide-distance`, `--move-md` (default: 16px), opacity
- Used in: `.slide-in-right`, `.scroll-slide-in-right`

### `@keyframes bounce`
- Creates a bouncing effect
- Uses: `--bounce-height` (default: 25%)
- Used in: `.animate-bounce`, `.animate-combined-bounce`

### `@keyframes pulse`
- Creates a pulsing opacity effect
- Uses: `--pulse-opacity-min` (default: 50%)
- Used in: `.animate-pulse`

### `@keyframes spin`
- Creates a continuous rotation
- Used in: `.animate-spin`

### `@keyframes ping`
- Creates an expanding circle/pulse effect
- Uses: `--ping-scale` (default: 2), opacity
- Used in: `.animate-ping`

### `@keyframes wiggle`
- Creates a side-to-side wiggling effect
- Uses: `--wiggle-angle` (default: 3deg)
- Used in: `.animate-wiggle`

### `@keyframes float`
- Creates a gentle floating up and down motion
- Uses: `--float-distance` (default: 10px)
- Used in: `.animate-float`

### `@keyframes shake`
- Creates a rapid side-to-side shaking effect
- Uses: `--shake-distance`, `--shake-distance-sm` (default: 1px)
- Used in: `.animate-shake`, `.animate-combined-shake`

### `@keyframes heartbeat`
- Creates a heart-beating pulsing effect
- Uses: `--heartbeat-scale` (default: 1.3)
- Used in: `.animate-heartbeat`

### `@keyframes elastic`
- Creates a squish-and-stretch elastic effect
- Uses: Various elastic scale variables
- Used in: `.animate-elastic`

### `@keyframes dialog-enter`
- Animation for dialog appearance
- Used in: `.dialog-enter`

### `@keyframes dialog-exit`
- Animation for dialog disappearance
- Used in: `.dialog-exit`

### `@keyframes grow-fade`
- Combined growing and fading animation
- Used in: `.animate-grow-fade`

## CSS Custom Properties (Variables)

### Animation Timing Variables
- `--animation-duration-fastest` - Default: `100ms`
- `--animation-duration-fast` - Default: `200ms`
- `--animation-duration-normal` - Default: `300ms`
- `--animation-duration-slow` - Default: `500ms`
- `--animation-duration-slower` - Default: `700ms`
- `--animation-duration-slowest` - Default: `1000ms`

### Animation Delay Variables
- `--delay-xs` - Default: `50ms`
- `--delay-sm` - Default: `100ms`
- `--delay-md` - Default: `200ms`
- `--delay-lg` - Default: `500ms`
- `--delay-xl` - Default: `1000ms`

### Animation Iteration Variables
- `--iteration-once` - Default: `1`
- `--iteration-twice` - Default: `2`
- `--iteration-thrice` - Default: `3`
- `--iteration-infinite` - Default: `infinite`

### Animation Effect Variables
- `--scale-sm` - Default: `0.95`
- `--move-md` - Default: `16px`
- `--bounce-height` - Default: `25%`
- `--pulse-opacity-min` - Default: `50%`
- `--ping-scale` - Default: `2`
- `--wiggle-angle` - Default: `3deg`
- `--float-distance` - Default: `10px`
- `--shake-distance-sm` - Default: `1px`
- `--heartbeat-scale` - Default: `1.3`
- `--dialog-offset` - Default: `-20px`

### Staggered Animation Variables
- `--stagger-base-delay` - Base delay for staggered animations
- `--stagger-increment` - Delay increment between items
- `--stagger-max-delay` - Maximum delay for staggered items

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables or significantly reduces all animations
- Ensures accessibility for users who are sensitive to motion
- Affects all animation classes, transforming them to immediate state changes
- Removes transitions and animations
- Ensures dialogs and backdrops still function without animation

### `@media (prefers-reduced-motion: no-preference)`
- Enables full animations for users who haven't specified reduced motion preference
- Applies motion-safe animations and hides motion-reduce variants

### `@media (prefers-contrast: more)`
- Enhances animation effects for better visibility and focus when high contrast mode is active
- Improves focus indicators and animation contrast
- Makes backdrop more visible
- Ensures animations don't interfere with content visibility

### `@media (forced-colors: active)`
- Provides special focus styles compatible with Windows High Contrast Mode
- Ensures animations respect system color settings 