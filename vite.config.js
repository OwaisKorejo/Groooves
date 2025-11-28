import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Groooves/', // add this
  plugins: [react()],
})
