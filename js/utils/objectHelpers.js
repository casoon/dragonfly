/**
 * Object Helper Functions
 * 
 * Utilities for working with objects, checking emptiness, and manipulation.
 */

/**
 * Check if object is empty
 * 
 * Works better than Object.keys(obj).length === 0 in edge cases.
 * Properly handles null, undefined, and non-objects.
 * 
 * @param {*} obj - The object to check
 * @returns {boolean} True if object is empty
 * 
 * @example
 * if (isEmpty(formErrors)) submitForm();
 * 
 * @example
 * isEmpty({}) // true
 * isEmpty({ name: 'John' }) // false
 * isEmpty(null) // false
 * isEmpty([]) // false (arrays are not plain objects)
 */
export function isEmpty(obj) {
  return obj && 
         typeof obj === 'object' && 
         !Array.isArray(obj) && 
         Object.keys(obj).length === 0 && 
         obj.constructor === Object;
}

/**
 * Check if value is a plain object
 * 
 * @param {*} obj - Value to check
 * @returns {boolean} True if plain object
 * 
 * @example
 * isPlainObject({}) // true
 * isPlainObject([]) // false
 * isPlainObject(new Date()) // false
 */
export function isPlainObject(obj) {
  return obj !== null && 
         typeof obj === 'object' && 
         obj.constructor === Object;
}

/**
 * Deep merge objects
 * 
 * Recursively merges objects, with later objects taking precedence.
 * 
 * @param {...Object} objects - Objects to merge
 * @returns {Object} Merged object
 * 
 * @example
 * const defaults = { theme: 'light', size: 'medium' };
 * const userPrefs = { theme: 'dark' };
 * const config = deepMerge(defaults, userPrefs);
 * // Result: { theme: 'dark', size: 'medium' }
 */
export function deepMerge(...objects) {
  const result = {};
  
  for (const obj of objects) {
    if (!isPlainObject(obj)) continue;
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (isPlainObject(obj[key]) && isPlainObject(result[key])) {
          result[key] = deepMerge(result[key], obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
  }
  
  return result;
}

/**
 * Pick specific keys from object
 * 
 * @param {Object} obj - Source object
 * @param {Array<string>} keys - Keys to pick
 * @returns {Object} New object with only specified keys
 * 
 * @example
 * const user = { id: 1, name: 'John', email: 'john@example.com', password: 'secret' };
 * const publicUser = pick(user, ['id', 'name', 'email']);
 * // Result: { id: 1, name: 'John', email: 'john@example.com' }
 */
export function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Omit specific keys from object
 * 
 * @param {Object} obj - Source object
 * @param {Array<string>} keys - Keys to omit
 * @returns {Object} New object without specified keys
 * 
 * @example
 * const user = { id: 1, name: 'John', password: 'secret' };
 * const safeUser = omit(user, ['password']);
 * // Result: { id: 1, name: 'John' }
 */
export function omit(obj, keys) {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}

/**
 * Get nested object value safely
 * 
 * @param {Object} obj - Source object
 * @param {string} path - Dot-notation path (e.g., 'user.profile.name')
 * @param {*} defaultValue - Default value if path doesn't exist
 * @returns {*} Value at path or default value
 * 
 * @example
 * const data = { user: { profile: { name: 'John' } } };
 * const name = get(data, 'user.profile.name', 'Unknown');
 * const age = get(data, 'user.profile.age', 0);
 */
export function get(obj, path, defaultValue = undefined) {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result === null || result === undefined || !(key in result)) {
      return defaultValue;
    }
    result = result[key];
  }
  
  return result;
}

export { isEmpty as default }; 