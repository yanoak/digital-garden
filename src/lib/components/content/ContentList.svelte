<script lang="ts">
  import type { Content } from '$lib/types';
  import ContentCard from './ContentCard.svelte';
  import { Grid, Container, Heading, Paragraph, Section } from '$lib/components';

  interface ContentListProps {
    content: Content[];
    title?: string;
    description?: string;
    showFeatured?: boolean;
    class?: string;
  }

  let { 
    content, 
    title,
    description,
    showFeatured = false,
    class: className = ''
  }: ContentListProps = $props();

  // Separate featured and regular content
  const featuredContent = showFeatured 
    ? content.filter(item => item.type === 'essay' && (item as any).featured === true)
    : [];
  const regularContent = showFeatured 
    ? content.filter(item => !(item.type === 'essay' && (item as any).featured === true))
    : content;
</script>

<div class="content-list {className}">
  {#if title || description}
    <div class="content-list-header">
      {#if title}
        <Heading level={2} class="content-list-title">{title}</Heading>
      {/if}
      {#if description}
        <Paragraph class="content-list-description" color="text-muted">{description}</Paragraph>
      {/if}
    </div>
  {/if}

  {#if showFeatured && featuredContent.length > 0}
    <Section class="content-list-featured">
      <Container>
        <Heading level={3} class="content-list-featured-title">Featured</Heading>
        <Grid cols={1} gap="lg">
          {#each featuredContent as item}
            <ContentCard content={item} featured />
          {/each}
        </Grid>
      </Container>
    </Section>
  {/if}

  {#if regularContent.length > 0}
    <Section class="content-list-regular">
      <Container>
        {#if showFeatured && featuredContent.length > 0}
          <Heading level={3} class="content-list-regular-title">All Content</Heading>
        {/if}
        <Grid cols="auto-fit" gap="2xl">
          {#each regularContent as item}
            <ContentCard content={item} />
          {/each}
        </Grid>
      </Container>
    </Section>
  {:else}
    <Section class="content-list-empty">
      <Container>
        <div class="content-list-empty-content">
          <Heading level={3} class="content-list-empty-title">No content found</Heading>
          <Paragraph color="text-muted">Check back later for new content.</Paragraph>
        </div>
      </Container>
    </Section>
  {/if}
</div>

<style>
  .content-list {
    @apply space-y-8;
  }

  .content-list-header {
    @apply text-left;
  }

  .content-list-title {
    @apply mb-4;
  }

  .content-list-description {
    @apply text-body;
  }

  .content-list-featured {
    @apply py-0;
  }

  .content-list-featured-title {
    @apply mb-6;
  }

  .content-list-regular {
    @apply py-0;
  }

  .content-list-regular-title {
    @apply mb-6;
  }

  .content-list-empty {
    @apply py-0;
  }

  .content-list-empty-content {
    @apply text-left py-12;
  }

  .content-list-empty-title {
    @apply mb-4;
  }
</style>
