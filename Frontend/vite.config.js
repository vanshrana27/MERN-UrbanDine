import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure correct asset paths when served from GitHub Pages repo subpath
  base: '/MERN-UrbanDine/',
})
