import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['module-to-externalize'],
      external: ['react-router-dom'],
      build: {
        outDir: 'dist',
      },
    }
  }
})
