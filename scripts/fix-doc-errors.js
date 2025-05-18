#!/usr/bin/env node

/**
 * Korrigiert Fehler in der Dokumentationsgenerierung
 * 
 * Dieses Script behebt Probleme, die während der Dokumentationsgenerierung aufgetreten sind:
 * 1. Entfernt ungültige Dateien (*.md)
 * 2. Korrigiert das Datum von 2025 auf 2024
 */

const fs = require('fs');
const path = require('path');

// Verzeichnisse
const docsBaseDir = 'docs';

// Funktion zum rekursiven Durchsuchen von Verzeichnissen nach MD-Dateien
function findMdFiles(dir) {
  const result = [];
  
  try {
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

// Alle MD-Dateien suchen
const mdFiles = findMdFiles(docsBaseDir);
console.log(`🔍 ${mdFiles.length} Markdown-Dateien gefunden.`);

// Problematische Dateien löschen
const invalidFiles = mdFiles.filter(file => {
  const baseName = path.basename(file);
  return baseName === '*.md';
});

// Lösche ungültige Dateien
invalidFiles.forEach(file => {
  try {
    fs.unlinkSync(file);
    console.log(`🗑️ Gelöscht: ${file}`);
  } catch (error) {
    console.error(`❌ Fehler beim Löschen von ${file}:`, error);
  }
});

// Korrigiere falsche Datumsangaben (2025 -> 2024)
mdFiles.filter(file => !invalidFiles.includes(file)).forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Falsche 2025-Datumsangaben korrigieren
    if (content.includes('.2025')) {
      content = content.replace(/(\d{2}\.\d{2}\.)2025/g, '$12024');
      fs.writeFileSync(file, content);
      console.log(`📅 Datum korrigiert: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Fehler beim Korrigieren des Datums in ${file}:`, error);
  }
});

console.log('\n✨ Dokumentationsprobleme behoben!'); 