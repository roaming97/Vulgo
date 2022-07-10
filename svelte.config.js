import vercel from '@sveltejs/adapter-vercel'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [preprocess(), mdsvex(mdsvexConfig)],

    kit: {
        adapter: vercel()
    }
}

export default config