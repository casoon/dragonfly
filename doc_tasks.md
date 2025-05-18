# 📝 Task: Document CSS Files (English)

## Objective

Create structured and consistent documentation (in English) for all `.css` files referenced in the `package.json` under the `"files"` field. The documentation should enable external users and team members to easily understand the purpose, CSS classes, and variables used.

---

## Scope

- All files with the `.css` extension
- All files and folders included in the `package.json > files` specification

---

## Documentation Format

Create a separate `.md` file for each `.css` file (e.g., `utilities.css` → `utilities.md`).

### Documentation Header
Start each documentation with the title and "Last Modified" date:

```markdown
# Component Name
> Last Modified: DD.MM.YYYY
```

The date should be in the format DD.MM.YYYY (e.g., 12.05.2024).

### 1. **File Purpose**  
Briefly describe the purpose of the file in 1–3 sentences in English.

Example:
```markdown
## File Purpose

This file provides a collection of component styles for modern UIs. It includes various interactive elements and decorative forms. All components are performance-optimized and respect user preferences for reduced motion.
```

### 2. **CSS Utility Classes**
Create a list of all classes in the file (with hierarchical structure), including:

- Class names (with a leading `.`)
- Description of the class
- Usage of the class
- Visual effect created

Example:
```markdown
## CSS Utility Classes

### Base Classes

#### `.component-base`
- Description: Standard component base style
- Uses: Flexbox layout with padding and border-radius
- Creates: Container for component content with rounded corners
```

### 3. **HTML Structure** (if relevant)
Show examples of typical HTML structures:

```markdown
## HTML Structure

To create a basic component, use the following structure:

```html
<div class="component-base">
  <!-- Component content here -->
</div>
```
```

### 4. **Keyframe Animations** (if present)
For each @keyframes definition:

- Name with `@keyframes` prefix
- Brief functional description
- CSS properties used
- Animation steps
- Where implemented (classes, modules, etc.)

Example:
```markdown
## Keyframe Animations

### `@keyframes component-fade`
- Animates opacity transition with subtle movement
- Uses: Opacity and transform properties
- Animation steps:
  1. Start: Invisible and slightly below position
  2. End: Fully visible and in position
- Used in: `.component-animate`
```

### 5. **CSS Custom Properties (Variables)**
List all variables with:

- Name (in backticks)
- Default value
- Functional description

Group similar variables:

```markdown
## CSS Custom Properties (Variables)

### Component Variables
- `--component-padding` - Default: `1rem`
  - Controls the internal padding of the component
- `--component-radius` - Default: `0.5rem`
  - Controls the border radius of the component
```

### 6. **Technical Implementation Details** (if relevant)
Describe technical details of the implementation:

```markdown
## Technical Implementation Details

The component uses several advanced CSS techniques:
1. Flexbox layout for content alignment
2. CSS variables for theming and customization
3. Media queries for responsive behavior
```

### 7. **Responsive / Media Behavior** (if relevant)
Describe behavior with media queries:

```markdown
## Responsive / Media Behavior

### `@media (prefers-reduced-motion: reduce)`
- Disables animations on component transitions
- Ensures accessibility for users who are sensitive to motion
```

## General Notes

- Documentation should be written in English
- Existing documentation from CSS files can be used but should then be removed from the CSS files
- Avoid CSS-specific jargon where possible
- Use code blocks for better readability when needed
- Consistent formatting helps with later automation
- All variable names and class names should be reproduced exactly
- Consider accessibility aspects such as "prefers-reduced-motion"
- Follow the existing documentation structure of already documented effects 