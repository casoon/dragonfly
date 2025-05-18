# Icons
> Last Modified: 18.05.2025

## File Purpose

This file provides the foundation styles for the icons system. It includes base icon styling, sizing variants, positioning utilities, and integration with the overall design system.

## CSS Utility Classes

This file defines several core utility classes for icons functionality:

### Base Classes

#### `.icons-container`
- Description: Main container element for icons content
- Uses: CSS variables and layout properties
- Creates: Structured container with appropriate spacing and alignment

## CSS Custom Properties (Variables)

### Icons Variables
- `--icons-spacing` - Default: `1rem`
  - Controls spacing between icons elements
- `--icons-padding` - Default: `0.5rem`
  - Controls internal padding of icons elements

## Technical Implementation Details

The icons system uses several advanced CSS techniques:
1. CSS layer architecture for style encapsulation
2. Custom properties for theming and customization
3. Logical properties for better internationalization support

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
