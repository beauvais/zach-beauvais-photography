import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When deploying to GitHub Pages as a project site (e.g. username.github.io/repo-name),
// GITHUB_REPOSITORY is "username/repo-name" and BASE_PATH should be "/repo-name".
// For custom domains or user/org pages, leave BASE_PATH unset — base defaults to "/".
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectPage = process.env.GITHUB_ACTIONS === 'true' && repoName && !repoName.includes('.github.io');
const base = isProjectPage ? `/${repoName}/` : '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://zachbeauvais.com',
  base,
  publicDir: 'portfolio',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
