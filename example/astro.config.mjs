import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';

export default defineConfig({
  output: 'static',
  base: '/casoon-ui-lib/examples/',
  integrations: [alpine()]
}); 