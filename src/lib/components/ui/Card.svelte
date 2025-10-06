<script lang="ts">
  import type { CardProps } from '$lib/types';

  let { 
    hover = true,
    padding = 'lg',
    class: className = '', 
    children 
  }: CardProps = $props();

  const getCardClasses = (): string => {
    const baseClasses = 'bg-white border border-zen border-border transition-all duration-300';
    const hoverClasses = hover ? 'hover:border-primary' : '';
    const paddingClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-10',
      xl: 'p-12'
    };
    
    return `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
  };
</script>

<div class={getCardClasses()}>
  {@render children?.()}
</div>
