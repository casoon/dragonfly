# casoon-ui-lib

Eine wiederverwendbare UI-Bibliothek für Astro-Projekte, basierend auf Open Props. Enthält Design-Tokens, CSS-Utilities, Animationen und wiederverwendbare Komponenten (z. B. Grid, Container, Button). Ideal für eigene Projekte oder als Basis für Design-Systeme.

## Features

- 🎨 Design-Tokens auf Basis von Open Props (Farben, Abstände, Größen, Fonts)
- ⚡ CSS-Utilities für Layout und Effekte
- 🧩 Wiederverwendbare Komponenten als `.astro`-Dateien
- 🤝 Unterstützung für Alpine.js und Motion One als `peerDependencies`
- 🌐 Bereit zur Veröffentlichung auf npm oder GitHub

## Installation

```bash
npm install casoon-ui-lib
# oder lokal während der Entwicklung
npm install ../pfad/zu/casoon-ui-lib
```

## Verwendung

### CSS-Dateien importieren

```css
/* z. B. in src/styles/global.css */
@import 'casoon-ui-lib/reset.css';
@import 'casoon-ui-lib/tokens.css';
@import 'casoon-ui-lib/grid.css';
@import 'casoon-ui-lib/effects.css';
```

### Komponenten verwenden

```astro
---
import Grid from 'casoon-ui-lib/components/Grid.astro';
---

<Grid columns={3}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

## Voraussetzung

Das Host-Projekt muss folgende Abhängigkeiten selbst installieren:

```bash
npm install alpinejs motion
```

## Entwicklung lokal

```bash
git clone https://github.com/dein-name/casoon-ui-lib.git
cd casoon-ui-lib
npm install
```

## Veröffentlichen auf npm

```bash
npm login
npm publish --access public
```

---

MIT Lizenz – Viel Spaß beim Bauen 🛠️
