<script lang="ts">
	import { onMount } from 'svelte'
	import { initTheme } from 'fractils'
	import { Switch } from '$lib'
	import '../styles/app.css'
	onMount(() => initTheme())
</script>

<svelte:head>
	<title>Vulgo</title>
</svelte:head>
<Switch />
<slot />
<hr />
<footer>
	powered by <a href="https://github.com/roaming97/Vulgo" target="_blank">Vulgo</a>
</footer>
