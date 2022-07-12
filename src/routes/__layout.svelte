<script lang="ts">
	import { onMount } from 'svelte'
	import { initTheme } from 'fractils'
	import { Switch } from '$lib/components'
	import { page } from '$app/stores'
	import { pageTitle } from '$lib/utils'
	import '../styles/app.css'
	$: title = pageTitle($page.url.pathname)
	onMount(() => initTheme())
</script>

<svelte:head>
	{#if title}
		<title>Vulgo - {title}</title>
	{/if}
</svelte:head>
<Switch />
<slot />
<hr />
<footer style="text-align:center">
	powered by <a href="https://github.com/roaming97/Vulgo" target="_blank">Vulgo</a>
</footer>
