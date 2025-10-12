<script lang="ts">
	import { Container, Section } from '$lib/components';

	export let children: any;
</script>

<Section class="collection-content-area">
	<Container maxWidth="container" class="collection-content-area-container">
		{@render children?.()}
	</Container>
</Section>

<style>
	.collection-content-area {
		@apply bg-background py-20 px-2xl;
	}

	.collection-content-area-container {
		@apply mx-auto;
	}

	/* Mobile responsive */
	@media (max-width: 768px) {
		.collection-content-area {
			@apply py-15 px-8;
		}
	}
</style>
