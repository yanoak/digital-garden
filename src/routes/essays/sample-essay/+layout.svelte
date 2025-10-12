<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	// This layout is specifically for individual content pages
	let { children }: { children: any } = $props();

	// Hardcoded metadata for this specific essay
	// In a real app, this would come from the markdown frontmatter
	const metadata: ContentMetadata = {
		title: "The Art of Slow Thinking",
		date: "2025-10-06",
		description: "In a world optimized for speed, we've forgotten the value of deliberate, patient contemplation. How slowing down can lead to deeper understanding.",
		tags: ["thinking", "philosophy", "productivity"],
		type: "essay",
		readingTime: 8,
		featured: true
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
