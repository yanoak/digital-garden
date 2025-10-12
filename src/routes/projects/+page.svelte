<script lang="ts">
	import { 
		CollectionPageHeader, 
		CollectionContentArea, 
		FilterBar, 
		CollectionMeta, 
		CollectionCardList 
	} from '$lib/components';
	import type { Project, FilterGroup } from '$lib/types';
	import { countDisplayedContent } from '$lib/utils';
	import projectsData from '$lib/data/projects.json';

	// Load projects data from JSON file
	const projects: Project[] = projectsData as Project[];

	// Filter and sort state
	let selectedStatus = 'all';
	let selectedTechnology = 'all';
	let sortBy = 'newest';

	// Filter groups for FilterBar
	const filterGroups: FilterGroup[] = [
		{
			key: 'status',
			label: 'Status',
			options: [
				{ label: 'All Status', value: 'all', count: projects.length, active: selectedStatus === 'all' },
				{ label: 'Active', value: 'in-progress', count: 1, active: selectedStatus === 'in-progress' },
				{ label: 'Completed', value: 'completed', count: 1, active: selectedStatus === 'completed' },
				{ label: 'Planning', value: 'planning', count: 1, active: selectedStatus === 'planning' },
				{ label: 'On Hold', value: 'on-hold', count: 0, active: selectedStatus === 'on-hold' }
			]
		},
		{
			key: 'technology',
			label: 'Technology',
			options: [
				{ label: 'All Technologies', value: 'all', count: projects.length, active: selectedTechnology === 'all' },
				{ label: 'SvelteKit', value: 'sveltekit', count: 1, active: selectedTechnology === 'sveltekit' },
				{ label: 'React', value: 'react', count: 2, active: selectedTechnology === 'react' },
				{ label: 'Python', value: 'python', count: 1, active: selectedTechnology === 'python' },
				{ label: 'Node.js', value: 'nodejs', count: 1, active: selectedTechnology === 'nodejs' }
			]
		},
		{
			key: 'sort',
			label: 'Sort By',
			options: [
				{ label: 'Newest First', value: 'newest', active: sortBy === 'newest' },
				{ label: 'Alphabetical', value: 'alphabetical', active: sortBy === 'alphabetical' },
				{ label: 'Status', value: 'status', active: sortBy === 'status' }
			]
		}
	];

	// Placeholder handler
	function handleFilterChange(groupKey: string, value: string) {
		if (groupKey === 'status') {
			selectedStatus = value;
			console.log('Filter by status:', value);
		} else if (groupKey === 'technology') {
			selectedTechnology = value;
			console.log('Filter by technology:', value);
		} else if (groupKey === 'sort') {
			sortBy = value;
			console.log('Sort by:', value);
		}
		// TODO: Implement filtering logic
	}
</script>

<!-- Page Header -->
<CollectionPageHeader 
	title="Projects"
	description="Write-ups about projects I've built and things I'm currently working on. For all these projects, I was responsible for the bulk of the interactive data visualisation developmemt."
/>

<!-- Content Area -->
<CollectionContentArea>
	<!-- Filter Bar -->
	<!-- <FilterBar 
		filterGroups={filterGroups} 
		onFilterChange={handleFilterChange}
	/> -->

	<!-- Content Meta -->
	<CollectionMeta count={countDisplayedContent(projects)} type="projects" />
	
	<!-- Card List -->
	<CollectionCardList content={projects} />
</CollectionContentArea>

