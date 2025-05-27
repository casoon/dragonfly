/**
 * Browser Compatibility Tests - Documentation Script
 * 
 * This script collects browser information and feature support
 * and documents them in a JSON file for further analysis.
 */

(function() {
  'use strict';
  
  // Get browser information
  function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browserName, browserVersion, os, osVersion;
    
    // Extract browser and version
    if (ua.includes('Firefox/')) {
      browserName = 'Firefox';
      browserVersion = ua.match(/Firefox\/([\d.]+)/)[1];
    } else if (ua.includes('Chrome/') && !ua.includes('Edg/') && !ua.includes('OPR/')) {
      browserName = 'Chrome';
      browserVersion = ua.match(/Chrome\/([\d.]+)/)[1];
    } else if (ua.includes('Safari/') && !ua.includes('Chrome/')) {
      browserName = 'Safari';
      const versionMatch = ua.match(/Version\/([\d.]+)/);
      browserVersion = versionMatch ? versionMatch[1] : 'Unknown';
    } else if (ua.includes('Edg/')) {
      browserName = 'Edge';
      browserVersion = ua.match(/Edg\/([\d.]+)/)[1];
    } else if (ua.includes('OPR/') || ua.includes('Opera/')) {
      browserName = 'Opera';
      browserVersion = ua.match(/(?:OPR|Opera)\/([\d.]+)/)[1];
    } else {
      browserName = 'Unknown';
      browserVersion = 'Unknown';
    }
    
    // Extract operating system
    if (ua.includes('Windows')) {
      os = 'Windows';
      const ntVersion = ua.match(/Windows NT ([\d.]+)/);
      if (ntVersion) {
        switch (ntVersion[1]) {
          case '10.0': osVersion = '10'; break;
          case '6.3': osVersion = '8.1'; break;
          case '6.2': osVersion = '8'; break;
          case '6.1': osVersion = '7'; break;
          default: osVersion = ntVersion[1];
        }
      } else {
        osVersion = 'Unknown';
      }
    } else if (ua.includes('Macintosh') || ua.includes('Mac OS X')) {
      os = 'macOS';
      const macVersion = ua.match(/Mac OS X ([\d_.]+)/);
      if (macVersion) {
        osVersion = macVersion[1].replace(/_/g, '.');
      } else {
        osVersion = 'Unknown';
      }
    } else if (ua.includes('Linux')) {
      os = 'Linux';
      osVersion = 'Unknown';
    } else if (ua.includes('Android')) {
      os = 'Android';
      const androidVersion = ua.match(/Android ([\d.]+)/);
      osVersion = androidVersion ? androidVersion[1] : 'Unknown';
    } else if (ua.includes('iOS')) {
      os = 'iOS';
      const iosVersion = ua.match(/OS ([\d_]+)/);
      osVersion = iosVersion ? iosVersion[1].replace(/_/g, '.') : 'Unknown';
    } else {
      os = 'Unknown';
      osVersion = 'Unknown';
    }
    
    return {
      browser: browserName,
      version: browserVersion,
      os: os,
      osVersion: osVersion,
      userAgent: ua,
      language: navigator.language,
      languages: navigator.languages ? Array.from(navigator.languages) : [navigator.language],
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1,
      touchSupport: ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)
    };
  }
  
  // Test feature support
  function checkFeatureSupport() {
    const features = {};
    
    // CSS features
    features.css = {
      // Viewport Units
      viewportUnits: {
        vw: checkCSSSupport('width', '1vw'),
        vh: checkCSSSupport('height', '1vh'),
        svw: checkCSSSupport('width', '1svw'),
        svh: checkCSSSupport('height', '1svh'),
        lvw: checkCSSSupport('width', '1lvw'),
        lvh: checkCSSSupport('height', '1lvh'),
        dvw: checkCSSSupport('width', '1dvw'),
        dvh: checkCSSSupport('height', '1dvh')
      },
      
      // Container Queries
      containerQueries: checkCSSSupport('container-type', 'size'),
      
      // CSS Variables
      cssVariables: checkCSSSupport('--test', 'red') && checkComputedStyle('--test'),
      
      // CSS Layers
      cssLayers: typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('@layer test {}'),
      
      // Media Queries
      mediaQueries: {
        prefersColorScheme: window.matchMedia('(prefers-color-scheme)').media !== 'not all',
        prefersReducedMotion: window.matchMedia('(prefers-reduced-motion)').media !== 'not all',
        forcedColors: window.matchMedia('(forced-colors)').media !== 'not all',
        darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    };
    
    // JavaScript features
    features.js = {
      localStorage: checkLocalStorage(),
      sessionStorage: checkSessionStorage(),
      customEvents: checkCustomEvents(),
      intersectionObserver: typeof IntersectionObserver !== 'undefined',
      resizeObserver: typeof ResizeObserver !== 'undefined',
      mutationObserver: typeof MutationObserver !== 'undefined'
    };
    
    // Accessibility features
    features.accessibility = {
      ariaSupport: document.createElement('div').hasAttribute('role') !== undefined,
      focusVisible: checkCSSSupport(':focus-visible', 'outline-color: red'),
      reduced: {
        motion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        data: window.matchMedia('(prefers-reduced-data: reduce)').matches,
        transparency: window.matchMedia('(prefers-reduced-transparency: reduce)').matches
      }
    };
    
    return features;
  }
  
  // Hilfsfunktion zum Testen von CSS-Unterstützung
  function checkCSSSupport(property, value) {
    const el = document.createElement('div');
    
    try {
      if (property.startsWith('--')) {
        // CSS-Variable
        el.style.setProperty(property, value);
        return el.style.getPropertyValue(property) !== '';
      } else if (property.startsWith(':')) {
        // CSS-Pseudo-Selector
        return typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports(property, value);
      } else if (property.startsWith('@')) {
        // CSS-At-Rule
        return typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports(property);
      } else {
        // Standard-Property
        el.style[property] = value;
        return el.style[property] === value;
      }
    } catch (e) {
      return false;
    }
  }
  
  // Überprüft, ob CSS-Variablen im computedStyle funktionieren
  function checkComputedStyle(property) {
    try {
      const el = document.createElement('div');
      document.body.appendChild(el);
      el.style.setProperty(property, 'red');
      const computed = getComputedStyle(el).getPropertyValue(property);
      document.body.removeChild(el);
      return computed !== '';
    } catch (e) {
      return false;
    }
  }
  
  // Überprüft LocalStorage-Unterstützung
  function checkLocalStorage() {
    try {
      localStorage.setItem('test', 'test');
      const result = localStorage.getItem('test') === 'test';
      localStorage.removeItem('test');
      return result;
    } catch (e) {
      return false;
    }
  }
  
  // Überprüft SessionStorage-Unterstützung
  function checkSessionStorage() {
    try {
      sessionStorage.setItem('test', 'test');
      const result = sessionStorage.getItem('test') === 'test';
      sessionStorage.removeItem('test');
      return result;
    } catch (e) {
      return false;
    }
  }
  
  // Überprüft Custom Events-Unterstützung
  function checkCustomEvents() {
    try {
      const event = new CustomEvent('test');
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // Sammelt alle Tests und dokumentiert sie
  function runTests() {
    const results = {
      timestamp: new Date().toISOString(),
      browserInfo: getBrowserInfo(),
      featureSupport: checkFeatureSupport()
    };
    
    // Ergebnisse anzeigen (für Testzwecke)
    console.log('Testergebnisse:', results);
    
    // Ergebnisse als JSON herunterladen
    const jsonString = JSON.stringify(results, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `browser-compat-test_${results.browserInfo.browser}_${results.browserInfo.version}_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    link.textContent = 'Testergebnisse herunterladen';
    link.className = 'download-link';
    link.style.display = 'inline-block';
    link.style.margin = '1rem 0';
    link.style.padding = '0.5rem 1rem';
    link.style.backgroundColor = 'var(--color-primary-500)';
    link.style.color = 'white';
    link.style.borderRadius = 'var(--border-radius-md)';
    link.style.textDecoration = 'none';
    
    // Link in die Seite einfügen
    const resultContainer = document.getElementById('testResults') || document.body;
    resultContainer.appendChild(link);
    
    // Zusammenfassung anzeigen
    displaySummary(results, resultContainer);
    
    return results;
  }
  
  // Zeigt eine Zusammenfassung der Testergebnisse an
  function displaySummary(results, container) {
    const summary = document.createElement('div');
    summary.className = 'test-summary';
    summary.style.margin = '1rem 0';
    summary.style.padding = '1rem';
    summary.style.backgroundColor = 'var(--color-surface)';
    summary.style.borderRadius = 'var(--border-radius-md)';
    summary.style.border = '1px solid var(--color-border)';
    
    // Browser-Info
    const browserInfo = document.createElement('div');
    browserInfo.innerHTML = `
      <h3>Browser-Information</h3>
      <p><strong>Browser:</strong> ${results.browserInfo.browser} ${results.browserInfo.version}</p>
      <p><strong>Betriebssystem:</strong> ${results.browserInfo.os} ${results.browserInfo.osVersion}</p>
      <p><strong>Viewport:</strong> ${results.browserInfo.viewportWidth}×${results.browserInfo.viewportHeight} (${results.browserInfo.devicePixelRatio}×)</p>
    `;
    
    // Feature-Support
    const featureSupport = document.createElement('div');
    featureSupport.innerHTML = `
      <h3>Feature-Unterstützung</h3>
      <h4>Viewport Units</h4>
      <ul>
        <li>vw/vh: ${results.featureSupport.css.viewportUnits.vw && results.featureSupport.css.viewportUnits.vh ? '✅' : '❌'}</li>
        <li>svw/svh: ${results.featureSupport.css.viewportUnits.svw && results.featureSupport.css.viewportUnits.svh ? '✅' : '❌'}</li>
        <li>lvw/lvh: ${results.featureSupport.css.viewportUnits.lvw && results.featureSupport.css.viewportUnits.lvh ? '✅' : '❌'}</li>
        <li>dvw/dvh: ${results.featureSupport.css.viewportUnits.dvw && results.featureSupport.css.viewportUnits.dvh ? '✅' : '❌'}</li>
      </ul>
      
      <h4>CSS Features</h4>
      <ul>
        <li>CSS Variables: ${results.featureSupport.css.cssVariables ? '✅' : '❌'}</li>
        <li>CSS Layers: ${results.featureSupport.css.cssLayers ? '✅' : '❌'}</li>
        <li>Container Queries: ${results.featureSupport.css.containerQueries ? '✅' : '❌'}</li>
      </ul>
      
      <h4>Media Queries</h4>
      <ul>
        <li>prefers-color-scheme: ${results.featureSupport.css.mediaQueries.prefersColorScheme ? '✅' : '❌'}</li>
        <li>prefers-reduced-motion: ${results.featureSupport.css.mediaQueries.prefersReducedMotion ? '✅' : '❌'}</li>
        <li>forced-colors: ${results.featureSupport.css.mediaQueries.forcedColors ? '✅' : '❌'}</li>
      </ul>
      
      <h4>Accessibility</h4>
      <ul>
        <li>ARIA-Support: ${results.featureSupport.accessibility.ariaSupport ? '✅' : '❌'}</li>
        <li>:focus-visible: ${results.featureSupport.accessibility.focusVisible ? '✅' : '❌'}</li>
        <li>prefers-reduced-motion: ${results.featureSupport.accessibility.reduced.motion ? '✅ (aktiviert)' : '✅ (deaktiviert)'}</li>
      </ul>
      
      <h4>Storage</h4>
      <ul>
        <li>localStorage: ${results.featureSupport.js.localStorage ? '✅' : '❌'}</li>
        <li>sessionStorage: ${results.featureSupport.js.sessionStorage ? '✅' : '❌'}</li>
      </ul>
    `;
    
    summary.appendChild(browserInfo);
    summary.appendChild(featureSupport);
    container.appendChild(summary);
  }
  
  // Test-Button erstellen und an jede Testseite anhängen
  function createTestButton() {
    const button = document.createElement('button');
    button.textContent = 'Kompatibilitätstest durchführen';
    button.id = 'runTestsButton';
    button.style.margin = '1rem 0';
    button.style.padding = '0.5rem 1rem';
    button.style.backgroundColor = 'var(--color-primary-500)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = 'var(--border-radius-md)';
    button.style.cursor = 'pointer';
    
    // Ergebnis-Container erstellen
    const resultContainer = document.createElement('div');
    resultContainer.id = 'testResults';
    
    // An die Seite anhängen
    const testSection = document.querySelector('.test-section') || document.body;
    testSection.appendChild(document.createElement('hr'));
    testSection.appendChild(document.createElement('h2')).textContent = 'Kompatibilitätstests';
    testSection.appendChild(button);
    testSection.appendChild(resultContainer);
    
    // Event-Listener hinzufügen
    button.addEventListener('click', runTests);
  }
  
  // Initialisierung
  document.addEventListener('DOMContentLoaded', function() {
    createTestButton();
  });
})(); 