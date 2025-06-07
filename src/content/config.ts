import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      draft: z.boolean().default(false),
      date: z.date().transform((str) => new Date(str).toDateString()),
      title: z.string(),
      author: z.string(),
      category: z.enum(['review']),
      tags: z.array(z.string().optional()),
      share: z
        .object({
          image: z.string().optional(),
          title: z.string(),
          description: z.string(),
        })
        .strict(),
    }),
  }),
  circles: defineCollection({
    schema: z.object({
      block: z.string(),
      thumbId: z.string(),
      name: z.string(),
      links: z.array(z.object({
        link: z.string(),
        title: z.string()
      })),
      catalogue: z.array(z.string()),
    })
  })
};