# Textalignierung mit logischen Eigenschaften

Diese Dokumentation beschreibt die Verwendung von logischen Textalignierungsklassen im Design-System, die für bidirektionale (RTL/LTR) Layouts optimiert sind.

## Einführung

Logische CSS-Eigenschaften erhöhen die Internationalisierungsunterstützung, indem sie richtungsunabhängige Bezeichnungen verwenden:

- `text-align: start` ersetzt `text-align: left` in LTR und `text-align: right` in RTL
- `text-align: end` ersetzt `text-align: right` in LTR und `text-align: left` in RTL

## Verfügbare Klassen

### Basis-Klassen

| Klasse | CSS | Beschreibung |
|--------|-----|-------------|
| `.text-start` | `text-align: start;` | Ausrichtung am logischen Anfang des Textflusses |
| `.text-end` | `text-align: end;` | Ausrichtung am logischen Ende des Textflusses |
| `.text-center` | `text-align: center;` | Zentrierte Ausrichtung |
| `.text-justify` | `text-align: justify;` | Blocksatz |

### Legacy-Klassen (für Abwärtskompatibilität)

| Klasse | CSS | Beschreibung |
|--------|-----|-------------|
| `.text-left` | `text-align: left;` | Ausrichtung am physischen linken Rand |
| `.text-right` | `text-align: right;` | Ausrichtung am physischen rechten Rand |

## Responsive Varianten

Die Textalignierungsklassen sind in allen Breakpoint-Varianten verfügbar:

- `sm:text-start`, `sm:text-end`, `sm:text-center`, `sm:text-justify`
- `md:text-start`, `md:text-end`, `md:text-center`, `md:text-justify`
- `lg:text-start`, `lg:text-end`, `lg:text-center`, `lg:text-justify`
- `xl:text-start`, `xl:text-end`, `xl:text-center`, `xl:text-justify`

## Container-Query-Varianten

Die Textalignierungsklassen sind auch in allen Container-Query-Varianten verfügbar:

- `container-xs:text-start`, `container-xs:text-end`, ...
- `container-sm:text-start`, `container-sm:text-end`, ...
- `container-md:text-start`, `container-md:text-end`, ...
- `container-lg:text-start`, `container-lg:text-end`, ...
- `container-xl:text-start`, `container-xl:text-end`, ...

## Verwendungsbeispiele

```html
<p class="text-start">Dieser Text ist am Anfang ausgerichtet (links in LTR, rechts in RTL).</p>
<p class="text-end">Dieser Text ist am Ende ausgerichtet (rechts in LTR, links in RTL).</p>
<p class="text-center">Dieser Text ist zentriert.</p>

<!-- Responsive Textalignierung -->
<p class="text-start md:text-center lg:text-end">
  Dieser Text ist standardmäßig links ausgerichtet, 
  auf mittleren Bildschirmen zentriert und 
  auf großen Bildschirmen rechts ausgerichtet.
</p>

<!-- Container-Query-Textalignierung -->
<div class="container-layout">
  <p class="container-sm:text-start container-lg:text-end">
    Dieser Text passt sich an die Größe seines Containers an.
  </p>
</div>
```

## Vorteile

1. **Verbesserte Internationalisierung**: Funktioniert nahtlos in RTL- und LTR-Layouts
2. **Vereinfachte Wartung**: Eine einzige Codebasis für mehrsprachige Anwendungen
3. **Zukunftssicherheit**: Folgt modernen CSS-Standards und -Praktiken
4. **Abwärtskompatibilität**: Legacy-Klassen werden weiterhin unterstützt

## Hinweise zur Migration

Obwohl die traditionellen `.text-left` und `.text-right` Klassen weiterhin unterstützt werden, empfehlen wir die Verwendung der logischen Eigenschaften `.text-start` und `.text-end` für neue Projekte, insbesondere für mehrsprachige Anwendungen. 