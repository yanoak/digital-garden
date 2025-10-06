<script lang="ts">
  import type { Content } from '$lib/types';
  import ContentCard from './ContentCard.svelte';
  import Grid from '$lib/components/layout/Grid.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Heading from '$lib/components/typography/Heading.svelte';
  import Paragraph from '$lib/components/typography/Paragraph.svelte';

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

<div class="space-y-8 {className}">
  {#if title || description}
    <div class="text-center">
      {#if title}
        <Heading level={2} class="mb-4">{title}</Heading>
      {/if}
      {#if description}
        <Paragraph class="text-lg" muted>{description}</Paragraph>
      {/if}
    </div>
  {/if}

  {#if showFeatured && featuredContent.length > 0}
    <Container>
      <Heading level={3} class="mb-6">Featured</Heading>
      <Grid cols={1} gap="lg">
        {#each featuredContent as item}
          <ContentCard content={item} featured />
        {/each}
      </Grid>
    </Container>
  {/if}

  {#if regularContent.length > 0}
    <Container>
      {#if showFeatured && featuredContent.length > 0}
        <Heading level={3} class="mb-6">All Content</Heading>
      {/if}
      <Grid cols={3} gap="lg">
        {#each regularContent as item}
          <ContentCard content={item} />
        {/each}
      </Grid>
    </Container>
  {:else}
    <Container>
      <div class="text-center py-12">
        <Heading level={3} class="mb-4">No content found</Heading>
        <Paragraph muted>Check back later for new content.</Paragraph>
      </div>
    </Container>
  {/if}
</div>
