# Casoon UI Style Guide

Dieses Dokument beschreibt die Struktur, Konzepte und Verwendung des Casoon UI Design-Systems.

## Inhaltsverzeichnis

- [Projektstruktur](#projektstruktur)
- [CSS-Architektur](#css-architektur)
- [CSS-Nesting & Komponenten-Struktur](#css-nesting--komponenten-struktur)
- [Design-Tokens](#design-tokens)
- [Farben](#farben)
- [Typografie](#typografie)
- [Layout](#layout)
- [Komponenten](#komponenten)
- [Themes](#themes)
- [Brand-Anpassungen](#brand-anpassungen)
- [Utility-Klassen](#utility-klassen)
- [Verwendung im Projekt](#verwendung-im-projekt)
- [Formulare](#formulare)

## Projektstruktur

Das Casoon UI Design-System ist wie folgt strukturiert:

```
casoon-ui-lib/
├── core.css              # Haupt-CSS-Datei mit Layer-Imports
├── components/           # CSS-Module für Komponenten
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

Für Komponenten werden CSS-Module verwendet, die im Verzeichnis `components/` liegen. Diese können in Projekten selektiv importiert werden:

```js
import styles from 'casoon-ui-lib/components/button.module.css';
```

## CSS-Nesting & Komponenten-Struktur

Das Design-System verwendet modernes CSS mit nativer Verschachtelung (Nesting) anstelle von BEM-Methodik für eine lesbarere und wartbarere Codestruktur.

### Grundprinzipien

1. **Komponenten-basierte Struktur** - Jede Komponente ist in einem eigenen Modul mit eigenem Namespace (`@layer`) definiert
2. **CSS-Nesting** - Elemente und Zustände werden durch verschachtelte Selektoren anstatt durch Namenskonventionen (BEM) definiert
3. **Flache Klassenstruktur** - Vermeidung verschachtelter Klassen wie `.button__icon` zugunsten von `.button .icon`
4. **Modifikatoren als direkte Klassen** - Verwendung kombinierter Klassen (`.button.primary`) statt BEM-Modifikatoren (`.button--primary`)

### Struktur einer Komponente

Eine typische Komponente im Casoon UI Design-System folgt diesem Aufbau:

```css
@layer components {
  .component-name {
    /* Basis-Styling der Komponente */
    
    /* Unterelemente */
    h3 {
      /* Styling für direkte h3-Kinder */
    }
    
    p {
      /* Styling für direkte p-Kinder */
    }
    
    .icon {
      /* Styling für .icon-Kinder innerhalb der Komponente */
    }
    
    /* Zustände */
    &:hover {
      /* Hover-Zustand */
    }
    
    &:focus {
      /* Fokus-Zustand */
    }
    
    &:disabled {
      /* Deaktivierter Zustand */
    }
    
    /* Varianten/Modifikatoren */
    &.primary {
      /* Primär-Variante */
    }
    
    &.small {
      /* Größenvariante klein */
    }
    
    &.large {
      /* Größenvariante groß */
    }
    
    /* Komplexe Verschachtelungen */
    &.with-icon {
      /* Layout mit Icon */
      
      .icon {
        /* Icon-Styling speziell in dieser Variante */
      }
    }
    
    /* Responsive Verhalten */
    @media (min-width: 768px) {
      /* Änderungen bei größeren Bildschirmen */
    }
  }
}
```

### Namenskonventionen

| Typ | Konvention | Beispiel | Vorheriges BEM-Equivalent |
|-----|------------|----------|---------------------------|
| Komponente | `.komponente` | `.card` | `.card` |
| Unterelement | `.komponente element` oder direkt via Selektor | `.card h3` oder `.card .title` | `.card__title` |
| Variante/Modifikator | `.komponente.variante` | `.card.primary` | `.card--primary` |
| Zustand | `.komponente.zustand` oder `.komponente:zustand` | `.card.active` oder `.card:hover` | `.card--active` |
| Größenvariante | `.komponente.größe` | `.card.small` | `.card--small` |

### Beispiel: Button-Komponente

#### Vorher (BEM):
```css
.button { /* Basis-Styling */ }
.button--primary { /* Primäre Variante */ }
.button--small { /* Kleine Größe */ }
.button__icon { /* Icon-Element */ }
```

#### Nachher (CSS-Nesting):
```css
.button {
  /* Basis-Styling */
  
  &.primary {
    /* Primäre Variante */
  }
  
  &.small {
    /* Kleine Größe */
  }
  
  .icon {
    /* Icon-Element */
  }
}
```

### HTML-Nutzung

#### Vorher (BEM):
```html
<button class="button button--primary button--small">
  <span class="button__icon">→</span>
  Klick mich
</button>
```

#### Nachher (Flache Struktur):
```html
<button class="button primary small">
  <span class="icon">→</span>
  Klick mich
</button>
```

### Vorteile des neuen Ansatzes

1. **Lesbarkeit** - Die Struktur der Komponente und ihre Varianten sind im CSS klar strukturiert und visuell abbildbar
2. **Vereinfachtes HTML** - Weniger Klassen im Markup, bessere Lesbarkeit
3. **Wartbarkeit** - Eng zusammengehörende Styles bleiben zusammen, keine Fragmentierung über mehrere Selektoren
4. **Performance** - Geringere Spezifität der Selektoren, bessere Browser-Optimierung
5. **Kompatibilität mit Utility-Klassen** - Einfache Kombination mit Utility-Klassen für schnelle Anpassungen

## Design-Tokens

Die Design-Tokens sind in `layers/tokens.css` definiert und umfassen:

### Spacing

```css
:root {
    --space-0: 0;
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-7: 1.75rem;
    --space-8: 2rem;
    --space-9: 2.25rem;
    --space-10: 2.5rem;
    --space-11: 2.75rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
    --space-32: 8rem;
    --space-40: 10rem;
    --space-48: 12rem;
    --space-56: 14rem;
    --space-64: 16rem;
    --space-72: 18rem;
    --space-80: 20rem;
    --space-96: 24rem;
    --space-px: 1px;
}
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

Die Bibliothek enthält über 30 vorgefertigte Komponenten als CSS-Module im `components/` Verzeichnis:

- Alert (`alert.css`)
- Avatar (`avatar.css`)
- Badge (`badge.css`)
- Button (`button.css`)
- Card (`card.css`)
- Checkbox (`checkbox.css`)
- Form (`form.css`)
- Input (`input.css`)
- Modal (`modal.css`)
- Tabs (`tabs.css`)
- und viele weitere...

Jede Komponente ist als separates CSS-Modul implementiert und kann einzeln importiert werden.

### Neue Komponenten-Struktur

Alle Komponenten verwenden den modernen CSS-Nesting-Ansatz mit @layer und bieten eine konsistente Struktur:

#### Card-Komponente

```css
@layer components {
  .card {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    border-radius: var(--radius-md);
    background-color: var(--color-surface);
    padding: var(--space-4);
    box-shadow: var(--shadow-sm);

    /* Element-Styling */
    h3 {
      font-size: var(--font-size-lg);
      margin: 0;
    }

    img {
      width: 100%;
      border-radius: var(--radius-sm);
      object-fit: cover;
    }

    /* Varianten */
    &.primary {
      background-color: var(--color-primary);
      color: white;
    }

    &.border {
      border: 1px solid var(--color-gray-200);
      box-shadow: none;
    }

    /* Layout-Varianten */
    &.horizontal {
      flex-direction: row;
      align-items: center;

      img {
        width: 120px;
        height: 120px;
      }
    }

    /* Interaktive Varianten */
    &.interactive {
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
      }
    }
  }
}
```

Verwendung:
```html
<!-- Einfache Karte -->
<div class="card">
  <h3>Kartentitel</h3>
  <p>Karteninhalt</p>
</div>

<!-- Varianten kombinieren -->
<div class="card primary interactive">
  <h3>Interaktive primäre Karte</h3>
  <p>Klicke mich!</p>
</div>

<!-- Mit Utilities kombinieren -->
<div class="card border p-6 mb-4">
  <h3>Karte mit mehr Padding und Margin</h3>
</div>
```

#### Button-Komponente

```css
@layer components {
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-inline: var(--space-4);
    padding-block: var(--space-2);
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-sm);
    line-height: 1.25;
    background-color: var(--color-primary);
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color var(--transition-fast);

    &:hover {
      background-color: var(--color-primary-dark);
    }

    /* Varianten */
    &.secondary {
      background-color: var(--color-secondary);

      &:hover {
        background-color: var(--color-secondary-dark);
      }
    }

    /* Größen */
    &.sm {
      padding-inline: var(--space-3);
      padding-block: var(--space-1);
      font-size: var(--font-size-xs);
    }

    &.lg {
      padding-inline: var(--space-6);
      padding-block: var(--space-3);
      font-size: var(--font-size-base);
    }

    /* Icon-Handling */
    &.with-icon {
      gap: var(--space-2);

      .icon {
        display: inline-flex;
        width: 1em;
        height: 1em;
      }
    }
  }
}
```

Verwendung:
```html
<!-- Standard Button -->
<button class="button">Standard Button</button>

<!-- Button mit Variante und Größe -->
<button class="button secondary sm">Kleiner Sekundärbutton</button>

<!-- Button mit Icon -->
<button class="button with-icon">
  <span class="icon">→</span>
  Weiter
</button>
```

#### Input-Komponente

```css
@layer components {
  .input {
    display: block;
    width: 100%;
    padding: var(--space-2) var(--space-3);
    font-size: var(--font-size-base);
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-md);
    background-color: var(--color-white);
    color: var(--color-gray-900);
    transition: border-color var(--transition-fast);

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary) 50%, transparent);
    }

    /* Varianten nach Status */
    &.invalid {
      border-color: var(--color-error);
      background-color: color-mix(in srgb, var(--color-error) 5%, white);
    }

    /* Größenvarianten */
    &.sm {
      padding: var(--space-1) var(--space-2);
      font-size: var(--font-size-sm);
    }
  }

  /* Container für Inputs mit Icons */
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    .input {
      padding-left: var(--space-8);
    }

    .input-icon {
      position: absolute;
      left: var(--space-3);
      color: var(--color-gray-400);
      pointer-events: none;
    }
  }
}
```

Verwendung:
```html
<!-- Standard Input -->
<input type="text" class="input" placeholder="Text eingeben">

<!-- Input mit Status -->
<input type="text" class="input invalid" placeholder="Ungültige Eingabe">

<!-- Input mit Icon -->
<div class="input-wrapper">
  <span class="input-icon">🔍</span>
  <input type="search" class="input" placeholder="Suchen...">
</div>
```

#### Checkbox-Komponente

```css
@layer components {
  .checkbox {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    cursor: pointer;
    font-size: var(--font-size-sm);
    
    /* Die Checkbox selbst */
    input[type="checkbox"] {
      appearance: none;
      width: 1rem;
      height: 1rem;
      border: 1px solid var(--color-gray-400);
      border-radius: var(--radius-sm);
      background-color: white;
      display: inline-block;
      vertical-align: middle;
      position: relative;
      transition: all var(--transition-fast);
      
      /* Checked-Zustand */
      &:checked {
        background-color: var(--color-primary);
        border-color: var(--color-primary);
        
        &::after {
          content: "";
          position: absolute;
          top: 2px;
          left: 4px;
          width: 3px;
          height: 6px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
    
    /* Größenvarianten */
    &.small {
      font-size: var(--font-size-xs);
      
      input[type="checkbox"] {
        width: 0.875rem;
        height: 0.875rem;
      }
    }
  }
}
```

Verwendung:
```html
<!-- Standard Checkbox -->
<label class="checkbox">
  <input type="checkbox">
  <span>Option auswählen</span>
</label>

<!-- Kleine Checkbox -->
<label class="checkbox small">
  <input type="checkbox">
  <span>Kleinere Option</span>
</label>

<!-- Gruppe von Checkboxen -->
<div class="checkbox-group">
  <label class="checkbox">
    <input type="checkbox">
    <span>Option 1</span>
  </label>
  <label class="checkbox">
    <input type="checkbox">
    <span>Option 2</span>
  </label>
</div>
```

### Migration von BEM zu CSS-Nesting

Für bestehende Projekte, die die Bibliothek verwenden, kann ein schrittweiser Migrationspfad befolgt werden:

1. **Beide Klassen parallel unterstützen**: Während der Migration können sowohl die alten BEM-Klassen als auch die neuen Klassen unterstützt werden

   ```css
   .button,
   .button--primary {
     /* Gemeinsame Styles */
   }
   
   .button.primary {
     /* Neue Struktur - gleiche Styles */
   }
   ```

2. **Selektive Migration**: Komponenten können schrittweise migriert werden, ohne das gesamte System auf einmal umzustellen

3. **Deprecation-Hinweise**: In der Dokumentation können alte BEM-Klassen als veraltet markiert werden

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
import styles from 'casoon-ui-lib/components/button.css';
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

## Typografie und Flüssige Größenanpassung

### Typografiesystem

Das Typografiesystem bietet konsistente Größen, Abstände und Text-Styles für alle Projektkomponenten. 

#### Traditionelle Typografieklassen

```css
/* Größen */
.text-xs, .text-sm, .text-base, .text-lg, .text-xl, .text-2xl, ...

/* Gewichte */
.font-normal, .font-medium, .font-semibold, .font-bold

/* Zeilenhöhen */
.leading-none, .leading-tight, .leading-normal, .leading-loose

/* Ausrichtung */
.text-left, .text-center, .text-right
```

#### Moderne Flüssige Typografie

CASOON UI Lib unterstützt jetzt flüssige Typografie mit `interpolate-size: allow-keywords`:

```css
/* Flüssige Überschriften mit Viewport-basierter Anpassung */
.fluid-heading.xxl { font-size: clamp(var(--text-2xl), 5vw + 1rem, var(--text-4xl)); }
.fluid-heading.xl { font-size: clamp(var(--text-xl), 4vw + 0.5rem, var(--text-3xl)); }
/* weitere Größen verfügbar */

/* Flüssige Paragraphen mit optimaler Lesebreite */
.fluid-paragraph { 
  font-size: clamp(var(--text-sm), 1vw + 0.5rem, var(--text-base));
  max-width: 70ch; 
}

/* Container-adaptive Texte (basierend auf Container-Queries) */
.adaptive-text {
  font-size: var(--text-base);
  @container (min-width: 400px) { font-size: var(--text-lg); }
  @container (min-width: 600px) { font-size: var(--text-xl); }
}

/* Flüssige Schlüsselwort-Texte (nutzen interpolate-size: allow-keywords) */
.size-keyword-text { font-size: medium; }
.size-keyword-text.larger { font-size: large; }
.size-keyword-text.largest { font-size: x-large; }
```

### Anwendungsbeispiele

#### Optimale Lesbarkeit mit flüssiger Typografie

```html
<article class="container-query">
  <h1 class="fluid-heading xxl">Hauptüberschrift</h1>
  <p class="fluid-paragraph">
    Dieser Text verwendet flüssige Typografie und passt sich automatisch 
    an die Viewport-Größe an. Die maximale Breite von 70 Zeichen sorgt für 
    optimale Lesbarkeit auf allen Geräten.
  </p>
  <blockquote class="fluid-quote">
    Dieses Zitat skaliert flüssig zwischen den definierten Größen.
  </blockquote>
</article>
```

#### Schlüsselwort-basierte Typografie-Interpolation

```html
<!-- Container mit eigener Größenskalierung -->
<div class="container-query" style="resize: horizontal; overflow: auto;">
  <p class="size-keyword-text">
    Standardtext mit medium-Größe
  </p>
  <p class="size-keyword-text larger">
    Größerer Text mit large-Größe (interpoliert)
  </p>
  <p class="size-keyword-text largest">
    Noch größerer Text mit x-large-Größe (interpoliert)
  </p>
</div>
```

### Best Practices für Flüssige Typografie

1. **Kontinuität wahren**: Nutze `clamp()` mit sinnvollen Min- und Max-Werten, um sprunghafte Größenänderungen zu vermeiden
2. **Container-Queries verwenden**: Für komponentenspezifische Anpassungen sind Container-Queries oft präziser als Viewport-Queries
3. **Lesbarkeit priorisieren**: Stelle sicher, dass Textgrößen auch im kleinsten Zustand noch lesbar sind
4. **Mit Keywords experimentieren**: Die `interpolate-size: allow-keywords` Eigenschaft ermöglicht kreative Übergänge zwischen CSS-Schlüsselwörtern
5. **Vermeidung von Layout Shifts**: Setze immer Min- und Max-Werte bei clamp(), um unerwartete Layout-Verschiebungen zu verhindern 

## Formulare

Das CASOON UI-Lib Framework bietet ein umfassendes Formular-System mit modernen Funktionen und optimaler Barrierefreiheit.

### Basisklassen für Formulare

Das Formular-System basiert auf einem konsistenten Klassensystem:

```html
<form class="form">
  <div class="form-group">
    <label class="form-label" for="name">Name</label>
    <input type="text" class="form-control" id="name">
    <div class="form-text">Hilfetext</div>
  </div>
  
  <div class="form-group">
    <label class="form-label" for="email">E-Mail</label>
    <input type="email" class="form-control" id="email">
  </div>
  
  <div class="form-actions">
    <button type="submit" class="button primary">Absenden</button>
    <button type="reset" class="button">Zurücksetzen</button>
  </div>
</form>
```

### Formular-Layouts

Das Framework bietet verschiedene Layout-Optionen für Formulare:

#### Gestapeltes Layout (Standard)

```html
<form class="form form-stacked">
  <!-- Formularfelder werden vertikal angeordnet -->
</form>
```

#### Horizontales Layout

```html
<form class="form form-horizontal">
  <!-- Labels und Eingabefelder nebeneinander -->
</form>
```

#### Layout mit mehreren Spalten

```html
<form class="form">
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="firstname">Vorname</label>
      <input type="text" class="form-control" id="firstname">
    </div>
    <div class="form-group">
      <label class="form-label" for="lastname">Nachname</label>
      <input type="text" class="form-control" id="lastname">
    </div>
  </div>
</form>
```

#### Inline-Layout für Formulare

```html
<form class="form-layout-inline">
  <!-- Kompakte horizontale Anordnung des gesamten Formulars -->
</form>
```

#### Inline-Controls für Checkboxen und Radios

```html
<div class="form-group form-inline-controls">
  <input type="checkbox" class="form-check-input" id="check1">
  <label class="form-label" for="check1">Option 1</label>
  
  <input type="checkbox" class="form-check-input" id="check2">
  <label class="form-label" for="check2">Option 2</label>
</div>
```

### Validierung

Das Formular-System unterstützt zwei Validierungsansätze:

#### Klassische Validierung mit Klassen

```html
<div class="form-group valid">
  <input type="text" class="form-control" value="Gültige Eingabe">
  <div class="feedback">Eingabe ist gültig!</div>
</div>

<div class="form-group invalid">
  <input type="text" class="form-control" value="Ungültige Eingabe">
  <div class="feedback">Bitte korrigieren Sie Ihre Eingabe.</div>
</div>
```

#### Moderne Validierung mit :has()

Das Framework nutzt moderne `:has()`-Selektoren, um den Validierungsstatus visuell darzustellen:

```html
<!-- Der Browser zeigt automatisch visuelle Indikatoren basierend auf dem Eingabestatus -->
<form class="form">
  <div class="form-group">
    <label class="form-label" for="email">E-Mail</label>
    <input type="email" class="form-control" id="email" required>
  </div>
</form>
```

Die `:has()`-Selektoren fügen automatisch folgende visuelle Indikatoren hinzu:
- Linker Rand in der entsprechenden Validierungsfarbe
- Symbolindikatoren im Label
- Farbliche Kennzeichnung der Feedback-Meldungen

### Sonderfunktionen

#### RTL-Unterstützung

Das Formular-System unterstützt bidirektionale Layouts mit `[dir="rtl"]`:

```html
<html dir="rtl">
  <!-- Formularelemente werden automatisch für RTL-Sprachen angepasst -->
  <form class="form">...</form>
</html>
```

#### Dark Mode

Formulare unterstützen Dark Mode automatisch durch `color-scheme: light dark` und die `light-dark()` CSS-Funktion:

```html
<!-- Passt sich automatisch dem Systemthema an -->
<form class="form">...</form>
```

#### Adaptive Formulare

Für Container-basierte responsive Formulare:

```html
<div class="container-query">
  <form class="form adaptive">
    <!-- Passt sich an Container-Größe an -->
  </form>
</div>
```

#### Flüssige Formulare

Für flüssige Größenanpassung mit CSS-Schlüsselwörtern:

```html
<form class="form fluid medium">
  <!-- Flüssige Größenanpassung mit 'small', 'medium', 'large', 'x-large' -->
</form>
``` 