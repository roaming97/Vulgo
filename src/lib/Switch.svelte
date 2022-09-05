<script lang="ts">
	import { theme, toggleTheme } from 'fractils'
	$: icon = $theme === 'dark' ? '🌙' : '☀️'
</script>

<template>
	<div class="switch-container"><button on:click={toggleTheme}><span>{icon}</span></button></div>
</template>

<style>
	.switch-container {
		position: absolute;
		top: 0;
		right: 0;
	}
	button {
		padding: 0.5em;
		border: none;

		font-size: 1.5em;

		background: none;

		cursor: pointer;
	}
	button span {
		text-shadow: 0 0 0 var(--fg-color);
		color: transparent;
	}
</style>
