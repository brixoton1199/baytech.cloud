import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    host: true,  // Allow external connections
    open: true   // Auto-open browser
  },
  build: {
    outDir: 'baytech.cloud',
    emptyOutDir: true
  }
})

