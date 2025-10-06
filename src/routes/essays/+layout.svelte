<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	// This layout will be used for all essay pages
	// The metadata will be passed from the individual markdown files
	let { children, data }: { children: any; data: any } = $props();

	// Extract metadata from the page data
	const metadata: ContentMetadata = {
		title: data?.title || '',
		date: data?.date,
		description: data?.description,
		tags: data?.tags || [],
		type: data?.type || 'essay',
		readingTime: data?.readingTime,
		featured: data?.featured
	};

	const backHref = '/essays';
	const backText = 'Back to all essays';
</script>

<ContentLayout 
	{metadata} 
	{backHref} 
	{backText}
>
	{@render children?.()}
</ContentLayout>
