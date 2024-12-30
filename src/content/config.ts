import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    excerpt: z.string().max(200),
    category: z.enum([
      'Funeral Planning',
      'Costs & Planning', 
      'Legal & Regulations',
      'Cremation Services',
      'Memorial Services',
      'Funeral Homes',
      'Houston History',
      'Grief Support',
      'Pre-Planning',
      'Resources'
    ]),
    tags: z.array(z.string()),
    readingTime: z.number().int().positive(),
    seoTitle: z.string().max(60),
    seoDescription: z.string().max(160),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  'blog': blogCollection,
};