import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My Fitness App",
        short_name: "My Fitness App",
        description: "My Fitness App Description",
        theme_color: "#ff6600",
        background_color: "#370b0b",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "icons/logo.svg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/logo.svg",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
