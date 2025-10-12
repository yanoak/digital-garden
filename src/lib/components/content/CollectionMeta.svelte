<script lang="ts">
	import { Label } from '$lib/components';

	export let count: number;
	export let type: string;
</script>

<Label class="collection-meta">
	{count} {type}
</Label>

<style>
	.collection-meta {
		@apply font-heading text-small text-accent tracking-wide mb-10;
	}
</style>
