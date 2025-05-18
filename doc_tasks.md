# 📝 Aufgabe: CSS-Dateien dokumentieren (Englisch)

## Ziel

Erstelle eine strukturierte und einheitliche Dokumentation (auf Englisch) für alle `.css`-Dateien, die in der `package.json` unter dem Feld `"files"` referenziert sind. Die Dokumentation soll es externen Nutzern und Teammitgliedern ermöglichen, den Zweck, die CSS-Klassen und verwendeten Variablen leicht nachzuvollziehen.

---

## Geltungsbereich

- Alle Dateien mit der Endung `.css`
- Alle Dateien und Ordner, die in der `package.json > files`-Angabe enthalten sind

---

## Format der Dokumentation

Für jede `.css`-Datei soll eine eigene `.md`-Datei erstellt werden (z. B. `utilities.css` → `utilities.md`).

### Dokumentationskopf
Beginne jede Dokumentation mit dem Titel und dem "Last Modified"-Datum:

```markdown
# Component Name
> Last Modified: DD.MM.YYYY
```

Das Datum sollte im Format TT.MM.JJJJ angegeben werden (z.B. 12.05.2024).

### 1. **File Purpose (Dateizweck)**  
Beschreibe kurz den Zweck der Datei in 1–3 Sätzen auf Englisch.

Beispiel:
```markdown
## File Purpose

This file provides a collection of component styles for modern UIs. It includes various interactive elements and decorative forms. All components are performance-optimized and respect user preferences for reduced motion.
```

### 2. **CSS Utility Classes**
Erstelle eine Liste aller Klassen in der Datei (mit hierarchischer Gliederung), mit:

- Klassennamen (mit einem vorangestellten `.`)
- Beschreibung der Klasse (Description)
- Verwendung der Klasse (Uses)
- Visueller Effekt (Creates)

Beispiel:
```markdown
## CSS Utility Classes

### Base Classes

#### `.component-base`
- Description: Standard component base style
- Uses: Flexbox layout with padding and border-radius
- Creates: Container for component content with rounded corners
```

### 3. **HTML Structure** (wenn relevant)
Zeige Beispiele für typische HTML-Strukturen:

```markdown
## HTML Structure

To create a basic component, use the following structure:

```html
<div class="component-base">
  <!-- Component content here -->
</div>
```
```

### 4. **Keyframe Animations** (wenn vorhanden)
Für jede @keyframes-Definition:

- Name mit `@keyframes`-Präfix
- Kurze Funktionsbeschreibung
- Verwendete CSS-Eigenschaften
- Animationsschritte
- Wo eingesetzt (Klassen, Module etc.)

Beispiel:
```markdown
## Keyframe Animations

### `@keyframes component-fade`
- Animates opacity transition with subtle movement
- Uses: Opacity and transform properties
- Animation steps:
  1. Start: Invisible and slightly below position
  2. End: Fully visible and in position
- Used in: `.component-animate`
```

### 5. **CSS Custom Properties (Variables)**
Liste alle Variablen mit:

- Name (in Backticks)
- Default-Wert
- Funktionsbeschreibung

Gruppiere ähnliche Variablen:

```markdown
## CSS Custom Properties (Variables)

### Component Variables
- `--component-padding` - Default: `1rem`
  - Controls the internal padding of the component
- `--component-radius` - Default: `0.5rem`
  - Controls the border radius of the component
```

### 6. **Technical Implementation Details** (wenn relevant)
Beschreibe technische Details zur Implementierung:

```markdown
## Technical Implementation Details

The component uses several advanced CSS techniques:
1. Flexbox layout for content alignment
2. CSS variables for theming and customization
3. Media queries for responsive behavior
```

### 7. **Responsive / Media Behavior** (wenn relevant)
Beschreibe das Verhalten bei Media Queries:

```markdown
## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations on component transitions
- Ensures accessibility for users who are sensitive to motion
```

## Allgemeine Hinweise

- Die Dokumentation soll auf Englisch geschrieben sein
- Bestehende Dokumentation aus den CSS-Dateien kann genutzt werden, sollte aber anschließend in den CSS-Dateien entfernt werden
- Vermeide CSS-spezifisches Fachchinesisch, wenn es einfach geht
- Nutze bei Bedarf Codeblöcke für bessere Lesbarkeit
- Einheitliche Formatierung hilft bei der späteren Automatisierung
- Alle Variablennamen und Klassennamen sollten exakt wiedergegeben werden
- Berücksichtige Barrierefreiheitsaspekte wie "prefers-reduced-motion"
- Halte dich an die bestehende Dokumentationsstruktur der bereits dokumentierten Effekte 