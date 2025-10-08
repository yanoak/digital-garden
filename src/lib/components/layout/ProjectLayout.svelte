<script lang="ts">
	import { ContentLayout } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';
	import projectsData from '$lib/data/projects.json';

	// Props
	let { children, slug }: { children: any; slug: string } = $props();

	// Find the metadata for this project from projects.json
	const projectData = projectsData.find(project => project.slug === slug);
	
	if (!projectData) {
		throw new Error(`Project with slug "${slug}" not found in projects.json`);
	}

	// Convert project data to ContentMetadata format
	const metadata: ContentMetadata = {
		title: projectData.title,
		date: projectData.date,
		description: projectData.description,
		tags: projectData.tags,
		type: projectData.type,
		status: projectData.status,
		technologies: projectData.technologies,
		githubUrl: projectData.githubUrl,
		liveUrl: projectData.liveUrl
	};

	const backHref = '/projects';
	const backText = 'Back to all projects';
</script>

<ContentLayout 
	{metadata} 
	{backHref} 
	{backText}
>
	{@render children?.()}
</ContentLayout>
