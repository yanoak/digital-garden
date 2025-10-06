<script lang="ts">
  import type { HeadingProps } from '$lib/types';

  interface HeadingComponentProps extends HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  }

  let { 
    level = 2,
    class: className = '', 
    children,
    size = 'default',
    color = 'text',
    weight = 'heading-bold'
  }: HeadingComponentProps = $props();

  const getHeadingClasses = (): string => {
    const baseClasses = 'font-heading text-text text-heading font-heading-bold';
    const colorClasses = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      text: 'text-text',
      'text-muted': 'text-text-muted',
      'text-hover': 'text-text-hover',
      background: 'text-background',
      white: 'text-white',
      border: 'text-border',
      'border-hover': 'text-border-hover'
    };
    
    return `${baseClasses} ${colorClasses[color]} ${className}`;
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
