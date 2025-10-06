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
		font-family: 'Archivo Narrow', sans-serif;
		font-size: 14px;
		font-weight: 400;
		color: #586F7C;
		letter-spacing: 1px;
		margin-bottom: 40px;
	}
</style>
