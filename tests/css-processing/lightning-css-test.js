const fs = require('fs');
const path = require('path');
const lightningcss = require('lightningcss');

// Wurzelverzeichnis der Bibliothek
const rootDir = path.resolve(__dirname, '../..');

// Verzeichnisse, die CSS-Dateien enthalten könnten
const cssDirectories = [
  rootDir,              // Root directory
  path.join(rootDir, 'layers'),
  path.join(rootDir, 'themes'),
  path.join(rootDir, 'components'),
  path.join(rootDir, 'modules'),
  path.join(rootDir, 'icons')
];

// Ausgabeverzeichnis für verarbeitete Dateien
const outputDir = path.resolve(__dirname, 'output');

// Sicherstellen, dass das Ausgabeverzeichnis existiert
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Finde alle CSS-Dateien in den angegebenen Verzeichnissen
function findCssFiles(directories) {
  const cssFiles = [];
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        
        if (fs.statSync(filePath).isDirectory()) {
          // Rekursiv in Unterverzeichnissen suchen
          const nestedDir = path.join(dir, file);
          if (fs.existsSync(nestedDir)) {
            const nestedFiles = fs.readdirSync(nestedDir)
              .filter(f => f.endsWith('.css'))
              .map(f => path.join(nestedDir, f));
            cssFiles.push(...nestedFiles);
          }
        } else if (file.endsWith('.css')) {
          cssFiles.push(filePath);
        }
      });
    }
  });
  
  return cssFiles;
}

// Lightning CSS Transformation anwenden
function testWithLightningCSS(css, filename, filePath) {
  try {
    const { code } = lightningcss.transform({
      filename,
      code: Buffer.from(css),
      minify: true,
      sourceMap: false,
      targets: {
        chrome: 95,
        firefox: 95,
        safari: 15
      }
    });
    
    console.log(`✅ ${filename} wurde erfolgreich mit Lightning CSS verarbeitet`);
    return code.toString();
  } catch (error) {
    console.error(`❌ Fehler beim Verarbeiten von ${filename} (${filePath}):`);
    console.error(error);
    return null;
  }
}

// Hauptfunktion zum Testen aller CSS-Dateien
function testAllCssFiles() {
  console.log('🔍 Suche nach CSS-Dateien...');
  const cssFiles = findCssFiles(cssDirectories);
  console.log(`Gefunden: ${cssFiles.length} CSS-Dateien`);
  
  console.log('\n🧪 Teste alle CSS-Dateien mit Lightning CSS...');
  
  let successCount = 0;
  let failCount = 0;
  
  cssFiles.forEach(filePath => {
    const filename = path.basename(filePath);
    const relativePath = path.relative(rootDir, filePath);
    
    try {
      const css = fs.readFileSync(filePath, 'utf8');
      const processedCss = testWithLightningCSS(css, filename, relativePath);
      
      if (processedCss) {
        // Gleiche Verzeichnisstruktur im Output-Verzeichnis beibehalten
        const outputPath = path.join(outputDir, relativePath);
        const outputDirForFile = path.dirname(outputPath);
        
        if (!fs.existsSync(outputDirForFile)) {
          fs.mkdirSync(outputDirForFile, { recursive: true });
        }
        
        fs.writeFileSync(outputPath, processedCss);
        successCount++;
      } else {
        failCount++;
      }
    } catch (error) {
      console.error(`❌ Fehler beim Lesen von ${filename} (${relativePath}):`);
      console.error(error);
      failCount++;
    }
  });
  
  console.log('\n📊 Testergebnisse:');
  console.log(`   - Getestete Dateien: ${cssFiles.length}`);
  console.log(`   - Erfolgreich: ${successCount}`);
  console.log(`   - Fehlgeschlagen: ${failCount}`);
  
  return { total: cssFiles.length, success: successCount, fail: failCount };
}

// Test für die Haupt-CSS-Dateien durchführen
console.log('🧪 Teste UI-Lib mit Lightning CSS...');
const results = testAllCssFiles();

console.log('\n✨ Tests abgeschlossen. Verarbeitete Dateien sind im Verzeichnis "output" zu finden.');

if (results.fail > 0) {
  console.log(`\n⚠️  Es gab Fehler beim Verarbeiten von ${results.fail} Dateien.`);
  process.exit(1);
} else {
  console.log('\n🎉 Alle CSS-Dateien wurden erfolgreich mit Lightning CSS verarbeitet!');
} 