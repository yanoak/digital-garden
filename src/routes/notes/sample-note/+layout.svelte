<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	// This layout is specifically for individual content pages
	let { children }: { children: any } = $props();

	// Hardcoded metadata for this specific note
	// In a real app, this would come from the markdown frontmatter
	const metadata: ContentMetadata = {
		title: "On Learning in Public",
		date: "2024-10-06",
		description: "Exploring the concept of learning in public - sharing your learning journey openly, including mistakes, questions, and half-formed ideas.",
		tags: ["learning", "public-sharing", "personal-growth", "knowledge-sharing"],
		type: "note",
		category: "learning"
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
