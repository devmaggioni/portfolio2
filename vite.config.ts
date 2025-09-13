import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
});
