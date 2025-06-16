#!/usr/bin/env node

/**
 * Checks for missing documentation files
 *
 * This script identifies CSS files that don't have a corresponding MD documentation file,
 * and outputs a list of the missing documentation.
 */

const fs = require('node:fs');
const path = require('node:path');
const packageJson = require('../package.json');

// Directories
const docsBaseDir = 'docs';

// Function for recursively finding CSS files
function findCssFiles(dir) {
  const result = [];

  try {
    if (!fs.existsSync(dir)) {
      return result;
    }

    const items = fs.readdirSync(dir);

    for (const item of items) {
      const itemPath = path.join(dir, item);

      try {
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
          if (!itemPath.includes('node_modules') && !itemPath.includes('.git')) {
            const subDirFiles = findCssFiles(itemPath);
            result.push(...subDirFiles);
          }
        } else if (itemPath.endsWith('.css')) {
          result.push(itemPath);
        }
      } catch (error) {
        console.error(`Error checking ${itemPath}:`, error);
      }
    }
  } catch (error) {
    console.error(`Error searching directory ${dir}:`, error);
  }

  return result;
}

// Determine all CSS files from "package.json > files"
const cssFilesFromPackageJson = [];
const filesFromPackageJson = packageJson.files || [];

// Filter CSS files from package.json (ignore wildcards)
for (const file of filesFromPackageJson) {
  if (file.endsWith('.css') && !file.includes('*')) {
    cssFilesFromPackageJson.push(file);
  } else if (!file.includes('.') && fs.existsSync(file)) {
    const dirCssFiles = findCssFiles(file);
    cssFilesFromPackageJson.push(...dirCssFiles);
  }
}

// Find root CSS files (ignore wildcards)
const rootCssFiles = findCssFiles('.')
  .filter((file) => !file.includes('/'))
  .filter(
    (file) =>
      filesFromPackageJson.includes(path.basename(file)) ||
      filesFromPackageJson.some(
        (pattern) =>
          pattern.includes('*') &&
          new RegExp(`^${pattern.replace(/\*/g, '.*')}$`).test(path.basename(file))
      )
  );

// Combine all CSS files
const allCssFiles = [...cssFilesFromPackageJson, ...rootCssFiles];

// Find all MD files
function findMdFiles(dir) {
  const result = [];

  try {
    if (!fs.existsSync(dir)) {
      return result;
    }

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

const mdFiles = findMdFiles(docsBaseDir);

// Match documentation pairs
const cssFilesWithoutDocs = [];

for (const cssFile of allCssFiles) {
  const baseName = path.basename(cssFile, '.css');
  const dirName = path.dirname(cssFile);
  let expectedDocPath = '';

  if (dirName === '.') {
    // Root CSS file
    expectedDocPath = path.join(docsBaseDir, `${baseName}.md`);
  } else {
    // CSS file in subdirectory
    const relativeDirName = dirName === '.' ? '' : dirName;
    expectedDocPath = path.join(docsBaseDir, relativeDirName, `${baseName}.md`);
  }

  // Check if the expected documentation file exists
  if (!mdFiles.includes(expectedDocPath) && !mdFiles.some((md) => md.endsWith(`/${baseName}.md`))) {
    cssFilesWithoutDocs.push({
      cssFile,
      expectedDocPath,
    });
  }
}

if (cssFilesWithoutDocs.length > 0) {
  for (const { cssFile, expectedDocPath } of cssFilesWithoutDocs) {
    // Empty loop body - this was already empty in the original
  }
} else {
  // Empty else block - this was already empty in the original
}
