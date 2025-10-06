<script lang="ts">
	import { Container, Section, Title, Paragraph, ContentList } from '$lib/components';
	import type { Note } from '$lib/types';

	// Sample data - in a real app, this would come from a CMS or file system
	const notes: Note[] = [
		{
			title: "On Learning in Public",
			date: "2024-10-06",
			description: "Exploring the concept of learning in public - sharing your learning journey openly, including mistakes, questions, and half-formed ideas.",
			tags: ["learning", "public-sharing", "personal-growth", "knowledge-sharing"],
			slug: "sample-note",
			type: "note",
			category: "learning"
		}
	];
</script>

<Section padding="xl" background="white">
	<Container>
		<div class="text-center mb-12">
			<Title class="mb-6">Notes</Title>
			<Paragraph size="lg" class="max-w-3xl mx-auto">
				Quick thoughts, learnings, and observations on various topics. These are evergreen notes that evolve over time.
			</Paragraph>
		</div>

		<ContentList 
			content={notes} 
			title="Recent Notes"
		/>
	</Container>
</Section>
