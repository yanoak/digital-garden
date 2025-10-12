<script lang="ts">
	import { ReadingLayout } from '$lib/components';

	// This layout is specifically for individual content pages
	let { children }: { children: any } = $props();

	// Get the current slug from the route
	const slug = 'the-body-keeps-the-score';
</script>

<ReadingLayout {slug}>
	{@render children?.()}
</ReadingLayout>
