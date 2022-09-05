import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: vercel()
	}
}
