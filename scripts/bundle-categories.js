/**
 * CSS Category Bundle Generator
 * 
 * Dieses Skript erstellt gebündelte und minifizierte CSS-Dateien für vier Kategorien:
 * 1. effects: Alle CSS-Dateien aus dem /effects-Verzeichnis
 * 2. icons: Alle CSS-Dateien aus dem /icons-Verzeichnis
 * 3. themes: Alle CSS-Dateien aus dem /themes-Verzeichnis
 * 4. components: Alle CSS-Dateien aus dem /ui/components-Verzeichnis
 *
 * Für jede Kategorie werden zwei Dateien erstellt:
 * - {kategorie}.bundled.css: Nicht-minifizierte Version mit allen zusammengeführten CSS-Dateien
 * - {kategorie}.min.css: Minifizierte Version mit Sourcemap
 */

const fs = require('fs');
const path = require('path');
const { bundleAsync, transform } = require('lightningcss');
const glob = require('glob');

// Pfade konfigurieren
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Kategorien definieren
const categories = [
  {
    name: 'effects',
    pattern: 'effects/**/*.css',
    // Standard-Bundling über Import
    bundleMethod: 'import'
  },
  {
    name: 'icons',
    pattern: 'icons/**/*.css',
    // Standard-Bundling über Import
    bundleMethod: 'import'
  },
  {
    name: 'themes',
    pattern: 'themes/**/*.css',
    // Spezielles Bundling für Themes, wegen der Layer-Problematik
    bundleMethod: 'concat'
  },
  {
    name: 'components',
    pattern: 'ui/components/**/*.css',
    // Standard-Bundling über Import
    bundleMethod: 'import'
  }
];

// Stellen Sie sicher, dass das Ausgabeverzeichnis existiert
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
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

// Generiere temporäre Indexdatei für eine Kategorie
function generateTempIndexFile(category, files) {
  const tempDir = path.join(distDir, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  const tempFilePath = path.join(tempDir, `${category.name}-temp-index.css`);
  
  // Erstelle Inhalt mit relativen Importpfaden zur temporären Datei
  const imports = files.map(file => {
    // Verwende relativen Pfad zur temporären Datei
    const relativePath = path.relative(path.dirname(tempFilePath), file);
    // Verwende Standard-Import-Syntax, die LightningCSS versteht
    return `@import "${relativePath}";`;
  }).join('\n');
  
  fs.writeFileSync(tempFilePath, imports);
  return tempFilePath;
}

// Generiere direktes Concatenation-Bundle für Kategorien mit Layer-Problemen
function generateConcatBundle(category, files, minify = true) {
  const tempDir = path.join(distDir, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  const suffix = minify ? '.min.css' : '.bundled.css';
  const outputFileName = `${category.name}${suffix}`;
  const outputFile = path.join(distDir, outputFileName);
  const outputMapFile = path.join(distDir, `${outputFileName}.map`);
  
  // Sammle @import und @layer Anweisungen am Anfang
  let importStatements = [];
  let layerStatements = [];
  let regularContent = [];
  
  // Lese alle Dateien und kategorisiere den Inhalt
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    // Kommentar für jede Datei hinzufügen
    regularContent.push(`/* Datei: ${path.relative(rootDir, file)} */`);
    
    // Extrahiere @import und @layer Anweisungen
    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('@import')) {
        importStatements.push(trimmedLine);
      } else if (trimmedLine.startsWith('@layer') && !trimmedLine.includes('{')) {
        // Nur @layer-Deklarationen, keine @layer-Blöcke
        layerStatements.push(trimmedLine);
      } else {
        regularContent.push(line);
      }
    });
    
    regularContent.push(''); // Leerzeile zwischen Dateien
  });
  
  // Entferne Duplikate
  importStatements = [...new Set(importStatements)];
  layerStatements = [...new Set(layerStatements)];
  
  // Kombiniere den Inhalt in der richtigen Reihenfolge
  const combinedContent = [
    ...importStatements,
    ...layerStatements,
    ...regularContent
  ].join('\n');
  
  // Schreibe die kombinierte Datei
  const tempFilePath = path.join(tempDir, `${category.name}-temp-combined.css`);
  fs.writeFileSync(tempFilePath, combinedContent);
  
  // Minifiziere die kombinierte Datei, wenn nötig
  if (minify) {
    try {
      const result = transform({
        filename: tempFilePath,
        code: Buffer.from(combinedContent),
        minify: true,
        sourceMap: true,
        drafts: {
          nesting: true,
          customMedia: true
        }
      });
      
      fs.writeFileSync(outputFile, result.code);
      if (result.map) {
        fs.writeFileSync(outputMapFile, result.map);
        console.log(`  ✅ Sourcemap erstellt: ${outputMapFile}`);
      }
    } catch (error) {
      console.error(`❌ Fehler beim Minifizieren von ${category.name}:`, error);
      // Fallback: Unminifizierte Version verwenden
      fs.copyFileSync(tempFilePath, outputFile);
    }
  } else {
    // Kopiere die kombinierte Datei direkt
    fs.copyFileSync(tempFilePath, outputFile);
  }
  
  const outputSize = fs.statSync(outputFile).size;
  console.log(`  ✅ Bundle erfolgreich erstellt: ${outputFile}`);
  console.log(`     Bundle-Größe: ${formatBytes(outputSize)}`);
  
  return {
    size: outputSize,
    path: outputFile
  };
}

// Bundle für eine Kategorie erstellen
async function generateCategoryBundle(category, minify = true) {
  try {
    const suffix = minify ? '.min.css' : '.bundled.css';
    const outputFileName = `${category.name}${suffix}`;
    const outputFile = path.join(distDir, outputFileName);
    const outputMapFile = path.join(distDir, `${outputFileName}.map`);
    
    console.log(`🔄 Generiere ${category.name}-Bundle ${minify ? '(minifiziert)' : '(nicht minifiziert)'}...`);
    
    // Finde alle CSS-Dateien für diese Kategorie
    const files = glob.sync(path.join(rootDir, category.pattern));
    
    if (files.length === 0) {
      console.warn(`⚠️ Keine CSS-Dateien für Kategorie ${category.name} gefunden!`);
      return false;
    }
    
    // Wähle die Bundling-Methode basierend auf der Kategorie
    if (category.bundleMethod === 'concat') {
      return generateConcatBundle(category, files, minify);
    }
    
    // Standard-Methode: Import-basiertes Bundling
    // Erstelle temporäre Indexdatei mit allen Imports
    const tempIndexFile = generateTempIndexFile(category, files);
    
    // Bundle erstellen mit aufgelösten Importen
    const result = await bundleAsync({
      filename: tempIndexFile,
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
    fs.writeFileSync(outputFile, result.code);
    
    if (result.map && minify) {
      fs.writeFileSync(outputMapFile, result.map);
      console.log(`  ✅ Sourcemap erstellt: ${outputMapFile}`);
    }
    
    const outputSize = fs.statSync(outputFile).size;
    console.log(`  ✅ Bundle erfolgreich erstellt: ${outputFile}`);
    console.log(`     Bundle-Größe: ${formatBytes(outputSize)}`);
    
    // Lösche temporäre Datei
    fs.unlinkSync(tempIndexFile);
    
    return {
      size: outputSize,
      path: outputFile
    };
  } catch (error) {
    console.error(`❌ Fehler beim Bündeln von ${category.name}:`, error);
    return false;
  }
}

// Alle Kategorien bündeln
async function main() {
  console.log('🚀 Starte CSS-Category-Bundling-Prozess...');
  
  // Temporäres Verzeichnis erstellen und am Ende bereinigen
  const tempDir = path.join(distDir, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  const results = {};
  
  // Alle Kategorien durchlaufen
  for (const category of categories) {
    console.log(`\n📦 Verarbeite Kategorie: ${category.name}`);
    
    // Nicht-minifizierte Version für Debug-Zwecke
    const nonMinResult = await generateCategoryBundle(category, false);
    
    // Minifizierte Version für Produktion
    const minResult = await generateCategoryBundle(category, true);
    
    if (nonMinResult && minResult) {
      const reductionPercent = ((1 - minResult.size / nonMinResult.size) * 100).toFixed(2);
      console.log(`  📊 Reduktion durch Minifizierung: ${reductionPercent}%`);
      
      results[category.name] = {
        bundled: nonMinResult,
        minified: minResult,
        reduction: reductionPercent
      };
    }
  }
  
  // Zusammenfassung ausgeben
  console.log('\n📋 Zusammenfassung:');
  let allSuccess = true;
  
  for (const category of categories) {
    if (results[category.name]) {
      console.log(`  ✅ ${category.name}: ${formatBytes(results[category.name].bundled.size)} → ${formatBytes(results[category.name].minified.size)} (${results[category.name].reduction}% Reduktion)`);
    } else {
      console.log(`  ❌ ${category.name}: Fehler beim Bundling`);
      allSuccess = false;
    }
  }
  
  // Temporäres Verzeichnis bereinigen
  if (fs.existsSync(tempDir)) {
    fs.rmdirSync(tempDir, { recursive: true });
  }
  
  if (allSuccess) {
    console.log('\n✨ Alle Kategorie-Bundles wurden erfolgreich erstellt.');
  } else {
    console.error('\n❌ Es gab Probleme beim Erstellen einiger Kategorie-Bundles.');
    process.exit(1);
  }
}

// Skript ausführen
main(); 