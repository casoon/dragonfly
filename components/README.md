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