import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default {
  base: "/my-react-app/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
};
