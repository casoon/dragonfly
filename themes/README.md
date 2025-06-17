# Themes System

Modernes, performantes Theme-System für die Dragonfly UI-Bibliothek.

## 🏗️ **Architektur**

### **Layer-Struktur**
```css
@layer tokens, themes.aliases, themes.mode, themes.transitions, themes.variants;
```

1. **`tokens`** - Basis Design Tokens (@property Definitionen)
2. **`themes.aliases`** - Semantische Komponenten-Aliases
3. **`themes.mode`** - Light/Dark Mode Definitionen
4. **`themes.transitions`** - Theme-Übergänge
5. **`themes.variants`** - Opt-in Theme-Varianten

### **Verzeichnisstruktur**
```
themes/
├── index.css              # Haupt-Einstiegspunkt
├── aliases.css            # Semantische Aliases
├── theme-transitions.css  # Theme-Übergänge
├── light-mode.css         # Light Mode
├── dark-mode.css          # Dark Mode
├── theme-helper.js        # JavaScript Theme-Loader
├── theme-switcher.html    # Test/Demo Interface
└── variants/              # Theme-Varianten (opt-in)
    ├── autumn.css         # Herbst-Theme
    ├── brand.css          # Corporate Brand
    ├── day.css            # Heller Tag
    ├── forest.css         # Wald-Theme
    ├── monochrome.css     # Schwarz-Weiß
    ├── neon.css           # Neon-Farben
    ├── night.css          # Dunkle Nacht
    ├── ocean.css          # Ozean-Theme
    ├── pastel.css         # Pastell-Töne
    ├── retro.css          # Retro-Stil
    ├── spring.css         # Frühlings-Theme
    ├── summer.css         # Sommer-Theme
    ├── sunset.css         # Sonnenuntergang
    └── winter.css         # Winter-Theme
```

## 🎨 **Theme-Aktivierung**

### **Data-Theme System**
Alle Themes verwenden das einheitliche `data-theme` Attribut:

```html
<!-- Light/Dark Modes -->
<html data-theme="light">
<html data-theme="dark">
<html data-theme="auto">

<!-- Theme Variants -->
<html data-theme="autumn">
<html data-theme="ocean">
<html data-theme="forest">
<html data-theme="day">
<html data-theme="night">
```

### **JavaScript API**
```javascript
// Theme-Variante laden
ThemeHelper.loadThemeVariant('autumn');

// Mode wechseln
document.documentElement.dataset.theme = 'dark';

// Auto-Erkennung
ThemeHelper.loadThemeVariant('auto');
```

## 📦 **Integration**

### **Basis-System (immer geladen)**
```css
@import url("path/to/themes/index.css");
```
Enthält: Design Tokens, Aliases, Light/Dark Modes, Transitions

### **Theme-Varianten (opt-in)**
```css
/* Statisch */
@import url("path/to/themes/variants/autumn.css");

/* Dynamisch */
<script>
ThemeHelper.loadThemeVariant('autumn');
</script>
```

### **CDN-Kompatibel**
```html
<link rel="stylesheet" href="https://cdn.example.com/dragonfly/themes/index.css">
<script>
// Dynamisches Laden von Varianten
ThemeHelper.loadThemeVariant('ocean');
</script>
```

## 🔧 **Entwicklung**

### **Neue Theme-Variante erstellen**
Alle Theme-Varianten folgen der einheitlichen Struktur basierend auf `tokens/colors.css`:

```css
/**
 * Custom Theme Variant
 * 
 * Standalone theme variant that can be loaded independently.
 * Uses [data-theme="custom"] scope for activation.
 * CDN-compatible and opt-in via import or JS.
 * 
 * @layer themes.variants
 */

@layer themes.variants {
  [data-theme="custom"] {
    /* Primary Colors */
    --color-primary: #your-primary;
    --color-secondary: #your-secondary;
    
    /* Status Colors */
    --color-success: #10b981;
    --color-warning: #f59e0b;
    --color-error: #ef4444;
    --color-info: #06b6d4;
    
    /* Text Colors */
    --color-text: #your-text;
    --color-text-muted: #4b5563;
    --color-text-inverse: #ffffff;
    
    /* Surface Colors */
    --color-background: #your-background;
    --color-surface: #your-surface;
    --color-surface-elevated: #ffffff;
    
    /* Border Colors */
    --color-border: #your-border;
    --color-border-strong: #your-border-strong;
    
    /* Transition Colors for smooth animations */
    --color-transition-primary: #your-primary;
    --color-transition-surface: #your-background;
    --color-transition-text: #your-text;
  }
}
```

### **Semantische Aliases verwenden**
```css
.my-component {
  background: var(--surface-bg);      /* ✅ Semantisch */
  color: var(--text-primary);        /* ✅ Semantisch */
  border: 1px solid var(--border);   /* ✅ Semantisch */
  
  /* Statt direkter Token-Referenzen */
  background: var(--color-gray-50);  /* ❌ Direkt */
}
```

## 🚀 **Performance**

- **Basis-System**: ~25KB (komprimiert) - enthält alle essentiellen Features
- **Theme-Varianten**: ~1-2KB pro Variante (opt-in, einheitliche Struktur)
- **CSS Layers**: Optimale Spezifität ohne !important
- **@property**: Bessere Browser-Performance und Tooling
- **Vereinheitlicht**: Alle 14 Varianten folgen derselben Struktur

## 🎯 **Features**

- ✅ **Framework-agnostisch** - Funktioniert mit jedem CSS Framework
- ✅ **CDN-kompatibel** - Kann von CDN geladen werden
- ✅ **Opt-in Varianten** - Nur laden was benötigt wird
- ✅ **Einheitliche Struktur** - Alle Varianten basieren auf `tokens/colors.css`
- ✅ **TypeScript Support** - @property Definitionen für bessere DX
- ✅ **Dark Mode** - Automatisch und manuell
- ✅ **Transitions** - Sanfte Theme-Übergänge
- ✅ **localStorage** - Persistente Theme-Auswahl
- ✅ **SSR-kompatibel** - Server-Side Rendering Support

## 📋 **Verfügbare Themes**

Alle Theme-Varianten verwenden das einheitliche `data-theme` System:

| Theme | Beschreibung | Primärfarben | Anwendung |
|-------|-------------|--------------|-----------|
| `light` | Standard Light Mode | Neutral grays | Standard-Hellmodus |
| `dark` | Standard Dark Mode | Dark grays | Standard-Dunkelmodus |
| `auto` | System-Präferenz | Automatisch | Folgt OS-Einstellung |
| `brand` | Corporate Brand | Indigo (#4f46e5) | Firmen-Branding |
| `day` | Heller Tag | Bright Blue (#2563eb) | Sehr helle Tagesansicht |
| `night` | Dunkle Nacht | Purple/Indigo (#6366f1) | Sehr dunkle Nachtansicht |
| `autumn` | Herbst-Töne | Amber (#d97706) | Warme Herbstfarben |
| `winter` | Winter-Töne | Cyan (#0891b2) | Kühle Winterfarben |
| `spring` | Frühlings-Töne | Green (#16a34a) | Frische Frühlingsfarben |
| `summer` | Sommer-Töne | Yellow (#ca8a04) | Helle Sommerfarben |
| `ocean` | Ozean-Töne | Teal (#0891b2) | Meeresfarben |
| `forest` | Wald-Töne | Green (#059669) | Waldfarben |
| `sunset` | Sonnenuntergang | Orange (#ea580c) | Sonnenuntergangsfarben |
| `retro` | Retro-Stil | Brown (#a16207) | Vintage-Töne |
| `monochrome` | Schwarz-Weiß | Gray (#374151) | Nur Graustufen |
| `pastel` | Pastell-Töne | Purple (#8b5cf6) | Sanfte Pastellfarben |
| `neon` | Neon-Farben | Bright Purple (#a855f7) | Leuchtende Neonfarben |

## 🔍 **Testing**

Öffne `theme-switcher.html` im Browser für interaktive Tests aller Themes und Features.

## 🔄 **Letzte Updates**

- **Vereinheitlichung**: Alle 14 Theme-Varianten verwenden jetzt dieselbe Struktur
- **Flache Hierarchie**: `mode/` und `base/` Verzeichnisse aufgelöst
- **Konsistente Aktivierung**: Alle Themes verwenden `data-theme` Attribut
- **Basis auf tokens/colors.css**: Vollständige Kompatibilität mit Design Token System
