# Casoon UI Library

Ein schlankes Design-System für CASOON-Projekte, optimiert für moderne Webentwicklung mit Astro JS und LightningCSS.

## Über das Projekt

Die Casoon UI Library ist ein internes Design-System, das als Basis für Kundenprojekte von CASOON dient. Es bietet:

- Eine konsistente Grundlage für neue Projekte
- Wiederverwendbare Komponenten und Styles
- Optimierte Integration mit Astro JS und LightningCSS
- Unterstützung für SSR und CSS-Streaming
- Vermeidung von Code-Duplikation über Projektgrenzen hinweg

> **Hinweis**: Dieses Design-System ist bewusst schlank gehalten und erhebt nicht den Anspruch, mit umfangreichen Frameworks wie Tailwind zu konkurrieren. Es dient als solide Basis für die spezifischen Anforderungen von CASOON-Projekten.

## Verzeichnisstruktur

```
casoon-ui-lib/
├── core.css              # Haupt-CSS-Datei mit Layer-Imports
├── modules/              # CSS-Module für Komponenten
├── layers/              # CSS-Layer für Grundfunktionen
├── icons/               # Icon-Styles
└── themes/              # Theme-Varianten
```

## Verwendung

### 1. Core CSS

Die `core.css` ist die Hauptdatei, die alle Layer und Module importiert. Sie ist in verschiedene Layer organisiert:

```css
@layer base {
    /* Grundlegende Styles */
    @import url('layers/reset.css');
    @import url('layers/tokens.css');
    @import url('layers/forms.css');
    @import url('layers/smooth-scroll.css');
    @import url('layers/colors.css');
    @import url('layers/typography.css');
    @import url('layers/layout.css');
}

@layer icons {
    /* Icon-Styles */
    @import url('icons/base.css');
}

@layer utilities {
    /* Utility-Klassen */
    @import url('layer/utilities.css');
}

@layer animations {
    /* Animationen */
    @import url('layers/animations.css');
}

@layer effects {
    /* Effekte */
    @import url('layers/effects.css');
}
```

### 2. CSS-Module

Die Module im `modules/` Verzeichnis sind für einzelne Komponenten und können in Astro-Komponenten verwendet werden:

```astro
---
import styles from 'casoon-ui-lib/modules/button.module.css';
---

<button class={styles.button}>Klick mich</button>
```

Verfügbare Module:
- `avatar.module.css`
- `badge.module.css`
- `blog.module.css`
- `button.module.css`
- `card.module.css`
- `checkbox.module.css`
- `chip.module.css`
- `code.module.css`
- `footer.module.css`
- `form.module.css`
- `hamburger.module.css`
- `header.module.css`
- `input.module.css`
- `modal.module.css`
- `progress.module.css`
- `radio.module.css`
- `select.module.css`
- `sidebar.module.css`
- `skeleton.module.css`
- `slider.module.css`
- `spinner.module.css`
- `switch.module.css`
- `table.module.css`
- `textarea.module.css`

### 3. CSS-Layer

Die Layer im `layers/` Verzeichnis enthalten grundlegende Styles:

- `reset.css`: CSS-Reset
- `tokens.css`: Design-Tokens
- `forms.css`: Formular-Styles
- `smooth-scroll.css`: Sanftes Scrollen
- `colors.css`: Farbpalette
- `typography.css`: Typografie
- `layout.css`: Layout-System
- `utilities.css`: Utility-Klassen
- `animations.css`: Animationen
- `effects.css`: Effekte
- `components.css`: Komponenten-Styles
- `icons.css`: Icon-Styles

## Integration mit Astro

Die Bibliothek ist speziell für die Verwendung mit Astro JS optimiert:

```astro
---
import 'casoon-ui-lib/core.css';
import styles from 'casoon-ui-lib/modules/button.module.css';
---

<button class={styles.button}>
  Klick mich
</button>
```

### Vorteile der Integration

- **SSR-Optimiert**: Styles werden serverseitig gerendert
- **CSS-Streaming**: Effiziente Auslieferung von Styles
- **Modulare Komponenten**: Einfache Integration in Astro-Komponenten
- **Performance**: Optimierte CSS-Ausgabe durch LightningCSS

## Installation

```bash
npm install casoon-ui-lib
```

## Features

- 🎨 Schlankes, modulares CSS-System
- 🚀 Performance-optimiert für SSR
- ♿️ Barrierefrei
- 📱 Responsive
- 🎭 Theme-Support
- 🎯 Utility-First
- 🎨 Konsistentes Design-System

## Browser-Support

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## Lizenz

MIT
