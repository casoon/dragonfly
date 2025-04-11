# Casoon UI Library

Eine modulare CSS-Bibliothek für moderne Webanwendungen.

## Projektstruktur

```
casoon-ui-lib/
├── base/              # Basis-Module
│   ├── tokens.css     # Design Tokens
│   ├── reset.css      # CSS Reset
│   ├── typography.css # Typografie-System
│   ├── layout.css     # Layout-System
│   ├── utilities.css  # Utility-Klassen
│   ├── components.css # Basis-Komponenten
│   ├── forms.css      # Formularelemente
│   └── smooth-scroll.css # Scroll-Effekte
├── animations.css     # Animations-Effekte
├── effects.css        # Spezialeffekte
├── hamburger.css      # Hamburger-Menü
├── sidebar.css        # Sidebar-Komponente
├── slider.css         # Slider-Komponente
├── core.css           # Importiert Basis-Module
├── docs/              # Dokumentation
│   ├── _components/   # Komponenten-Dokumentation
│   ├── _foundation/   # Basis-Module Dokumentation
│   ├── _examples/     # Beispiele
│   ├── _layouts/      # Jekyll Layouts
│   ├── css/           # CSS für Dokumentation
│   ├── _config.yml    # Jekyll Konfiguration
│   └── index.html     # Startseite
├── themes/            # Design-Themes
├── .gitignore
├── CONTRIBUTING.md    # Beitragsrichtlinien
└── README.md
```

## Dokumentation

Die vollständige Dokumentation ist unter [https://casoon.github.io/casoon-ui-lib/](https://casoon.github.io/casoon-ui-lib/) verfügbar.

## CSS-Module

### Core
- `core.css`: Importiert folgende Basis-Module:
  - `base/tokens.css`
  - `base/reset.css`
  - `base/typography.css`
  - `base/layout.css`
  - `base/utilities.css`
  - `base/components.css`
  - `base/forms.css`
  - `base/smooth-scroll.css`

### Basis-Module (base/)
- `tokens.css`: Design Tokens (Farben, Schatten, etc.)
- `reset.css`: Moderner CSS Reset
- `typography.css`: Typografie-System
- `layout.css`: Layout-System (Grid, Flexbox)
- `utilities.css`: Utility-Klassen
- `components.css`: Basis-Komponenten
- `forms.css`: Formularelemente
- `smooth-scroll.css`: Scroll-Effekte

### Komponenten
- `animations.css`: Animations-Effekte
- `effects.css`: Spezialeffekte
- `hamburger.css`: Hamburger-Menü
- `sidebar.css`: Sidebar-Komponente
- `slider.css`: Slider-Komponente

### Verzeichnisse
- `docs/`: Dokumentation (Jekyll-basiert)
- `themes/`: Design-Themes

## Verwendung

1. Importieren Sie die `core.css` in Ihr Projekt, um die Basis-Module zu laden:
```html
<link rel="stylesheet" href="https://casoon.github.io/casoon-ui-lib/core.css">
```

2. Oder importieren Sie einzelne Module nach Bedarf:
```html
<link rel="stylesheet" href="https://casoon.github.io/casoon-ui-lib/base/tokens.css">
<link rel="stylesheet" href="https://casoon.github.io/casoon-ui-lib/base/typography.css">
<link rel="stylesheet" href="https://casoon.github.io/casoon-ui-lib/base/layout.css">
<link rel="stylesheet" href="https://casoon.github.io/casoon-ui-lib/base/utilities.css">
<link rel="stylesheet" href="https://casoon.github.io/casoon-ui-lib/sidebar.css">
<link rel="stylesheet" href="https://casoon.github.io/casoon-ui-lib/hamburger.css">
```

## Entwicklung

1. Klonen Sie das Repository
2. Installieren Sie die Abhängigkeiten (falls vorhanden)
3. Bearbeiten Sie die CSS-Dateien nach Bedarf
4. Kompilieren Sie die Dateien (falls ein Build-Prozess eingerichtet ist)

Für Details zur Mitarbeit am Projekt, lesen Sie bitte [CONTRIBUTING.md](CONTRIBUTING.md).

## Lizenz

[MIT License](LICENSE)

## Über Casoon

[Casoon](https://www.casoon.de) bietet individuelle Lösungen für Designsysteme, Web-Apps und E-Commerce – mit Fokus auf Performance, Wartbarkeit und und ansprechendes Design.
