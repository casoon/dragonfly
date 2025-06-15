# Dragonfly JavaScript Utilities

Eine umfassende Sammlung von JavaScript-Utility-Funktionen für moderne Webentwicklung. Diese Utilities verhindern Over-Engineering und bieten saubere, wiederverwendbare Lösungen für häufige Programmieraufgaben.

## 🚀 Schnellstart

```javascript
// Einzelne Funktionen importieren
import { debounce, formatDate, classNames } from './js/utils/index.js';

// Alle essentiellen Funktionen
import { essentials } from './js/utils/index.js';

// Komplettes Utility-Objekt
import utils from './js/utils/index.js';
```

## 📦 Verfügbare Utilities

### ⚡ Performance & Async

#### `debounce(func, delay = 300)`
Verhindert Over-Triggering bei Input-Änderungen oder Scroll-Events.

```javascript
// Live-Suche die wartet bis der User aufhört zu tippen
const handleChange = debounce((val) => searchUsers(val), 400);

// Debounced Scroll Handler
const handleScroll = debounce(() => {
  console.log('Scrolled!');
}, 100);
```

#### `sleep(ms)`
Erstellt eine Verzögerung mit Promises. Nützlich für Tests, Animationen und gedrosselte Operationen.

```javascript
await sleep(1000);
// Loader für Mindestzeit anzeigen

// Verzögerung zwischen API-Aufrufen
for (const item of items) {
  await processItem(item);
  await sleep(100); // Rate Limiting
}
```

#### `retry(fn, options)`
Wiederholt eine Funktion mehrmals mit exponential backoff.

```javascript
const data = await retry(
  () => fetch('/api/data').then(r => r.json()),
  { maxAttempts: 3, baseDelay: 1000 }
);
```

### 🔤 String-Manipulation

#### `capitalize(str)`
Kapitalisiert den ersten Buchstaben eines Strings.

```javascript
capitalize('pending') // "Pending"
capitalize('hello world') // "Hello world"
```

#### `titleCase(str)`, `camelCase(str)`, `kebabCase(str)`, `snakeCase(str)`
Verschiedene String-Formatierungen.

```javascript
titleCase('hello world') // "Hello World"
camelCase('hello world') // "helloWorld"
kebabCase('Hello World') // "hello-world"
snakeCase('Hello World') // "hello_world"
```

#### `truncate(str, length, suffix = '...')`
Kürzt Strings mit Ellipsis.

```javascript
truncate('This is a very long string', 10) // "This is a..."
```

### 📅 Datum & Zeit

#### `formatDate(dateStr, options)`
Konvertiert Datum-Strings zu lesbaren Formaten.

```javascript
// Basis-Verwendung - zeigt "Apr 22, 2024"
formatDate('2024-04-22')

// Benutzerdefiniertes Format
formatDate('2024-04-22', { format: 'long' })
// Ergebnis: "April 22, 2024"

// Verschiedene Locale
formatDate('2024-04-22', { locale: 'de-DE' })
// Ergebnis: "22. Apr. 2024"
```

#### `formatRelativeDate(dateStr, locale)`
Formatiert Datum für relative Zeit (z.B. "vor 2 Tagen", "in 3 Stunden").

```javascript
formatRelativeDate('2024-04-20') // "vor 2 Tagen"
```

### 🎨 CSS & Styling

#### `classNames(...args)`
Verbindet Klassennamen bedingt. Macht bedingte Klassen sauber und lesbar.

```javascript
// Basis-Verwendung
classNames('btn', 'btn-primary') // "btn btn-primary"

// Bedingte Klassen
classNames('btn', isActive && 'btn-primary') // "btn btn-primary" oder "btn"

// Objekt-Syntax
classNames('btn', {
  'btn-primary': isActive,
  'btn-disabled': isDisabled
})

// Array-Syntax
classNames(['btn', 'btn-large'], isActive && 'active')
```

### 📊 Datenverarbeitung

#### `safeJsonParse(str, fallback = {})`
Sicheres JSON-Parsing mit Fallback-Werten für fehlerhafte Daten.

```javascript
// Sicheres localStorage-Parsing
const user = safeJsonParse(localStorage.getItem('user'));

// Mit benutzerdefiniertem Fallback
const settings = safeJsonParse(apiResponse, { theme: 'light' });
```

#### `isEmpty(obj)`
Überprüft ob ein Objekt leer ist. Funktioniert besser als `Object.keys(obj).length === 0`.

```javascript
if (isEmpty(formErrors)) submitForm();

isEmpty({}) // true
isEmpty({ name: 'John' }) // false
isEmpty(null) // false
isEmpty([]) // false (Arrays sind keine plain objects)
```

#### `uniqueArray(arr, keyFn)`
Entfernt Duplikate aus Arrays. Funktioniert mit Primitiven und Objekten.

```javascript
// Einfaches Array
uniqueArray([1, 2, 2, 3, 1]) // [1, 2, 3]

// String-Array
const tags = uniqueArray([...userTags, ...defaultTags]);

// Objekt-Array nach Eigenschaft
uniqueArray(users, 'id') // Entfernt Benutzer mit doppelten IDs

// Objekt-Array mit benutzerdefinierter Funktion
uniqueArray(users, user => user.email.toLowerCase())
```

#### `groupBy(arr, keyFn)`
Gruppiert Array-Elemente nach Schlüssel.

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

### 📋 Browser-APIs

#### `copyToClipboard(text)`
Kopiert Text in die Zwischenablage. Perfekt für "Link kopieren" oder "Code kopieren" Funktionalität.

```javascript
// Basis-Verwendung
const success = await copyToClipboard('Hello World!');
if (success) {
  showToast('In Zwischenablage kopiert!');
}

// In einer React-Komponente
<button onClick={() => copyToClipboard(url)}>Link kopieren</button>
```

#### `downloadFile(url, filename)`
Ermöglicht schnelle, benutzerfreundliche Downloads.

```javascript
// PDF herunterladen
downloadFile('/resume.pdf', 'MyResume.pdf');

// Daten als Datei herunterladen
const data = JSON.stringify(userData, null, 2);
const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(data)}`;
downloadFile(dataUri, 'user-data.json');
```

#### `isInViewport(element, threshold)`
Überprüft ob ein Element im Viewport sichtbar ist.

```javascript
if (isInViewport(element)) {
  // Element ist sichtbar, Animation starten
}
```

## 🎯 Verwendungsbeispiele

### Live-Suche mit Debouncing
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

### Benutzerfreundliche Datumsanzeige
```javascript
import { formatDate, formatRelativeDate } from './js/utils/index.js';

// In einer Komponente
function PostCard({ post }) {
  return `
    <article>
      <h3>${post.title}</h3>
      <time datetime="${post.createdAt}">
        ${formatRelativeDate(post.createdAt)}
      </time>
      <p>Veröffentlicht am ${formatDate(post.createdAt, { format: 'long' })}</p>
    </article>
  `;
}
```

### Daten-Export-Funktionalität
```javascript
import { downloadTextAsFile, safeJsonStringify } from './js/utils/index.js';

function exportUserData(userData) {
  const jsonData = safeJsonStringify(userData, '{}', 2);
  downloadTextAsFile(jsonData, 'user-data.json', 'application/json');
}
```

### Formular-Validierung
```javascript
import { isEmpty, classNames } from './js/utils/index.js';

function validateForm(formData) {
  const errors = {};
  
  if (!formData.email) errors.email = 'E-Mail ist erforderlich';
  if (!formData.password) errors.password = 'Passwort ist erforderlich';
  
  return {
    isValid: isEmpty(errors),
    errors
  };
}

// CSS-Klassen basierend auf Validierung
function getInputClassName(fieldName, errors) {
  return classNames('input', {
    'input--error': errors[fieldName],
    'input--valid': !errors[fieldName]
  });
}
```

## 📁 Dateistruktur

```
js/utils/
├── index.js              # Haupt-Export-Datei
├── debounce.js           # Debounce-Funktionalität
├── formatDate.js         # Datumsformatierung
├── classNames.js         # CSS-Klassen-Utilities
├── jsonHelpers.js        # JSON-Parsing-Helpers
├── objectHelpers.js      # Objekt-Manipulation
├── arrayHelpers.js       # Array-Utilities
├── stringHelpers.js      # String-Manipulation
├── asyncHelpers.js       # Async/Promise-Utilities
├── clipboard.js          # Zwischenablage-Operationen
├── domHelpers.js         # DOM-Manipulation
└── README.md            # Diese Dokumentation
```

## 🔧 Erweiterte Verwendung

### Nur die essentiellen Funktionen importieren
```javascript
import { essentials } from './js/utils/index.js';

const { debounce, formatDate, classNames, copyToClipboard } = essentials;
```

### Spezifische Module importieren
```javascript
// Nur String-Utilities
import { capitalize, truncate, camelCase } from './js/utils/stringHelpers.js';

// Nur Array-Utilities
import { uniqueArray, groupBy, chunk } from './js/utils/arrayHelpers.js';
```

### Alias-Importe verwenden
```javascript
import { 
  uniqueArray as removeDuplicates,
  safeJsonParse as parseJson,
  copyToClipboard as copyText 
} from './js/utils/index.js';
```

## 🚀 Performance-Tipps

1. **Tree Shaking**: Importiere nur die Funktionen, die du benötigst
2. **Debouncing**: Verwende `debounce` für häufige Events wie Scroll oder Input
3. **Async Operations**: Nutze `parallelLimit` für kontrollierte Parallelverarbeitung
4. **Memory Management**: `cancellable` Promises für abbrechbare Operationen

## 🤝 Beitragen

Diese Utilities sind Teil des Dragonfly UI-Systems. Für Verbesserungen oder neue Funktionen:

1. Folge den bestehenden Code-Konventionen
2. Füge JSDoc-Dokumentation hinzu
3. Schreibe aussagekräftige Beispiele
4. Teste deine Funktionen gründlich

## 📄 Lizenz

Teil des Dragonfly UI-Projekts. Siehe Haupt-Lizenz für Details. 