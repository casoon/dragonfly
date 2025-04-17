# Casoon UI Theme Switcher

Der Theme Switcher ist ein mächtiges Tool, das es ermöglicht, das Erscheinungsbild der Benutzeroberfläche mit wenigen Zeilen Code zu ändern. Diese Komponente erlaubt es Benutzern, zwischen verschiedenen Farbschemata zu wechseln und Barrierefreiheitseinstellungen wie Kontrast und reduzierte Animation anzupassen.

## Funktionen

- **Themenwechsel**: Umschalten zwischen 13 vordefinierten Themes
- **Dark Mode**: Umschalten zwischen hellem und dunklem Modus
- **Barrierefreiheitseinstellungen**: 
  - Hoher Kontrast 
  - Reduzierte Animation
- **Speicherung von Benutzereinstellungen**: Verwendung von LocalStorage
- **Systemeinstellungen**: Berücksichtigt die Systemeinstellungen des Benutzers

## Beispiele

Der Ordner enthält zwei Demo-Dateien:

1. **theme-demo.html**: Eine umfassende Demo, die alle Funktionen des Theme-Switchers zeigt
2. **theme-switcher.html**: Eine einfachere Beispielseite, die den grundlegenden Gebrauch demonstriert

## Verwendung

### Grundlegende Integration

Um den Theme-Switcher in Ihr Projekt zu integrieren, fügen Sie einfach die folgenden Zeilen hinzu:

```html
<script src="scripts/theme-switcher.js"></script>
<script>
  // Theme-Switcher initialisieren
  initThemeSwitcher();
</script>
```

### Themes ändern

```javascript
// Zu einem bestimmten Theme wechseln
setTheme('theme-ocean');

// Den Dark Mode umschalten
toggleDarkMode();

// Hohen Kontrast umschalten
toggleHighContrast();

// Reduzierte Animation umschalten
toggleReducedMotion();
```

### Aktuelle Einstellungen abrufen

```javascript
// Aktuelles Theme abrufen
const currentTheme = getCurrentTheme();

// Prüfen, ob der Dark Mode aktiv ist
const isDark = isDarkModeActive();
```

### Event-Listener hinzufügen

Sie können auf Theme-Änderungen reagieren, indem Sie Event-Listener hinzufügen:

```javascript
document.addEventListener('themeChanged', function(e) {
  console.log('Neues Theme:', e.detail.theme);
});

document.addEventListener('darkModeChanged', function(e) {
  console.log('Dark Mode aktiv:', e.detail.darkMode);
});
```

## Integration mit UI-Elementen

Hier ist ein Beispiel, wie Sie Theme-Umschalter in Ihre Benutzeroberfläche integrieren können:

```html
<!-- Theme Buttons -->
<div class="theme-options">
  <button data-theme="theme-day">Tag</button>
  <button data-theme="theme-night">Nacht</button>
  <!-- weitere Themes -->
</div>

<!-- Einstellungen -->
<button id="dark-mode-toggle">Dark Mode</button>
<button id="high-contrast-toggle">Hoher Kontrast</button>
<button id="reduced-motion-toggle">Reduzierte Animation</button>

<script>
  // Theme-Buttons einrichten
  document.querySelectorAll('[data-theme]').forEach(button => {
    button.addEventListener('click', function() {
      setTheme(this.dataset.theme);
    });
  });
  
  // Einstellungs-Buttons
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
  document.getElementById('high-contrast-toggle').addEventListener('click', toggleHighContrast);
  document.getElementById('reduced-motion-toggle').addEventListener('click', toggleReducedMotion);
</script>
```

## Anpassung

Der Theme-Switcher ist so konzipiert, dass er leicht an Ihre spezifischen Anforderungen angepasst werden kann. Die Standardeinstellungen können in den Konstanten am Anfang der JavaScript-Datei geändert werden:

```javascript
// Standard-Theme ändern
const DEFAULT_THEME = 'theme-ocean';

// Storage-Schlüssel anpassen
const THEME_STORAGE_KEY = 'my-app-theme';
const DARK_MODE_STORAGE_KEY = 'my-app-dark-mode';
``` 