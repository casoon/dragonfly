#!/usr/bin/env node

/**
 * Update Import Paths
 * 
 * This script updates import paths in main CSS files to reflect the new file structure.
 * It updates core.css, effects.css, and creates a new ui.css file to replace components.css.
 */

const fs = require('fs');
const path = require('path');

// Base directory
const baseDir = path.join(__dirname, '..');

// Function to update effects.css
function updateEffectsImports() {
  console.log('Updating effects.css with new import paths...');
  
  const effectsFile = path.join(baseDir, 'effects.css');
  
  // Define new structure imports
  const newContent = `/**
 * Effects System
 * 
 * This file imports all effects in the correct order.
 * Effects are organized by type in subdirectories.
 */

/* Motion-based effects */
@import './effects/motion/animations.css';
@import './effects/motion/transitions.css';
@import './effects/motion/loading.css';
@import './effects/motion/typing.css';
@import './effects/motion/morph.css';
@import './effects/motion/ripple.css';
@import './effects/motion/scroll.css';

/* Visual effects */
@import './effects/visual/filters.css';
@import './effects/visual/shadows.css';
@import './effects/visual/glow.css';
@import './effects/visual/neon.css';
@import './effects/visual/glass.css';
@import './effects/visual/reflections.css';
@import './effects/visual/shine.css';
@import './effects/visual/sparkle.css';
@import './effects/visual/light.css';
@import './effects/visual/noise.css';
@import './effects/visual/textures.css';
@import './effects/visual/patterns.css';
@import './effects/visual/vignette.css';

/* Interactive effects */
@import './effects/interaction/interactions.css';
@import './effects/interaction/hover.css';
@import './effects/interaction/active.css';
@import './effects/interaction/focus.css';
@import './effects/interaction/disabled.css';
@import './effects/interaction/cursors.css';
@import './effects/interaction/error.css';
@import './effects/interaction/success.css';
@import './effects/interaction/warning.css';

/* Layout effects */
@import './effects/layout-effects/transforms.css';
@import './effects/layout-effects/clip-path.css';
@import './effects/layout-effects/masks.css';
@import './effects/layout-effects/backdrops.css';
@import './effects/layout-effects/overlays.css';
@import './effects/layout-effects/outlines.css';
@import './effects/layout-effects/skeleton.css';

/* Theme-specific effects */
@import './effects/themes/neumorphism.css';
@import './effects/themes/neos.css';
@import './effects/themes/gradient.css';
@import './effects/themes/gradients.css';
@import './effects/themes/blends.css';
@import './effects/themes/3d.css';

/* Particle effects */
@import './effects/particles/particles.css';
`;

  try {
    // Make a backup
    if (fs.existsSync(effectsFile)) {
      fs.copyFileSync(effectsFile, effectsFile + '.bak');
      console.log(`✅ Created backup: ${effectsFile}.bak`);
    }
    
    // Write new content
    fs.writeFileSync(effectsFile, newContent);
    console.log(`✅ Updated effects.css`);
  } catch (error) {
    console.error(`❌ Error updating effects.css: ${error.message}`);
  }
}

// Function to create ui.css
function createUIImports() {
  console.log('Creating ui.css with new import paths...');
  
  const uiFile = path.join(baseDir, 'ui.css');
  
  // Define new structure imports
  const newContent = `/**
 * UI Components System
 * 
 * This file imports all UI components in the correct order.
 * Components are organized by type in subdirectories.
 */

/* UI Elements (atoms) */
@import './ui/elements/button.css';
@import './ui/elements/input.css';
@import './ui/elements/textarea.css';
@import './ui/elements/select.css';
@import './ui/elements/checkbox.css';
@import './ui/elements/radio.css';
@import './ui/elements/switch.css';
@import './ui/elements/slider.css';
@import './ui/elements/avatar.css';
@import './ui/elements/badge.css';
@import './ui/elements/chip.css';
@import './ui/elements/spinner.css';
@import './ui/elements/progress.css';

/* UI Components (molecules/organisms) */
@import './ui/components/card.css';
@import './ui/components/alert.css';
@import './ui/components/modal.css';
@import './ui/components/tooltip.css';
@import './ui/components/popover.css';
@import './ui/components/toast.css';
@import './ui/components/notification.css';
@import './ui/components/tabs.css';
@import './ui/components/file.css';
@import './ui/components/input-group.css';
@import './ui/components/forms.css';
@import './ui/components/table.css';
@import './ui/components/wizard.css';
@import './ui/components/hamburger.css';

/* Layout Components */
@import './ui/layout/header.css';
@import './ui/layout/footer.css';
@import './ui/layout/sidebar.css';
@import './ui/layout/content.css';

/* UI Patterns */
@import './ui/patterns/blog.css';
@import './ui/patterns/tags.css';
@import './ui/patterns/code.css';
@import './ui/patterns/widget.css';
@import './ui/patterns/skeleton.css';
`;

  try {
    // Create ui.css
    fs.writeFileSync(uiFile, newContent);
    console.log(`✅ Created ui.css`);
  } catch (error) {
    console.error(`❌ Error creating ui.css: ${error.message}`);
  }
}

// Function to update core.css
function updateCoreImports() {
  console.log('Updating core.css with new import paths...');
  
  const coreFile = path.join(baseDir, 'core.css');
  
  if (!fs.existsSync(coreFile)) {
    console.warn('⚠️ core.css not found. Skipping update.');
    return;
  }
  
  try {
    // Read current content
    const content = fs.readFileSync(coreFile, 'utf8');
    
    // Replace components.css import with ui.css
    let newContent = content.replace(
      '@import "./components.css";',
      '@import "./ui.css";'
    );
    
    // Make a backup
    fs.copyFileSync(coreFile, coreFile + '.bak');
    console.log(`✅ Created backup: ${coreFile}.bak`);
    
    // Write updated content
    fs.writeFileSync(coreFile, newContent);
    console.log(`✅ Updated core.css`);
  } catch (error) {
    console.error(`❌ Error updating core.css: ${error.message}`);
  }
}

// Main execution
console.log('Starting import path updates...');

updateEffectsImports();
createUIImports();
updateCoreImports();

console.log('\n🎉 Import paths update completed!');
console.log('Please review the changes and test the imports.'); 