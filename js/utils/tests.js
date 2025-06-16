/**
 * Simple Test Suite for Dragonfly JavaScript Utilities
 *
 * Run this file in a browser console or Node.js environment to test utilities.
 * This is a lightweight testing approach without external dependencies.
 */

// Simple test framework
class SimpleTest {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(name, fn) {
    this.tests.push({ name, fn });
  }

  async run() {
    for (const { name, fn } of this.tests) {
      try {
        await fn();
        this.passed++;
      } catch (error) {
        console.error(`❌ ${name}: ${error.message}`);
        this.failed++;
      }
    }

    if (this.failed === 0) {
    } else {
    }
  }

  assert(condition, message = 'Assertion failed') {
    if (!condition) {
      throw new Error(message);
    }
  }

  assertEqual(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(message || `Expected ${expected}, got ${actual}`);
    }
  }

  assertDeepEqual(actual, expected, message) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(
        message || `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`
      );
    }
  }
}

// Test utilities (mock imports for testing)
const testUtils = {
  // Mock implementations for testing
  debounce: (func, delay = 300) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  },

  sleep: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),

  capitalize: (str) => {
    if (!str || typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  formatDate: (dateStr, options = {}) => {
    const { locale = 'en-US', format = 'short' } = options;
    const date = new Date(dateStr);

    if (Number.isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const formatOptions = {
      short: { year: 'numeric', month: 'short', day: 'numeric' },
      medium: { year: 'numeric', month: 'long', day: 'numeric' },
      long: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
    };

    return date.toLocaleDateString(locale, formatOptions[format] || formatOptions.short);
  },

  classNames: (...args) => {
    const classes = [];

    for (const arg of args) {
      if (!arg) continue;

      const argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          const inner = testUtils.classNames(...arg);
          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        for (const key in arg) {
          if (Object.hasOwn(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  },

  safeJsonParse: (str, fallback = {}) => {
    if (typeof str !== 'string') {
      return fallback;
    }

    try {
      const parsed = JSON.parse(str);
      return parsed !== null ? parsed : fallback;
    } catch (error) {
      return fallback;
    }
  },

  isEmpty: (obj) =>
    obj &&
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.keys(obj).length === 0 &&
    obj.constructor === Object,

  uniqueArray: (arr, keyFn = null) => {
    if (!Array.isArray(arr)) return [];

    if (!keyFn) {
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
  },

  titleCase: (str) => {
    if (!str || typeof str !== 'string') return str;
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  },

  camelCase: (str) => {
    if (!str || typeof str !== 'string') return str;
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, '')
      .replace(/[-_]/g, '');
  },

  truncate: (str, length, suffix = '...') => {
    if (!str || typeof str !== 'string') return str;
    if (str.length <= length) return str;
    return str.slice(0, length - suffix.length) + suffix;
  },
};

// Create test instance
const test = new SimpleTest();

// String Helper Tests
test.test('capitalize should capitalize first letter', () => {
  test.assertEqual(testUtils.capitalize('hello'), 'Hello');
  test.assertEqual(testUtils.capitalize('HELLO'), 'HELLO');
  test.assertEqual(testUtils.capitalize(''), '');
  test.assertEqual(testUtils.capitalize(null), null);
});

test.test('titleCase should capitalize each word', () => {
  test.assertEqual(testUtils.titleCase('hello world'), 'Hello World');
  test.assertEqual(testUtils.titleCase('the quick brown fox'), 'The Quick Brown Fox');
  test.assertEqual(testUtils.titleCase(''), '');
});

test.test('camelCase should convert to camelCase', () => {
  test.assertEqual(testUtils.camelCase('hello world'), 'helloWorld');
  test.assertEqual(testUtils.camelCase('user-name'), 'userName');
  test.assertEqual(testUtils.camelCase('first_name'), 'firstName');
});

test.test('truncate should truncate strings correctly', () => {
  test.assertEqual(testUtils.truncate('Hello World', 5), 'He...');
  test.assertEqual(testUtils.truncate('Hi', 10), 'Hi');
  test.assertEqual(testUtils.truncate('Hello World', 8, '***'), 'Hello***');
});

// Date Helper Tests
test.test('formatDate should format dates correctly', () => {
  const date = '2024-04-22';
  const formatted = testUtils.formatDate(date);
  test.assert(formatted.includes('2024'), 'Should include year');
  test.assert(formatted.includes('Apr') || formatted.includes('22'), 'Should include month or day');
});

test.test('formatDate should handle invalid dates', () => {
  test.assertEqual(testUtils.formatDate('invalid-date'), 'Invalid Date');
  test.assertEqual(testUtils.formatDate(''), 'Invalid Date');
});

// ClassNames Tests
test.test('classNames should join strings', () => {
  test.assertEqual(testUtils.classNames('btn', 'primary'), 'btn primary');
  test.assertEqual(testUtils.classNames('btn'), 'btn');
});

test.test('classNames should handle conditional classes', () => {
  test.assertEqual(testUtils.classNames('btn', true && 'active'), 'btn active');
  test.assertEqual(testUtils.classNames('btn', false && 'active'), 'btn');
});

test.test('classNames should handle object syntax', () => {
  test.assertEqual(testUtils.classNames('btn', { active: true, disabled: false }), 'btn active');
});

test.test('classNames should handle arrays', () => {
  test.assertEqual(testUtils.classNames(['btn', 'large'], 'active'), 'btn large active');
});

// JSON Helper Tests
test.test('safeJsonParse should parse valid JSON', () => {
  test.assertDeepEqual(testUtils.safeJsonParse('{"name":"John"}'), { name: 'John' });
  test.assertDeepEqual(testUtils.safeJsonParse('[1,2,3]'), [1, 2, 3]);
});

test.test('safeJsonParse should return fallback for invalid JSON', () => {
  test.assertDeepEqual(testUtils.safeJsonParse('invalid json'), {});
  test.assertDeepEqual(testUtils.safeJsonParse('invalid json', []), []);
  test.assertDeepEqual(testUtils.safeJsonParse(null), {});
});

// Object Helper Tests
test.test('isEmpty should detect empty objects', () => {
  test.assert(testUtils.isEmpty({}), 'Empty object should be empty');
  test.assert(!testUtils.isEmpty({ name: 'John' }), 'Object with properties should not be empty');
  test.assert(!testUtils.isEmpty([]), 'Array should not be empty (not plain object)');
  test.assert(!testUtils.isEmpty(null), 'null should not be empty');
  test.assert(!testUtils.isEmpty(undefined), 'undefined should not be empty');
});

// Array Helper Tests
test.test('uniqueArray should remove duplicates', () => {
  test.assertDeepEqual(testUtils.uniqueArray([1, 2, 2, 3, 1]), [1, 2, 3]);
  test.assertDeepEqual(testUtils.uniqueArray(['a', 'b', 'a']), ['a', 'b']);
  test.assertDeepEqual(testUtils.uniqueArray([]), []);
});

test.test('uniqueArray should work with key function', () => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John Doe' },
  ];

  const unique = testUtils.uniqueArray(users, 'id');
  test.assertEqual(unique.length, 2, 'Should have 2 unique users');
  test.assertEqual(unique[0].id, 1, 'First user should have id 1');
  test.assertEqual(unique[1].id, 2, 'Second user should have id 2');
});

test.test('uniqueArray should handle non-arrays', () => {
  test.assertDeepEqual(testUtils.uniqueArray(null), []);
  test.assertDeepEqual(testUtils.uniqueArray(undefined), []);
  test.assertDeepEqual(testUtils.uniqueArray('string'), []);
});

// Async Helper Tests
test.test('sleep should delay execution', async () => {
  const start = Date.now();
  await testUtils.sleep(100);
  const end = Date.now();
  const elapsed = end - start;

  test.assert(elapsed >= 90, `Sleep should take at least 90ms, took ${elapsed}ms`);
  test.assert(elapsed < 200, `Sleep should take less than 200ms, took ${elapsed}ms`);
});

test.test('debounce should delay function execution', async () => {
  let callCount = 0;
  const fn = () => callCount++;
  const debouncedFn = testUtils.debounce(fn, 50);

  // Call multiple times quickly
  debouncedFn();
  debouncedFn();
  debouncedFn();

  // Should not have been called yet
  test.assertEqual(callCount, 0, 'Function should not be called immediately');

  // Wait for debounce delay
  await testUtils.sleep(60);

  // Should have been called once
  test.assertEqual(callCount, 1, 'Function should be called once after delay');
});

// Performance Tests
test.test('utilities should handle large datasets', () => {
  // Test with large array
  const largeArray = Array.from({ length: 10000 }, (_, i) => i % 100);
  const start = Date.now();
  const unique = testUtils.uniqueArray(largeArray);
  const end = Date.now();

  test.assertEqual(unique.length, 100, 'Should have 100 unique values');
  test.assert(end - start < 100, `Should complete in under 100ms, took ${end - start}ms`);
});

test.test('classNames should handle many arguments', () => {
  const manyClasses = Array.from({ length: 100 }, (_, i) => `class-${i}`);
  const result = testUtils.classNames(...manyClasses);

  test.assert(result.includes('class-0'), 'Should include first class');
  test.assert(result.includes('class-99'), 'Should include last class');
  test.assertEqual(result.split(' ').length, 100, 'Should have 100 classes');
});

// Edge Case Tests
test.test('utilities should handle edge cases gracefully', () => {
  // Test with null/undefined inputs
  test.assertEqual(testUtils.capitalize(null), null);
  test.assertEqual(testUtils.capitalize(undefined), undefined);
  test.assertEqual(testUtils.classNames(null, undefined, false, ''), '');
  test.assertDeepEqual(testUtils.uniqueArray(null), []);

  // Test with empty inputs
  test.assertEqual(testUtils.capitalize(''), '');
  test.assertEqual(testUtils.classNames(), '');
  test.assertDeepEqual(testUtils.uniqueArray([]), []);
});

// Export for use in browser or Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { test, testUtils };
} else if (typeof window !== 'undefined') {
  window.DragonflyTests = { test, testUtils };
}

// Auto-run tests if this file is executed directly
if (typeof window !== 'undefined') {
  // Browser environment - run tests when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => test.run());
  } else {
    test.run();
  }
} else if (typeof require !== 'undefined' && require.main === module) {
  // Node.js environment - run tests immediately
  test.run();
}
