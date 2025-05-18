# Contributing to CASOON UI Library

Thank you for your interest in contributing to the CASOON UI Library! This guide will help you understand our development process and how you can effectively contribute.

## Development Philosophy

The CASOON UI Library follows these basic principles:

- **Modularity**: Components should be independent and reusable
- **Efficiency**: Optimization for performance and LightningCSS
- **Accessibility**: All components must be accessible and barrier-free
- **Consistency**: Uniform design and consistent API for all components

## Style Guide

### CSS Conventions

1. **Use logical properties** whenever possible:
   - `inline-size` instead of `width`
   - `block-size` instead of `height` 
   - `inline-start` instead of `left`/`right` (depending on language direction)

2. **CSS values in lowercase**:
   - `optimizespeed` instead of `optimizeSpeed`
   - `auto` instead of `Auto`

3. **Use CSS layers correctly**:
   - `@layer core { ... }` for core functionality
   - Modules should use the `.module.css` file extension

4. **CSS variables**:
   - Follow the existing naming convention (e.g., `--color-primary-500`)
   - Define new variables in `layers/tokens.css`
   - Use existing variables instead of creating new ones

### New Components

1. **Study existing components** before creating new ones
2. **Create a module** in `modules/` with the extension `.module.css`
3. **Document** the component's usage with comments
4. **Add variants** for different use cases
5. **Test** the component in different browsers

## Contribution Process

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/new-component`
3. **Develop** your changes
4. **Run linting**: `npm run lint`
5. **Push**: `git push origin feature/new-component`
6. **Create a pull request** with a clear description

## Code Quality

- **Linting**: `npm run lint` must complete without errors
- **No direct commits** to the `main` branch
- **Self-review**: Check your changes for potential errors before submitting

## Pull Requests

Your pull request should include:

- **Description** of the changes
- **Context** explaining why the changes are necessary
- **Screenshots** if visual changes were made
- **Testing instructions** on how to test the changes

## Contact

If you have questions or concerns, please contact the CASOON development team.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/casoon-ui-lib.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`

## 📝 Pull Requests

1. Ensure your code complies with the style guide
2. Add tests for new features
3. Update documentation
4. Describe your changes in the pull request

## 🎨 Style Guide

### CSS
- Use OpenProps for CSS variables
- Follow the BEM naming convention
- Add comments for complex CSS rules
- Keep CSS files modular and organized

### JavaScript/TypeScript
- Use TypeScript for new components
- Follow ESLint rules
- Add JSDoc comments
- Keep functions small and focused

### Documentation
- Update README.md for relevant changes
- Add examples for new features
- Document breaking changes

## 🧪 Tests

- Add unit tests for new features
- Ensure all tests pass
- Test in different browsers

## 📚 Documentation

- Update documentation when making changes
- Add examples
- Document breaking changes

## 🐛 Bug Reports

1. Check if the bug has already been reported
2. Create a new issue
3. Describe the bug in detail
4. Include steps to reproduce
5. List expected and actual results

## 💡 Feature Requests

1. Check if the feature has already been proposed
2. Create a new issue
3. Describe the feature in detail
4. Explain the benefits of the feature

## 📝 Commit Messages

- Use meaningful commit messages
- Follow the convention: `type(scope): description`
- Examples:
  - `feat(animations): add fade-in effect`
  - `fix(grid): correct responsive breakpoints`
  - `docs(readme): update installation instructions`

## 🔄 Workflow

1. Update your fork with the main repository
2. Create a feature branch
3. Develop your changes
4. Run tests
5. Create a pull request

## 📞 Support

If you have questions or issues:
- Open an issue
- Visit the [homepage](https://www.casoon.de)
- Contact us through GitHub

## 📝 License

By contributing, you agree that your changes will be published under the MIT License.

Thank you for your contribution to the Casoon UI Library! 🎉 
