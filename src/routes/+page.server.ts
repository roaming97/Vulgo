import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const files = import.meta.glob<Post>('./posts/*.md', { import: 'metadata', eager: true })
	const posts = Object.entries(files)
		.map(([k, v], _) => ({ path: k.split('/')[2].split('.')[0], ...v }))
		.sort((a, b) => (a.date_created > b.date_created ? -1 : 1))
	return {
		posts
	}
}
