# Component Pattern Library

This directory contains the reusable UI components that follow consistent patterns and naming conventions. Each component is designed to be accessible, responsive, and compatible with various browsers through the fallback strategies defined in the compatibility documentation.

## Component Structure

All components follow a consistent structure:

```css
/*
 * Component Name
 *
 * Brief description of the component's purpose and functionality.
 */

/**
 * Component Documentation
 * 
 * Detailed documentation about the component, including usage examples,
 * variants, sizes, states, and accessibility considerations.
 * 
 * @layer: components
 * 
 * Compatibility:
 * - Browser compatibility information
 * - Fallback strategies implemented
 * 
 * Usage examples with HTML structure
 */

/* Component styles within the components layer */
@layer components {
  /* Base component style */
  .component-name {
    /* Base properties */
  }
  
  /* Variants */
  .component-name-primary {
    composes: component-name;
    /* Variant-specific properties */
  }
  
  /* Sizes */
  .component-name--sm {
    /* Size-specific properties */
  }
  
  /* States */
  .component-name--loading {
    /* State-specific properties */
  }
}

/* Animation-related styles within the animations layer */
@layer animations {
  /* Animation styles for the component */
}
```

## Naming Conventions

Our components follow these naming patterns:

1. **Base Component**: `.component-name`
2. **Variants**: `.component-name-variant` (e.g., `.button-primary`)
3. **Sizes**: `.component-name--size` (e.g., `.button--sm`)
4. **States**: `.component-name--state` (e.g., `.button--loading`)

## Component Inventory

Here's a list of all available components:

| Component | Description | Variants | States | Sizes |
|-----------|-------------|----------|--------|-------|
| Alert | Feedback messages | info, success, warning, error | dismissed | sm, md, lg |
| Avatar | User or entity representation | circle, square | placeholder | xs, sm, md, lg, xl |
| Badge | Status indicators | primary, secondary, success, warning, error | - | sm, md, lg |
| Blog | Blog-specific components | card, list, featured | - | - |
| Button | Interactive controls | primary, secondary, tertiary, success, warning, danger, info, link | disabled, loading | xs, sm, md, lg, xl, fluid |
| Card | Content containers | basic, interactive, featured | hover, active | sm, md, lg |
| Checkbox | Selection controls | default, switch | checked, indeterminate, disabled | sm, md, lg |
| Chip | Compact information displays | default, removable, interactive | active, disabled | sm, md, lg |
| Code | Code display blocks | inline, block, terminal | - | - |
| Content | Generic content containers | main, section, article | - | - |
| File | File input and display | upload, preview | loading, error, success | - |
| Footer | Page footers | simple, expanded, sticky | - | - |
| Forms | Form layouts and controls | vertical, horizontal, inline | valid, invalid, submitting | - |
| Hamburger | Menu toggle buttons | default, animated | open, closed | sm, md, lg |
| Header | Page headers | simple, navigation, sticky | - | - |
| Input | Text input fields | text, password, email, number | focus, disabled, error, success | sm, md, lg |
| Input Group | Grouped form controls | default, addon, button | - | sm, md, lg |
| Modal | Dialog overlays | default, fullscreen, side | open, closed | sm, md, lg |
| Notification | Temporary messages | toast, banner, popover | visible, hidden | sm, md, lg |
| Popover | Contextual overlays | tooltip, dropdown, menu | open, closed | sm, md, lg |
| Progress | Progress indicators | bar, circle, steps | determinate, indeterminate | sm, md, lg |
| Radio | Single selection controls | default, button, card | checked, disabled | sm, md, lg |
| Select | Option selection menus | default, multi, searchable | open, closed, disabled | sm, md, lg |
| Sidebar | Side navigation | default, collapsible, drawer | expanded, collapsed | sm, md, lg |
| Skeleton | Loading placeholders | text, image, card | - | - |
| Slider | Range input controls | default, range, steps | disabled | sm, md, lg |
| Spinner | Loading indicators | default, dots, pulse | - | sm, md, lg |
| Switch | Toggle controls | default, labeled | on, off, disabled | sm, md, lg |
| Table | Tabular data display | default, striped, bordered | sortable, selectable | sm, md, lg |
| Tabs | Content organization | default, pills, vertical | active, disabled | sm, md, lg |
| Tags | Categorization elements | default, removable, interactive | - | sm, md, lg |
| Textarea | Multiline text input | default, autosize | focus, disabled | sm, md, lg |
| Toast | Brief notifications | default, success, error, warning, info | visible, hidden | sm, md, lg |
| Tooltip | Contextual information | default, arrow, interactive | visible, hidden | sm, md, lg |
| Widget | Generic UI containers | default, card, panel | - | sm, md, lg |
| Wizard | Multi-step processes | default, vertical | active, completed, disabled | - |

## Accessibility Features

All components implement these accessibility features:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **ARIA Attributes**: Proper ARIA roles, states, and properties
- **Focus Management**: Visible focus indicators and logical focus order
- **Color Contrast**: Meet WCAG 2.1 AA standards for text contrast
- **Screen Reader Support**: Text alternatives for non-text content
- **Reduced Motion**: Alternative animations for users with motion sensitivity

## Browser Compatibility

Components use the fallback strategies documented in the main `compatibility.md` file:

- Feature detection via `@supports`
- Media Query fallbacks for Container Queries
- CSS Variable fallbacks for older browsers
- calc()-based fallbacks for modern features like `interpolate-size`

## Usage Guidelines

1. **Choose the Right Component**: Select the most appropriate component for your use case
2. **Use Standard Variants**: Prefer the provided variants over custom styles
3. **Apply Consistent Sizing**: Use the standard size modifiers throughout your interface
4. **Handle States Properly**: Apply state classes dynamically as needed
5. **Ensure Accessibility**: Include all necessary ARIA attributes in your HTML

## Examples

Example usage of various components:

```html
<!-- Button example -->
<button class="button-primary button--lg">
  Large Primary Button
</button>

<!-- Card with content -->
<div class="card">
  <div class="card-header">Card Title</div>
  <div class="card-body">
    Card content goes here
  </div>
  <div class="card-footer">
    <button class="button-primary">Action</button>
  </div>
</div>

<!-- Form with inputs -->
<form class="form">
  <div class="form-group">
    <label for="name">Name</label>
    <input id="name" class="input" type="text">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input id="email" class="input" type="email">
  </div>
  <button type="submit" class="button-primary">Submit</button>
</form>
```

## Customization

Components can be customized through CSS variables:

```css
:root {
  /* Primary color customization */
  --color-primary-500: #0088cc;
  
  /* Border radius customization */
  --radius-md: 0.5rem;
  
  /* Spacing customization */
  --space-4: 1rem;
}
```

## Contributing

When adding or modifying components:

1. Follow the established naming conventions
2. Include comprehensive documentation
3. Implement proper accessibility features
4. Add fallback strategies for browser compatibility
5. Test across different browsers and devices 