import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        heroImage: z.string().optional(),
        category: z.enum(['ai', 'philosophy', 'techdeepdive', 'techstory']),
    }),
});

export const collections = { blog };
