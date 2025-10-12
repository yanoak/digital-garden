<script lang="ts">
	import { Tag, Container, Section, Title, Paragraph, Label } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	interface Props {
		metadata: ContentMetadata;
	}

	let { metadata }: Props = $props();
</script>

<!-- Content Header with gradient background -->
<Section class="content-header">
	<Container maxWidth="content" class="content-header-container">
		<!-- Metadata -->
		{#if metadata.type || metadata.date || metadata.readingTime}
			<Label class="content-header-meta">
				{#if metadata.type}
					{metadata.type.toUpperCase()}
				{/if}
				{#if metadata.type && (metadata.date || metadata.readingTime)}
					<span class="content-header-separator">·</span>
				{/if}
				{#if metadata.date}
					{new Date(metadata.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()}
				{/if}
				{#if metadata.date && metadata.readingTime}
					<span class="content-header-separator">·</span>
				{/if}
				{#if metadata.readingTime}
					{metadata.readingTime} MIN READ
				{/if}
			</Label>
		{/if}

		<!-- Title -->
		{#if metadata.title}
			<Title size="lg" class="content-header-title">
				{metadata.title}
			</Title>
		{/if}

		<!-- Subtitle/Description -->
		{#if metadata.description}
			<Paragraph size="lg" class="content-header-description">
				{metadata.description}
			</Paragraph>
		{/if}

		<!-- Tags -->
		{#if metadata.tags && metadata.tags.length > 0}
			<div class="content-header-tags">
				{#each metadata.tags as tag}
					<Tag>{tag}</Tag>
				{/each}
			</div>
		{/if}
	</Container>
</Section>

<style>
	.content-header {
		@apply bg-gradient-to-b from-white to-background pt-20 pb-15 px-2xl;
	}

	.content-header-container {
		@apply mx-auto;
	}

	.content-header-meta {
		@apply text-content-meta text-accent uppercase tracking-wider mb-8;
	}

	.content-header-separator {
		@apply mx-2;
	}

	.content-header-title {
		@apply text-content-title font-heading text-text mb-6;
	}

	.content-header-description {
		@apply text-content-subtitle font-body text-accent leading-relaxed mb-8;
	}

	.content-header-tags {
		@apply flex flex-wrap gap-2.5;
	}
</style>
