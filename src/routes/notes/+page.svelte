<script lang="ts">
	import { 
		CollectionPageHeader, 
		CollectionContentArea, 
		FilterBar, 
		CollectionMeta, 
		CollectionCardList 
	} from '$lib/components';
	import type { Note, FilterGroup } from '$lib/types';
	import notesData from '$lib/data/notes.json';

	// Load notes data from JSON file
	const notes: Note[] = notesData as Note[];

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

