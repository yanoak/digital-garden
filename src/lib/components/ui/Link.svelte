<script lang="ts">
  import type { LinkProps } from '$lib/types';

  let { 
    href, 
    class: className = '', 
    external = false, 
    children,
    variant = 'default',
    color = 'accent'
  }: LinkProps = $props();

  // Determine if link is external
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:');
  
  // Add external link attributes
  const externalProps = isExternal ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  const getLinkClasses = (): string => {
    const baseClasses = 'transition-colors duration-300';
    
    const variantClasses = {
      default: 'text-accent hover:text-primary',
      underline: 'text-accent hover:text-primary underline hover:no-underline',
      button: 'inline-flex items-center justify-center px-12 py-3.5 bg-transparent border border-zen border-primary text-primary hover:bg-primary hover:text-white hover:border-primary font-heading font-heading-bold'
    };
    
    const colorClasses = {
      primary: 'text-primary hover:text-primary',
      secondary: 'text-secondary hover:text-primary',
      accent: 'text-accent hover:text-primary',
      text: 'text-text hover:text-primary',
      'text-muted': 'text-text-muted hover:text-primary',
      'text-hover': 'text-primary',
      background: 'text-background hover:text-primary',
      white: 'text-white hover:text-primary',
      border: 'text-border hover:text-primary',
      'border-hover': 'text-primary'
    };
    
    return `${baseClasses} ${variantClasses[variant]} ${colorClasses[color]} ${className}`;
  };
</script>

{#if isExternal}
  <a 
    {href} 
    class={getLinkClasses()}
    {...externalProps}
  >
    {@render children?.()}
  </a>
{:else}
  <a 
    {href} 
    class={getLinkClasses()}
  >
    {@render children?.()}
  </a>
{/if}
