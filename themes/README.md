# Themes System

Modern, performant theme system for the Dragonfly UI library.

## 🏗️ **Architecture**

### **Layer Structure**
```css
@layer tokens, themes.aliases, themes.mode, themes.transitions, themes.variants;
```

1. **`tokens`** - Base design tokens (@property definitions)
2. **`themes.aliases`** - Semantic component aliases
3. **`themes.mode`** - Light/dark mode definitions
4. **`themes.transitions`** - Theme transitions
5. **`themes.variants`** - Opt-in theme variants

### **Directory Structure**
```
themes/
├── index.css              # Main entry point
├── aliases.css            # Semantic aliases
├── theme-transitions.css  # Theme transitions
├── light-mode.css         # Light mode
├── dark-mode.css          # Dark mode
├── theme-helper.js        # JavaScript theme loader
├── theme-switcher.html    # Test/demo interface
└── variants/              # Theme variants (opt-in)
    ├── autumn.css         # Autumn theme
    ├── brand.css          # Corporate brand
    ├── day.css            # Bright day
    ├── forest.css         # Forest theme
    ├── monochrome.css     # Black & white
    ├── neon.css           # Neon colors
    ├── night.css          # Dark night
    ├── ocean.css          # Ocean theme
    ├── pastel.css         # Pastel tones
    ├── retro.css          # Retro style
    ├── spring.css         # Spring theme
    ├── summer.css         # Summer theme
    ├── sunset.css         # Sunset colors
    └── winter.css         # Winter theme
```

## 🎨 **Theme Activation**

### **Data-Theme System**
All themes use the unified `data-theme` attribute:

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
// Load theme variant
ThemeHelper.loadThemeVariant('autumn');

// Switch mode
document.documentElement.dataset.theme = 'dark';

// Auto-detection
ThemeHelper.loadThemeVariant('auto');
```

## 📦 **Integration**

### **Base System (always loaded)**
```css
@import url("path/to/themes/index.css");
```
Includes: Design tokens, aliases, light/dark modes, transitions

### **Theme Variants (opt-in)**
```css
/* Static */
@import url("path/to/themes/variants/autumn.css");

/* Dynamic */
<script>
ThemeHelper.loadThemeVariant('autumn');
</script>
```

### **CDN Compatible**
```html
<link rel="stylesheet" href="https://cdn.example.com/dragonfly/themes/index.css">
<script>
// Dynamic loading of variants
ThemeHelper.loadThemeVariant('ocean');
</script>
```

## 🔧 **Development**

### **Creating New Theme Variants**
All theme variants follow the unified structure based on `tokens/colors.css`:

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

### **Using Semantic Aliases**
```css
.my-component {
  background: var(--surface-bg);      /* ✅ Semantic */
  color: var(--text-primary);        /* ✅ Semantic */
  border: 1px solid var(--border);   /* ✅ Semantic */
  
  /* Instead of direct token references */
  background: var(--color-gray-50);  /* ❌ Direct */
}
```

## 🚀 **Performance**

- **Base System**: ~25KB (compressed) - contains all essential features
- **Theme Variants**: ~1-2KB per variant (opt-in, unified structure)
- **CSS Layers**: Optimal specificity without !important
- **@property**: Better browser performance and tooling
- **Unified**: All 14 variants follow the same structure

## 🎯 **Features**

- ✅ **Framework-agnostic** - Works with any CSS framework
- ✅ **CDN-compatible** - Can be loaded from CDN
- ✅ **Opt-in variants** - Only load what you need
- ✅ **Unified structure** - All variants based on `tokens/colors.css`
- ✅ **TypeScript support** - @property definitions for better DX
- ✅ **Dark mode** - Automatic and manual
- ✅ **Transitions** - Smooth theme transitions
- ✅ **localStorage** - Persistent theme selection
- ✅ **SSR-compatible** - Server-side rendering support

## 📋 **Available Themes**

All theme variants use the unified `data-theme` system:

| Theme | Description | Primary Colors | Use Case |
|-------|-------------|----------------|----------|
| `light` | Standard Light Mode | Neutral grays | Default light mode |
| `dark` | Standard Dark Mode | Dark grays | Default dark mode |
| `auto` | System Preference | Automatic | Follows OS setting |
| `brand` | Corporate Brand | Indigo (#4f46e5) | Company branding |
| `day` | Bright Day | Bright Blue (#2563eb) | Very bright day view |
| `night` | Dark Night | Purple/Indigo (#6366f1) | Very dark night view |
| `autumn` | Autumn Tones | Amber (#d97706) | Warm autumn colors |
| `winter` | Winter Tones | Cyan (#0891b2) | Cool winter colors |
| `spring` | Spring Tones | Green (#16a34a) | Fresh spring colors |
| `summer` | Summer Tones | Yellow (#ca8a04) | Bright summer colors |
| `ocean` | Ocean Tones | Teal (#0891b2) | Ocean colors |
| `forest` | Forest Tones | Green (#059669) | Forest colors |
| `sunset` | Sunset Colors | Orange (#ea580c) | Sunset colors |
| `retro` | Retro Style | Brown (#a16207) | Vintage tones |
| `monochrome` | Black & White | Gray (#374151) | Grayscale only |
| `pastel` | Pastel Tones | Purple (#8b5cf6) | Soft pastel colors |
| `neon` | Neon Colors | Bright Purple (#a855f7) | Bright neon colors |

## 🔍 **Testing**

Open `theme-switcher.html` in your browser for interactive testing of all themes and features.

## 🔄 **Recent Updates**

- **Unification**: All 14 theme variants now use the same structure
- **Flat hierarchy**: `mode/` and `base/` directories resolved
- **Consistent activation**: All themes use `data-theme` attribute
- **Based on tokens/colors.css**: Full compatibility with design token system
