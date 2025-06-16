/**
 * Dragonfly JavaScript Utilities
 *
 * A comprehensive collection of utility functions for modern web development.
 * These utilities prevent over-engineering and provide clean, reusable solutions
 * for common programming tasks.
 *
 * @version 1.0.0
 * @author Dragonfly UI Team
 */

// Performance & Async Utilities
export { debounce } from './debounce.js';
export {
  sleep,
  timeout,
  retry,
  debounceAsync,
  parallelLimit,
  cancellable,
} from './asyncHelpers.js';

// String Manipulation
export {
  capitalize,
  titleCase,
  camelCase,
  kebabCase,
  snakeCase,
  truncate,
  cleanWhitespace,
  randomString,
  escapeHtml,
  stripHtml,
} from './stringHelpers.js';

// Date & Time
export {
  formatDate,
  formatRelativeDate,
} from './formatDate.js';

// CSS & Styling
export {
  classNames,
  classNamesModule,
} from './classNames.js';

// Data Handling
export {
  safeJsonParse,
  safeJsonStringify,
  deepCloneJson,
  isValidJson,
} from './jsonHelpers.js';

export {
  isEmpty,
  isPlainObject,
  deepMerge,
  pick,
  omit,
  get,
} from './objectHelpers.js';

export {
  uniqueArray,
  groupBy,
  chunk,
  shuffle,
  randomItem,
  sortBy,
  intersection,
  difference,
} from './arrayHelpers.js';

// Browser APIs
export {
  copyToClipboard,
  readFromClipboard,
  isClipboardSupported,
  copyFormattedToClipboard,
} from './clipboard.js';

export {
  downloadFile,
  downloadTextAsFile,
  isInViewport,
  scrollToElement,
  getComputedStyleProperty,
  waitForElement,
  dispatchCustomEvent,
  getElementPosition,
} from './domHelpers.js';

// Convenience re-exports with common names
export { uniqueArray as removeDuplicates } from './arrayHelpers.js';
export { safeJsonParse as parseJson } from './jsonHelpers.js';
export { formatDate as dateFormat } from './formatDate.js';
export { copyToClipboard as copyText } from './clipboard.js';
export { downloadFile as download } from './domHelpers.js';

import { groupBy, uniqueArray } from './arrayHelpers.js';
import { retry, sleep } from './asyncHelpers.js';
import { classNames } from './classNames.js';
import { copyToClipboard } from './clipboard.js';
// Import all modules for default export
import { debounce } from './debounce.js';
import { downloadFile, isInViewport } from './domHelpers.js';
import { formatDate, formatRelativeDate } from './formatDate.js';
import { safeJsonParse } from './jsonHelpers.js';
import { isEmpty } from './objectHelpers.js';
import { camelCase, capitalize, truncate } from './stringHelpers.js';

/**
 * Most commonly used utilities - the "greatest hits"
 * Import these when you want the most essential functions
 */
export const essentials = {
  debounce,
  sleep,
  capitalize,
  formatDate,
  classNames,
  safeJsonParse,
  isEmpty,
  copyToClipboard,
  uniqueArray,
  downloadFile,
};

// Default export for convenience
export default {
  // Performance
  debounce,
  sleep,
  retry,

  // Strings
  capitalize,
  truncate,
  camelCase,

  // Dates
  formatDate,
  formatRelativeDate,

  // CSS
  classNames,

  // Data
  safeJsonParse,
  isEmpty,
  uniqueArray,
  groupBy,

  // Browser
  copyToClipboard,
  downloadFile,
  isInViewport,
};
