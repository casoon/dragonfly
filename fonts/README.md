# Web Fonts in @casoon/ui-lib

This directory contains optimized WOFF2 versions of popular Google Fonts for better performance and privacy. Using self-hosted fonts eliminates external requests to Google's servers and reduces load times.

## New Directory Structure

The fonts are now organized in a new structure:

```
/fonts/
└── roboto/             # Each font has its own directory
    ├── 400.css         # CSS for regular weight
    ├── 700.css         # CSS for bold weight
    ├── index.css       # Imports all weights
    ├── roboto-regular.woff2  # WOFF2 file for regular weight
    └── roboto-bold.woff2     # WOFF2 file for bold weight
```

## Usage in Projects

### Option 1: Import a Single Weight

If you only need a specific weight of a font:

```css
/* Import only Regular (400) */
@import '@casoon/ui-lib/fonts/roboto/400.css';

/* Or import only Bold (700) */
@import '@casoon/ui-lib/fonts/roboto/700.css';
```

### Option 2: Import All Weights of a Font

To import all available weights of a font:

```css
@import '@casoon/ui-lib/fonts/roboto/index.css';
```

### CSS Variables and Utility Classes

Each font file defines CSS variables and utility classes for using the font:

```css
/* CSS Variable */
--font-family-roboto: 'Roboto', system-ui, -apple-system, sans-serif;

/* Utility Class */
.font-roboto { font-family: var(--font-family-roboto); }
```

## Usage in Astro Projects

When using this library in an Astro project (or any project using Vite or Webpack), you can simply import the CSS files as shown above. The build system will automatically analyze the CSS and include the referenced font files in your project's build.

```css
/* In your Astro component or global CSS */
@import '@casoon/ui-lib/fonts/roboto/index.css';
```

This works out of the box with no additional plugins or manual copying required. Vite (used by Astro) or Webpack will handle the fonts automatically and optimize them for your production build.

### Alternative: Direct Asset Imports (Optional)

For more direct control, you can also use Astro's asset imports:

```astro
---
// Import font files directly
import robotoRegular from '@casoon/ui-lib/fonts/roboto/roboto-regular.woff2';
import robotoBold from '@casoon/ui-lib/fonts/roboto/roboto-bold.woff2';
---

<style define:vars={{ robotoRegular, robotoBold }}>
  @font-face {
    font-display: swap;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    src: url(var(--robotoRegular)) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
</style>
```

## Available Fonts

The library includes the following Google Fonts:

### Sans-Serif
- Anton (regular only)
- Arimo
- Bebas Neue (regular only)
- Cabin
- DM Sans
- Dosis
- Fira Sans
- Inter
- Josefin Sans
- Lato
- Montserrat
- Mukta
- Noto Sans
- Nunito
- Open Sans
- Oswald
- Poppins
- PT Sans
- Quicksand
- Raleway
- Roboto
- Roboto Condensed
- Source Sans Pro
- Teko
- Titillium Web
- Ubuntu
- Work Sans

### Serif
- Merriweather
- Playfair Display

### Monospace
- Inconsolata

### Variable Fonts
- Inter Variable (supports weights from 100-900)

Each font is available in Regular (400) and Bold (700) weights, with the exception of Anton and Bebas Neue, which are only available as Regular variants.

## License

Please see the license information in [GOOGLE-FONTS-LICENSE.md](../GOOGLE-FONTS-LICENSE.md) in the project's root directory. 