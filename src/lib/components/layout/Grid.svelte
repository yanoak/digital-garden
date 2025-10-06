<script lang="ts">
  import type { ContainerProps } from '$lib/types';

  interface GridProps extends ContainerProps {
    cols?: 1 | 2 | 3 | 4 | 6 | 12;
    gap?: 'sm' | 'md' | 'lg' | 'xl';
    responsive?: boolean;
  }

  let { 
    cols = 3,
    gap = 'md',
    responsive = true,
    class: className = '', 
    children 
  }: GridProps = $props();

  const getGridClasses = (): string => {
    const baseClasses = 'grid';
    const colsClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      6: 'grid-cols-6',
      12: 'grid-cols-12'
    };
    const gapClasses = {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8'
    };
    const responsiveClasses = responsive 
      ? 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
      : '';
    
    return `${baseClasses} ${colsClasses[cols]} ${gapClasses[gap]} ${responsiveClasses} ${className}`;
  };
</script>

<div class={getGridClasses()}>
  {@render children?.()}
</div>
