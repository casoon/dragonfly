# Design Tokens

Das Dragonfly CSS Framework verwendet ein modernes, typisiertes Token-System basierend auf CSS `@property` Definitionen. Alle Design-Tokens sind als typisierte CSS Custom Properties definiert, was bessere Tooling-Unterstützung, Autocomplete und Animationsfähigkeiten ermöglicht.

## Struktur

```
tokens/
├── colors.css           # Farb-Properties (555 Zeilen)
├── spacing.css          # Spacing-Properties (405 Zeilen)
├── typography.css       # Typography-Properties (203 Zeilen)
├── radius.css           # Border-Radius-Properties (158 Zeilen)
├── effects.css          # Effekt-Properties (143 Zeilen)
├── layout.css           # Layout-Properties (194 Zeilen)
├── transitions.css      # Transition-Properties (116 Zeilen)
├── index.css            # Import aller Properties
└── README.md            # Diese Datei
```

## Vorteile des @property Systems

### 1. **Typisierung**
```css
@property --color-primary {
  inherits: true;
  initial-value: #06f;
  syntax: '<color>';
}
```

### 2. **Bessere Tooling-Unterstützung**
- Autocomplete in modernen Editoren
- Syntax-Validierung
- Bessere Fehlerbehandlung

### 3. **Animationsfähigkeiten**
```css
.element {
  background: var(--color-primary);
  transition: background 300ms ease;
}

[data-theme="dark"] {
  --color-primary: #4a90e2;
}
```

### 4. **Lightning CSS Kompatibilität**
Alle Properties verwenden Lightning CSS-kompatible Syntax-Definitionen.

## Verwendung

### Import
```css
@import url('./tokens/index.css');
```

### Verwendung in CSS
```css
.button {
  background: var(--color-primary);
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  transition: var(--transition-colors);
}
```

## Token-Kategorien

### Farben (colors.css)
- **Primäre Farben**: `--color-primary-50` bis `--color-primary-900`
- **Sekundäre Farben**: `--color-secondary-50` bis `--color-secondary-900`
- **Semantische Farben**: `--color-success`, `--color-warning`, `--color-error`
- **Grau-Palette**: `--color-gray-50` bis `--color-gray-900`
- **Neutrale Farben**: `--color-neutral-50` bis `--color-neutral-900`

### Abstände (spacing.css)
- **Basis-Skala**: `--space-0` bis `--space-96`
- **Semantische Aliases**: `--space-xs`, `--space-sm`, `--space-md`, etc.
- **Komponenten-Spacing**: `--space-button-padding-x`, `--space-card-padding`

### Typografie (typography.css)
- **Schriftgrößen**: `--font-size-xs` bis `--font-size-8xl`
- **Schriftgewichte**: `--font-weight-light` bis `--font-weight-extrabold`
- **Zeilenhöhen**: `--line-height-none` bis `--line-height-loose`

### Border-Radius (radius.css)
- **Basis-Radien**: `--radius-none` bis `--radius-3xl`
- **Semantische Radien**: `--radius-button`, `--radius-card`, `--radius-modal`

### Effekte (effects.css)
- **Schatten-Eigenschaften**: `--shadow-color`, `--shadow-opacity-*`
- **Übergangs-Dauern**: `--transition-duration-*`
- **Fokus-Farben**: `--color-focus`, `--color-focus-glow`

### Layout (layout.css)
- **Z-Index**: `--z-index-modal`, `--z-index-tooltip`, etc.
- **Breakpoints**: `--breakpoint-sm` bis `--breakpoint-2xl`
- **Container-Größen**: `--container-sm` bis `--container-2xl`

### Transitions (transitions.css)
- **Dauern**: `--transition-fast`, `--transition-normal`, `--transition-slow`
- **Easing**: `--transition-ease-out`, `--transition-ease-in`, `--transition-ease-in-out`
- **Animierbare Farben**: `--transition-bg`, `--transition-fg`, `--transition-border`
- **Komponenten-Transitions**: `--transition-colors`, `--transition-transform`, `--transition-opacity`

## Migration von alten Tokens

Alle alten Token-Definitionen wurden zu `@property` Definitionen migriert:

```css
/* Alt (entfernt) */
:root {
  --color-primary: #06f;
}

/* Neu */
@property --color-primary {
  inherits: true;
  initial-value: #06f;
  syntax: '<color>';
}
```

## Theme-Integration

Die Tokens sind vollständig in das Theme-System integriert:

```css
/* Tokens definieren die Properties */
@property --transition-bg {
  inherits: true;
  initial-value: #ffffff;
  syntax: '<color>';
}

/* Themes passen die Werte an */
[data-theme="dark"] {
  --transition-bg: var(--color-gray-900);
}
```

## Kompatibilität

- ✅ **Lightning CSS**: Vollständig kompatibel
- ✅ **Moderne Browser**: Chrome 85+, Firefox 31+, Safari 9.1+
- ✅ **Stylelint**: 100% lint-frei
- ✅ **Theme-System**: Vollständig integriert 