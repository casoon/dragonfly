#!/usr/bin/env node

/**
 * Reorganize Fonts Script
 * 
 * Dieses Skript reorganisiert die Schriftarten gemäß der neuen Struktur:
 * /fonts/
 * └── roboto/
 *     ├── 400.css
 *     ├── 700.css
 *     ├── index.css
 *     ├── roboto-regular.woff2
 *     └── roboto-bold.woff2
 * 
 * Es erstellt für jede Schriftart einen eigenen Ordner mit CSS-Dateien
 * für jedes Gewicht und einer index.css, die alle Gewichte importiert.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Mapping von Schriftarten und Gewichten
const fonts = [
  { name: 'anton', weights: [{ weight: '400', file: 'regular' }] },
  { name: 'arimo', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'bebas-neue', weights: [{ weight: '400', file: 'regular' }] },
  { name: 'cabin', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'dm-sans', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'dosis', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'fira-sans', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'inconsolata', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'inter', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'josefin-sans', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'lato', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'merriweather', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'montserrat', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'mukta', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'noto-sans', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'nunito', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'open-sans', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'oswald', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'playfair-display', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'poppins', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'pt-sans', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'quicksand', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'raleway', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'roboto', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'roboto-condensed', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'source-sans-pro', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'teko', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'titillium-web', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'ubuntu', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
  { name: 'work-sans', weights: [{ weight: '400', file: 'regular' }, { weight: '700', file: 'bold' }] },
];

// Spezialfall: Inter Variable Font
const specialFonts = [
  { name: 'inter-var', weights: [{ weight: 'var', file: '' }] }
];

// Funktion zum Erstellen der Verzeichnisstruktur
function createFontDirectory(font) {
  const fontName = font.name;
  const displayName = fontName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
  const dirPath = path.join('fonts', fontName);
  
  // Verzeichnis erstellen
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Gewichte-CSS-Dateien erstellen
  const importStatements = [];
  
  font.weights.forEach(({ weight, file }) => {
    const sourceFile = `${fontName}-${file}.woff2`;
    const targetFile = path.join(dirPath, sourceFile);
    const cssFile = path.join(dirPath, `${weight}.css`);
    
    // Schriftdatei kopieren
    if (fs.existsSync(path.join('fonts', sourceFile))) {
      fs.copyFileSync(path.join('fonts', sourceFile), targetFile);
      console.log(`Kopiert: ${sourceFile} -> ${targetFile}`);
    } else {
      console.error(`Fehler: Datei nicht gefunden: ${sourceFile}`);
    }
    
    // CSS-Datei erstellen
    const cssContent = createCSSContent(fontName, displayName, weight, file, sourceFile);
    fs.writeFileSync(cssFile, cssContent);
    console.log(`Erstellt: ${cssFile}`);
    
    importStatements.push(`@import './${weight}.css';`);
  });
  
  // Index-CSS-Datei erstellen
  const indexCssContent = `/**
 * ${displayName} Font - Alle Gewichte
 * 
 * Diese Datei importiert alle verfügbaren Gewichte der ${displayName}-Schriftart.
 */

${importStatements.join('\n')}

/* 
 * Hinweis: Die Font-Variablen und Utility-Klassen werden in jeder
 * einzelnen CSS-Datei definiert. Es ist nicht notwendig, sie hier
 * erneut zu definieren.
 */`;
  
  fs.writeFileSync(path.join(dirPath, 'index.css'), indexCssContent);
  console.log(`Erstellt: ${path.join(dirPath, 'index.css')}`);
}

// Funktion zum Erstellen des CSS-Inhalts
function createCSSContent(fontName, displayName, weight, file, sourceFile) {
  const weightName = weight === '400' ? 'Regular' : weight === '700' ? 'Bold' : 'Variable';
  
  return `/**
 * ${displayName} Font - ${weightName} (${weight})
 * 
 * Diese Datei enthält die font-face-Definition für ${displayName} ${weightName}.
 * Die Schriftart ist für optimale Webperformance im WOFF2-Format optimiert.
 */

@layer typography.webfonts {
  /* ${displayName} ${weightName} */
  @font-face {
    font-display: swap;
    font-family: ${getProperFontFamily(fontName)};
    font-style: normal;
    font-weight: ${weight === 'var' ? '100 900' : weight};
    src: url('./${sourceFile}') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
  /* Font-Variablen */
  :root {
    --font-family-${fontName}: '${getProperFontFamily(fontName)}', ${getFallbackFonts(fontName)};
  }
  
  /* Font-Utility-Klasse */
  .font-${fontName} {
    font-family: var(--font-family-${fontName});
  }
}`;
}

// Funktion zum Ermitteln des richtigen Font-Family-Namens
function getProperFontFamily(fontName) {
  const specialCases = {
    'inter-var': 'Inter Variable',
    'dm-sans': 'DM Sans',
    'pt-sans': 'PT Sans',
    'fira-sans': 'Fira Sans',
    'josefin-sans': 'Josefin Sans',
    'noto-sans': 'Noto Sans',
    'open-sans': 'Open Sans',
    'playfair-display': 'Playfair Display',
    'roboto-condensed': 'Roboto Condensed',
    'source-sans-pro': 'Source Sans Pro',
    'titillium-web': 'Titillium Web',
    'work-sans': 'Work Sans',
    'bebas-neue': 'Bebas Neue'
  };
  
  if (specialCases[fontName]) {
    return specialCases[fontName];
  }
  
  return fontName.charAt(0).toUpperCase() + fontName.slice(1);
}

// Funktion zum Ermitteln der Fallback-Fonts
function getFallbackFonts(fontName) {
  if (fontName === 'inconsolata') {
    return 'monospace';
  } else if (fontName === 'merriweather' || fontName === 'playfair-display') {
    return 'serif';
  } else {
    return 'system-ui, -apple-system, sans-serif';
  }
}

// Hauptfunktion
function main() {
  console.log('Starte Reorganisation der Schriftarten...');
  
  // Alle normalen Schriftarten verarbeiten
  fonts.forEach(font => {
    createFontDirectory(font);
  });
  
  // Spezielle Schriftarten verarbeiten
  specialFonts.forEach(font => {
    createFontDirectory(font);
  });
  
  console.log('Reorganisation abgeschlossen!');
}

main(); 