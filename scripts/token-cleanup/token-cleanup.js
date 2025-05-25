/**
 * Token Cleanup Script
 * 
 * Dieses Skript bereinigt Duplikate zwischen den Tokens-Dateien im /tokens Verzeichnis.
 * Es konsolidiert die Tokens aus design-tokens.css und default-tokens.css in eine einzige Datei.
 */

const fs = require('fs');
const path = require('path');

// Pfade zu den Token-Dateien
const designTokensPath = path.join(__dirname, '../../tokens/design-tokens.css');
const defaultTokensPath = path.join(__dirname, '../../tokens/default-tokens.css');
const consolidatedTokensPath = path.join(__dirname, '../../tokens/consolidated-tokens.css');

// Funktion zum Extrahieren von CSS-Variablen aus einer Datei
function extractCSSVariables(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const variableRegex = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
    const variables = {};
    let match;

    while ((match = variableRegex.exec(content)) !== null) {
      const name = match[1];
      const value = match[2].trim();
      variables[`--${name}`] = value;
    }

    return variables;
  } catch (error) {
    console.error(`Fehler beim Lesen von ${filePath}:`, error);
    return {};
  }
}

// Funktion zum Vergleichen und Konsolidieren der Variablen
function consolidateTokens() {
  console.log('Token-Konsolidierung wird gestartet...');
  
  // Tokens aus beiden Dateien extrahieren
  const designTokens = extractCSSVariables(designTokensPath);
  const defaultTokens = extractCSSVariables(defaultTokensPath);
  
  // Konsolidierte Variablen erstellen (design-tokens als Basis verwenden)
  const consolidatedTokens = { ...designTokens };
  
  // Zähler für die Statistiken
  let duplicateCount = 0;
  let uniqueToDefaultCount = 0;
  
  // Variablen aus default-tokens hinzufügen, die nicht in design-tokens existieren
  for (const [name, value] of Object.entries(defaultTokens)) {
    if (consolidatedTokens[name]) {
      duplicateCount++;
      if (consolidatedTokens[name] !== value) {
        console.log(`Warnung: Variable ${name} hat unterschiedliche Werte in beiden Dateien:`);
        console.log(`  design-tokens: ${consolidatedTokens[name]}`);
        console.log(`  default-tokens: ${value}`);
      }
    } else {
      consolidatedTokens[name] = value;
      uniqueToDefaultCount++;
    }
  }
  
  // Konsolidierte Tokens in eine neue Datei schreiben
  let consolidatedContent = `/**
 * Consolidated Design Tokens
 * 
 * Diese Datei wurde automatisch aus design-tokens.css und default-tokens.css konsolidiert.
 * Generiert mit dem token-cleanup.js Skript.
 */

@layer tokens {
  :root {
`;

  // Sortiere die Variablen nach Kategorien
  const categories = {
    'COLOR': [],
    'SPACE': [],
    'SIZE': [],
    'RADIUS': [],
    'SHADOW': [],
    'BREAKPOINT': [],
    'CONTAINER': [],
    'Z-INDEX': [],
    'TYPOGRAPHY': [],
    'OTHER': []
  };
  
  for (const [name, value] of Object.entries(consolidatedTokens)) {
    if (name.includes('color')) {
      categories['COLOR'].push({ name, value });
    } else if (name.includes('space')) {
      categories['SPACE'].push({ name, value });
    } else if (name.includes('size')) {
      categories['SIZE'].push({ name, value });
    } else if (name.includes('radius')) {
      categories['RADIUS'].push({ name, value });
    } else if (name.includes('shadow')) {
      categories['SHADOW'].push({ name, value });
    } else if (name.includes('breakpoint')) {
      categories['BREAKPOINT'].push({ name, value });
    } else if (name.includes('container')) {
      categories['CONTAINER'].push({ name, value });
    } else if (name.includes('z-index') || name.includes('zIndex')) {
      categories['Z-INDEX'].push({ name, value });
    } else if (name.includes('font') || name.includes('text')) {
      categories['TYPOGRAPHY'].push({ name, value });
    } else {
      categories['OTHER'].push({ name, value });
    }
  }
  
  // Füge Variablen nach Kategorien sortiert hinzu
  for (const [category, variables] of Object.entries(categories)) {
    if (variables.length > 0) {
      consolidatedContent += `\n    /* ================= ${category} ================= */\n`;
      for (const { name, value } of variables) {
        consolidatedContent += `    ${name}: ${value};\n`;
      }
    }
  }
  
  consolidatedContent += `  }
}
`;

  // Schreibe die konsolidierte Datei
  fs.writeFileSync(consolidatedTokensPath, consolidatedContent, 'utf8');
  
  console.log('Token-Konsolidierung abgeschlossen!');
  console.log(`Statistik:`);
  console.log(`- Gesamtzahl konsolidierter Tokens: ${Object.keys(consolidatedTokens).length}`);
  console.log(`- Duplikate zwischen design-tokens.css und default-tokens.css: ${duplicateCount}`);
  console.log(`- Tokens, die nur in default-tokens.css existieren: ${uniqueToDefaultCount}`);
  console.log(`Die konsolidierten Tokens wurden in ${consolidatedTokensPath} gespeichert.`);
}

// Skript ausführen
consolidateTokens(); 