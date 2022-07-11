<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async () => {
		const files = import.meta.glob('./posts/*.svx')
		const promises: Promise<Post>[] = []
		const getPost = async (post: string) =>
			new Promise<Post>(async (res) => {
				try {
					const file = await files[post]()
					res({
						name: files[post].name,
						meta: file.metadata
					})
				} catch (err) {
					console.error(err)
				}
			})

		for (const post in files) {
			promises.push(getPost(post))
		}
		const posts = await Promise.all(promises)
		posts.sort((a, b) => new Date(b.meta.date_created).getTime() - new Date(a.meta.date_created).getTime())

		return {
			props: {
				posts
			}
		}
	}
</script>

<script lang="ts">
	export let posts: Post[]
</script>

<template>
	<h1>Vulgo</h1>
	<p>
		An extremely minimal blog template using <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>
		&
		<a href="https://mdsvex.pngwn.io" target="_blank">mdsvex</a>
	</p>
	<hr />
	{#each posts as post}
		<h2>
			<a href={post.name.split('./')[1].split('.')[0]}>{post.meta.title}</a>
		</h2>
		<p>{new Date(Date.parse(post.meta.date_created.toString()) + 1).toLocaleDateString('en-US')}</p>
	{/each}
</template>
