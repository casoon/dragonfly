import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';

export default defineConfig({
  output: 'static',
  outDir: '../docs',
  integrations: [alpine()],
  vite: {
    resolve: {
      alias: {
        'casoon-ui-lib/base.css': 'casoon-ui-lib/base.css'
      }
    }
  }
});

//    "casoon-ui-lib": "github:casoon/casoon-ui-lib",
