#!/usr/bin/env node

/**
 * CSS-Analysator für Dokumentation
 * 
 * Dieses Script analysiert CSS-Dateien und extrahiert Informationen wie:
 * - CSS-Klassen und ihre Selektoren
 * - CSS-Variablen
 * - Media Queries
 * - Keyframes
 * 
 * Die Ergebnisse werden als JSON-Dateien im Verzeichnis "docs/analysis/" gespeichert
 * und können als Grundlage für die automatische Dokumentationsgenerierung dienen.
 */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

// Verzeichnis für Analyseausgabe erstellen
const analysisDir = path.join('docs', 'analysis');
if (!fs.existsSync(analysisDir)) {
  fs.mkdirSync(analysisDir, { recursive: true });
}

// CSS-Dateien aus package.json "files" extrahieren
const projectFiles = packageJson.files || [];
const cssFiles = [];

// CSS-Dateien filtern
projectFiles.forEach(file => {
  if (file.endsWith('.css')) {
    cssFiles.push(file);
  } else if (!file.includes('.') && fs.existsSync(file)) {
    // Verzeichnis durchsuchen
    findCssFilesInDir(file, cssFiles);
  }
});

// Funktion zum rekursiven Finden von CSS-Dateien
function findCssFilesInDir(dir, result) {
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        findCssFilesInDir(itemPath, result);
      } else if (itemPath.endsWith('.css')) {
        result.push(itemPath);
      }
    }
  } catch (error) {
    console.error(`Fehler beim Durchsuchen von ${dir}:`, error);
  }
}

// Analysiere jede CSS-Datei
cssFiles.forEach(cssFile => {
  console.log(`Analysiere ${cssFile}...`);
  
  try {
    const content = fs.readFileSync(cssFile, 'utf8');
    
    // Extrahiere Informationen aus der Datei
    const analysis = {
      file: cssFile,
      classes: extractClasses(content),
      variables: extractVariables(content),
      keyframes: extractKeyframes(content),
      mediaQueries: extractMediaQueries(content)
    };
    
    // Speichere Analyseergebnisse
    const analysisFilename = path.join(
      analysisDir, 
      `${path.basename(cssFile, '.css')}.json`
    );
    
    fs.writeFileSync(
      analysisFilename, 
      JSON.stringify(analysis, null, 2)
    );
    
    console.log(`✅ Analyse gespeichert: ${analysisFilename}`);
  } catch (error) {
    console.error(`❌ Fehler bei der Analyse von ${cssFile}:`, error);
  }
});

// Extrahiert CSS-Klassen und ihre Selektoren
function extractClasses(cssContent) {
  const classes = [];
  const classRegex = /\.([a-zA-Z0-9_-]+)(?:\s*[,{:]|:[a-zA-Z]+)/g;
  let match;
  
  while ((match = classRegex.exec(cssContent)) !== null) {
    const className = match[1];
    
    // Ignoriere Matches innerhalb von Kommentaren
    const upToMatch = cssContent.substring(0, match.index);
    const lastCommentStart = upToMatch.lastIndexOf('/*');
    const lastCommentEnd = upToMatch.lastIndexOf('*/');
    
    if (lastCommentStart > lastCommentEnd) {
      continue; // Match ist innerhalb eines Kommentars
    }
    
    // Finde den Klassenselektor und den zugehörigen Block
    const selectorStart = cssContent.substring(0, match.index).lastIndexOf('\n');
    const blockStart = cssContent.indexOf('{', match.index);
    const blockEnd = findMatchingBracket(cssContent, blockStart);
    
    if (blockStart > 0 && blockEnd > blockStart) {
      const selector = cssContent.substring(selectorStart >= 0 ? selectorStart : 0, blockStart).trim();
      const cssBlock = cssContent.substring(blockStart + 1, blockEnd).trim();
      
      classes.push({
        name: className,
        selector,
        properties: cssBlock
      });
    }
  }
  
  return classes;
}

// Extrahiert CSS-Variablen
function extractVariables(cssContent) {
  const variables = [];
  // Regex für --variable: value;
  const varRegex = /--([a-zA-Z0-9_-]+)\s*:\s*([^;]+);/g;
  let match;
  
  while ((match = varRegex.exec(cssContent)) !== null) {
    variables.push({
      name: match[1],
      value: match[2].trim()
    });
  }
  
  return variables;
}

// Extrahiert @keyframes
function extractKeyframes(cssContent) {
  const keyframes = [];
  // Regex für @keyframes name { ... }
  const keyframeRegex = /@keyframes\s+([a-zA-Z0-9_-]+)\s*{([^}]*)}/g;
  let match;
  
  while ((match = keyframeRegex.exec(cssContent)) !== null) {
    keyframes.push({
      name: match[1],
      content: match[2].trim()
    });
  }
  
  return keyframes;
}

// Extrahiert @media Queries
function extractMediaQueries(cssContent) {
  const mediaQueries = [];
  // Regex für @media ... { ... }
  const mediaRegex = /@media\s+([^{]+)\s*{([^}]*)}/g;
  let match;
  
  while ((match = mediaRegex.exec(cssContent)) !== null) {
    mediaQueries.push({
      query: match[1].trim(),
      content: match[2].trim()
    });
  }
  
  return mediaQueries;
}

// Hilfsfunktion zum Finden der schließenden Klammer
function findMatchingBracket(text, openBracketIndex) {
  let openBrackets = 1;
  let i = openBracketIndex + 1;
  
  while (i < text.length && openBrackets > 0) {
    if (text[i] === '{') {
      openBrackets++;
    } else if (text[i] === '}') {
      openBrackets--;
    }
    i++;
  }
  
  return openBrackets === 0 ? i - 1 : -1;
}

console.log(`\n🎉 Analyse für ${cssFiles.length} CSS-Dateien abgeschlossen.`); 