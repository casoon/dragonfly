# English Migration Plan for @casoon/ui-lib

This document outlines the plan for migrating all German language content in the codebase to English. The goal is to ensure consistent use of English throughout the entire project, including code comments, variable names, documentation, and user-facing text.

## Completed Migrations

The following files have already been migrated to English:

- ✅ scripts/prepare-npm-package.js
- ✅ scripts/bump-version.js
- ✅ scripts/analyze-css.js
- ✅ scripts/generateColorMixes.js
- ✅ scripts/checkContrast.js
- ✅ scripts/update-doc-versions.js
- ✅ scripts/generate-docs.js
- ✅ scripts/fix-doc-errors.js
- ✅ scripts/check-missing-docs.js
- ✅ scripts/fix-missing-docs.js
- ✅ scripts/build-icons.js
- ✅ scripts/reorganize-effects.js (new file)
- ✅ scripts/reorganize-components.js (new file)
- ✅ scripts/reorganize-css-structure.js (new file)
- ✅ scripts/update-ui-css.js (new file)
- ✅ scripts/update-effects-css.js (new file)
- ✅ scripts/update-imports.js (new file)
- ✅ PUBLISHING.md
- ✅ package.json (description)
- ✅ CHANGELOG.md
- ✅ todo.md
- ✅ compatibility.md
- ✅ LAYER-SYSTEM.md (already in English)
- ⚠️ STYLE-GUIDE.md (partially translated - examples section still contains some German text)
- ⚠️ ui/elements/select.css (header documentation translated)
- ⚠️ effects/interaction/interactions.css (comments partially translated)
- ✅ effects/interaction/hover.css
- ✅ effects/interaction/active.css
- ✅ effects/interaction/focus.css
- ✅ effects/interaction/disabled.css
- ✅ effects/interaction/error.css
- ⚠️ effects/README.md (examples partially translated)
- ⚠️ base/accessibility/a11y-helper.js (comments partially translated)
- ⚠️ tests/browser-compatibility/accessibility-test.html (partially translated)

## Project Structure Changes

The project structure has been completely reorganized as follows:

1. **CSS Files Reorganization**:
   - Created a clear directory structure for all top-level CSS files:
     - `base/` - Base styles and layer definitions
     - `layout/` - Layout components and utilities
     - `typography/` - Typography system
     - `utility/` - Utility classes
     - `animation/` - Animation system
     - `effect/` - Effects system
     - `theme/` - Theming system
     - `icon/` - Icon system

2. **Effects Reorganization**:
   - The contents of `effects/` have been moved into category-based subdirectories:
     - `effects/motion/` - Motion-based effects (animations, transitions)
     - `effects/visual/` - Visual styling effects (shadows, filters)
     - `effects/interaction/` - Interactive effects (hover, active, focus)
     - `effects/layout-effects/` - Layout manipulation effects
     - `effects/themes/` - Theming techniques (neumorphism, etc.)
     - `effects/particles/` - Particle effects

3. **Components Reorganization**:
   - Components have been reorganized into a more semantically meaningful structure:
     - `ui/elements/` - Basic UI elements (buttons, inputs)
     - `ui/components/` - Complex components (cards, modals)
     - `ui/layout/` - Layout components (header, footer)
     - `ui/patterns/` - UI patterns (blogs, widgets)

## Migration Priority

The migration will continue with the reorganized structure. Files will be migrated in the following order of priority:

1. **High Priority**
   - Core documentation files (README.md, etc.)
   - Update remaining import paths
   - Package metadata files

2. **Medium Priority**
   - CSS documentation (file headers, comments)
   - CSS files in the new structure, focusing on:
     - `effects/interaction/` (since these contain most user-facing text)
     - `ui/elements/` (basic building blocks)

3. **Low Priority**
   - Example files
   - Test files
   - Legacy code that is not actively maintained

## Migration Process

For each file in the new structure, follow these steps:

1. **Backup**: Create a backup of the original file if needed (already done by reorganization scripts)
2. **Translation**: Translate all German text to English
3. **Review**: Check for consistency in terminology
4. **Testing**: Ensure the changes don't break functionality
5. **Documentation**: Update the migration status in this document

## Style Guidelines

When translating to English, follow these guidelines:

- Use American English spelling (e.g., "color" not "colour")
- Use present tense for documentation (e.g., "This function returns..." not "This function will return...")
- Use imperative mood for comments (e.g., "Check if value exists" not "Checking if value exists")
- Maintain consistent terminology:
  - Use "theme" instead of mixing "theme" and "skin"
  - Use "component" instead of mixing "component" and "element"

## Files to Migrate (New Structure)

### Documentation Files

- [ ] README.md
- [⚠️] STYLE-GUIDE.md (partially translated)
- [✅] LAYER-SYSTEM.md
- [✅] compatibility.md
- [✅] todo.md
- [ ] ui/README.md (copied from components/README.md)

### CSS Files (by category)

#### Effects (focus on these first)

- [⚠️] effects/interaction/interactions.css (partially translated)
- [✅] effects/interaction/hover.css
- [✅] effects/interaction/active.css
- [✅] effects/interaction/focus.css
- [✅] effects/interaction/disabled.css
- [✅] effects/interaction/error.css
- [ ] effects/interaction/cursors.css
- [ ] effects/interaction/success.css
- [ ] effects/interaction/warning.css

#### UI Elements

- [⚠️] ui/elements/select.css (header documentation translated)
- [ ] ui/elements/button.css
- [ ] ui/elements/input.css
- [ ] ui/elements/textarea.css
- [ ] ui/elements/checkbox.css
- [ ] ui/elements/radio.css
- [ ] ui/elements/switch.css
- [ ] ui/elements/slider.css

#### Import Files

- [ ] base/base.css
- [ ] layout/layout.css
- [ ] typography/typography.css
- [ ] utility/utilities.css
- [ ] animation/animations.css
- [ ] effect/effects.css
- [ ] theme/themes.css
- [ ] icon/icons.css
- [ ] ui/ui.css

### Test Files

- [⚠️] tests/browser-compatibility/accessibility-test.html (partially translated)
- [⚠️] base/accessibility/a11y-helper.js (comments partially translated)
- [ ] Other test files

## Progress Tracking

| Category | Total Files | Migrated | Progress |
|----------|-------------|----------|----------|
| Documentation | 6 | 5.2 | 87% |
| Scripts | 16 | 16 | 100% |
| CSS Files (all) | ~100 | 6.5 | 6.5% |
| Effects (interaction) | 9 | 5.5 | 61% |
| UI Elements | 13 | 0.5 | 3.8% |
| Import Files | 9 | 0 | 0% |
| Test Files | ~20 | 0.5 | 2.5% |
| **Overall** | ~164 | 28.2 | ~17% |

## Implementation Plan (Updated)

### Phase 1: Core Structure and Documentation (Current)

1. ✅ Complete core structure reorganization
2. ⚠️ Translate main documentation files
3. ✅ Update scripts for new structure

### Phase 2: CSS Files (Target: 6 weeks)

1. Update import files with proper English comments
2. ✅ Continue translating interaction effects files (effects/interaction/*)
3. Translate UI elements files (ui/elements/*)
4. Translate UI components files (ui/components/*)
5. Translate remaining effects files (by category)
6. Translate layout and patterns files

### Phase 3: Tests and Examples (Target: 2 weeks)

1. Translate test files
2. Translate example code and comments
3. Final review for consistency

## Common Translation Terms

To ensure consistency, use these translations for common terms:

| German | English |
|--------|---------|
| Variablen | Variables |
| Farbschema | Color scheme |
| Komponentenbibliothek | Component library |
| Schriftart | Font |
| Abstand | Spacing |
| Barrierefreiheit | Accessibility |
| Raster | Grid |
| Schaltfläche | Button |
| Darstellung | Display |
| Dokumentation | Documentation |
| Klick | Click |
| Klickbar | Clickable |
| Interaktionen | Interactions |
| Größenvarianten | Size variants |
| Zustände | States |
| Deaktiviert | Disabled |
| Fehler | Error |
| Erfolgreich | Successful |
| Mehrfachauswahl | Multiple selection |
| Optionsgruppen | Option groups |
| Bewegungsbasiert | Motion-based |
| Optische Veredelungen | Visual enhancements |
| Zustandsbasiert | State-based |
| Benutzerinteraktiv | User-interactive |
| Maskierung | Masking |
| Layering | Layering |
| Designtechniken | Design techniques |
| Stilparadigmen | Style paradigms |
| Partikelbasiert | Particle-based |
| Effekte | Effects |
| Importdateien | Import files |
| Hauptverzeichnis | Root directory |
| Typografie | Typography |
| Dienstprogramme | Utilities |
| Animation | Animation |
| Symbole | Icons |
| Basis | Base |
| Reduzierte Bewegung | Reduced motion |
| Hover-Effekte | Hover effects |
| Active-Effekte | Active effects |
| Fokus-Effekte | Focus effects |
| Disabled-Effekte | Disabled effects |
| Error-Effekte | Error effects |

## Contribution Guidelines

When contributing to this migration effort:

1. Focus on one file or a small group of related files at a time
2. Create clear commits with messages explaining what was translated
3. Use automated tools for basic translation but always review manually
4. Maintain the same formatting, indentation, and structure
5. If unsure about a technical term, consult the glossary or ask for help

## Automated Tools

The following tools can assist with the migration:

- DeepL or Google Translate for initial translation
- Text editors with multi-file search and replace for consistent terminology
- Spellcheckers for English validation

## Validation

After translating a file:

1. Run linting tools to ensure code quality
2. Test functionality if applicable
3. Have another team member review the changes
4. Update this document with migration progress 