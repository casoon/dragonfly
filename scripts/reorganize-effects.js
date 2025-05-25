#!/usr/bin/env node

/**
 * Reorganize Effects Folder Structure
 * 
 * This script reorganizes the effects folder structure according to the plan in todo.md.
 * It moves CSS files into their appropriate subdirectories based on functional aspects.
 */

const fs = require('fs');
const path = require('path');

// Define the structure for moving files
const fileStructure = {
  motion: [
    'animations.css',
    'loading.css',
    'morph.css',
    'ripple.css',
    'scroll.css',
    'transitions.css',
    'typing.css'
  ],
  visual: [
    'glow.css',
    'neon.css',
    'noise.css',
    'shadows.css',
    'filters.css',
    'patterns.css',
    'reflections.css',
    'glass.css',
    'light.css',
    'shine.css',
    'vignette.css',
    'sparkle.css',
    'textures.css'
  ],
  interaction: [
    'hover.css',
    'active.css',
    'focus.css',
    'disabled.css',
    'error.css',
    'interactions.css',
    'cursors.css',
    'success.css',
    'warning.css'
  ],
  'layout-effects': [
    'clip-path.css',
    'overlays.css',
    'outlines.css',
    'masks.css',
    'backdrops.css',
    'transforms.css',
    'skeleton.css'
  ],
  themes: [
    'neumorphism.css',
    'neos.css',
    'gradient.css',
    'gradients.css',
    'blends.css',
    '3d.css'
  ],
  particles: [
    'particles.css'
  ]
};

// Base directory for effects
const effectsDir = path.join(__dirname, '..', 'effects');

// Function to move files
function moveFile(file, targetDir) {
  const sourcePath = path.join(effectsDir, file);
  const targetPath = path.join(effectsDir, targetDir, file);
  
  if (fs.existsSync(sourcePath)) {
    try {
      // Create a backup copy
      const backupPath = sourcePath + '.bak';
      fs.copyFileSync(sourcePath, backupPath);
      console.log(`✅ Created backup: ${backupPath}`);
      
      // Move the file
      fs.renameSync(sourcePath, targetPath);
      console.log(`✅ Moved: ${file} -> ${targetDir}/${file}`);
    } catch (error) {
      console.error(`❌ Error moving ${file}: ${error.message}`);
    }
  } else {
    console.warn(`⚠️ File not found: ${file}`);
  }
}

// Move README.md to the effects root directory if it exists
const readmePath = path.join(effectsDir, 'README.md');
if (fs.existsSync(readmePath)) {
  try {
    const backupPath = readmePath + '.bak';
    fs.copyFileSync(readmePath, backupPath);
    console.log(`✅ Created backup of README.md`);
  } catch (error) {
    console.error(`❌ Error backing up README.md: ${error.message}`);
  }
}

// Process each category
console.log('Starting effects directory reorganization...');
for (const [category, files] of Object.entries(fileStructure)) {
  console.log(`\n📁 Processing category: ${category}`);
  
  // Make sure the target directory exists
  const targetDir = path.join(effectsDir, category);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`✅ Created directory: ${category}`);
  }
  
  // Move each file
  for (const file of files) {
    moveFile(file, category);
  }
}

console.log('\n🎉 Effects directory reorganization completed!');
console.log('Please review the changes and delete .bak files if everything looks good.'); 