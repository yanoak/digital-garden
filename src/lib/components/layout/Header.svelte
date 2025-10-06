<script lang="ts">
  import type { HeaderProps } from '$lib/types';

  let { 
    class: className = '', 
    children 
  }: HeaderProps = $props();

  const getHeaderClasses = (): string => {
    const baseClasses = 'w-full bg-white border-b border-zen border-border py-8 px-12';
    
    return `${baseClasses} ${className}`;
  };
</script>

<header class={getHeaderClasses()}>
  {@render children?.()}
</header>
