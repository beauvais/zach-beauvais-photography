import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const portfolio = defineCollection({
  loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['collaborative', 'landscape']),
    coverImage: z.string(),
    coverAlt: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { portfolio };