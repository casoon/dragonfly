# @casoon/ui-lib

Ein modularer, leichter CSS-Framework und Designsystem für moderne Webprojekte. Optimiert für Astro JS, LightningCSS und Container Queries mit @layer-basierter Architektur und umfassender Barrierefreiheit.

## Changelog (Auszug)

- **0.5.0**: Optimiertes Animationssystem (neues Namensschema, weniger Redundanz), `.motion-safe`/`.motion-reduce` für `prefers-reduced-motion`, experimentelle `animation-composition`, Dialog- und Fokus-Animationen, Staggered Animations, vollständige Dark-Mode- und RTL-Unterstützung, moderne CSS-Validierung, neue Form-Layouts
- **0.4.10**: Überarbeitetes Formsystem, konsistente Form-Nomenklatur, robustere Light/Dark-Mode-Unterstützung, verbesserte Accessibility
- **0.3.x**: Optimierte Layer-Struktur, erweiterte Flex/Grid-Utilities, Container Query Integration, konsistente Logical Properties, striktere Lint-Regeln
- **2.0**: Fluid Interpolation mit `interpolate-size: allow-keywords`, umfassende Fluid-Typografie, adaptive Komponenten

## Installation

```bash
npm install @casoon/ui-lib
# oder
yarn add @casoon/ui-lib
# oder
pnpm add @casoon/ui-lib
```

## Nutzung

**Basis:**
```html
<link rel="stylesheet" href="path/to/@casoon/ui-lib/core.css">
```
**Mit Bundler:**
```js
import '@casoon/ui-lib/core.css';
```
**Mit Astro:**
```astro
import '@casoon/ui-lib/core.css';
```

## Features & Architektur

- **Moderne CSS-Technologien:** CSS Layers, Custom Properties, Container Queries, Logical Properties
- **Design Tokens:** Konsistente, anpassbare Design-Basis
- **Utility-Klassen:** Umfangreiche Utilities für Layout, Typografie, Animation, Effekte
- **Komponenten:** Wiederverwendbare UI-Komponenten (siehe [Komponenten-Doku](components/README.md))
- **Barrierefreiheit:** Fokus auf Accessibility, Keyboard-Navigation, Screenreader-Support
- **Dark Mode & RTL:** Vollständige Unterstützung für Farbmodi und bidirektionale Layouts
- **Animationssystem:** Optimierte, zugängliche Animationen inkl. Stagger, Dialog, Fokus, experimentelle Komposition
- **Fluid Interpolation:** `interpolate-size: allow-keywords` für flüssige Übergänge und Typografie
- **Container Query System:** Präzise, komponentenbasierte Responsivität

## Layer- und Dateistruktur

```
@casoon/ui-lib/
├── core.css              # Hauptdatei mit Layer-Imports
├── base.css              # Basis-Imports und Layer-Struktur
├── layout.css            # Layout-Komponenten & Utilities
├── layout.queries.css    # Container Query-Responsivität
├── typography.css        # Typografie-System
├── animations.css        # Animations- und Motion-System
├── effects.css           # Visuelle Effekte
├── components.css        # Komponenten-Import
├── themes.css            # Farb- & Theming-System
├── icons.css             # Icon-System
├── base/                 # Basis-Layer
├── components/           # UI-Komponenten (CSS-Module)
├── effects/              # Effekte & Interaktionen
├── themes/               # Farbvarianten
└── icons/                # Icon-Definitionen
```

**Layer-Hierarchie (Auszug):**
```css
@layer reset, tokens, custom-properties, core, logical-properties, colors, color-mix, layout, layout-queries, typography, utilities, smooth-scroll, accessibility, icons, components, animations, effects, themes;
```
Mehr dazu in der [Layer System Dokumentation](LAYER-SYSTEM.md).

## Container Query Beispiel

```html
<div class="container-query">
  <div class="layout-flex sm:flex-row md:gap-6 lg:flex-nowrap">
    <div class="sm:flex-basis-1-3">Sidebar</div>
    <div class="sm:flex-basis-2-3">Main content</div>
  </div>
</div>
```

## Eigene Komponenten

Eigene Komponenten können im Layer `components` ergänzt werden:
```css
@layer components {
  .my-component {
    padding: var(--space-4);
    color: var(--color-primary);
    border-radius: var(--radius-md);
  }
}
```

## Kompatibilität

- **interpolate-size: allow-keywords**: Chrome/Edge ab 120, Safari ab 17, Firefox ab 121 (mit Flag). Fallbacks für ältere Browser.

## Testen

```bash
npm run test:lightningcss
```

## Lizenz
MIT

## Mitwirken
Beiträge willkommen! Siehe [Contribution Guidelines](CONTRIBUTING.md).

## Status
🟡 **Beta**: Stabile Kernfunktionen, laufende Verbesserungen, API weitgehend stabil, produktiv in kontrollierten Umgebungen nutzbar.