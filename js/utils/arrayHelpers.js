/**
 * Array Helper Functions
 *
 * Utilities for array manipulation, filtering, and transformation.
 */

/**
 * Remove duplicates from array
 *
 * Keeps arrays clean without verbose logic. Works with primitives and objects.
 *
 * @param {Array} arr - Array to deduplicate
 * @param {Function|string} keyFn - Key function or property name for objects
 * @returns {Array} Array with duplicates removed
 *
 * @example
 * // Simple array
 * uniqueArray([1, 2, 2, 3, 1]) // [1, 2, 3]
 *
 * @example
 * // String array
 * const tags = uniqueArray([...userTags, ...defaultTags]);
 *
 * @example
 * // Object array by property
 * uniqueArray(users, 'id') // Remove users with duplicate IDs
 *
 * @example
 * // Object array by custom function
 * uniqueArray(users, user => user.email.toLowerCase())
 */
export function uniqueArray(arr, keyFn = null) {
  if (!Array.isArray(arr)) return [];

  if (!keyFn) {
    // Simple deduplication for primitives
    return [...new Set(arr)];
  }

  const seen = new Set();
  const getKey = typeof keyFn === 'string' ? (item) => item[keyFn] : keyFn;

  return arr.filter((item) => {
    const key = getKey(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

/**
 * Group array items by key
 *
 * @param {Array} arr - Array to group
 * @param {Function|string} keyFn - Key function or property name
 * @returns {Object} Object with grouped items
 *
 * @example
 * const users = [
 *   { name: 'John', role: 'admin' },
 *   { name: 'Jane', role: 'user' },
 *   { name: 'Bob', role: 'admin' }
 * ];
 *
 * groupBy(users, 'role')
 * // {
 * //   admin: [{ name: 'John', role: 'admin' }, { name: 'Bob', role: 'admin' }],
 * //   user: [{ name: 'Jane', role: 'user' }]
 * // }
 */
export function groupBy(arr, keyFn) {
  if (!Array.isArray(arr)) return {};

  const getKey = typeof keyFn === 'string' ? (item) => item[keyFn] : keyFn;

  return arr.reduce((groups, item) => {
    const key = getKey(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}

/**
 * Chunk array into smaller arrays
 *
 * @param {Array} arr - Array to chunk
 * @param {number} size - Size of each chunk
 * @returns {Array} Array of chunks
 *
 * @example
 * chunk([1, 2, 3, 4, 5, 6], 2) // [[1, 2], [3, 4], [5, 6]]
 * chunk([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
 */
export function chunk(arr, size) {
  if (!Array.isArray(arr) || size <= 0) return [];

  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * Shuffle array randomly
 *
 * @param {Array} arr - Array to shuffle
 * @returns {Array} New shuffled array
 *
 * @example
 * shuffle([1, 2, 3, 4, 5]) // [3, 1, 5, 2, 4] (random order)
 */
export function shuffle(arr) {
  if (!Array.isArray(arr)) return [];

  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get random item(s) from array
 *
 * @param {Array} arr - Source array
 * @param {number} count - Number of items to get (default: 1)
 * @returns {*|Array} Single item or array of items
 *
 * @example
 * randomItem([1, 2, 3, 4, 5]) // 3 (random single item)
 * randomItem([1, 2, 3, 4, 5], 2) // [2, 5] (random 2 items)
 */
export function randomItem(arr, count = 1) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return count === 1 ? undefined : [];
  }

  if (count === 1) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const shuffled = shuffle(arr);
  return shuffled.slice(0, Math.min(count, arr.length));
}

/**
 * Sort array by multiple criteria
 *
 * @param {Array} arr - Array to sort
 * @param {...(string|Function|Object)} criteria - Sort criteria
 * @returns {Array} New sorted array
 *
 * @example
 * const users = [
 *   { name: 'John', age: 30, role: 'admin' },
 *   { name: 'Jane', age: 25, role: 'user' },
 *   { name: 'Bob', age: 30, role: 'user' }
 * ];
 *
 * // Sort by age (desc), then by name (asc)
 * sortBy(users, { key: 'age', desc: true }, 'name')
 */
export function sortBy(arr, ...criteria) {
  if (!Array.isArray(arr)) return [];

  return [...arr].sort((a, b) => {
    for (const criterion of criteria) {
      let aVal;
      let bVal;
      let desc = false;

      if (typeof criterion === 'string') {
        aVal = a[criterion];
        bVal = b[criterion];
      } else if (typeof criterion === 'function') {
        aVal = criterion(a);
        bVal = criterion(b);
      } else if (typeof criterion === 'object') {
        const { key, desc: isDesc } = criterion;
        desc = isDesc;
        aVal = typeof key === 'function' ? key(a) : a[key];
        bVal = typeof key === 'function' ? key(b) : b[key];
      }

      if (aVal < bVal) return desc ? 1 : -1;
      if (aVal > bVal) return desc ? -1 : 1;
    }
    return 0;
  });
}

/**
 * Find intersection of multiple arrays
 *
 * @param {...Array} arrays - Arrays to intersect
 * @returns {Array} Array of common elements
 *
 * @example
 * intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]) // [3]
 */
export function intersection(...arrays) {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return [...arrays[0]];

  return arrays.reduce((acc, arr) => acc.filter((item) => arr.includes(item)));
}

/**
 * Find difference between arrays
 *
 * @param {Array} arr1 - First array
 * @param {Array} arr2 - Second array
 * @returns {Array} Elements in arr1 but not in arr2
 *
 * @example
 * difference([1, 2, 3, 4], [2, 4]) // [1, 3]
 */
export function difference(arr1, arr2) {
  if (!Array.isArray(arr1)) return [];
  if (!Array.isArray(arr2)) return [...arr1];

  return arr1.filter((item) => !arr2.includes(item));
}

export { uniqueArray as default };
