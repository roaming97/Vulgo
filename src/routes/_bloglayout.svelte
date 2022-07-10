<script>
	// @ts-nocheck
	export let title, author, date_created, date_modified
</script>

<svelte:head>
	<title>Vulgo - {title}</title>
</svelte:head>

<template>
	<h1>{title}</h1>
	<h2>Written by: {author}</h2>
	<p>Date created: {date_created}</p>
	{#if date_modified}
		<p>Date modified: {date_modified}</p>
	{/if}
	<a href="/">Back to index</a>

	<hr />

	<slot />
</template>
