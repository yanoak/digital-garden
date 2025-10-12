<script lang="ts">
	import '../app.css';
	import { Navigation, Footer, Container } from '$lib/components';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Yan's Digital Garden</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Navigation />
	
	<main class="flex-1">
		{@render children?.()}
	</main>
	
	<Footer />
</div>
