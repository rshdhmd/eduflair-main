import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { localCmsPlugin } from './local-cms/vite-plugin-local-cms.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localCmsPlugin()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
})
