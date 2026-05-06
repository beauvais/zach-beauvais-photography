import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

const blogDrafts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog-drafts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().default(() => new Date('2000-01-01')),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    excerpt: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog, 'blog-drafts': blogDrafts };
