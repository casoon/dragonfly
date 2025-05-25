/**
 * Theme Helper
 * 
 * JavaScript-Hilfsfunktionen für die Theme-Verwaltung.
 * Enthält Funktionen für die Persistierung und den Wechsel von Themes.
 */

(function() {
  // Theme-Speicherort im localStorage
  const THEME_STORAGE_KEY = 'casoon-ui-lib-theme';
  
  // Verfügbare Theme-Modi
  const THEME_MODES = {
    AUTO: 'auto',
    LIGHT: 'light',
    DARK: 'dark'
  };
  
  // Verfügbare Theme-Farben
  const THEME_COLORS = {
    DEFAULT: '',
    BLUE: 'blue',
    GREEN: 'green',
    PURPLE: 'purple',
    ORANGE: 'orange',
    TEAL: 'custom-teal',
    VIOLET: 'custom-violet',
    AMBER: 'custom-amber',
    RED: 'custom-red',
    CUSTOM_GREEN: 'custom-green'
  };
  
  /**
   * Initialisiert das Theme-System basierend auf den gespeicherten Einstellungen.
   * Wird beim Laden der Seite aufgerufen.
   */
  function initializeTheme() {
    // Setze die initiale Theme-Variable im HTML-Element
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme.mode, savedTheme.color);
    
    // Setze die Variable für die Theme-Persistenz vor dem Rendern
    document.documentElement.style.setProperty(
      '--initial-theme', 
      savedTheme.mode
    );
  }
  
  /**
   * Ruft das gespeicherte Theme aus dem localStorage ab.
   * @returns {Object} Ein Objekt mit den Eigenschaften 'mode' und 'color'.
   */
  function getSavedTheme() {
    try {
      const savedTheme = JSON.parse(localStorage.getItem(THEME_STORAGE_KEY));
      return {
        mode: savedTheme?.mode || THEME_MODES.AUTO,
        color: savedTheme?.color || THEME_COLORS.DEFAULT
      };
    } catch (error) {
      console.warn('Error reading theme from localStorage:', error);
      return { 
        mode: THEME_MODES.AUTO, 
        color: THEME_COLORS.DEFAULT 
      };
    }
  }
  
  /**
   * Speichert das Theme im localStorage.
   * @param {string} mode - Der Theme-Modus (auto, light, dark).
   * @param {string} color - Die Theme-Farbe.
   */
  function saveTheme(mode, color) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify({ mode, color }));
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
  }
  
  /**
   * Wendet das Theme auf das HTML-Element an.
   * @param {string} mode - Der Theme-Modus (auto, light, dark).
   * @param {string} color - Die Theme-Farbe.
   */
  function applyTheme(mode, color) {
    // Entferne alle vorherigen Theme-Klassen
    const root = document.documentElement;
    root.classList.remove('theme-auto', 'theme-light', 'theme-dark');
    
    // Entferne alle Farb-Theme-Klassen
    Object.values(THEME_COLORS).forEach(colorClass => {
      if (colorClass) {
        root.classList.remove(`theme-${colorClass}`);
      }
    });
    
    // Setze den Theme-Modus
    root.classList.add(`theme-${mode}`);
    
    // Setze die Theme-Farbe, falls vorhanden
    if (color) {
      root.classList.add(`theme-${color}`);
    }
    
    // Setze die Theme-Preference-Variable
    root.style.setProperty('--theme-preference', mode);
    
    // Speichere das Theme
    saveTheme(mode, color);
    
    // Löse ein Theme-Change-Event aus
    dispatchThemeChangeEvent(mode, color);
  }
  
  /**
   * Wechselt zum nächsten Theme-Modus (auto -> light -> dark -> auto).
   */
  function cycleThemeMode() {
    const savedTheme = getSavedTheme();
    let nextMode;
    
    switch (savedTheme.mode) {
      case THEME_MODES.AUTO:
        nextMode = THEME_MODES.LIGHT;
        break;
      case THEME_MODES.LIGHT:
        nextMode = THEME_MODES.DARK;
        break;
      case THEME_MODES.DARK:
      default:
        nextMode = THEME_MODES.AUTO;
        break;
    }
    
    applyTheme(nextMode, savedTheme.color);
    return nextMode;
  }
  
  /**
   * Setzt das Theme auf einen bestimmten Modus.
   * @param {string} mode - Der Theme-Modus (auto, light, dark).
   */
  function setThemeMode(mode) {
    if (!Object.values(THEME_MODES).includes(mode)) {
      console.warn(`Invalid theme mode: ${mode}`);
      return;
    }
    
    const savedTheme = getSavedTheme();
    applyTheme(mode, savedTheme.color);
  }
  
  /**
   * Setzt die Theme-Farbe.
   * @param {string} color - Die Theme-Farbe.
   */
  function setThemeColor(color) {
    if (color && !Object.values(THEME_COLORS).includes(color)) {
      console.warn(`Invalid theme color: ${color}`);
      return;
    }
    
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme.mode, color);
  }
  
  /**
   * Löst ein benutzerdefiniertes Event für Theme-Änderungen aus.
   * @param {string} mode - Der Theme-Modus (auto, light, dark).
   * @param {string} color - Die Theme-Farbe.
   */
  function dispatchThemeChangeEvent(mode, color) {
    const event = new CustomEvent('casoon-ui-theme-change', {
      detail: {
        mode,
        color,
        isDark: mode === THEME_MODES.DARK || 
                (mode === THEME_MODES.AUTO && 
                 window.matchMedia('(prefers-color-scheme: dark)').matches)
      }
    });
    document.dispatchEvent(event);
  }
  
  // Initialisierung des Theme-Systems
  if (typeof document !== 'undefined') {
    // Beim ersten Laden die Initialisierung durchführen
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeTheme);
    } else {
      initializeTheme();
    }
    
    // Event-Listener für Systemeinstellungsänderungen
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const savedTheme = getSavedTheme();
      if (savedTheme.mode === THEME_MODES.AUTO) {
        dispatchThemeChangeEvent(THEME_MODES.AUTO, savedTheme.color);
      }
    });
  }
  
  // Exportiere die öffentlichen Funktionen
  window.CasoonUITheme = {
    MODES: THEME_MODES,
    COLORS: THEME_COLORS,
    initialize: initializeTheme,
    getTheme: getSavedTheme,
    setMode: setThemeMode,
    setColor: setThemeColor,
    cycleMode: cycleThemeMode,
    apply: applyTheme
  };
})(); 