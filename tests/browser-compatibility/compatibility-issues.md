# Browser Compatibility Issues

This document tracks known compatibility issues with the @casoon/ui-lib library across different browsers and versions.

## Viewport Units

### Small Viewport Units (svh, svw)

**Affected Browsers:**
- Safari < 15.4
- Chrome < 108
- Firefox < 101

**Issue:** Small viewport units are not supported.

**Solution:** The library implements a fallback using regular viewport units (vh, vw) with CSS feature detection:

```css
@supports not (height: 1svh) {
  .use-svh {
    height: 100vh; /* Fallback */
  }
}

@supports (height: 1svh) {
  .use-svh {
    height: 100svh;
  }
}
```

**Recommendation:** When using these units, always test in older browsers and consider providing explicit fallbacks.

### Dynamic Viewport Units (dvh, dvw)

**Affected Browsers:**
- Safari < 15.4
- Chrome < 108
- Firefox < 101

**Issue:** Dynamic viewport units are not supported.

**Solution:** Similar fallback as for small viewport units.

## Container Queries

**Affected Browsers:**
- Safari < 16
- Chrome < 105
- Firefox < 110

**Issue:** Container queries are not supported.

**Solution:** The library uses media queries as fallbacks where appropriate, and provides a `no-container-queries` class for targeted styling.

**Recommendation:** For critical layouts, consider using feature detection and providing alternative media query-based layouts.

## CSS Layers

**Affected Browsers:**
- Safari < 15.4
- Chrome < 99
- Firefox < 97

**Issue:** CSS Layers (`@layer`) are not supported.

**Solution:** The library is structured so that even without layer support, styles cascade in a reasonable manner. Critical functionality works but with potentially different specificity behavior.

**Recommendation:** Be aware that styling overrides may behave differently in browsers without layer support.

## Documentation Format

Each compatibility issue should be documented with the following information:

1. **Affected Browsers:** List of browsers and versions affected
2. **Issue:** Brief description of the compatibility problem
3. **Solution:** How the library handles this issue
4. **Recommendation:** Guidance for library users
5. **Examples:** (optional) Code examples showing the issue and solution

## Theme System

**Affected Browsers:**
- IE11 and older (not supported)
- Older mobile browsers

**Issue:** Some older browsers don't fully support CSS custom properties used for theming.

**Solution:** The library includes basic color fallbacks for critical UI elements.

**Recommendation:** If supporting very old browsers is necessary, consider using the bundled version which includes compiled fallback colors.

## CSS Grid

**Affected Browsers:**
- IE11 (partial support only)
- Safari < 10.1

**Issue:** Limited or missing support for CSS Grid features.

**Solution:** For critical grid layouts, the library provides flexbox fallbacks where appropriate.

**Recommendation:** Test grid layouts in older browsers and consider providing flexbox alternatives for critical UI components.

## Known Issues

### Reduced Motion Media Query

**Affected Browsers:**
- Safari < 10.1
- IE11 and older

**Issue:** The `prefers-reduced-motion` media query is not supported.

**Solution:** Animations still work, but the reduced motion preference isn't detected automatically.

**Recommendation:** Provide manual controls for disabling animations if supporting these browsers is required.

### Focus-Visible Selector

**Affected Browsers:**
- Safari < 15.4
- Firefox < 85
- Chrome < 86

**Issue:** The `:focus-visible` pseudo-class is not supported.

**Solution:** The library uses a fallback approach using both `:focus` and `:focus-visible` selectors to ensure focus styles are always visible when needed.

**Recommendation:** Test keyboard navigation in older browsers and ensure focus states are sufficiently visible.

---

_This file is continuously updated as new compatibility issues are discovered._ 