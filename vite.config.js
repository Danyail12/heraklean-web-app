import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'], // Ensure you only have one `external` key
    },
    outDir: 'dist', // Moved `outDir` outside `rollupOptions`
  },
})
