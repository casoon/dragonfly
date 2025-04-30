// /scripts/checkContrast.js
const fs = require('fs');
const path = require('path');
const wcag = require('wcag-contrast');
const culori = require('culori');
const cssFilePath = path.resolve(__dirname, '../base/colors.css');

// Funktion, um alle CSS-Variablen aus der Datei zu extrahieren
function extractColorVariables(cssText, scope = ':root') {
  const blockRegex = new RegExp(`${scope}\s*{([^}]*)}`, 'g');
  const blockMatch = [...cssText.matchAll(blockRegex)].map(m => m[1]).join('\n');
  const varRegex = /--(color-[\w-]+):\s*([^;]+);/g;
  const variables = {};
  let match;
  while ((match = varRegex.exec(blockMatch)) !== null) {
    variables[match[1]] = match[2].trim();
  }
  return variables;
}

// Funktion, um OKLCH in HEX umzuwandeln mit culori
function oklchToHex(oklchValue) {
  try {
    const parsed = culori.parse(oklchValue);
    const rgb = culori.convertRgb(parsed);
    if (!rgb || isNaN(rgb.r) || isNaN(rgb.g) || isNaN(rgb.b)) return null;
    return culori.formatHex(rgb);
  } catch (e) {
    return null;
  }
}

// Hilfsfunktion für die Analyse
function analyzeContrast(colorVars, label) {
  const textVars = Object.keys(colorVars).filter(key => /text/.test(key));
  const bgVars = Object.keys(colorVars).filter(key => /background/.test(key));

  console.log(`\nKontraste im Kontext: ${label}\n`);
  textVars.forEach(textKey => {
    const fgHex = oklchToHex(colorVars[textKey]);
    if (!fgHex) return;
    bgVars.forEach(bgKey => {
      const bgHex = oklchToHex(colorVars[bgKey]);
      if (!bgHex) return;
      const ratio = wcag.hex(fgHex, bgHex);
      const aa = wcag.isAccessible(ratio, 'AA') ? '✅' : '❌';
      const aaa = wcag.isAccessible(ratio, 'AAA') ? '✅' : '❌';
      console.log(`${textKey} vs ${bgKey}: Kontrast ${ratio.toFixed(2)} → AA: ${aa}, AAA: ${aaa}`);
    });
  });
}

// Hauptprogramm
const cssContent = fs.readFileSync(cssFilePath, 'utf8');
const lightVars = extractColorVariables(cssContent, ':root');
const darkVars = extractColorVariables(cssContent, '.theme-dark');

console.log('WCAG Kontrastanalyse (aus colors.css):');
analyzeContrast(lightVars, 'Light Theme');
if (Object.keys(darkVars).length > 0) {
  analyzeContrast(darkVars, 'Dark Theme');
} else {
  console.log('\n⚠️ Keine .theme-dark Definitionen in colors.css gefunden.');
}
