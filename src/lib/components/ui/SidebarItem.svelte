<script lang="ts">
  import type { SidebarItemProps } from '$lib/types';
  import Link from './Link.svelte';

  let { 
    class: className = '', 
    children,
    href,
    active = false,
    onClick
  }: SidebarItemProps = $props();

  const getItemClasses = (): string => {
    const baseClasses = 'block py-3.5 px-6 border-b border-zen border-background transition-all duration-300 hover:text-primary hover:pl-9 font-body text-base';
    const activeClasses = active ? 'text-primary pl-9' : 'text-accent';
    
    return `${baseClasses} ${activeClasses} ${className}`;
  };
</script>

{#if href}
  <Link {href} class={getItemClasses()}>
    {@render children?.()}
  </Link>
{:else}
  <button
    class={getItemClasses()}
    onclick={onClick}
    type="button"
  >
    {@render children?.()}
  </button>
{/if}
