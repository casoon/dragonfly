# @casoon/ui-lib

Ein modulares, leichtgewichtiges CSS-Framework und Design-System für moderne Webprojekte. Optimiert für Astro JS, LightningCSS und Container Queries mit @layer-basierter Architektur und umfassender Barrierefreiheit.

## Neuerungen in Version 0.3.14

- **Optimierte CSS-Layer-Struktur**: Verbesserte Hierarchie und präzisere Dokumentation aller Layer
- **Erweiterte Flex- und Grid-Utilities**: Umfangreichere Layout-Werkzeuge für komplexe UI-Designs
- **Verbesserte Container-Query-Integration**: Nahtlose Anpassung aller Komponenten über das Container-Abfrage-System
- **Durchgängig logische Eigenschaften**: Bessere Unterstützung für bidirektionale Layouts (RTL/LTR)
- **Stringente Lint-Regeln**: Sicherstellung konsistenter Codequalität und optimaler Wartbarkeit

## Neuerungen in Version 0.3.4

- **Erweiterte Container Queries**: Verbesserte Implementierung mit neuen Utility-Klassen und responsiven Komponenten
- **Neue Layout-Komponenten**: `grid-responsive` und `flex-responsive` für intelligente Container-basierte Layouts
- **Container Query Utilities**: Neue Klassen wie `container-xs:grid-cols-2` für komponentenbasierte Responsive-Designs
- **Bessere Performance**: Optimierte Container-Query-Selektoren und `contain-intrinsic-size` für stabilere Layouts
- **Verbesserte Dokumentation**: Detaillierte Beispiele für Container-Query-Komponenten

## Einführung

CASOON UI Lib ist ein modernes, leichtgewichtiges CSS-Framework, das auf fortschrittlichen Webtechnologien wie CSS Layers, Custom Properties, Container Queries und Logical Properties basiert. Es bietet ein durchdachtes Set von Utility-Klassen und Design-Tokens, die ein konsistentes und anpassbares Designsystem für professionelle Webprojekte ermöglichen.

## Installation

```bash
# Via npm
npm install @casoon/ui-lib

# Via yarn
yarn add @casoon/ui-lib

# Via pnpm
pnpm add @casoon/ui-lib
```

## Verwendung

### Grundlegende Verwendung

```html
<link rel="stylesheet" href="path/to/@casoon/ui-lib/core.css">
```

### Mit Bundlern (Webpack, Vite, etc.)

```js
// In Ihrer JavaScript-Datei
import '@casoon/ui-lib/core.css';
```

### Mit Astro

```astro
---
// In Ihrer Astro-Komponente
import '@casoon/ui-lib/core.css';
---

<html>
  <!-- Inhalt -->
</html>
```

## Container-Query-System

Die Bibliothek nutzt ein fortschrittliches Container-Query-System für präzise komponentenbasierte Responsivität:

```html
<!-- Container-Kontext setzen -->
<div class="container-query">
  <!-- Inhalte hier -->
  <div class="layout-flex sm:flex-row md:gap-6 lg:flex-nowrap">
    <div class="sm:flex-basis-1-3">Sidebar</div>
    <div class="sm:flex-basis-2-3">Hauptinhalt</div>
  </div>
</div>
```

```css
/* Container-Definitionen */
.container-query {
  container-type: inline-size;
  container-name: layout;
}

/* Responsive Anpassungen basierend auf Container-Größe */
@container layout (min-width: 30rem) {
  .sm\:flex-row { flex-direction: row; }
  .sm\:flex-basis-1-3 { flex-basis: 33.3333%; }
  .sm\:flex-basis-2-3 { flex-basis: 66.6667%; }
}

@container layout (min-width: 48rem) {
  .md\:gap-6 { gap: var(--space-6); }
}

@container layout (min-width: 62rem) {
  .lg\:flex-nowrap { flex-wrap: nowrap; }
}
```

Dies ermöglicht eine flexiblere und präzisere Anpassung von Komponenten basierend auf ihrer Container-Größe statt auf der Viewport-Größe.

## CSS Layer-System

Die Bibliothek nutzt eine präzise konfigurierte Hierarchie von CSS-Layers zur Steuerung der Spezifität, wodurch Konflikte vermieden und die Wartbarkeit verbessert wird. Weitere Informationen finden Sie in der [Layer-System-Dokumentation](LAYER-SYSTEM.md).

### Layer-Hierarchie

```css
@layer reset,                /* Grundlegender Browser-Reset */
       tokens,               /* Design-Tokens und Variablen */
       custom-properties,    /* Registrierte CSS-Eigenschaften */
       core,                 /* Kernfunktionalitäten */
       logical-properties,   /* Bidirektionale Layouts (RTL/LTR) */
       colors,               /* Farbsystem */
       color-mix,            /* Farbmischungen und -varianten */
       layout,               /* Layout-Grundlagen */
       layout-queries,       /* Responsive Anpassungen */
       typography,           /* Typografie-System */
       utilities,            /* Atomare Utility-Klassen */
       smooth-scroll,        /* Scrollverhalten */
       accessibility,        /* Barrierefreiheit */
       icons,                /* Icon-System */
       modules,              /* UI-Komponenten */
       animations,           /* Bewegungssystem */
       effects,              /* Visuelle Effekte */
       themes;               /* Theming-System */
```

## Testen mit Lightning CSS

Die Bibliothek enthält umfassende Tests für die Kompatibilität mit Lightning CSS:

```bash
# Lightning CSS Tests ausführen
npm run test:lightningcss
```

## Eigene Komponenten erstellen

Sie können eigene Komponenten in den `modules`-Layer einbinden:

```css
/* Ihre Komponenten-Datei */
@import url('path/to/@casoon/ui-lib/core.css');

@layer modules {
  .my-component {
    /* Komponenten-Styles unter Nutzung der Design-Tokens */
    padding: var(--space-4);
    color: var(--color-primary);
    border-radius: var(--radius-md);
  }
}
```

## Dateien und Module

### CSS-Dateien im Hauptverzeichnis

Die Hauptdateien im Wurzelverzeichnis steuern die gesamte Bibliothek:

- `core.css`: Zentrale Datei mit allen Layer-Importen
- `base.css`: Basisimporte und Layer-Struktur
- `layout.css`: Layout-Komponenten und Grid/Flexbox-Utilities
- `layout.queries.css`: Container-Query-basierte responsive Anpassungen
- `typography.css`: Typografie-System und Textformatierung
- `animations.css`: Bewegungs- und Übergangssystem
- `effects.css`: Visuelle Effekte und Interaktionen
- `modules.css`: Import aller UI-Komponenten
- `themes.css`: Theming-System und Farbschemata
- `icons.css`: Icon-System und -Integration

### Unterverzeichnisse

- `base/`: Grundlegende CSS-Layer
- `modules/`: UI-Komponenten als CSS-Module
- `effects/`: Spezielle Effekte und Interaktionen
- `themes/`: Theme-Varianten und Farbschemata
- `icons/`: Icon-Definitionen

## Lizenz

MIT

## Beitragen

Beiträge sind willkommen! Bitte lesen Sie die [Beitragsrichtlinien](CONTRIBUTING.md) für Details.

## Über das Projekt

Die Casoon UI Library ist ein fortschrittliches Design-System, das als solide Basis für moderne Webprojekte dient. Es bietet:

- Eine konsistente Grundlage mit flexiblem Design-Token-System
- Wiederverwendbare, zugängliche UI-Komponenten
- Optimierte Integration mit modernen Technologien wie Astro JS und LightningCSS
- Volle Unterstützung für SSR, CSS-Streaming und Container Queries
- Präzise Steuerung durch CSS-Layer-Architektur

> **Hinweis**: Dieses Design-System ist bewusst schlank und modular gehalten, um maximale Flexibilität und Leistung zu bieten. Es fokussiert sich auf Qualität, Wartbarkeit und Erweiterbarkeit statt auf die Quantität von Komponenten.

## Status

🟡 **Beta-Phase**: 
- Stabile Kernfunktionalität
- Kontinuierliche Verbesserungen
- API weitgehend stabilisiert
- Geeignet für Produktionseinsatz in kontrollierten Umgebungen
- Feedback und Beiträge sehr willkommen

## Verzeichnisstruktur

```
@casoon/ui-lib/
├── core.css              # Haupt-CSS-Datei mit Layer-Imports
├── base.css              # Basisimporte und Layer-Struktur
├── layout.css            # Layout-Komponenten und -Utilities
├── layout.queries.css    # Container-Query-Responsivität
├── typography.css        # Typografie-System
├── animations.css        # Animations- und Bewegungssystem
├── effects.css           # Visuelle Effekte
├── modules.css           # Komponenten-Importe
├── themes.css            # Theming-System
├── icons.css             # Icon-System
├── base/                 # Grundlegende CSS-Layer
├── modules/              # UI-Komponenten als CSS-Module
├── effects/              # Spezielle Effekte und Interaktionen
├── themes/               # Theme-Varianten und Farbschemata
└── icons/                # Icon-Definitionen
```