# Dragonfly JavaScript Utilities

A comprehensive collection of JavaScript utility functions for modern web development. These utilities prevent over-engineering and provide clean, reusable solutions for common programming tasks.

## 🚀 Quick Start

```javascript
// Import individual functions
import { debounce, formatDate, classNames } from './js/utils/index.js';

// All essential functions
import { essentials } from './js/utils/index.js';

// Complete utility object
import utils from './js/utils/index.js';
```

## 📦 Available Utilities

### ⚡ Performance & Async

#### `debounce(func, delay = 300)`
Prevents over-triggering on input changes or scroll events.

```javascript
// Live search that waits until the user stops typing
const handleChange = debounce((val) => searchUsers(val), 400);

// Debounced scroll handler
const handleScroll = debounce(() => {
  console.log('Scrolled!');
}, 100);
```

#### `sleep(ms)`
Creates a delay with promises. Useful for tests, animations, and throttled operations.

```javascript
await sleep(1000);
// Show loader for minimum duration

// Delay between API calls
for (const item of items) {
  await processItem(item);
  await sleep(100); // Rate limiting
}
```

#### `retry(fn, options)`
Retries a function multiple times with exponential backoff.

```javascript
const data = await retry(
  () => fetch('/api/data').then(r => r.json()),
  { maxAttempts: 3, baseDelay: 1000 }
);
```

### 🔤 String Manipulation

#### `capitalize(str)`
Capitalizes the first letter of a string.

```javascript
capitalize('pending') // "Pending"
capitalize('hello world') // "Hello world"
```

#### `titleCase(str)`, `camelCase(str)`, `kebabCase(str)`, `snakeCase(str)`
Various string formatting options.

```javascript
titleCase('hello world') // "Hello World"
camelCase('hello world') // "helloWorld"
kebabCase('Hello World') // "hello-world"
snakeCase('Hello World') // "hello_world"
```

#### `truncate(str, length, suffix = '...')`
Truncates strings with ellipsis.

```javascript
truncate('This is a very long string', 10) // "This is a..."
```

### 📅 Date & Time

#### `formatDate(dateStr, options)`
Converts date strings to readable formats.

```javascript
// Basic usage - shows "Apr 22, 2024"
formatDate('2024-04-22')

// Custom format
formatDate('2024-04-22', { format: 'long' })
// Result: "April 22, 2024"

// Different locale
formatDate('2024-04-22', { locale: 'de-DE' })
// Result: "22. Apr. 2024"
```

#### `formatRelativeDate(dateStr, locale)`
Formats date for relative time (e.g., "2 days ago", "in 3 hours").

```javascript
formatRelativeDate('2024-04-20') // "2 days ago"
```

### 🎨 CSS & Styling

#### `classNames(...args)`
Conditionally joins class names. Makes conditional classes clean and readable.

```javascript
// Basic usage
classNames('btn', 'btn-primary') // "btn btn-primary"

// Conditional classes
classNames('btn', isActive && 'btn-primary') // "btn btn-primary" or "btn"

// Object syntax
classNames('btn', {
  'btn-primary': isActive,
  'btn-disabled': isDisabled
})

// Array syntax
classNames(['btn', 'btn-large'], isActive && 'active')
```

### 📊 Data Processing

#### `safeJsonParse(str, fallback = {})`
Safe JSON parsing with fallback values for malformed data.

```javascript
// Safe localStorage parsing
const user = safeJsonParse(localStorage.getItem('user'));

// With custom fallback
const settings = safeJsonParse(apiResponse, { theme: 'light' });
```

#### `isEmpty(obj)`
Checks if an object is empty. Works better than `Object.keys(obj).length === 0`.

```javascript
if (isEmpty(formErrors)) submitForm();

isEmpty({}) // true
isEmpty({ name: 'John' }) // false
isEmpty(null) // false
isEmpty([]) // false (arrays are not plain objects)
```

#### `uniqueArray(arr, keyFn)`
Removes duplicates from arrays. Works with primitives and objects.

```javascript
// Simple array
uniqueArray([1, 2, 2, 3, 1]) // [1, 2, 3]

// String array
const tags = uniqueArray([...userTags, ...defaultTags]);

// Object array by property
uniqueArray(users, 'id') // Removes users with duplicate IDs

// Object array with custom function
uniqueArray(users, user => user.email.toLowerCase())
```

#### `groupBy(arr, keyFn)`
Groups array elements by key.

```javascript
const users = [
  { name: 'John', role: 'admin' },
  { name: 'Jane', role: 'user' },
  { name: 'Bob', role: 'admin' }
];

groupBy(users, 'role')
// {
//   admin: [{ name: 'John', role: 'admin' }, { name: 'Bob', role: 'admin' }],
//   user: [{ name: 'Jane', role: 'user' }]
// }
```

### 📋 Browser APIs

#### `copyToClipboard(text)`
Copies text to clipboard. Perfect for "copy link" or "copy code" functionality.

```javascript
// Basic usage
const success = await copyToClipboard('Hello World!');
if (success) {
  showToast('Copied to clipboard!');
}

// In a React component
<button onClick={() => copyToClipboard(url)}>Copy Link</button>
```

#### `downloadFile(url, filename)`
Enables quick, user-friendly downloads.

```javascript
// Download PDF
downloadFile('/resume.pdf', 'MyResume.pdf');

// Download data as file
const data = JSON.stringify(userData, null, 2);
const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(data)}`;
downloadFile(dataUri, 'user-data.json');
```

#### `isInViewport(element, threshold)`
Checks if an element is visible in the viewport.

```javascript
if (isInViewport(element)) {
  // Element is visible, start animation
}
```

## 🎯 Usage Examples

### Live Search with Debouncing
```javascript
import { debounce } from './js/utils/index.js';

const searchInput = document.getElementById('search');
const handleSearch = debounce(async (query) => {
  const results = await fetch(`/api/search?q=${query}`);
  displayResults(await results.json());
}, 300);

searchInput.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});
```

### User-Friendly Date Display
```javascript
import { formatDate, formatRelativeDate } from './js/utils/index.js';

// In a component
function PostCard({ post }) {
  return `
    <article>
      <h3>${post.title}</h3>
      <time datetime="${post.createdAt}">
        ${formatRelativeDate(post.createdAt)}
      </time>
      <p>Published on ${formatDate(post.createdAt, { format: 'long' })}</p>
    </article>
  `;
}
```

### Data Export Functionality
```javascript
import { downloadTextAsFile, safeJsonStringify } from './js/utils/index.js';

function exportUserData(userData) {
  const jsonData = safeJsonStringify(userData, '{}', 2);
  downloadTextAsFile(jsonData, 'user-data.json', 'application/json');
}
```

### Form Validation
```javascript
import { isEmpty, classNames } from './js/utils/index.js';

function validateForm(formData) {
  const errors = {};
  
  if (!formData.email) errors.email = 'Email is required';
  if (!formData.password) errors.password = 'Password is required';
  
  return {
    isValid: isEmpty(errors),
    errors
  };
}

// CSS classes based on validation
function getInputClassName(fieldName, errors) {
  return classNames('input', {
    'input--error': errors[fieldName],
    'input--valid': !errors[fieldName]
  });
}
```

## 📁 File Structure

```
js/utils/
├── index.js              # Main export file
├── debounce.js           # Debounce functionality
├── formatDate.js         # Date formatting
├── classNames.js         # CSS class utilities
├── jsonHelpers.js        # JSON parsing helpers
├── objectHelpers.js      # Object manipulation
├── arrayHelpers.js       # Array utilities
├── stringHelpers.js      # String manipulation
├── asyncHelpers.js       # Async/Promise utilities
├── clipboard.js          # Clipboard operations
├── domHelpers.js         # DOM manipulation
└── README.md            # This documentation
```

## 🔧 Advanced Usage

### Import only essential functions
```javascript
import { essentials } from './js/utils/index.js';

const { debounce, formatDate, classNames, copyToClipboard } = essentials;
```

### Import specific modules
```javascript
// Only string utilities
import { capitalize, truncate, camelCase } from './js/utils/stringHelpers.js';

// Only array utilities
import { uniqueArray, groupBy, chunk } from './js/utils/arrayHelpers.js';
```

### Use alias imports
```javascript
import { 
  uniqueArray as removeDuplicates,
  safeJsonParse as parseJson,
  copyToClipboard as copyText 
} from './js/utils/index.js';
```

## 🚀 Performance Tips

1. **Tree Shaking**: Import only the functions you need
2. **Debouncing**: Use `debounce` for frequent events like scroll or input
3. **Async Operations**: Use `parallelLimit` for controlled parallel processing
4. **Memory Management**: `cancellable` promises for abortable operations

## 🤝 Contributing

These utilities are part of the Dragonfly UI system. For improvements or new features:

1. Follow existing code conventions
2. Add JSDoc documentation
3. Write meaningful examples
4. Test your functions thoroughly

## 📄 License

Part of the Dragonfly UI project. See main license for details. 