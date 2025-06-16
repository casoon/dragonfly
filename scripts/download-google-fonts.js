/**
 * Google Fonts Download Script
 *
 * This script downloads Google Fonts and converts them to WOFF2 format
 * for local hosting with the UI library. It also generates individual CSS files
 * for each font in the typography/web-fonts directory if they don't already exist.
 *
 * Requirements:
 * - Node.js
 * - npm packages: axios, fs-extra
 *
 * Install dependencies:
 * npm install axios fs-extra
 */

const axios = require('axios');
const fs = require('fs-extra');
const path = require('node:path');
const { exec } = require('node:child_process');
const util = require('node:util');
const execPromise = util.promisify(exec);

// List of Google Fonts to download
const fonts = [
  {
    name: 'Roboto',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'roboto',
  },
  {
    name: 'Open Sans',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'openSans',
  },
  {
    name: 'Lato',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'lato',
  },
  {
    name: 'Montserrat',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'montserrat',
  },
  {
    name: 'Oswald',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'oswald',
  },
  {
    name: 'Raleway',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'raleway',
  },
  {
    name: 'Poppins',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'poppins',
  },
  {
    name: 'Source Sans Pro',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'sourceSansPro',
  },
  {
    name: 'Roboto Condensed',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'robotoCondensed',
  },
  {
    name: 'Merriweather',
    weights: [400, 700],
    category: 'serif',
    fallback: 'georgia, cambria, serif',
    varName: 'merriweather',
  },
  {
    name: 'Noto Sans',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'notoSans',
  },
  {
    name: 'Ubuntu',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'ubuntu',
  },
  {
    name: 'PT Sans',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'ptSans',
  },
  {
    name: 'Playfair Display',
    weights: [400, 700],
    category: 'serif',
    fallback: 'georgia, cambria, serif',
    varName: 'playfairDisplay',
  },
  {
    name: 'Nunito',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'nunito',
  },
  {
    name: 'Inter',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'inter',
  },
  {
    name: 'Quicksand',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'quicksand',
  },
  {
    name: 'Mukta',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'mukta',
  },
  {
    name: 'Work Sans',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'workSans',
  },
  {
    name: 'Titillium Web',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'titilliumWeb',
  },
  {
    name: 'Cabin',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'cabin',
  },
  {
    name: 'Fira Sans',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'firaSans',
  },
  {
    name: 'Inconsolata',
    weights: [400, 700],
    category: 'monospace',
    fallback: 'ui-monospace, monospace',
    varName: 'inconsolata',
  },
  {
    name: 'Anton',
    weights: [400],
    category: 'display',
    fallback: 'impact, sans-serif',
    varName: 'anton',
  },
  {
    name: 'Bebas Neue',
    weights: [400],
    category: 'display',
    fallback: 'impact, sans-serif',
    varName: 'bebasNeue',
  },
  {
    name: 'Dosis',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'dosis',
  },
  {
    name: 'Arimo',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'arimo',
  },
  {
    name: 'DM Sans',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'dmSans',
  },
  {
    name: 'Josefin Sans',
    weights: [400, 700],
    category: 'sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
    varName: 'josefinSans',
  },
  {
    name: 'Teko',
    weights: [400, 700],
    category: 'display',
    fallback: 'impact, sans-serif',
    varName: 'teko',
  },
];

// Target directories
const fontsDir = path.join(__dirname, '..', 'fonts');
const webFontsDir = path.join(__dirname, '..', 'typography', 'web-fonts');

// Check if woff2_compress is installed
async function checkWoff2Tools() {
  try {
    await execPromise('which woff2_compress');
    return true;
  } catch (error) {
    console.error('woff2_compress not found. Please install the woff2 tools:');
    console.error('On macOS: brew install woff2');
    console.error('On Ubuntu: sudo apt-get install woff2');
    console.error('Or build from source: https://github.com/google/woff2');
    return false;
  }
}

// Check if file exists
async function fileExists(filePath) {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

// Download a font from Google Fonts API
async function downloadFont(font, weight) {
  try {
    // Format font family name for URL
    const formattedName = font.name.replace(/\s+/g, '+');

    // Create URL for Google Fonts API
    const url = `https://fonts.googleapis.com/css2?family=${formattedName}:wght@${weight}&display=swap`;

    // Create file name for the font
    const fileName = font.name.toLowerCase().replace(/\s+/g, '-');
    const weightName = weight === 400 ? 'regular' : weight === 700 ? 'bold' : weight;
    const outputPath = path.join(fontsDir, `${fileName}-${weightName}.woff2`);

    // Check if font already exists
    if (await fileExists(outputPath)) {
      return outputPath;
    }

    // Send request with browser-like headers to prevent API rejection
    const response = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        Accept: 'text/css,*/*;q=0.1',
      },
    });

    // Extract font URL from CSS
    const cssContent = response.data;
    const fontUrlMatch = cssContent.match(/url\(([^)]+\.woff2)\)/);

    if (!fontUrlMatch) {
      throw new Error(`Could not find woff2 URL in CSS for ${font.name} (${weight})`);
    }

    const fontUrl = fontUrlMatch[1];

    // Download font file
    const fontResponse = await axios({
      method: 'get',
      url: fontUrl,
      responseType: 'arraybuffer',
    });

    // Save font file
    await fs.writeFile(outputPath, fontResponse.data);

    return outputPath;
  } catch (error) {
    console.error(`Error downloading ${font.name} (${weight}):`, error.message);
    return null;
  }
}

// Generate CSS file for a font
async function generateCssFile(font) {
  const kebabName = font.name.toLowerCase().replace(/\s+/g, '-');
  const cssFileName = path.join(webFontsDir, `${kebabName}.css`);

  // Check if CSS file already exists
  if (await fileExists(cssFileName)) {
    return;
  }

  let cssContent = `/**
 * ${font.name} Font
 * 
 * This file contains the font-face definitions for ${font.name}.
 * The font is optimized for web performance using WOFF2 format.
 */

@layer typography.webfonts {
  /* ${font.name} */
`;

  // Add @font-face for each weight
  for (const weight of font.weights) {
    const weightName = weight === 400 ? 'regular' : weight === 700 ? 'bold' : weight;
    cssContent += `  @font-face {
    font-family: '${font.name}';
    font-style: normal;
    font-weight: ${weight};
    font-display: swap;
    src: url('/fonts/${kebabName}-${weightName}.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
`;
  }

  // Add variable and utility class
  cssContent += `  /* Font variables */
  :root {
    --font-family-${font.varName}: '${font.name}', ${font.fallback};
  }
  
  /* Font utility class */
  .font-${font.varName} {
    font-family: var(--font-family-${font.varName});
  }
}`;

  // Write CSS file
  await fs.writeFile(cssFileName, cssContent);
}

// Download Inter variable font (special case)
async function downloadInterVariableFont() {
  try {
    const interVarPath = path.join(fontsDir, 'inter-var.woff2');
    const interVarCssPath = path.join(webFontsDir, 'inter-var.css');

    // Check if font file already exists
    if (await fileExists(interVarPath)) {
    } else {
      // Updated URL to a more reliable source
      const interVarUrl =
        'https://github.com/rsms/inter/raw/master/docs/font-files/Inter.var.woff2';

      try {
        const interVarResponse = await axios({
          method: 'get',
          url: interVarUrl,
          responseType: 'arraybuffer',
        });

        await fs.writeFile(interVarPath, interVarResponse.data);
      } catch (downloadError) {
        console.error('Error downloading from GitHub, trying alternate source...');

        // Fallback to Google Fonts CDN
        const alternateCdnUrl =
          'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2';

        const fallbackResponse = await axios({
          method: 'get',
          url: alternateCdnUrl,
          responseType: 'arraybuffer',
        });

        await fs.writeFile(interVarPath, fallbackResponse.data);
      }
    }

    // Check if CSS file already exists
    if (await fileExists(interVarCssPath)) {
      return interVarPath;
    }

    // Create special CSS file for Inter variable font
    const interVarCssContent = `/**
 * Inter Variable Font
 * 
 * This file contains the font-face definition for the Inter variable font.
 * The font is optimized for web performance using WOFF2 format.
 */

@layer typography.webfonts {
  /* Inter Variable Font */
  @font-face {
    font-family: 'Inter var';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('/fonts/inter-var.woff2') format('woff2-variations');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
  /* Font variables */
  :root {
    --font-family-interVar: 'Inter var', system-ui, -apple-system, sans-serif;
  }
  
  /* Font utility class */
  .font-interVar {
    font-family: var(--font-family-interVar);
  }
  
  /* Weight utility classes */
  .font-weight-thin { font-weight: 100; }
  .font-weight-extra-light { font-weight: 200; }
  .font-weight-light { font-weight: 300; }
  .font-weight-regular { font-weight: 400; }
  .font-weight-medium { font-weight: 500; }
  .font-weight-semibold { font-weight: 600; }
  .font-weight-bold { font-weight: 700; }
  .font-weight-extra-bold { font-weight: 800; }
  .font-weight-black { font-weight: 900; }
}`;

    await fs.writeFile(interVarCssPath, interVarCssContent);

    return interVarPath;
  } catch (error) {
    console.error('Error with Inter variable font:', error.message);
    return null;
  }
}

// Main function
async function main() {
  // Check requirements
  const hasWoff2Tools = await checkWoff2Tools();
  if (!hasWoff2Tools) {
    process.exit(1);
  }

  // Create directories if they don't exist
  await fs.ensureDir(fontsDir);
  await fs.ensureDir(webFontsDir);

  // Process each font
  for (const font of fonts) {
    // Download font files
    for (const weight of font.weights) {
      await downloadFont(font, weight);
    }

    // Generate CSS file if it doesn't exist
    await generateCssFile(font);
  }

  // Special case for Inter variable font
  await downloadInterVariableFont();
}

// Run the script
main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
