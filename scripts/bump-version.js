const fs = require('node:fs');
const pkg = require('../package.json');

const [major, minor, patch] = pkg.version.split('.').map(Number);

// Increase patch version by default, can be adjusted through arguments
let newMajor = major;
let newMinor = minor;
let newPatch = patch + 1;

// Process command line arguments
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

fs.writeFileSync('./package.json', `${JSON.stringify(pkg, null, 2)}\n`);

// Note: Documentation files are not automatically updated
// To update the "Last Modified" information, use:
// npm run update:docs-lastmod
