/**
 * Debounce Function
 *
 * Prevents over-triggering on input changes or scroll events.
 * Delays function execution until after a specified delay has passed since the last call.
 *
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds (default: 300)
 * @returns {Function} The debounced function
 *
 * @example
 * // Live search that waits for users to stop typing before firing an API call
 * const handleChange = debounce((val) => searchUsers(val), 400);
 *
 * @example
 * // Debounced scroll handler
 * const handleScroll = debounce(() => {
 *   console.log('Scrolled!');
 * }, 100);
 * window.addEventListener('scroll', handleScroll);
 */
export function debounce(func, delay = 300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export default debounce;
