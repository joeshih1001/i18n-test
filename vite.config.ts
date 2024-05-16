import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/i18n-test/',
  plugins: [react()],
  server:{
    port:3000
  },
})
