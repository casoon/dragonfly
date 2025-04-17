/**
 * Casoon UI Theme Switcher
 * Ein einfaches Script zum Umschalten zwischen verschiedenen Themes
 */

// Storage-Schlüssel für das Theme
const THEME_STORAGE_KEY = 'casoon-ui-theme';
const DARK_MODE_STORAGE_KEY = 'casoon-ui-dark-mode';

// Standard-Theme
const DEFAULT_THEME = 'theme-day';

/**
 * Theme-Switcher initialisieren
 * Lädt gespeicherte Einstellungen und richtet Event-Listener ein
 */
function initThemeSwitcher() {
  // Gespeichertes Theme laden
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const isDarkMode = localStorage.getItem(DARK_MODE_STORAGE_KEY) === 'true';
  
  // System-Präferenzen prüfen
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Theme anwenden
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(DEFAULT_THEME);
  }
  
  // Dark Mode anwenden basierend auf gespeicherter Einstellung oder System-Präferenz
  if (isDarkMode || (prefersDarkMode && localStorage.getItem(DARK_MODE_STORAGE_KEY) === null)) {
    document.documentElement.classList.add('dark-theme');
  }
  
  // Auf Änderungen der System-Präferenzen reagieren
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (localStorage.getItem(DARK_MODE_STORAGE_KEY) === null) {
      if (event.matches) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    }
  });
}

/**
 * Theme wechseln
 * @param {string} themeName - Der Name des Themes (z.B. 'theme-day')
 */
function setTheme(themeName) {
  if (!themeName) return;
  
  // Alle Theme-Klassen entfernen
  const themeClasses = Array.from(document.documentElement.classList)
    .filter(className => className.startsWith('theme-'));
  
  document.documentElement.classList.remove(...themeClasses);
  
  // Neues Theme hinzufügen
  document.documentElement.classList.add(themeName);
  
  // Theme speichern
  localStorage.setItem(THEME_STORAGE_KEY, themeName);
  
  // Event auslösen
  document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: themeName } }));
}

/**
 * Dark Mode umschalten
 */
function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.contains('dark-theme');
  
  if (isDarkMode) {
    document.documentElement.classList.remove('dark-theme');
    localStorage.setItem(DARK_MODE_STORAGE_KEY, 'false');
  } else {
    document.documentElement.classList.add('dark-theme');
    localStorage.setItem(DARK_MODE_STORAGE_KEY, 'true');
  }
  
  // Event auslösen
  document.dispatchEvent(new CustomEvent('darkModeChanged', { 
    detail: { darkMode: !isDarkMode } 
  }));
}

/**
 * Theme-Klasse aus einem Element abrufen
 * @returns {string|null} - Der Name des aktiven Themes oder null
 */
function getCurrentTheme() {
  const themeClasses = Array.from(document.documentElement.classList)
    .filter(className => className.startsWith('theme-'));
  
  return themeClasses.length > 0 ? themeClasses[0] : null;
}

/**
 * Dark Mode Status abrufen
 * @returns {boolean} - True wenn Dark Mode aktiv ist
 */
function isDarkModeActive() {
  return document.documentElement.classList.contains('dark-theme');
}

/**
 * High Contrast Mode umschalten
 */
function toggleHighContrast() {
  const isHighContrast = document.documentElement.classList.contains('high-contrast');
  
  if (isHighContrast) {
    document.documentElement.classList.remove('high-contrast');
    localStorage.setItem('casoon-ui-high-contrast', 'false');
  } else {
    document.documentElement.classList.add('high-contrast');
    localStorage.setItem('casoon-ui-high-contrast', 'true');
  }
}

/**
 * Reduced Motion Mode umschalten
 */
function toggleReducedMotion() {
  const isReducedMotion = document.documentElement.classList.contains('reduced-motion');
  
  if (isReducedMotion) {
    document.documentElement.classList.remove('reduced-motion');
    localStorage.setItem('casoon-ui-reduced-motion', 'false');
  } else {
    document.documentElement.classList.add('reduced-motion');
    localStorage.setItem('casoon-ui-reduced-motion', 'true');
  }
}

// Automatisch initialisieren, wenn möglich
if (typeof window !== 'undefined') {
  // Wenn das DOM geladen ist
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeSwitcher);
  } else {
    initThemeSwitcher();
  }
}

// Exportieren für Module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initThemeSwitcher,
    setTheme,
    toggleDarkMode,
    getCurrentTheme,
    isDarkModeActive,
    toggleHighContrast,
    toggleReducedMotion
  };
} 