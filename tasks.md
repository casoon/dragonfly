# ✅ tasks.md – CSS-Richtlinienprüfung (Lightning CSS + Casoon UI)

Diese Datei dient der systematischen Prüfung von Styleguide-Konformität im CSS-Code unter Einsatz von Lightning CSS.

---

## 📊 Übersicht (Status-Tracking)

| Aufgabe | Beschreibung | Status | Letzte Prüfung |
|--------|--------------|--------|----------------|
| 1 | Verwendung von Design-Tokens | ☐ offen | – |
| 2 | Nutzung von CSS Custom Properties | ☐ offen | – |
| 3 | Media- & Container-Queries (modern) | ☐ offen | – |
| 4 | Nesting verwenden (Lightning-konform) | ☐ offen | – |
| 5 | Anwendung CUB CSS Struktur | ☐ offen | – |

---

## 🔍 Aufgabe 1: Verwendung von Design-Tokens (DRY-Prinzip)

**Ziel:** Alle Abstände, Farben, Schriftgrößen usw. stammen aus `tokens.css`. Keine harten Werte im CSS.

**Prüfpunkte:**
- [ ] Alle CSS-Dateien auf harte Werte prüfen (`16px`, `#111`, `2rem`, …)
- [ ] Vorhandene Tokens aus `tokens.css` verwenden
- [ ] Verstöße dokumentieren (Datei + Zeilennummer)
- [ ] Neue Tokens ggf. ergänzen

---

## 🔍 Aufgabe 2: Nutzung von CSS Custom Properties

**Ziel:** Wiederverwendbare Werte sind als `--property-name` definiert.

**Prüfpunkte:**
- [ ] Keine mehrfachen identischen Werte im Code
- [ ] Custom Properties vorhanden und korrekt benannt
- [ ] Struktur und Gruppierung klar (z. B. Farben, Layout, Radius)
- [ ] Verwendung über `var(...)` sichergestellt

---

## 🔍 Aufgabe 3: Verwendung moderner Media- und Container-Queries

**Ziel:** Media Queries sollen die Range-Syntax nutzen.

**Prüfpunkte:**
- [ ] Veraltete Breakpoints (`min-width`) durch `(width > …)` ersetzen
- [ ] Container Queries statt Media Queries bei Komponenten
- [ ] Tokens für Breakpoints nutzen
- [ ] Keine Inline-Mediaqueries ohne Designbezug

---

## 🔍 Aufgabe 4: CSS Nesting gemäß Lightning CSS

**Ziel:** Verschachtelte Komponentenstruktur mit `&`-Syntax.

**Prüfpunkte:**
- [ ] Komponenteneigene Selektoren sind verschachtelt
- [ ] Keine Duplikate bei Namensvergabe
- [ ] Nesting-Tiefe max. 3 Ebenen
- [ ] Syntax valide für Lightning CSS

---

## 🔍 Aufgabe 5: Anwendung der CUB CSS Struktur

**Ziel:** Einheitliches, funktionales Klassennamenschema

**Prüfpunkte:**
- [ ] Nur funktionale Klassen (keine BEM-Struktur)
- [ ] Utilities wie `is-`, `has-`, `can-` konsequent genutzt
- [ ] Komponentenklassen wie `.button`, `.grid`, `.card`
- [ ] Keine verschachtelten strukturellen Klassen in Utilities

---
