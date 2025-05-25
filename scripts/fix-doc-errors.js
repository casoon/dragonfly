#!/usr/bin/env node

/**
 * Fixes errors in documentation generation
 * 
 * This script resolves issues that occurred during documentation generation:
 * 1. Removes invalid files (*.md)
 * 2. Corrects dates from 2025 to 2024
 */

const fs = require('fs');
const path = require('path');

// Directories
const docsBaseDir = 'docs';

// Function to recursively search directories for MD files
function findMdFiles(dir) {
  const result = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        const subDirFiles = findMdFiles(itemPath);
        result.push(...subDirFiles);
      } else if (itemPath.endsWith('.md')) {
        result.push(itemPath);
      }
    }
  } catch (error) {
    console.error(`Error searching directory ${dir}:`, error);
  }
  
  return result;
}

// Find all MD files
const mdFiles = findMdFiles(docsBaseDir);
console.log(`🔍 Found ${mdFiles.length} markdown files.`);

// Identify problematic files
const invalidFiles = mdFiles.filter(file => {
  const baseName = path.basename(file);
  return baseName === '*.md';
});

// Delete invalid files
invalidFiles.forEach(file => {
  try {
    fs.unlinkSync(file);
    console.log(`🗑️ Deleted: ${file}`);
  } catch (error) {
    console.error(`❌ Error deleting ${file}:`, error);
  }
});

// Correct incorrect date references (2025 -> 2024)
mdFiles.filter(file => !invalidFiles.includes(file)).forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix incorrect 2025 dates
    if (content.includes('.2025')) {
      content = content.replace(/(\d{2}\.\d{2}\.)2025/g, '$12024');
      fs.writeFileSync(file, content);
      console.log(`📅 Date corrected: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error correcting date in ${file}:`, error);
  }
});

console.log('\n✨ Documentation issues resolved!'); 