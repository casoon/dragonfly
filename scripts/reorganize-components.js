#!/usr/bin/env node

/**
 * Reorganize Components Folder Structure
 * 
 * This script reorganizes the components folder structure according to the plan in todo.md.
 * It separates UI elements from UI components by creating a new folder structure.
 */

const fs = require('fs');
const path = require('path');

// Define the structure for moving files
const fileStructure = {
  elements: {
    // Basic UI elements (atoms)
    path: 'elements',
    files: [
      'button.css',
      'input.css',
      'textarea.css',
      'select.css',
      'checkbox.css',
      'radio.css',
      'switch.css',
      'slider.css',
      'avatar.css',
      'badge.css',
      'chip.css',
      'spinner.css',
      'progress.css'
    ]
  },
  components: {
    // Complex UI components (molecules/organisms)
    path: 'components',
    files: [
      'card.css',
      'alert.css',
      'modal.css',
      'tooltip.css',
      'popover.css',
      'toast.css',
      'notification.css',
      'tabs.css',
      'file.css',
      'input-group.css',
      'forms.css',
      'table.css',
      'wizard.css',
      'hamburger.css'
    ]
  },
  layout: {
    // Layout-specific components
    path: 'layout',
    files: [
      'header.css',
      'footer.css',
      'sidebar.css',
      'content.css'
    ]
  },
  patterns: {
    // UI patterns
    path: 'patterns',
    files: [
      'blog.css',
      'tags.css',
      'code.css',
      'widget.css',
      'skeleton.css'
    ]
  }
};

// Base directories
const componentsDir = path.join(__dirname, '..', 'components');
const uiDir = path.join(__dirname, '..', 'ui');

// Function to move files
function moveFile(file, sourcePath, targetPath) {
  const sourceFilePath = path.join(sourcePath, file);
  const targetFilePath = path.join(targetPath, file);
  
  if (fs.existsSync(sourceFilePath)) {
    try {
      // Create a backup copy
      const backupPath = sourceFilePath + '.bak';
      fs.copyFileSync(sourceFilePath, backupPath);
      console.log(`✅ Created backup: ${backupPath}`);
      
      // Ensure target directory exists
      fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
      
      // Move the file
      fs.copyFileSync(sourceFilePath, targetFilePath);
      console.log(`✅ Copied: ${file} -> ${targetFilePath}`);
    } catch (error) {
      console.error(`❌ Error moving ${file}: ${error.message}`);
    }
  } else {
    console.warn(`⚠️ File not found: ${sourceFilePath}`);
  }
}

// Create UI directory if it doesn't exist
if (!fs.existsSync(uiDir)) {
  fs.mkdirSync(uiDir, { recursive: true });
  console.log(`✅ Created UI directory: ${uiDir}`);
}

// Backup README.md if it exists
const readmePath = path.join(componentsDir, 'README.md');
if (fs.existsSync(readmePath)) {
  try {
    const backupPath = readmePath + '.bak';
    fs.copyFileSync(readmePath, backupPath);
    console.log(`✅ Created backup of components/README.md`);
    
    // Copy README to new UI directory
    fs.copyFileSync(readmePath, path.join(uiDir, 'README.md'));
    console.log(`✅ Copied README.md to ui/ directory`);
  } catch (error) {
    console.error(`❌ Error backing up README.md: ${error.message}`);
  }
}

// Process each category
console.log('Starting components directory reorganization...');
for (const [category, config] of Object.entries(fileStructure)) {
  console.log(`\n📁 Processing category: ${category}`);
  
  // Make sure the target directory exists
  const targetDir = path.join(uiDir, config.path);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`✅ Created directory: ${targetDir}`);
  }
  
  // Move each file
  for (const file of config.files) {
    moveFile(file, componentsDir, targetDir);
  }
}

console.log('\n🎉 Components directory reorganization completed!');
console.log('Please review the changes. Original files still exist in the components directory.');
console.log('After verifying, you can remove the original files or keep the dual structure during transition.'); 