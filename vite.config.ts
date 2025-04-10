import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, InlineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    enviroment: 'happy-dom'
  }
} as UserConfig & {
  test: InlineConfig
});
