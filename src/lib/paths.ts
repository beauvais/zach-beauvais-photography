// Prepend Astro's BASE_URL to any site-root-relative path.
// Works correctly whether base is "/" (local/custom domain) or "/repo-name/" (GitHub Pages project site).

export const b = import.meta.env.BASE_URL;

/** Resolve a portfolio image path, e.g. asset('portrait-01.jpg') */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

/** Resolve an internal route, e.g. route('portfolio/') */
export const route = (path: string) =>
  path === '' || path === '/'
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
