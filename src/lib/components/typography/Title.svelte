<script lang="ts">
  import type { TitleProps } from '$lib/types';

  let { 
    class: className = '', 
    children,
    size = 'default',
    color = 'text',
    weight = 'heading-bold'
  }: TitleProps = $props();

  const getTitleClasses = (): string => {
    const baseClasses = 'font-heading text-text text-title';
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
    
    const weightClasses = {
      'heading': 'font-heading',
      'heading-bold': 'font-heading-bold',
      'heading-black': 'font-heading-black',
      'body': 'font-body',
      'body-medium': 'font-body-medium',
      'body-bold': 'font-body-bold',
      'label': 'font-label'
    };
    
    return `${baseClasses} ${colorClasses[color]} ${weightClasses[weight]} ${className}`;
  };
</script>

<h1 class={getTitleClasses()}>
  {@render children?.()}
</h1>
