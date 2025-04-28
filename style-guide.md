# Casoon UI Style Guide

Dieses Dokument beschreibt die Struktur, Konzepte und Verwendung des Casoon UI Design-Systems.

## Inhaltsverzeichnis

- [Projektstruktur](#projektstruktur)
- [CSS-Architektur](#css-architektur)
- [Design-Tokens](#design-tokens)
- [Farben](#farben)
- [Typografie](#typografie)
- [Layout](#layout)
- [Komponenten](#komponenten)
- [Themes](#themes)
- [Brand-Anpassungen](#brand-anpassungen)
- [Utility-Klassen](#utility-klassen)
- [Verwendung im Projekt](#verwendung-im-projekt)

## Projektstruktur

Das Casoon UI Design-System ist wie folgt strukturiert:

```
casoon-ui-lib/
├── core.css              # Haupt-CSS-Datei mit Layer-Imports
├── modules/              # CSS-Module für Komponenten
├── layers/               # CSS-Layer für Grundfunktionen
│   ├── tokens.css        # Design-Tokens und Variablen
│   ├── reset.css         # CSS-Reset
│   ├── colors.css        # Farbdefinitionen
│   ├── typography.css    # Typografie-Styles
│   ├── layout.css        # Layout-System
│   ├── utilities.css     # Utility-Klassen
│   ├── animations.css    # Animationen
│   ├── effects.css       # Effekte (Hauptdatei)
│   ├── effects/          # Zusätzliche Effekte
│   ├── forms.css         # Formular-Grundstyles
│   ├── smooth-scroll.css # Scroll-Verhalten
│   └── icons.css         # Icon-Styles
├── themes/               # Theme-Varianten
│   ├── theme-base.css    # Basis-Theme
│   ├── brand.css         # Marken-Anpassungen
│   ├── dark-mode.css     # Dunkelmodus
│   ├── day.css           # Tag-Theme
│   ├── night.css         # Nacht-Theme
│   └── weitere Themes...
└── icons/                # Icon-Styles
```

## CSS-Architektur

Das Design-System nutzt moderne CSS-Features und folgt einer Layer-basierten Architektur:

### CSS-Layer

Die CSS-Styles sind in logische Layer organisiert, die durch das `@layer`-Direktiv definiert werden:

```css
@layer core {
    /* Grundlegende Styles */
}

@layer icons {
    /* Icon-Styles */
}

@layer animations {
    /* Animationen */
}

@layer effects {
    /* Effekte */
}

@layer themes {
    /* Themes */
}
```

Diese Layer-Struktur ermöglicht eine klare Hierarchie und Konfliktlösung bei CSS-Selektoren.

### CSS-Module

Für Komponenten werden CSS-Module verwendet, die im Verzeichnis `modules/` liegen. Diese können in Projekten selektiv importiert werden:

```js
import styles from 'casoon-ui-lib/modules/button.module.css';
```

## Design-Tokens

Design-Tokens sind in `layers/tokens.css` definiert und bilden die Grundlage für das gesamte Design-System:

### Spacing

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
/* weitere Abstände... */
```

### Breakpoints

```css
--breakpoint-xs: 0px;     /* Extra small (phones) */
--breakpoint-sm: 640px;   /* Small (large phones, small tablets) */
--breakpoint-md: 768px;   /* Medium (tablets) */
--breakpoint-lg: 1024px;  /* Large (desktops, large tablets) */
--breakpoint-xl: 1280px;  /* Extra large (large desktops) */
--breakpoint-2xl: 1536px; /* 2X large (extra large desktops) */
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 var(--color-black-alpha-5);
--shadow: 0 1px 3px 0 var(--color-black-alpha-10), 0 1px 2px 0 var(--color-black-alpha-6);
--shadow-md: 0 4px 6px -1px var(--color-black-alpha-10);
--shadow-lg: 0 10px 15px -3px var(--color-black-alpha-10);
--shadow-xl: 0 20px 25px -5px var(--color-black-alpha-10), 0 10px 10px -5px var(--color-black-alpha-4);
```

### Border-Radius

```css
--border-radius-sm: 0.25rem;
--border-radius-md: 0.5rem;
--border-radius-lg: 1rem;
--border-radius-xl: 0.75rem;
--border-radius-2xl: 1rem;
--border-radius-full: 9999px;
```

### Z-Index

```css
--z-index-dropdown: 1000;
--z-index-sticky: 1020;
--z-index-fixed: 1030;
--z-index-modal-backdrop: 1040;
--z-index-modal: 1050;
--z-index-popover: 1060;
--z-index-tooltip: 1070;
```

## Farben

Die Farbpalette ist in `layers/colors.css` definiert und verwendet das moderne OKLCH-Farbmodell für bessere Farbwiedergabe und Zugänglichkeit:

### Primärfarben

```css
--color-primary: var(--color-blue-600);
--color-primary-light: var(--color-blue-500);
--color-primary-dark: var(--color-blue-700);
```

### Sekundärfarben

```css
--color-secondary: var(--color-gray-600);
--color-secondary-light: var(--color-gray-500);
--color-secondary-dark: var(--color-gray-700);
```

### Akzentfarben

```css
--color-accent: var(--color-orange-500);
--color-accent-light: var(--color-orange-400);
--color-accent-dark: var(--color-orange-600);
```

### Statusfarben

```css
--color-success: var(--color-green-600);
--color-warning: var(--color-yellow-500);
--color-error: var(--color-red-600);
--color-info: var(--color-blue-600);
```

### Farbpalette

Das System enthält umfangreiche Farbpaletten in 10er-Abstufungen (50-900) für folgende Farben:

- Blautöne (blue)
- Himmelblau (sky)
- Türkis (cyan)
- Mint (mint)
- Grün (green)
- Limette (lime)
- Gelb (yellow)
- Gold (gold)
- Orange (orange)
- Koralle (coral)
- Rot (red)
- Rosa (pink)
- Rose (rose)
- Violett (purple)
- Indigo (indigo)
- Grau (gray)
- Warmgrau (warm-gray)
- Kaltgrau (cool-gray)

## Typografie

Die Typografie ist in `layers/typography.css` definiert:

### Schriftfamilien

```css
--font-family-sans: system-ui, -apple-system, blinkmacsystemfont, "segoe ui", roboto, "helvetica neue", arial, sans-serif;
--font-family-serif: georgia, cambria, "times new roman", times, serif;
--font-family-mono: ui-monospace, sfmono-regular, menlo, monaco, consolas, "liberation mono", "courier new", monospace;
```

### Schriftgrößen

```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.25rem;    /* 20px */
--font-size-xl: 1.5rem;     /* 24px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */
```

### Schriftstärken

```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Zeilenhöhen

```css
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
```

## Layout

Das Layout-System ist in `layers/layout.css` definiert und bietet flexible Optionen für Grid- und Flex-Layouts:

### Container

```css
.container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-4);
    padding-right: var(--space-4);
}

@media (min-width: var(--breakpoint-sm)) {
    .container { max-width: var(--container-sm); }
}

@media (min-width: var(--breakpoint-md)) {
    .container { max-width: var(--container-md); }
}

/* weitere Breakpoints... */
```

### Grid-System

Das Grid-System basiert auf modernen CSS Grid-Technologien und bietet mehrere flexible Layout-Optionen:

#### Standard-Grid

```css
.grid {
    display: grid;
    gap: var(--space-0);
}

/* Spalten-Konfiguration */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }

/* Spalten-Überspannung */
.col-span-1 { grid-column: span 1; }
.col-span-2 { grid-column: span 2; }
/* ... bis .col-span-12 und .col-span-full */
```

#### Container-basierte Grids

Das System nutzt moderne Container Queries für komponentenbasierte responsive Layouts:

```css
/* Grid-Responsive mit Container Queries */
.grid-responsive {
    display: grid;
    gap: var(--space-sm);
    grid-template-columns: 1fr;

    @container component (min-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-md);
    }

    @container component (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @container component (min-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-lg);
    }

    @container component (min-width: 1000px) {
        grid-template-columns: repeat(5, 1fr);
    }
}

/* Layout-Grid mit Container Queries */
.layout-grid {
    display: grid;
    gap: var(--space-4);
    grid-template-columns: 1fr;

    @container layout (min-width: 30rem) {
        grid-template-columns: repeat(2, 1fr);
    }

    @container layout (min-width: 48rem) {
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-6);
    }

    @container layout (min-width: 62rem) {
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-8);
    }
}
```

#### Auto-anpassende Grids

```css
.grid-auto-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);
}

.grid-auto-fill {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--space-4);
}
```

#### Responsive Breakpoint Utilities

Alle Grid-Klassen haben responsive Varianten mit Breakpoint-Präfixen:

```css
/* Bei Viewport-Breiten ab 768px (md) */
.md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.md\:col-span-4 { grid-column: span 4; }
```

### Container-Queries

Das System unterstützt Container-Queries für komponentenbasierte responsive Layouts:

```css
--container-query-xs: 240px;
--container-query-sm: 380px;
--container-query-md: 540px;
--container-query-lg: 720px;
--container-query-xl: 960px;
```

## Komponenten

Das Design-System enthält über 30 vorgefertigte Komponenten als CSS-Module, darunter:

- Alert (`alert.module.css`)
- Avatar (`avatar.module.css`)
- Badge (`badge.module.css`)
- Button (`button.module.css`)
- Card (`card.module.css`)
- Checkbox (`checkbox.module.css`)
- Form (`form.module.css`)
- Input (`input.module.css`)
- Modal (`modal.module.css`)
- Tabs (`tabs.module.css`)
- und viele weitere...

Jede Komponente ist als separates CSS-Modul implementiert und kann einzeln importiert werden.

## Themes

Das Design-System unterstützt ein umfangreiches Theming-System:

### Basis-Theme

Das Basis-Theme (`themes/theme-base.css`) definiert die Grundfarben und kann von anderen Themes überschrieben werden.

### Jahreszeitenthemes

- Tag (`day.css`) - Helles Theme mit Blau-Tönen
- Nacht (`night.css`) - Dunkles Theme mit Lila-Akzenten
- Sommer (`summer.css`) - Warmes Theme mit Gelb/Orange-Tönen
- Winter (`winter.css`) - Kühles Theme mit Blau/Cyan-Tönen
- Herbst (`autumn.css`) - Herbstliches Theme mit Orange/Rot-Tönen
- Frühling (`spring.css`) - Frisches Theme mit Grün-Tönen

### Spezialthemes

- Wald (`forest.css`) - Naturtheme mit Grün-Variationen
- Ozean (`ocean.css`) - Meeres-Theme mit Cyan/Blau-Tönen
- Pastell (`pastel.css`) - Sanftes Theme mit Pastellfarben
- Neon (`neon.css`) - Knalliges Theme mit leuchtenden Farben
- Retro (`retro.css`) - Vintage-Look mit warmen Farben
- Monochrom (`monochrome.css`) - Minimalistisches Schwarz-Weiß-Theme
- Sonnenuntergang (`sunset.css`) - Warmes Theme mit Orange/Rot-Tönen

### Funktionsthemes

- Dunkelmodus (`dark-mode.css`) - Anpassungen für den Dunkelmodus
- Barrierefreiheit (`accessibility.css`) - Theme mit hohem Kontrast für bessere Zugänglichkeit

## Brand-Anpassungen

Das Design-System unterstützt Markenanpassungen über die `themes/brand.css`-Datei:

```css
.brand {
    /* Schriftarten */
    --font-heading: 'Satoshi', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-accent: 'Poppins', sans-serif;

    /* Direkte Farbwerte */
    --color-primary: #111827;
    --color-secondary: #4B5563;
    --color-accent: #3245FF;
    --color-background: #F9FAFB;
    --color-text: #111827;
    --color-text-light: #6B7280;
    --color-border: #E5E7EB;
    --color-white: #FFF;
    
    /* Farbvarianten */
    --color-primary-50: #F9FAFB;
    --color-primary-100: #F3F4F6;
    /* weitere Farbvarianten... */
}
```

## Utility-Klassen

Das Design-System enthält umfangreiche Utility-Klassen in `layers/utilities.css` für schnelle Styling-Anpassungen:

### Abstand-Utilities

```css
.m-0 { margin: var(--space-0); }
.m-1 { margin: var(--space-1); }
.m-2 { margin: var(--space-2); }
/* weitere Margin-Utilities... */

.p-0 { padding: var(--space-0); }
.p-1 { padding: var(--space-1); }
.p-2 { padding: var(--space-2); }
/* weitere Padding-Utilities... */
```

### Flex-Utilities

```css
.flex { display: flex; }
.inline-flex { display: inline-flex; }
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
/* weitere Flex-Utilities... */
```

### Text-Utilities

```css
.text-xs { font-size: var(--font-size-xs); }
.text-sm { font-size: var(--font-size-sm); }
.text-base { font-size: var(--font-size-base); }
/* weitere Text-Größen-Utilities... */

.font-normal { font-weight: var(--font-weight-normal); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-bold { font-weight: var(--font-weight-bold); }
/* weitere Font-Weight-Utilities... */
```

### Farb-Utilities

```css
.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-accent { background-color: var(--color-accent); }
/* weitere Background-Color-Utilities... */

.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-accent { color: var(--color-accent); }
/* weitere Text-Color-Utilities... */
```

### Responsive Utilities

Alle Utility-Klassen können mit Breakpoint-Präfixen verwendet werden:

```css
.sm:flex { /* ab 640px */ }
.md:hidden { /* ab 768px */ }
.lg:grid-cols-3 { /* ab 1024px */ }
/* weitere responsive Utilities... */
```

## Verwendung im Projekt

### Integration mit Astro

```astro
---
import 'casoon-ui-lib/core.css';
import styles from 'casoon-ui-lib/modules/button.module.css';
---

<button class={styles.button}>
  Klick mich
</button>
```

### Theme aktivieren

```html
<body class="theme-ocean">
  <!-- Inhalte mit Ocean-Theme -->
</body>
```

### Brand-Anpassungen

```html
<body class="brand">
  <!-- Inhalte mit benutzerdefinierten Markenfarben -->
</body>
```

### Utility-Klassen verwenden

```html
<div class="flex justify-between items-center p-4 bg-primary text-white rounded-md">
  <h2 class="text-xl font-bold">Titel</h2>
  <button class="px-4 py-2 bg-accent rounded-md">Aktion</button>
</div>
```

### Responsive Design

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsives Grid: 1 Spalte auf Mobilgeräten, 2 auf Tablets, 3 auf Desktops -->
</div>
```

### Container-Queries

```html
<div class="cq-container">
  <div class="grid cq-md:grid-cols-2 gap-4">
    <!-- 1 Spalte bei kleinen Containern, 2 Spalten ab Container-Größe MD -->
  </div>
</div>
``` 