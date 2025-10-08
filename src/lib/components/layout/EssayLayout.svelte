<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';
	import essaysData from '$lib/data/essays.json';

	// Props
	let { children, slug }: { children: any; slug: string } = $props();

	// Find the metadata for this essay from essays.json
	const essayData = essaysData.find(essay => essay.slug === slug);
	
	if (!essayData) {
		throw new Error(`Essay with slug "${slug}" not found in essays.json`);
	}

	// Convert essay data to ContentMetadata format
	const metadata: ContentMetadata = {
		title: essayData.title,
		date: essayData.date,
		description: essayData.description,
		tags: essayData.tags,
		type: essayData.type,
		readingTime: essayData.readingTime,
		featured: essayData.featured
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
