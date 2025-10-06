<script lang="ts">
  import type { Content } from '$lib/types';
  import { formatDate, getRelativeTime } from '$lib/utils';
  import Link from '$lib/components/ui/Link.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Tag from '$lib/components/ui/Tag.svelte';
  import Paragraph from '$lib/components/typography/Paragraph.svelte';
  import Heading from '$lib/components/typography/Heading.svelte';
  import Label from '$lib/components/typography/Label.svelte';

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

<Card class={className}>
  <div class="flex items-start justify-between mb-6">
    <div class="flex items-center space-x-2">
      <span class="text-lg">{getContentTypeIcon(content.type)}</span>
      <Label>{getContentTypeLabel(content.type)}</Label>
    </div>
    <time class="text-small text-accent" datetime={content.date}>
      {getRelativeTime(content.date)}
    </time>
  </div>
  
  <Heading level={3} class="mb-4">
    <Link href={getContentPath(content.type, content.slug)}>
      {content.title}
    </Link>
  </Heading>
  
  <Paragraph class="mb-6" color="text-muted">
    {content.description}
  </Paragraph>
  
  {#if content.tags.length > 0}
    <div class="flex flex-wrap gap-2 mb-6">
      {#each content.tags as tag}
        <Tag>{tag}</Tag>
      {/each}
    </div>
  {/if}
  
  <div class="flex items-center justify-between text-small text-accent">
    <span>{formatDate(content.date)}</span>
    <Link href={getContentPath(content.type, content.slug)}>
      Read more →
    </Link>
  </div>
</Card>
