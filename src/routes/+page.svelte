<script lang="ts">
	import type { PageServerData } from './$types'
	export let data: PageServerData
	$: posts = data.posts
</script>

<template>
	<h1>Vulgo</h1>
	<p>
		An extremely minimal blog template using <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>
		&
		<a href="https://mdsvex.pngwn.io" target="_blank">MDsveX</a>
	</p>
	<hr />
	{#each posts as post}
		<h2>
			<a href="/posts/{post.path}">{post.title}</a>
		</h2>
		<p>{new Date(Date.parse(post.date_created.toString()) + 1).toLocaleDateString('en-US')}</p>
	{/each}
</template>
