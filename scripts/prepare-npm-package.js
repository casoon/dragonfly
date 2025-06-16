#!/usr/bin/env node

/**
 * NPM Package Preparation
 *
 * This script prepares the package for publication on npm:
 * - Minifies CSS files (optional)
 * - Creates a production-ready version
 * - Checks if all required files are present
 * - Displays package size and information
 */

const fs = require('node:fs');
const path = require('node:path');
const lightningcss = require('lightningcss');
const pkg = require('../package.json');
const { execSync } = require('node:child_process');

// Configuration
const options = {
  minify: process.argv.includes('--minify'),
  validateOnly: process.argv.includes('--validate'),
  verbose: process.argv.includes('--verbose'),
};

// Colored console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

/**
 * Main function for package preparation
 */
async function preparePackage() {
  const filesStatus = validatePackageFiles();
  validateDependencies();

  // 3. Minify CSS files if requested
  if (options.minify && !options.validateOnly) {
    await minifyCssFiles();
  }
  calculatePackageSize();

  if (filesStatus.missing.length > 0) {
    return false;
  }

  if (!options.validateOnly) {
  }

  return true;
}

/**
 * Validates if all files specified in package.json are present
 */
function validatePackageFiles() {
  const files = pkg.files || [];
  const missing = [];
  const present = [];

  for (const filePattern of files) {
    // Check if the item is a directory, file, or glob pattern
    if (filePattern.endsWith('/')) {
      // Directory
      if (fs.existsSync(filePattern) && fs.statSync(filePattern).isDirectory()) {
        present.push(filePattern);
        if (options.verbose) {
        }
      } else {
        missing.push(filePattern);
      }
    } else if (filePattern.includes('*')) {
    } else {
      // File
      if (fs.existsSync(filePattern)) {
        present.push(filePattern);
        if (options.verbose) {
        }
      } else {
        missing.push(filePattern);
      }
    }
  }

  return { present, missing };
}

/**
 * Validates dependencies in the package
 */
function validateDependencies() {
  const dependencies = pkg.dependencies || {};
  const devDependencies = pkg.devDependencies || {};

  // Check if lightningcss is present as a devDependency (for minification)
  if (options.minify && !devDependencies.lightningcss) {
  } else if (options.minify) {
  }

  // Check production dependencies
  const depCount = Object.keys(dependencies).length;

  if (options.verbose && depCount > 0) {
    for (const [name, version] of Object.entries(dependencies)) {
      // Empty loop body - this was already empty in the original
    }
  }
}

/**
 * Minifies CSS files with lightningcss
 */
async function minifyCssFiles() {
  try {
    const cssFiles = findCssFiles();

    let successCount = 0;
    let errorCount = 0;

    for (const filePath of cssFiles) {
      try {
        const css = fs.readFileSync(filePath, 'utf8');
        const filename = path.basename(filePath);

        const { code } = lightningcss.transform({
          filename,
          code: Buffer.from(css),
          minify: true,
          sourceMap: false,
          targets: {
            chrome: 95,
            firefox: 95,
            safari: 15,
          },
        });

        // Create .min.css file
        const minFilePath = filePath.replace('.css', '.min.css');
        fs.writeFileSync(minFilePath, code);

        successCount++;
        if (options.verbose) {
        }
      } catch (error) {
        errorCount++;
        if (options.verbose) {
          console.error(error);
        }
      }
    }
    if (errorCount > 0) {
    }
  } catch (error) {
    console.error(`\n${colors.red}❌ Error minifying CSS files:${colors.reset}`);
    console.error(error);
  }
}

/**
 * Finds all CSS files in the project
 */
function findCssFiles() {
  const cssFiles = [];
  // Nur CSS-Dateien im dist-Verzeichnis minifizieren
  const targetDir = path.join(path.resolve('.'), 'dist');

  if (fs.existsSync(targetDir)) {
    const files = fs.readdirSync(targetDir);

    for (const file of files) {
      const filePath = path.join(targetDir, file);
      const stat = fs.statSync(filePath);

      if (!stat.isDirectory() && file.endsWith('.css') && !file.endsWith('.min.css')) {
        cssFiles.push(filePath);
      }
    }
  } else {
  }

  return cssFiles;
}

/**
 * Calculates the size of the npm package
 */
function calculatePackageSize() {
  try {
    // Pack the package dry (without actually publishing it)
    const packOutput = execSync('npm pack --dry-run', { encoding: 'utf8' });

    // Extract package size from output
    const sizeMatch = packOutput.match(/package size:\s+([\d.]+)\s+([KMG]B)/i);

    if (sizeMatch) {
      const [, size, unit] = sizeMatch;
    } else {
    }

    // Extract file count from output
    const fileCountMatch = packOutput.match(/(\d+) files?/i);
    if (fileCountMatch) {
    }
  } catch (error) {
    console.error(`  ${colors.red}✗${colors.reset} Error calculating package size`);
    if (options.verbose) {
      console.error(error);
    }
  }
}

// Execute the main function
preparePackage().catch((error) => {
  console.error(`\n${colors.red}❌ Error during package preparation:${colors.reset}`);
  console.error(error);
  process.exit(1);
});
