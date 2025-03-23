import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          models: ['@react-three/fiber', '@react-three/drei', 'three']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  },
  worker: {
    format: 'es'
  }
})
