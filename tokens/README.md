# Design Tokens

This directory contains all design tokens of the UI system, thematically organized into separate files.

## Structure

The tokens are divided into the following categories:

- **colors/**: Color variables (primary colors, secondary colors, grayscales, etc.)
- **spacing/**: Spacing and sizes (margins, paddings, size units)
- **typography/**: Typography variables (fonts, sizes, weights, line heights)
- **layout/**: Layout-related variables (breakpoints, container sizes, z-index)
- **effects/**: Effect-related variables (shadows, radii, transitions)

Each category has its own `index.css` file, which is imported in the main `index.css` in the root directory.

## Usage

To use all tokens, simply import the main `index.css`:

```css
@import 'path/to/tokens/index.css';
```

You can also import individual categories:

```css
@import 'path/to/tokens/colors/index.css';
@import 'path/to/tokens/typography/index.css';
```

## Token Names

The tokens follow a consistent naming scheme:

- Colors: `--color-{name}-{shade}` (e.g., `--color-primary-500`)
- Spacing: `--space-{size}` (e.g., `--space-4`)
- Font sizes: `--font-size-{size}` (e.g., `--font-size-lg`)
- Breakpoints: `--breakpoint-{size}` (e.g., `--breakpoint-md`)

## Maintenance Notes

1. Keep token names consistent
2. Organize new tokens in the appropriate category
3. Use `@layer tokens` for all token definitions
4. Add a comment header to each file for description
5. Maintain backward compatibility when updating tokens 