import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the build works at a domain root (Vercel)
  // AND under a sub-path (GitHub Pages project site). Single-page app.
  base: './',
})
