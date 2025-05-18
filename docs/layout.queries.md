# Layout Queries
> Last Modified: 18.05.2025

## File Purpose

This file provides responsive media queries and container query definitions for the layout system. It enables adaptive layouts based on viewport size and container dimensions.

## CSS Utility Classes

This file defines several core utility classes for layout queries functionality:

### Base Classes

#### `.layout.queries-container`
- Description: Main container element for layout queries content
- Uses: CSS variables and layout properties
- Creates: Structured container with appropriate spacing and alignment

## CSS Custom Properties (Variables)

### Layout Queries Variables
- `--layout.queries-spacing` - Default: `1rem`
  - Controls spacing between layout queries elements
- `--layout.queries-padding` - Default: `0.5rem`
  - Controls internal padding of layout queries elements

## Technical Implementation Details

The layout queries system uses several advanced CSS techniques:
1. CSS layer architecture for style encapsulation
2. Custom properties for theming and customization
3. Logical properties for better internationalization support

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
