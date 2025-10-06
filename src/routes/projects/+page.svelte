<script lang="ts">
	import { 
		CollectionPageHeader, 
		CollectionContentArea, 
		FilterBar, 
		CollectionMeta, 
		CollectionCardList 
	} from '$lib/components';
	import type { Project, FilterGroup } from '$lib/types';

	// Sample data - in a real app, this would come from a CMS or file system
	const projects: Project[] = [
		{
			title: "Digital Garden",
			date: "2024-10-06",
			description: "A personal digital garden built with SvelteKit, designed to share essays, book reviews, notes, and project write-ups in an interconnected, evolving format.",
			tags: ["sveltekit", "markdown", "web-development", "digital-garden"],
			slug: "sample-project",
			type: "project",
			status: "in-progress",
			technologies: ["SvelteKit", "TypeScript", "Tailwind CSS", "MDsvelte"],
			githubUrl: "https://github.com/yourusername/digital-garden"
		},
		{
			title: "Task Management App",
			date: "2024-10-05",
			description: "A minimalist task management application built with React and Node.js, featuring real-time collaboration and smart categorization.",
			tags: ["react", "nodejs", "productivity", "collaboration"],
			slug: "task-management-app",
			type: "project",
			status: "completed",
			technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
			githubUrl: "https://github.com/yourusername/task-app",
			liveUrl: "https://taskapp.example.com"
		},
		{
			title: "AI Writing Assistant",
			date: "2024-10-04",
			description: "An AI-powered writing assistant that helps improve clarity, tone, and structure of written content using natural language processing.",
			tags: ["ai", "nlp", "writing", "machine-learning"],
			slug: "ai-writing-assistant",
			type: "project",
			status: "planning",
			technologies: ["Python", "OpenAI API", "FastAPI", "React"],
			githubUrl: "https://github.com/yourusername/ai-writer"
		}
	];

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
	description="Write-ups about projects I've built and things I'm currently working on."
/>

<!-- Content Area -->
<CollectionContentArea>
	<!-- Filter Bar -->
	<!-- <FilterBar 
		filterGroups={filterGroups} 
		onFilterChange={handleFilterChange}
	/> -->

	<!-- Content Meta -->
	<CollectionMeta count={projects.length} type="projects" />
	
	<!-- Card List -->
	<CollectionCardList content={projects} />
</CollectionContentArea>

