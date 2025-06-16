/**
 * CSS Bundle Generator
 *
 * Dieses Skript nimmt die index.css und erstellt eine gebündelte Version,
 * in der alle @import-Anweisungen aufgelöst sind. Das Ergebnis ist eine einzelne
 * minifizierte CSS-Datei (index.min.css), die direkt in Projekten eingebunden werden kann.
 */

const fs = require('node:fs');
const path = require('node:path');
const { bundleAsync } = require('lightningcss');

// Pfade konfigurieren
const rootDir = path.resolve(__dirname, '..');
const inputFile = path.join(rootDir, 'index.css');
const distDir = path.join(rootDir, 'dist');
const outputFile = path.join(distDir, 'index.min.css');
const outputMapFile = path.join(distDir, 'index.min.css.map');
const nonMinifiedOutput = path.join(distDir, 'index.bundled.css');

// Stellen Sie sicher, dass das Ausgabeverzeichnis existiert
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Speichern der Bundle-Größen für späteren Vergleich
let nonMinifiedSize = 0;

async function generateBundle(minify = true) {
  try {
    // Bundle erstellen mit aufgelösten Importen
    const result = await bundleAsync({
      filename: inputFile,
      minify: minify,
      sourceMap: minify, // Sourcemap nur für minifizierte Version
      analyzeDependencies: true,
      drafts: {
        nesting: true,
        customMedia: true,
      },
      errorRecovery: true,
      // Targets für bessere Kompatibilität
      targets: {
        chrome: 95,
        firefox: 95,
        safari: 15,
      },
      // Verbesserte Minifizierungsoptionen für besser parsbare Ausgabe
      minifyOptions: minify
        ? {
            targets: {
              chrome: 95,
              firefox: 95,
              safari: 15,
            },
            lineBreaks: {
              // Zeilenumbrüche bei Schachtelungstiefe >3 für bessere Parsbarkeit
              depth: 3,
            },
            comments: 'none',
          }
        : undefined,
    });

    // Ausgabe in die Zieldatei schreiben
    const targetFile = minify ? outputFile : nonMinifiedOutput;
    fs.writeFileSync(targetFile, result.code);

    if (result.map && minify) {
      fs.writeFileSync(outputMapFile, result.map);
    }

    const outputSize = fs.statSync(targetFile).size;

    // Speichere die Größe des nicht-minifizierten Bundles für den Vergleich
    if (!minify) {
      nonMinifiedSize = outputSize;
    } else {
      // Berechne die Reduktion zwischen nicht-minifiziertem und minifiziertem Bundle
      const reductionPercent = ((1 - outputSize / nonMinifiedSize) * 100).toFixed(2);

      // Validiere, dass das minifizierte Bundle erfolgreich geparsed werden kann
      try {
        // Test-Parse der erzeugten Datei
        const testParse = require('lightningcss').transform({
          filename: targetFile,
          code: result.code,
          minify: false,
        });
      } catch (parseError) {
        console.warn('⚠️ Warnung: Das minifizierte Bundle könnte Parsing-Probleme verursachen:');
        console.warn(parseError.message);
      }
    }

    return true;
  } catch (error) {
    console.error('❌ Fehler beim Bündeln:', error);
    return false;
  }
}

// Hilfsfunktion zum formatieren von Bytes in lesbare Größen
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

// Beide Versionen generieren: minifiziert und nicht minifiziert
async function main() {
  // Nicht-minifizierte Version für Debug-Zwecke
  const nonMinResult = await generateBundle(false);

  // Minifizierte Version für Produktion
  const minResult = await generateBundle(true);

  if (nonMinResult && minResult) {
  } else {
    console.error('❌ Es gab Probleme beim Erstellen der CSS-Bundles.');
    process.exit(1);
  }
}

// Skript ausführen
main();
