<script lang="ts">
  import type { Content } from '$lib/types';
  import { formatDate, getRelativeTime } from '$lib/utils';
  import { Card, Tag, Paragraph, Heading, Label } from '$lib/components';

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
  <a href={getContentPath(content.type, content.slug)} class="content-card-link">
    <div class="content-card-header">
      <div class="content-card-meta">
        <span class="content-card-icon">{getContentTypeIcon(content.type)}</span>
        <Label>{getContentTypeLabel(content.type)}</Label>
      </div>
      <time class="content-card-time" datetime={content.date}>
        {getRelativeTime(content.date)}
      </time>
    </div>
    
    <Heading level={3} class="content-card-title">
      {content.title}
    </Heading>
    
    <Paragraph class="content-card-description" color="text-muted">
      {content.description}
    </Paragraph>
    
    {#if content.tags.length > 0}
      <div class="content-card-tags">
        {#each content.tags as tag}
          <Tag>{tag}</Tag>
        {/each}
      </div>
    {/if}
    
    <div class="content-card-footer">
      <span class="content-card-date">{formatDate(content.date)}</span>
      <span class="content-card-read-more">Read more →</span>
    </div>
  </a>
</Card>

<style>
  .content-card-link {
    @apply block no-underline text-inherit;
  }

  .content-card-header {
    @apply flex items-start justify-between mb-6;
  }

  .content-card-meta {
    @apply flex items-center space-x-2;
  }

  .content-card-icon {
    @apply text-lg;
  }

  .content-card-time {
    @apply text-small text-accent;
  }

  .content-card-title {
    @apply mb-4;
  }

  .content-card-description {
    @apply mb-6;
  }

  .content-card-tags {
    @apply flex flex-wrap gap-2 mb-6;
  }

  .content-card-footer {
    @apply flex items-center justify-between text-small text-accent;
  }

  .content-card-date {
    @apply text-small text-accent;
  }

  .content-card-read-more {
    @apply text-small text-accent;
  }
</style>
