import type { CollectionEntry } from 'astro:content';

/** Parse year, month, and URL slug from a blog collection entry's id.
 *  Entry ids look like: "2020/2020-03-30-pandemic-notes-..."
 */
export function parsePostId(entry: CollectionEntry<'blog'>): { year: string; month: string; slug: string } {
  const parts = entry.id.split('/');
  const year = parts[0];
  const filename = parts[1] ?? parts[0];
  // Extract month from YYYY-MM-DD- prefix
  const monthMatch = filename.match(/^\d{4}-(\d{2})-\d{2}-/);
  const month = monthMatch ? monthMatch[1] : '01';
  // Strip YYYY-MM-DD- prefix to get the URL slug
  const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return { year, month, slug };
}

/** Canonical URL for a blog post — matches WordPress URL structure */
export function postUrl(entry: CollectionEntry<'blog'>): string {
  const { year, month, slug } = parsePostId(entry);
  return `/${year}/${month}/${slug}/`;
}

/** URL for a blog post's cover image */
export function coverImageUrl(entry: CollectionEntry<'blog'>): string | null {
  if (!entry.data.coverImage) return null;
  const { year } = parsePostId(entry);
  return `/blog/${year}/images/${entry.data.coverImage}`;
}

/** Sort posts newest first */
export function sortByDate(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Format a Date as "Month DD, YYYY" */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

/** Slugify a category or tag for URL use */
export function taxonomySlug(term: string): string {
  return term.toLowerCase().replace(/\s+/g, '-');
}

/** Human-readable label from a taxonomy slug */
export function taxonomyLabel(slug: string): string {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
