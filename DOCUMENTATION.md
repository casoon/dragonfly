# @casoon/ui-lib - Dokumentation

Diese Dokumentation bietet einen umfassenden Überblick über die @casoon/ui-lib, ihre Anforderungen, Architektur und Kompatibilität.

## Inhaltsverzeichnis
1. [Ziele und Anforderungen](#ziele-und-anforderungen)
2. [Architektur](#architektur)
3. [Kompatibilität](#kompatibilität)
4. [Browser-Kompatibilitätstests](#browser-kompatibilitätstests)
5. [Schriftarten](#schriftarten)
6. [Benutzerdefinierte Komponenten](#benutzerdefinierte-komponenten)
7. [Weiterführende Dokumentation](#weiterführende-dokumentation)

## Ziele und Anforderungen

### 1. Design-System – Eine konsistente, skalierbare Grundlage

**Ziel:** Aufbau eines modularen, konsistenten Design-Systems, das in verschiedenen Projekten wiederverwendet werden kann.

**Anforderungen:**
- Systematische Benennung und strukturelle Organisation für alle Tokens und Komponenten
- Eine Token-basierte Design-Grundlage, die CSS-Custom-Properties nutzt
- Theming-Unterstützung und Erweiterbarkeit durch eine Layer-basierte Architektur (z.B. Tokens, Utilities, Komponenten)

### 2. Design-Prinzipien – Klare visuelle und funktionale Regeln

**Ziel:** Sicherstellen, dass alle UI-Komponenten gemeinsame Prinzipien befolgen, um Kohärenz in Aussehen und Verhalten zu gewährleisten.

**Anforderungen:**
- Einheitliche Regeln für Layout, Abstände, Typografie und Größen
- Komponenten sollten verständlich und nutzbar sein, auch ohne auf externe Design-Tools angewiesen zu sein
- Klare Trennung von Präsentation und Logik in Struktur und Styling

### 3. Funktionale Muster – Wiederverwendbare, adaptive Komponenten-Blueprints

**Ziel:** Bereitstellung abstrakter Muster für häufige Interaktionen und funktionale Verhaltensweisen.

**Anforderungen:**
- Modulare Komponentenmuster wie Dialog, Accordion, Dropdown, mit minimalem JavaScript-Einsatz
- Komponenten sollten leicht konfigurierbar und an verschiedene Anwendungsfälle anpassbar sein
- Barrierefreiheit (a11y) muss als erstklassiges Anliegen betrachtet werden

### 4. Wahrnehmungsmuster – Intuitive Rückmeldung und visuelle Kommunikation

**Ziel:** Implementierung von Wahrnehmungshinweisen, die das Verständnis und Feedback des Benutzers verbessern.

**Anforderungen:**
- Definition und Unterstützung für Komponentenzustände wie hover, focus, disabled, error, loading, success
- Utility-Klassen oder Animationen zur Unterstützung interaktiver Übergänge und Effekte
- Alle Komponenten sollten über verschiedene Bildschirmgrößen und Geräte hinweg angemessen reagieren (responsives Design)

### 5. Gemeinsame Sprache – Einheitliche Namens- und API-Konvention

**Ziel:** Förderung einer gemeinsamen Sprache zwischen Design und Entwicklung.

**Anforderungen:**
- Token-Namen, Komponenten und Utilities sollten einer einheitlichen und dokumentierten Namenskonvention folgen
- Klare CSS-Klassen-API (z.B. btn-primary, gap-md, card-lg), die intuitiv und vorhersehbar ist
- Terminologie und Struktur sollten ein systematisiertes mentales Modell widerspiegeln, das im gesamten Projekt geteilt wird

## Architektur

Die Bibliothek verwendet eine klar definierte CSS-Layer-Architektur, um Spezifizitätskonflikte zu vermeiden und die Wartbarkeit zu verbessern.

### Layer-Hierarchie

```css
@layer reset, tokens, custom-properties, core, logical-properties, colors, color-mix, layout, layout-queries, typography, utilities, smooth-scroll, accessibility, icons, components, animations, effects, themes;
```

### Layer-Struktur
1. **reset**: Grundlegende CSS-Resets für einheitliche Browser-Darstellung
2. **tokens**: Design-Tokens für Farben, Abstände, Typografie usw.
3. **custom-properties**: CSS-Variablen-Definitionen
4. **core**: Kernstile für grundlegende Elemente
5. **layout**: Layoutsystem mit Flexbox und Grid
6. **typography**: Typografiesystem
7. **utilities**: Utility-Klassen
8. **components**: UI-Komponenten
9. **animations**: Animationssystem
10. **effects**: Visuelle Effekte
11. **themes**: Theming-System

Eine detaillierte Beschreibung der Layer-Struktur finden Sie in [LAYER-SYSTEM.md](LAYER-SYSTEM.md).

## Kompatibilität

Die Bibliothek verwendet progressive Enhancement und Fallback-Strategien, um eine breite Browser-Kompatibilität zu gewährleisten:

- **Moderne Browser**: Volle Unterstützung für Chrome/Edge 90+, Firefox 90+, Safari 15+
- **Ältere Browser**: Kernfunktionalität funktioniert in älteren Browsern durch Fallbacks
- **Feature-Erkennung**: Verwendet `@supports`-Regeln statt Browser-Erkennung
- **CSS-Variablen**: Fallbacks für Browser ohne CSS Custom Properties
- **Container Queries**: Media-Query-Fallbacks für ältere Browser
- **Farbfunktionen**: RGB/HSL-Fallbacks für Browser ohne OKLCH-Unterstützung
- **Interpolate-size**: Graceful Degradation für Browser ohne Fluid-Sizing

### Bekannte Kompatibilitätsprobleme

#### Viewport Units (svh, svw)

**Betroffene Browser:**
- Safari < 15.4
- Chrome < 108
- Firefox < 101

**Problem:** Small Viewport Units werden nicht unterstützt.

**Lösung:** Die Bibliothek implementiert einen Fallback mit regulären Viewport Units (vh, vw) und CSS-Feature-Erkennung:

```css
@supports not (height: 1svh) {
  .use-svh {
    height: 100vh; /* Fallback */
  }
}

@supports (height: 1svh) {
  .use-svh {
    height: 100svh;
  }
}
```

#### Container Queries

**Betroffene Browser:**
- Safari < 16
- Chrome < 105
- Firefox < 110

**Problem:** Container Queries werden nicht unterstützt.

**Lösung:** Die Bibliothek verwendet Media Queries als Fallbacks und stellt eine `no-container-queries`-Klasse für gezieltes Styling bereit.

## Browser-Kompatibilitätstests

Die Bibliothek enthält eine Browser-Kompatibilitäts-Testsuite, die Folgendes abdeckt:

- Viewport Units (vw, vh, svw, svh, lvw, lvh, dvw, dvh)
- Theme-System mit Dark/Light Mode
- Barrierefreiheit-Features (Fokusringe, Skip-Links, Screenreader-Kompatibilität)
- CSS-Feature-Support-Erkennung (Container Queries, Layers, Custom Properties)
- Media-Query-Support (prefers-color-scheme, prefers-reduced-motion)

Die Tests sind auf Kompatibilität mit folgenden Browsern ausgerichtet:
- Moderne Browser (Chrome, Firefox, Safari, Edge - neueste Versionen)
- Ältere Browser (Chrome, Firefox, Safari, Edge - Version 90+)

Um die Tests auszuführen:
```bash
# Starten eines lokalen Servers
npx serve

# Zugriff auf die Testsuite
# http://localhost:3000/tests/browser-compatibility/
```

Die Testdateien umfassen:
- `viewport-units-test.html` - Tests für die Implementierung von Viewport-Einheiten
- `theme-system-test.html` - Tests für Theme-Umschaltung und -Persistenz
- `accessibility-test.html` - Tests für Barrierefreiheit-Features

Die Testsuite liefert Browser-Informationen und dokumentiert Kompatibilitätsprobleme in `compatibility-issues.md`, um Entwicklern zu helfen, browserspezifische Herausforderungen bei der Verwendung der Bibliothek zu identifizieren und zu beheben.

## Schriftarten

Die Bibliothek enthält eine Sammlung optimierter Google Fonts im WOFF2-Format für bessere Performance und Datenschutz. Die Verwendung selbst-gehosteter Schriften eliminiert externe Anfragen an Googles Server und reduziert Ladezeiten.

### Verzeichnisstruktur

Die Schriften sind in einer verbesserten Struktur organisiert:

```
/fonts/
├── fonts.css                 # Haupt-CSS-Datei mit allen Variablen und Utility-Klassen
├── README.md                 # Dokumentation
│
├── roboto/                   # Jede Schriftart hat ihr eigenes Verzeichnis
│   ├── 400.css              # CSS für reguläres Gewicht
│   ├── 700.css              # CSS für fettes Gewicht
│   ├── index.css            # Importiert alle Gewichte
│   ├── roboto-regular.woff2 # WOFF2-Datei für reguläres Gewicht
│   └── roboto-bold.woff2    # WOFF2-Datei für fettes Gewicht
```

### Verwendung der Schriftarten

Sie können die Schriftarten auf verschiedene Weise einbinden:

```css
/* Nur die CSS-Variablen und Utility-Klassen, ohne die Schriftarten selbst */
@import '@casoon/ui-lib/fonts/fonts.css';

/* Eine bestimmte Schriftart mit allen Gewichten */
@import '@casoon/ui-lib/fonts/roboto/index.css';

/* Nur ein bestimmtes Gewicht einer Schriftart */
@import '@casoon/ui-lib/fonts/roboto/400.css';
```

Für Astro-Projekte können Sie einfach die CSS-Dateien importieren. Vite (von Astro verwendet) oder Webpack wird die CSS automatisch analysieren und die Schriftartendateien in Ihren Projekt-Build einbeziehen, ohne dass Plugins oder manuelles Kopieren erforderlich sind.

## Benutzerdefinierte Komponenten

Sie können eigene Komponenten im `components`-Layer hinzufügen:
```css
@layer components {
  .my-component {
    padding: var(--space-4);
    color: var(--color-primary);
    border-radius: var(--radius-md);
  }
}
```

## Weiterführende Dokumentation

Für einen umfassenden Leitfaden zu allen Funktionen, Best Practices, Komponenten-Nutzung, Theming, Utilities und fortgeschrittenen Techniken, beziehen Sie sich bitte auf den [Style Guide](STYLE-GUIDE.md).

Für eine detaillierte Erklärung der CSS-Layer-Architektur, siehe den [Layer System Guide](LAYER-SYSTEM.md). 