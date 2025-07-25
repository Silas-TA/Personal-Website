import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/personalweb/", // Only needed for GitHub Pages, not Vercel
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
