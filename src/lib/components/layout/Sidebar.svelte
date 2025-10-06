<script lang="ts">
  import type { SidebarProps } from '$lib/types';

  let { 
    position = 'left',
    class: className = '', 
    children 
  }: SidebarProps = $props();

  const getSidebarClasses = (): string => {
    const baseClasses = 'w-64 bg-white min-h-screen px-5 py-8';
    const positionClasses = {
      left: 'border-r border-zen border-border',
      right: 'border-l border-zen border-border'
    };
    
    return `${baseClasses} ${positionClasses[position]} ${className}`;
  };
</script>

<aside class={getSidebarClasses()}>
  {@render children?.()}
</aside>
