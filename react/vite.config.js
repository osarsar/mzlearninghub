import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👉 ton code est sous react/frontend
  root: 'frontend',
  // 👉 le build sortira dans react/dist
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  // 👉 correspond EXACTEMENT au nom du repo GitHub
  base: '/Mzlearninghub/',
})
