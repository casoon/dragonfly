/**
 * Menu JavaScript
 * 
 * Enhanced menu functionality for headers, off-canvas, and nested navigation.
 * Supports mobile hamburger menus, dropdowns, megamenus, and accessibility.
 */

class MenuSystem {
  constructor() {
    this.init();
  }

  init() {
    this.initHeaderMenu();
    this.initOffCanvas();
    this.initDropdowns();
    this.initNestedNavigation();
    this.initKeyboardNavigation();
    this.initAccessibility();
  }

  // Header mobile menu functionality
  initHeaderMenu() {
    const headerToggle = document.querySelector('.header-toggle');
    const headerMobile = document.querySelector('.header-mobile');

    if (headerToggle && headerMobile) {
      headerToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = headerToggle.getAttribute('aria-expanded') === 'true';
        
        headerToggle.setAttribute('aria-expanded', !isExpanded);
        headerMobile.classList.toggle('visible');
        
        const hamburger = headerToggle.querySelector('.hamburger');
        if (hamburger) {
          hamburger.classList.toggle('active');
        }
      });
    }
  }

  // Off-canvas menu functionality
  initOffCanvas() {
    const triggers = document.querySelectorAll('.off-canvas-trigger');
    const closeButtons = document.querySelectorAll('.off-canvas-close');
    const overlays = document.querySelectorAll('.off-canvas-overlay');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = trigger.getAttribute('data-target');
        const offCanvas = document.querySelector(targetId || '.off-canvas');
        const overlay = document.querySelector('.off-canvas-overlay');
        
        if (offCanvas) {
          offCanvas.classList.toggle('open');
          overlay?.classList.toggle('visible');
          
          const hamburger = trigger.querySelector('.hamburger');
          if (hamburger) {
            hamburger.classList.toggle('active');
          }
        }
      });
    });

    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.closeAllOffCanvas();
      });
    });

    overlays.forEach(overlay => {
      overlay.addEventListener('click', () => {
        this.closeAllOffCanvas();
      });
    });
  }

  // Desktop dropdown functionality
  initDropdowns() {
    const dropdownItems = document.querySelectorAll('.header-nav .has-dropdown');
    
    dropdownItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('open');
      });
      
      item.addEventListener('mouseleave', () => {
        item.classList.remove('open');
      });
    });
  }

  // Nested navigation (mobile and off-canvas)
  initNestedNavigation() {
    const nestedItems = document.querySelectorAll('.has-submenu');
    
    nestedItems.forEach(item => {
      const link = item.querySelector('a');
      
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          item.classList.toggle('open');
        });
      }
    });
  }

  // Keyboard navigation
  initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllMenus();
      }
    });
  }

  // Accessibility enhancements
  initAccessibility() {
    // Add ARIA attributes
    const dropdownToggles = document.querySelectorAll('.has-dropdown > a, .has-submenu > a');
    dropdownToggles.forEach(toggle => {
      toggle.setAttribute('aria-haspopup', 'true');
      toggle.setAttribute('aria-expanded', 'false');
    });

    // Update ARIA states
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          const isOpen = target.classList.contains('open');
          const toggle = target.querySelector('a');
          
          if (toggle) {
            toggle.setAttribute('aria-expanded', isOpen.toString());
          }
        }
      });
    });

    document.querySelectorAll('.has-dropdown, .has-submenu').forEach(item => {
      observer.observe(item, { attributes: true });
    });
  }

  // Helper methods
  closeAllOffCanvas() {
    document.querySelectorAll('.off-canvas').forEach(menu => {
      menu.classList.remove('open');
    });
    document.querySelectorAll('.off-canvas-overlay').forEach(overlay => {
      overlay.classList.remove('visible');
    });
    document.querySelectorAll('.hamburger').forEach(hamburger => {
      hamburger.classList.remove('active');
    });
  }

  closeAllMenus() {
    document.querySelector('.header-mobile')?.classList.remove('visible');
    document.querySelector('.header-toggle')?.setAttribute('aria-expanded', 'false');
    this.closeAllOffCanvas();
  }
}

// Initialize menu system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MenuSystem();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MenuSystem;
} 