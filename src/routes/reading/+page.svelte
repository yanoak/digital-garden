<script lang="ts">
	import { 
		CollectionPageHeader, 
		CollectionContentArea, 
		FilterBar, 
		CollectionMeta, 
		CollectionCardList 
	} from '$lib/components';
	import type { Reading, FilterGroup } from '$lib/types';

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
		},
		{
			title: "Atomic Habits",
			date: "2024-10-05",
			description: "James Clear's comprehensive guide to building good habits and breaking bad ones through small, incremental changes that compound over time.",
			tags: ["habits", "productivity", "self-improvement", "psychology"],
			slug: "atomic-habits",
			type: "reading",
			author: "James Clear",
			published: "2018",
			rating: 4,
			status: "read"
		},
		{
			title: "The Lean Startup",
			date: "2024-10-04",
			description: "Eric Ries's methodology for developing businesses and products through validated learning, rapid experimentation, and iterative design.",
			tags: ["entrepreneurship", "startups", "business", "innovation"],
			slug: "lean-startup",
			type: "reading",
			author: "Eric Ries",
			published: "2011",
			rating: 4,
			status: "reading"
		}
	];

	// Filter and sort state
	let selectedStatus = 'all';
	let selectedType = 'all';
	let selectedYear = 'all';
	let sortBy = 'newest';

	// Filter groups for FilterBar
	const filterGroups: FilterGroup[] = [
		{
			key: 'status',
			label: 'Status',
			options: [
				{ label: 'All Status', value: 'all', count: reading.length, active: selectedStatus === 'all' },
				{ label: 'Reading', value: 'reading', count: 1, active: selectedStatus === 'reading' },
				{ label: 'Read', value: 'read', count: 2, active: selectedStatus === 'read' },
				{ label: 'Want to Read', value: 'want-to-read', count: 0, active: selectedStatus === 'want-to-read' }
			]
		},
		{
			key: 'type',
			label: 'Type',
			options: [
				{ label: 'All Types', value: 'all', count: reading.length, active: selectedType === 'all' },
				{ label: 'Books', value: 'book', count: 3, active: selectedType === 'book' },
				{ label: 'Articles', value: 'article', count: 0, active: selectedType === 'article' }
			]
		},
		{
			key: 'year',
			label: 'Year',
			options: [
				{ label: 'All Years', value: 'all', count: reading.length, active: selectedYear === 'all' },
				{ label: '2018', value: '2018', count: 1, active: selectedYear === '2018' },
				{ label: '2011', value: '2011', count: 2, active: selectedYear === '2011' }
			]
		},
		{
			key: 'sort',
			label: 'Sort By',
			options: [
				{ label: 'Recently Added', value: 'newest', active: sortBy === 'newest' },
				{ label: 'Date Finished', value: 'finished', active: sortBy === 'finished' },
				{ label: 'Author', value: 'author', active: sortBy === 'author' }
			]
		}
	];

	// Placeholder handler
	function handleFilterChange(groupKey: string, value: string) {
		if (groupKey === 'status') {
			selectedStatus = value;
			console.log('Filter by status:', value);
		} else if (groupKey === 'type') {
			selectedType = value;
			console.log('Filter by type:', value);
		} else if (groupKey === 'year') {
			selectedYear = value;
			console.log('Filter by year:', value);
		} else if (groupKey === 'sort') {
			sortBy = value;
			console.log('Sort by:', value);
		}
		// TODO: Implement filtering logic
	}
</script>

<!-- Page Header -->
<CollectionPageHeader 
	title="Reading"
	description="My thoughts and takeaways from books and articles I've read across various genres."
/>

<!-- Content Area -->
<CollectionContentArea>
	<!-- Filter Bar -->
	<!-- <FilterBar 
		filterGroups={filterGroups} 
		onFilterChange={handleFilterChange}
	/> -->

	<!-- Content Meta -->
	<CollectionMeta count={reading.length} type="items" />
	
	<!-- Card List -->
	<CollectionCardList content={reading} />
</CollectionContentArea>

