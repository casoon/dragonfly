# Todo: Verbesserungsvorschläge für @casoon/ui-lib

Basierend auf den Design-Requirements wurden folgende Verbesserungsvorschläge für die UI-Bibliothek identifiziert:

## 1. Design Systems - Eine konsistente, skalierbare Grundlage

- [x] **Token-Namespace vereinheitlichen:** 
  - Konsistente Namensstruktur für alle Tokens implementieren (z.B. `--color-primary-500` statt `--color-primary`)
  - Abstimmung der Tokens mit dem Designsystem verbessern

- [ ] **Token-Generator-Tool entwickeln:**
  - Tool zum automatischen Generieren eines vollständigen Token-Sets aus grundlegenden Designentscheidungen
  - Möglichkeit, ein komplettes Theme basierend auf wenigen Basisfarben zu erstellen

## 2. Design-Prinzipien - Klare visuelle und funktionale Regeln

- [x] **Konsistente Komponentenschnittstellen:**
  - In allen Komponenten-Dateien die Klassennamen vereinheitlichen
  - Statt `.button.primary` konsistenter `.button-primary` verwenden (oder umgekehrt)
  - Ein klares Muster für Varianten, Größen und Zustände festlegen

- [x] **Einheitliches Raster-/Layout-System:**
  - Das Layout-System stärker mit den Design-Tokens verknüpfen
  - Implementierung eines einheitlichen Raster-Systems, das auf den gleichen Tokens basiert

## 3. Funktionale Muster - Wiederverwendbare, adaptive Komponenten-Blaupausen

- [x] **Komponenten-Muster-Bibliothek:**
  - Entwicklung einer Sammlung von Komponenten-Mustern für häufige UI-Patterns
  - Diese als fertige CSS-Module bereitstellen

- [ ] **Verbesserte Zugänglichkeit:**
  - Durchführung eines umfassenden Accessibility-Audits für alle Komponenten
  - Sicherstellen, dass alle Komponenten WCAG 2.1 AA konform sind
  - Fokus-Management und Keyboard-Navigation in den Komponenten verbessern

- [ ] **Interaktions-Pattern:**
  - Bibliothek von Interaktionsmustern (z.B. Drag & Drop, Multi-Select) erstellen
  - Minimale JavaScript-Snippets für komplexere Interaktionen bereitstellen

## 4. Wahrnehmungsmuster - Intuitive Rückmeldung und visuelle Kommunikation

- [x] **Erweiterte Zustandsvisualisierungen:**
  - Umfassenderes System für Komponentenzustände implementieren
  - Nicht nur hover/focus/active, sondern auch loading/success/error/disabled mit konsistenten visuellen Indikatoren

- [ ] **Animation-System erweitern:**
  - Modulareres Animation-System mit verschiedenen Kategorien entwickeln
  - Mehr Optionen für reduzierte Bewegung anbieten (Motion Safe/Reduce)

- [ ] **Feedback-Komponenten:**
  - Feedback-Komponenten (Toast, Notifications, Alerts) mit konsistenten Mustern für verschiedene Feedback-Typen erweitern

## 5. Gemeinsame Sprache - Einheitliche Namenskonventionen und API-Konzept

- [x] **Konsistente Utility-Klassen:**
  - Die Utility-Klassen besser kategorisieren
  - Einheitliche Namensmuster für alle Utilities implementieren

## Allgemeine Verbesserungen:

- [ ] **Einheitliche Sprache (Englisch):**
  - Umstellung aller Code-Kommentare, Variablennamen und Dokumentation auf Englisch
  - Entfernung deutscher Bezeichnungen aus dem Code

- [x] **Kompatibilitätsangaben verbessern:**
  - Fallback-Strategien für nicht unterstützte CSS-Funktionen implementieren
  - Progressive Enhancement für moderne Features sicherstellen

- [ ] **Konsistente Header-Dokumentation:**
  - Jede CSS-Datei soll eine standardisierte Dokumentation im Header erhalten
  - Folgende Struktur für alle Komponenten verwenden:
    ```css
    /*
     * Component Name
     *
     * Brief description of the component's purpose and functionality.
     */

    /**
     * Component Documentation
     * 
     * Detailed documentation about the component, including usage examples,
     * variants, sizes, states, and accessibility considerations.
     * 
     * @layer: components
     * 
     * Compatibility:
     * - Browser compatibility information
     * - Fallback strategies implemented
     * 
     * Basic usage examples with brief HTML structure descriptions
     */
    ```
  - Keine separate Dokumentation in Form von MD oder HTML-Beispielen, da dies in einem separaten Projekt erfolgt

- [ ] **Klare Unterscheidung zwischen UI-Elementen und UI-Komponenten:**
  - Ordnerstruktur und Namensgebung nach UI-Elementen und UI-Komponenten reorganisieren
  - **UI-Elemente** (einfache, atomare Bausteine):
    - Paragraph, Lead paragraph, Block quote, Headers, Lists, Links, Code
    - Buttons (Primary, Secondary, Button groups, Menu buttons, Split buttons, FAB)
    - Form controls (Text, Variants, Text area, Radio, Checkbox, Select, File upload, Labels, etc.)
    - Divider/rule, Switch, Slider, Image, Block, Full bleed, Inline with positions
  - **UI-Komponenten** (komplexere, zusammengesetzte Strukturen):
    - Action bar/sheet, Back to top, Badges, Breadcrumbs, Calendar picker, Caption, Cards
    - Contact us, Cookie notification, Data tables, Dialog, Drawer/accordion, Filters, Footer
    - Hero carousel, Legend, Loading/spinner, Local navigation, Maps, Menu, Messaging
    - Modal, Nav Megamenu, Pagination, Progress bar, Pull quote, Ratings, Reviews
    - Site/App navigation, Social networking, Status indicators, Tabs, Tags/chips/pills
    - Thumbnails, Tips/tutorial, Toolbar, Tooltips, Video & media
  - Für jede Kategorie konsistente Struktur und Benennung etablieren

- [ ] **Reorganisation der Effects-Ordnerstruktur:**
  - Statt flacher Dateistruktur, Unterteilung nach funktionalen Aspekten
  - **🔀 motion/** - Bewegungsbasierte Effekte:
    - animations.css, loading.css, morph.css, ripple.css, scroll.css
  - **🎨 visual/** - Optische Veredelungen & Stil:
    - glow.css, neon.css, noise.css, shadows.css, filters.css, patterns.css, reflections.css, glass.css, light.css
  - **🧩 interaction/** - Zustandsbasierte oder benutzerinteraktive Effekte:
    - hover.css, active.css, focus.css, disabled.css, error.css, interactions.css, cursors.css
  - **🧱 layout-effects/** - Maskierung, Layering und geometrische Manipulation:
    - clip-path.css, overlays.css, outlines.css, masks.css, backdrops.css
  - **🎭 themes/** - Designtechniken und Stilparadigmen:
    - neumorphism.css, neos.css, gradient.css, gradients.css, blends.css, 3d.css
  - **✴️ particles/** - Partikelbasierte visuelle Effekte:
    - particles.css
  - Harmonisierung mit der UI-Gestaltungsmethodik und konsistente Namensgebung

- [ ] **Leistungsoptimierung:**
  - CSS-Größe für Produktionsumgebungen analysieren und optimieren
  - Modulareres Importsystem entwickeln, um nur benötigte Komponenten zu laden

## Nächste Schritte:

1. Komponenten-Muster-Bibliothek vervollständigen ✅ Erledigt:
   - Muster für häufige UI-Patterns dokumentiert
   - Konsistente Struktur für alle Komponenten implementiert
   - Fallback-Strategien in Komponenten integriert
2. Weitere Komponenten nach dem neuen Namensschema aktualisieren
3. Transitions und Animations-System modernisieren
4. Theme-System weiter verbessern für bessere Dark-Mode-Unterstützung
5. Einheitliche Sprache (Englisch) in Code-Kommentaren implementieren
6. Kompatibilitätsangaben verbessern ✅ Erledigt:
   - Neue compatibility.md mit Dokumentation und Beispielen erstellt
   - Fallback-Strategien für OKLCH-Farben in tokens.css implementiert
   - Media-Query-Fallbacks für Container Queries in layout.queries.css hinzugefügt
   - Feature-Detection und Fallbacks für Button-Komponente hinzugefügt
7. **Reorganisation der Utilities-Struktur:**
   - Neuen `utilities/`-Ordner mit folgender Struktur erstellen:
     - `variables/`: Design-Tokens und Variablen
     - `mixins/`: Wiederverwendbare CSS-Mixins
     - `helpers/`: Allgemeine Helfer-Klassen
     - `customize/`: Anpassungsmöglichkeiten
   - Bestehende Utilities aus `base/utilities.css` in die neue Struktur migrieren
   - Komponentenspezifische Utilities in den Komponentendateien beibehalten
   - Elementspezifische Utilities in den Elementdateien beibehalten
   - Dokumentation für alle Utility-Typen erstellen (global, element-spezifisch, komponenten-spezifisch)
8. **Reorganisation von Typography, Layout und Icons:**
   - **Typography-Ordner** erstellen mit folgender Struktur:
     - `typography/index.css`: Importiert alle Typography-Module
     - `typography/hierarchy/`: Hierarchie-Definitionen (h1-h6, etc.)
     - `typography/weights/`: Schriftstärken und -varianten
     - `typography/web-fonts/`: Web-Font-Definitionen und -Integrationen
     - `typography/baseline/`: Baseline-Grid-System
   - **Layout-Ordner** erstellen mit folgender Struktur:
     - `layout/index.css`: Importiert alle Layout-Module
     - `layout/grid/`: Grid-System-Definitionen
     - `layout/flex/`: Flexbox-Layouts
     - `layout/containers/`: Container-Definitionen
     - `layout/spacing/`: Abstands- und Positionierungskomponenten
     - `layout/responsive/`: Responsive Layout-Utilities
   - **Icons-Ordner** umstrukturieren:
     - `icons/index.css`: Zentrale Datei, die alle Icon-Styles importiert
     - Bestehende Icon-Sets beibehalten
   - **Core.css anpassen**, um die neuen Pfade zu importieren:
     ```css
     /* Typography, Layout und Icons */
     @import url('typography/index.css');
     @import url('layout/index.css');
     @import url('icons/index.css');
     ```
   - Alle bestehenden Definitionen in die entsprechenden Unterordner migrieren
   - Sicherstellen, dass alle Importe und Layer-Definitionen korrekt aktualisiert werden
9. Leistungsoptimierungen durchführen
10. Build-Prozess-Konfiguration für Autoprefixer und Fallback-Generierung einrichten
11. Browser-Kompatibilitätstests durchführen 