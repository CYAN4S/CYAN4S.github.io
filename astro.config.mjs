import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://cyan4s.com",
  integrations: [mdx(), sitemap(), solid()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  compressHTML: true,
  experimental: {
  },
});
