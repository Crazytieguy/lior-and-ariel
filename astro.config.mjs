import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(), astroI18next()],
});
