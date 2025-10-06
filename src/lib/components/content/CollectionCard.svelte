<script lang="ts">
	import { Heading, Paragraph, Tag } from '$lib/components';
	import type { Content } from '$lib/types';

	export let content: Content;
	export let isLast: boolean = false;

	// Format date for display
	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'short', 
			day: 'numeric' 
		});
	}

	// Get reading time text
	function getReadingTime(readingTime?: number): string {
		return readingTime ? `${readingTime} min read` : '';
	}

	// Get content type specific metadata
	function getContentMeta(): string {
		const parts = [formatDate(content.date)];
		
		if (content.type === 'essay' && 'readingTime' in content && content.readingTime) {
			parts.push(getReadingTime(content.readingTime));
		}
		
		if (content.type === 'reading' && 'author' in content && content.author) {
			parts.push(content.author);
		}
		
		if (content.type === 'project' && 'status' in content) {
			parts.push(content.status);
		}
		
		if (content.type === 'note' && 'category' in content && content.category) {
			parts.push(content.category);
		}
		
		return parts.join(' · ');
	}

	// Get content type specific additional info
	function getAdditionalInfo(): string | null {
		if (content.type === 'reading' && 'published' in content && content.published) {
			return String(content.published);
		}
		if (content.type === 'project' && 'technologies' in content && content.technologies.length > 0) {
			return content.technologies.slice(0, 3).join(', ');
		}
		return null;
	}

	// Get href based on content type
	function getHref(): string {
		const basePath = content.type === 'reading' ? '/reading' : `/${content.type}s`;
		return `${basePath}/${content.slug}`;
	}
</script>

<article class="collection-card" class:last-card={isLast}>
	<a href={getHref()} class="card-link">
		<div class="card-meta">
			{getContentMeta()}
		</div>
		
		<Heading size="lg" class="card-title">
			{content.title}
		</Heading>
		
		{#if getAdditionalInfo()}
			<div class="card-additional">
				{getAdditionalInfo()}
			</div>
		{/if}
		
		<Paragraph class="card-description">
			{content.description}
		</Paragraph>
		
		{#if content.tags && content.tags.length > 0}
			<div class="card-tags">
				{#each content.tags.slice(0, 4) as tag}
					<Tag variant="outline" size="sm">{tag}</Tag>
				{/each}
			</div>
		{/if}
	</a>
</article>

<style>
	.collection-card {
		@apply bg-white border border-secondary p-10 cursor-pointer transition-all duration-300 relative;
	}

	.collection-card:not(.last-card) {
		@apply border-b-0;
	}

	.collection-card.last-card {
		@apply border-b border-secondary;
	}

	.collection-card:hover {
		@apply border-primary z-10;
	}

	.card-link {
		@apply block no-underline text-inherit;
	}

	.card-meta {
		@apply text-accent text-xs font-heading tracking-wide mb-4;
	}

	.card-title {
		@apply text-text font-heading font-semibold text-2xl leading-tight mb-4 transition-colors duration-300;
	}

	.collection-card:hover .card-title {
		@apply text-primary;
	}

	.card-additional {
		@apply text-accent text-sm font-body mb-3;
	}

	.card-description {
		@apply text-accent text-base leading-relaxed mb-5;
	}

	.card-tags {
		@apply flex gap-2 flex-wrap;
	}
</style>
