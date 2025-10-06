<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	// This layout will be used for all project pages
	let { children, data }: { children: any; data: any } = $props();

	// Extract metadata from the page data
	const metadata: ContentMetadata = {
		title: data?.title || '',
		date: data?.date,
		description: data?.description,
		tags: data?.tags || [],
		type: data?.type || 'project',
		status: data?.status,
		technologies: data?.technologies || [],
		githubUrl: data?.githubUrl,
		liveUrl: data?.liveUrl,
		featuredImage: data?.featuredImage
	};

	const backHref = '/projects';
	const backText = 'Back to all projects';
</script>

<ContentLayout 
	{metadata} 
	{backHref} 
	{backText}
>
	{@render children?.()}
</ContentLayout>
