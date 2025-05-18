# Accessibility
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for accessibility elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.a11y-motion-safe`
- Description: Hides the element by removing it from the layout flow
- Uses: none properties
- Creates: Invisible element that doesn't take up space

#### `.a11y-motion-reduce`
- Description: Styling for a11y motion reduce elements
- Uses: block properties
- Creates: Styled a11y motion reduce appearance

#### `.a11y-border`
- Description: Styling for a11y border elements
- Uses: border properties
- Creates: Styled a11y border appearance

#### `.a11y-outline-none`
- Description: Styling for a11y outline none elements
- Uses: outline properties
- Creates: Styled a11y outline none appearance

#### `.a11y-high-contrast-safe`
- Description: Hides the element by removing it from the layout flow
- Uses: none properties
- Creates: Invisible element that doesn't take up space

#### `.a11y-high-contrast`
- Description: Styling for a11y high contrast elements
- Uses: block properties
- Creates: Styled a11y high contrast appearance

#### `.a11y-contrast-border`
- Description: Styling for a11y contrast border elements
- Uses: border properties
- Creates: Styled a11y contrast border appearance

#### `.a11y-low-contrast`
- Description: Hides the element by removing it from the layout flow
- Uses: none properties
- Creates: Invisible element that doesn't take up space

#### `.a11y-high-contrast`
- Description: Styling for a11y high contrast elements
- Uses: block properties
- Creates: Styled a11y high contrast appearance

#### `.card-content`
- Description: Styling for card content elements
- Uses: text-align properties
- Creates: Styled card content appearance

#### `.button-icon`
- Description: Styling for button icon elements
- Uses: margin-left, margin-right properties
- Creates: Styled button icon appearance

## CSS Custom Properties (Variables)

### Component Variables
- `--focus-visible-outline` - Default: `3px solid !important`
  - Configures the focus visible outline setting
- `--focus-visible-outline-offset` - Default: `3px !important`
  - Configures the focus visible outline offset setting

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
