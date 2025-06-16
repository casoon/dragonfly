/**
 * ClassNames Utility
 *
 * Conditionally joins class names together. Handles strings, objects, and arrays.
 * Makes conditional classes clean and readable.
 *
 * @param {...(string|Object|Array)} args - Class names, objects, or arrays
 * @returns {string} Joined class names
 *
 * @example
 * // Basic usage
 * classNames('btn', 'btn-primary') // "btn btn-primary"
 *
 * @example
 * // Conditional classes
 * classNames('btn', isActive && 'btn-primary') // "btn btn-primary" or "btn"
 *
 * @example
 * // Object syntax
 * classNames('btn', {
 *   'btn-primary': isActive,
 *   'btn-disabled': isDisabled
 * })
 *
 * @example
 * // Array syntax
 * classNames(['btn', 'btn-large'], isActive && 'active')
 */
export function classNames(...args) {
  const classes = [];

  for (const arg of args) {
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames(...arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === 'object') {
      if (
        arg.toString !== Object.prototype.toString &&
        !arg.toString.toString().includes('[native code]')
      ) {
        classes.push(arg.toString());
        continue;
      }

      for (const key in arg) {
        if (Object.hasOwn(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

/**
 * CSS Module variant of classNames
 * Useful when working with CSS modules where class names are objects
 *
 * @param {Object} styles - CSS modules styles object
 * @param {...(string|Object|Array)} args - Class names to apply
 * @returns {string} Joined class names from CSS modules
 *
 * @example
 * import styles from './Button.module.css';
 *
 * const className = classNamesModule(styles, 'button', {
 *   primary: isPrimary,
 *   disabled: isDisabled
 * });
 */
export function classNamesModule(styles, ...args) {
  return classNames(...args)
    .split(' ')
    .map((className) => styles[className] || className)
    .join(' ');
}

export default classNames;
