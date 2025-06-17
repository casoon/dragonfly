# Layout-Tokens Migration und Abgleich

## Übersicht

Dieser Bericht dokumentiert den Abgleich zwischen den Dateien unter `/layout` und `/tokens` mit dem Ziel, Layout-Tokens zu standardisieren und hardcodierte Werte durch Design Tokens zu ersetzen.

## Durchgeführte Änderungen

### 1. Erweiterte Layout-Tokens (`tokens/layout.css`)

**Neue Tokens hinzugefügt:**

#### Container-Eigenschaften
- `--container-max-width`: Standard-Container maximale Breite (1200px)
- `--container-padding`: Standard-Container Padding (1rem)
- `--container-border-radius`: Border-Radius für Container (0.5rem)
- `--container-border-color`: Border-Farbe für Container (#e5e7eb)
- `--container-bg`: Hintergrundfarbe für Container (#ffffff)
- `--container-shadow`: Standard-Schatten für Container
- `--container-elevated-shadow`: Erhöhter Schatten für Container
- `--container-elevated-hover-shadow`: Hover-Schatten für Container
- `--container-card-padding`: Padding für Card-Container (1.5rem)

#### Grid-Eigenschaften
- `--grid-columns`: Standard-Anzahl Grid-Spalten (12)
- `--grid-gutter`: Standard Grid-Abstand (1rem)
- `--grid-gutter-sm`: Kleiner Grid-Abstand (0.5rem)
- `--grid-gutter-md`: Mittlerer Grid-Abstand (1rem)
- `--grid-gutter-lg`: Großer Grid-Abstand (1.5rem)
- `--grid-gutter-xl`: Extra großer Grid-Abstand (2rem)
- `--grid-auto-fit-min`: Minimale Breite für auto-fit Grid (250px)
- `--grid-auto-fill-min`: Minimale Breite für auto-fill Grid (250px)

#### Modal und Overlay-Eigenschaften
- `--modal-max-width`: Maximale Modal-Breite (400px)
- `--tooltip-max-width`: Maximale Tooltip-Breite (200px)
- `--popover-max-width`: Maximale Popover-Breite (320px)

#### Layout-Komponenten
- `--sidebar-width`: Standard-Sidebar-Breite (250px)
- `--header-height`: Standard-Header-Höhe (64px)
- `--footer-height`: Standard-Footer-Höhe (80px)

### 2. Aktualisierte Container-System (`layout/containers.css`)

**Angewendete Token-Verwendung:**

```css
/* Vorher */
.container-sm {
    max-width: 640px;
    padding-left: var(--container-padding, 1rem);
}

/* Nachher */
.container-sm {
    max-width: var(--container-sm);
    padding-left: var(--container-padding);
}
```

**Aktualisierte Container-Klassen:**
- `.container-sm` → verwendet `var(--container-sm)`
- `.container-md` → verwendet `var(--container-md)`
- `.container-lg` → verwendet `var(--container-lg)`
- `.container-xl` → verwendet `var(--container-xl)`
- `.container-2xl` → verwendet `var(--container-2xl)`

**Responsive Container:**
- Media Queries verwenden jetzt die Container-Tokens
- Breakpoints sind konsistent mit `tokens/layout.css`

**Funktionale Container:**
- Modal, Toast, Dropdown, Tooltip, Popover Container verwenden entsprechende Tokens
- Z-Index-Werte sind durch Layout-Tokens definiert
- Styling-Eigenschaften (Schatten, Border, etc.) verwenden Container-Tokens

### 3. Optimierte Spacing-Utilities (`layout/spacing.css`)

**Komplett neu erstellt** mit vollständiger Token-Integration:

#### Gap-Utilities
```css
/* Vorher */
.gap-4 { gap: 1rem; }

/* Nachher */
.gap-4 { gap: var(--space-4); }
```

#### Margin-Utilities
```css
/* Vorher */
.m-4 { margin: 1rem; }

/* Nachher */
.m-4 { margin: var(--space-4); }
```

#### Padding-Utilities
```css
/* Vorher */
.p-4 { padding: 1rem; }

/* Nachher */
.p-4 { padding: var(--space-4); }
```

**Neue Features:**
- Vollständige Token-Integration für alle Spacing-Werte
- Semantic Spacing-Utilities (`.gap-xs`, `.gap-sm`, etc.)
- Verbesserte negative Margins mit `calc()` für bessere Browser-Kompatibilität
- Konsistente Pixel-Werte (`.gap-px`, `.m-px`, etc.)

### 4. Grid-System Optimierungen (`layout/grid-system.css`)

**Token-Integration:**
```css
/* Grid-Gutter verwendet jetzt Tokens */
.layout-grid {
    gap: var(--grid-gutter);
    grid-template-columns: repeat(var(--grid-columns), 1fr);
}

/* Auto-fit Grid verwendet Token-basierte Mindestbreiten */
.grid-auto-fit { 
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-auto-fit-min), 1fr)); 
}
```

## Token-Mapping Übersicht

### Container-Größen
| Klasse | Token | Wert |
|--------|-------|------|
| `.container-sm` | `--container-sm` | 640px |
| `.container-md` | `--container-md` | 768px |
| `.container-lg` | `--container-lg` | 1024px |
| `.container-xl` | `--container-xl` | 1280px |
| `.container-2xl` | `--container-2xl` | 1536px |

### Spacing-Werte
| Klasse | Token | Wert |
|--------|-------|------|
| `.gap-1` | `--space-1` | 0.25rem |
| `.gap-2` | `--space-2` | 0.5rem |
| `.gap-4` | `--space-4` | 1rem |
| `.gap-8` | `--space-8` | 2rem |
| `.gap-16` | `--space-16` | 4rem |

### Z-Index-Werte
| Komponente | Token | Wert |
|------------|-------|------|
| Dropdown | `--z-dropdown` | 10 |
| Sticky | `--z-sticky` | 20 |
| Modal | `--z-modal` | 40 |
| Tooltip | `--z-tooltip` | 30 |
| Toast | `--z-toast` | 60 |

## Vorteile der Token-Integration

### 1. Konsistenz
- Einheitliche Werte across das gesamte Design System
- Zentrale Definition verhindert Inkonsistenzen
- Automatische Synchronisation zwischen Komponenten

### 2. Wartbarkeit
- Änderungen an einem Ort wirken sich systemweit aus
- Einfachere Theme-Anpassungen
- Reduzierte Code-Duplikation

### 3. Entwickler-Erfahrung
- Bessere IDE-Unterstützung durch @property Definitionen
- Autocomplete für Token-Namen
- Type-Safety für CSS-Eigenschaften

### 4. Performance
- CSS Custom Properties ermöglichen effiziente Animationen
- Reduzierte CSS-Größe durch Token-Wiederverwendung
- Browser-Optimierungen für Custom Properties

## Nächste Schritte

### Empfohlene Erweiterungen

1. **Responsive Tokens**
   - Breakpoint-spezifische Container-Größen
   - Responsive Spacing-Tokens

2. **Component-spezifische Tokens**
   - Button-Sizing Tokens
   - Form-Element Tokens
   - Navigation-Tokens

3. **Animation Tokens**
   - Transition-Duration Tokens
   - Easing-Function Tokens
   - Animation-Delay Tokens

4. **Accessibility Tokens**
   - Focus-Ring Tokens
   - High-Contrast Tokens
   - Motion-Preference Tokens

### Migration weiterer Dateien

1. **`layout/flex-layouts.css`**
   - Integration von Flex-Gap Tokens
   - Flex-Direction Tokens

2. **`layout/responsive-utilities.css`**
   - Breakpoint-Token Integration
   - Responsive-Spacing Tokens

3. **`layout/responsive.css`**
   - Media-Query Tokens
   - Container-Query Tokens

## Fazit

Die Migration zu einem token-basierten Layout-System bietet erhebliche Vorteile in Bezug auf Konsistenz, Wartbarkeit und Entwickler-Erfahrung. Durch die systematische Verwendung von Design Tokens wird das System skalierbarer und einfacher zu pflegen.

Die implementierten Änderungen schaffen eine solide Grundlage für ein modernes, token-basiertes Design System, das einfach erweitert und angepasst werden kann. 