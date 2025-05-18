# Day
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for day elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.theme-day`
- Description: Styling for theme day elements
- Uses: color-scheme, --color-primary, --color-primary-hover
- Creates: Styled theme day appearance

#### `.theme-day`
- Description: Styling for theme day elements
- Uses: --color-text, --color-text-muted, --color-text-light
- Creates: Styled theme day appearance

#### `.dark-mode`
- Description: Styling for dark mode elements
- Uses: --color-text, --color-text-muted, --color-text-light
- Creates: Styled dark mode appearance

## CSS Custom Properties (Variables)

### Color Variables
- `--color-primary-50` - Default: `var(--color-blue-50)`
  - Controls the color value for color primary 50 elements
- `--color-primary-100` - Default: `var(--color-blue-100)`
  - Controls the color value for color primary 100 elements
- `--color-primary-200` - Default: `var(--color-blue-200)`
  - Controls the color value for color primary 200 elements
- `--color-primary-300` - Default: `var(--color-blue-300)`
  - Controls the color value for color primary 300 elements
- `--color-primary-400` - Default: `var(--color-blue-400)`
  - Controls the color value for color primary 400 elements
- `--color-primary-500` - Default: `var(--color-blue-500)`
  - Controls the color value for color primary 500 elements
- `--color-primary-600` - Default: `var(--color-blue-600)`
  - Controls the color value for color primary 600 elements
- `--color-primary-700` - Default: `var(--color-blue-700)`
  - Controls the color value for color primary 700 elements
- `--color-primary-800` - Default: `var(--color-blue-800)`
  - Controls the color value for color primary 800 elements
- `--color-primary-900` - Default: `var(--color-blue-900)`
  - Controls the color value for color primary 900 elements
- `--color-primary` - Default: `var(--color-primary-600)`
  - Controls the color value for color primary elements
- `--color-primary-hover` - Default: `var(--color-primary-700)`
  - Controls the color value for color primary hover elements
- `--color-primary-active` - Default: `var(--color-primary-800)`
  - Controls the color value for color primary active elements
- `--color-primary-light` - Default: `var(--color-primary-100)`
  - Controls the color value for color primary light elements
- `--color-primary-dark` - Default: `var(--color-primary-900)`
  - Controls the color value for color primary dark elements
- `--color-text` - Default: `light-dark(var(--color-gray-900), var(--color-gray-100))`
  - Controls the color value for color text elements
- `--color-text-muted` - Default: `light-dark(var(--color-gray-600), var(--color-gray-400))`
  - Controls the color value for color text muted elements
- `--color-text-light` - Default: `light-dark(var(--color-gray-400), var(--color-gray-600))`
  - Controls the color value for color text light elements
- `--color-text-inverted` - Default: `light-dark(var(--color-white), var(--color-gray-900))`
  - Controls the color value for color text inverted elements
- `--color-background` - Default: `light-dark(var(--color-white), var(--color-gray-900))`
  - Controls the color value for color background elements
- `--color-background-alt` - Default: `light-dark(var(--color-gray-50), var(--color-gray-800))`
  - Controls the color value for color background alt elements
- `--color-background-elevated` - Default: `light-dark(var(--color-white), var(--color-gray-800))`
  - Controls the color value for color background elevated elements
- `--color-background-inverted` - Default: `light-dark(var(--color-gray-900), var(--color-gray-50))`
  - Controls the color value for color background inverted elements
- `--color-border` - Default: `light-dark(var(--color-gray-200), var(--color-gray-700))`
  - Controls the color value for color border elements
- `--color-border-hover` - Default: `light-dark(var(--color-gray-300), var(--color-gray-600))`
  - Controls the color value for color border hover elements
- `--color-border-focus` - Default: `light-dark(var(--color-blue-500), var(--color-blue-400))`
  - Controls the color value for color border focus elements
- `--color-border-error` - Default: `light-dark(var(--color-red-500), var(--color-red-400))`
  - Controls the color value for color border error elements
- `--color-shadow-sm` - Default: `light-dark(rgb(0 0 0 / 5%), rgb(0 0 0 / 20%))`
  - Controls the color value for color shadow sm elements
- `--color-shadow-md` - Default: `light-dark(rgb(0 0 0 / 10%), rgb(0 0 0 / 30%))`
  - Controls the color value for color shadow md elements
- `--color-shadow-lg` - Default: `light-dark(rgb(0 0 0 / 15%), rgb(0 0 0 / 40%))`
  - Controls the color value for color shadow lg elements
- `--color-shadow-xl` - Default: `light-dark(rgb(0 0 0 / 20%), rgb(0 0 0 / 50%))`
  - Controls the color value for color shadow xl elements
- `--color-success` - Default: `var(--color-green-600)`
  - Controls the color value for color success elements
- `--color-success-hover` - Default: `var(--color-green-700)`
  - Controls the color value for color success hover elements
- `--color-success-active` - Default: `var(--color-green-800)`
  - Controls the color value for color success active elements
- `--color-success-light` - Default: `var(--color-green-100)`
  - Controls the color value for color success light elements
- `--color-success-dark` - Default: `var(--color-green-900)`
  - Controls the color value for color success dark elements
- `--color-warning` - Default: `var(--color-yellow-500)`
  - Controls the color value for color warning elements
- `--color-warning-hover` - Default: `var(--color-yellow-600)`
  - Controls the color value for color warning hover elements
- `--color-warning-active` - Default: `var(--color-yellow-700)`
  - Controls the color value for color warning active elements
- `--color-warning-light` - Default: `var(--color-yellow-100)`
  - Controls the color value for color warning light elements
- `--color-warning-dark` - Default: `var(--color-yellow-900)`
  - Controls the color value for color warning dark elements
- `--color-error` - Default: `var(--color-red-600)`
  - Controls the color value for color error elements
- `--color-error-hover` - Default: `var(--color-red-700)`
  - Controls the color value for color error hover elements
- `--color-error-active` - Default: `var(--color-red-800)`
  - Controls the color value for color error active elements
- `--color-error-light` - Default: `var(--color-red-100)`
  - Controls the color value for color error light elements
- `--color-error-dark` - Default: `var(--color-red-900)`
  - Controls the color value for color error dark elements
- `--color-info` - Default: `var(--color-blue-600)`
  - Controls the color value for color info elements
- `--color-info-hover` - Default: `var(--color-blue-700)`
  - Controls the color value for color info hover elements
- `--color-info-active` - Default: `var(--color-blue-800)`
  - Controls the color value for color info active elements
- `--color-info-light` - Default: `var(--color-blue-100)`
  - Controls the color value for color info light elements
- `--color-info-dark` - Default: `var(--color-blue-900)`
  - Controls the color value for color info dark elements
- `--color-text` - Default: `var(--color-gray-100)`
  - Controls the color value for color text elements
- `--color-text-muted` - Default: `var(--color-gray-400)`
  - Controls the color value for color text muted elements
- `--color-text-light` - Default: `var(--color-gray-600)`
  - Controls the color value for color text light elements
- `--color-text-inverted` - Default: `var(--color-gray-900)`
  - Controls the color value for color text inverted elements
- `--color-background` - Default: `var(--color-gray-900)`
  - Controls the color value for color background elements
- `--color-background-alt` - Default: `var(--color-gray-800)`
  - Controls the color value for color background alt elements
- `--color-background-elevated` - Default: `var(--color-gray-800)`
  - Controls the color value for color background elevated elements
- `--color-background-inverted` - Default: `var(--color-gray-50)`
  - Controls the color value for color background inverted elements
- `--color-border` - Default: `var(--color-gray-700)`
  - Controls the color value for color border elements
- `--color-border-hover` - Default: `var(--color-gray-600)`
  - Controls the color value for color border hover elements
- `--color-border-focus` - Default: `var(--color-blue-400)`
  - Controls the color value for color border focus elements
- `--color-border-error` - Default: `var(--color-red-400)`
  - Controls the color value for color border error elements
- `--color-shadow-sm` - Default: `rgb(0 0 0 / 20%)`
  - Controls the color value for color shadow sm elements
- `--color-shadow-md` - Default: `rgb(0 0 0 / 30%)`
  - Controls the color value for color shadow md elements
- `--color-shadow-lg` - Default: `rgb(0 0 0 / 40%)`
  - Controls the color value for color shadow lg elements
- `--color-shadow-xl` - Default: `rgb(0 0 0 / 50%)`
  - Controls the color value for color shadow xl elements
- `--color-text` - Default: `var(--color-gray-100)`
  - Controls the color value for color text elements
- `--color-text-muted` - Default: `var(--color-gray-400)`
  - Controls the color value for color text muted elements
- `--color-text-light` - Default: `var(--color-gray-600)`
  - Controls the color value for color text light elements
- `--color-text-inverted` - Default: `var(--color-gray-900)`
  - Controls the color value for color text inverted elements
- `--color-background` - Default: `var(--color-gray-900)`
  - Controls the color value for color background elements
- `--color-background-alt` - Default: `var(--color-gray-800)`
  - Controls the color value for color background alt elements
- `--color-background-elevated` - Default: `var(--color-gray-800)`
  - Controls the color value for color background elevated elements
- `--color-background-inverted` - Default: `var(--color-gray-50)`
  - Controls the color value for color background inverted elements
- `--color-border` - Default: `var(--color-gray-700)`
  - Controls the color value for color border elements
- `--color-border-hover` - Default: `var(--color-gray-600)`
  - Controls the color value for color border hover elements
- `--color-border-focus` - Default: `var(--color-blue-400)`
  - Controls the color value for color border focus elements
- `--color-border-error` - Default: `var(--color-red-400)`
  - Controls the color value for color border error elements
- `--color-shadow-sm` - Default: `rgb(0 0 0 / 20%)`
  - Controls the color value for color shadow sm elements
- `--color-shadow-md` - Default: `rgb(0 0 0 / 30%)`
  - Controls the color value for color shadow md elements
- `--color-shadow-lg` - Default: `rgb(0 0 0 / 40%)`
  - Controls the color value for color shadow lg elements
- `--color-shadow-xl` - Default: `rgb(0 0 0 / 50%)`
  - Controls the color value for color shadow xl elements

## Responsive / Media Behavior

### `@media (prefers-color-scheme: dark)`
- Adjusts layout and styling for specific screen conditions

