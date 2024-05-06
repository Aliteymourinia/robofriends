import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default {
  base: "/robofriends/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
};
