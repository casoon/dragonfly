# Focus
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for focus elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Interactive States

#### `.focus-ring`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus ring appearance

#### `.focus-ring`
- Description: Styling for focus ring elements
- Uses: box-shadow, outline properties
- Creates: Styled focus ring appearance

#### `.focus-ring-sm`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus ring sm appearance

#### `.focus-ring-sm`
- Description: Styling for focus ring sm elements
- Uses: box-shadow, outline properties
- Creates: Styled focus ring sm appearance

#### `.focus-ring-lg`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus ring lg appearance

#### `.focus-ring-lg`
- Description: Styling for focus ring lg elements
- Uses: box-shadow, outline properties
- Creates: Styled focus ring lg appearance

#### `.focus-outline`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus outline appearance

#### `.focus-outline`
- Description: Styling for focus outline elements
- Uses: outline, outline-offset properties
- Creates: Styled focus outline appearance

#### `.focus-outline-sm`
- Description: Styling for focus outline sm elements
- Uses: outline-offset, outline-width properties
- Creates: Styled focus outline sm appearance

#### `.focus-outline-lg`
- Description: Styling for focus outline lg elements
- Uses: outline-offset, outline-width properties
- Creates: Styled focus outline lg appearance

#### `.focus-bg`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus bg appearance

#### `.focus-bg`
- Description: Styling for focus bg elements
- Uses: background-color properties
- Creates: Styled focus bg appearance

#### `.focus-bg-sm`
- Description: Styling for focus bg sm elements
- Uses: background-color properties
- Creates: Styled focus bg sm appearance

#### `.focus-bg-lg`
- Description: Styling for focus bg lg elements
- Uses: background-color properties
- Creates: Styled focus bg lg appearance

#### `.focus-color-primary`
- Description: Styling for focus color primary elements
- Uses: --focus-ring-color, --focus-outline-color, --focus-bg-color
- Creates: Styled focus color primary appearance

#### `.focus-color-secondary`
- Description: Styling for focus color secondary elements
- Uses: --focus-ring-color, --focus-outline-color, --focus-bg-color
- Creates: Styled focus color secondary appearance

#### `.focus-color-success`
- Description: Styling for focus color success elements
- Uses: --focus-ring-color, --focus-outline-color, --focus-bg-color
- Creates: Styled focus color success appearance

#### `.focus-color-error`
- Description: Styling for focus color error elements
- Uses: --focus-ring-color, --focus-outline-color, --focus-bg-color
- Creates: Styled focus color error appearance

#### `.focus-color-warning`
- Description: Styling for focus color warning elements
- Uses: --focus-ring-color, --focus-outline-color, --focus-bg-color
- Creates: Styled focus color warning appearance

#### `.focus-color-info`
- Description: Styling for focus color info elements
- Uses: --focus-ring-color, --focus-outline-color, --focus-bg-color
- Creates: Styled focus color info appearance

#### `.focus-ring`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus ring appearance

#### `.focus-ring-sm`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus ring sm appearance

#### `.focus-ring-lg`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus ring lg appearance

#### `.focus-outline`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus outline appearance

#### `.focus-outline-sm`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus outline sm appearance

#### `.focus-outline-lg`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus outline lg appearance

#### `.focus-bg`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus bg appearance

#### `.focus-bg-sm`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus bg sm appearance

#### `.focus-bg-lg`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled focus bg lg appearance

## CSS Custom Properties (Variables)

### Color Variables
- `--focus-ring-color` - Default: `var(--focus-primary, rgb(59 130 246 / 50%))`
  - Controls the color value for focus ring color elements
- `--focus-outline-color` - Default: `var(--focus-primary, #3b82f6)`
  - Controls the color value for focus outline color elements
- `--focus-bg-color` - Default: `var(--focus-primary-bg, rgb(59 130 246 / 10%))`
  - Controls the color value for focus bg color elements
- `--focus-ring-color` - Default: `var(--focus-secondary, rgb(107 114 128 / 50%))`
  - Controls the color value for focus ring color elements
- `--focus-outline-color` - Default: `var(--focus-secondary, #6b7280)`
  - Controls the color value for focus outline color elements
- `--focus-bg-color` - Default: `var(--focus-secondary-bg, rgb(107 114 128 / 10%))`
  - Controls the color value for focus bg color elements
- `--focus-ring-color` - Default: `var(--focus-success, rgb(16 185 129 / 50%))`
  - Controls the color value for focus ring color elements
- `--focus-outline-color` - Default: `var(--focus-success, #10b981)`
  - Controls the color value for focus outline color elements
- `--focus-bg-color` - Default: `var(--focus-success-bg, rgb(16 185 129 / 10%))`
  - Controls the color value for focus bg color elements
- `--focus-ring-color` - Default: `var(--focus-error, rgb(239 68 68 / 50%))`
  - Controls the color value for focus ring color elements
- `--focus-outline-color` - Default: `var(--focus-error, #ef4444)`
  - Controls the color value for focus outline color elements
- `--focus-bg-color` - Default: `var(--focus-error-bg, rgb(239 68 68 / 10%))`
  - Controls the color value for focus bg color elements
- `--focus-ring-color` - Default: `var(--focus-warning, rgb(245 158 11 / 50%))`
  - Controls the color value for focus ring color elements
- `--focus-outline-color` - Default: `var(--focus-warning, #f59e0b)`
  - Controls the color value for focus outline color elements
- `--focus-bg-color` - Default: `var(--focus-warning-bg, rgb(245 158 11 / 10%))`
  - Controls the color value for focus bg color elements
- `--focus-ring-color` - Default: `var(--focus-info, rgb(6 182 212 / 50%))`
  - Controls the color value for focus ring color elements
- `--focus-outline-color` - Default: `var(--focus-info, #06b6d4)`
  - Controls the color value for focus outline color elements
- `--focus-bg-color` - Default: `var(--focus-info-bg, rgb(6 182 212 / 10%))`
  - Controls the color value for focus bg color elements

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance

