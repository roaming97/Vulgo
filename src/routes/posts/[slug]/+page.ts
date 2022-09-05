import type { SvelteComponent } from 'svelte'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params }) => {
	const file = await import(`../${params.slug}.md`)
	const content = file.default as SvelteComponent
	return {
		...(file.metadata as Post),
		content
	}
}
