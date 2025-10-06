<script lang="ts">
  import type { ParagraphProps } from '$lib/types';

  let { 
    size = 'default',
    class: className = '', 
    children,
    color = 'text',
    weight = 'body'
  }: ParagraphProps = $props();

  const getParagraphClasses = (): string => {
    const baseClasses = 'font-body text-text text-body';
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

<p class={getParagraphClasses()}>
  {@render children?.()}
</p>
