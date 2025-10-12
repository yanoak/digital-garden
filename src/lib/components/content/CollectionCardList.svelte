<script lang="ts">
	import { CollectionCard } from '$lib/components';
	import { Heading } from '$lib/components';
	import type { Content } from '$lib/types';

	export let content: Content[];

	// Filter content by display property and sort by date in reverse chronological order (newest first)
	// If date is not present, maintain original order
	$: filteredContent = content.filter(item => item.display === true);
	$: sortedContent = filteredContent.sort((a, b) => {
		if (!a.date || !b.date) return 0; // Keep original order if date is missing
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
</script>

<div class="collection-card-list">
	{#if sortedContent.length > 0}
		{#each sortedContent as item, index}
			<CollectionCard 
				content={item} 
				isLast={index === sortedContent.length - 1}
			/>
		{/each}
	{:else}
		<div class="coming-soon">
			<Heading size="lg" color="text-muted">Coming Soon...</Heading>
		</div>
	{/if}
</div>

<style>
	.collection-card-list {
		@apply flex flex-col gap-2;
	}

	.coming-soon {
		@apply flex justify-center items-center py-12;
	}
</style>
