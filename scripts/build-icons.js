const fs = require('fs-extra');
const path = require('path');

// Icons, die wir extrahieren möchten
const iconSets = {
    'heroicons': {
        package: '@iconify-json/heroicons',
        icons: [
            // Interface
            'arrow-left',
            'arrow-right',
            'arrow-up',
            'arrow-down',
            'check',
            'x-mark',
            'plus',
            'minus',
            'chevron-up',
            'chevron-down',
            'chevron-left',
            'chevron-right',
            // Actions
            'pencil',
            'trash',
            'share',
            'download',
            'upload',
            'clipboard',
            'document',
            'folder',
            // Communication
            'envelope',
            'chat-bubble-left',
            'bell',
            'phone',
            'video-camera',
            // Media
            'photo',
            'camera',
            'play',
            'pause',
            'speaker-wave',
            // Data
            'chart-bar',
            'chart-pie',
            'clipboard-document',
            'document-text',
            // Navigation
            'home',
            'user',
            'cog',
            'bookmark',
            'globe-alt'
        ]
    },
    'feather': {
        package: '@iconify-json/feather',
        icons: [
            // Interface
            'menu',
            'more-horizontal',
            'more-vertical',
            'search',
            'filter',
            'settings',
            // Actions
            'edit',
            'copy',
            'save',
            'link',
            'external-link',
            // Communication
            'mail',
            'message-circle',
            'phone-call',
            'video',
            // Media
            'image',
            'music',
            'film',
            'mic',
            // Data
            'file',
            'folder',
            'archive',
            'database'
        ]
    },
    'phosphor': {
        package: '@iconify-json/ph',
        icons: [
            // Interface
            'dots-three',
            'magnifying-glass',
            'gear',
            'sliders',
            // Actions
            'pencil-simple',
            'clipboard',
            'copy',
            'share',
            // Communication
            'envelope-simple',
            'chat',
            'phone',
            'video-camera',
            // Media
            'image',
            'music-note',
            'play',
            'stop',
            // Data
            'files',
            'folder-simple',
            'chart-line',
            'chart-bar'
        ]
    },
    'remix': {
        package: '@iconify-json/ri',
        icons: [
            // Interface
            'menu-line',
            'search-line',
            'settings-line',
            'filter-line',
            // Actions
            'edit-line',
            'delete-bin-line',
            'share-line',
            'download-line',
            // Communication
            'mail-line',
            'chat-1-line',
            'notification-line',
            'phone-line',
            // Media
            'image-line',
            'video-line',
            'music-line',
            'play-line',
            // Data
            'file-line',
            'folder-line',
            'bar-chart-line',
            'pie-chart-line'
        ]
    },
    'bootstrap': {
        package: '@iconify-json/bi',
        icons: [
            // Interface
            'three-dots',
            'search',
            'gear',
            'sliders',
            // Actions
            'pencil',
            'trash',
            'clipboard',
            'share',
            // Communication
            'envelope',
            'chat',
            'bell',
            'telephone',
            // Media
            'image',
            'camera',
            'play',
            'pause',
            // Data
            'file',
            'folder',
            'graph-up',
            'pie-chart'
        ]
    }
};

async function buildIcons() {
    // Icons-Verzeichnis erstellen
    await fs.ensureDir('icons');

    // Icons aus den Sets extrahieren
    for (const [setName, setConfig] of Object.entries(iconSets)) {
        const setPath = path.join('icons', setName);
        await fs.ensureDir(setPath);

        // Icon-Set laden
        const iconSet = require(setConfig.package + '/icons.json');
        
        for (const iconName of setConfig.icons) {
            const iconData = iconSet.icons[iconName];
            if (iconData) {
                const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconData.width || 24} ${iconData.height || 24}">${iconData.body}</svg>`;
                await fs.writeFile(path.join(setPath, `${iconName}.svg`), svg);
            }
        }
    }

    // CSS für Icons generieren
    const css = `/**
 * Icons
 * 
 * Diese Datei enthält die Icon-Styles des Systems.
 * Die Styles sind in @layer components organisiert.
 * 
 * Verwendete Icon-Sets und deren Lizenzen:
 * - Heroicons (MIT) - https://heroicons.com
 * - Feather Icons (MIT) - https://feathericons.com
 * - Phosphor Icons (MIT) - https://phosphoricons.com
 * - Remix Icons (MIT) - https://remixicon.com
 * - Bootstrap Icons (MIT) - https://icons.getbootstrap.com
 */

@layer components {
    .icon {
        display: inline-block;
        width: 1em;
        height: 1em;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
        vertical-align: middle;
    }

    /* Größenvarianten */
    .icon-xs {
        width: 0.5em;
        height: 0.5em;
    }

    .icon-sm {
        width: 0.75em;
        height: 0.75em;
    }

    .icon-lg {
        width: 1.25em;
        height: 1.25em;
    }

    .icon-xl {
        width: 1.5em;
        height: 1.5em;
    }

    .icon-2xl {
        width: 2em;
        height: 2em;
    }

    /* Ausrichtung */
    .icon-baseline {
        vertical-align: baseline;
    }

    .icon-top {
        vertical-align: top;
    }

    .icon-middle {
        vertical-align: middle;
    }

    .icon-bottom {
        vertical-align: bottom;
    }

    /* Animation */
    .icon-spin {
        animation: icon-spin 2s infinite linear;
    }

    @keyframes icon-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
}`;

    await fs.writeFile('core/icons.css', css);

    // Lizenz-Dokumentation erstellen
    const license = `# Icon Lizenzen

Dieses Projekt verwendet Icons aus verschiedenen Open-Source-Bibliotheken. Hier sind die Details zu den verwendeten Icon-Sets und deren Lizenzen:

## Heroicons
- Lizenz: MIT
- Website: https://heroicons.com
- Copyright: Copyright (c) 2020 Refactoring UI Inc.

## Feather Icons
- Lizenz: MIT
- Website: https://feathericons.com
- Copyright: Copyright (c) 2013-2017 Cole Bemis

## Phosphor Icons
- Lizenz: MIT
- Website: https://phosphoricons.com
- Copyright: Copyright (c) 2020 Phosphor Icons

## Remix Icons
- Lizenz: MIT
- Website: https://remixicon.com
- Copyright: Copyright (c) 2020 Remix Design

## Bootstrap Icons
- Lizenz: MIT
- Website: https://icons.getbootstrap.com
- Copyright: Copyright (c) 2019-2021 The Bootstrap Authors

## Verwendung
Die Icons werden als SVG-Dateien bereitgestellt und können mit den CSS-Klassen aus der \`icons.css\` verwendet werden:

\`\`\`html
<!-- Standard Icon -->
<img src="icons/heroicons/user.svg" class="icon" alt="User">

<!-- Größenvarianten -->
<img src="icons/feather/mail.svg" class="icon icon-sm" alt="Mail">
<img src="icons/phosphor/phone.svg" class="icon icon-lg" alt="Phone">

<!-- Ausrichtung -->
<img src="icons/remix/chat-1-line.svg" class="icon icon-middle" alt="Chat">

<!-- Animation -->
<img src="icons/bootstrap/arrow-clockwise.svg" class="icon icon-spin" alt="Loading">
\`\`\`

## MIT Lizenz
Alle verwendeten Icon-Sets stehen unter der MIT-Lizenz, die eine freie Verwendung, Modifikation und Verteilung erlaubt, solange der Copyright-Hinweis und die Lizenzbestimmungen in allen Kopien oder wesentlichen Teilen der Software enthalten sind.`;

    await fs.writeFile('ICONS-LICENSE.md', license);
}

buildIcons().catch(console.error); 