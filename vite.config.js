import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true,
    }),
  ],
  base: "/",
  build: {
    outDir: "public", // Mude para gerar o build na pasta public
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
