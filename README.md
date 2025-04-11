# Casoon UI Library

Eine modulare CSS-Bibliothek für moderne Webanwendungen.

## Projektstruktur

```
casoon-ui-lib/
├── _components.css    # UI-Komponenten (Buttons, Cards, Badges)
├── _effects.css       # Spezialeffekte (Neon, Animationen)
├── _forms.css         # Formularelemente
├── _hamburger.css     # Hamburger-Menü-Varianten
├── _layout.css        # Layout-System (Grid, Flexbox)
├── _reset.css         # CSS Reset
├── _smooth-scroll.css # Scroll-Effekte
├── _tokens.css        # Design Tokens
├── _typography.css    # Typografie-System
├── _utilities.css     # Utility-Klassen
├── core.css           # Importiert Basis-Module und ausgewählte Komponenten
├── .gitignore
└── README.md
```

## CSS-Module

### Core
- `core.css`: Importiert folgende Module:
  - `_reset.css`
  - `_tokens.css`
  - `_typography.css`
  - `_layout.css`
  - `_utilities.css`
  - `_components.css`
  - `_forms.css`
  - `_smooth-scroll.css`

### Basis
- `_reset.css`: Moderner CSS Reset
- `_tokens.css`: Design Tokens (Farben, Schatten, etc.)
- `_typography.css`: Typografie-System
- `_layout.css`: Layout-System (Grid, Flexbox)
- `_utilities.css`: Utility-Klassen

### Komponenten
- `_components.css`: UI-Komponenten
  - Buttons
  - Cards
  - Badges

### Formulare
- `_forms.css`: Formularelemente
  - Inputs
  - Checkboxes
  - Radios
  - Selects
  - Textareas

### Effekte
- `_effects.css`: Spezialeffekte
  - Neon-Effekte
  - Animationen

### Navigation
- `_hamburger.css`: Hamburger-Menü-Varianten
- `_smooth-scroll.css`: Scroll-Effekte

## Verwendung

1. Importieren Sie die `core.css` in Ihr Projekt, um die Basis-Module und ausgewählte Komponenten zu laden:
```html
<link rel="stylesheet" href="path/to/core.css">
```

2. Oder importieren Sie einzelne Module nach Bedarf:
```html
<link rel="stylesheet" href="path/to/_components.css">
<link rel="stylesheet" href="path/to/_forms.css">
```

## Entwicklung

1. Klonen Sie das Repository
2. Installieren Sie die Abhängigkeiten (falls vorhanden)
3. Bearbeiten Sie die CSS-Dateien nach Bedarf
4. Kompilieren Sie die Dateien (falls ein Build-Prozess eingerichtet ist)

## Lizenz

[MIT License](LICENSE)
