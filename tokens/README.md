# Design Tokens

Dieses Verzeichnis enthält alle Design-Tokens des UI-Systems, thematisch organisiert in separate Dateien.

## Struktur

Die Tokens sind in folgende Kategorien unterteilt:

- **colors/**: Farbvariablen (Primärfarben, Sekundärfarben, Grautöne, etc.)
- **spacing/**: Abstände und Größen (Margins, Paddings, Größeneinheiten)
- **typography/**: Schriftvariablen (Schriftarten, Größen, Stärken, Zeilenhöhen)
- **layout/**: Layout-bezogene Variablen (Breakpoints, Container-Größen, Z-Index)
- **effects/**: Effekt-bezogene Variablen (Schatten, Radien, Transitionen)

Jede Kategorie hat eine eigene `index.css`-Datei, die in der Haupt-`index.css` im Wurzelverzeichnis importiert wird.

## Verwendung

Um alle Tokens zu verwenden, importiere einfach die Haupt-`index.css`:

```css
@import 'path/to/tokens/index.css';
```

Du kannst auch einzelne Kategorien importieren:

```css
@import 'path/to/tokens/colors/index.css';
@import 'path/to/tokens/typography/index.css';
```

## Tokennamen

Die Tokens folgen einem einheitlichen Namensschema:

- Farben: `--color-{name}-{shade}` (z.B. `--color-primary-500`)
- Abstände: `--space-{size}` (z.B. `--space-4`)
- Schriftgrößen: `--font-size-{size}` (z.B. `--font-size-lg`)
- Breakpoints: `--breakpoint-{size}` (z.B. `--breakpoint-md`)

## Hinweise zur Wartung

1. Halte die Token-Namen konsistent
2. Organisiere neue Tokens in der passenden Kategorie
3. Verwende `@layer tokens` für alle Token-Definitionen
4. Ergänze jede Datei mit einem Kommentar-Header zur Beschreibung
5. Bewahre Abwärtskompatibilität bei der Aktualisierung von Tokens 