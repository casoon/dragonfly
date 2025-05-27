# Web Fonts in @casoon/ui-lib

This directory contains CSS files for loading various web fonts included in the library. The fonts are provided as optimized WOFF2 files located in the `/fonts` directory of the library.

## Important Note About Font Paths

The CSS files in this directory use **relative paths** to reference font files:

```css
/* Example from inter.css */
@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  src: url('../../fonts/inter-regular.woff2') format('woff2');
}
```

These paths work correctly when:
1. You're using the files directly from this repository
2. You're using the CSS files and have the same directory structure

However, **when using this library via npm in an Astro project, these paths will not work correctly** because the fonts will be in `node_modules/@casoon/ui-lib/fonts/`.

## Recommended Approach for Astro Projects

For Astro projects, we recommend one of the following approaches:

### Option 1: Copy Font Files (Recommended)

Copy the font files to your public directory and create custom font-face declarations:

```bash
# From your project root
mkdir -p public/fonts
cp node_modules/@casoon/ui-lib/fonts/*.woff2 public/fonts/
```

Then create a custom CSS file:

```css
/* src/styles/fonts.css */
@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/inter-regular.woff2') format('woff2');
}
```

### Option 2: Import Individual Font Styles

You can import the CSS variables and font family utilities from each font file without using their `@font-face` declarations:

```css
/* In your CSS */
:root {
  /* Import font family variables */
  --font-family-inter: 'Inter', system-ui, -apple-system, sans-serif;
}

/* Define your own font-face with correct paths */
@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/inter-regular.woff2') format('woff2');
}

/* Use the utility classes */
.font-inter {
  font-family: var(--font-family-inter);
}
```

### Option 3: Use Asset Imports in Astro

For the most direct approach, use Astro's asset imports:

```astro
---
// Import font files directly
import interRegular from '@casoon/ui-lib/fonts/inter-regular.woff2';
import interBold from '@casoon/ui-lib/fonts/inter-bold.woff2';
---

<style define:vars={{ interRegular, interBold }}>
  @font-face {
    font-display: swap;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    src: url(var(--interRegular)) format('woff2');
  }
</style>
```

## For More Information

See the [main fonts README](/fonts/README.md) for comprehensive information on:
- Complete list of available fonts
- Additional integration options
- Automated build processes
- CSS variables for font families 