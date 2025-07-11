import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002
  },
  plugins: [
    react(),
  VitePWA({
    registerType: "autoUpdate",
    injectRegister: "auto",
    strategies: "generateSW",
    devOptions: {
      enabled: true
    },
    manifest:{
      "name": "Crisis Connect",
      "short_name": "CrisisCon",
      "start_url": "./",
      "display": "standalone",
      "background_color": "#fff",
      "description": "Crisis Connection App.",
      "theme_color": "#ffffff",
        "icons": [
          {
            "src": "public/images/pwa-64x64.png",
            "sizes": "64x64",
            "type": "image/png"
          },
          {
            "src": "public/images/pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "public/images/pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "public/images/maskable-icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ]
        },
    workbox: {
      runtimeCaching: [
      {
          urlPattern: ({ url }) => {
          return url.pathname.includes('images')
          },
          handler: 'CacheFirst',
          method: 'GET',
          options: {
          cacheName: 'static-assets',
          expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24
          },
          cacheableResponse: {
          statuses: [0, 200]
          },
          }
          },
          {
          urlPattern: ({ url }) => {
          return url.pathname.includes('incidents,safehouses')
          },
          handler: 'CacheFirst',
          method: 'GET',
          options: {
          cacheName: 'crisis-connect-cache',
          expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24
          },
          cacheableResponse: {
          statuses: [0, 200]
          },
          }
          }
        ]
           }
  })
  ],
})
