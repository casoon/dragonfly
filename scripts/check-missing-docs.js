#!/usr/bin/env node

/**
 * Prüft auf fehlende Dokumentationsdateien
 * 
 * Dieses Script identifiziert CSS-Dateien, die keine entsprechende MD-Dokumentationsdatei haben,
 * und gibt eine Liste der fehlenden Dokumentationen aus.
 */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

// Verzeichnisse
const docsBaseDir = 'docs';

// Funktion zum rekursiven Finden von CSS-Dateien
function findCssFiles(dir) {
  const result = [];
  
  try {
    if (!fs.existsSync(dir)) {
      return result;
    }
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      
      try {
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          if (!itemPath.includes('node_modules') && !itemPath.includes('.git')) {
            const subDirFiles = findCssFiles(itemPath);
            result.push(...subDirFiles);
          }
        } else if (itemPath.endsWith('.css')) {
          result.push(itemPath);
        }
      } catch (error) {
        console.error(`Fehler beim Prüfen von ${itemPath}:`, error);
      }
    }
  } catch (error) {
    console.error(`Fehler beim Durchsuchen von ${dir}:`, error);
  }
  
  return result;
}

// Alle CSS-Dateien aus "package.json > files" ermitteln
let cssFilesFromPackageJson = [];
const filesFromPackageJson = packageJson.files || [];

// CSS-Dateien aus package.json filtern (ignoriere Wildcards)
filesFromPackageJson.forEach(file => {
  if (file.endsWith('.css') && !file.includes('*')) {
    cssFilesFromPackageJson.push(file);
  } else if (!file.includes('.') && fs.existsSync(file)) {
    const dirCssFiles = findCssFiles(file);
    cssFilesFromPackageJson.push(...dirCssFiles);
  }
});

// Root-CSS-Dateien finden (ignoriere Wildcards)
const rootCssFiles = findCssFiles('.')
  .filter(file => !file.includes('/'))
  .filter(file => 
    filesFromPackageJson.includes(path.basename(file)) || 
    filesFromPackageJson.some(pattern => 
      pattern.includes('*') && 
      new RegExp('^' + pattern.replace(/\*/g, '.*') + '$').test(path.basename(file))
    )
  );

// Alle CSS-Dateien kombinieren
const allCssFiles = [...cssFilesFromPackageJson, ...rootCssFiles];

// Alle MD-Dateien finden
function findMdFiles(dir) {
  const result = [];
  
  try {
    if (!fs.existsSync(dir)) {
      return result;
    }
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        const subDirFiles = findMdFiles(itemPath);
        result.push(...subDirFiles);
      } else if (itemPath.endsWith('.md')) {
        result.push(itemPath);
      }
    }
  } catch (error) {
    console.error(`Fehler beim Durchsuchen von ${dir}:`, error);
  }
  
  return result;
}

const mdFiles = findMdFiles(docsBaseDir);

// Dokumentationspaare abgleichen
const cssFilesWithoutDocs = [];

allCssFiles.forEach(cssFile => {
  const baseName = path.basename(cssFile, '.css');
  const dirName = path.dirname(cssFile);
  let expectedDocPath = '';
  
  if (dirName === '.') {
    // Root-CSS-Datei
    expectedDocPath = path.join(docsBaseDir, baseName + '.md');
  } else {
    // CSS-Datei in Unterordner
    const relativeDirName = dirName === '.' ? '' : dirName;
    expectedDocPath = path.join(docsBaseDir, relativeDirName, baseName + '.md');
  }
  
  // Prüfen, ob die erwartete Dokumentationsdatei existiert
  if (!mdFiles.includes(expectedDocPath) && !mdFiles.some(md => md.endsWith(`/${baseName}.md`))) {
    cssFilesWithoutDocs.push({
      cssFile,
      expectedDocPath
    });
  }
});

// Ergebnisse ausgeben
console.log(`\n📊 Dokumentations-Statistik:`);
console.log(`- CSS-Dateien insgesamt: ${allCssFiles.length}`);
console.log(`- MD-Dateien insgesamt: ${mdFiles.length}`);
console.log(`- CSS-Dateien ohne Dokumentation: ${cssFilesWithoutDocs.length}`);

if (cssFilesWithoutDocs.length > 0) {
  console.log('\n❌ Folgende CSS-Dateien haben keine Dokumentation:');
  cssFilesWithoutDocs.forEach(({ cssFile, expectedDocPath }) => {
    console.log(`   ${cssFile} -> ${expectedDocPath}`);
  });
  console.log(`\n🛠️  Führe 'npm run docs:all' aus, um alle fehlenden Dokumentationen zu erstellen.`);
} else {
  console.log('\n✅ Alle CSS-Dateien sind dokumentiert!');
  console.log(`\n🎉 Glückwunsch! Alle CSS-Dateien sind vollständig dokumentiert.`);
} 