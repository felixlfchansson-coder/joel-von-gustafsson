import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),

  schema: z.object({
    // Artikelns titel
    title: z.string(),

    // Kort beskrivning som kan användas på startsidan och för SEO
    description: z.string(),

    // Publiceringsdatum
    date: z.coerce.date(),

    // Huvudkategori
    category: z.enum([
      "Samhälle",
      "Media",
      "Vetenskap",
      "Historia",
      "Betraktelser",
    ]),

    // Författare
    author: z.string().default("Joel von Gustafsson"),

    // Artikelbild
    image: z.string().optional(),

    // Alt-text för artikelbilden
    imageAlt: z.string().optional(),

    // Ämnen/taggar
    tags: z.array(z.string()).default([]),

    // Om artikeln ska visas extra tydligt på startsidan
    featured: z.boolean().default(false),

    // Draft-artiklar kan vi senare filtrera bort
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};