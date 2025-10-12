<script lang="ts">
	import { CollectionCard } from '$lib/components';
	import type { Content } from '$lib/types';

	export let content: Content[];

	// Sort content by date in reverse chronological order (newest first)
	// If date is not present, maintain original order
	$: sortedContent = content.sort((a, b) => {
		if (!a.date || !b.date) return 0; // Keep original order if date is missing
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
</script>

<div class="collection-card-list">
	{#each sortedContent as item, index}
		<CollectionCard 
			content={item} 
			isLast={index === sortedContent.length - 1}
		/>
	{/each}
</div>

<style>
	.collection-card-list {
		@apply flex flex-col gap-2;
	}
</style>
