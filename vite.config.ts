import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Buffer } from 'buffer';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: 'buffer', // Ensure the buffer module is included
    },
  },
  define: {
    global: {}, // Polyfill for the global object, required by buffer
  },
  optimizeDeps: {
    include: ['buffer'], // Explicitly include the 'buffer' module
  },
})
