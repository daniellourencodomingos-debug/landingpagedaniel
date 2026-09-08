import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site from /<repo-name>/ unless it's a user/org page
// or a custom domain. Using a relative base ('./') makes the build work
// correctly regardless of which repo name it ends up published under.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
