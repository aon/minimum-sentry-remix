import { sentryVitePlugin } from "@sentry/vite-plugin";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    sentryVitePlugin({
      org: "agustin-aon",
      project: "epic-stack",
    }),
  ],

  build: {
    sourcemap: true,
  },
});
