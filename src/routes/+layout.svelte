<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Digital Garden</title>
</svelte:head>

<div class="container">
	<header>
		<nav>
			<a href="/" class="logo">🌱 Digital Garden</a>
			<div class="nav-links">
				<a href="/essays">Essays</a>
				<a href="/book-reviews">Book Reviews</a>
				<a href="/notes">Notes</a>
				<a href="/projects">Projects</a>
			</div>
		</nav>
	</header>

	<main>
		{@render children?.()}
	</main>

	<footer>
		<p>© 2024 Digital Garden</p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		line-height: 1.6;
		color: #333;
		background: #fafafa;
	}

	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	header {
		background: white;
		border-bottom: 1px solid #e0e0e0;
		padding: 0 2rem;
		box-shadow: 0 1px 3px rgba(0,0,0,0.1);
	}

	nav {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
		text-decoration: none;
		color: #2d6a4f;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		text-decoration: none;
		color: #555;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: #2d6a4f;
	}

	main {
		flex: 1;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem;
	}

	footer {
		background: white;
		border-top: 1px solid #e0e0e0;
		text-align: center;
		padding: 2rem;
		color: #888;
	}

	:global(h1) {
		color: #2d6a4f;
		margin-bottom: 1rem;
	}

	:global(h2) {
		color: #40916c;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(a) {
		color: #2d6a4f;
	}

	:global(a:hover) {
		color: #1b4332;
	}

	:global(code) {
		background: #f5f5f5;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
	}

	:global(pre) {
		background: #f5f5f5;
		padding: 1rem;
		border-radius: 5px;
		overflow-x: auto;
	}

	:global(blockquote) {
		border-left: 4px solid #2d6a4f;
		padding-left: 1rem;
		margin-left: 0;
		font-style: italic;
		color: #555;
	}
</style>
