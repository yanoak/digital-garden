<script lang="ts">
	import { NoteLayout } from '$lib/components';

	// This layout is specifically for individual content pages
	let { children }: { children: any } = $props();

	// Get the current slug from the route
	const slug = 'sample-note';
</script>

<NoteLayout {slug}>
	{@render children?.()}
</NoteLayout>
