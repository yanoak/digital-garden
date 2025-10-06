<script lang="ts">
  import type { GridProps } from '$lib/types';

  let { 
    cols = 3,
    gap = 'lg',
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
      12: 'grid-cols-12',
      'auto-fit': 'grid-cols-[repeat(auto-fit,minmax(320px,1fr))]'
    };
    const gapClasses = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
      '2xl': 'gap-12'
    };
    
    return `${baseClasses} ${colsClasses[cols]} ${gapClasses[gap]} ${className}`;
  };
</script>

<div class={getGridClasses()}>
  {@render children?.()}
</div>
