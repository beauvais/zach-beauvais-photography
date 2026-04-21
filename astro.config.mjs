import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zachbeauvais.com',
  base: '/',
  publicDir: 'portfolio',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
