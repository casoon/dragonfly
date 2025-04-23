# ✅ tasks.md – CSS-Richtlinienprüfung (Lightning CSS + Casoon UI)

Diese Datei dient der systematischen Prüfung von Styleguide-Konformität im CSS-Code unter Einsatz von Lightning CSS.

---

## 📊 Übersicht (Status-Tracking)

| Aufgabe | Beschreibung | Status | Letzte Prüfung |
|--------|--------------|--------|----------------|
| 1 | Verwendung von Design-Tokens | ✅ Bestanden | 2023-08-18 |
| 2 | Nutzung von CSS Custom Properties | ✅ Bestanden | 2023-08-18 |
| 3 | Media- & Container-Queries (modern) | ✅ Bestanden | 2023-08-18 |
| 4 | Nesting verwenden (Lightning-konform) | ⚠️ Teilweise | 2023-08-18 |
| 5 | Anwendung CUB CSS Struktur | ✅ Bestanden | 2023-08-18 |
| 6 | Layout-Shifts vermeiden | ✅ Bestanden | 2023-08-18 |
| 7 | CSS :has() und Relationale Selektoren | ⏳ Geplant | 2024-05-15 |
| 8 | Logische Properties für i18n | ⏳ Geplant | 2024-05-15 |
| 9 | Subgrid für komplexe Layouts | ⏳ Geplant | 2024-05-15 |
| 10 | Moderne Farbfunktionen (color-mix) | ⏳ Geplant | 2024-05-15 |
| 11 | View Transitions & Scroll-Driven Animations | ⏳ Geplant | 2024-05-15 |
| 12 | Barrierefreiheit und Forced Colors | ⏳ Geplant | 2024-05-15 |

---

## 🔍 Aufgabe 1: Verwendung von Design-Tokens (DRY-Prinzip)

**Ziel:** Alle Abstände, Farben, Schriftgrößen usw. stammen aus `tokens.css`. Keine harten Werte im CSS.

**Prüfpunkte:**
- [x] Alle CSS-Dateien auf harte Werte prüfen (`16px`, `#111`, `2rem`, …)
- [x] Vorhandene Tokens aus `tokens.css` verwenden
- [x] Verstöße dokumentieren (Datei + Zeilennummer)
- [x] Neue Tokens ggf. ergänzen

---

## 🔍 Aufgabe 2: Nutzung von CSS Custom Properties

**Ziel:** Wiederverwendbare Werte sind als `--property-name` definiert.

**Prüfpunkte:**
- [x] Keine mehrfachen identischen Werte im Code
- [x] Custom Properties vorhanden und korrekt benannt
- [x] Struktur und Gruppierung klar (z. B. Farben, Layout, Radius)
- [x] Verwendung über `var(...)` sichergestellt

---

## 🔍 Aufgabe 3: Verwendung moderner Media- und Container-Queries

**Ziel:** Media Queries sollen die Range-Syntax nutzen.

**Prüfpunkte:**
- [x] Veraltete Breakpoints (`min-width`) durch `(width >= …)` ersetzen
- [x] Container Queries statt Media Queries bei Komponenten
- [x] Tokens für Breakpoints nutzen
- [x] Keine Inline-Mediaqueries ohne Designbezug

---

## 🔍 Aufgabe 4: CSS Nesting gemäß Lightning CSS

**Ziel:** Verschachtelte Komponentenstruktur mit `&`-Syntax.

**Prüfpunkte:**
- [⚠️] Komponenteneigene Selektoren sind verschachtelt
- [x] Keine Duplikate bei Namensvergabe
- [x] Nesting-Tiefe max. 3 Ebenen
- [x] Syntax valide für Lightning CSS

---

## 🔍 Aufgabe 5: Anwendung der CUB CSS Struktur

**Ziel:** Einheitliches, funktionales Klassennamenschema

**Prüfpunkte:**
- [x] Nur funktionale Klassen (keine BEM-Struktur)
- [⚠️] Utilities wie `is-`, `has-`, `can-` konsequent genutzt
- [x] Komponentenklassen wie `.button`, `.grid`, `.card`
- [x] Keine verschachtelten strukturellen Klassen in Utilities

---

## 🔍 Aufgabe 6: Layout-Shifts vermeiden mit contain-intrinsic-size

**Ziel:** Stabile Layouts durch Vorallokation von Platz

**Prüfpunkte:**
- [x] `contain-intrinsic-size` bei Container-Queries
- [x] Feste Abmessungen für asynchrone Inhalte
- [x] Kombination mit `aspect-ratio` bei Bildern
- [x] Performance-Metriken verbessert (CLS)

---

## 🔍 Aufgabe 7: CSS :has() und Relationale Selektoren

**Ziel:** Relationale Selektoren nutzen für kontextbezogene Anpassungen

**Prüfpunkte:**
- [ ] Verwendung von `:has()` für übergeordnete Elemente
- [ ] Nutzung für bedingte Stile ohne JavaScript
- [ ] Fallbacks für nicht unterstützende Browser
- [ ] Pattern-Bibliothek mit :has()-Beispielen

**Beispiel:**
```css
.card:has(.featured) { border-color: var(--color-accent); }
.form-group:has(:invalid) { background-color: var(--color-error-bg); }
```

---

## 🔍 Aufgabe 8: Logische Properties für Internationalisierung

**Ziel:** Richtungsunabhängiges Layout für mehrsprachige UIs

**Prüfpunkte:**
- [ ] `margin-inline` statt `margin-left/right`
- [ ] `padding-block` statt `padding-top/bottom`
- [ ] `inset-inline-start` statt `left` (für RTL-Support)
- [ ] `border-inline-end` statt `border-right`

**Beispiel:**
```css
.component {
  margin-inline: var(--space-4);
  padding-block: var(--space-2);
  border-inline-end: 1px solid var(--color-border);
}
```

---

## 🔍 Aufgabe 9: Subgrid für komplexe Layouts

**Ziel:** Synchronisierte Raster über verschachtelte Komponenten hinweg

**Prüfpunkte:**
- [ ] Identifizierung von Komponenten, die von Subgrid profitieren
- [ ] Implementierung von `grid-template-columns: subgrid`
- [ ] Fallbacks für ältere Browser
- [ ] Konsistente Grid-Struktur über Komponentengrenzen hinweg

**Beispiel:**
```css
.parent-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.nested-component {
  grid-column: span 6;
  display: grid;
  grid-template-columns: subgrid;
}
```

---

## 🔍 Aufgabe 10: Moderne Farbfunktionen (color-mix)

**Ziel:** Dynamische Farbvariationen mit color-mix und relativen Farben

**Prüfpunkte:**
- [ ] Nutzung von `color-mix()` für Farbschemen
- [ ] Implementierung von `relative-color-syntax`
- [ ] Automatische Hover/Focus-Zustände durch Farbmischung
- [ ] Dynamische Farbpaletten basierend auf Basisfarben

**Beispiel:**
```css
.button {
  background-color: var(--color-primary);
}

.button:hover {
  background-color: color-mix(in oklch, var(--color-primary), black 10%);
}

.button:active {
  background-color: color-mix(in oklch, var(--color-primary), black 20%);
}
```

---

## 🔍 Aufgabe 11: View Transitions & Scroll-Driven Animations

**Ziel:** Nahtlose Übergänge und Scroll-basierte Animationen

**Prüfpunkte:**
- [ ] View Transitions API für Seitenwechsel
- [ ] @scroll-timeline für Scroll-basierte Animationen
- [ ] Performante Animationen ohne JS-Abhängigkeit
- [ ] Progressive Enhancement mit Fallbacks

**Beispiel:**
```css
/* View Transitions */
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}

/* Scroll-Driven Animations */
@scroll-timeline header-scroll {
  source: selector(body);
  scroll-offsets: 0, 100px;
}

.header {
  animation: header-shrink linear;
  animation-timeline: header-scroll;
}
```

---

## 🔍 Aufgabe 12: Barrierefreiheit und Forced Colors

**Ziel:** Optimierte Darstellung in High-Contrast-Modus und Unterstützung von forced-colors

**Prüfpunkte:**
- [ ] Implementierung von `@media (forced-colors: active)`
- [ ] Nutzung von System-Farbwerten für High-Contrast-Mode
- [ ] Testen mit Windows High Contrast Mode
- [ ] Barrierefreiheitsmerkmale wie `@media (prefers-reduced-motion)`

**Beispiel:**
```css
@media (forced-colors: active) {
  .button {
    border: 2px solid CanvasText;
    background-color: ButtonFace;
    color: ButtonText;
  }
  
  .button:focus {
    outline: 2px solid Highlight;
  }
}
```

---

# CSS Framework Aufgaben

## Bisherige Aufgaben

1. ✅ **Design-Tokens verwenden (DRY-Prinzip)**
   - Alle CSS-Dateien sollten Design-Tokens anstelle von hartkodierten Werten verwenden.
   - Tokens für Farben, Schriftarten, Abstände, Radien, etc. definieren und konsistent nutzen.
   - Verwendung von OKLCH-Farbwerten für bessere Farbvielfalt.

2. ✅ **CSS Custom Properties nutzen**
   - Überschreibbare Werte als CSS-Variablen definieren.
   - Globale Tokens in `:root` definieren.
   - Komponenten-spezifische Variablen im jeweiligen Scope definieren.
   - Fallbacks für Abwärtskompatibilität einrichten.

3. ✅ **Media- & Container-Queries (modern)**
   - Range-Syntax verwenden: `(width >= X)` statt `(min-width: X)`.
   - Tokens für Breakpoints definieren und konsistent anwenden.
   - Container-Queries für komponentenbasierte Responsivität nutzen.
   - Inline-Container für responsive Text-Layouts verwenden.

4. ⚠️ **Nesting verwenden (Lightning-konform)**
   - Lightning CSS kompatible Nesting-Syntax im gesamten Projekt verwenden.
   - `&`-Selektoren für Modifier und Zustände einsetzen.
   - Nesting-Tiefe unter 3 Ebenen halten.
   - Vermeidung von Selektoren auf Basis von HTML-Elementen.

5. ✅ **CUB CSS Struktur anwenden**
   - CSS nach Funktionalität strukturieren.
   - `@layer`-Direktiven für klare Spezifitätshierarchie verwenden.
   - Utility-Klassen mit eindeutigen Präfixen wie `is-`, `has-` und `can-`.
   - Trennung von Komponenten, Utilities und Themes.

6. ✅ **Vermeidung von Layout-Shifts**
   - `contain-intrinsic-size` für stabile Layouts bei asynchronem Content-Laden verwenden.
   - Aspect-Ratio für Bild- und Mediencontainer definieren.
   - Placeholder-Styles für noch nicht geladene Inhalte.
   - Container Queries mit `containment` kombinieren.

## Neue Aufgaben

7. **CSS :has() und Relationale Selektoren implementieren**
   - `:has()`-Selektor für "Parent-Matching" in Formularen und Navigationen einsetzen.
   - Interaktive Komponenten mit elternbasiertem Styling verbessern.
   - JavaScript-Abhängigkeiten für Eltern-Kind-Interaktionen reduzieren.
   - Barrierefreiheit durch visuelle Beziehungen verbessern.

8. **Logische Properties für Internationalisierung**
   - Direktionale Properties (`left`/`right`/`top`/`bottom`) durch logische Properties ersetzen.
   - `margin-inline-start`/`end` und `padding-block-start`/`end` durchgängig verwenden.
   - RTL-Unterstützung vereinfachen ohne zusätzliche Stylesheets.
   - Bestehende Komponenten auf logische Properties migrieren.

9. **Subgrid für komplexe Layouts**
   - `subgrid` für verschachtelte Grid-Komponenten einsetzen.
   - Konsistente Layouts über Komponentengrenzen hinweg erstellen.
   - Ausrichtung von Grid-Items in verschachtelten Strukturen verbessern.
   - Form-Layouts mit Subgrid implementieren.

10. **Moderne Farbfunktionen (color-mix)**
    - `color-mix()` für dynamische Farbpaletten einsetzen.
    - Automatische Ableitung von Hover- und Fokus-Zuständen.
    - Theme-Varianten mit Farbmischungen generieren.
    - Zugänglichkeitskontraste mit Farbfunktionen optimieren.

11. **View Transitions & Scroll-Driven Animations**
    - View Transitions API für Seitenwechsel und Zustandsänderungen implementieren.
    - Scroll-Driven Animations für Navigationsleisten und Parallaxeffekte.
    - Deklarative Animationen an Scrollpositionen binden.
    - Optimierung der Performance durch browser-native Animationen.

12. **Barrierefreiheit und Forced Colors unterstützen**
    - Windows High Contrast Mode unterstützen mit `@media (forced-colors: active)`.
    - System-Farbvariablen für barrierefreie Komponenten einsetzen.
    - `prefers-reduced-motion` respektieren und implementieren.
    - ARIA-Attribute mit CSS-Selektoren verbinden.

## Timeline

**Q2 2023:**
- Aufgaben 1-3: Design-Tokens, CSS-Variablen, Media-Queries

**Q3 2023:**
- Aufgaben 4-6: Nesting, CUB CSS, Layout-Shifts

**Q4 2023 / Q1 2024:**
- Aufgaben 7-9: :has(), Logische Properties, Subgrid

**Q2/Q3 2024:**
- Aufgaben 10-12: color-mix, View Transitions, Barrierefreiheit

---
