# 🔍 Stylelint Integritätsprüfung mit Claude

## Ziel
Prüfe, ob Stylelint im Projekt korrekt eingerichtet ist, funktional läuft und alle Casoon-Richtlinien prüft.

## Vorgehen
Bitte führe folgende Schritte durch:

### 1. Status prüfen
- [ ] Funktioniert der Befehl `npx stylelint "**/*.css" --ignore-path .stylelintignore` fehlerfrei?
- [ ] Gibt es Fehlermeldungen oder Warnungen bei bekannten Dateien?

### 2. Konfiguration validieren (`stylelint.config.js`)
- [ ] Ist die Datei syntaktisch korrekt?
- [ ] Sind alle Plugins installiert?
- [ ] Gibt es veraltete Regeln oder deprecated Settings?

### 3. Testlauf mit Beispieldatei
- [ ] Prüfe alle Dateien auf Lint-Fehler
- [ ] Nenne Regelverletzungen mit Regelname + Erklärung
- [ ] Schlage ggf. Fixes vor

### 4. Fehlerbehebung (wenn nötig)
- [ ] Passe Stylelint-Regeln an, wenn sie veraltet oder nicht Lightning-kompatibel sind
- [ ] Prüfe, ob Nesting, Rangesyntax, Tokens etc. erkannt werden
- [ ] Gib fertige Code- oder Config-Vorschläge für die Reparatur

## Format der Antwort

Bitte antworte im folgenden Markdown-Format:

```markdown
## ✅ Stylelint Status
✔️ Funktioniert / ❌ Fehler

## 🧠 Konfigurationsanalyse
- Fehler: z. B. Plugin fehlt (`stylelint-order`)
- Empfehlung: z. B. Regel `foo/bar` ist deprecated, ersetze durch `baz/qux`

## 🧪 Prüfbericht – Beispiel: components/button.module.css
- Zeile 12: ❌ `padding: 16px` → sollte Token sein (`var(--space-4)`)
- Zeile 27: ❌ Nesting fehlt → `.icon` sollte innerhalb von `.button` geschachtelt sein

## 🛠️ Fix-Vorschläge
```js
// stylelint.config.js – Regel aktualisieren:
"property-no-unknown": [true, { ignoreProperties: ["/^--.+$/"] }]
