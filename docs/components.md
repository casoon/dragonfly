# Komponenten

## Avatar

Die Avatar-Komponente bietet verschiedene Stile für Benutzerbilder und Initialen.

### Verwendung

```html
<!-- Basis-Avatar -->
<div class="avatar">
    <img src="pfad-zum-bild.jpg" alt="Benutzerbild">
</div>

<!-- Avatar mit Status -->
<div class="avatar avatar--online">
    <img src="pfad-zum-bild.jpg" alt="Benutzerbild">
</div>

<!-- Avatar mit Initialen -->
<div class="avatar">
    <span class="avatar-initials">JD</span>
</div>
```

### Varianten

- **Größen**: `avatar--sm`, `avatar--lg`
- **Status**: `avatar--online`, `avatar--offline`, `avatar--away`, `avatar--busy`
- **Zustände**: `avatar--error`, `avatar--success`, `avatar--warning`, `avatar--info`
- **Stile**: `avatar--outline`

### Gruppierung

```html
<!-- Normale Gruppierung -->
<div class="avatar-group">
    <div class="avatar">...</div>
    <div class="avatar">...</div>
    <div class="avatar">...</div>
</div>

<!-- Gestapelte Gruppierung -->
<div class="avatar-group avatar-group--stacked">
    <div class="avatar">...</div>
    <div class="avatar">...</div>
    <div class="avatar">...</div>
</div>
```

## Tooltip

Die Tooltip-Komponente bietet verschiedene Stile für Informations-Tooltips.

### Verwendung

```html
<!-- Basis-Tooltip -->
<div class="tooltip">
    <button class="tooltip-trigger">Hover mich</button>
    <div class="tooltip-content">Tooltip-Inhalt</div>
</div>

<!-- Tooltip mit Validierung -->
<div class="tooltip tooltip--error">
    <button class="tooltip-trigger">Hover mich</button>
    <div class="tooltip-content">Fehlermeldung</div>
</div>

<!-- Tooltip mit Animation -->
<div class="tooltip tooltip--animated">
    <button class="tooltip-trigger">Hover mich</button>
    <div class="tooltip-content">Tooltip-Inhalt</div>
</div>
```

### Positionen

- `tooltip--top`
- `tooltip--right`
- `tooltip--bottom`
- `tooltip--left`

### Varianten

- **Größen**: `tooltip--sm`, `tooltip--lg`
- **Zustände**: `tooltip--error`, `tooltip--success`, `tooltip--warning`, `tooltip--info`
- **Stile**: `tooltip--outline`, `tooltip--filled`
- **Animation**: `tooltip--animated`

## Badge

Die Badge-Komponente bietet verschiedene Stile für Status- und Zählbadges.

### Verwendung

```html
<!-- Basis-Badge -->
<span class="badge">Neue Nachrichten</span>

<!-- Badge mit Icon -->
<span class="badge">
    <i class="icon-bell"></i>
    Neue Nachrichten
</span>

<!-- Badge mit Zähler -->
<span class="badge badge--counter">5</span>
```

### Varianten

- **Größen**: `badge--sm`, `badge--lg`
- **Zustände**: `badge--error`, `badge--success`, `badge--warning`, `badge--info`
- **Stile**: `badge--outline`, `badge--filled`
- **Spezial**: `badge--counter`, `badge--dot`

### Positionierung

```html
<!-- Badge auf Button -->
<button class="button">
    Benachrichtigungen
    <span class="badge badge--counter">5</span>
</button>

<!-- Badge auf Icon -->
<div class="icon-wrapper">
    <i class="icon-bell"></i>
    <span class="badge badge--dot"></span>
</div>
```

## Responsive Verhalten

Alle Komponenten passen sich automatisch an verschiedene Bildschirmgrößen an:

- **Mobile Geräte**: Optimierte Touch-Interaktionen und Größen
- **Tablets**: Angepasste Abstände und Größen
- **Desktop**: Vollständige Funktionalität

## Zugänglichkeit

Alle Komponenten sind barrierefrei gestaltet:

- **Tastaturnavigation**: Vollständige Tastaturunterstützung
- **Screen Reader**: Semantische HTML-Struktur
- **Reduzierte Bewegung**: Anpassung an Benutzereinstellungen
- **Hoher Kontrast**: Optimierte Farbkontraste

## Performance

Die Komponenten sind für optimale Performance ausgelegt:

- **Hardware-Beschleunigung**: Verwendung von `transform` und `will-change`
- **Lazy Loading**: Bilder werden erst geladen, wenn sie sichtbar sind
- **Reduzierte Animationen**: Anpassung an Benutzereinstellungen
- **Optimierte Transitions**: Flüssige Übergänge 