<script lang="ts">
  import type { CustomImageProps } from '$lib/types';

  let { 
    src, 
    alt, 
    width, 
    height, 
    class: className = '', 
    loading = 'lazy',
    priority = false 
  }: CustomImageProps = $props();

  // Generate responsive srcset for better performance
  const generateSrcSet = (src: string): string => {
    if (src.startsWith('http') || src.startsWith('/')) {
      return src;
    }
    // For local images, you might want to generate different sizes
    return src;
  };
</script>

<img
  {src}
  {alt}
  {width}
  {height}
  class="h-auto {className}"
  loading={priority ? 'eager' : loading}
  fetchpriority={priority ? 'high' : 'auto'}
  srcset={generateSrcSet(src)}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
