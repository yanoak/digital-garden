<script lang="ts">
	import { 
		CollectionPageHeader, 
		CollectionContentArea, 
		FilterBar, 
		CollectionMeta, 
		CollectionCardList 
	} from '$lib/components';
	import type { Essay, FilterGroup } from '$lib/types';

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
		},
		{
			title: "Building Better Habits",
			date: "2024-10-05",
			description: "A deep dive into the science of habit formation and practical strategies for creating lasting positive changes in your daily routine.",
			tags: ["productivity", "psychology", "self-improvement"],
			slug: "building-better-habits",
			type: "essay",
			readingTime: 8
		},
		{
			title: "The Future of Work",
			date: "2024-10-04",
			description: "Examining how remote work, AI, and changing social dynamics are reshaping what it means to work and build a career in the 21st century.",
			tags: ["future-of-work", "technology", "society"],
			slug: "future-of-work",
			type: "essay",
			readingTime: 12
		}
	];

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

