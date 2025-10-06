<script lang="ts">
	import { Tag } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	interface Props {
		metadata: ContentMetadata;
	}

	let { metadata }: Props = $props();
</script>

<!-- Content Header with gradient background -->
<section class="bg-gradient-to-b from-white to-background pt-20 pb-15 px-2xl">
	<div class="max-w-content mx-auto">
		<!-- Metadata -->
		{#if metadata.type || metadata.date || metadata.readingTime}
			<div class="text-content-meta text-accent uppercase tracking-wider mb-8">
				{#if metadata.type}
					{metadata.type.toUpperCase()}
				{/if}
				{#if metadata.type && (metadata.date || metadata.readingTime)}
					<span class="mx-2">·</span>
				{/if}
				{#if metadata.date}
					{new Date(metadata.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()}
				{/if}
				{#if metadata.date && metadata.readingTime}
					<span class="mx-2">·</span>
				{/if}
				{#if metadata.readingTime}
					{metadata.readingTime} MIN READ
				{/if}
			</div>
		{/if}

		<!-- Title -->
		{#if metadata.title}
			<h1 class="text-content-title font-heading text-text mb-6">
				{metadata.title}
			</h1>
		{/if}

		<!-- Subtitle/Description -->
		{#if metadata.description}
			<p class="text-content-subtitle font-body text-accent leading-relaxed mb-8">
				{metadata.description}
			</p>
		{/if}

		<!-- Tags -->
		{#if metadata.tags && metadata.tags.length > 0}
			<div class="flex flex-wrap gap-2.5">
				{#each metadata.tags as tag}
					<Tag>{tag}</Tag>
				{/each}
			</div>
		{/if}
	</div>
</section>
