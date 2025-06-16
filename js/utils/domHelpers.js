/**
 * DOM Helper Functions
 *
 * Utilities for DOM manipulation, file downloads, and browser interactions.
 */

/**
 * Download file from URL
 *
 * Enables quick, user-friendly downloads without opening new tabs.
 * Works with both URLs and data URIs.
 *
 * @param {string} url - URL or data URI of the file
 * @param {string} filename - Desired filename for download
 * @param {Object} options - Download options
 * @param {boolean} options.newTab - Open in new tab instead of direct download
 * @returns {boolean} True if download was initiated
 *
 * @example
 * // Download PDF
 * downloadFile('/resume.pdf', 'MyResume.pdf');
 *
 * @example
 * // Download data as file
 * const data = JSON.stringify(userData, null, 2);
 * const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(data)}`;
 * downloadFile(dataUri, 'user-data.json');
 */
export function downloadFile(url, filename, options = {}) {
  const { newTab = false } = options;

  if (!url || !filename) {
    console.warn('downloadFile: URL and filename are required');
    return false;
  }

  try {
    if (newTab) {
      window.open(url, '_blank');
      return true;
    }

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    return true;
  } catch (error) {
    console.error('Download failed:', error);
    return false;
  }
}

/**
 * Download text content as file
 *
 * @param {string} content - Text content to download
 * @param {string} filename - Filename for download
 * @param {string} mimeType - MIME type (default: 'text/plain')
 * @returns {boolean} True if download was initiated
 *
 * @example
 * downloadTextAsFile('Hello World!', 'greeting.txt');
 * downloadTextAsFile(JSON.stringify(data), 'data.json', 'application/json');
 */
export function downloadTextAsFile(content, filename, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const success = downloadFile(url, filename);

  // Clean up object URL
  setTimeout(() => URL.revokeObjectURL(url), 100);

  return success;
}

/**
 * Check if element is in viewport
 *
 * @param {Element} element - DOM element to check
 * @param {number} threshold - Percentage of element that must be visible (0-1)
 * @returns {boolean} True if element is in viewport
 *
 * @example
 * if (isInViewport(element)) {
 *   // Element is visible, start animation
 * }
 */
export function isInViewport(element, threshold = 0) {
  if (!element || !element.getBoundingClientRect) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const verticalVisible = rect.top < windowHeight && rect.bottom > 0;
  const horizontalVisible = rect.left < windowWidth && rect.right > 0;

  if (!verticalVisible || !horizontalVisible) return false;

  if (threshold === 0) return true;

  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
  const visibleArea = visibleHeight * visibleWidth;
  const totalArea = rect.height * rect.width;

  return visibleArea / totalArea >= threshold;
}

/**
 * Smooth scroll to element
 *
 * @param {Element|string} target - Element or selector to scroll to
 * @param {Object} options - Scroll options
 * @param {number} options.offset - Offset from target in pixels
 * @param {string} options.behavior - Scroll behavior ('smooth', 'auto')
 * @param {string} options.block - Vertical alignment ('start', 'center', 'end')
 * @returns {boolean} True if scroll was initiated
 *
 * @example
 * scrollToElement('#section-2', { offset: -100 });
 * scrollToElement(document.getElementById('target'), { behavior: 'smooth' });
 */
export function scrollToElement(target, options = {}) {
  const { offset = 0, behavior = 'smooth', block = 'start' } = options;

  const element = typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) {
    console.warn('scrollToElement: Target element not found');
    return false;
  }

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });

  return true;
}

/**
 * Get element's computed style property
 *
 * @param {Element} element - DOM element
 * @param {string} property - CSS property name
 * @returns {string} Computed style value
 *
 * @example
 * const color = getComputedStyle(element, 'color');
 * const width = getComputedStyle(element, 'width');
 */
export function getComputedStyleProperty(element, property) {
  if (!element || !property) return '';

  const computed = window.getComputedStyle(element);
  return computed.getPropertyValue(property);
}

/**
 * Wait for element to appear in DOM
 *
 * @param {string} selector - CSS selector
 * @param {number} timeout - Timeout in milliseconds (default: 5000)
 * @returns {Promise<Element>} Promise that resolves with element
 *
 * @example
 * const modal = await waitForElement('.modal');
 * modal.focus();
 */
export function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
}

/**
 * Create and dispatch custom event
 *
 * @param {string} eventName - Name of the event
 * @param {*} detail - Event detail data
 * @param {Element} target - Target element (default: document)
 * @returns {boolean} True if event was dispatched
 *
 * @example
 * dispatchCustomEvent('user:login', { userId: 123 });
 * dispatchCustomEvent('modal:close', null, modalElement);
 */
export function dispatchCustomEvent(eventName, detail = null, target = document) {
  if (!eventName) return false;

  try {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      cancelable: true,
    });

    return target.dispatchEvent(event);
  } catch (error) {
    console.error('Failed to dispatch custom event:', error);
    return false;
  }
}

/**
 * Get element's position relative to page
 *
 * @param {Element} element - DOM element
 * @returns {Object} Object with x, y, width, height properties
 *
 * @example
 * const pos = getElementPosition(button);
 * console.log(`Button is at ${pos.x}, ${pos.y}`);
 */
export function getElementPosition(element) {
  if (!element || !element.getBoundingClientRect) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }

  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return {
    x: rect.left + scrollLeft,
    y: rect.top + scrollTop,
    width: rect.width,
    height: rect.height,
  };
}

export { downloadFile as default };
