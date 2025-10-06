<script lang="ts">
  import type { CustomLinkProps } from '$lib/types';

  let { 
    href, 
    class: className = '', 
    external = false, 
    children 
  }: CustomLinkProps = $props();

  // Determine if link is external
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:');
  
  // Add external link attributes
  const externalProps = isExternal ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};
</script>

{#if isExternal}
  <a 
    {href} 
    class="text-primary-600 hover:text-primary-700 transition-colors duration-200 {className}"
    {...externalProps}
  >
    {@render children?.()}
  </a>
{:else}
  <a 
    {href} 
    class="text-primary-600 hover:text-primary-700 transition-colors duration-200 {className}"
  >
    {@render children?.()}
  </a>
{/if}
