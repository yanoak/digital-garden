<script lang="ts">
	import { EssayLayout } from '$lib/components';

	// This layout is specifically for individual content pages
	let { children }: { children: any } = $props();

	// Get the current slug from the route
	const slug = 'tinkering-worldbuilding-resisting-reconnecting';
</script>

<EssayLayout {slug}>
	{@render children?.()}
</EssayLayout>
