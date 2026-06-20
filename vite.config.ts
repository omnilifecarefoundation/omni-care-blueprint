// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Inside a Lovable sandbox/build the wrapper forces the Cloudflare preset and
// dist/{client,server} output. Outside Lovable (e.g. on Netlify CI), the
// options below take effect: Nitro's `netlify` preset emits
//   - .netlify/functions-internal/server/server.mjs  (the SSR function)
//   - dist/                                          (static client assets)
// which is what netlify.toml points at.
export default defineConfig({
  nitro: {
    preset: "netlify",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
});
