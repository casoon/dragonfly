# Theming-System Dokumentation

## Übersicht

Das Theming-System in der Casoon UI-Bibliothek ermöglicht es, das Erscheinungsbild der Anwendung durch verschiedene Themes zu verändern. Themes werden über CSS-Klassen aktiviert und ermöglichen eine flexible und konsistente Gestaltung.

## Architektur

Die Theme-Architektur besteht aus mehreren Komponenten:

1. **Theme-Basis** (`theme-base.css`): Definiert Grundvariablen, die immer geladen werden
2. **Feature-spezifische Themes**: Spezialisierte Themes für bestimmte Funktionen (z.B. Dark Mode, Accessibility)
3. **Standard-Themes**: Vordefinierte visuelle Themes (Tag, Nacht, Jahreszeiten, etc.)
4. **Marken-Themes**: Unternehmensspezifische Farbschemata

Alle Themes werden in der `core.css` importiert, aber nur aktiviert, wenn die entsprechende CSS-Klasse angewendet wird.

## Verzeichnisstruktur

```
casoon-ui-lib/
├── core.css               # Haupt-CSS mit Theme-Imports
├── themes/                # Theme-Dateien
│   ├── theme-base.css     # Basis-Theme (immer geladen)
│   ├── accessibility.css  # Barrierefreiheits-Theme
│   ├── dark-mode.css      # Dunkelmodus-Theme
│   ├── brands.css         # Marken-Themes
│   ├── day.css            # Tag-Theme
│   ├── night.css          # Nacht-Theme
│   └── ...                # Weitere Themes
└── scripts/
    └── theme-switcher.js  # JavaScript für Theme-Wechsel
```

## Verwendung

### HTML-Struktur

Um ein Theme zu aktivieren, fügen Sie die entsprechende Klasse zum `<html>` oder `<body>` Element hinzu:

```html
<html class="theme-day">
  <!-- Seiteninhalt -->
</html>
```

### Verfügbare Themes

#### Standard-Themes

- `theme-day` - Helles Tag-Theme (Standard)
- `theme-night` - Dunkles Nacht-Theme
- `theme-spring` - Frühlings-Theme
- `theme-summer` - Sommer-Theme
- `theme-autumn` - Herbst-Theme
- `theme-winter` - Winter-Theme
- `theme-forest` - Wald-Theme
- `theme-ocean` - Ozean-Theme
- `theme-pastel` - Pastell-Theme
- `theme-neon` - Neon-Theme
- `theme-retro` - Retro-Theme
- `theme-monochrome` - Monochrom-Theme
- `theme-sunset` - Sonnenuntergang-Theme

#### Funktionale Themes

- `dark-theme` - Aktiviert den dunklen Modus
- `high-contrast` - Aktiviert hohen Kontrast für bessere Lesbarkeit
- `reduced-motion` - Reduziert Animationen

#### Marken-Themes

- `brand-casoon` - Casoon-Marken-Theme (Standard)
- `brand-acme` - ACME-Marken-Theme
- `brand-globex` - Globex-Marken-Theme
- `brand-eco` - Eco-Marken-Theme

### JavaScript-Integration

Für eine dynamische Theme-Umschaltung verwenden Sie den mitgelieferten Theme-Switcher:

```javascript
// Theme-Switcher initialisieren
initThemeSwitcher();

// Zu einem bestimmten Theme wechseln
setTheme('theme-night');

// Zwischen Hell- und Dunkelmodus wechseln
toggleDarkMode();
```

## Eigene Themes erstellen

Um ein eigenes Theme zu erstellen:

1. Erstellen Sie eine neue CSS-Datei im `themes/`-Verzeichnis
2. Definieren Sie Ihre Theme-Variablen unter der entsprechenden Klasse:

```css
/* themes/my-custom-theme.css */
.theme-custom {
    --color-primary-50: #f9fafb;
    --color-primary-100: #f3f4f6;
    /* Weitere Variablen... */
}
```

3. Importieren Sie das neue Theme in `core.css`
4. Aktivieren Sie es über die HTML-Klasse

## CSS-Variablen

Jedes Theme kann folgende Variablen definieren:

### Farben

- Primärfarben: `--color-primary-[50-900]`
- Sekundärfarben: `--color-secondary-[50-900]`
- Akzentfarben: `--color-accent-[50-900]`
- Statusfarben: `--color-success`, `--color-error`, `--color-warning`, `--color-info`

### UI-Elemente

- Hintergründe: `--color-bg-primary`, `--color-bg-secondary`, `--color-bg-tertiary`
- Text: `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`
- Ränder: `--color-border`, `--color-border-light`, `--color-border-dark`

### Barrierefreiheit

- Fokus: `--focus-ring-color`, `--focus-ring-width`
- Animation: `--transition-speed`, `--motion-reduce-factor`

## Beispiele

### Theme-Wechsel mit Buttons

```html
<button onclick="setTheme('theme-day')">Tag</button>
<button onclick="setTheme('theme-night')">Nacht</button>
<button onclick="toggleDarkMode()">Dunkelmodus</button>
```

### System-Präferenzen berücksichtigen

Der Theme-Switcher erkennt automatisch die Systemeinstellungen des Benutzers. Bei einer Präferenz für dunkle Themes wird automatisch der dunkle Modus aktiviert.

### Persistente Themes

Die Theme-Auswahl wird im LocalStorage gespeichert und beim nächsten Besuch automatisch wiederhergestellt.

## Live-Demos

Sehen Sie sich die Beispiel-Implementierung unter `examples/theme-switcher.html` an, um die verschiedenen Themes in Aktion zu sehen. 