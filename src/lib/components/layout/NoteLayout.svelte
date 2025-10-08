<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';
	import notesData from '$lib/data/notes.json';

	// Props
	let { children, slug }: { children: any; slug: string } = $props();

	// Find the metadata for this note from notes.json
	const noteData = notesData.find(note => note.slug === slug);
	
	if (!noteData) {
		throw new Error(`Note with slug "${slug}" not found in notes.json`);
	}

	// Convert note data to ContentMetadata format
	const metadata: ContentMetadata = {
		title: noteData.title,
		date: noteData.date,
		description: noteData.description,
		tags: noteData.tags,
		type: noteData.type,
		category: noteData.category
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
