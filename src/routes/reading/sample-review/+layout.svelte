<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	// This layout is specifically for individual content pages
	let { children }: { children: any } = $props();

	// Hardcoded metadata for this specific reading
	// In a real app, this would come from the markdown frontmatter
	const metadata: ContentMetadata = {
		title: "Thinking, Fast and Slow",
		date: "2024-10-06",
		description: "A deep dive into Daniel Kahneman's exploration of the dual-system model of human thinking and cognitive biases that shape our decision-making.",
		tags: ["psychology", "decision-making", "cognitive-biases", "behavioral-economics"],
		type: "reading",
		author: "Daniel Kahneman",
		rating: 5
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
