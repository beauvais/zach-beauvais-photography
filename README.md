# Zach Beauvais Photography — Astro site

An Astro-based portfolio and portrait-booking site built for GitHub Pages first, with a structure that will also move cleanly to Netlify later.

## Included

- Homepage
- Portrait sessions page
- Pricing page
- About page
- Contact page
- Portfolio section for collaborative portraits
- Portfolio section for landscape and abstract work
- GitHub Pages workflow
- Design tokens and global styles derived from the uploaded Figma design system

## Before publishing

Update these items first:

1. Replace `hello@example.com` in `src/pages/contact.astro` with your actual booking email.
2. Replace `https://example.com` in `astro.config.mjs` by setting `SITE_URL` in GitHub Actions or hard-coding your final domain.
3. Replace the placeholder SVG portfolio images in `public/images/portfolio/...` with your real exported images.
4. Adjust copy wherever you want your final voice to be more specific.

## Local development

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

## GitHub Pages setup

The project includes a GitHub Actions workflow for Pages deployment.

In GitHub:

- Go to **Settings → Pages**
- Set **Source** to **GitHub Actions**

Then push the project to your `main` branch.

## Swapping GitHub Pages for Netlify later

Netlify can build Astro sites directly from the same repository. In most cases, you would only need:

- Build command: `npm run build`
- Publish directory: `dist`
