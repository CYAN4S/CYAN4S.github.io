import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cyan4s.com",
  integrations: [mdx(), sitemap(), solidJs()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  }
});