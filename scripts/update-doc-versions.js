#!/usr/bin/env node

'use strict';

/**
 * Dieses Skript aktualisiert die Information über das letzte Änderungsdatum
 * in allen Dokumentationsdateien. Das Datum kann manuell als Argument übergeben werden
 * oder wird automatisch als heutiges Datum gesetzt.
 * 
 * Verwendung:
 * - node scripts/update-doc-versions.js                 # Verwendet das aktuelle Datum
 * - node scripts/update-doc-versions.js "DD.MM.YYYY"    # Verwendet das angegebene Datum
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Dateizuordnungen zwischen Dokumentation und CSS-Dateien
const docToCssMap = {
  'docs/effects/animations.md': 'effects/animations.css',
  'docs/effects/overlays.md': 'effects/overlays.css',
  'docs/effects/neumorphism.md': 'effects/neumorphism.css',
  'docs/effects/transitions.md': 'effects/transitions.css'
  // Weitere Zuordnungen können hier hinzugefügt werden
};

// Ermittle das zu verwendende Datum (aus Kommandozeile oder aktuelles Datum)
function getDateToUse() {
  // Prüfe, ob ein Datum als Argument übergeben wurde
  const dateArg = process.argv[2];
  if (dateArg) {
    // Versuche, das übergebene Datum zu parsen
    const datePattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const match = dateArg.match(datePattern);
    
    if (match) {
      const [, day, month, year] = match;
      const date = new Date(year, month - 1, day);
      
      if (!isNaN(date)) {
        return date;
      }
    }
    
    console.warn(`Ungültiges Datumsformat: ${dateArg}, verwende aktuelles Datum stattdessen.`);
  }
  
  // Kein gültiges Argument übergeben, verwende aktuelles Datum
  return new Date();
}

// Formatiere das Datum benutzerfreundlich
function formatDate(date) {
  return date.toLocaleDateString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

// Finde alle Markdown-Dateien im docs-Verzeichnis
async function findMarkdownFiles(dir) {
  const files = [];
  
  async function scan(directory) {
    const entries = await readdir(directory);
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry);
      const stats = await stat(fullPath);
      
      if (stats.isDirectory()) {
        await scan(fullPath);
      } else if (stats.isFile() && entry.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }
  
  await scan(dir);
  return files;
}

// Aktualisiere die "Last Modified"-Information in einer Markdown-Datei
async function updateLastModifiedInFile(file, date) {
  try {
    const content = await readFile(file, 'utf8');
    const lines = content.split('\n');
    
    // Prüfe, ob die Datei mit einer Markdown-Überschrift beginnt
    if (lines.length > 0 && lines[0].startsWith('# ')) {
      let updated = false;
      const formattedDate = formatDate(date);
      
      // Prüfe, ob bereits eine "Last Modified"-Information existiert
      const lastModifiedIndex = lines.findIndex(line => line.startsWith('> Last Modified:'));
      
      if (lastModifiedIndex !== -1) {
        // Aktualisiere bestehende Datumsinformation
        lines[lastModifiedIndex] = `> Last Modified: ${formattedDate}`;
        updated = true;
      } else {
        // Prüfe, ob eine Versionszeile existiert, die ersetzt werden soll
        const versionIndex = lines.findIndex(line => line.startsWith('> Version:'));
        
        if (versionIndex !== -1) {
          // Ersetze Versionszeile durch Datumsinformation
          lines[versionIndex] = `> Last Modified: ${formattedDate}`;
          updated = true;
        } else {
          // Füge neue Datumsinformation nach der Überschrift hinzu
          lines.splice(1, 0, `> Last Modified: ${formattedDate}`, '');
          updated = true;
        }
      }
      
      if (updated) {
        await writeFile(file, lines.join('\n'), 'utf8');
        console.log(`✅ Aktualisiert: ${path.relative(process.cwd(), file)} (${formattedDate})`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Fehler beim Aktualisieren von ${file}:`, error);
    return false;
  }
}

// Hauptfunktion
async function main() {
  try {
    // Ermittle das zu verwendende Datum
    const dateToUse = getDateToUse();
    const formattedDate = formatDate(dateToUse);
    
    console.log(`🔄 Aktualisiere "Last Modified"-Informationen auf ${formattedDate}...`);
    
    const docsDir = path.join(process.cwd(), 'docs');
    const markdownFiles = await findMarkdownFiles(docsDir);
    
    console.log(`🔍 ${markdownFiles.length} Markdown-Dateien gefunden.`);
    
    let updatedCount = 0;
    
    for (const file of markdownFiles) {
      const wasUpdated = await updateLastModifiedInFile(file, dateToUse);
      if (wasUpdated) updatedCount++;
    }
    
    console.log(`\n✨ Fertig! ${updatedCount} von ${markdownFiles.length} Dateien aktualisiert.`);
  } catch (error) {
    console.error('Ein unerwarteter Fehler ist aufgetreten:', error);
    process.exit(1);
  }
}

main(); 