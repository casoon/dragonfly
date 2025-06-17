# Design Tokens

Das Dragonfly Design System verwendet ein umfassendes Token-System für konsistente Design-Werte across alle Komponenten.

## Token-Kategorien

### Core Tokens
- **`colors.css`** - Farbpaletten mit semantischen Namen und Abstufungen (50-900)
- **`spacing.css`** - Abstand-Werte für Margins, Padding und Gaps
- **`typography.css`** - Schriftgrößen, Gewichte und Aliase
- **`radius.css`** - Border-Radius-Werte für verschiedene Komponenten
- **`layout.css`** - Layout-spezifische Tokens
- **`transitions.css`** - Animations- und Übergangswerte
- **`effects.css`** - Schatten, Glows und visuelle Effekte
- **`themes.css`** - Theme-spezifische Eigenschaften

### Component Tokens
- **`components.css`** - Komponentenspezifische Tokens für UI-Elemente

## Token-Nutzung in Komponenten

### Farb-Tokens
Die Komponenten nutzen semantische Farb-Tokens mit Abstufungen:

```css
/* Alert-Komponente */
.alert-info {
  background-color: var(--color-info-100, #e0f2fe);
  color: var(--color-info-800, #1e40af);
}

/* Badge-Komponente */
.badge--primary {
  background-color: var(--color-primary-500);
  color: var(--color-text-inverse, white);
}
```

**Verfügbare Farbskalen:**
- `--color-primary-{50-900}`
- `--color-secondary-{50-900}`
- `--color-success-{50-900}`
- `--color-warning-{50-900}`
- `--color-error-{50-900}`
- `--color-info-{50-900}`
- `--color-neutral-{50-900}`
- `--color-gray-{50-900}` (Alias für neutral)

### Typography-Tokens
Sowohl `--font-size-*` als auch `--text-*` Aliase werden unterstützt:

```css
/* Verschiedene Schriftgrößen */
.alert {
  font-size: var(--text-sm, var(--font-size-sm, 0.875rem));
}

.badge {
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}
```

**Verfügbare Text-Größen:**
- `--text-xs` / `--font-size-xs` (0.75rem)
- `--text-sm` / `--font-size-sm` (0.875rem)
- `--text-base` / `--font-size-base` (1rem)
- `--text-lg` / `--font-size-lg` (1.125rem)
- `--text-xl` / `--font-size-xl` (1.25rem)

**Font-Weight Aliase:**
- `--font-light` / `--font-weight-light` (300)
- `--font-normal` / `--font-weight-normal` (400)
- `--font-medium` / `--font-weight-medium` (500)
- `--font-semibold` / `--font-weight-semibold` (600)
- `--font-bold` / `--font-weight-bold` (700)

### Spacing-Tokens
Verwendet für Padding, Margins und Gaps:

```css
.alert {
  padding: var(--alert-padding, var(--space-4, 1rem));
  gap: var(--alert-gap, var(--space-3, 0.75rem));
}
```

### Component-Specific Tokens
Spezielle Tokens für einzelne Komponenten:

```css
/* Alert-spezifische Tokens */
--alert-padding: var(--space-4)
--alert-padding-sm: var(--space-2)
--alert-padding-lg: var(--space-5)
--alert-gap: var(--space-3)
--alert-border-radius: var(--radius-md)

/* Badge-spezifische Tokens */
--badge-padding-xs: 0.15rem 0.35rem
--badge-padding-sm: 0.2rem 0.4rem
--badge-padding-md: 0.25rem 0.5rem
--badge-padding-lg: 0.3rem 0.6rem
--badge-min-width-xs: 1.2rem
--badge-min-width-sm: 1.5rem
--badge-min-width-md: 1.75rem
--badge-min-width-lg: 2rem
```

## Token-Implementierung

### @property Definitionen
Alle Tokens verwenden CSS `@property` für bessere Typisierung und Animation:

```css
@property --color-primary-500 {
  inherits: true;
  initial-value: #3b82f6;
  syntax: '<color>';
}

@property --space-4 {
  inherits: true;
  initial-value: 1rem;
  syntax: '<length>';
}
```

### Fallback-Werte
Jeder Token hat einen Fallback-Wert für Browser-Kompatibilität:

```css
.component {
  color: var(--color-primary-500, #3b82f6);
  padding: var(--space-4, 1rem);
}
```

## Migration von bestehenden Komponenten

### Schritt 1: Farben aktualisieren
```css
/* Vorher */
background-color: #3b82f6;
color: #1e40af;

/* Nachher */
background-color: var(--color-primary-500);
color: var(--color-primary-800);
```

### Schritt 2: Spacing standardisieren
```css
/* Vorher */
padding: 1rem;
margin: 0.5rem;

/* Nachher */
padding: var(--space-4);
margin: var(--space-2);
```

### Schritt 3: Typography-Tokens verwenden
```css
/* Vorher */
font-size: 0.875rem;
font-weight: 500;

/* Nachher */
font-size: var(--text-sm);
font-weight: var(--font-medium);
```

### Schritt 4: Komponentenspezifische Tokens
```css
/* Vorher */
padding: 1rem;
border-radius: 0.5rem;

/* Nachher */
padding: var(--alert-padding);
border-radius: var(--alert-border-radius);
```

## Theme-Unterstützung

Alle Tokens sind theme-aware und werden automatisch in verschiedenen Themes angepasst:

```css
/* Light Theme */
--color-text: #1f2937;
--color-background: #ffffff;

/* Dark Theme */
--color-text: #f9fafb;
--color-background: #111827;
```

## Browser-Kompatibilität

- **Moderne Browser**: Vollständige Unterstützung mit `@property`
- **Ältere Browser**: Fallback-Werte gewährleisten Funktionalität
- **CSS Custom Properties**: Unterstützt in allen modernen Browsern

## Performance

- Tokens werden einmal geladen und über CSS Custom Properties vererbt
- `@property` ermöglicht optimierte Animationen
- Minimaler Performance-Overhead durch effiziente Token-Struktur 