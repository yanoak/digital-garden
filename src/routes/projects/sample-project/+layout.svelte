<script lang="ts">
	import { ProjectLayout } from '$lib/components';

	// This layout is specifically for individual content pages
	let { children }: { children: any } = $props();

	// Get the current slug from the route
	const slug = 'sample-project';
</script>

<ProjectLayout {slug}>
	{@render children?.()}
</ProjectLayout>
