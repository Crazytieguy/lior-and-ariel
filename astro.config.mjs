import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://crazytieguy.github.io",
  base: "/lior-and-ariel",
  integrations: [tailwind(), solidJs(), astroI18next()],
});
