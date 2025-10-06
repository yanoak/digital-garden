<script lang="ts">
  import type { ContainerProps } from '$lib/types';

  interface ContainerPropsExtended extends ContainerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    center?: boolean;
  }

  let { 
    size = 'lg',
    center = true,
    class: className = '', 
    children 
  }: ContainerPropsExtended = $props();

  const getContainerClasses = (): string => {
    const baseClasses = 'w-full';
    const sizeClasses = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full'
    };
    const centerClasses = center ? 'mx-auto' : '';
    
    return `${baseClasses} ${sizeClasses[size]} ${centerClasses} ${className}`;
  };
</script>

<div class={getContainerClasses()}>
  {@render children?.()}
</div>
