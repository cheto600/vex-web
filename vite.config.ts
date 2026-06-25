import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes asset paths relative so it works on GitHub Pages
// regardless of the repository name (project sites live under /<repo>/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
