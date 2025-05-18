# Neos
> Last Modified: 18.05.2024

## File Purpose

This file provides styles for neos elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

### Base Classes

#### `.neo`
- Description: Styling for neo elements
- Uses: background, border-radius, box-shadow
- Creates: Styled neo appearance

#### `.neo-inset`
- Description: Styling for neo inset elements
- Uses: background, border-radius, box-shadow
- Creates: Styled neo inset appearance

#### `.neo-primary`
- Description: Styling for neo primary elements
- Uses: --neo-bg, --neo-shadow-dark, --neo-shadow-light
- Creates: Styled neo primary appearance

#### `.neo-secondary`
- Description: Styling for neo secondary elements
- Uses: --neo-bg, --neo-shadow-dark, --neo-shadow-light
- Creates: Styled neo secondary appearance

#### `.neo-success`
- Description: Styling for neo success elements
- Uses: --neo-bg, --neo-shadow-dark, --neo-shadow-light
- Creates: Styled neo success appearance

#### `.neo-error`
- Description: Styling for neo error elements
- Uses: --neo-bg, --neo-shadow-dark, --neo-shadow-light
- Creates: Styled neo error appearance

#### `.neo-warning`
- Description: Styling for neo warning elements
- Uses: --neo-bg, --neo-shadow-dark, --neo-shadow-light
- Creates: Styled neo warning appearance

#### `.neo-info`
- Description: Styling for neo info elements
- Uses: --neo-bg, --neo-shadow-dark, --neo-shadow-light
- Creates: Styled neo info appearance

#### `.neo-glow`
- Description: Styling for neo glow elements
- Uses: box-shadow properties
- Creates: Styled neo glow appearance

#### `.neo-border`
- Description: Styling for neo border elements
- Uses: border properties
- Creates: Styled neo border appearance

#### `.neo-gradient`
- Description: Styling for neo gradient elements
- Uses: background properties
- Creates: Styled neo gradient appearance

### Variants

#### `.neo-sm`
- Description: Styling for neo sm elements
- Uses: border-radius, box-shadow properties
- Creates: Styled neo sm appearance

#### `.neo-lg`
- Description: Styling for neo lg elements
- Uses: border-radius, box-shadow properties
- Creates: Styled neo lg appearance

### Interactive States

#### `.neo-hover`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled neo hover appearance

#### `.neo-hover`
- Description: Applies visual transformation effects to the element
- Uses: transform properties
- Creates: Shifted element with altered position

#### `.neo-hover-inset`
- Description: Styling applied when the user hovers over the element
- Uses: box-shadow properties
- Creates: Styled neo hover inset appearance

#### `.neo-active`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled neo active appearance

#### `.neo-active`
- Description: Applies visual transformation effects to the element
- Uses: transform properties
- Creates: Scaled element with transformed size

#### `.neo-hover`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled neo hover appearance

#### `.neo-hover-inset`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled neo hover inset appearance

#### `.neo-active`
- Description: Applies smooth transitions between property states
- Uses: transition properties
- Creates: Styled neo active appearance

#### `.neo-hover`
- Description: Applies visual transformation effects to the element
- Uses: transform properties
- Creates: Styled neo hover appearance

#### `.neo-active`
- Description: Applies visual transformation effects to the element
- Uses: transform properties
- Creates: Styled neo active appearance

## CSS Custom Properties (Variables)

### Component Variables
- `--neo-bg` - Default: `var(--color-primary-light, #e6f3ff)`
  - Configures the neo bg setting
- `--neo-shadow-dark` - Default: `var(--color-primary-dark, #b3d1ff)`
  - Configures the shadow appearance for neo shadow dark
- `--neo-shadow-light` - Default: `var(--color-primary-lighter, #f0f7ff)`
  - Configures the shadow appearance for neo shadow light
- `--neo-bg` - Default: `var(--color-secondary-light, #f0f0f0)`
  - Configures the neo bg setting
- `--neo-shadow-dark` - Default: `var(--color-secondary-dark, #d1d1d1)`
  - Configures the shadow appearance for neo shadow dark
- `--neo-shadow-light` - Default: `var(--color-secondary-lighter, #fff)`
  - Configures the shadow appearance for neo shadow light
- `--neo-bg` - Default: `var(--color-success-light, #e6fff0)`
  - Configures the neo bg setting
- `--neo-shadow-dark` - Default: `var(--color-success-dark, #b3ffd1)`
  - Configures the shadow appearance for neo shadow dark
- `--neo-shadow-light` - Default: `var(--color-success-lighter, #f0fff7)`
  - Configures the shadow appearance for neo shadow light
- `--neo-bg` - Default: `var(--color-error-light, #ffe6e6)`
  - Configures the neo bg setting
- `--neo-shadow-dark` - Default: `var(--color-error-dark, #ffb3b3)`
  - Configures the shadow appearance for neo shadow dark
- `--neo-shadow-light` - Default: `var(--color-error-lighter, #fff0f0)`
  - Configures the shadow appearance for neo shadow light
- `--neo-bg` - Default: `var(--color-warning-light, #fff7e6)`
  - Configures the neo bg setting
- `--neo-shadow-dark` - Default: `var(--color-warning-dark, #ffe0b3)`
  - Configures the shadow appearance for neo shadow dark
- `--neo-shadow-light` - Default: `var(--color-warning-lighter, #fffaf0)`
  - Configures the shadow appearance for neo shadow light
- `--neo-bg` - Default: `var(--color-info-light, #e6f7ff)`
  - Configures the neo bg setting
- `--neo-shadow-dark` - Default: `var(--color-info-dark, #b3e0ff)`
  - Configures the shadow appearance for neo shadow dark
- `--neo-shadow-light` - Default: `var(--color-info-lighter, #f0f9ff)`
  - Configures the shadow appearance for neo shadow light

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance

