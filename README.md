# Casoon UI Library

> ⚠️ **Alpha-Version**: Dieses Design-System befindet sich in der Alpha-Phase. Die API und Struktur können sich noch ändern.

Ein schlankes Design-System für CASOON-Projekte, optimiert für moderne Webentwicklung mit Astro JS und LightningCSS.

## Über das Projekt

Die Casoon UI Library ist ein internes Design-System, das als Basis für Kundenprojekte von CASOON dient. Es bietet:

- Eine konsistente Grundlage für neue Projekte
- Wiederverwendbare Komponenten und Styles
- Optimierte Integration mit Astro JS und LightningCSS
- Unterstützung für SSR und CSS-Streaming
- Vermeidung von Code-Duplikation über Projektgrenzen hinweg

> **Hinweis**: Dieses Design-System ist bewusst schlank gehalten und erhebt nicht den Anspruch, mit umfangreichen Frameworks wie Tailwind zu konkurrieren. Es dient als solide Basis für die spezifischen Anforderungen von CASOON-Projekten.

## Status

🟡 **Alpha-Phase**: 
- Aktive Entwicklung
- API kann sich noch ändern
- Feedback und Beiträge willkommen
- Nicht für Produktionseinsatz empfohlen

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
- `alert.module.css`
- `avatar.module.css`
- `badge.module.css`
- `blog.module.css`
- `button.module.css`
- `card.module.css`
- `checkbox.module.css`
- `chip.module.css`
- `code.module.css`
- `file.module.css`
- `footer.module.css`
- `form.module.css`
- `hamburger.module.css`
- `header.module.css`
- `input.module.css`
- `input-group.module.css`
- `modal.module.css`
- `notification.module.css`
- `progress.module.css`
- `radio.module.css`
- `select.module.css`
- `sidebar.module.css`
- `skeleton.module.css`
- `slider.module.css`
- `spinner.module.css`
- `switch.module.css`
- `table.module.css`
- `tabs.module.css`
- `textarea.module.css`
- `toast.module.css`
- `tooltip.module.css`
- `widget.module.css`
- `wizard.module.css`

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
- `effects.css`: Effekte (Hauptdatei)
  - `effects/interactions.css`: Interaktionseffekte wie Drag & Drop, Swipe-Gesten, Touch-Feedback
  - `effects/neon.css`: Neon-Effekte und Leuchteffekte
  - `effects/filters.css`: Verschiedene Filtereffekte
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

## Warum LightningCSS

Diese Bibliothek wurde speziell für die Verwendung mit LightningCSS entwickelt und nutzt moderne CSS-Funktionen, die nur durch LightningCSS vollständig unterstützt werden:

- **CSS-Variablen in Media Queries**: Verwendung von CSS-Variablen innerhalb von Media Queries für konsistente Breakpoints
- **Modern Syntax**: Unterstützung für die neueste CSS-Syntax wie `@layer`, CSS-Nesting und logische Eigenschaften
- **Performante Verarbeitung**: Bis zu 100x schneller als andere CSS-Prozessoren
- **Automatische Präfixe**: Keine zusätzlichen PostCSS-Plugins erforderlich
- **Minimale Bundle-Größe**: Optimierte CSS-Ausgabe mit fortschrittlicher Code-Minimierung

Um diese Bibliothek vollständig nutzen zu können, sollte dein Projekt LightningCSS verwenden, entweder:
- Direkt über die LightningCSS JavaScript-API
- Durch Astro's integrierte LightningCSS-Unterstützung
- Mit Vite und dem `vite-plugin-lightningcss`-Plugin

```bash
# Installation von LightningCSS mit Vite
npm install --save-dev vite-plugin-lightningcss lightningcss
```

## Installation

```bash
npm install casoon-ui-lib@alpha
```

## Dokumentation

Eine umfassende Dokumentation der Casoon UI Library ist unter [https://casoon.github.io/casoon-ui-docs/](https://casoon.github.io/casoon-ui-docs/) verfügbar.

Die Dokumentation enthält:
- Ausführliche Installation- und Einrichtungsanleitungen
- Detaillierte Beschreibungen aller verfügbaren Komponenten
- Anwendungsbeispiele und Best Practices
- Theme-Konfiguration und Anpassungsmöglichkeiten
- Informationen zum Design-System (Farben, Typografie, Layout)
- Zugänglichkeitsrichtlinien

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

## Themes

Die Casoon UI Library bietet mehrere vorgefertigte Themes, die leicht ausgetauscht werden können:

- `day.css` - Helles Theme mit Blau-Tönen
- `night.css` - Dunkles Theme mit Lila-Akzenten
- `summer.css` - Warmes Theme mit Gelb/Orange-Tönen
- `winter.css` - Kühles Theme mit Blau/Cyan-Tönen
- `autumn.css` - Herbstliches Theme mit Orange/Rot-Tönen
- `spring.css` - Frisches Theme mit Grün-Tönen
- `forest.css` - Naturtheme mit Grün-Variationen
- `ocean.css` - Meeres-Theme mit Cyan/Blau-Tönen
- `pastel.css` - Sanftes Theme mit Pastellfarben
- `neon.css` - Knalliges Theme mit leuchtenden Farben
- `retro.css` - Vintage-Look mit warmen Farben
- `monochrome.css` - Minimalistisches Schwarz-Weiß-Theme
- `accessibility.css` - Theme mit hohem Kontrast für bessere Zugänglichkeit

### Themes importieren

Themes können einfach per CSS-Import eingebunden werden:

```css
/* Importiere das Grundsystem */
@import 'casoon-ui-lib/core.css';

/* Wähle ein Theme */
@import 'casoon-ui-lib/themes/ocean.css';
```

### Themes mit JavaScript wechseln

Themes können zur Laufzeit dynamisch gewechselt werden:

```javascript
// Theme-Datei laden
function changeTheme(themeName) {
  // Vorhandene Theme-Links entfernen
  document.querySelectorAll('link[data-theme]').forEach(link => link.remove());
  
  // Neues Theme hinzufügen
  const themeLink = document.createElement('link');
  themeLink.rel = 'stylesheet';
  themeLink.href = `path/to/casoon-ui-lib/themes/${themeName}.css`;
  themeLink.setAttribute('data-theme', '');
  document.head.appendChild(themeLink);
}

// Beispiel-Aufruf
changeTheme('ocean');
```

### Theme-Umschalter im HTML

```html
<select id="theme-switcher">
  <option value="day">Tag</option>
  <option value="night">Nacht</option>
  <option value="ocean">Ozean</option>
  <option value="forest">Wald</option>
</select>

<script>
  document.getElementById('theme-switcher').addEventListener('change', (e) => {
    changeTheme(e.target.value);
  });
</script>
```

### Benutzerdefinierte Themes

Sie können auch eigene Themes erstellen, indem Sie die CSS-Variablen überschreiben:

```css
@layer core {
  :root {
    /* Primary Colors */
    --color-primary-50: #f0f9ff;
    --color-primary-100: #e0f2fe;
    /* ... weitere Farben ... */
    
    /* Optional: Anpassung der Grayscale-Farben */
    --color-gray-100: #f5f5f5;
    --color-gray-900: #171717;
  }
}
```

## Lizenz

MIT

### Responsive Design

Das Design-System nutzt moderne CSS-Features für responsives Design. In der Basis-Konfiguration sind folgende Breakpoints definiert:

```css
--breakpoint-sm: 30rem;  /* 480px */
--breakpoint-md: 48rem;  /* 768px */
--breakpoint-lg: 64rem;  /* 1024px */
--breakpoint-xl: 80rem;  /* 1280px */
--breakpoint-2xl: 96rem; /* 1536px */
```

Du kannst diese Breakpoints in deinen Media-Queries verwenden:

```css
@media (min-width: var(--breakpoint-md)) {
  /* Styles für mittlere und größere Viewports */
}
```

Zusätzlich bietet das Framework Utility-Klassen mit Breakpoint-Präfixen:
- `.sm:flex` - Flex-Display ab dem sm-Breakpoint 
- `.md:grid-cols-2` - 2-spaltige Grid ab dem md-Breakpoint
- `.lg:hidden` - Element ab lg-Breakpoint ausblenden

### Container-Queries

Die Casoon UI Library unterstützt Container-Queries für eine komponentenbasierte reaktive Gestaltung. Im Gegensatz zu Media-Queries, die sich auf die Viewport-Größe beziehen, hängen Container-Queries von der Größe des übergeordneten Containers ab, was eine flexiblere und komponentenorientiertere Gestaltung ermöglicht.

### Container-Query-Tokens

Die folgenden Container-Query-Tokens sind verfügbar:

- `--container-query-xs`: 240px
- `--container-query-sm`: 380px
- `--container-query-md`: 540px
- `--container-query-lg`: 720px
- `--container-query-xl`: 960px

### Container-Basis-Klassen

Um Container-Queries zu aktivieren, verwenden Sie die folgenden Klassen:

- `.cq-container`: Setzt `container-type: inline-size` und `container-name: root`
- `.cq-normal`: Setzt `container-type: normal`
- `.cq-size`: Setzt `container-type: size`

### Container-Query-Utility-Klassen

Container-Query-Utility-Klassen verwenden das Präfix `.cq-` gefolgt vom Breakpoint und der spezifischen Eigenschaft:

```html
<div class="cq-container p-4">
  <!-- Dieser Grid wird 1 Spalte bei kleinen Containern haben, 
       aber 2 Spalten, wenn der Container mindestens 540px breit ist -->
  <div class="grid cq-md:grid-cols-2 gap-4">
    <div>Element 1</div>
    <div>Element 2</div>
  </div>
</div>
```

Verfügbare Breakpoints für Container-Queries:

- `cq-xs`: Gilt für Container mit mindestens 240px Breite
- `cq-sm`: Gilt für Container mit mindestens 380px Breite
- `cq-md`: Gilt für Container mit mindestens 540px Breite
- `cq-lg`: Gilt für Container mit mindestens 720px Breite
- `cq-xl`: Gilt für Container mit mindestens 960px Breite