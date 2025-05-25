const fs = require('fs');
const path = require('path');

// Path to the existing colors.css
const inputFile = path.resolve(__dirname, '../base/colors.css');
const outputFile = path.resolve(__dirname, '../base/color-mix.css');

const css = fs.readFileSync(inputFile, 'utf8');

// Search for all --color-*-500 variables
const baseColorRegex = /--color-([a-z0-9-]+)-500:\s*([^\n;]+);/gi;

let output = `/**\n * Auto-generated with generateColorMixes.js\n * base/colors.css\n */\n\n:root {\n`;

for (const match of css.matchAll(baseColorRegex)) {
  const name = match[1]; // e.g. "blue"
  const baseVar = `--color-${name}-500`;

  output += `  /* ${name} */\n`;
  output += `  --${name}-lightest: color-mix(in srgb, var(${baseVar}) 20%, white);\n`;
  output += `  --${name}-lighter: color-mix(in srgb, var(${baseVar}) 40%, white);\n`;
  output += `  --${name}-light: color-mix(in srgb, var(${baseVar}) 70%, white);\n`;
  output += `  --${name}: var(${baseVar});\n`;
  output += `  --${name}-dark: color-mix(in srgb, var(${baseVar}) 70%, black);\n`;
  output += `  --${name}-darker: color-mix(in srgb, var(${baseVar}) 40%, black);\n`;
  output += `  --${name}-darkest: color-mix(in srgb, var(${baseVar}) 20%, black);\n\n`;
}

output += `}\n`;

fs.writeFileSync(outputFile, output);
console.log(`✅ Color variants generated in: ${outputFile}`);
