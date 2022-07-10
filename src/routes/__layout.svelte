<script lang="ts">
	import { page } from '$app/stores'
	import { pageTitle } from '$lib'
	$: title = pageTitle($page.url.pathname)
</script>

<svelte:head>
	{#if title}
		<title>Vulgo - {title}</title>
	{/if}
</svelte:head>
<slot />
