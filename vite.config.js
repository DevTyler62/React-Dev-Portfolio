import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Keep the standard React build configuration for Vercel deployments.
export default defineConfig({
  plugins: [react()],
})
