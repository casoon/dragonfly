#!/usr/bin/env node

/**
 * Update Effects CSS Structure
 * 
 * This script updates the effects.css file to reflect the new folder structure
 * and moves it to the effect/ directory.
 */

const fs = require('fs');
const path = require('path');

// Base directory
const baseDir = path.join(__dirname, '..');

// Function to update effects.css
function updateEffectsCSS() {
  console.log('Updating effects.css and moving it to effect/ directory...');
  
  const effectsFile = path.join(baseDir, 'effects.css');
  const effectDir = path.join(baseDir, 'effect');
  
  if (!fs.existsSync(effectsFile)) {
    console.warn('⚠️ effects.css not found. Skipping update.');
    return;
  }
  
  try {
    // Create a backup
    const backupPath = effectsFile + '.bak';
    fs.copyFileSync(effectsFile, backupPath);
    console.log(`✅ Created backup: ${backupPath}`);
    
    // Read current content
    const content = fs.readFileSync(effectsFile, 'utf8');
    
    // Create the effect directory if it doesn't exist
    if (!fs.existsSync(effectDir)) {
      fs.mkdirSync(effectDir, { recursive: true });
      console.log(`✅ Created directory: ${effectDir}`);
    }
    
    // Create the new file in the effect/ directory
    const newEffectsFilePath = path.join(effectDir, 'effects.css');
    fs.writeFileSync(newEffectsFilePath, content);
    console.log(`✅ Copied effects.css to effect/ directory`);
  } catch (error) {
    console.error(`❌ Error updating effects.css: ${error.message}`);
  }
}

// Main execution
console.log('Starting Effects CSS update...');

// Update effects.css
updateEffectsCSS();

console.log('\n🎉 Effects CSS update completed!');
console.log('Please review the changes and test the imports.'); 