import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})