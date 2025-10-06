<script lang="ts">
	import { Container, Section, Title, Paragraph } from '$lib/components';

	export let title: string;
	export let description: string;
</script>

<Section class="collection-page-header">
	<Container maxWidth="container">
		<Title size="lg" class="collection-title">{title}</Title>
		<Paragraph size="lg" class="collection-description">
			{description}
		</Paragraph>
	</Container>
</Section>

<style>
	:global(.collection-page-header) {
		background: linear-gradient(to bottom, #FFFFFF 0%, #F4F4F9 100%);
		padding: 80px 50px;
	}

	.collection-title {
		font-family: 'Archivo Narrow', sans-serif;
		font-size: 56px;
		font-weight: 400;
		line-height: 1.3;
		color: #0A0A0A;
		margin-bottom: 20px;
	}

	.collection-description {
		font-family: 'David Libre', serif;
		font-size: 20px;
		font-weight: 400;
		color: #586F7C;
		line-height: 1.7;
		max-width: 700px;
	}

	/* Mobile responsive */
	@media (max-width: 768px) {
		:global(.collection-page-header) {
			padding: 60px 30px;
		}

		.collection-title {
			font-size: 40px;
		}
	}
</style>
