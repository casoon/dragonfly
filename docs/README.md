# UI-Lib Dokumentation

> Last Modified: 18.05.2024

Diese Dokumentation enthält detaillierte Informationen zu allen CSS-Dateien der UI-Lib und deren Verwendung.

## Verzeichnisstruktur

Die Dokumentation ist nach der gleichen Verzeichnisstruktur wie die CSS-Dateien organisiert:

- **`/docs/base`**: Grundlegende Stile und Reset-Definitionen
- **`/docs/components`**: UI-Komponenten wie Buttons, Cards, Inputs, etc.
- **`/docs/effects`**: Visuelle Effekte und Animationen
- **`/docs/icons`**: Icon-Stile und Icon-Sets
- **`/docs/themes`**: Theme-Definitionen und Farbschemas

## Dokumentationsformat

Jede Dokumentationsdatei folgt einem einheitlichen Format:

1. **Dateizweck (File Purpose)**: Beschreibung des Zwecks und der Rolle der CSS-Datei
2. **CSS-Utility-Klassen**: Auflistung und Erklärung aller definierten CSS-Klassen
3. **HTML-Struktur** (falls relevant): Beispiele für die HTML-Verwendung
4. **Keyframe-Animationen** (falls vorhanden): Beschreibung der Animations-Keyframes
5. **CSS-Custom-Properties**: Liste der CSS-Variablen mit Default-Werten
6. **Technische Implementierungsdetails**: Hinweise zur Implementierung
7. **Responsive-Verhalten**: Erklärung des Verhaltens bei unterschiedlichen Bildschirmgrößen

## Automatisierte Dokumentation

Die Dokumentation wird mit folgenden npm-Scripts verwaltet:

```bash
# Analysiert alle CSS-Dateien und extrahiert Informationen
npm run analyze:css

# Generiert Markdown-Dokumentation basierend auf der Analyse
npm run generate:docs

# Aktualisiert das "Last Modified"-Datum in allen Dokumentationsdateien
npm run update:docs-lastmod

# Korrigiert Fehler in der Dokumentation (falsche Datumsformate, etc.)
npm run fix:docs

# Erstellt fehlende Dokumentationsdateien für Root-CSS-Dateien
npm run fix:missing-docs

# Prüft auf fehlende Dokumentation 
npm run check:docs

# Führt den kompletten Dokumentationsprozess durch
npm run docs:all
```

## "Last Modified"-Datum

Jede Dokumentationsdatei enthält ein "Last Modified"-Datum im Format `DD.MM.YYYY`. Dieses Datum wird automatisch aktualisiert, wenn:

1. Die Dokumentation mit `npm run update:docs-lastmod` aktualisiert wird
2. Eine CSS-Datei geändert und die Dokumentation neu generiert wird

## Beitragen zur Dokumentation

Wenn du zur Dokumentation beitragen möchtest:

1. Bearbeite die entsprechende Markdown-Datei manuell oder
2. Aktualisiere die CSS-Datei und führe `npm run docs:all` aus, um die Dokumentation automatisch zu aktualisieren

Bitte halte dich an das bestehende Format, um Konsistenz zu gewährleisten. Wichtige Aspekte, die in der Dokumentation enthalten sein sollten:

- Vollständige Beschreibung aller CSS-Klassen mit ihren Funktionen
- Beschreibung aller CSS-Variablen mit Default-Werten
- Hinweise zur Barrierefreiheit (insbesondere bei Animationen und Effekten)
- Beispiele für die Verwendung, wenn notwendig 