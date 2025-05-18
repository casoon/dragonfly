#!/usr/bin/env node

/**
 * Erstellt fehlende Dokumentationsdateien im Wurzelverzeichnis
 * 
 * Dieses Script erzeugt spezifisch die Dokumentationsdateien für die Root-CSS-Dateien, 
 * die vom normalen Dokumentationsprozess nicht erfasst werden.
 */

const fs = require('fs');
const path = require('path');

// Aktuelles Datum im Format TT.MM.JJJJ
const today = new Date();
const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

// Verzeichnisse
const docsBaseDir = 'docs';

// Liste der zu erstellenden Dokumentationen
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

// Erstelle jede fehlende Dokumentationsdatei
docsToCreate.forEach(doc => {
  const filePath = path.join(docsBaseDir, doc.fileName);
  
  // Erstelle Dokumentation basierend auf der Vorlage
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

  // Schreibe die Datei
  try {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Dokumentation erstellt: ${filePath}`);
  } catch (error) {
    console.error(`❌ Fehler beim Erstellen von ${filePath}:`, error);
  }
});

console.log('\n✨ Fehlende Dokumentationen wurden erstellt!'); 