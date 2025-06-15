/**
 * Async Helper Functions
 * 
 * Utilities for handling asynchronous operations, delays, and retries.
 */

/**
 * Sleep (Wait) Helper
 * 
 * Creates a delay using Promises. Useful in tests, animations, and throttled operations.
 * 
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise<void>} Promise that resolves after the delay
 * 
 * @example
 * // Show loader for minimum time
 * await sleep(1000);
 * hideLoader();
 * 
 * @example
 * // Delay between API calls
 * for (const item of items) {
 *   await processItem(item);
 *   await sleep(100); // Rate limiting
 * }
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Timeout wrapper for promises
 * 
 * Adds a timeout to any promise, rejecting if it takes too long.
 * 
 * @param {Promise} promise - Promise to wrap
 * @param {number} ms - Timeout in milliseconds
 * @param {string} message - Error message for timeout
 * @returns {Promise} Promise that rejects on timeout
 * 
 * @example
 * const data = await timeout(fetch('/api/data'), 5000, 'API call timed out');
 */
export function timeout(promise, ms, message = 'Operation timed out') {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error(message)), ms);
  });
  
  return Promise.race([promise, timeoutPromise]);
}

/**
 * Retry function with exponential backoff
 * 
 * Retries a function multiple times with increasing delays between attempts.
 * 
 * @param {Function} fn - Async function to retry
 * @param {Object} options - Retry options
 * @param {number} options.maxAttempts - Maximum retry attempts (default: 3)
 * @param {number} options.baseDelay - Base delay in ms (default: 1000)
 * @param {number} options.maxDelay - Maximum delay in ms (default: 10000)
 * @param {Function} options.shouldRetry - Function to determine if error should trigger retry
 * @returns {Promise} Promise that resolves with function result or rejects with last error
 * 
 * @example
 * const data = await retry(
 *   () => fetch('/api/data').then(r => r.json()),
 *   { maxAttempts: 3, baseDelay: 1000 }
 * );
 */
export async function retry(fn, options = {}) {
  const {
    maxAttempts = 3,
    baseDelay = 1000,
    maxDelay = 10000,
    shouldRetry = () => true
  } = options;
  
  let lastError;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxAttempts || !shouldRetry(error)) {
        throw error;
      }
      
      // Exponential backoff with jitter
      const delay = Math.min(
        baseDelay * Math.pow(2, attempt - 1) + Math.random() * 1000,
        maxDelay
      );
      
      console.warn(`Attempt ${attempt} failed, retrying in ${delay}ms:`, error.message);
      await sleep(delay);
    }
  }
  
  throw lastError;
}

/**
 * Debounced async function
 * 
 * Creates a debounced version of an async function that cancels previous calls.
 * 
 * @param {Function} fn - Async function to debounce
 * @param {number} delay - Debounce delay in milliseconds
 * @returns {Function} Debounced async function
 * 
 * @example
 * const debouncedSearch = debounceAsync(searchAPI, 300);
 * const results = await debouncedSearch(query);
 */
export function debounceAsync(fn, delay) {
  let timeoutId;
  let currentController;
  
  return async (...args) => {
    // Cancel previous call
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (currentController) {
      currentController.abort();
    }
    
    // Create new abort controller for this call
    currentController = new AbortController();
    
    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(async () => {
        try {
          const result = await fn(...args, { signal: currentController.signal });
          resolve(result);
        } catch (error) {
          if (error.name !== 'AbortError') {
            reject(error);
          }
        }
      }, delay);
    });
  };
}

/**
 * Run promises in parallel with concurrency limit
 * 
 * @param {Array} items - Items to process
 * @param {Function} fn - Async function to run for each item
 * @param {number} concurrency - Maximum concurrent operations
 * @returns {Promise<Array>} Array of results
 * 
 * @example
 * const results = await parallelLimit(
 *   urls,
 *   url => fetch(url).then(r => r.json()),
 *   3 // Max 3 concurrent requests
 * );
 */
export async function parallelLimit(items, fn, concurrency = 5) {
  const results = [];
  const executing = [];
  
  for (const [index, item] of items.entries()) {
    const promise = fn(item, index).then(result => {
      results[index] = result;
    });
    
    executing.push(promise);
    
    if (executing.length >= concurrency) {
      await Promise.race(executing);
      executing.splice(executing.findIndex(p => p === promise), 1);
    }
  }
  
  await Promise.all(executing);
  return results;
}

/**
 * Create a cancellable promise
 * 
 * @param {Function} executor - Promise executor function
 * @returns {Object} Object with promise and cancel function
 * 
 * @example
 * const { promise, cancel } = cancellable((resolve, reject, signal) => {
 *   const timeoutId = setTimeout(() => resolve('done'), 5000);
 *   signal.addEventListener('abort', () => {
 *     clearTimeout(timeoutId);
 *     reject(new Error('Cancelled'));
 *   });
 * });
 * 
 * // Cancel after 2 seconds
 * setTimeout(cancel, 2000);
 */
export function cancellable(executor) {
  const controller = new AbortController();
  
  const promise = new Promise((resolve, reject) => {
    executor(resolve, reject, controller.signal);
  });
  
  return {
    promise,
    cancel: () => controller.abort()
  };
}

export { sleep as default }; 