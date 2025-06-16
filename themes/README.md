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
├── theme-helper.js        # JavaScript Theme-Loader
├── theme-switcher.html    # Test/Demo Interface
├── base/
│   ├── aliases.css        # Semantische Aliases
│   └── theme-transitions.css # Übergänge
├── mode/
│   ├── light-mode.css     # Light Mode
│   └── dark-mode.css      # Dark Mode
└── variants/              # Theme-Varianten (opt-in)
    ├── autumn.css
    ├── brand.css
    ├── day.css
    ├── forest.css
    ├── night.css
    ├── ocean.css
    ├── sunset.css
    └── ...
```

## 🎨 **Theme-Aktivierung**

### **Data-Theme System**
```html
<!-- Light/Dark Modes -->
<html data-theme="light">
<html data-theme="dark">
<html data-theme="auto">

<!-- Theme Variants -->
<html data-theme="autumn">
<html data-theme="ocean">
<html data-theme="forest">
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
```css
/**
 * My Custom Theme Variant
 * @layer themes.variants
 */

@layer themes.variants {
  [data-theme="custom"] {
    /* Nur die Tokens überschreiben, die sich ändern */
    --color-primary: #your-color;
    --color-surface: #your-surface;
    --color-text: #your-text;
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

- **Basis-System**: ~25KB (komprimiert)
- **Theme-Varianten**: ~2-5KB pro Variante (opt-in)
- **CSS Layers**: Optimale Spezifität ohne !important
- **@property**: Bessere Browser-Performance und Tooling

## 🎯 **Features**

- ✅ **Framework-agnostisch** - Funktioniert mit jedem CSS Framework
- ✅ **CDN-kompatibel** - Kann von CDN geladen werden
- ✅ **Opt-in Varianten** - Nur laden was benötigt wird
- ✅ **TypeScript Support** - @property Definitionen für bessere DX
- ✅ **Dark Mode** - Automatisch und manuell
- ✅ **Transitions** - Sanfte Theme-Übergänge
- ✅ **localStorage** - Persistente Theme-Auswahl
- ✅ **SSR-kompatibel** - Server-Side Rendering Support

## 📋 **Verfügbare Themes**

| Theme | Beschreibung | Farben |
|-------|-------------|---------|
| `light` | Standard Light Mode | Neutral grays |
| `dark` | Standard Dark Mode | Dark grays |
| `auto` | System-Präferenz | Automatisch |
| `brand` | Corporate Brand | Brand colors |
| `autumn` | Herbst-Töne | Orange, Rot, Braun |
| `winter` | Winter-Töne | Blau, Weiß, Grau |
| `spring` | Frühlings-Töne | Grün, Gelb, Rosa |
| `summer` | Sommer-Töne | Gelb, Orange, Türkis |
| `ocean` | Ozean-Töne | Blau, Cyan, Teal |
| `forest` | Wald-Töne | Grün, Braun, Beige |
| `sunset` | Sonnenuntergang | Orange, Pink, Lila |
| `neon` | Neon-Farben | Leuchtende Farben |
| `retro` | Retro-Stil | Gedämpfte Vintage-Töne |
| `monochrome` | Schwarz-Weiß | Nur Graustufen |
| `pastel` | Pastell-Töne | Sanfte, helle Farben |
| `day` | Heller Tag | Sehr helle, freundliche Töne |
| `night` | Dunkle Nacht | Sehr dunkle, kontrastreiche Töne |

## 🔍 **Testing**

Öffne `theme-switcher.html` im Browser für interaktive Tests aller Themes und Features. 