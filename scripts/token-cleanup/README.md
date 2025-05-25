# Token-Bereinigungsskript

Dieses Skript bereinigt Duplikate zwischen den Tokens-Dateien im `/tokens`-Verzeichnis.

## Zweck

Im Tokens-Verzeichnis existieren mehrere Dateien, die teilweise dieselben Token-Definitionen enthalten:
- `design-tokens.css`: Hauptdatei mit Design-Tokens
- `default-tokens.css`: Auto-generierte Tokens mit teilweise überlappenden Definitionen
- `default-tokens.js`: JavaScript-Version der Tokens
- `default-tokens.scss`: SCSS-Version der Tokens

Das Skript konsolidiert die CSS-Tokens aus `design-tokens.css` und `default-tokens.css` in eine einzige Datei `consolidated-tokens.css`.

## Funktionsweise

1. Extrahiert alle CSS-Variablen aus beiden Dateien
2. Identifiziert Duplikate und unterschiedliche Werte für gleiche Variablen
3. Erstellt eine konsolidierte Version aller Tokens
4. Kategorisiert die Tokens nach Typ (Farbe, Abstände, etc.)
5. Speichert das Ergebnis in `consolidated-tokens.css`

## Enthaltene Skripte

### 1. Token-Bereinigung (`token-cleanup.js`)

Dieses Skript analysiert die vorhandenen Token-Dateien und erstellt eine konsolidierte Version.

```bash
# Im Verzeichnis scripts/token-cleanup
node token-cleanup.js
```

Output:
- Erstellt `tokens/consolidated-tokens.css`
- Zeigt Statistiken über Duplikate und einzigartige Tokens an
- Identifiziert und meldet Tokens mit abweichenden Werten

### 2. Migration zu konsolidierten Tokens (`migrate-to-consolidated.js`)

Dieses Skript führt die konsolidierten Tokens in das Projekt ein:

```bash
# Im Verzeichnis scripts/token-cleanup
node migrate-to-consolidated.js
```

Das Skript:
1. Erstellt Backups der vorhandenen Token-Dateien in `tokens/backup/`
2. Aktualisiert `core/tokens.css`, um auf die neue konsolidierte Datei zu verweisen
3. Ersetzt `design-tokens.css` mit der konsolidierten Version
4. Entfernt die redundante `default-tokens.css`

## Verwendung

Für einen vollständigen Migrationsprozess:

```bash
# Schritt 1: Tokens konsolidieren
node token-cleanup.js

# Schritt 2: Prüfe die konsolidierten Tokens manuell
# (öffne tokens/consolidated-tokens.css und überprüfe)

# Schritt 3: Migration durchführen
node migrate-to-consolidated.js
```

## Nächste Schritte

Nach der Migration:

1. Überprüfe `core/tokens.css` auf korrekte Imports
2. Falls notwendig, aktualisiere JS- und SCSS-Versionen der Tokens mit dem Token-Generator
3. Teste die Anwendung, um sicherzustellen, dass alle Styles korrekt gerendert werden
4. Erwäge, den Token-Generator anzupassen, um in Zukunft Duplikate zu vermeiden 