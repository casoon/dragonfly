#!/usr/bin/env node

/**
 * CSS Analyzer for Documentation
 * 
 * This script analyzes CSS files and extracts information such as:
 * - CSS classes and their selectors
 * - CSS variables
 * - Media queries
 * - Keyframes
 * 
 * The results are saved as JSON files in the "docs/analysis/" directory
 * and can serve as a basis for automatic documentation generation.
 */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

// Create directory for analysis output
const analysisDir = path.join('docs', 'analysis');
if (!fs.existsSync(analysisDir)) {
  fs.mkdirSync(analysisDir, { recursive: true });
}

// Extract CSS files from package.json "files"
const projectFiles = packageJson.files || [];
const cssFiles = [];

// Filter CSS files
projectFiles.forEach(file => {
  if (file.endsWith('.css')) {
    cssFiles.push(file);
  } else if (!file.includes('.') && fs.existsSync(file)) {
    // Search directory
    findCssFilesInDir(file, cssFiles);
  }
});

// Function for recursively finding CSS files
function findCssFilesInDir(dir, result) {
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        findCssFilesInDir(itemPath, result);
      } else if (itemPath.endsWith('.css')) {
        result.push(itemPath);
      }
    }
  } catch (error) {
    console.error(`Error searching directory ${dir}:`, error);
  }
}

// Analyze each CSS file
cssFiles.forEach(cssFile => {
  console.log(`Analyzing ${cssFile}...`);
  
  try {
    const content = fs.readFileSync(cssFile, 'utf8');
    
    // Extract information from the file
    const analysis = {
      file: cssFile,
      classes: extractClasses(content),
      variables: extractVariables(content),
      keyframes: extractKeyframes(content),
      mediaQueries: extractMediaQueries(content)
    };
    
    // Save analysis results
    const analysisFilename = path.join(
      analysisDir, 
      `${path.basename(cssFile, '.css')}.json`
    );
    
    fs.writeFileSync(
      analysisFilename, 
      JSON.stringify(analysis, null, 2)
    );
    
    console.log(`✅ Analysis saved: ${analysisFilename}`);
  } catch (error) {
    console.error(`❌ Error analyzing ${cssFile}:`, error);
  }
});

// Extracts CSS classes and their selectors
function extractClasses(cssContent) {
  const classes = [];
  const classRegex = /\.([a-zA-Z0-9_-]+)(?:\s*[,{:]|:[a-zA-Z]+)/g;
  let match;
  
  while ((match = classRegex.exec(cssContent)) !== null) {
    const className = match[1];
    
    // Ignore matches within comments
    const upToMatch = cssContent.substring(0, match.index);
    const lastCommentStart = upToMatch.lastIndexOf('/*');
    const lastCommentEnd = upToMatch.lastIndexOf('*/');
    
    if (lastCommentStart > lastCommentEnd) {
      continue; // Match is inside a comment
    }
    
    // Find the class selector and its associated block
    const selectorStart = cssContent.substring(0, match.index).lastIndexOf('\n');
    const blockStart = cssContent.indexOf('{', match.index);
    const blockEnd = findMatchingBracket(cssContent, blockStart);
    
    if (blockStart > 0 && blockEnd > blockStart) {
      const selector = cssContent.substring(selectorStart >= 0 ? selectorStart : 0, blockStart).trim();
      const cssBlock = cssContent.substring(blockStart + 1, blockEnd).trim();
      
      classes.push({
        name: className,
        selector,
        properties: cssBlock
      });
    }
  }
  
  return classes;
}

// Extracts CSS variables
function extractVariables(cssContent) {
  const variables = [];
  // Regex for --variable: value;
  const varRegex = /--([a-zA-Z0-9_-]+)\s*:\s*([^;]+);/g;
  let match;
  
  while ((match = varRegex.exec(cssContent)) !== null) {
    variables.push({
      name: match[1],
      value: match[2].trim()
    });
  }
  
  return variables;
}

// Extracts @keyframes
function extractKeyframes(cssContent) {
  const keyframes = [];
  // Regex for @keyframes name { ... }
  const keyframeRegex = /@keyframes\s+([a-zA-Z0-9_-]+)\s*{([^}]*)}/g;
  let match;
  
  while ((match = keyframeRegex.exec(cssContent)) !== null) {
    keyframes.push({
      name: match[1],
      content: match[2].trim()
    });
  }
  
  return keyframes;
}

// Extracts @media queries
function extractMediaQueries(cssContent) {
  const mediaQueries = [];
  // Regex for @media ... { ... }
  const mediaRegex = /@media\s+([^{]+)\s*{([^}]*)}/g;
  let match;
  
  while ((match = mediaRegex.exec(cssContent)) !== null) {
    mediaQueries.push({
      query: match[1].trim(),
      content: match[2].trim()
    });
  }
  
  return mediaQueries;
}

// Helper function to find the closing bracket
function findMatchingBracket(text, openBracketIndex) {
  let openBrackets = 1;
  let i = openBracketIndex + 1;
  
  while (i < text.length && openBrackets > 0) {
    if (text[i] === '{') {
      openBrackets++;
    } else if (text[i] === '}') {
      openBrackets--;
    }
    i++;
  }
  
  return openBrackets === 0 ? i - 1 : -1;
}

console.log(`\n🎉 Analysis completed for ${cssFiles.length} CSS files.`); 