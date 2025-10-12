<script lang="ts">
	import { Label } from '$lib/components';
	import type { FilterGroup } from '$lib/types';

	export let filterGroups: FilterGroup[] = [];
	export let onFilterChange: (groupKey: string, value: string) => void = () => {};
</script>

<div class="filter-bar">
	{#each filterGroups as group}
		<div class="filter-group">
			<Label size="lg" class="filter-label">{group.label}</Label>
			<div class="filter-options">
				{#each group.options as option}
					<button
						class="filter-button"
						class:active={option.active}
						on:click={() => onFilterChange(group.key, option.value)}
						on:keydown={(e) => e.key === 'Enter' && onFilterChange(group.key, option.value)}
					>
						<span class="button-text">{option.label}</span>
						{#if option.count !== undefined}
							<span class="filter-count">{option.count}</span>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.filter-bar {
		@apply bg-white border border-secondary p-8 mb-10 flex flex-wrap gap-8 items-center;
	}

	.filter-group {
		@apply flex items-center gap-4;
	}

	.filter-label {
		@apply text-text font-heading font-semibold tracking-wider uppercase whitespace-nowrap;
	}

	.filter-options {
		@apply flex gap-2 flex-wrap;
	}

	.filter-button {
		@apply bg-transparent border border-secondary px-4 py-2 text-accent font-body text-sm cursor-pointer transition-all duration-300;
	}

	.filter-button:hover {
		@apply border-primary text-primary;
	}

	.filter-button.active {
		@apply bg-primary text-white border-primary;
	}

	.button-text {
		@apply block;
	}

	.filter-count {
		@apply text-secondary text-xs font-heading ml-1;
	}

	/* Mobile responsive */
	@media (max-width: 768px) {
		.filter-bar {
			@apply p-5 gap-5;
		}

		.filter-group {
			@apply flex-col items-start gap-3;
		}

		.filter-options {
			@apply gap-1;
		}
	}
</style>
