<script lang="ts">
	import { 
		CollectionPageHeader, 
		CollectionContentArea, 
		FilterBar, 
		CollectionMeta, 
		CollectionCardList 
	} from '$lib/components';
	import type { Essay, FilterGroup } from '$lib/types';
	import essaysData from '$lib/data/essays.json';

	// Load essays data from JSON file
	const essays: Essay[] = essaysData as Essay[];

	// Filter and sort state
	let selectedTopic = 'all';
	let selectedTag = 'all';
	let sortBy = 'newest';

	// Filter groups for FilterBar
	const filterGroups: FilterGroup[] = [
		{
			key: 'topic',
			label: 'Topics',
			options: [
				{ label: 'All Topics', value: 'all', count: essays.length, active: selectedTopic === 'all' },
				{ label: 'Technology', value: 'technology', count: 2, active: selectedTopic === 'technology' },
				{ label: 'Productivity', value: 'productivity', count: 1, active: selectedTopic === 'productivity' },
				{ label: 'Society', value: 'society', count: 1, active: selectedTopic === 'society' }
			]
		},
		{
			key: 'tag',
			label: 'Tags',
			options: [
				{ label: 'All Tags', value: 'all', count: essays.length, active: selectedTag === 'all' },
				{ label: 'digital-gardens', value: 'digital-gardens', count: 1, active: selectedTag === 'digital-gardens' },
				{ label: 'productivity', value: 'productivity', count: 1, active: selectedTag === 'productivity' },
				{ label: 'technology', value: 'technology', count: 1, active: selectedTag === 'technology' },
				{ label: 'writing', value: 'writing', count: 1, active: selectedTag === 'writing' }
			]
		},
		{
			key: 'sort',
			label: 'Sort By',
			options: [
				{ label: 'Newest First', value: 'newest', active: sortBy === 'newest' },
				{ label: 'Oldest First', value: 'oldest', active: sortBy === 'oldest' },
				{ label: 'Alphabetical', value: 'alphabetical', active: sortBy === 'alphabetical' }
			]
		}
	];

	// Placeholder handler
	function handleFilterChange(groupKey: string, value: string) {
		if (groupKey === 'topic') {
			selectedTopic = value;
			console.log('Filter by topic:', value);
		} else if (groupKey === 'tag') {
			selectedTag = value;
			console.log('Filter by tag:', value);
		} else if (groupKey === 'sort') {
			sortBy = value;
			console.log('Sort by:', value);
		}
		// TODO: Implement filtering logic
	}
</script>

<!-- Page Header -->
<CollectionPageHeader 
	title="Essays"
	description="Welcome to my essays. Here I share longer-form thoughts and explorations on topics that interest me."
/>

<!-- Content Area -->
<CollectionContentArea>
	<!-- Filter Bar -->
	<!-- <FilterBar 
		filterGroups={filterGroups} 
		onFilterChange={handleFilterChange}
	/> -->

	<!-- Content Meta -->
	<CollectionMeta count={essays.length} type="essays" />
	
	<!-- Card List -->
	<CollectionCardList content={essays} />
</CollectionContentArea>

