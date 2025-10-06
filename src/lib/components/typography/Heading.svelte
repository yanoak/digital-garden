<script lang="ts">
  import type { TypographyProps } from '$lib/types';

  interface HeadingProps extends TypographyProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  }

  let { 
    level = 2,
    class: className = '', 
    children 
  }: HeadingProps = $props();

  const getHeadingClasses = (): string => {
    const baseClasses = 'font-semibold tracking-tight';
    const levelClasses = {
      1: 'text-4xl text-primary-600',
      2: 'text-3xl text-primary-500',
      3: 'text-2xl text-primary-600',
      4: 'text-xl text-secondary-800',
      5: 'text-lg text-secondary-800',
      6: 'text-base text-secondary-800'
    };
    
    return `${baseClasses} ${levelClasses[level]} ${className}`;
  };
</script>

{#if level === 1}
  <h1 class={getHeadingClasses()}>{@render children?.()}</h1>
{:else if level === 2}
  <h2 class={getHeadingClasses()}>{@render children?.()}</h2>
{:else if level === 3}
  <h3 class={getHeadingClasses()}>{@render children?.()}</h3>
{:else if level === 4}
  <h4 class={getHeadingClasses()}>{@render children?.()}</h4>
{:else if level === 5}
  <h5 class={getHeadingClasses()}>{@render children?.()}</h5>
{:else if level === 6}
  <h6 class={getHeadingClasses()}>{@render children?.()}</h6>
{/if}
