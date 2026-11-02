import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Info153a-Fall26-Labs/fl26-lab-5/dist/',
  plugins: [react()],
})
