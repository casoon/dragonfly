# Casoon UI Library

Eine moderne und flexible UI-Bibliothek für Webanwendungen.

## Verzeichnisstruktur

```
casoon-ui-lib/
├── core/                      # Kern-Styles
│   ├── components/            # Komponenten-Styles
│   │   ├── alert.css
│   │   ├── avatar.css
│   │   ├── badge.css
│   │   ├── button.css
│   │   ├── card.css
│   │   ├── checkbox.css
│   │   ├── chip.css
│   │   ├── divider.css
│   │   ├── dropdown.css
│   │   ├── form.css
│   │   ├── header.css
│   │   ├── input.css
│   │   ├── list.css
│   │   ├── modal.css
│   │   ├── nav.css
│   │   ├── pagination.css
│   │   ├── popover.css
│   │   ├── progress.css
│   │   ├── radio.css
│   │   ├── select.css
│   │   ├── sidebar.css
│   │   ├── slider.css
│   │   ├── switch.css
│   │   ├── table.css
│   │   ├── tabs.css
│   │   ├── textarea.css
│   │   ├── toast.css
│   │   └── tooltip.css
│   ├── colors.css             # Farbvariablen
│   ├── components.css         # Komponenten-Basis
│   ├── forms.css              # Formular-Styles
│   ├── layout.css             # Layout-Styles
│   ├── reset.css              # CSS Reset
│   ├── smooth-scroll.css      # Smooth Scroll
│   ├── tokens.css             # Design Tokens
│   ├── typography.css         # Typografie
│   └── utilities.css          # Utility-Klassen
├── effects/                   # Effekt-Styles
├── themes/                    # Theme-Styles
├── animations.css             # Animations-Styles
├── core.css                   # Haupt-CSS-Datei
├── effects.css                # Effekt-Styles
├── hamburger.css              # Hamburger-Menü
├── sidebar.css                # Sidebar-Styles
└── slider.css                 # Slider-Styles
```

## Layer-Organisation

Die Styles sind in verschiedene Layer organisiert:

### Base Layer
Grundlegende Styles:
- Reset
- Tokens
- Forms
- Smooth Scroll
- Colors
- Typography
- Layout

### Components Layer
Komponenten-Styles:
- Alert
- Avatar
- Badge
- Button
- Card
- Checkbox
- Chip
- Divider
- Dropdown
- Form
- Header
- Input
- List
- Modal
- Nav
- Pagination
- Popover
- Progress
- Radio
- Select
- Sidebar
- Slider
- Switch
- Table
- Tabs
- Textarea
- Toast
- Tooltip

### Utilities Layer
Utility-Klassen für:
- Display
- Flexbox
- Grid
- Position
- Spacing
- Typography

### Effects Layer
Effekt-Styles:
- Blur
- Glass
- Frost
- Hover
- Active
- Focus
- Disabled

### Animations Layer
Animations-Styles:
- Fade
- Slide
- Scale
- Hamburger
- Sidebar
- Slider

## Installation

```bash
npm install casoon-ui-lib
```

## Verwendung

```html
<link rel="stylesheet" href="node_modules/casoon-ui-lib/core.css">
```

## Entwicklung

```bash
# Dependencies installieren
npm install

# Stylelint ausführen
npm run lint

# Stylelint mit Autofix ausführen
npm run lint:fix
```

## Contributing

Bitte lesen Sie [CONTRIBUTING.md](CONTRIBUTING.md) für Details zu unserem Code of Conduct und den Prozess für Pull Requests.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE) Datei für Details.
