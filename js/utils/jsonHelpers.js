/**
 * JSON Helper Functions
 * 
 * Safe utilities for JSON parsing and stringifying with fallbacks.
 */

/**
 * Safe JSON Parse
 * 
 * Safely parses JSON strings with fallback values for malformed data.
 * Perfect for localStorage, API responses, or any untrusted JSON.
 * 
 * @param {string} str - The JSON string to parse
 * @param {*} fallback - Fallback value if parsing fails (default: {})
 * @returns {*} Parsed object or fallback value
 * 
 * @example
 * // Safe localStorage parsing
 * const user = safeJsonParse(localStorage.getItem('user'));
 * 
 * @example
 * // With custom fallback
 * const settings = safeJsonParse(apiResponse, { theme: 'light' });
 */
export function safeJsonParse(str, fallback = {}) {
  if (typeof str !== 'string') {
    return fallback;
  }
  
  try {
    const parsed = JSON.parse(str);
    return parsed !== null ? parsed : fallback;
  } catch (error) {
    console.warn('JSON parse failed:', error.message);
    return fallback;
  }
}

/**
 * Safe JSON Stringify
 * 
 * Safely stringifies objects with fallback for circular references.
 * 
 * @param {*} obj - The object to stringify
 * @param {string} fallback - Fallback string if stringifying fails (default: '{}')
 * @param {number} space - Number of spaces for indentation (optional)
 * @returns {string} JSON string or fallback
 * 
 * @example
 * const jsonString = safeJsonStringify(complexObject);
 * localStorage.setItem('data', jsonString);
 */
export function safeJsonStringify(obj, fallback = '{}', space = null) {
  try {
    return JSON.stringify(obj, null, space);
  } catch (error) {
    console.warn('JSON stringify failed:', error.message);
    return fallback;
  }
}

/**
 * Deep Clone using JSON (for simple objects)
 * 
 * Creates a deep copy of an object using JSON parse/stringify.
 * Note: This method doesn't preserve functions, undefined values, or symbols.
 * 
 * @param {*} obj - The object to clone
 * @param {*} fallback - Fallback if cloning fails
 * @returns {*} Deep cloned object or fallback
 * 
 * @example
 * const clonedUser = deepCloneJson(originalUser);
 */
export function deepCloneJson(obj, fallback = null) {
  return safeJsonParse(safeJsonStringify(obj), fallback);
}

/**
 * Check if string is valid JSON
 * 
 * @param {string} str - String to validate
 * @returns {boolean} True if valid JSON
 * 
 * @example
 * if (isValidJson(userInput)) {
 *   const data = JSON.parse(userInput);
 * }
 */
export function isValidJson(str) {
  if (typeof str !== 'string') return false;
  
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

export { safeJsonParse as default }; 