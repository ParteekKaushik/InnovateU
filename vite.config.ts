import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all IPs (important for accessing from other devices)
    port: 3000, // Specify a port (optional)
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
