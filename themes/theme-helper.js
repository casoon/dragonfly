/**
 * Theme Helper
 *
 * JavaScript helper functions for theme management.
 * Supports dynamic theme variant loading and data-theme switching.
 */

class ThemeHelper {
  constructor() {
    this.THEME_STORAGE_KEY = 'dragonfly-theme';
    this.loadedVariants = new Set();
    this.init();
  }

  /**
   * Initialize the theme system
   */
  init() {
    // Load saved theme on startup
    const savedTheme = this.getSavedTheme();
    this.setTheme(savedTheme);

    // Listen for system color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (this.getSavedTheme() === 'auto') {
        this.dispatchThemeChangeEvent('auto');
      }
    });
  }

  /**
   * Get saved theme from localStorage
   * @returns {string} Theme name
   */
  getSavedTheme() {
    try {
      return localStorage.getItem(this.THEME_STORAGE_KEY) || 'light';
    } catch (error) {
      console.warn('Error reading theme from localStorage:', error);
      return 'light';
    }
  }

  /**
   * Save theme to localStorage
   * @param {string} themeName - Theme name to save
   */
  saveTheme(themeName) {
    try {
      localStorage.setItem(this.THEME_STORAGE_KEY, themeName);
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
  }

  /**
   * Set theme using data-theme attribute
   * @param {string} themeName - Theme name (light, dark, auto, or variant name)
   */
  setTheme(themeName) {
    const root = document.documentElement;

    // Handle auto theme
    if (themeName === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', themeName);
    }

    this.saveTheme(themeName);
    this.dispatchThemeChangeEvent(themeName);
  }

  /**
   * Load a theme variant dynamically
   * @param {string} themeName - Name of the theme variant to load
   * @returns {Promise} Promise that resolves when theme is loaded
   */
  async loadThemeVariant(themeName) {
    // Don't load if already loaded
    if (this.loadedVariants.has(themeName)) {
      this.setTheme(themeName);
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      // Create link element for CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `./themes/variants/${themeName}.css`;
      link.id = `theme-variant-${themeName}`;

      // Handle load success
      link.onload = () => {
        this.loadedVariants.add(themeName);
        this.setTheme(themeName);
        resolve();
      };

      // Handle load error
      link.onerror = () => {
        console.error(`Failed to load theme variant: ${themeName}`);
        reject(new Error(`Theme variant '${themeName}' not found`));
      };

      // Add to document head
      document.head.appendChild(link);
    });
  }

  /**
   * Unload a theme variant
   * @param {string} themeName - Name of the theme variant to unload
   */
  unloadThemeVariant(themeName) {
    const link = document.getElementById(`theme-variant-${themeName}`);
    if (link) {
      link.remove();
      this.loadedVariants.delete(themeName);
    }
  }

  /**
   * Get currently active theme
   * @returns {string} Current theme name
   */
  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  /**
   * Check if a theme variant is loaded
   * @param {string} themeName - Theme name to check
   * @returns {boolean} True if loaded
   */
  isVariantLoaded(themeName) {
    return this.loadedVariants.has(themeName);
  }

  /**
   * Get list of loaded theme variants
   * @returns {Array} Array of loaded theme names
   */
  getLoadedVariants() {
    return Array.from(this.loadedVariants);
  }

  /**
   * Dispatch theme change event
   * @param {string} themeName - Theme name that was changed to
   */
  dispatchThemeChangeEvent(themeName) {
    const event = new CustomEvent('theme-change', {
      detail: {
        theme: themeName,
        isDark: this.isDarkTheme(themeName),
      },
    });
    document.dispatchEvent(event);
  }

  /**
   * Check if theme is dark
   * @param {string} themeName - Theme name to check
   * @returns {boolean} True if dark theme
   */
  isDarkTheme(themeName) {
    if (themeName === 'dark') return true;
    if (themeName === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  /**
   * Cycle through basic themes (light -> dark -> auto -> light)
   */
  cycleTheme() {
    const current = this.getSavedTheme();
    let next;

    switch (current) {
      case 'light':
        next = 'dark';
        break;
      case 'dark':
        next = 'auto';
        break;
      default:
        next = 'light';
        break;
    }

    this.setTheme(next);
    return next;
  }
}

// Create global instance
const themeHelper = new ThemeHelper();

// Export functions for global use
window.themeHelper = themeHelper;

// Export individual functions for convenience
window.loadThemeVariant = (themeName) => themeHelper.loadThemeVariant(themeName);
window.setTheme = (themeName) => themeHelper.setTheme(themeName);
window.cycleTheme = () => themeHelper.cycleTheme();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    themeHelper,
    loadThemeVariant: themeHelper.loadThemeVariant.bind(themeHelper),
  };
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => themeHelper.init());
} else {
  themeHelper.init();
}
