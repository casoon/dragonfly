#!/usr/bin/env node

'use strict';

/**
 * This script updates the information about the last modification date
 * in all documentation files. The date can be passed manually as an argument
 * or will be automatically set to today's date.
 * 
 * Usage:
 * - node scripts/update-doc-versions.js                 # Uses the current date
 * - node scripts/update-doc-versions.js "DD.MM.YYYY"    # Uses the specified date
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// File mappings between documentation and CSS files
const docToCssMap = {
  'docs/effects/animations.md': 'effects/animations.css',
  'docs/effects/overlays.md': 'effects/overlays.css',
  'docs/effects/neumorphism.md': 'effects/neumorphism.css',
  'docs/effects/transitions.md': 'effects/transitions.css'
  // More mappings can be added here
};

// Determine the date to use (from command line or current date)
function getDateToUse() {
  // Check if a date was passed as an argument
  const dateArg = process.argv[2];
  if (dateArg) {
    // Try to parse the passed date
    const datePattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const match = dateArg.match(datePattern);
    
    if (match) {
      const [, day, month, year] = match;
      const date = new Date(year, month - 1, day);
      
      if (!isNaN(date)) {
        return date;
      }
    }
    
    console.warn(`Invalid date format: ${dateArg}, using current date instead.`);
  }
  
  // No valid argument passed, use current date
  return new Date();
}

// Format the date in a user-friendly way
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
}

// Find all markdown files in the docs directory
async function findMarkdownFiles(dir) {
  const files = [];
  
  async function scan(directory) {
    const entries = await readdir(directory);
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry);
      const stats = await stat(fullPath);
      
      if (stats.isDirectory()) {
        await scan(fullPath);
      } else if (stats.isFile() && entry.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }
  
  await scan(dir);
  return files;
}

// Update the "Last Modified" information in a markdown file
async function updateLastModifiedInFile(file, date) {
  try {
    const content = await readFile(file, 'utf8');
    const lines = content.split('\n');
    
    // Check if the file starts with a markdown heading
    if (lines.length > 0 && lines[0].startsWith('# ')) {
      let updated = false;
      const formattedDate = formatDate(date);
      
      // Check if a "Last Modified" information already exists
      const lastModifiedIndex = lines.findIndex(line => line.startsWith('> Last Modified:'));
      
      if (lastModifiedIndex !== -1) {
        // Update existing date information
        lines[lastModifiedIndex] = `> Last Modified: ${formattedDate}`;
        updated = true;
      } else {
        // Check if a version line exists that should be replaced
        const versionIndex = lines.findIndex(line => line.startsWith('> Version:'));
        
        if (versionIndex !== -1) {
          // Replace version line with date information
          lines[versionIndex] = `> Last Modified: ${formattedDate}`;
          updated = true;
        } else {
          // Add new date information after the heading
          lines.splice(1, 0, `> Last Modified: ${formattedDate}`, '');
          updated = true;
        }
      }
      
      if (updated) {
        await writeFile(file, lines.join('\n'), 'utf8');
        console.log(`✅ Updated: ${path.relative(process.cwd(), file)} (${formattedDate})`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error updating ${file}:`, error);
    return false;
  }
}

// Main function
async function main() {
  try {
    // Determine the date to use
    const dateToUse = getDateToUse();
    const formattedDate = formatDate(dateToUse);
    
    console.log(`🔄 Updating "Last Modified" information to ${formattedDate}...`);
    
    const docsDir = path.join(process.cwd(), 'docs');
    const markdownFiles = await findMarkdownFiles(docsDir);
    
    console.log(`🔍 Found ${markdownFiles.length} markdown files.`);
    
    let updatedCount = 0;
    
    for (const file of markdownFiles) {
      const wasUpdated = await updateLastModifiedInFile(file, dateToUse);
      if (wasUpdated) updatedCount++;
    }
    
    console.log(`\n✨ Done! Updated ${updatedCount} of ${markdownFiles.length} files.`);
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    process.exit(1);
  }
}

main(); 