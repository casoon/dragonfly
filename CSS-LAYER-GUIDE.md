# CSS-Layer-Struktur für Casoon UI

Dieses Dokument beschreibt die standardisierte Layer-Struktur für das Casoon UI Design-System und bietet Richtlinien für deren Implementierung.

## Grundlegende Layer-Hierarchie

Die CSS-Layer sind in einer logischen Hierarchie organisiert, um die Spezifität zu verwalten und Konflikte zwischen Selektoren zu vermeiden. Die Reihenfolge ist wie folgt (von niedrigster zu höchster Priorität):

```css
@layer reset,        /* CSS-Reset und Normalisierung */
       tokens,       /* Design-Tokens und Variablen */
       base,         /* Grundlegende Elementstile (enthält logical-properties, accessibility, elements) */
       logical-properties, /* Sub-Layer von base: Logische Eigenschaften für RTL/LTR Support */
       accessibility, /* Sub-Layer von base: Barrierefreiheits-bezogene Stile */
       elements,     /* Sub-Layer von base: Grundlegende HTML-Element-Stile */
       colors,       /* Farbdefinitionen und Schema (enthält color-mix) */
       color-mix,    /* Sub-Layer von colors: Farb-Mischungen und -Transformationen */
       typography,   /* Typografie-Stile */
       layout,       /* Layout-Systeme und Grid (enthält layout-queries) */
       layout-queries, /* Sub-Layer von layout: Container-Queries für Layouts */
       utilities,    /* Hilfsstilklassen */
       components,   /* Komponentenstile (enthält form) */
       form,         /* Sub-Layer von components: Formular-bezogene Stile */
       animations,   /* Animationsdefinitionen (enthält animation-contexts) */
       animation-contexts, /* Sub-Layer von animations: Kontextbezogene Animationen */
       effects,      /* Visuelle Effekte (enthält smooth-scroll) */
       smooth-scroll, /* Sub-Layer von effects: Scrolling-Verhalten und -Effekte */
       icons,        /* Icon-Stile */
       themes;       /* Theme-Varianten */
```

Die logische Hierarchie kann wie folgt visualisiert werden:

```
- base
  ├── logical-properties
  ├── accessibility
  └── elements

- colors
  └── color-mix

- layout
  └── layout-queries

- components
  └── form

- animations
  └── animation-contexts

- effects
  └── smooth-scroll
```

## Wichtige Regeln

### 1. Keyframes außerhalb von Layern definieren

**Wichtig:** Alle `@keyframes`-Definitionen müssen außerhalb von `@layer`-Blöcken platziert werden, um Kompatibilitätsprobleme mit Lightning CSS zu vermeiden.

```css
/* RICHTIG ✅ */
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

@layer animations {
    .fade-in {
        animation-name: fade-in;
        animation-duration: var(--animation-duration-normal);
    }
}

/* FALSCH ❌ */
@layer animations {
    @keyframes slide-in {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
}
```

### 2. Komponenten-Layer verwenden

Verwende den `components`-Layer für alle komponentenbezogenen Stile:

```css
/* RICHTIG ✅ */
@layer components {
    .button {
        /* Button-Styles */
    }
}

/* FALSCH ❌ */
@layer button {
    .button {
        /* Button-Styles */
    }
}
```

Für Formular-Komponenten und -Elemente, nutze den `form`-Layer innerhalb des `components`-Layers:

```css
@layer form {
    .form-group {
        /* Formular-Element-Styles */
    }
}
```

### 3. Media-Queries mit Layer-Definitionen im Inneren

Media-Queries sollten Layer-Definitionen umschließen, nicht umgekehrt:

```css
/* RICHTIG ✅ */
@media (max-width: 768px) {
    @layer components {
        .card {
            flex-direction: column;
        }
    }
}

/* FALSCH ❌ */
@layer components {
    @media (max-width: 768px) {
        .card {
            flex-direction: column;
        }
    }
}
```

## Beispiele

### Typische Komponenten-Datei

```css
/**
 * Button-Komponente
 *
 * @layer components
 */

/* Keyframes außerhalb von Layern */
@keyframes button-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

/* Komponenten-Styles */
@layer components {
    .button {
        /* Basis-Styles */
        display: inline-flex;
        align-items: center;
        justify-content: center;
        /* ... */
    }
    
    /* Varianten */
    .button.primary { /* ... */ }
    .button.secondary { /* ... */ }
}

/* Animationen für die Komponente */
@layer animations {
    .button.animate-pulse {
        animation-name: button-pulse;
        animation-duration: var(--animation-duration-normal);
        animation-iteration-count: infinite;
    }
}

/* Effekte für die Komponente */
@layer effects {
    .button.glow {
        box-shadow: 0 0 10px var(--color-primary);
    }
}
```

### Formular-Elemente

```css
/**
 * Formular-Elemente
 *
 * @layer form
 */

@layer form {
    .form-group {
        margin-bottom: var(--spacing-4);
    }
    
    .form-label {
        display: block;
        margin-bottom: var(--spacing-2);
    }
    
    .form-control {
        width: 100%;
        padding: var(--spacing-2) var(--spacing-3);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
    }
}
```

## Migration bestehender Dateien

Beim Migrieren bestehender Dateien zur neuen Layer-Struktur:

1. Extrahiere alle `@keyframes`-Definitionen und platziere sie außerhalb der `@layer`-Blöcke
2. Identifiziere den passenden Layer für jeden CSS-Block gemäß der dokumentierten Hierarchie
3. Überprüfe Medienabfragen und füge Layer-Definitionen innerhalb dieser hinzu, wenn nötig
4. Für komponenten-spezifische Layer, migriere zu `@layer components`

### Beispiel für eine Migration

Vor der Migration:

```css
/* Alte Struktur mit eigenem Layer */
@layer card {
    .card {
        display: flex;
        flex-direction: column;
    }
}
```

Nach der Migration:

```css
/* Neue Struktur mit components-Layer */
@layer components {
    .card {
        display: flex;
        flex-direction: column;
    }
}
```

## Vorteile der Layer-Struktur

- **Klare Spezifitätsregeln**: Layer lösen Konflikte nach ihrer Reihenfolge in der Hierarchie
- **Bessere Organisation**: Code ist nach logischen Gruppen strukturiert
- **Einfachere Wartung**: Änderungen an einem Layer beeinflussen nicht unbeabsichtigt andere
- **Verbesserte Performance**: Browser können Layer-basierte Styles besser optimieren
- **Kompatibilität**: Vermeidung von bekannten Issues mit Tools wie Lightning CSS
- **Bessere Entwicklererfahrung**: Klare Struktur erleichtert das Verständnis des Codes 