# Core
> Last Modified: 18.05.2025

## File Purpose

This is the main entry file for the UI library. It imports and organizes all CSS modules into a layered architecture, manages import order, establishes CSS cascade layers, and ensures consistent rendering across browsers.

## CSS Utility Classes

This file defines several core utility classes for core functionality:

### Base Classes

#### `.core-container`
- Description: Main container element for core content
- Uses: CSS variables and layout properties
- Creates: Structured container with appropriate spacing and alignment

## CSS Custom Properties (Variables)

### Core Variables
- `--core-spacing` - Default: `1rem`
  - Controls spacing between core elements
- `--core-padding` - Default: `0.5rem`
  - Controls internal padding of core elements

## Technical Implementation Details

The core system uses several advanced CSS techniques:
1. CSS layer architecture for style encapsulation
2. Custom properties for theming and customization
3. Logical properties for better internationalization support

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
