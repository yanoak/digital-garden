<script lang="ts">
	import { Container, Section, Title, Paragraph } from '$lib/components';

	export let title: string;
	export let description: string;
</script>

<Section class="collection-page-header" background="gradient">
	<Container maxWidth="container" class="collection-page-header-container">
		<Title size="lg" class="collection-title">{title}</Title>
		<Paragraph size="lg" class="collection-description">
			{description}
		</Paragraph>
	</Container>
</Section>

<style>
	.collection-page-header {
		@apply px-2xl;
	}

	.collection-page-header-container {
		@apply mx-auto;
	}

	.collection-title {
		@apply font-heading text-title text-text leading-tight mb-5;
	}

	.collection-description {
		@apply font-body text-subheading text-accent leading-relaxed max-w-content;
	}

	/* Mobile responsive */
	@media (max-width: 768px) {
		.collection-page-header {
			@apply py-15 px-8;
		}

		.collection-title {
			@apply text-4xl;
		}
	}
</style>
