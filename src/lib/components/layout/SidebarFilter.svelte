<script lang="ts">
	import { Label } from '$lib/components';
	import type { SidebarFilterProps } from '$lib/types';

	export let title: string;
	export let items: Array<{ label: string; value: string; count?: number; active?: boolean }>;
	export let onItemClick: (value: string) => void = () => {};
</script>

<div class="sidebar-section">
	<Label size="lg" class="sidebar-title">{title}</Label>
	<div class="filter-items">
		{#each items as item}
			<button
				class="filter-item"
				class:active={item.active}
				on:click={() => onItemClick(item.value)}
				on:keydown={(e) => e.key === 'Enter' && onItemClick(item.value)}
			>
				<span class="item-label">{item.label}</span>
				{#if item.count !== undefined}
					<span class="item-count">{item.count}</span>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	.sidebar-section {
		@apply mb-12;
	}

	.sidebar-title {
		@apply text-accent font-heading font-semibold tracking-wider uppercase mb-5;
	}

	.filter-items {
		@apply space-y-0;
	}

	.filter-item {
		@apply w-full text-left py-3 px-0 border-b border-background text-accent font-body text-base cursor-pointer transition-all duration-300 hover:text-primary hover:pl-4;
	}

	.filter-item.active {
		@apply text-primary font-medium;
	}

	.item-label {
		@apply block;
	}

	.item-count {
		@apply text-secondary text-xs font-heading ml-2;
	}
</style>
