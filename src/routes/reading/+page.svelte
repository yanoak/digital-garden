<script lang="ts">
	import { Container, Section, Title, Paragraph, ContentList } from '$lib/components';
	import type { Reading } from '$lib/types';

	// Sample data - in a real app, this would come from a CMS or file system
	const reading: Reading[] = [
		{
			title: "Thinking, Fast and Slow",
			date: "2024-10-06",
			description: "A deep dive into Daniel Kahneman's exploration of the dual-system model of human thinking and cognitive biases that shape our decision-making.",
			tags: ["psychology", "decision-making", "cognitive-biases", "behavioral-economics"],
			slug: "sample-review",
			type: "reading",
			author: "Daniel Kahneman",
			published: "2011",
			rating: 5,
			status: "read"
		}
	];
</script>

<Section padding="xl" background="white">
	<Container>
		<div class="text-center mb-12">
			<Title class="mb-6">Reading</Title>
			<Paragraph size="lg" class="max-w-3xl mx-auto">
				My thoughts and takeaways from books and articles I've read across various genres.
			</Paragraph>
		</div>

		<ContentList 
			content={reading} 
			title="Book Reviews & Reading Notes"
		/>
	</Container>
</Section>
