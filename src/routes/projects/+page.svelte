<script lang="ts">
	import { Container, Section, Title, Paragraph, ContentList } from '$lib/components';
	import type { Project } from '$lib/types';

	// Sample data - in a real app, this would come from a CMS or file system
	const projects: Project[] = [
		{
			title: "Digital Garden",
			date: "2024-10-06",
			description: "A personal digital garden built with SvelteKit, designed to share essays, book reviews, notes, and project write-ups in an interconnected, evolving format.",
			tags: ["sveltekit", "markdown", "web-development", "digital-garden"],
			slug: "sample-project",
			type: "project",
			status: "in-progress",
			technologies: ["SvelteKit", "TypeScript", "Tailwind CSS", "MDsvelte"],
			githubUrl: "https://github.com/yourusername/digital-garden"
		}
	];
</script>

<Section padding="xl" background="white">
	<Container>
		<div class="text-center mb-12">
			<Title class="mb-6">Projects</Title>
			<Paragraph size="lg" class="max-w-3xl mx-auto">
				Write-ups about projects I've built and things I'm currently working on.
			</Paragraph>
		</div>

		<ContentList 
			content={projects} 
			title="Active Projects"
		/>
	</Container>
</Section>
