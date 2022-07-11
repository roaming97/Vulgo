<script lang="ts">
	import { page } from '$app/stores'
	import { pageTitle } from '$lib'
	import '../styles/app.css'
	$: title = pageTitle($page.url.pathname)
</script>

<svelte:head>
	{#if title}
		<title>Vulgo - {title}</title>
	{/if}
</svelte:head>
<slot />
<hr />
<footer style="text-align:center">
	powered by <a href="https://github.com/roaming97/Vulgo" target="_blank">Vulgo</a>
</footer>
