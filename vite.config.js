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
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
				runtimeCaching: [
					{
						urlPattern: ({ url }) => {
							return url.pathname.startsWith('/api');
						},
						handler: 'CacheFirst',
						options: {
							cacheName: 'app-cache',
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
				],
			},
			includeAssets: [
				'/src/assets/pwaIcons/st-16x16px.png',
				'/src/assets/pwaIcons/st-180x180px.png',
			],
			manifest: {
				name: 'Tareas Simples',
				short_name: 'Tareas',
				start_url: '/',
				display: 'standalone',
				background_color: '#000000',
				lang: 'es-UY',
				scope: '/',
				display_override: ['fullscreen', 'minimal-ui'],
				categories: ['utilities', 'tasks'],
				description: 'Application to write tasks or todos',
				theme_color: '#000000',
				dir: 'ltr',
				orientation: 'portrait-primary',
				icons: [
					{
						src: '/src/assets/pwaIcons/st-16x16px.png',
						sizes: '16x16',
						type: 'image/png',
					},
					{
						src: '/src/assets/pwaIcons/st-32x32px.png',
						sizes: '32x32',
						type: 'image/png',
					},
					{
						src: '/src/assets/pwaIcons/st-62x62px.png',
						sizes: '62x62',
						type: 'image/png',
					},
					{
						src: '/src/assets/pwaIcons/st-120x120px.png',
						sizes: '120x120',
						type: 'image/png',
					},
					{
						src: '/src/assets/pwaIcons/st-180x180px.png',
						sizes: '180x180',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/src/assets/pwaIcons/st-192x192px.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/src/assets/pwaIcons/st-400x400px.png',
						sizes: '400x400',
						type: 'image/png',
					},
					{
						src: '/src/assets/pwaIcons/st-512x512px.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/src/assets/pwaIcons/st-512x512px.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
	],
});
