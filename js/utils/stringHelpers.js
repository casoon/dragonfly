/**
 * String Helper Functions
 * 
 * Utilities for string manipulation, formatting, and validation.
 */

/**
 * Capitalize first letter of string
 * 
 * Small detail that adds big polish to your UI.
 * 
 * @param {string} str - String to capitalize
 * @returns {string} String with first letter capitalized
 * 
 * @example
 * capitalize('pending') // "Pending"
 * capitalize('hello world') // "Hello world"
 */
export function capitalize(str) {
  if (!str || typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Capitalize each word in a string
 * 
 * @param {string} str - String to title case
 * @returns {string} String with each word capitalized
 * 
 * @example
 * titleCase('hello world') // "Hello World"
 * titleCase('the quick brown fox') // "The Quick Brown Fox"
 */
export function titleCase(str) {
  if (!str || typeof str !== 'string') return str;
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Convert string to camelCase
 * 
 * @param {string} str - String to convert
 * @returns {string} camelCase string
 * 
 * @example
 * camelCase('hello world') // "helloWorld"
 * camelCase('user-name') // "userName"
 * camelCase('first_name') // "firstName"
 */
export function camelCase(str) {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '')
    .replace(/[-_]/g, '');
}

/**
 * Convert string to kebab-case
 * 
 * @param {string} str - String to convert
 * @returns {string} kebab-case string
 * 
 * @example
 * kebabCase('Hello World') // "hello-world"
 * kebabCase('firstName') // "first-name"
 */
export function kebabCase(str) {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Convert string to snake_case
 * 
 * @param {string} str - String to convert
 * @returns {string} snake_case string
 * 
 * @example
 * snakeCase('Hello World') // "hello_world"
 * snakeCase('firstName') // "first_name"
 */
export function snakeCase(str) {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

/**
 * Truncate string with ellipsis
 * 
 * @param {string} str - String to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated string
 * 
 * @example
 * truncate('This is a very long string', 10) // "This is a..."
 * truncate('Short', 10) // "Short"
 */
export function truncate(str, length, suffix = '...') {
  if (!str || typeof str !== 'string') return str;
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}

/**
 * Remove extra whitespace and trim
 * 
 * @param {string} str - String to clean
 * @returns {string} Cleaned string
 * 
 * @example
 * cleanWhitespace('  hello    world  ') // "hello world"
 */
export function cleanWhitespace(str) {
  if (!str || typeof str !== 'string') return str;
  return str.replace(/\s+/g, ' ').trim();
}

/**
 * Generate random string
 * 
 * @param {number} length - Length of random string
 * @param {string} chars - Characters to use (default: alphanumeric)
 * @returns {string} Random string
 * 
 * @example
 * randomString(8) // "aB3xY9mP"
 * randomString(4, '0123456789') // "7392"
 */
export function randomString(length = 8, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Escape HTML characters
 * 
 * @param {string} str - String to escape
 * @returns {string} HTML-escaped string
 * 
 * @example
 * escapeHtml('<script>alert("xss")</script>') 
 * // "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
 */
export function escapeHtml(str) {
  if (!str || typeof str !== 'string') return str;
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Strip HTML tags from string
 * 
 * @param {string} str - String with HTML
 * @returns {string} Plain text string
 * 
 * @example
 * stripHtml('<p>Hello <strong>world</strong>!</p>') // "Hello world!"
 */
export function stripHtml(str) {
  if (!str || typeof str !== 'string') return str;
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.textContent || div.innerText || '';
}

export { capitalize as default }; 