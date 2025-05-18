# Shadow Effects
> Last Modified: 18.05.2024

## File Purpose

This file provides a comprehensive collection of shadow effects for modern UIs. It includes various box-shadow utilities with different sizes, intensities, and styles. All effects are performance-optimized through the use of CSS variables and respect user preferences for reduced motion.

## CSS Utility Classes

### Basic Shadow Classes

#### `.shadow-sm`
- Description: Small, subtle shadow effect
- Uses: Light box-shadow with minimal offset and blur
- Creates: Delicate elevation with 1px offset and 2px blur

#### `.shadow`
- Description: Standard, default shadow effect
- Uses: Medium box-shadow with subtle layering
- Creates: Standard elevation with split shadow effect

#### `.shadow-md`
- Description: Medium shadow effect
- Uses: Moderate box-shadow with increased offset and blur
- Creates: Noticeable elevation with 4px/6px offset and broader blur

#### `.shadow-lg`
- Description: Large shadow effect
- Uses: Substantial box-shadow with pronounced offset and blur
- Creates: Significant elevation with 10px/15px offset and extended blur radius

#### `.shadow-xl`
- Description: Extra large shadow effect
- Uses: Heavy box-shadow with dramatic offset and blur
- Creates: Prominent elevation with 20px/25px offset and wide blur spread

#### `.shadow-2xl`
- Description: Double extra large shadow effect
- Uses: Maximum box-shadow with extensive offset and blur
- Creates: Maximum elevation with 25px/50px offset and intense blur radius

### Special Shadow Styles

#### `.shadow-inner`
- Description: Inset shadow effect
- Uses: Inner box-shadow with subtle blur
- Creates: Debossed/pressed in appearance

#### `.shadow-none`
- Description: Removes any shadow effects
- Uses: Null box-shadow value
- Creates: Flat appearance with no elevation

## CSS Custom Properties (Variables)

### Shadow Variables
- `--shadow-sm` - Default: `0 1px 2px 0 rgb(0 0 0 / 5%)`
- `--shadow` - Default: `0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px -1px rgb(0 0 0 / 10%)`
- `--shadow-md` - Default: `0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%)`
- `--shadow-lg` - Default: `0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%)`
- `--shadow-xl` - Default: `0 20px 25px -5px rgb(0 0 0 / 10%), 0 8px 10px -6px rgb(0 0 0 / 10%)`
- `--shadow-2xl` - Default: `0 25px 50px -12px rgb(0 0 0 / 25%)`
- `--shadow-inner` - Default: `inset 0 2px 4px 0 rgb(0 0 0 / 5%)`
- `--shadow-none` - Default: `0 0 #0000`

## Implementation Details

The shadow effects use a combination of techniques for optimal results:
- Multiple shadow layers for realistic depth perception
- RGB color with alpha transparency for better blending
- CSS variables for easy theming and customization
- Subtle color differences in layered shadows for more natural appearance

## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables transitions on shadow hover effects
- Specifically targets `.shadow-hover` and `.shadow-transition` classes
- Ensures accessibility for users who are sensitive to motion 