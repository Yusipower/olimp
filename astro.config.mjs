import { defineConfig } from "astro/config";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    prefetch(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
