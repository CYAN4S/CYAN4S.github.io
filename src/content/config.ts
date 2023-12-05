import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: image().optional(),
  }),
});

const portfolio = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    period: z.string(),
    team: z.string(),
    stack: z.array(z.string()),
    description: z.string(),
    tag: z.array(z.string()),
    platform: z.array(z.string()),
    heroImage: image(),
    repo: z.string().optional(),
    link: z.string().optional()
  }),
});

export const collections = { blog, portfolio };
