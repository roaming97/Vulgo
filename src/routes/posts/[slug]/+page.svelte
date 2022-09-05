<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
	$: post = { ...data }
</script>

<template>
	<h1>{post.title}</h1>
	<h2>Written by: {post.author}</h2>
	<p>Date created: {post.date_created}</p>
	{#if post.date_modified}
		<p>Date modified: {post.date_modified}</p>
	{/if}
	<a href="/">Back to index</a>
	<hr />
	<svelte:component this={post.content} />
</template>
