<script lang="ts">
	import { CollectionCard } from '$lib/components';
	import type { Content } from '$lib/types';

	export let content: Content[];
</script>

<div class="collection-card-list">
	{#each content as item, index}
		<CollectionCard 
			content={item} 
			isLast={index === content.length - 1}
		/>
	{/each}
</div>

<style>
	.collection-card-list {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
</style>
