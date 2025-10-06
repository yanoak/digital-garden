<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	// This layout will be used for all note pages
	let { children, data }: { children: any; data: any } = $props();

	// Extract metadata from the page data
	const metadata: ContentMetadata = {
		title: data?.title || '',
		date: data?.date,
		description: data?.description,
		tags: data?.tags || [],
		type: data?.type || 'note',
		category: data?.category
	};

	const backHref = '/notes';
	const backText = 'Back to all notes';
</script>

<ContentLayout 
	{metadata} 
	{backHref} 
	{backText}
>
	{@render children?.()}
</ContentLayout>
