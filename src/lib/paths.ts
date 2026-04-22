// Prepend Astro's BASE_URL to any site-root-relative path.
// Works correctly whether base is "/" (local/custom domain) or "/repo-name/" (GitHub Pages project site).

export const b = import.meta.env.BASE_URL;

/** Resolve a portfolio image path, e.g. asset('portrait/Woman-monochrome-intense-kind.jpg') */
// Ensure BASE_URL always ends with / regardless of Astro version behaviour
const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + '/';

export const asset = (path: string) =>
  `${BASE}${path.replace(/^\/+/, '')}`;

/** Resolve an internal route, e.g. route('portfolio/') */
export const route = (path: string) =>
  path === '' || path === '/'
    ? BASE
    : `${BASE}${path.replace(/^\/+/, '')}`;
