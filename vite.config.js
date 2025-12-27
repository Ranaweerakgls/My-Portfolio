import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Necessary for __dirname to work in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: "/My-Portfolio",
  plugins: [react()],
  
  resolve: {
    alias: {
      // Maps the "@" prefix to the "src" folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})