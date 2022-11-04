import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: true,
    host: "localhost",
    port: 8089,
    cors: true,
    open: true,
  },
});
