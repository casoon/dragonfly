/**
 * Casoon UI Theme Switcher
 * Ein einfaches Script zum Umschalten zwischen verschiedenen Themes
 * 
 * Unterstützt sowohl die light-dark() CSS-Syntax als auch klassische Theming-Ansätze.
 * Moderne Browser werden automatisch vom color-scheme und light-dark() profitieren.
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
  const savedDarkMode = localStorage.getItem(DARK_MODE_STORAGE_KEY);
  
  // System-Präferenzen prüfen
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Theme anwenden
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(DEFAULT_THEME);
  }
  
  // Dark Mode anwenden, wenn er explizit gespeichert wurde
  // Bei Browsern mit light-dark() Unterstützung dient dies als Override
  if (savedDarkMode === 'true' || (prefersDarkMode && savedDarkMode === null)) {
    document.documentElement.classList.add('dark-mode');
  } else if (savedDarkMode === 'false') {
    document.documentElement.classList.remove('dark-mode');
  }
  
  // Auf Änderungen der System-Präferenzen reagieren
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (localStorage.getItem(DARK_MODE_STORAGE_KEY) === null) {
      // Nur automatisch umschalten, wenn der Benutzer keine explizite Präferenz gesetzt hat
      if (event.matches) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
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
 * Dies überschreibt die automatische Erkennung durch color-scheme und light-dark()
 */
function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.contains('dark-mode');
  
  if (isDarkMode) {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem(DARK_MODE_STORAGE_KEY, 'false');
  } else {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem(DARK_MODE_STORAGE_KEY, 'true');
  }
  
  // Event auslösen
  document.dispatchEvent(new CustomEvent('darkModeChanged', { 
    detail: { darkMode: !isDarkMode } 
  }));
}

/**
 * Dark Mode auf Systemeinstellung zurücksetzen
 * Entfernt die manuelle Präferenz und lässt light-dark() & color-scheme automatisch arbeiten
 */
function resetDarkMode() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (prefersDarkMode) {
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }
  
  // Gespeicherte Präferenz löschen
  localStorage.removeItem(DARK_MODE_STORAGE_KEY);
  
  // Event auslösen
  document.dispatchEvent(new CustomEvent('darkModeChanged', { 
    detail: { darkMode: prefersDarkMode, auto: true } 
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
  // Prüfe zunächst explizite Klasse
  if (document.documentElement.classList.contains('dark-mode')) {
    return true;
  }
  
  // Sonst prüfe System-Präferenz falls kein expliziter Override vorhanden ist
  if (localStorage.getItem(DARK_MODE_STORAGE_KEY) === null) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  return false;
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
    resetDarkMode,
    getCurrentTheme,
    isDarkModeActive,
    toggleHighContrast,
    toggleReducedMotion
  };
} 