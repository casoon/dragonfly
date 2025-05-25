#!/usr/bin/env node

/**
 * Update UI CSS Structure
 * 
 * This script updates the ui.css file to reflect the new folder structure
 * and moves it to the ui/ directory.
 */

const fs = require('fs');
const path = require('path');

// Base directory
const baseDir = path.join(__dirname, '..');

// Function to update ui.css
function updateUICSS() {
  console.log('Updating ui.css and moving it to ui/ directory...');
  
  const uiFile = path.join(baseDir, 'ui.css');
  const uiDir = path.join(baseDir, 'ui');
  
  if (!fs.existsSync(uiFile)) {
    console.warn('⚠️ ui.css not found. Skipping update.');
    return;
  }
  
  try {
    // Create a backup
    const backupPath = uiFile + '.bak';
    fs.copyFileSync(uiFile, backupPath);
    console.log(`✅ Created backup: ${backupPath}`);
    
    // Read current content
    const content = fs.readFileSync(uiFile, 'utf8');
    
    // Create the new file in the ui/ directory
    const newUiFilePath = path.join(uiDir, 'ui.css');
    fs.writeFileSync(newUiFilePath, content);
    console.log(`✅ Copied ui.css to ui/ directory`);
  } catch (error) {
    console.error(`❌ Error updating ui.css: ${error.message}`);
  }
}

// Function to update core.css to reference the new ui.css location
function updateCoreImports() {
  console.log('\nUpdating import paths in core.css for ui.css...');
  
  const coreFile = path.join(baseDir, 'core.css');
  
  if (!fs.existsSync(coreFile)) {
    console.warn('⚠️ core.css not found. Skipping update.');
    return;
  }
  
  try {
    // Read current content
    const content = fs.readFileSync(coreFile, 'utf8');
    
    // Update import paths
    let newContent = content.replace(
      '@import "./ui.css";',
      '@import "./ui/ui.css";'
    );
    
    // Make a backup
    const backupPath = coreFile + '.ui.bak';
    fs.copyFileSync(coreFile, backupPath);
    console.log(`✅ Created additional backup: ${backupPath}`);
    
    // Write updated content
    fs.writeFileSync(coreFile, newContent);
    console.log(`✅ Updated import path for ui.css in core.css`);
  } catch (error) {
    console.error(`❌ Error updating core.css: ${error.message}`);
  }
}

// Main execution
console.log('Starting UI CSS update...');

// Update ui.css
updateUICSS();

// Update core.css
updateCoreImports();

console.log('\n🎉 UI CSS update completed!');
console.log('Please review the changes and test the imports.'); 