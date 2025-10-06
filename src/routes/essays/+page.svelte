<script lang="ts">
	import { Container, Section, Title, Paragraph, ContentList } from '$lib/components';
	import type { Essay } from '$lib/types';

	// Sample data - in a real app, this would come from a CMS or file system
	const essays: Essay[] = [
		{
			title: "The Power of Digital Gardens",
			date: "2024-10-06",
			description: "Exploring the paradigm shift from traditional blogs to digital gardens - interconnected, evolving, and imperfect spaces for learning in public.",
			tags: ["digital-gardens", "writing", "learning", "knowledge-management"],
			slug: "sample-essay",
			type: "essay",
			featured: true,
			readingTime: 5
		}
	];
</script>

<Section padding="xl" background="white">
	<Container>
		<div class="text-center mb-12">
			<Title class="mb-6">Essays</Title>
			<Paragraph size="lg" class="max-w-3xl mx-auto">
				Welcome to my essays. Here I share longer-form thoughts and explorations on topics that interest me.
			</Paragraph>
		</div>

		<ContentList 
			content={essays} 
			title="Featured Essays"
			showFeatured={true}
		/>
	</Container>
</Section>
