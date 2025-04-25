# CSS-Verarbeitungstests für @casoon/ui-lib

Diese Tests prüfen, ob die CSS-Dateien der UI-Bibliothek korrekt mit Lightning CSS verarbeitet werden können.

## Einrichtung

1. Installieren Sie die Abhängigkeiten:
   ```
   npm run setup
   ```

## Tests durchführen

Um alle CSS-Dateien der Bibliothek mit Lightning CSS zu testen:

```
npm run test
```

Dieser Test:
- Findet alle CSS-Dateien im Projekt (Root-Verzeichnis, layers/, themes/, components/, modules/, icons/)
- Verarbeitet jede Datei mit Lightning CSS
- Speichert die Ausgabe in einer entsprechenden Datei im `output/`-Verzeichnis
- Erstellt einen Bericht über erfolgreiche und fehlgeschlagene Verarbeitungen

## Visuelle Tests im Browser

Um die Ausgabe visuell zu überprüfen:

```
npm run test-browser
```

Dieser Befehl startet einen lokalen Webserver. Sie können dann die verarbeiteten CSS-Dateien im Browser überprüfen.

## Was getestet wird

1. **CSS-Syntax**: Überprüft, ob der CSS-Code syntaktisch korrekt ist und von Lightning CSS verarbeitet werden kann
2. **Moderne CSS-Features**: Testet die Kompatibilität von modernen CSS-Features wie:
   - Container Queries
   - CSS Nesting
   - CSS Layers (@layer)
   - Logische Eigenschaften
   - Custom Properties
   - @property Definitionen

3. **Minifizierung**: Die Dateien werden mit aktivierter Minifizierung getestet

## Fehlerbehebung

Wenn Tests fehlschlagen:

1. Überprüfen Sie die Fehlermeldungen in der Konsolenausgabe
2. Korrigieren Sie Syntaxprobleme in den entsprechenden CSS-Dateien
3. Stellen Sie sicher, dass alle verwendeten Features mit Lightning CSS kompatibel sind

## Integration in den Entwicklungsprozess

Diese Tests sollten vor jeder neuen Veröffentlichung durchgeführt werden:

```bash
# In der Haupt-package.json
npm run prerelease
```

Dieser Befehl führt sowohl die Lightning CSS Tests als auch den Linter aus, um sicherzustellen, dass alle CSS-Dateien korrekt sind. 