// Logger-Funktion statt direkter console-Aufrufe
const logger = {
  /**
   * Loggt eine Nachricht, aber nur im Entwicklungsmodus
   * @param {string} message - Die zu loggende Nachricht
   */
  log(message) {
    try {
      if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
      }
    } catch (e) {
      // Ignoriere Fehler in Umgebungen ohne process
    }
  },

  /**
   * Loggt eine Warnung
   * @param {string} message - Die Warnmeldung
   */
  warn(message) {
    // eslint-disable-next-line no-console
    console.warn(message);
  },

  /**
   * Loggt einen Fehler
   * @param {string} message - Die Fehlermeldung
   * @param {Error} [err] - Das optionale Error-Objekt
   */
  error(message, err) {
    // eslint-disable-next-line no-console
    console.error(message, err);
  },
};

/**
 * Prüft, ob der Browser die View Transitions API unterstützt
 * @returns {boolean} True wenn die API unterstützt wird
 */
function supportsViewTransitions() {
  return typeof document !== 'undefined' && typeof document.startViewTransition === 'function';
}

/**
 * Basisklasse für View Transitions
 */
class ViewTransitionHandler {
  /**
   * Erstellt eine neue ViewTransitionHandler-Instanz
   */
  constructor() {
    this.initialized = false;
    this.transitionActive = false;
    this.defaultTransitionType = 'basic'; // basic, crossfade, slide-left, slide-right, scale
    this.posterTransitionType = 'cover'; // cover, contain, zoom-in, flip, reveal
    this._eventListeners = []; // Speichert registrierte Event-Listener für cleanup
  }

  /**
   * Registriert einen Event-Listener und speichert ihn für das spätere Entfernen
   * @param {EventTarget} target - Das Ziel für den Event-Listener (z.B. document)
   * @param {string} type - Der Event-Typ (z.B. 'click')
   * @param {Function} listener - Die Callback-Funktion
   * @param {boolean|Object} [options] - Event-Listener-Optionen
   * @private
   */
  _addEventListenerWithCleanup(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    this._eventListeners.push({ target, type, listener, options });
  }

  /**
   * Cleanup method to remove all event listeners
   */
  cleanup() {
    for (const { target, type, listener, options } of this._eventListeners) {
      target.removeEventListener(type, listener, options);
    }
    this._eventListeners = [];
  }

  /**
   * Initialisiert die View Transitions API
   * @param {Object} options - Konfigurationsoptionen
   * @param {boolean} [options.handleAnchors=true] - Behandelt Anker-Elemente automatisch
   * @param {boolean} [options.handleForms=true] - Behandelt Formulare automatisch
   * @param {boolean} [options.handlePosters=true] - Behandelt Poster-Elemente automatisch
   * @param {boolean} [options.handleBackButton=true] - Behandelt den Zurück-Button automatisch
   * @param {string} [options.defaultTransitionType='basic'] - Standard-Übergangstyp
   * @param {string} [options.posterTransitionType='cover'] - Standard-Poster-Übergangstyp
   * @returns {void}
   */
  init(options = {}) {
    if (this.initialized) {
      return;
    }

    const defaultOptions = {
      handleAnchors: true,
      handleForms: true,
      handlePosters: true,
      handleBackButton: true,
      defaultTransitionType: 'basic',
      posterTransitionType: 'cover',
    };

    const config = { ...defaultOptions, ...options };

    this.defaultTransitionType = config.defaultTransitionType;
    this.posterTransitionType = config.posterTransitionType;

    // Überprüfen der Browser-Unterstützung
    if (!supportsViewTransitions()) {
      logger.warn('View Transitions API wird von diesem Browser nicht unterstützt.');
      return;
    }

    // Event-Listener registrieren
    if (config.handleAnchors) {
      this.setupAnchorHandlers();
    }

    if (config.handleForms) {
      this.setupFormHandlers();
    }

    if (config.handlePosters) {
      this.setupPosterHandlers();
    }

    if (config.handleBackButton) {
      this.setupBackButtonHandler();
    }

    this.initialized = true;
    logger.log('View Transitions API Handler initialisiert.');
  }

  /**
   * Richtet Event-Handler für Anker-Elemente ein
   * @returns {void}
   */
  setupAnchorHandlers() {
    const handleAnchorClick = (e) => {
      // Überprüfen, ob es sich um einen Link handelt und ob er zur selben Domain führt
      const anchor = e.target.closest('a');
      if (!anchor) {
        return;
      }

      // Spezielle Links ignorieren
      if (
        anchor.hasAttribute('download') ||
        anchor.target === '_blank' ||
        anchor.dataset.noTransition === 'true'
      ) {
        return;
      }

      // Überprüfen, ob die URL zur selben Domain gehört
      try {
        const url = new URL(anchor.href);
        if (url.origin !== window.location.origin) {
          return;
        }
      } catch (err) {
        return; // Ungültige URL
      }

      // Transition-Typ aus Datenattribut oder Standard verwenden
      const transitionType = anchor.dataset.transitionType || this.defaultTransitionType;

      e.preventDefault();
      this.navigateTo(anchor.href, transitionType);
    };

    this._addEventListenerWithCleanup(document, 'click', handleAnchorClick);
  }

  /**
   * Richtet Event-Handler für Formulare ein
   * @returns {void}
   */
  setupFormHandlers() {
    const handleFormSubmit = (e) => {
      const form = e.target;

      // Formulare mit speziellem Attribut ignorieren
      if (form.dataset.noTransition === 'true' || form.method === 'post') {
        return;
      }

      // Nur GET-Formulare unterstützen
      if (form.method.toLowerCase() === 'get' && form.action) {
        e.preventDefault();

        const formData = new FormData(form);
        const queryParams = new URLSearchParams(formData).toString();
        const url = form.action + (form.action.includes('?') ? '&' : '?') + queryParams;

        const transitionType = form.dataset.transitionType || this.defaultTransitionType;
        this.navigateTo(url, transitionType);
      }
    };

    this._addEventListenerWithCleanup(document, 'submit', handleFormSubmit);
  }

  /**
   * Richtet Event-Handler für Poster-Elemente ein
   * @returns {void}
   */
  setupPosterHandlers() {
    const handlePosterClick = (e) => {
      const poster = e.target.closest('.view-transition-poster');
      if (!poster) {
        return;
      }

      const transitionType = poster.dataset.transitionType || this.posterTransitionType;
      const transitionCallback = poster.dataset.transitionCallback;

      if (transitionCallback && typeof window[transitionCallback] === 'function') {
        e.preventDefault();
        this.transitionElement(poster, transitionType, window[transitionCallback]);
      }
    };

    this._addEventListenerWithCleanup(document, 'click', handlePosterClick);
  }

  /**
   * Richtet Event-Handler für den Zurück-Button ein
   * @returns {void}
   */
  setupBackButtonHandler() {
    const handlePopState = (e) => {
      if (this.transitionActive) {
        return;
      }

      // Übergangstyp für Zurück-Navigation (kann aus dem History-State kommen)
      const state = e.state || {};
      const transitionType = state.transitionType || 'slide-right';

      if (!supportsViewTransitions()) {
        return;
      }

      // View Transition für Browser-Zurück-Taste
      try {
        document.startViewTransition(() => {
          this.transitionActive = true;
          // Wir müssen nichts tun, da der Browser bereits die URL geändert hat
          this.transitionActive = false;
        });

        // Übergangstyp anwenden
        this.applyTransitionType(transitionType);
      } catch (error) {
        logger.error('Fehler beim Verarbeiten der Zurück-Navigation', error);
        this.transitionActive = false;
      }
    };

    this._addEventListenerWithCleanup(window, 'popstate', handlePopState);
  }

  /**
   * Navigiert zu einer URL mit Übergangseffekt
   * @param {string} url - Ziel-URL
   * @param {string} [transitionType='basic'] - Typ des Übergangseffekts
   * @returns {void}
   */
  navigateTo(url, transitionType = 'basic') {
    if (this.transitionActive || !supportsViewTransitions()) {
      // Fallback für fehlende Unterstützung
      window.location.href = url;
      return;
    }

    this.transitionActive = true;
    this.applyTransitionType(transitionType);

    try {
      // Transition starten
      const transition = document.startViewTransition(() => {
        // History-Eintrag hinzufügen
        window.history.pushState({ transitionType }, '', url);

        // Seite laden
        window.location.href = url;
      });

      transition.finished
        .then(() => {
          this.transitionActive = false;
        })
        .catch((error) => {
          logger.error('Transition fehlgeschlagen:', error);
          this.transitionActive = false;
        });
    } catch (error) {
      logger.error('Fehler beim Starten der View Transition:', error);
      this.transitionActive = false;

      // Fallback zur normalen Navigation
      window.location.href = url;
    }
  }

  /**
   * Wendet den Übergangtyp auf das Dokument an
   * @param {string} transitionType - Typ des Übergangs
   * @returns {void}
   */
  applyTransitionType(transitionType) {
    if (!document.documentElement) {
      return;
    }

    // Bestehende Transition-Klassen entfernen
    document.documentElement.classList.remove(
      'cross-fade',
      'cross-slide-left',
      'cross-slide-right',
      'cross-scale'
    );

    // Neue Transition-Klasse hinzufügen
    switch (transitionType) {
      case 'crossfade':
        document.documentElement.classList.add('cross-fade');
        break;
      case 'slide-left':
        document.documentElement.classList.add('cross-slide-left');
        break;
      case 'slide-right':
        document.documentElement.classList.add('cross-slide-right');
        break;
      case 'scale':
        document.documentElement.classList.add('cross-scale');
        break;
      // Default: keine Klasse hinzufügen
      default:
        break;
    }
  }

  /**
   * Anwenden eines Übergangseffekts auf ein einzelnes Element
   * @param {HTMLElement} element - Das Element, auf das der Effekt angewendet werden soll
   * @param {string} [transitionType='cover'] - Typ des Übergangseffekts
   * @param {Function} callback - Callback-Funktion, die während des Übergangs aufgerufen wird
   * @returns {void}
   */
  transitionElement(element, transitionType, callback) {
    if (!element || !supportsViewTransitions()) {
      if (callback && typeof callback === 'function') {
        callback(element);
      }
      return;
    }

    const container = element.closest('div');
    if (!container) {
      if (callback && typeof callback === 'function') {
        callback(element);
      }
      return;
    }

    // Bestehende Poster-Klassen entfernen
    container.classList.remove(
      'poster-cover',
      'poster-contain',
      'poster-zoom-in',
      'poster-flip',
      'poster-reveal'
    );

    // Neue Poster-Klasse hinzufügen
    switch (transitionType) {
      case 'cover':
        container.classList.add('poster-cover');
        break;
      case 'contain':
        container.classList.add('poster-contain');
        break;
      case 'zoom-in':
        container.classList.add('poster-zoom-in');
        break;
      case 'flip':
        container.classList.add('poster-flip');
        break;
      case 'reveal':
        container.classList.add('poster-reveal');
        break;
      default:
        container.classList.add('poster-cover');
        break;
    }

    try {
      // Transition starten
      document.startViewTransition(() => {
        if (callback && typeof callback === 'function') {
          callback(element);
        }
      });
    } catch (error) {
      logger.error('Fehler beim Anwenden des Element-Übergangseffekts:', error);
      if (callback && typeof callback === 'function') {
        callback(element);
      }
    }
  }
}

// Singleton-Instanz erstellen
const viewTransitions = new ViewTransitionHandler();

// Exportieren für die Verwendung in anderen Modulen
export default viewTransitions;

// Automatische Initialisierung, wenn DOMContentLoaded-Event ausgelöst wird
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    viewTransitions.init();
  });
}
