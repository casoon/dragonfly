/**
 * Token Generator
 * 
 * Generates design tokens from JSON source files and exports them in multiple formats:
 * - CSS variables
 * - SCSS variables
 * - JavaScript constants
 * 
 * Usage:
 * node generateTokens.js --format=css,scss,js --output=../tokens
 */

const fs = require('fs');
const path = require('path');
const { program } = require('commander');

// Configure CLI options
program
  .option('-f, --format <formats>', 'Output formats (comma separated): css,scss,js', 'css')
  .option('-o, --output <directory>', 'Output directory', '../tokens')
  .option('-i, --input <directory>', 'Input directory with JSON token files', './token-definitions')
  .option('-t, --theme <theme>', 'Theme to generate (default, dark, etc.)', 'default')
  .parse(process.argv);

const options = program.opts();
const formats = options.format.split(',');
const outputDir = path.resolve(__dirname, options.output);
const inputDir = path.resolve(__dirname, options.input);
const themeName = options.theme;

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created output directory: ${outputDir}`);
}

// Create input directory for examples if it doesn't exist
if (!fs.existsSync(inputDir)) {
  fs.mkdirSync(inputDir, { recursive: true });
  console.log(`Created input directory: ${inputDir}`);
  
  // Create example JSON token files
  createExampleTokenFiles(inputDir);
}

// Main function to generate tokens
function generateTokens() {
  console.log('Generating design tokens...');
  
  // Load all token JSON files
  const tokenFiles = fs.readdirSync(inputDir)
    .filter(file => file.endsWith('.json'));
  
  if (tokenFiles.length === 0) {
    console.error('No token JSON files found in the input directory!');
    console.log(`Please add JSON token files to: ${inputDir}`);
    return;
  }
  
  // Process each token file
  const allTokens = {};
  
  tokenFiles.forEach(file => {
    const filePath = path.join(inputDir, file);
    const tokenType = path.basename(file, '.json'); // e.g., 'colors', 'typography'
    
    try {
      const tokenData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      allTokens[tokenType] = tokenData;
      console.log(`Loaded tokens from: ${file}`);
    } catch (error) {
      console.error(`Error loading ${file}: ${error.message}`);
    }
  });
  
  // Generate output files in requested formats
  formats.forEach(format => {
    switch (format.trim().toLowerCase()) {
      case 'css':
        generateCssTokens(allTokens);
        break;
      case 'scss':
        generateScssTokens(allTokens);
        break;
      case 'js':
        generateJsTokens(allTokens);
        break;
      default:
        console.warn(`Unsupported format: ${format}`);
    }
  });
  
  console.log('✅ Token generation complete!');
}

// Generate CSS Variables
function generateCssTokens(allTokens) {
  let css = `/**
 * Design Tokens - ${themeName} theme
 * Auto-generated with generateTokens.js
 */

@layer tokens {
  :root {
`;

  // Process each token category
  Object.entries(allTokens).forEach(([category, tokens]) => {
    css += `\n    /* ================= ${category.toUpperCase()} ================= */\n`;
    
    // Process the tokens recursively and build the CSS
    css = processTokensForCss(tokens, css, '');
  });

  css += `  }\n}\n`;
  
  // Write to file
  const outputPath = path.join(outputDir, `${themeName}-tokens.css`);
  fs.writeFileSync(outputPath, css);
  console.log(`Generated CSS tokens: ${outputPath}`);
}

// Helper to process tokens recursively for CSS
function processTokensForCss(tokens, output, prefix) {
  let result = output;
  
  Object.entries(tokens).forEach(([key, value]) => {
    const cssVarName = prefix ? `${prefix}-${key}` : `--${key}`;
    
    if (typeof value === 'object' && value !== null) {
      // Recursive processing for nested objects
      result = processTokensForCss(value, result, cssVarName);
    } else {
      // Add the CSS variable to the output string
      result += `    ${cssVarName}: ${value};\n`;
    }
  });
  
  return result;
}

// Generate SCSS Variables
function generateScssTokens(allTokens) {
  let scss = `/**
 * Design Tokens - ${themeName} theme
 * Auto-generated with generateTokens.js
 */

// SCSS Variables

`;

  // Process each token category
  Object.entries(allTokens).forEach(([category, tokens]) => {
    scss += `// ================= ${category.toUpperCase()} =================\n`;
    
    // Process tokens to SCSS format
    scss = processTokensForScss(tokens, scss, category);
  });
  
  // Write to file
  const outputPath = path.join(outputDir, `${themeName}-tokens.scss`);
  fs.writeFileSync(outputPath, scss);
  console.log(`Generated SCSS tokens: ${outputPath}`);
}

// Helper to process tokens recursively for SCSS
function processTokensForScss(tokens, output, prefix) {
  let result = output;
  
  if (typeof tokens === 'object' && tokens !== null) {
    // Create a SCSS map for objects
    result += `$${prefix}: (\n`;
    
    Object.entries(tokens).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Handle nested objects
        result += `  '${key}': (\n`;
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (typeof subValue === 'object' && subValue !== null) {
            // Even deeper nesting - create another map
            result += `    '${subKey}': (\n`;
            Object.entries(subValue).forEach(([deepKey, deepValue]) => {
              result += `      '${deepKey}': ${deepValue},\n`;
            });
            result += `    ),\n`;
          } else {
            result += `    '${subKey}': ${subValue},\n`;
          }
        });
        result += `  ),\n`;
      } else {
        result += `  '${key}': ${value},\n`;
      }
    });
    
    result += `);\n\n`;
  } else {
    result += `$${prefix}: ${tokens};\n`;
  }
  
  return result;
}

// Generate JavaScript Constants
function generateJsTokens(allTokens) {
  let js = `/**
 * Design Tokens - ${themeName} theme
 * Auto-generated with generateTokens.js
 */

// JavaScript Constants

`;

  // Convert to JS object notation
  js += `const ${themeName}Tokens = ${JSON.stringify(allTokens, null, 2)};\n\n`;
  js += `export default ${themeName}Tokens;\n`;
  
  // Write to file
  const outputPath = path.join(outputDir, `${themeName}-tokens.js`);
  fs.writeFileSync(outputPath, js);
  console.log(`Generated JavaScript tokens: ${outputPath}`);
}

// Create example JSON token files
function createExampleTokenFiles(directory) {
  // Example colors
  const colors = {
    color: {
      primary: {
        50: "#e6f0ff",
        100: "#cce0ff",
        200: "#99c2ff",
        300: "#66a3ff",
        400: "#3385ff",
        500: "#0066ff",
        600: "#0052cc",
        700: "#003d99",
        800: "#002966",
        900: "#001433"
      },
      secondary: {
        50: "#eeeaff",
        100: "#dcd6ff",
        200: "#baadff",
        300: "#9784ff",
        400: "#755cff",
        500: "#5333ff",
        600: "#4229cc",
        700: "#321f99",
        800: "#211566",
        900: "#110a33"
      },
      success: {
        500: "#10b981"
      },
      warning: {
        500: "#f59e0b"
      },
      error: {
        500: "#ef4444"
      },
      neutral: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      }
    }
  };

  // Example typography
  const typography = {
    font: {
      family: {
        base: "system-ui, sans-serif",
        mono: "ui-monospace, monospace"
      },
      size: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem"
      },
      weight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        normal: "1.5",
        loose: "2"
      }
    }
  };

  // Example spacing
  const spacing = {
    space: {
      px: "1px",
      0.5: "0.125rem",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem"
    }
  };

  // Write example files
  fs.writeFileSync(path.join(directory, 'colors.json'), JSON.stringify(colors, null, 2));
  fs.writeFileSync(path.join(directory, 'typography.json'), JSON.stringify(typography, null, 2));
  fs.writeFileSync(path.join(directory, 'spacing.json'), JSON.stringify(spacing, null, 2));
  
  console.log('Created example token JSON files');
}

// Run the token generator
generateTokens(); 