<script lang="ts">
	import '../app.css';
	import { Navigation, Footer, Container } from '$lib/components';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Digital Garden</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-secondary-50">
	<Navigation />
	
	<main class="flex-1">
		{@render children?.()}
	</main>
	
	<Footer />
</div>
