import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [
    react(),
    VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
        enabled: true,
    },
    includeAssets: ['favicon.ico', 'logo192.png', 'vite.svg'],
    manifest: {
        name: 'Gestionnaire de vélo',
        short_name: 'velo',
        description: 'Les meilleurs vélos du coin',
        theme_color: '#317EFB',
        icons: [
        {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
        },
        {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png',
        },
        ],
    },
    }),
],
});
