# UI-Effekte Bibliothek

Diese Bibliothek bietet eine umfangreiche Sammlung von modernen UI-Effekten für Webanwendungen. Alle Effekte sind performant optimiert und berücksichtigen Accessibility-Richtlinien.

## Installation

```bash
npm install @casoon/ui-lib
```

## Einbindung

```css
/* Basis-Effekte */
@import '@casoon/ui-lib/effects/animations.css';
@import '@casoon/ui-lib/effects/filters.css';
@import '@casoon/ui-lib/effects/interactions.css';
@import '@casoon/ui-lib/effects/transforms.css';
@import '@casoon/ui-lib/effects/neos.css';
```

## Verfügbare Effekte

### 1. Animationen (`animations.css`)

```css
/* Basis-Animationen */
.animate-fade-in { ... }
.animate-slide-up { ... }
.animate-bounce { ... }
.animate-pulse { ... }
.animate-spin { ... }

/* Scroll-Animationen */
.scroll-fade-in { ... }
.scroll-slide-up { ... }
.scroll-scale { ... }

/* Interaktions-Animationen */
.hover-bounce { ... }
.hover-pulse { ... }
.hover-spin { ... }
```

### 2. Filter (`filters.css`)

```css
/* Basis-Filter */
.filter-blur { ... }
.filter-brightness { ... }
.filter-contrast { ... }
.filter-grayscale { ... }
.filter-hue-rotate { ... }

/* Kombinierte Filter */
.filter-vintage { ... }
.filter-cool { ... }
.filter-warm { ... }
.filter-dramatic { ... }
```

### 3. Interaktionen (`interactions.css`)

```css
/* Basis-Interaktionen */
.interactive { ... }
.click-ripple { ... }
.draggable { ... }
.scroll-smooth { ... }

/* Hover-Effekte */
.hover-lift { ... }
.hover-scale { ... }
.hover-rotate { ... }

/* Touch-Effekte */
.touch-feedback { ... }
.touch-ripple { ... }
```

### 4. Neo-Effekte (`neos.css`)

```css
/* Basis Neo-Effekte */
.neo { ... }
.neo-inset { ... }

/* Größen-Varianten */
.neo-sm { ... }
.neo-lg { ... }

/* Farb-Varianten */
.neo-primary { ... }
.neo-secondary { ... }
.neo-success { ... }
```

## Effekt-Kombinationen

### 1. Animierte Neo-Effekte

```html
<div class="neo neo-primary animate-pulse">
  Pulsierender Neo-Effekt
</div>

<div class="neo neo-secondary hover-lift animate-fade-in">
  Hover-Effekt mit Animation
</div>
```

### 2. Filter mit Animationen

```html
<div class="filter-vintage animate-fade-in">
  Vintage-Effekt mit Einblendung
</div>

<div class="filter-cool hover-scale">
  Kühler Filter mit Hover-Skalierung
</div>
```

### 3. Interaktive Transformationen

```html
<button class="interactive hover-lift active-scale">
  Interaktiver Button
</button>

<div class="draggable hover-rotate">
  Ziehbares Element mit Rotation
</div>
```

### 4. Komplexe Kombinationen

```html
<!-- Neo-Effekt mit Filter und Animation -->
<div class="neo neo-primary filter-cool animate-pulse">
  Kombinierter Effekt
</div>

<!-- Interaktives Element mit mehreren Effekten -->
<button class="interactive neo neo-secondary hover-lift active-scale filter-warm">
  Multi-Effekt Button
</button>
```

## Best Practices

1. **Performance**
   - Verwenden Sie `will-change` sparsam
   - Kombinieren Sie Effekte mit Bedacht
   - Nutzen Sie Hardware-Beschleunigung wo möglich

2. **Accessibility**
   - Alle Effekte berücksichtigen `prefers-reduced-motion`
   - Fokus-Zustände sind immer sichtbar
   - Touch-Targets sind ausreichend groß

3. **Responsive Design**
   - Effekte passen sich an Bildschirmgrößen an
   - Mobile-optimierte Touch-Interaktionen
   - Reduzierte Effekte auf kleinen Displays

## CSS-Variablen

Alle Effekte können über CSS-Variablen angepasst werden:

```css
:root {
  /* Neo-Effekte */
  --neo-bg: #e0e5ec;
  --neo-shadow-dark: #a3b1c6;
  --neo-shadow-light: #ffffff;

  /* Filter */
  --filter-blur: 4px;
  --filter-brightness: 1.2;
  --filter-contrast: 1.2;

  /* Animationen */
  --animation-duration: 0.3s;
  --animation-timing: ease;
}
```

## Browser-Support

- Chrome (neueste 2 Versionen)
- Firefox (neueste 2 Versionen)
- Safari (neueste 2 Versionen)
- Edge (neueste 2 Versionen)

## Performance-Tipps

1. **Optimierung**
   - Verwenden Sie `transform` statt `top/left`
   - Nutzen Sie `opacity` für Fade-Effekte
   - Vermeiden Sie Layout-Thrashing

2. **Reduzierte Bewegung**
   - Alle Animationen respektieren `prefers-reduced-motion`
   - Alternative Effekte für reduzierte Bewegung
   - Keine automatischen Animationen

3. **Mobile-Optimierung**
   - Touch-optimierte Interaktionen
   - Reduzierte Effekte auf mobilen Geräten
   - Optimierte Performance für schwächere Geräte

## Beispiele

### 1. Interaktive Karte

```html
<div class="neo neo-primary hover-lift animate-fade-in">
  <img class="filter-cool" src="map.jpg" alt="Karte">
  <div class="interactive hover-scale">
    Interaktiver Bereich
  </div>
</div>
```

### 2. Animierter Button

```html
<button class="neo neo-secondary interactive hover-lift active-scale animate-pulse">
  Klick mich
</button>
```

### 3. Bildergalerie

```html
<div class="scroll-smooth">
  <div class="neo neo-primary filter-vintage hover-scale">
    <img src="image1.jpg" alt="Bild 1">
  </div>
  <div class="neo neo-secondary filter-cool hover-lift">
    <img src="image2.jpg" alt="Bild 2">
  </div>
</div>
```

## Fehlerbehebung

1. **Effekte funktionieren nicht**
   - CSS-Dateien korrekt importiert?
   - CSS-Variablen definiert?
   - Browser-Support überprüfen

2. **Performance-Probleme**
   - Effekte reduzieren
   - Hardware-Beschleunigung prüfen
   - Mobile-Optimierung aktivieren

3. **Accessibility-Issues**
   - Reduzierte Bewegung testen
   - Fokus-Zustände prüfen
   - Touch-Targets überprüfen

## Lizenz

MIT License - Siehe LICENSE.md für Details. 