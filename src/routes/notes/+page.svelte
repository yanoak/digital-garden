<script lang="ts">
	import { 
		CollectionPageHeader, 
		CollectionContentArea, 
		FilterBar, 
		CollectionMeta, 
		CollectionCardList 
	} from '$lib/components';
	import type { Note, FilterGroup } from '$lib/types';

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
		},
		{
			title: "The Art of Mindful Coding",
			date: "2024-10-05",
			description: "Reflections on bringing mindfulness practices into software development - staying present, reducing cognitive load, and finding flow states.",
			tags: ["mindfulness", "programming", "productivity"],
			slug: "mindful-coding",
			type: "note",
			category: "programming"
		},
		{
			title: "Building Sustainable Habits",
			date: "2024-10-04",
			description: "Notes on creating habits that stick - the importance of systems over goals, environmental design, and gradual improvement.",
			tags: ["habits", "productivity", "self-improvement"],
			slug: "sustainable-habits",
			type: "note",
			category: "productivity"
		}
	];

	// Filter and sort state
	let selectedTopic = 'all';
	let selectedStatus = 'all';
	let sortBy = 'newest';

	// Filter groups for FilterBar
	const filterGroups: FilterGroup[] = [
		{
			key: 'topic',
			label: 'Topics',
			options: [
				{ label: 'All Topics', value: 'all', count: notes.length, active: selectedTopic === 'all' },
				{ label: 'Learning', value: 'learning', count: 1, active: selectedTopic === 'learning' },
				{ label: 'Programming', value: 'programming', count: 1, active: selectedTopic === 'programming' },
				{ label: 'Productivity', value: 'productivity', count: 1, active: selectedTopic === 'productivity' }
			]
		},
		{
			key: 'status',
			label: 'Status',
			options: [
				{ label: 'All Notes', value: 'all', count: notes.length, active: selectedStatus === 'all' },
				{ label: 'Seedling', value: 'seedling', count: 2, active: selectedStatus === 'seedling' },
				{ label: 'Evergreen', value: 'evergreen', count: 1, active: selectedStatus === 'evergreen' }
			]
		},
		{
			key: 'sort',
			label: 'Sort By',
			options: [
				{ label: 'Recently Updated', value: 'newest', active: sortBy === 'newest' },
				{ label: 'Newest First', value: 'oldest', active: sortBy === 'oldest' },
				{ label: 'Alphabetical', value: 'alphabetical', active: sortBy === 'alphabetical' }
			]
		}
	];

	// Placeholder handler
	function handleFilterChange(groupKey: string, value: string) {
		if (groupKey === 'topic') {
			selectedTopic = value;
			console.log('Filter by topic:', value);
		} else if (groupKey === 'status') {
			selectedStatus = value;
			console.log('Filter by status:', value);
		} else if (groupKey === 'sort') {
			sortBy = value;
			console.log('Sort by:', value);
		}
		// TODO: Implement filtering logic
	}
</script>

<!-- Page Header -->
<CollectionPageHeader 
	title="Notes"
	description="Quick thoughts, learnings, and observations on various topics. These are evergreen notes that evolve over time."
/>

<!-- Content Area -->
<CollectionContentArea>
	<!-- Filter Bar -->
	<!-- <FilterBar 
		filterGroups={filterGroups} 
		onFilterChange={handleFilterChange}
	/> -->

	<!-- Content Meta -->
	<CollectionMeta count={notes.length} type="notes" />
	
	<!-- Card List -->
	<CollectionCardList content={notes} />
</CollectionContentArea>

