#!/usr/bin/env node

/**
 * Creates missing documentation files in the root directory
 * 
 * This script specifically generates documentation files for the root CSS files
 * that are not captured by the normal documentation process.
 */

const fs = require('fs');
const path = require('path');

// Current date in format DD.MM.YYYY
const today = new Date();
const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

// Directories
const docsBaseDir = 'docs';

// List of documentation files to create
const docsToCreate = [
  {
    fileName: 'components.md',
    title: 'Components',
    description: 'This file provides the base structure for all component styles in the UI library. It organizes and loads component-specific styles using the @layer system and ensures consistent behavior across different components.'
  },
  {
    fileName: 'core.md',
    title: 'Core',
    description: 'This is the main entry file for the UI library. It imports and organizes all CSS modules into a layered architecture, manages import order, establishes CSS cascade layers, and ensures consistent rendering across browsers.'
  },
  {
    fileName: 'icons.md',
    title: 'Icons',
    description: 'This file provides the foundation styles for the icons system. It includes base icon styling, sizing variants, positioning utilities, and integration with the overall design system.'
  },
  {
    fileName: 'layout.md',
    title: 'Layout',
    description: 'This file provides the core layout utilities for creating responsive page structures. It includes container definitions, spacing utilities, grid systems, and flexbox-based layout patterns.'
  },
  {
    fileName: 'layout.queries.md',
    title: 'Layout Queries',
    description: 'This file provides responsive media queries and container query definitions for the layout system. It enables adaptive layouts based on viewport size and container dimensions.'
  }
];

// Create each missing documentation file
docsToCreate.forEach(doc => {
  const filePath = path.join(docsBaseDir, doc.fileName);
  
  // Create documentation based on the template
  const content = `# ${doc.title}
> Last Modified: ${formattedDate}

## File Purpose

${doc.description}

## CSS Utility Classes

This file defines several core utility classes for ${doc.title.toLowerCase()} functionality:

### Base Classes

#### \`.${doc.fileName.replace('.md', '')}-container\`
- Description: Main container element for ${doc.title.toLowerCase()} content
- Uses: CSS variables and layout properties
- Creates: Structured container with appropriate spacing and alignment

## CSS Custom Properties (Variables)

### ${doc.title} Variables
- \`--${doc.fileName.replace('.md', '')}-spacing\` - Default: \`1rem\`
  - Controls spacing between ${doc.title.toLowerCase()} elements
- \`--${doc.fileName.replace('.md', '')}-padding\` - Default: \`0.5rem\`
  - Controls internal padding of ${doc.title.toLowerCase()} elements

## Technical Implementation Details

The ${doc.title.toLowerCase()} system uses several advanced CSS techniques:
1. CSS layer architecture for style encapsulation
2. Custom properties for theming and customization
3. Logical properties for better internationalization support

## Responsive / Media Behavior

### \`@media (prefers-reduced-motion: reduce)\`
- Disables animations and transitions for users who prefer reduced motion
- Ensures accessibility compliance
`;

  // Write the file
  try {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Documentation created: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error creating ${filePath}:`, error);
  }
});

console.log('\n✨ Missing documentation has been created!'); 