import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/robofriends/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "/index.html",
    },
  },
});
