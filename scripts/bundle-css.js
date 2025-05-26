/**
 * CSS Bundle Generator
 * 
 * Dieses Skript nimmt die index.css und erstellt eine gebündelte Version,
 * in der alle @import-Anweisungen aufgelöst sind. Das Ergebnis ist eine einzelne
 * minifizierte CSS-Datei (index.min.css), die direkt in Projekten eingebunden werden kann.
 */

const fs = require('fs');
const path = require('path');
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

async function generateBundle(minify = true) {
  try {
    console.log(`🔄 Generiere CSS-Bundle ${minify ? '(minifiziert)' : '(nicht minifiziert)'}...`);
    
    // Bundle erstellen mit aufgelösten Importen
    const result = await bundleAsync({
      filename: inputFile,
      minify: minify,
      sourceMap: minify, // Sourcemap nur für minifizierte Version
      analyzeDependencies: true,
      drafts: {
        nesting: true,
        customMedia: true
      },
      errorRecovery: true
    });
    
    // Ausgabe in die Zieldatei schreiben
    const targetFile = minify ? outputFile : nonMinifiedOutput;
    fs.writeFileSync(targetFile, result.code);
    
    if (result.map && minify) {
      fs.writeFileSync(outputMapFile, result.map);
      console.log(`✅ Sourcemap erstellt: ${outputMapFile}`);
    }
    
    const inputSize = fs.statSync(inputFile).size;
    const outputSize = fs.statSync(targetFile).size;
    const reductionPercent = ((1 - outputSize / inputSize) * 100).toFixed(2);
    
    console.log(`✅ Bundle erfolgreich erstellt: ${targetFile}`);
    console.log(`   Original-Größe: ${formatBytes(inputSize)}`);
    console.log(`   Bundle-Größe: ${formatBytes(outputSize)} (${reductionPercent}% Reduktion)`);
    
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
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Beide Versionen generieren: minifiziert und nicht minifiziert
async function main() {
  console.log('🚀 Starte CSS-Bundling-Prozess...');
  
  // Nicht-minifizierte Version für Debug-Zwecke
  const nonMinResult = await generateBundle(false);
  
  // Minifizierte Version für Produktion
  const minResult = await generateBundle(true);
  
  if (nonMinResult && minResult) {
    console.log('✨ Alle CSS-Bundles wurden erfolgreich erstellt.');
  } else {
    console.error('❌ Es gab Probleme beim Erstellen der CSS-Bundles.');
    process.exit(1);
  }
}

// Skript ausführen
main(); 