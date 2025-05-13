# UI-Lib Basis-Komponenten

Dieses Verzeichnis enthält fundamentale CSS-Definitionen für die UI-Lib.

## Tokens und Moderne CSS-Funktionen

In `tokens.css` sind alle grundlegenden Design-Tokens und moderne CSS-Funktionen definiert:

### Moderne CSS-Funktionen

```css
:root {
  /* Ermöglicht flüssige Größeninterpolation mit Schlüsselwörtern */
  interpolate-size: allow-keywords;
}
```

Die `interpolate-size: allow-keywords` Eigenschaft ermöglicht:

- Flüssige Übergänge zwischen Größenwerten (z.B. Schriftgrößen, Padding, Margin) bei responsiven Designs
- Unterstützt auch die Interpolation von Schlüsselwörtern wie `small`, `medium`, `large`
- Besonders nützlich für Container Queries und Viewport-Größenänderungen

### Anwendungsbeispiele:

```css
/* Flüssige Typografie mit Interpolation */
.responsive-text {
  font-size: clamp(var(--text-sm), 5vw, var(--text-xl)); 
}

/* Abstände, die fließend skalieren */
.adaptive-container {
  padding: clamp(var(--space-4), 5%, var(--space-8));
}
```

## Weitere Basis-Komponenten

- `colors.css`: Farbdefinitionen
- `elements.css`: Grundlegende HTML-Element-Styles
- `reset.css`: CSS-Reset und Normalisierung
- `utilities.css`: Utility-Klassen
- usw. 