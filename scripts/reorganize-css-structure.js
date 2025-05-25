#!/usr/bin/env node

/**
 * Reorganize CSS Structure
 * 
 * This script reorganizes the top-level CSS files into a more structured organization.
 * It moves CSS files into appropriate subdirectories based on their functionality.
 */

const fs = require('fs');
const path = require('path');

// Base directory
const baseDir = path.join(__dirname, '..');

// Define the structure for CSS files reorganization
const cssStructure = {
  base: {
    files: [
      'base.css',
      'reset.css',
      'tokens.css',
      'layers.css',
      'custom-properties.css',
      'core.css' // core.css stays in root, but we include a reference here for documentation
    ],
    keepInRoot: ['core.css'] // Files that should stay in the root directory
  },
  layout: {
    files: [
      'layout.css',
      'layout.queries.css',
      'grid.css',
      'flex.css',
      'container.css'
    ]
  },
  typography: {
    files: [
      'typography.css',
      'fonts.css',
      'text.css'
    ]
  },
  utility: {
    files: [
      'utilities.css',
      'colors.css',
      'spacing.css',
      'accessibility.css',
      'smooth-scroll.css'
    ]
  },
  animation: {
    files: [
      'animations.css'
    ]
  },
  effect: {
    files: [
      'effects.css'
    ]
  },
  theme: {
    files: [
      'themes.css'
    ]
  },
  icon: {
    files: [
      'icons.css'
    ]
  }
};

// Function to move CSS files
function moveFile(file, targetDir, keepInRoot = false) {
  const sourcePath = path.join(baseDir, file);
  
  // Skip if file doesn't exist
  if (!fs.existsSync(sourcePath)) {
    console.warn(`⚠️ File not found: ${file}`);
    return;
  }
  
  try {
    // Create a backup
    const backupPath = sourcePath + '.bak';
    fs.copyFileSync(sourcePath, backupPath);
    console.log(`✅ Created backup: ${backupPath}`);
    
    // Create the target directory if it doesn't exist
    const targetDirPath = path.join(baseDir, targetDir);
    if (!fs.existsSync(targetDirPath)) {
      fs.mkdirSync(targetDirPath, { recursive: true });
      console.log(`✅ Created directory: ${targetDirPath}`);
    }
    
    // Move the file to the target directory if not keepInRoot
    if (!keepInRoot) {
      const targetPath = path.join(targetDirPath, file);
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Copied: ${file} -> ${targetDir}/${file}`);
      
      // We're not deleting the original file yet, just keeping a copy in the new location
    } else {
      console.log(`ℹ️ Keeping ${file} in root directory`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}: ${error.message}`);
  }
}

// Function to update import paths in core.css
function updateCoreImports() {
  console.log('\nUpdating import paths in core.css...');
  
  const coreFile = path.join(baseDir, 'core.css');
  
  if (!fs.existsSync(coreFile)) {
    console.warn('⚠️ core.css not found. Skipping update.');
    return;
  }
  
  try {
    // Read current content
    const content = fs.readFileSync(coreFile, 'utf8');
    
    // Update import paths
    let newContent = content
      // Update base imports
      .replace('@import "./base.css";', '@import "./base/base.css";')
      .replace('@import "./reset.css";', '@import "./base/reset.css";')
      .replace('@import "./tokens.css";', '@import "./base/tokens.css";')
      .replace('@import "./layers.css";', '@import "./base/layers.css";')
      .replace('@import "./custom-properties.css";', '@import "./base/custom-properties.css";')
      
      // Update layout imports
      .replace('@import "./layout.css";', '@import "./layout/layout.css";')
      .replace('@import "./layout.queries.css";', '@import "./layout/layout.queries.css";')
      .replace('@import "./grid.css";', '@import "./layout/grid.css";')
      .replace('@import "./flex.css";', '@import "./layout/flex.css";')
      .replace('@import "./container.css";', '@import "./layout/container.css";')
      
      // Update typography imports
      .replace('@import "./typography.css";', '@import "./typography/typography.css";')
      .replace('@import "./fonts.css";', '@import "./typography/fonts.css";')
      .replace('@import "./text.css";', '@import "./typography/text.css";')
      
      // Update utility imports
      .replace('@import "./utilities.css";', '@import "./utility/utilities.css";')
      .replace('@import "./colors.css";', '@import "./utility/colors.css";')
      .replace('@import "./spacing.css";', '@import "./utility/spacing.css";')
      .replace('@import "./accessibility.css";', '@import "./utility/accessibility.css";')
      .replace('@import "./smooth-scroll.css";', '@import "./utility/smooth-scroll.css";')
      
      // Update animation imports
      .replace('@import "./animations.css";', '@import "./animation/animations.css";')
      
      // Update effects imports
      .replace('@import "./effects.css";', '@import "./effect/effects.css";')
      
      // Update themes imports
      .replace('@import "./themes.css";', '@import "./theme/themes.css";')
      
      // Update icons imports
      .replace('@import "./icons.css";', '@import "./icon/icons.css";');
    
    // Make a backup
    fs.copyFileSync(coreFile, coreFile + '.structure.bak');
    console.log(`✅ Created additional backup: ${coreFile}.structure.bak`);
    
    // Write updated content
    fs.writeFileSync(coreFile, newContent);
    console.log(`✅ Updated import paths in core.css`);
  } catch (error) {
    console.error(`❌ Error updating core.css: ${error.message}`);
  }
}

// Main execution
console.log('Starting CSS files reorganization...');

// Process each category
for (const [category, config] of Object.entries(cssStructure)) {
  console.log(`\n📁 Processing category: ${category}`);
  
  // Move each file in the category
  for (const file of config.files) {
    const keepInRoot = config.keepInRoot && config.keepInRoot.includes(file);
    moveFile(file, category, keepInRoot);
  }
}

// Update import paths in core.css
updateCoreImports();

console.log('\n🎉 CSS files reorganization completed!');
console.log('Please review the changes and test the imports.');
console.log('Note: Original files are kept in the root directory with backups (.bak).');
console.log('After verification, you can remove the original files if desired.'); 