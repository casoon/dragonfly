const fs = require('fs');
const pkg = require('../package.json');

const [major, minor, patch] = pkg.version.split('.').map(Number);

// Beispiel: Patch-Version erhöhen
const newVersion = `${major}.${minor}.${patch + 1}`;
pkg.version = newVersion;

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log(`Version updated to ${newVersion}`); 