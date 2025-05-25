// /scripts/checkContrast.js
const fs = require('fs');
const path = require('path');
const wcag = require('wcag-contrast');
const culori = require('culori');
const cssFilePath = path.resolve(__dirname, '../base/colors.css');

// Function to extract all CSS variables from the file
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

// Function to convert OKLCH to HEX using culori
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

// Helper function for analysis
function analyzeContrast(colorVars, label) {
  const textVars = Object.keys(colorVars).filter(key => /text/.test(key));
  const bgVars = Object.keys(colorVars).filter(key => /background/.test(key));

  console.log(`\nContrast in context: ${label}\n`);
  textVars.forEach(textKey => {
    const fgHex = oklchToHex(colorVars[textKey]);
    if (!fgHex) return;
    bgVars.forEach(bgKey => {
      const bgHex = oklchToHex(colorVars[bgKey]);
      if (!bgHex) return;
      const ratio = wcag.hex(fgHex, bgHex);
      const aa = wcag.isAccessible(ratio, 'AA') ? '✅' : '❌';
      const aaa = wcag.isAccessible(ratio, 'AAA') ? '✅' : '❌';
      console.log(`${textKey} vs ${bgKey}: Contrast ${ratio.toFixed(2)} → AA: ${aa}, AAA: ${aaa}`);
    });
  });
}

// Main program
const cssContent = fs.readFileSync(cssFilePath, 'utf8');
const lightVars = extractColorVariables(cssContent, ':root');
const darkVars = extractColorVariables(cssContent, '.theme-dark');

console.log('WCAG Contrast Analysis (from colors.css):');
analyzeContrast(lightVars, 'Light Theme');
if (Object.keys(darkVars).length > 0) {
  analyzeContrast(darkVars, 'Dark Theme');
} else {
  console.log('\n⚠️ No .theme-dark definitions found in colors.css.');
}
