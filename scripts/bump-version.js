const fs = require('fs');
const pkg = require('../package.json');

const [major, minor, patch] = pkg.version.split('.').map(Number);

// Patch-Version standardmäßig erhöhen, kann durch Argumente angepasst werden
let newMajor = major;
let newMinor = minor;
let newPatch = patch + 1;

// Verarbeite Kommandozeilenargumente
const arg = process.argv[2];
if (arg) {
  if (arg === 'major') {
    newMajor++;
    newMinor = 0;
    newPatch = 0;
  } else if (arg === 'minor') {
    newMinor++;
    newPatch = 0;
  }
}

const newVersion = `${newMajor}.${newMinor}.${newPatch}`;
pkg.version = newVersion;

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log(`Version aktualisiert auf ${newVersion}`);

// Hinweis: Die Dokumentationsdateien werden nicht automatisch aktualisiert
// Um die "Last Modified"-Informationen zu aktualisieren, verwende:
// npm run update:docs-lastmod