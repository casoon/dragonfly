#!/usr/bin/env node

/**
 * CSS-Dokumentationsgenerator
 * 
 * Dieses Script erstellt oder aktualisiert Markdown-Dokumentationsdateien für alle CSS-Dateien.
 * Es nutzt die Analyseergebnisse aus dem `analyze-css.js`-Script, wenn verfügbar.
 */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

// Aktuelles Datum im Format TT.MM.JJJJ
const today = new Date();
const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

// Verzeichnisse
const docsBaseDir = 'docs';
const analysisDir = path.join(docsBaseDir, 'analysis');

// Dateien aus package.json "files" auslesen
const projectFiles = packageJson.files || [];

// CSS-Dateien filtern
const cssFiles = projectFiles
  .filter(file => file.endsWith('.css') || !file.includes('.'))
  .reduce((acc, file) => {
    if (file.endsWith('.css')) {
      // Einzelne CSS-Datei
      acc.push(file);
    } else {
      // Verzeichnis - alle CSS-Dateien rekursiv finden
      try {
        const isDirectory = !file.includes('.');
        if (isDirectory && fs.existsSync(file)) {
          const dirFiles = findCssFilesInDir(file);
          acc.push(...dirFiles);
        }
      } catch (error) {
        console.error(`Fehler beim Lesen des Verzeichnisses ${file}:`, error);
      }
    }
    return acc;
  }, []);

// Funktion zum rekursiven Finden von CSS-Dateien in einem Verzeichnis
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
    console.error(`Fehler beim Durchsuchen von ${dir}:`, error);
  }
  
  return result;
}

// Dokumentationsverzeichnis prüfen/erstellen
if (!fs.existsSync(docsBaseDir)) {
  fs.mkdirSync(docsBaseDir, { recursive: true });
}

// Template für neue Dokumentationsdateien basierend auf der Analyse
function createDocTemplate(cssFileName, analysis = null) {
  const baseName = path.basename(cssFileName, '.css');
  const title = baseName.charAt(0).toUpperCase() + baseName.slice(1).replace(/-/g, ' ');
  
  let template = `# ${title}
> Last Modified: ${formattedDate}

## File Purpose

This file provides styles for ${title.toLowerCase()} elements in modern UIs. It includes various components and utility classes optimized for performance and accessibility.

## CSS Utility Classes

`;

  // Wenn Analysedaten vorhanden sind, füge Klassen hinzu
  if (analysis && analysis.classes && analysis.classes.length > 0) {
    // Gruppiere Klassen nach Namenskonventionen
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
    template += `<!-- Dokumentiere hier die CSS-Klassen nach dem Schema in doc_tasks.md -->\n\n`;
  }

  template += `## CSS Custom Properties (Variables)\n\n`;
  
  // Wenn Analysedaten vorhanden sind, füge Variablen hinzu
  if (analysis && analysis.variables && analysis.variables.length > 0) {
    // Gruppiere Variablen nach Namenskonventionen
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
    template += `<!-- Dokumentiere hier die CSS-Variablen nach dem Schema in doc_tasks.md -->\n\n`;
  }

  // Keyframe-Animationen
  if (analysis && analysis.keyframes && analysis.keyframes.length > 0) {
    template += `## Keyframe Animations\n\n`;
    
    analysis.keyframes.forEach(keyframe => {
      template += `### \`@keyframes ${keyframe.name}\`\n`;
      template += `- ${generateKeyframeDescription(keyframe)}\n`;
      template += `- Uses: ${extractPropertiesFromKeyframe(keyframe)}\n`;
      template += `- Animation steps:\n`;
      
      // Versuche die Animationsschritte zu analysieren
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
    
    // Finde alle media queries für reduced motion
    const reducedMotionQueries = analysis.mediaQueries.filter(
      q => q.query.includes('prefers-reduced-motion')
    );
    
    if (reducedMotionQueries.length > 0) {
      template += `### \`@media (prefers-reduced-motion: reduce)\`\n`;
      template += `- Disables animations and transitions for users who prefer reduced motion\n`;
      template += `- Ensures accessibility compliance\n\n`;
    } else {
      // Andere Media Queries
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

// Hilfsfunktionen zur Erstellung von Dokumentationsinhalten

// Gruppiert Klassen nach Namenskonventionen
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
  
  // Entferne leere Gruppen
  return Object.fromEntries(
    Object.entries(groups).filter(([_, array]) => array.length > 0)
  );
}

// Gruppiert Variablen nach Namenskonventionen
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
  
  // Entferne leere Gruppen
  return Object.fromEntries(
    Object.entries(groups).filter(([_, array]) => array.length > 0)
  );
}

// Generiert eine Beschreibung für eine CSS-Klasse
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

// Generiert die "Uses"-Info für eine CSS-Klasse
function generateUses(cssClass) {
  const properties = cssClass.properties;
  
  // Extrahiere die wichtigsten CSS-Eigenschaften
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

// Generiert die "Creates"-Info für eine CSS-Klasse
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

// Generiert eine Beschreibung für eine CSS-Variable
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

// Generiert eine Beschreibung für eine Keyframe-Animation
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

// Extrahiert die wichtigsten Eigenschaften aus einer Keyframe-Definition
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

// Extrahiert Schritte aus einer Keyframe-Definition
function extractKeyframeSteps(content) {
  // Suche nach definierten Schritten wie 0%, 50%, 100%
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

// Für jede CSS-Datei Dokumentation erstellen oder aktualisieren
cssFiles.forEach(cssFile => {
  const baseName = path.basename(cssFile, '.css');
  const baseDir = path.dirname(cssFile);
  let docsDir = docsBaseDir;
  
  // Bei verschachtelten Verzeichnissen entsprechende Unterordner erstellen
  if (baseDir !== '.' && baseDir !== '') {
    docsDir = path.join(docsBaseDir, baseDir);
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }
  }
  
  const mdFilePath = path.join(docsDir, `${baseName}.md`);
  
  // Prüfe, ob Analysedaten vorhanden sind
  let analysis = null;
  const analysisFilePath = path.join(analysisDir, `${baseName}.json`);
  
  if (fs.existsSync(analysisFilePath)) {
    try {
      analysis = JSON.parse(fs.readFileSync(analysisFilePath, 'utf8'));
    } catch (error) {
      console.error(`Fehler beim Lesen der Analyse für ${cssFile}:`, error);
    }
  }
  
  // Prüfen, ob Dokumentation bereits existiert
  if (fs.existsSync(mdFilePath)) {
    // Bestehende Datei aktualisieren (nur Last Modified Datum)
    let mdContent = fs.readFileSync(mdFilePath, 'utf8');
    
    // Last Modified Datum aktualisieren
    mdContent = mdContent.replace(/^> Last Modified:.*$/m, `> Last Modified: ${formattedDate}`);
    
    fs.writeFileSync(mdFilePath, mdContent);
    console.log(`✅ Dokumentation aktualisiert: ${mdFilePath}`);
  } else {
    // Neue Dokumentationsdatei erstellen
    const template = createDocTemplate(cssFile, analysis);
    fs.writeFileSync(mdFilePath, template);
    console.log(`📝 Neue Dokumentation erstellt: ${mdFilePath}`);
  }
});

console.log(`\n🎉 Dokumentation für ${cssFiles.length} CSS-Dateien abgeschlossen.`); 