# UI-Lib Komponenten

Dieses Verzeichnis enthält alle CSS-Komponenten der UI-Lib, die als eigenständige Komponenten verwendet werden können.

## Komponentenübersicht

Jede Komponente ist in einem eigenen CSS-Layer definiert, um Konflikte zu vermeiden und die Spezifität zu kontrollieren.

| Komponentenname | Beschreibung | Layer Name |
|-----------|--------------|------------|
| Alert | Informations- und Warnmeldungen | alert |
| Avatar | Benutzerprofilbilder und Platzhalter | avatar |
| Badge | Statusanzeigen und Labels | badge |
| Blog | Blogartikel-Layouts und -Komponenten | blog |
| Button | Interaktive Schaltflächen | button |
| Card | Container für Inhaltsblöcke | card |
| Checkbox | Auswahlkästchen für Formulare | checkbox |
| Chip | Kompakte Kennzeichnungselemente | chip |
| Code | Formatierung für Codeblöcke | code |
| Content | Allgemeine Inhaltsformatierung | content |
| File | Datei-Upload und -Anzeige | file |
| Footer | Fußzeilenkomponenten | footer |
| Form | Formularstrukturen und -layouts | form |
| Hamburger | Mobile Menü-Icons | hamburger |
| Header | Kopfzeilenkomponenten | header |
| Input | Texteingabefelder | input |
| Input Group | Gruppierte Eingabeelemente | input-group |
| Modal | Dialogfenster und Overlays | modal |
| Notification | System- und Benutzermeldungen | notification |
| Progress | Fortschrittsanzeigen | progress |
| Radio | Radio-Button-Auswahlelemente | radio |
| Select | Dropdown-Auswahlmenüs | select |
| Sidebar | Seitenleisten-Navigation | sidebar |
| Skeleton | Ladezustand-Platzhalter | skeleton |
| Slider | Schieberegler für Wertauswahl | slider |
| Spinner | Ladeanzeigen | spinner |
| Switch | Umschalter für Ja/Nein-Optionen | switch |
| Table | Tabellen und Datenraster | table |
| Tabs | Tab-Navigation | tabs |
| Tags | Tag-Elemente für Kategorisierung | tags |
| Textarea | Mehrzeilige Texteingabefelder | textarea |
| Toast | Temporäre Benachrichtigungen | toast |
| Tooltip | Informations-Tooltips | tooltip |
| Widget | Wiederverwendbare UI-Widgets | widget |
| Wizard | Schrittweise Navigationskomponenten | wizard |

## Verwendung

Jede Komponente kann entweder einzeln importiert oder über die zentrale `components.css`-Datei eingebunden werden:

```css
/* Einzelne Komponente importieren */
@import url('@casoon/ui-lib/components/button.css');

/* Alle Komponenten importieren */
@import url('@casoon/ui-lib/components.css');
```

## CSS-Layer-System

Alle Komponenten werden in der CSS-Layer-Hierarchie unter dem `components`-Layer organisiert, wobei jede Komponente ihren eigenen Sub-Layer hat, um Konflikte zu vermeiden:

```css
@layer components {
  @layer button, card, /* weitere Komponenten */;
}
```

## Formular-System (forms.css)

Das Formular-System wurde umfassend überarbeitet und bietet nun:

### Verbesserte Dark Mode-Unterstützung
- Integrierte `color-scheme: light dark` für native Unterstützung
- Verwendung der `light-dark()` CSS-Funktion mit Fallback-Mechanismen
- Automatische Anpassung an Systemeinstellungen via `prefers-color-scheme`
- Vollständig angepasste Farbgebung für alle Formularelemente

### RTL-Unterstützung
- Vollständige bidirektionale Layouts mit `[dir="rtl"]` Selektoren
- Umgekehrte Ausrichtung für Formularlabels, Checkboxen, Radios, etc.
- Korrekte Randradien und Positionierung in RTL-Layouts
- Konsistente Textausrichtung und Symbolplatzierung

### Moderne Formular-Layouts
- `.form-stacked` für explizite vertikale Anordnung
- `.form-layout-inline` für horizontale Formularlayouts
- `.form-inline-controls` für Inline-Steuerelemente innerhalb einer Zeile
- `.form-horizontal` für Label-Input-Paare auf derselben Zeile
- Responsive Anpassung für mobile Geräte

### Moderne Validierung mit :has()
- Nutzung des `:has()`-Selektors für fortschrittliche Validierungseffekte
- Visuelle Indikatoren (farbige Ränder, Symbole) basierend auf Validierungsstatus
- Fallback für ältere Browser via konventionelle Klassen
- Dynamische Validierungsfeedbacks ohne JavaScript

### Beispiel mit modernen Validierungseffekten:
```html
<form class="form">
  <div class="form-group">
    <label class="form-label" for="email">E-Mail</label>
    <input type="email" class="form-control" id="email" required>
    <div class="feedback">Bitte geben Sie eine gültige E-Mail ein.</div>
  </div>
</form>
```

### Beispiel für RTL-Support:
```html
<form class="form" dir="rtl">
  <div class="form-group">
    <label class="form-label required" for="name">الاسم</label>
    <input type="text" class="form-control" id="name" required>
  </div>
</form>
```

### Beispiel für Inline-Formularlayout:
```html
<form class="form-layout-inline">
  <div class="form-group">
    <label class="form-label" for="search">Suche</label>
    <input type="search" class="form-control" id="search">
  </div>
  <button type="submit" class="button primary">Suchen</button>
</form>
```

### Beispiel für Inline-Steuerelemente:
```html
<div class="form-inline-controls">
  <label class="form-label" for="preference">Präferenz</label>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="preference" id="pref1" value="option1">
    <label class="form-check-label" for="pref1">Option 1</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="preference" id="pref2" value="option2">
    <label class="form-check-label" for="pref2">Option 2</label>
  </div>
</div>
```

## Erweiterung und Anpassung

Komponenten können einfach angepasst werden, indem eigene Styles im entsprechenden Layer definiert werden:

```css
@layer components {
  @layer button {
    .button.custom {
      /* Eigene Styles hier */
    }
  }
}
```

## Best Practices

- Verwenden Sie die vordefinierten CSS-Variablen für Farben, Abstände und andere Design-Tokens.
- Halten Sie sich an die Namenskonventionen der Komponenten für konsistente Klassennamen.
- Nutzen Sie die Layer-Struktur, um Spezifitätsprobleme zu vermeiden.
- Verwenden Sie Container-Queries für responsive Komponenten, wann immer möglich.
- Berücksichtigen Sie RTL-Layouts bei der Erstellung eigener Komponenten.
- Nutzen Sie die `light-dark()` Funktion mit Fallbacks für optimale Dark Mode-Unterstützung.

## Flüssige Komponenten mit interpolate-size

Das UI-Lib-Framework unterstützt die moderne CSS-Eigenschaft `interpolate-size: allow-keywords`, die flüssigere UI-Übergänge bei Viewport- und Container-Größenänderungen ermöglicht. Die folgenden Komponenten bieten dedizierte flüssige Varianten:

### Fluid-Klassen

Komponenten mit der Klasse `.fluid` nutzen CSS-Schlüsselwörter wie `small`, `medium`, `large` und `x-large` für eine flüssige Skalierung:

| Komponente | Fluid-Klasse | Verfügbare Größen |
|------------|--------------|-------------------|
| Avatar | `.avatar.fluid` | small, medium, large, x-large |
| Badge | `.badge.fluid` | small, medium, large, x-large |
| Button | `.button.fluid` | small, medium, large, x-large |
| Card | `.card.fluid` | small, medium, large, x-large |
| Form | `.form.fluid` | small, medium, large, x-large |
| Modal | `.modal.fluid` | small, medium, large, x-large |
| Table | `.table.fluid` | small, medium, large, x-large |
| Tooltip | `.tooltip.fluid` | small, medium, large, x-large |

**Beispiel:**
```html
<button class="button fluid medium">Flüssiger Button</button>
<div class="card fluid large">Flüssige Karte</div>
```

### Adaptive-Klassen

Komponenten mit der Klasse `.adaptive` nutzen Container-Queries und `clamp()`-Funktionen, um sich automatisch an die Container-Größe anzupassen:

```html
<div class="container-query">
  <div class="card adaptive">
    Dieser Inhalt passt sich automatisch an die Container-Größe an.
  </div>
</div>
```

Die adaptive Variante ist besonders nützlich für:
- Komponenten in Layouts mit unterschiedlich großen Containern
- Responsive Designs, die auf die Container-Größe statt auf den Viewport reagieren
- UI-Elemente in flexiblen Grid- oder Flex-Layouts

### Vorteile der flüssigen Komponenten

- **Verbesserte visuelle Kontinuität**: Keine abrupten Größensprünge bei Breakpoints
- **Vereinfachtes responsives Design**: Natürlichere Größenübergänge ohne komplexe Media-Queries
- **Container-Aware Components**: Komponenten passen sich an ihre Umgebung an, nicht nur an den Viewport
- **Reduzierter CSS-Code**: Weniger manuelle Größendefinitionen für verschiedene Breakpoints

### Beispiele

Eine vollständige Demonstration der flüssigen Komponenten finden Sie in der Beispiel-Datei:
```
examples/fluid-components.html
```

## Popover

Das Popover nutzt die native Popover-API von HTML und kann mit der Klasse `.popover` gestylt werden. Die Animationen nutzen modern `@starting-style` für flüssige Einblendeffekte.

**Beispiel:**

```html
<!-- Trigger Button -->
<button popovertarget="myPopover">Follow Me</button>

<!-- Popover Element -->
<div id="myPopover" popover class="popover">
  Thank you for following me!
</div>
```

**Hinweise:**
- Die Klasse `.popover` sorgt für ein modernes, zugängliches Styling und unterstützt Light/Dark-Mode.
- Die Positionierung erfolgt standardmäßig unterhalb des Triggers. Für komplexere Positionierung ggf. eigene Styles ergänzen.
- Dank `@starting-style` werden Einblend-Animationen automatisch beim Öffnen des Popovers ausgeführt.
- Die Komponente nutzt CSS-Nesting und ist mit dem Layer-System kompatibel. 