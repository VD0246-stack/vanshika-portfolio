import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS || process.env.BUILD_FOR_GH_PAGES ? '/vanshika-portfolio/' : '/',
})
