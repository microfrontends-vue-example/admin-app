import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'admin-app',
      filename: 'adminEntry.js',
      remotes: {
        mainApp: 'http://localhost:5001/assets/mainAppEntry.js'
      },
      exposes: {
        './AdminApp.vue': './src/components/AdminApp.vue'
      },
      shared: ['vue', 'pinia']
    })
  ],
  build: {
    target: 'esnext'
  }
})