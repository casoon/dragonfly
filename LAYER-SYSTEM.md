# CSS Layer-System

## Übersicht

Das CSS Layer-System von CASOON UI Lib verwendet `@layer` als zentrales Organisationsprinzip, um Spezifität und Kaskadierung von Stilen präzise zu kontrollieren. Dies ermöglicht ein vorhersehbares, wartbares und konfliktfreies Styling-System mit klarer Hierarchie.

## Struktur des Layer-Systems

Die Layer sind in `base.css` in einer präzisen Hierarchie definiert:

```css
@layer reset,                /* Grundlegender Browser-Reset */
       tokens,               /* Design-Tokens und Variablen */
       custom-properties,    /* Registrierte CSS-Eigenschaften */
       core,                 /* Kernfunktionalitäten */
       logical-properties,   /* Bidirektionale Layouts (RTL/LTR) */
       colors,               /* Farbsystem */
       color-mix,            /* Farbmischungen und -varianten */
       layout,               /* Layout-Grundlagen */
       layout-queries,       /* Responsive Anpassungen */
       typography,           /* Typografie-System */
       utilities,            /* Atomare Utility-Klassen */
       smooth-scroll,        /* Scrollverhalten */
       accessibility,        /* Barrierefreiheit */
       icons,                /* Icon-System */
       components,           /* UI-Komponenten */
       animations,           /* Bewegungssystem */
       effects,              /* Visuelle Effekte */
       themes;               /* Theming-System */
```

Die Reihenfolge ist entscheidend für die Kaskadierung: Layer, die früher in der Liste erscheinen, haben eine niedrigere Spezifität als spätere Layer, unabhängig von der Selektorspezifität innerhalb des Layers.

## Architekturprinzipien

Das Layer-System folgt diesen zentralen Prinzipien:

1. **Hierarchische Priorität**: Spätere Layer überschreiben frühere
2. **Funktionale Trennung**: Jeder Layer hat eine klar definierte Verantwortung
3. **Isolation**: Styles in einem Layer beeinflussen nicht unbeabsichtigt andere Layer
4. **Erweiterbarkeit**: Neue Funktionalität kann in bestehende Layer integriert oder in neuen Layern hinzugefügt werden
5. **Konfliktvermeidung**: Reduzierung von Spezifitätskonflikten und !important-Deklarationen

## Layer-Beschreibungen und Verwendung

### Grundlegende Layer

#### reset
Setzt Browser-Standardstile zurück und normalisiert das Rendering zwischen verschiedenen Browsern.

```css
@layer reset {
  /* Browser-Defaults zurücksetzen */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
```

#### tokens
Definiert Design-Token-Variablen für das gesamte System. Dies sind die Grundbausteine des Designs.

```css
@layer tokens {
  :root {
    --space-1: 0.25rem;
    --color-primary: #3b82f6;
    --radius-md: 0.375rem;
    /* weitere Tokens... */
  }
}
```

#### custom-properties
Registriert CSS-Eigenschaften mit @property für animierbare Übergänge und Verhalten.

```css
@layer custom-properties {
  @property --color-mix {
    syntax: '<color>';
    inherits: false;
    initial-value: transparent;
  }
}
```

### Kernfunktionalität

#### core
Enthält fundamentale Styles und Basiskomponenten.

```css
@layer core {
  body {
    font-family: var(--font-family-base);
    line-height: var(--line-height-normal);
  }
}
```

#### logical-properties
Implementiert bidirektionales Layout mit logischen Eigenschaften.

```css
@layer logical-properties {
  .margin-inline-auto {
    margin-inline: auto;
  }
  
  .padding-inline {
    padding-inline: var(--space-4);
  }
}
```

#### colors
Definiert das Farbsystem und farbbasierte Klassen.

```css
@layer colors {
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .text-secondary {
    color: var(--color-secondary);
  }
}
```

### Layout und Struktur

#### layout
Definiert grundlegende Layout-Komponenten wie Container, Grid und Flex-Container.

```css
@layer layout {
  .container {
    width: 100%;
    max-width: var(--container-lg);
    margin-inline: auto;
    padding-inline: var(--space-4);
  }
  
  .container-query {
    container-type: inline-size;
    container-name: layout;
  }
}
```

#### layout-queries
Implementiert responsive Anpassungen basierend auf Container-Queries.

```css
@layer layout-queries {
  @container layout (min-width: 30rem) {
    .sm\:flex-row { flex-direction: row; }
    .sm\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  }
}
```

### Zusätzliche Funktionalitäten

#### utilities
Atomare Hilfsklassen für häufige Styling-Aufgaben.

```css
@layer utilities {
  .flex { display: flex; }
  .gap-4 { gap: var(--space-4); }
  .w-full { width: 100%; }
}
```

#### components
UI-Komponenten und komplexere Komponenten-Systeme.

```css
@layer components {
  .card {
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }
  
  .button {
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    background-color: var(--color-primary);
    color: white;
  }
}
```

#### themes
Theming-System für Farbschemata und Dark Mode.

```css
@layer themes {
  [data-theme="dark"] {
    --color-background: hsl(222 47% 11%);
    --color-text: hsl(213 31% 91%);
  }
}
```

## Praktische Anwendung

### Basis-Verwendung

Importieren Sie einfach die `core.css`-Datei, die automatisch das komplette Layer-System lädt:

```html
<link rel="stylesheet" href="path/to/@casoon/ui-lib/core.css">
```

### Eigene Styles mit Layer-Integration

```css
/* Ihre eigene CSS-Datei */
@import url('path/to/@casoon/ui-lib/core.css');

/* Fügen Sie eigene Utility-Klassen hinzu */
@layer utilities {
  .custom-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-6);
  }
}

/* Erstellen Sie eigene Komponenten */
@layer components {
  .feature-card {
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
  }
  
  .feature-card__title {
    font-size: var(--text-xl);
    font-weight: var(--font-bold);
    margin-bottom: var(--space-2);
  }
}

/* Passen Sie das Theming an */
@layer themes {
  [data-theme="brand"] {
    --color-primary: #8a2be2;
    --color-secondary: #ff6b6b;
  }
}
```

### Integration mit JS-Frameworks

Mit Astro:

```astro
---
// In Ihrer Astro-Komponente
import '@casoon/ui-lib/core.css';
import './custom-styles.css'; // Enthält Ihre Layer-Erweiterungen
---

<div class="container">
  <div class="layout-grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div class="card">
      <h2 class="card-title">Komponente 1</h2>
      <p>Inhalt...</p>
    </div>
    <!-- Weitere Karten... -->
  </div>
</div>
```

## Vorteile des Layer-Systems

1. **Geringere Spezifitätskonflikte**: Layer eliminieren die meisten Spezifitätsprobleme
2. **Modulare Architektur**: Einfaches Hinzufügen, Entfernen oder Ersetzen von Komponenten
3. **Klarere Debugging**: Einfaches Nachvollziehen, woher Styles kommen
4. **Progressive Enhancement**: Layer können schrittweise angewendet werden
5. **Bessere Team-Zusammenarbeit**: Klare Zuständigkeiten und weniger Überraschungen
6. **Entwicklungsgeschwindigkeit**: Reduzierung von CSS-Konflikten und Regression-Bugs

## Debugging-Tipps

Wenn Styles nicht wie erwartet angewendet werden:

1. Überprüfen Sie in den DevTools, welchem Layer der Stil zugeordnet ist (Layer werden in der Styles-Ansicht angezeigt)
2. Überprüfen Sie, ob konkurrierende Stile in Layern mit höherer Priorität definiert sind
3. Nutzen Sie die Selektorspezifität innerhalb eines Layers für feinere Kontrolle
4. Vermeiden Sie !important, ergänzen Sie stattdessen Stile im selben Layer

## Migration zu diesem Layer-System

Beim Umstellen eines bestehenden Projekts:

1. Beginnen Sie mit den grundlegenden Layern (reset, tokens)
2. Migrieren Sie schrittweise Komponenten in die entsprechenden Layer
3. Überprüfen Sie jede Komponente auf Styling-Probleme nach der Migration
4. Dokumentieren Sie das Layer-System für Ihr Team

## Best Practices

1. **Layer zur Klassifikation verwenden**: Gruppieren Sie Styles nach ihrer funktionalen Rolle, nicht nach Selektorart
2. **Layer-Hierarchie respektieren**: Stile strategisch in Layern platzieren, basierend auf ihrer Überschreibungsintention
3. **Konsistente Benennung**: Style-Klassen entsprechend ihrer Layer-Zugehörigkeit benennen
4. **Einfache Selektoren**: Komplexe Selektoren vermeiden, da Layer bereits Spezifitätskonflikte lösen
5. **Layer dokumentieren**: Klare Kommentare und Dokumentation für jeden Layer bereitstellen 