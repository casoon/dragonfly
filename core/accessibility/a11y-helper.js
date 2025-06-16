/**
 * Accessibility Helper
 *
 * JavaScript-Hilfsfunktionen für verbesserte Barrierefreiheit.
 * Enthält Funktionen für Keyboard-Navigation, Screenreader-Support und Kontrast.
 */

(() => {
  // Konstanten für Klassenamen
  const KEYBOARD_USER_CLASS = 'keyboard-user';
  const HIGH_CONTRAST_CLASS = 'high-contrast-mode';
  const REDUCED_MOTION_CLASS = 'reduced-motion';
  const STORAGE_KEY_CONTRAST = 'casoon-dragonfly-high-contrast';
  const STORAGE_KEY_MOTION = 'casoon-dragonfly-reduced-motion';

  /**
   * Erkennt, ob der Benutzer per Tastatur navigiert und fügt eine Klasse hinzu.
   * Dies verbessert die Sichtbarkeit des Fokusrings nur für Tastaturbenutzer.
   */
  function setupKeyboardDetection() {
    const html = document.documentElement;
    let isUsingMouse = false;

    // Bei Mausbewegung wird angenommen, dass die Maus verwendet wird
    document.addEventListener(
      'mousemove',
      () => {
        isUsingMouse = true;
        html.classList.remove(KEYBOARD_USER_CLASS);
      },
      true
    );

    // Bei Tastendruck wird angenommen, dass die Tastatur verwendet wird
    document.addEventListener(
      'keydown',
      (event) => {
        // Tab-Taste oder Pfeil-Tasten gelten als Indikator für Tastaturnavigation
        if (
          event.key === 'Tab' ||
          event.key === 'ArrowUp' ||
          event.key === 'ArrowDown' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowRight'
        ) {
          isUsingMouse = false;
          html.classList.add(KEYBOARD_USER_CLASS);
        }
      },
      true
    );

    // Fokus-Events überwachen
    document.addEventListener('focusin', () => {
      if (!isUsingMouse) {
        html.classList.add(KEYBOARD_USER_CLASS);
      }
    });
  }

  /**
   * Richtet Skip-Links ein für die Tastatur-Navigation.
   * Dies ermöglicht es Tastatur-Benutzern, direkt zum Hauptinhalt zu springen.
   */
  function setupSkipLinks() {
    // Skip-Links automatisch erkennen
    const skipLinks = document.querySelectorAll('.skip-link');

    for (const link of skipLinks) {
      // Wenn der Link ein href-Attribut hat, das auf eine ID verweist
      if (link.getAttribute('href')?.startsWith('#')) {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Tabindex hinzufügen, falls nicht vorhanden
          if (!targetElement.hasAttribute('tabindex')) {
            targetElement.setAttribute('tabindex', '-1');
          }

          // Event-Listener für den Skip-Link
          link.addEventListener('click', (event) => {
            event.preventDefault();
            targetElement.focus();
            targetElement.scrollIntoView({ behavior: 'smooth' });
          });
        }
      }
    }

    // Falls keine Skip-Links vorhanden sind, automatisch einen erstellen
    if (skipLinks.length === 0) {
      const mainContent = document.querySelector('main, [role="main"]');

      if (mainContent && !document.querySelector('.skip-link')) {
        // Skip-Link erstellen
        const skipLink = document.createElement('a');
        skipLink.classList.add('skip-link');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Zum Hauptinhalt springen';

        // ID zum Hauptinhalt hinzufügen, falls nicht vorhanden
        if (!mainContent.id) {
          mainContent.id = 'main-content';
        }

        // Tabindex hinzufügen, falls nicht vorhanden
        if (!mainContent.hasAttribute('tabindex')) {
          mainContent.setAttribute('tabindex', '-1');
        }

        // Skip-Link am Anfang des body einfügen
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Event-Listener für den Skip-Link
        skipLink.addEventListener('click', (event) => {
          event.preventDefault();
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }

  /**
   * Aktiviert/Deaktiviert den Hochkontrast-Modus.
   * @param {boolean} enable - Ob der Hochkontrast-Modus aktiviert werden soll.
   */
  function toggleHighContrast(enable) {
    let shouldEnable = enable;
    if (typeof shouldEnable !== 'boolean') {
      // Toggle-Modus, wenn kein Parameter übergeben wird
      shouldEnable = !document.documentElement.classList.contains(HIGH_CONTRAST_CLASS);
    }

    if (shouldEnable) {
      document.documentElement.classList.add(HIGH_CONTRAST_CLASS);
    } else {
      document.documentElement.classList.remove(HIGH_CONTRAST_CLASS);
    }

    // Speichern der Einstellung
    try {
      localStorage.setItem(STORAGE_KEY_CONTRAST, shouldEnable ? 'true' : 'false');
    } catch (error) {
      console.warn('Error saving high contrast setting to localStorage:', error);
    }

    // Event auslösen
    document.dispatchEvent(
      new CustomEvent('casoon-dragonfly-contrast-change', {
        detail: { highContrast: shouldEnable },
      })
    );
  }

  /**
   * Aktiviert/Deaktiviert den Modus für reduzierte Bewegung.
   * @param {boolean} enable - Ob der Modus für reduzierte Bewegung aktiviert werden soll.
   */
  function toggleReducedMotion(enable) {
    let shouldEnable = enable;
    if (typeof shouldEnable !== 'boolean') {
      // Toggle-Modus, wenn kein Parameter übergeben wird
      shouldEnable = !document.documentElement.classList.contains(REDUCED_MOTION_CLASS);
    }

    if (shouldEnable) {
      document.documentElement.classList.add(REDUCED_MOTION_CLASS);
    } else {
      document.documentElement.classList.remove(REDUCED_MOTION_CLASS);
    }

    // Speichern der Einstellung
    try {
      localStorage.setItem(STORAGE_KEY_MOTION, shouldEnable ? 'true' : 'false');
    } catch (error) {
      console.warn('Error saving reduced motion setting to localStorage:', error);
    }

    // Event auslösen
    document.dispatchEvent(
      new CustomEvent('casoon-dragonfly-motion-change', {
        detail: { reducedMotion: shouldEnable },
      })
    );
  }

  /**
   * Überwacht aria-live-Regionen und verbessert deren Zugänglichkeit.
   */
  function setupLiveRegions() {
    // Alle aria-live-Regionen finden
    const liveRegions = document.querySelectorAll('[aria-live]');

    // MutationObserver für jede Region erstellen
    for (const region of liveRegions) {
      const observer = new MutationObserver((mutations) => {
        // Bei Änderungen ggf. zusätzliche Accessibility-Verbesserungen vornehmen
        for (const mutation of mutations) {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Für hinzugefügte Nodes sicherstellen, dass sie zugänglich sind
            for (const node of mutation.addedNodes) {
              if (node.nodeType === Node.ELEMENT_NODE) {
                ensureAccessibleElement(node);
              }
            }
          }
        }
      });

      // Observer starten
      observer.observe(region, { childList: true, subtree: true });
    }
  }

  /**
   * Stellt sicher, dass ein Element für Screenreader zugänglich ist.
   * @param {Element} element - Das zu prüfende Element.
   */
  function ensureAccessibleElement(element) {
    // Prüfen, ob das Element einen Button darstellt, aber keine Rolle hat
    if (
      element.tagName !== 'BUTTON' &&
      element.getAttribute('onclick') !== null &&
      !element.getAttribute('role')
    ) {
      element.setAttribute('role', 'button');
    }

    // Prüfen, ob das Element ein Tab ist, aber keine Rolle hat
    if (element.classList.contains('tab') && !element.getAttribute('role')) {
      element.setAttribute('role', 'tab');
    }

    // Prüfen, ob das Element ein Modal ist, aber keine Rolle hat
    if (element.classList.contains('modal') && !element.getAttribute('role')) {
      element.setAttribute('role', 'dialog');
      element.setAttribute('aria-modal', 'true');
    }

    // Rekursiv für alle Kindelemente prüfen
    for (const child of Array.from(element.children)) {
      ensureAccessibleElement(child);
    }
  }

  /**
   * Stellt sicher, dass interaktive Elemente per Tastatur bedienbar sind.
   */
  function ensureKeyboardAccessibility() {
    // Elemente mit onClick-Handler, aber ohne Tastatur-Zugriff
    for (const element of document.querySelectorAll(
      '[onclick]:not(button):not(a):not([tabindex])'
    )) {
      element.setAttribute('tabindex', '0');
      element.setAttribute('role', 'button');

      // Keyboard-Event hinzufügen
      element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          element.click();
        }
      });
    }

    // Clickable elements without tabindex
    for (const element of document.querySelectorAll(
      '.clickable:not([tabindex]), .keyboard-focusable:not([tabindex])'
    )) {
      element.setAttribute('tabindex', '0');
    }
  }

  /**
   * Initialisiert alle Accessibility-Funktionen.
   */
  function initialize() {
    // Tastatur-Navigations-Erkennung einrichten
    setupKeyboardDetection();

    // Skip-Links einrichten
    setupSkipLinks();

    // Live-Regionen überwachen
    setupLiveRegions();

    // Tastatur-Bedienbarkeit sicherstellen
    ensureKeyboardAccessibility();

    // Gespeicherte Einstellungen wiederherstellen
    try {
      const savedContrast = localStorage.getItem(STORAGE_KEY_CONTRAST);
      if (savedContrast === 'true') {
        toggleHighContrast(true);
      }

      const savedMotion = localStorage.getItem(STORAGE_KEY_MOTION);
      if (savedMotion === 'true') {
        toggleReducedMotion(true);
      } else {
        // Auf Systemeinstellung für reduzierte Bewegung prüfen
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          toggleReducedMotion(true);
        }
      }
    } catch (error) {
      console.warn('Error reading accessibility settings from localStorage:', error);
    }

    // Auf Änderungen der Systemeinstellung für reduzierte Bewegung reagieren
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (event) => {
      // Nur anwenden, wenn keine benutzerdefinierte Einstellung gespeichert ist
      try {
        const savedMotion = localStorage.getItem(STORAGE_KEY_MOTION);
        if (savedMotion === null) {
          toggleReducedMotion(event.matches);
        }
      } catch (error) {
        toggleReducedMotion(event.matches);
      }
    });
  }

  // Initialisierung
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialize);
    } else {
      initialize();
    }
  }

  // API exportieren
  window.CasoonUIAccessibility = {
    toggleHighContrast,
    toggleReducedMotion,
    ensureAccessibleElement,
    ensureKeyboardAccessibility,
  };
})();
