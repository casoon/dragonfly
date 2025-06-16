/**
 * Clipboard Utilities
 *
 * Functions for copying to and reading from the clipboard.
 * Handles both modern Clipboard API and fallback methods.
 */

/**
 * Copy text to clipboard
 *
 * Uses modern Clipboard API with fallback for older browsers.
 * Perfect for "copy link" or "copy code" functionality.
 *
 * @param {string} text - Text to copy to clipboard
 * @returns {Promise<boolean>} Promise that resolves to true if successful
 *
 * @example
 * // Basic usage
 * const success = await copyToClipboard('Hello World!');
 * if (success) {
 *   showToast('Copied to clipboard!');
 * }
 *
 * @example
 * // In a React component
 * <button onClick={() => copyToClipboard(url)}>Copy Link</button>
 */
export async function copyToClipboard(text) {
  // Check if text is provided
  if (!text || typeof text !== 'string') {
    console.warn('copyToClipboard: Invalid text provided');
    return false;
  }

  // Try modern Clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn('Clipboard API failed, trying fallback:', err);
    }
  }

  // Fallback method for older browsers
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);

    return successful;
  } catch (err) {
    console.error('Copy to clipboard failed:', err);
    return false;
  }
}

/**
 * Read text from clipboard
 *
 * Reads text from clipboard using the Clipboard API.
 * Requires user permission and secure context.
 *
 * @returns {Promise<string|null>} Promise that resolves to clipboard text or null
 *
 * @example
 * const clipboardText = await readFromClipboard();
 * if (clipboardText) {
 *   console.log('Clipboard contains:', clipboardText);
 * }
 */
export async function readFromClipboard() {
  if (!navigator.clipboard || !window.isSecureContext) {
    console.warn('Clipboard API not available');
    return null;
  }

  try {
    const text = await navigator.clipboard.readText();
    return text;
  } catch (err) {
    console.warn('Failed to read from clipboard:', err);
    return null;
  }
}

/**
 * Check if clipboard API is supported
 *
 * @returns {boolean} True if clipboard operations are supported
 *
 * @example
 * if (isClipboardSupported()) {
 *   // Show copy button
 * }
 */
export function isClipboardSupported() {
  return !!(navigator.clipboard || document.execCommand);
}

/**
 * Copy formatted text (HTML) to clipboard
 *
 * Copies both plain text and HTML to clipboard for rich formatting.
 *
 * @param {string} html - HTML content to copy
 * @param {string} text - Plain text fallback
 * @returns {Promise<boolean>} Promise that resolves to true if successful
 *
 * @example
 * await copyFormattedToClipboard(
 *   '<strong>Bold text</strong>',
 *   'Bold text'
 * );
 */
export async function copyFormattedToClipboard(html, text) {
  if (!navigator.clipboard || !window.isSecureContext) {
    // Fallback to plain text
    return copyToClipboard(text);
  }

  try {
    const clipboardItem = new ClipboardItem({
      'text/html': new Blob([html], { type: 'text/html' }),
      'text/plain': new Blob([text], { type: 'text/plain' }),
    });

    await navigator.clipboard.write([clipboardItem]);
    return true;
  } catch (err) {
    console.warn('Formatted copy failed, trying plain text:', err);
    return copyToClipboard(text);
  }
}

export { copyToClipboard as default };
