# Changelog for @casoon/ui-lib

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Automated browser compatibility testing framework
- Tests for new viewport units (sv, lv, dv)
- Theme system compatibility tests
- Accessibility tests for screen readers and keyboard navigation
- Automatic documentation system for test results
- Structure for documenting compatibility issues

### Improved
- Optimized publication process for npm
- Script for package preparation implemented
- Automated validation of package contents
- Optimized .npmignore configuration
- Minification of CSS files for production versions
- Documentation of the publication process in PUBLISHING.md
- Conversion of core scripts and documentation to English:
  - scripts/prepare-npm-package.js
  - scripts/bump-version.js
  - PUBLISHING.md
  - package.json description

## [0.60.0] - 2023-09-15

### Added
- Comprehensive theme system with dark/light mode support
- Improved accessibility components for screen readers and keyboard users
- Enhanced color contrast system
- New utility classes for width and height:
  - Viewport units (vw, vh, svw, svh, lvw, lvh, dvw, dvh)
  - Percentage and pixel-based sizes
  - Aspect ratio settings

### Improved
- More consistent naming for components
- Better integration of design tokens
- Fallback strategies for older browsers

## [0.50.0] - 2023-04-21

### Added
- Optimized animation system with new naming scheme
- `.motion-safe`/`.motion-reduce` for `prefers-reduced-motion`
- Experimental `animation-composition`
- Dialog and focus animations
- Staggered animations
- Comprehensive dark mode support
- RTL support

### Improved
- Modern CSS validation
- New form layouts

## [0.4.10] - 2023-01-15

### Improved
- Revised form system
- Consistent form nomenclature
- More robust light/dark mode support
- Improved accessibility

## [0.3.x] - 2022-10-05

### Improved
- Optimized layer structure
- Extended flex/grid utilities
- Container query integration
- Consistent logical properties
- Stricter lint rules

## [2.0.0] - 2022-05-20

### Added
- Fluid interpolation with `interpolate-size: allow-keywords`
- Comprehensive fluid typography
- Adaptive components 