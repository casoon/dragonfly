# Dark mode
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for dark mode elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.theme-dark-mode`
- Description: Styling for theme dark mode elements
- Uses: color-scheme, --color-primary, --color-primary-hover
- Creates: Styled theme dark mode appearance

#### `.theme-dark-mode`
- Description: Styling for theme dark mode elements
- Uses: --color-text, --color-text-muted, --color-text-light
- Creates: Styled theme dark mode appearance

#### `.dark-mode`
- Description: Styling for dark mode elements
- Uses: --color-text, --color-text-muted, --color-text-light
- Creates: Styled dark mode appearance

#### `.dark-mode-toggle`
- Description: Styling for dark mode toggle elements
- Uses: background-color properties
- Creates: Styled dark mode toggle appearance

#### `.dark-theme-container`
- Description: Styling for dark theme container elements
- Uses: background-color, border-color, color
- Creates: Styled dark theme container appearance

#### `.inverse-colors`
- Description: Styling for inverse colors elements
- Uses: filter properties
- Creates: Styled inverse colors appearance

#### `.inverse-colors`
- Description: Styling for inverse colors elements
- Uses: filter properties
- Creates: Styled inverse colors appearance

### Special Effects

#### `.dark-mode-toggle`
- Description: Applies smooth transitions between property states
- Uses: inline-flex, transition properties
- Creates: Styled dark mode toggle appearance

## CSS Custom Properties (Variables)

### Color Variables
- `--color-primary-50` - Default: `var(--color-slate-50)`
  - Controls the color value for color primary 50 elements
- `--color-primary-100` - Default: `var(--color-slate-100)`
  - Controls the color value for color primary 100 elements
- `--color-primary-200` - Default: `var(--color-slate-200)`
  - Controls the color value for color primary 200 elements
- `--color-primary-300` - Default: `var(--color-slate-300)`
  - Controls the color value for color primary 300 elements
- `--color-primary-400` - Default: `var(--color-slate-400)`
  - Controls the color value for color primary 400 elements
- `--color-primary-500` - Default: `var(--color-slate-500)`
  - Controls the color value for color primary 500 elements
- `--color-primary-600` - Default: `var(--color-slate-600)`
  - Controls the color value for color primary 600 elements
- `--color-primary-700` - Default: `var(--color-slate-700)`
  - Controls the color value for color primary 700 elements
- `--color-primary-800` - Default: `var(--color-slate-800)`
  - Controls the color value for color primary 800 elements
- `--color-primary-900` - Default: `var(--color-slate-900)`
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
- `--color-secondary-50` - Default: `var(--color-zinc-50)`
  - Controls the color value for color secondary 50 elements
- `--color-secondary-100` - Default: `var(--color-zinc-100)`
  - Controls the color value for color secondary 100 elements
- `--color-secondary-200` - Default: `var(--color-zinc-200)`
  - Controls the color value for color secondary 200 elements
- `--color-secondary-300` - Default: `var(--color-zinc-300)`
  - Controls the color value for color secondary 300 elements
- `--color-secondary-400` - Default: `var(--color-zinc-400)`
  - Controls the color value for color secondary 400 elements
- `--color-secondary-500` - Default: `var(--color-zinc-500)`
  - Controls the color value for color secondary 500 elements
- `--color-secondary-600` - Default: `var(--color-zinc-600)`
  - Controls the color value for color secondary 600 elements
- `--color-secondary-700` - Default: `var(--color-zinc-700)`
  - Controls the color value for color secondary 700 elements
- `--color-secondary-800` - Default: `var(--color-zinc-800)`
  - Controls the color value for color secondary 800 elements
- `--color-secondary-900` - Default: `var(--color-zinc-900)`
  - Controls the color value for color secondary 900 elements
- `--color-secondary` - Default: `var(--color-secondary-600)`
  - Controls the color value for color secondary elements
- `--color-secondary-hover` - Default: `var(--color-secondary-700)`
  - Controls the color value for color secondary hover elements
- `--color-secondary-active` - Default: `var(--color-secondary-800)`
  - Controls the color value for color secondary active elements
- `--color-secondary-light` - Default: `var(--color-secondary-100)`
  - Controls the color value for color secondary light elements
- `--color-secondary-dark` - Default: `var(--color-secondary-900)`
  - Controls the color value for color secondary dark elements
- `--color-accent-50` - Default: `var(--color-neutral-50)`
  - Controls the color value for color accent 50 elements
- `--color-accent-100` - Default: `var(--color-neutral-100)`
  - Controls the color value for color accent 100 elements
- `--color-accent-200` - Default: `var(--color-neutral-200)`
  - Controls the color value for color accent 200 elements
- `--color-accent-300` - Default: `var(--color-neutral-300)`
  - Controls the color value for color accent 300 elements
- `--color-accent-400` - Default: `var(--color-neutral-400)`
  - Controls the color value for color accent 400 elements
- `--color-accent-500` - Default: `var(--color-neutral-500)`
  - Controls the color value for color accent 500 elements
- `--color-accent-600` - Default: `var(--color-neutral-600)`
  - Controls the color value for color accent 600 elements
- `--color-accent-700` - Default: `var(--color-neutral-700)`
  - Controls the color value for color accent 700 elements
- `--color-accent-800` - Default: `var(--color-neutral-800)`
  - Controls the color value for color accent 800 elements
- `--color-accent-900` - Default: `var(--color-neutral-900)`
  - Controls the color value for color accent 900 elements
- `--color-accent` - Default: `var(--color-accent-500)`
  - Controls the color value for color accent elements
- `--color-accent-hover` - Default: `var(--color-accent-600)`
  - Controls the color value for color accent hover elements
- `--color-accent-active` - Default: `var(--color-accent-700)`
  - Controls the color value for color accent active elements
- `--color-accent-light` - Default: `var(--color-accent-100)`
  - Controls the color value for color accent light elements
- `--color-accent-dark` - Default: `var(--color-accent-900)`
  - Controls the color value for color accent dark elements
- `--color-success` - Default: `var(--color-emerald-500)`
  - Controls the color value for color success elements
- `--color-success-hover` - Default: `var(--color-emerald-600)`
  - Controls the color value for color success hover elements
- `--color-success-active` - Default: `var(--color-emerald-700)`
  - Controls the color value for color success active elements
- `--color-success-light` - Default: `var(--color-emerald-100)`
  - Controls the color value for color success light elements
- `--color-success-dark` - Default: `var(--color-emerald-900)`
  - Controls the color value for color success dark elements
- `--color-error` - Default: `var(--color-red-500)`
  - Controls the color value for color error elements
- `--color-error-hover` - Default: `var(--color-red-600)`
  - Controls the color value for color error hover elements
- `--color-error-active` - Default: `var(--color-red-700)`
  - Controls the color value for color error active elements
- `--color-error-light` - Default: `var(--color-red-100)`
  - Controls the color value for color error light elements
- `--color-error-dark` - Default: `var(--color-red-900)`
  - Controls the color value for color error dark elements
- `--color-warning` - Default: `var(--color-amber-500)`
  - Controls the color value for color warning elements
- `--color-warning-hover` - Default: `var(--color-amber-600)`
  - Controls the color value for color warning hover elements
- `--color-warning-active` - Default: `var(--color-amber-700)`
  - Controls the color value for color warning active elements
- `--color-warning-light` - Default: `var(--color-amber-100)`
  - Controls the color value for color warning light elements
- `--color-warning-dark` - Default: `var(--color-amber-900)`
  - Controls the color value for color warning dark elements
- `--color-info` - Default: `var(--color-sky-500)`
  - Controls the color value for color info elements
- `--color-info-hover` - Default: `var(--color-sky-600)`
  - Controls the color value for color info hover elements
- `--color-info-active` - Default: `var(--color-sky-700)`
  - Controls the color value for color info active elements
- `--color-info-light` - Default: `var(--color-sky-100)`
  - Controls the color value for color info light elements
- `--color-info-dark` - Default: `var(--color-sky-900)`
  - Controls the color value for color info dark elements
- `--color-text` - Default: `light-dark(var(--color-gray-900), var(--color-gray-100))`
  - Controls the color value for color text elements
- `--color-text-muted` - Default: `light-dark(var(--color-gray-600), var(--color-gray-400))`
  - Controls the color value for color text muted elements
- `--color-text-light` - Default: `light-dark(var(--color-gray-400), var(--color-gray-600))`
  - Controls the color value for color text light elements
- `--color-text-inverted` - Default: `light-dark(var(--color-gray-100), var(--color-gray-900))`
  - Controls the color value for color text inverted elements
- `--color-background` - Default: `light-dark(var(--color-gray-50), var(--color-gray-900))`
  - Controls the color value for color background elements
- `--color-background-alt` - Default: `light-dark(var(--color-gray-100), var(--color-gray-800))`
  - Controls the color value for color background alt elements
- `--color-background-elevated` - Default: `light-dark(var(--color-white), var(--color-gray-800))`
  - Controls the color value for color background elevated elements
- `--color-background-inverted` - Default: `light-dark(var(--color-gray-900), var(--color-gray-50))`
  - Controls the color value for color background inverted elements
- `--color-border` - Default: `light-dark(var(--color-gray-200), var(--color-gray-700))`
  - Controls the color value for color border elements
- `--color-border-hover` - Default: `light-dark(var(--color-gray-300), var(--color-gray-600))`
  - Controls the color value for color border hover elements
- `--color-border-focus` - Default: `light-dark(var(--color-primary-500), var(--color-primary-400))`
  - Controls the color value for color border focus elements
- `--color-border-error` - Default: `light-dark(var(--color-error-500), var(--color-error-400))`
  - Controls the color value for color border error elements
- `--color-shadow-sm` - Default: `light-dark(rgb(0 0 0 / 5%), rgb(0 0 0 / 20%))`
  - Controls the color value for color shadow sm elements
- `--color-shadow-md` - Default: `light-dark(rgb(0 0 0 / 10%), rgb(0 0 0 / 30%))`
  - Controls the color value for color shadow md elements
- `--color-shadow-lg` - Default: `light-dark(rgb(0 0 0 / 15%), rgb(0 0 0 / 40%))`
  - Controls the color value for color shadow lg elements
- `--color-shadow-xl` - Default: `light-dark(rgb(0 0 0 / 20%), rgb(0 0 0 / 50%))`
  - Controls the color value for color shadow xl elements
- `--color-focus-ring` - Default: `light-dark(var(--color-primary-500), var(--color-primary-400))`
  - Controls the color value for color focus ring elements
- `--color-focus-ring-offset` - Default: `light-dark(var(--color-white), var(--color-gray-900))`
  - Controls the color value for color focus ring offset elements
- `--color-outline` - Default: `light-dark(var(--color-primary-500), var(--color-primary-400))`
  - Controls the color value for color outline elements
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
- `--color-border-focus` - Default: `var(--color-primary-400)`
  - Controls the color value for color border focus elements
- `--color-border-error` - Default: `var(--color-error-400)`
  - Controls the color value for color border error elements
- `--color-shadow-sm` - Default: `rgb(0 0 0 / 20%)`
  - Controls the color value for color shadow sm elements
- `--color-shadow-md` - Default: `rgb(0 0 0 / 30%)`
  - Controls the color value for color shadow md elements
- `--color-shadow-lg` - Default: `rgb(0 0 0 / 40%)`
  - Controls the color value for color shadow lg elements
- `--color-shadow-xl` - Default: `rgb(0 0 0 / 50%)`
  - Controls the color value for color shadow xl elements
- `--color-focus-ring` - Default: `var(--color-primary-400)`
  - Controls the color value for color focus ring elements
- `--color-focus-ring-offset` - Default: `var(--color-gray-900)`
  - Controls the color value for color focus ring offset elements
- `--color-outline` - Default: `var(--color-primary-400)`
  - Controls the color value for color outline elements
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
- `--color-border-focus` - Default: `var(--color-primary-400)`
  - Controls the color value for color border focus elements
- `--color-border-error` - Default: `var(--color-error-400)`
  - Controls the color value for color border error elements
- `--color-shadow-sm` - Default: `rgb(0 0 0 / 20%)`
  - Controls the color value for color shadow sm elements
- `--color-shadow-md` - Default: `rgb(0 0 0 / 30%)`
  - Controls the color value for color shadow md elements
- `--color-shadow-lg` - Default: `rgb(0 0 0 / 40%)`
  - Controls the color value for color shadow lg elements
- `--color-shadow-xl` - Default: `rgb(0 0 0 / 50%)`
  - Controls the color value for color shadow xl elements
- `--color-focus-ring` - Default: `var(--color-primary-400)`
  - Controls the color value for color focus ring elements
- `--color-focus-ring-offset` - Default: `var(--color-gray-900)`
  - Controls the color value for color focus ring offset elements
- `--color-outline` - Default: `var(--color-primary-400)`
  - Controls the color value for color outline elements

## Responsive / Media Behavior

### `@media (prefers-color-scheme: dark)`
- Adjusts layout and styling for specific screen conditions

