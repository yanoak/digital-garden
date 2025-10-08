<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';
	import readingData from '$lib/data/reading.json';

	// Props
	let { children, slug }: { children: any; slug: string } = $props();

	// Find the metadata for this reading from reading.json
	const readingItemData = readingData.find(reading => reading.slug === slug);
	
	if (!readingItemData) {
		throw new Error(`Reading with slug "${slug}" not found in reading.json`);
	}

	// Convert reading data to ContentMetadata format
	const metadata: ContentMetadata = {
		title: readingItemData.title,
		date: readingItemData.date,
		description: readingItemData.description,
		tags: readingItemData.tags,
		type: readingItemData.type,
		author: readingItemData.author,
		rating: readingItemData.rating,
		status: readingItemData.status
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
