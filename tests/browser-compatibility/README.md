# Browser-Kompatibilitätstests für @casoon/ui-lib

Dieses Verzeichnis enthält Tests und Dokumentation zur Browser-Kompatibilität der UI-Bibliothek.

## Zweck

Browser-Kompatibilitätstests sind entscheidend, um sicherzustellen, dass die UI-Bibliothek wie erwartet in verschiedenen Browsern funktioniert. Besonders wichtig ist dies für die neueren CSS-Funktionen und die in Version 0.60 hinzugefügten Features.

## Getestete Browser

Die Bibliothek wird in folgenden Browsern getestet:

- **Moderne Browser**:
  - Chrome (neueste Version)
  - Firefox (neueste Version)
  - Safari (neueste Version)
  - Edge (neueste Version)

- **Ältere Browser**:
  - Chrome (Version 90+)
  - Firefox (Version 90+)
  - Safari (Version 15+)
  - Edge (Version 90+)

## Fokus der Tests (v0.61)

Für die Version 0.61 liegt der Fokus auf folgenden Aspekten:

1. **Neue Viewport-Units**: Testen der Kompatibilität von sv, lv und dv Units
   - Fallback-Verhalten in Browsern ohne Unterstützung
   - Korrekte Größenanpassung in verschiedenen Szenarien

2. **Theme-System**:
   - Korrekte Umschaltung zwischen Light und Dark Mode
   - Persistenz der Theme-Einstellungen
   - Systemeinstellungs-Erkennung (prefers-color-scheme)
   - Benutzerdefinierte Themes

3. **Accessibility-Features**:
   - Korrekte Darstellung von Fokus-Ringen
   - Funktionalität von Skip-Links
   - Screenreader-Kompatibilität
   - Reduced Motion und High Contrast Modi

4. **Dimensions-Utilities**:
   - Korrekte Anwendung von Breiten- und Höhen-Klassen
   - Aspect-Ratio-Unterstützung
   - Min/Max-Werte

## Testmethodik

1. **Visuelle Tests**:
   - Manuelle Überprüfung in jedem Browser
   - Screenshots für Dokumentation und Vergleich
   - Responsive-Tests (verschiedene Bildschirmgrößen)

2. **Funktionale Tests**:
   - Interaktive Elemente (Theme-Switcher, Accessibility-Features)
   - JavaScript-Integration

3. **Automatisierte Tests**:
   - BrowserStack-Tests für verschiedene Umgebungen
   - Lighthouse-Tests für Performance und Accessibility

## Testdokumente

- `viewport-units-test.html`: Test für neue Viewport-Units
- `theme-system-test.html`: Test für das Theme-System
- `accessibility-test.html`: Test für Accessibility-Features
- `dimensions-test.html`: Test für Dimensions-Utilities

## Dokumentation von Kompatibilitätsproblemen

Entdeckte Kompatibilitätsprobleme werden in der Datei `compatibility-issues.md` dokumentiert mit folgenden Informationen:

- Betroffene Browser und Versionen
- Beschreibung des Problems
- Implementierte Fallback-Lösung
- Screenshots/Beispiele
- Empfehlungen für Benutzer der Bibliothek

## Durchführung der Tests

1. Starten eines lokalen Servers im Root-Verzeichnis:
   ```bash
   npx serve
   ```

2. Öffnen der Testdateien in den zu testenden Browsern:
   ```
   http://localhost:3000/tests/browser-compatibility/viewport-units-test.html
   ```

3. Dokumentation der Ergebnisse:
   ```bash
   npm run document-compatibility
   ``` 