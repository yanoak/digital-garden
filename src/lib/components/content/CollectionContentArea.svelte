<script lang="ts">
	import { Container, Section } from '$lib/components';

	export let children: any;
</script>

<Section class="collection-content-area">
	<Container maxWidth="container">
		{@render children?.()}
	</Container>
</Section>

<style>
	:global(.collection-content-area) {
		background: #F4F4F9;
		padding: 80px 50px;
		max-width: 1400px;
		margin: 0 auto;
	}

	/* Mobile responsive */
	@media (max-width: 768px) {
		:global(.collection-content-area) {
			padding: 60px 30px;
		}
	}
</style>
