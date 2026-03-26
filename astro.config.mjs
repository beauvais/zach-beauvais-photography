import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'zach-beauvais-photography';
const isUserSite = repo.endsWith('.github.io');

const base = process.env.GITHUB_ACTIONS && !isUserSite
  ? `/${repo}`
  : '/';

const site = process.env.SITE_URL ?? 'https://beauvais.github.io';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
});