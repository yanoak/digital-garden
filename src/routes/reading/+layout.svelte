<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	// This layout will be used for all reading pages
	let { children, data }: { children: any; data: any } = $props();

	// Extract metadata from the page data
	const metadata: ContentMetadata = {
		title: data?.title || '',
		date: data?.date,
		description: data?.description,
		tags: data?.tags || [],
		type: data?.type || 'reading',
		author: data?.author,
		rating: data?.rating,
		bookCover: data?.bookCover
	};

	const backHref = '/reading';
	const backText = 'Back to all reading';
</script>

<ContentLayout 
	{metadata} 
	{backHref} 
	{backText}
>
	{@render children?.()}
</ContentLayout>
