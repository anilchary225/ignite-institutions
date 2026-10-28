import { injectSeoHead } from "./src/seo/siteSeo.js"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: "ignite-route-seo",
    transformIndexHtml: {
      order: "post",
      handler(html, context) {
        return injectSeoHead(html, context.originalUrl || "/");
      },
    },
  }],
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
})
