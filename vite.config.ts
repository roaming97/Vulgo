import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, type PluginOption } from 'vite'

export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined
			}
		}
	},
	plugins: [sveltekit() as PluginOption[]],
	server: {
		port: 3000,
		fs: {
			allow: ['..']
		},
		hmr: {
			overlay: false
		}
	},
})
