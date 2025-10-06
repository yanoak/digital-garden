<script lang="ts">
  import type { ContainerProps } from '$lib/types';

  let { 
    maxWidth = 'xl',
    class: className = '', 
    children 
  }: ContainerProps = $props();

  const getContainerClasses = (): string => {
    const baseClasses = 'w-full mx-auto px-12';
    const maxWidthClasses = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-container',
      '2xl': 'max-w-8xl',
      full: 'max-w-full',
      container: 'max-w-container',
      content: 'max-w-content'
    };
    
    return `${baseClasses} ${maxWidthClasses[maxWidth]} ${className}`;
  };
</script>

<div class={getContainerClasses()}>
  {@render children?.()}
</div>
