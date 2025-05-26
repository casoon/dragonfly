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

const fs = require('fs');
const path = require('path');
const lightningcss = require('lightningcss');
const pkg = require('../package.json');
const { execSync } = require('child_process');

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
  console.log(`${colors.cyan}🚀 Preparing npm package for @casoon/ui-lib v${pkg.version}${colors.reset}\n`);
  
  // 1. Check if all required files are present
  console.log(`${colors.blue}📋 Checking files in package...${colors.reset}`);
  const filesStatus = validatePackageFiles();
  
  // 2. Check dependencies
  console.log(`\n${colors.blue}🔍 Checking dependencies...${colors.reset}`);
  validateDependencies();
  
  // 3. Minify CSS files if requested
  if (options.minify && !options.validateOnly) {
    console.log(`\n${colors.blue}🔧 Minifying CSS files...${colors.reset}`);
    await minifyCssFiles();
  }
  
  // 4. Calculate package size
  console.log(`\n${colors.blue}📦 Package information:${colors.reset}`);
  calculatePackageSize();
  
  // 5. Summary
  console.log(`\n${colors.green}✅ Package preparation process completed${colors.reset}`);
  
  if (filesStatus.missing.length > 0) {
    console.log(`\n${colors.yellow}⚠️  Warning: Some files specified in package.json are missing.${colors.reset}`);
    console.log(`   Check the missing files and update the "files" field in package.json.`);
    return false;
  }
  
  if (!options.validateOnly) {
    console.log(`\n${colors.green}🎉 The package is ready for publication!${colors.reset}`);
    console.log(`   Run ${colors.cyan}npm publish${colors.reset} to publish the package.`);
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
  
  files.forEach(filePattern => {
    // Check if the item is a directory, file, or glob pattern
    if (filePattern.endsWith('/')) {
      // Directory
      if (fs.existsSync(filePattern) && fs.statSync(filePattern).isDirectory()) {
        present.push(filePattern);
        if (options.verbose) {
          console.log(`  ${colors.green}✓${colors.reset} Directory found: ${filePattern}`);
        }
      } else {
        missing.push(filePattern);
        console.log(`  ${colors.red}✗${colors.reset} Directory missing: ${filePattern}`);
      }
    } else if (filePattern.includes('*')) {
      // Glob pattern - simplified check
      console.log(`  ${colors.yellow}⚠${colors.reset} Glob patterns are not validated: ${filePattern}`);
    } else {
      // File
      if (fs.existsSync(filePattern)) {
        present.push(filePattern);
        if (options.verbose) {
          console.log(`  ${colors.green}✓${colors.reset} File found: ${filePattern}`);
        }
      } else {
        missing.push(filePattern);
        console.log(`  ${colors.red}✗${colors.reset} File missing: ${filePattern}`);
      }
    }
  });
  
  console.log(`\n  ${present.length} of ${files.length} files/directories present`);
  
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
    console.log(`  ${colors.yellow}⚠${colors.reset} lightningcss is not installed as a devDependency.`);
    console.log(`     Install it with ${colors.cyan}npm install --save-dev lightningcss${colors.reset}`);
  } else if (options.minify) {
    console.log(`  ${colors.green}✓${colors.reset} lightningcss is installed: v${devDependencies.lightningcss}`);
  }
  
  // Check production dependencies
  const depCount = Object.keys(dependencies).length;
  console.log(`  ${colors.green}✓${colors.reset} ${depCount} production dependencies found`);
  
  if (options.verbose && depCount > 0) {
    Object.entries(dependencies).forEach(([name, version]) => {
      console.log(`    - ${name}: ${version}`);
    });
  }
}

/**
 * Minifies CSS files with lightningcss
 */
async function minifyCssFiles() {
  try {
    const cssFiles = findCssFiles();
    console.log(`  Found: ${cssFiles.length} CSS files`);
    
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
            safari: 15
          }
        });
        
        // Create .min.css file
        const minFilePath = filePath.replace('.css', '.min.css');
        fs.writeFileSync(minFilePath, code);
        
        successCount++;
        if (options.verbose) {
          console.log(`  ${colors.green}✓${colors.reset} ${filename} minified`);
        }
      } catch (error) {
        errorCount++;
        console.log(`  ${colors.red}✗${colors.reset} Error minifying ${path.basename(filePath)}`);
        if (options.verbose) {
          console.error(error);
        }
      }
    }
    
    console.log(`\n  ${successCount} of ${cssFiles.length} files successfully minified`);
    if (errorCount > 0) {
      console.log(`  ${colors.red}✗${colors.reset} ${errorCount} files could not be minified`);
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
    console.log(`  ${colors.yellow}⚠${colors.reset} Das dist-Verzeichnis existiert nicht. Keine Dateien zum Minifizieren gefunden.`);
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
      console.log(`  ${colors.green}✓${colors.reset} Estimated package size: ${size} ${unit}`);
    } else {
      console.log(`  ${colors.yellow}⚠${colors.reset} Package size could not be determined`);
    }
    
    // Extract file count from output
    const fileCountMatch = packOutput.match(/(\d+) files?/i);
    if (fileCountMatch) {
      console.log(`  ${colors.green}✓${colors.reset} Included files: ${fileCountMatch[1]}`);
    }
  } catch (error) {
    console.error(`  ${colors.red}✗${colors.reset} Error calculating package size`);
    if (options.verbose) {
      console.error(error);
    }
  }
}

// Execute the main function
preparePackage().catch(error => {
  console.error(`\n${colors.red}❌ Error during package preparation:${colors.reset}`);
  console.error(error);
  process.exit(1);
}); 