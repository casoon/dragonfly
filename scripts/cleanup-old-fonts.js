#!/usr/bin/env node

/**
 * Cleanup Old Fonts Script
 * 
 * Dieses Skript entfernt die alten Schriftartendateien und -verzeichnisse,
 * nachdem die Reorganisation abgeschlossen ist.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Funktion zum Löschen der alten Schriftartendateien im Root-Verzeichnis
function cleanupRootFontFiles() {
  console.log('Entferne alte WOFF2-Dateien aus dem Root-Verzeichnis...');
  
  const fontsDir = path.join(__dirname, '..', 'fonts');
  const files = fs.readdirSync(fontsDir);
  
  let removedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(fontsDir, file);
    const isFile = fs.statSync(filePath).isFile();
    
    // Entferne WOFF2-Dateien, aber nicht README.md und .gitkeep
    if (isFile && file.endsWith('.woff2') && !file.includes('README.md') && !file.includes('.gitkeep')) {
      fs.unlinkSync(filePath);
      console.log(`Gelöscht: ${file}`);
      removedCount++;
    }
  });
  
  console.log(`${removedCount} WOFF2-Dateien entfernt.`);
}

// Funktion zum Löschen des alten typography/web-fonts Verzeichnisses
function cleanupWebFontsDirectory() {
  console.log('Entferne altes typography/web-fonts Verzeichnis...');
  
  const webFontsDir = path.join(__dirname, '..', 'typography', 'web-fonts');
  
  if (fs.existsSync(webFontsDir)) {
    // Lösche alle Dateien im Verzeichnis
    const files = fs.readdirSync(webFontsDir);
    files.forEach(file => {
      const filePath = path.join(webFontsDir, file);
      fs.unlinkSync(filePath);
      console.log(`Gelöscht: typography/web-fonts/${file}`);
    });
    
    // Lösche das Verzeichnis selbst
    fs.rmdirSync(webFontsDir);
    console.log('Verzeichnis typography/web-fonts entfernt.');
  } else {
    console.log('Verzeichnis typography/web-fonts existiert nicht.');
  }
}

// Hauptfunktion
function main() {
  console.log('Starte Bereinigung der alten Schriftartendateien...');
  
  cleanupRootFontFiles();
  cleanupWebFontsDirectory();
  
  console.log('Bereinigung abgeschlossen!');
}

main(); 