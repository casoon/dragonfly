# Web Fonts in @casoon/ui-lib

This directory contains optimized WOFF2 versions of popular Google Fonts for better performance and privacy. Using self-hosted fonts eliminates external requests to Google's servers and reduces load times.

## Using Fonts in Astro Projects

When using this library in an Astro project (or any other project that uses npm), there are several ways to incorporate the fonts:

### Option 1: Copy Fonts to Your Public Directory (Recommended)

The simplest approach is to copy the required font files to your project's public directory:

```bash
# From your project root
mkdir -p public/fonts
cp node_modules/@casoon/ui-lib/fonts/*.woff2 public/fonts/
```

Then, create a custom CSS file to load the fonts with the correct paths:

```css
/* src/styles/fonts.css */
@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/inter-regular.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/inter-bold.woff2') format('woff2');
}
```

Import this file in your Astro layout:

```astro
---
import '../styles/fonts.css';
---
```

### Option 2: Use Astro's Integration for Static Assets

For Astro projects, you can use the built-in support for importing static assets:

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
  
  @font-face {
    font-display: swap;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    src: url(var(--interBold)) format('woff2');
  }
</style>
```

### Option 3: Vite Plugin for Font Loading (Advanced)

For more complex setups, you can use Vite plugins like `vite-plugin-fonts` to handle font loading:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import fonts from 'vite-plugin-fonts';

export default defineConfig({
  vite: {
    plugins: [
      fonts({
        custom: {
          families: [
            {
              name: 'Inter',
              local: 'Inter',
              src: './node_modules/@casoon/ui-lib/fonts/inter-*.woff2',
            },
            // Add other fonts as needed
          ],
        },
      }),
    ],
  },
});
```

## Automated Font Loading During Build

To automate the font copying process during your build, you can add a script to your package.json:

```json
{
  "scripts": {
    "prebuild": "mkdir -p public/fonts && cp node_modules/@casoon/ui-lib/fonts/*.woff2 public/fonts/",
    "build": "astro build"
  }
}
```

## Available Fonts

The library includes the following Google Fonts:

- Anton
- Arimo
- Bebas Neue
- Cabin
- DM Sans
- Dosis
- Fira Sans
- Inconsolata
- Inter (including variable font version)
- Josefin Sans
- Lato
- Merriweather
- Montserrat
- Mukta
- Noto Sans
- Nunito
- Open Sans
- Oswald
- Playfair Display
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

Each font is available in both regular (400) and bold (700) weights.

## CSS Variables for Font Families

Each font provides a CSS variable that you can use in your styles:

```css
.my-element {
  font-family: var(--font-family-inter);
}
```

Available variables:
- `--font-family-anton`
- `--font-family-arimo`
- `--font-family-bebas-neue`
- etc.

## Verwendung

Jede Schriftart wird als separate CSS-Datei im Verzeichnis `/typography/web-fonts/` bereitgestellt. Um eine Schriftart zu verwenden, importieren Sie einfach die entsprechende CSS-Datei:

```css
@import "typography/web-fonts/roboto.css";
```

Die WOFF2-Dateien werden dann nur geladen, wenn die Schriftart tatsächlich über den entsprechenden Import eingebunden wird.

## Verfügbare Schriftarten

### Sans-Serif
- Roboto (`roboto.css`)
- Open Sans (`open-sans.css`)
- Lato (`lato.css`)
- Montserrat (`montserrat.css`)
- Oswald (`oswald.css`)
- Raleway (`raleway.css`)
- Poppins (`poppins.css`)
- Source Sans Pro (`source-sans-pro.css`)
- Roboto Condensed (`roboto-condensed.css`)
- Noto Sans (`noto-sans.css`)
- Ubuntu (`ubuntu.css`)
- PT Sans (`pt-sans.css`)
- Nunito (`nunito.css`)
- Inter (`inter.css`)
- Quicksand (`quicksand.css`)
- Mukta (`mukta.css`)
- Work Sans (`work-sans.css`)
- Titillium Web (`titillium-web.css`)
- Cabin (`cabin.css`)
- Fira Sans (`fira-sans.css`)
- DM Sans (`dm-sans.css`)
- Josefin Sans (`josefin-sans.css`)
- Arimo (`arimo.css`)
- Dosis (`dosis.css`)

### Serif
- Merriweather (`merriweather.css`)
- Playfair Display (`playfair-display.css`)

### Monospace
- Inconsolata (`inconsolata.css`)

### Display
- Anton (`anton.css`)
- Bebas Neue (`bebas-neue.css`)
- Teko (`teko.css`)

### Variable Fonts
- Inter Variable (`inter-var.css`) - unterstützt Gewichte von 100-900

## CSS-Variablen und Utility-Klassen

Jede Font-Datei definiert CSS-Variablen und Utility-Klassen für die Verwendung der Schriftart:

```css
/* CSS-Variable */
--font-family-roboto: 'Roboto', system-ui, -apple-system, sans-serif;

/* Utility-Klasse */
.font-roboto { font-family: var(--font-family-roboto); }
```

## Herunterladen der Schriftarten

Die Schriftarten können mit dem Skript `scripts/download-google-fonts.js` heruntergeladen werden:

```bash
# Abhängigkeiten installieren
npm install axios fs-extra

# Skript ausführen
node scripts/download-google-fonts.js
```

Das Skript lädt die WOFF2-Dateien herunter und generiert automatisch die entsprechenden CSS-Dateien.

## Hinweise zur Optimierung

Die WOFF2-Dateien wurden für optimale Webperformance komprimiert und enthalten nur die notwendigen Unicode-Bereiche für lateinische Schriften.

## Lizenz

Beachten Sie die entsprechenden Lizenzhinweise in der Datei [GOOGLE-FONTS-LICENSE.md](../GOOGLE-FONTS-LICENSE.md) im Hauptverzeichnis des Projekts. 