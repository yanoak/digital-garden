<script lang="ts">
  import type { Content } from '$lib/types';
  import { formatDate, getRelativeTime } from '$lib/utils';
  import CustomLink from '$lib/components/ui/CustomLink.svelte';
  import CustomImage from '$lib/components/ui/CustomImage.svelte';
  import Paragraph from '$lib/components/typography/Paragraph.svelte';
  import Heading from '$lib/components/typography/Heading.svelte';

  interface ContentCardProps {
    content: Content;
    featured?: boolean;
    class?: string;
  }

  let { 
    content, 
    featured = false,
    class: className = ''
  }: ContentCardProps = $props();

  const getContentTypeIcon = (type: string): string => {
    const icons = {
      essay: '📝',
      reading: '📚',
      note: '📝',
      project: '🚀'
    };
    return icons[type as keyof typeof icons] || '📄';
  };

  const getContentTypeLabel = (type: string): string => {
    const labels = {
      essay: 'Essay',
      reading: 'Reading',
      note: 'Note',
      project: 'Project'
    };
    return labels[type as keyof typeof labels] || 'Content';
  };

  const getContentPath = (type: string, slug: string): string => {
    const paths = {
      essay: `/essays/${slug}`,
      reading: `/reading/${slug}`,
      note: `/notes/${slug}`,
      project: `/projects/${slug}`
    };
    return paths[type as keyof typeof paths] || `/${type}s/${slug}`;
  };
</script>

<article class="card hover:shadow-md transition-shadow duration-200 {featured ? 'ring-2 ring-primary-200' : ''} {className}">
  <div class="card-body">
    <div class="flex items-start justify-between mb-3">
      <div class="flex items-center space-x-2">
        <span class="text-lg">{getContentTypeIcon(content.type)}</span>
        <span class="text-sm text-secondary-600 font-medium">
          {getContentTypeLabel(content.type)}
        </span>
      </div>
      <time class="text-sm text-secondary-500" datetime={content.date}>
        {getRelativeTime(content.date)}
      </time>
    </div>
    
    <Heading level={3} class="mb-2">
      <CustomLink href={getContentPath(content.type, content.slug)}>
        {content.title}
      </CustomLink>
    </Heading>
    
    <Paragraph class="mb-4" muted>
      {content.description}
    </Paragraph>
    
    {#if content.tags.length > 0}
      <div class="flex flex-wrap gap-2 mb-4">
        {#each content.tags as tag}
          <span class="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
    
    <div class="flex items-center justify-between text-sm text-secondary-500">
      <span>{formatDate(content.date)}</span>
      <CustomLink href={getContentPath(content.type, content.slug)} class="text-primary-600 hover:text-primary-700">
        Read more →
      </CustomLink>
    </div>
  </div>
</article>
