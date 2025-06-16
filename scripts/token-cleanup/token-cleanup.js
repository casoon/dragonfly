/**
 * Token Cleanup Script
 *
 * Dieses Skript bereinigt Duplikate zwischen den Tokens-Dateien im /tokens Verzeichnis.
 * Es konsolidiert die Tokens aus design-tokens.css und default-tokens.css in eine einzige Datei.
 */

const fs = require('node:fs');
const path = require('node:path');

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

    match = variableRegex.exec(content);
    while (match !== null) {
      const name = match[1];
      const value = match[2].trim();
      variables[`--${name}`] = value;
      match = variableRegex.exec(content);
    }

    return variables;
  } catch (error) {
    console.error(`Fehler beim Lesen von ${filePath}:`, error);
    return {};
  }
}

// Funktion zum Vergleichen und Konsolidieren der Variablen
function consolidateTokens() {
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
    COLOR: [],
    SPACE: [],
    SIZE: [],
    RADIUS: [],
    SHADOW: [],
    BREAKPOINT: [],
    CONTAINER: [],
    'Z-INDEX': [],
    TYPOGRAPHY: [],
    OTHER: [],
  };

  for (const [name, value] of Object.entries(consolidatedTokens)) {
    if (name.includes('color')) {
      categories.COLOR.push({ name, value });
    } else if (name.includes('space')) {
      categories.SPACE.push({ name, value });
    } else if (name.includes('size')) {
      categories.SIZE.push({ name, value });
    } else if (name.includes('radius')) {
      categories.RADIUS.push({ name, value });
    } else if (name.includes('shadow')) {
      categories.SHADOW.push({ name, value });
    } else if (name.includes('breakpoint')) {
      categories.BREAKPOINT.push({ name, value });
    } else if (name.includes('container')) {
      categories.CONTAINER.push({ name, value });
    } else if (name.includes('z-index') || name.includes('zIndex')) {
      categories['Z-INDEX'].push({ name, value });
    } else if (name.includes('font') || name.includes('text')) {
      categories.TYPOGRAPHY.push({ name, value });
    } else {
      categories.OTHER.push({ name, value });
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
}

// Skript ausführen
consolidateTokens();
