# Web Fonts

Dieses Verzeichnis enthält die WOFF2-Dateien für die in der UI-Bibliothek verwendeten Schriftarten.

## Verwendung

Jede Schriftart wird als separate CSS-Datei im Verzeichnis `/typography/web-fonts/` bereitgestellt. Um eine Schriftart zu verwenden, importieren Sie einfach die entsprechende CSS-Datei:

```css
@import "typography/web-fonts/roboto.css";
```

Die WOFF2-Dateien werden dann nur geladen, wenn die Schriftart tatsächlich über den entsprechenden Import eingebunden wird.

## Verfügbare Schriftarten

### Sans-Serif
- Roboto (`roboto.css`)
- Open Sans (`open-sans.css`)
- Lato (`lato.css`)
- Montserrat (`montserrat.css`)
- Oswald (`oswald.css`)
- Raleway (`raleway.css`)
- Poppins (`poppins.css`)
- Source Sans Pro (`source-sans-pro.css`)
- Roboto Condensed (`roboto-condensed.css`)
- Noto Sans (`noto-sans.css`)
- Ubuntu (`ubuntu.css`)
- PT Sans (`pt-sans.css`)
- Nunito (`nunito.css`)
- Inter (`inter.css`)
- Quicksand (`quicksand.css`)
- Mukta (`mukta.css`)
- Work Sans (`work-sans.css`)
- Titillium Web (`titillium-web.css`)
- Cabin (`cabin.css`)
- Fira Sans (`fira-sans.css`)
- DM Sans (`dm-sans.css`)
- Josefin Sans (`josefin-sans.css`)
- Arimo (`arimo.css`)
- Dosis (`dosis.css`)

### Serif
- Merriweather (`merriweather.css`)
- Playfair Display (`playfair-display.css`)

### Monospace
- Inconsolata (`inconsolata.css`)

### Display
- Anton (`anton.css`)
- Bebas Neue (`bebas-neue.css`)
- Teko (`teko.css`)

### Variable Fonts
- Inter Variable (`inter-var.css`) - unterstützt Gewichte von 100-900

## CSS-Variablen und Utility-Klassen

Jede Font-Datei definiert CSS-Variablen und Utility-Klassen für die Verwendung der Schriftart:

```css
/* CSS-Variable */
--font-family-roboto: 'Roboto', system-ui, -apple-system, sans-serif;

/* Utility-Klasse */
.font-roboto { font-family: var(--font-family-roboto); }
```

## Herunterladen der Schriftarten

Die Schriftarten können mit dem Skript `scripts/download-google-fonts.js` heruntergeladen werden:

```bash
# Abhängigkeiten installieren
npm install axios fs-extra

# Skript ausführen
node scripts/download-google-fonts.js
```

Das Skript lädt die WOFF2-Dateien herunter und generiert automatisch die entsprechenden CSS-Dateien.

## Hinweise zur Optimierung

Die WOFF2-Dateien wurden für optimale Webperformance komprimiert und enthalten nur die notwendigen Unicode-Bereiche für lateinische Schriften.

## Lizenz

Beachten Sie die entsprechenden Lizenzhinweise in der Datei [GOOGLE-FONTS-LICENSE.md](../GOOGLE-FONTS-LICENSE.md) im Hauptverzeichnis des Projekts. 