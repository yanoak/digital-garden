<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	// This layout is specifically for individual content pages
	let { children }: { children: any } = $props();

	// Hardcoded metadata for this specific project
	// In a real app, this would come from the markdown frontmatter
	const metadata: ContentMetadata = {
		title: "Digital Garden",
		date: "2024-10-06",
		description: "A personal digital garden built with SvelteKit, designed to share essays, book reviews, notes, and project write-ups in an interconnected, evolving format.",
		tags: ["sveltekit", "markdown", "web-development", "digital-garden"],
		type: "project",
		status: "in-progress",
		technologies: ["SvelteKit", "TypeScript", "Tailwind CSS", "MDsvelte"],
		githubUrl: "https://github.com/yourusername/digital-garden"
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
