#!/usr/bin/env node

/**
 * CSS Documentation Generator
 * 
 * This script creates or updates Markdown documentation files for all CSS files.
 * It uses the analysis results from the `analyze-css.js` script, if available.
 */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

// Current date in format DD.MM.YYYY
const today = new Date();
const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

// Directories
const docsBaseDir = 'docs';
const analysisDir = path.join(docsBaseDir, 'analysis');

// Read files from package.json "files"
const projectFiles = packageJson.files || [];

// Filter CSS files
const cssFiles = projectFiles
  .filter(file => file.endsWith('.css') || !file.includes('.'))
  .reduce((acc, file) => {
    if (file.endsWith('.css')) {
      // Single CSS file
      acc.push(file);
    } else {
      // Directory - find all CSS files recursively
      try {
        const isDirectory = !file.includes('.');
        if (isDirectory && fs.existsSync(file)) {
          const dirFiles = findCssFilesInDir(file);
          acc.push(...dirFiles);
        }
      } catch (error) {
        console.error(`Error reading directory ${file}:`, error);
      }
    }
    return acc;
  }, []);

// Function to recursively find CSS files in a directory
function findCssFilesInDir(dir) {
  const result = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        const subDirFiles = findCssFilesInDir(itemPath);
        result.push(...subDirFiles);
      } else if (itemPath.endsWith('.css')) {
        result.push(itemPath);
      }
    }
  } catch (error) {
    console.error(`Error searching directory ${dir}:`, error);
  }
  
  return result;
}

// Check/create documentation directory
if (!fs.existsSync(docsBaseDir)) {
  fs.mkdirSync(docsBaseDir, { recursive: true });
}

// Template for new documentation files based on analysis
function createDocTemplate(cssFileName, analysis = null) {
  const baseName = path.basename(cssFileName, '.css');
  const title = baseName.charAt(0).toUpperCase() + baseName.slice(1).replace(/-/g, ' ');
  
  let template = `# ${title}
> Last Modified: ${formattedDate}

## File Purpose

This file provides styles for ${title.toLowerCase()} elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

`;

  // If analysis data is available, add classes
  if (analysis && analysis.classes && analysis.classes.length > 0) {
    // Group classes by naming conventions
    const classGroups = groupClasses(analysis.classes);
    
    for (const [groupName, classes] of Object.entries(classGroups)) {
      template += `### ${groupName}\n\n`;
      
      classes.forEach(cssClass => {
        template += `#### \`.${cssClass.name}\`\n`;
        template += `- Description: ${generateDescription(cssClass)}\n`;
        template += `- Uses: ${generateUses(cssClass)}\n`;
        template += `- Creates: ${generateCreates(cssClass)}\n\n`;
      });
    }
  } else {
    template += `<!-- Document CSS classes here following the schema in doc_tasks.md -->\n\n`;
  }

  template += `## CSS Custom Properties (Variables)\n\n`;
  
  // If analysis data is available, add variables
  if (analysis && analysis.variables && analysis.variables.length > 0) {
    // Group variables by naming conventions
    const varGroups = groupVariables(analysis.variables);
    
    for (const [groupName, variables] of Object.entries(varGroups)) {
      template += `### ${groupName} Variables\n`;
      
      variables.forEach(variable => {
        template += `- \`--${variable.name}\` - Default: \`${variable.value}\`\n`;
        template += `  - ${generateVariableDescription(variable)}\n`;
      });
      
      template += `\n`;
    }
  } else {
    template += `<!-- Document CSS variables here following the schema in doc_tasks.md -->\n\n`;
  }

  // Keyframe animations
  if (analysis && analysis.keyframes && analysis.keyframes.length > 0) {
    template += `## Keyframe Animations\n\n`;
    
    analysis.keyframes.forEach(keyframe => {
      template += `### \`@keyframes ${keyframe.name}\`\n`;
      template += `- ${generateKeyframeDescription(keyframe)}\n`;
      template += `- Uses: ${extractPropertiesFromKeyframe(keyframe)}\n`;
      template += `- Animation steps:\n`;
      
      // Try to analyze the animation steps
      const steps = extractKeyframeSteps(keyframe.content);
      steps.forEach((step, index) => {
        template += `  ${index + 1}. ${step}\n`;
      });
      
      template += `- Used in: Classes using \`animation-name: ${keyframe.name}\`\n\n`;
    });
  }

  // Media Queries
  if (analysis && analysis.mediaQueries && analysis.mediaQueries.length > 0) {
    template += `## Responsive / Media Behavior\n\n`;
    
    // Find all media queries for reduced motion
    const reducedMotionQueries = analysis.mediaQueries.filter(
      q => q.query.includes('prefers-reduced-motion')
    );
    
    if (reducedMotionQueries.length > 0) {
      template += `### \`@media (prefers-reduced-motion: reduce)\`\n`;
      template += `- Disables animations and transitions for users who prefer reduced motion\n`;
      template += `- Ensures accessibility compliance\n\n`;
    } else {
      // Other Media Queries
      const uniqueQueries = [...new Set(analysis.mediaQueries.map(q => q.query))];
      
      uniqueQueries.forEach(query => {
        template += `### \`@media ${query}\`\n`;
        template += `- Adjusts layout and styling for specific screen conditions\n\n`;
      });
    }
  } else {
    template += `## Responsive / Media Behavior\n\n`;
    template += `### \`@media (prefers-reduced-motion: reduce)\`\n`;
    template += `- Disables animations and transitions for users who prefer reduced motion\n`;
    template += `- Ensures accessibility compliance\n`;
  }
  
  return template;
}

// Helper functions for creating documentation content

// Groups classes by naming conventions
function groupClasses(classes) {
  const groups = {
    'Base Classes': [],
    'Variants': [],
    'Interactive States': [],
    'Special Effects': [],
    'Utility Classes': []
  };
  
  classes.forEach(cssClass => {
    const name = cssClass.name;
    
    if (name.includes('hover') || name.includes('active') || name.includes('focus')) {
      groups['Interactive States'].push(cssClass);
    } else if (name.includes('sm') || name.includes('md') || name.includes('lg') || name.includes('xl')) {
      groups['Variants'].push(cssClass);
    } else if (cssClass.properties.includes('animation') || cssClass.properties.includes('transition')) {
      groups['Special Effects'].push(cssClass);
    } else if (name.startsWith('util-') || cssClass.selector.includes('util-')) {
      groups['Utility Classes'].push(cssClass);
    } else {
      groups['Base Classes'].push(cssClass);
    }
  });
  
  // Remove empty groups
  return Object.fromEntries(
    Object.entries(groups).filter(([_, array]) => array.length > 0)
  );
}

// Groups variables by naming conventions
function groupVariables(variables) {
  const groups = {
    'Color': [],
    'Spacing': [],
    'Animation': [],
    'Size': [],
    'Theme': [],
    'Component': []
  };
  
  variables.forEach(variable => {
    const name = variable.name;
    
    if (name.includes('color') || name.includes('bg-') || name.includes('border-')) {
      groups['Color'].push(variable);
    } else if (name.includes('margin') || name.includes('padding') || name.includes('gap')) {
      groups['Spacing'].push(variable);
    } else if (name.includes('animation') || name.includes('transition') || name.includes('duration')) {
      groups['Animation'].push(variable);
    } else if (name.includes('width') || name.includes('height') || name.includes('size')) {
      groups['Size'].push(variable);
    } else if (name.includes('theme') || name.includes('mode')) {
      groups['Theme'].push(variable);
    } else {
      groups['Component'].push(variable);
    }
  });
  
  // Remove empty groups
  return Object.fromEntries(
    Object.entries(groups).filter(([_, array]) => array.length > 0)
  );
}

// Generates a description for a CSS class
function generateDescription(cssClass) {
  const name = cssClass.name;
  const properties = cssClass.properties;
  
  if (properties.includes('display: none')) {
    return 'Hides the element by removing it from the layout flow';
  } else if (properties.includes('visibility: hidden')) {
    return 'Hides the element while preserving its space in the layout';
  } else if (properties.includes('opacity: 0')) {
    return 'Makes the element fully transparent but still interactive';
  } else if (properties.includes('position: absolute')) {
    return 'Positions the element absolutely relative to its closest positioned ancestor';
  } else if (properties.includes('transform')) {
    return 'Applies visual transformation effects to the element';
  } else if (properties.includes('animation')) {
    return 'Animates the element using defined keyframes';
  } else if (properties.includes('transition')) {
    return 'Applies smooth transitions between property states';
  } else if (name.includes('flex')) {
    return 'Controls flex layout behavior for the element';
  } else if (name.includes('grid')) {
    return 'Controls grid layout behavior for the element';
  } else if (name.includes('hover')) {
    return 'Styling applied when the user hovers over the element';
  }
  
  return `Styling for ${name.replace(/-/g, ' ')} elements`;
}

// Generates the "Uses" info for a CSS class
function generateUses(cssClass) {
  const properties = cssClass.properties;
  
  // Extract the most important CSS properties
  const keyProps = [];
  
  if (properties.includes('display:')) {
    const displayMatch = properties.match(/display:\s*([a-z-]+)/);
    if (displayMatch) keyProps.push(displayMatch[1]);
  }
  
  if (properties.includes('position:')) {
    const positionMatch = properties.match(/position:\s*([a-z-]+)/);
    if (positionMatch) keyProps.push(positionMatch[1]);
  }
  
  if (properties.includes('transform:')) {
    const transformMatch = properties.match(/transform:\s*([^;]+)/);
    if (transformMatch) keyProps.push(`transform`);
  }
  
  if (properties.includes('animation:')) {
    keyProps.push('animation');
  }
  
  if (properties.includes('transition:')) {
    keyProps.push('transition');
  }
  
  if (properties.includes('flex:') || properties.includes('flex-')) {
    keyProps.push('flexbox');
  }
  
  if (properties.includes('grid:') || properties.includes('grid-')) {
    keyProps.push('grid');
  }
  
  if (keyProps.length === 0) {
    const allProps = properties.match(/[a-z-]+(?=:)/g) || [];
    keyProps.push(...allProps.slice(0, 3));
  }
  
  return keyProps.length > 0
    ? keyProps.join(', ') + (keyProps.length < 3 ? ' properties' : '')
    : 'Basic CSS properties';
}

// Generates the "Creates" info for a CSS class
function generateCreates(cssClass) {
  const name = cssClass.name;
  const properties = cssClass.properties;
  
  if (name.includes('hidden') || properties.includes('display: none')) {
    return 'Invisible element that doesn\'t take up space';
  } else if (name.includes('flex') || properties.includes('display: flex')) {
    return 'Flexible layout container for child elements';
  } else if (name.includes('grid') || properties.includes('display: grid')) {
    return 'Grid-based layout for precise element positioning';
  } else if (properties.includes('position: absolute')) {
    return 'Element positioned precisely relative to its container';
  } else if (properties.includes('transform:')) {
    const transformMatch = properties.match(/transform:\s*([^;]+)/);
    if (transformMatch) {
      if (transformMatch[1].includes('scale')) {
        return 'Scaled element with transformed size';
      } else if (transformMatch[1].includes('rotate')) {
        return 'Rotated element with angular positioning';
      } else if (transformMatch[1].includes('translate')) {
        return 'Shifted element with altered position';
      }
    }
  }
  
  return `Styled ${name.replace(/-/g, ' ')} appearance`;
}

// Generates a description for a CSS variable
function generateVariableDescription(variable) {
  const name = variable.name;
  const value = variable.value;
  
  if (name.includes('color')) {
    return `Controls the color value for ${name.replace(/-/g, ' ')} elements`;
  } else if (name.includes('size') || name.includes('width') || name.includes('height')) {
    return `Defines the ${name.replace(/-/g, ' ')} dimension`;
  } else if (name.includes('spacing') || name.includes('margin') || name.includes('padding')) {
    return `Sets the ${name.replace(/-/g, ' ')} value`;
  } else if (name.includes('duration')) {
    return `Controls the ${name.replace(/-/g, ' ')} of animations or transitions`;
  } else if (name.includes('radius')) {
    return `Defines the corner roundness for ${name.replace(/-/g, ' ')}`;
  } else if (name.includes('shadow')) {
    return `Configures the shadow appearance for ${name.replace(/-/g, ' ')}`;
  }
  
  return `Configures the ${name.replace(/-/g, ' ')} setting`;
}

// Generates a description for a keyframe animation
function generateKeyframeDescription(keyframe) {
  const name = keyframe.name;
  
  if (name.includes('fade')) {
    return 'Animates opacity to create a fading effect';
  } else if (name.includes('slide')) {
    return 'Animates position to create a sliding movement';
  } else if (name.includes('scale')) {
    return 'Animates size to create a scaling effect';
  } else if (name.includes('rotate')) {
    return 'Animates rotation to create a spinning effect';
  } else if (name.includes('bounce')) {
    return 'Animates position with easing to create a bouncing effect';
  } else if (name.includes('pulse')) {
    return 'Animates size or opacity to create a pulsing effect';
  }
  
  return `Animates elements with the ${name.replace(/-/g, ' ')} effect`;
}

// Extracts the most important properties from a keyframe definition
function extractPropertiesFromKeyframe(keyframe) {
  const content = keyframe.content;
  
  const properties = [];
  
  if (content.includes('opacity')) properties.push('opacity');
  if (content.includes('transform')) properties.push('transform');
  if (content.includes('background')) properties.push('background');
  if (content.includes('color')) properties.push('color');
  if (content.includes('width') || content.includes('height')) properties.push('dimensions');
  
  return properties.length > 0
    ? properties.join(', ') + ' properties'
    : 'CSS transition properties';
}

// Extracts steps from a keyframe definition
function extractKeyframeSteps(content) {
  // Search for defined steps like 0%, 50%, 100%
  const stepMatches = content.match(/([0-9]+%|from|to)\s*{([^}]*)}/g) || [];
  
  if (stepMatches.length > 0) {
    return stepMatches.map(match => {
      const [, step, properties] = match.match(/([0-9]+%|from|to)\s*{([^}]*)}/);
      const keyProps = properties.match(/[a-z-]+(?=:)/g) || [];
      
      let stepName;
      
      if (step === 'from' || step === '0%') {
        stepName = 'Start';
      } else if (step === 'to' || step === '100%') {
        stepName = 'End';
      } else if (step === '50%') {
        stepName = 'Middle';
      } else {
        stepName = `At ${step}`;
      }
      
      const effectDesc = keyProps.length > 0
        ? keyProps.join(', ') + ' transition'
        : 'State transition';
      
      return `${stepName}: ${effectDesc}`;
    });
  }
  
  return [
    'Start: Initial animation state',
    'Middle: Transition state',
    'End: Final animation state'
  ];
}

// Create or update documentation for each CSS file
cssFiles.forEach(cssFile => {
  const baseName = path.basename(cssFile, '.css');
  const baseDir = path.dirname(cssFile);
  let docsDir = docsBaseDir;
  
  // For nested directories, create corresponding subdirectories
  if (baseDir !== '.' && baseDir !== '') {
    docsDir = path.join(docsBaseDir, baseDir);
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }
  }
  
  const mdFilePath = path.join(docsDir, `${baseName}.md`);
  
  // Check if analysis data is available
  let analysis = null;
  const analysisFilePath = path.join(analysisDir, `${baseName}.json`);
  
  if (fs.existsSync(analysisFilePath)) {
    try {
      analysis = JSON.parse(fs.readFileSync(analysisFilePath, 'utf8'));
    } catch (error) {
      console.error(`Error reading analysis for ${cssFile}:`, error);
    }
  }
  
  // Check if documentation already exists
  if (fs.existsSync(mdFilePath)) {
    // Update existing file (only Last Modified date)
    let mdContent = fs.readFileSync(mdFilePath, 'utf8');
    
    // Update Last Modified date
    mdContent = mdContent.replace(/^> Last Modified:.*$/m, `> Last Modified: ${formattedDate}`);
    
    fs.writeFileSync(mdFilePath, mdContent);
    console.log(`✅ Documentation updated: ${mdFilePath}`);
  } else {
    // Create new documentation file
    const template = createDocTemplate(cssFile, analysis);
    fs.writeFileSync(mdFilePath, template);
    console.log(`📝 New documentation created: ${mdFilePath}`);
  }
});

console.log(`\n🎉 Documentation completed for ${cssFiles.length} CSS files.`); 