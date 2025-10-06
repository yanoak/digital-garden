<script lang="ts">
  import type { LabelProps } from '$lib/types';

  let { 
    size = 'default',
    class: className = '', 
    children,
    color = 'text-muted',
    weight = 'label'
  }: LabelProps = $props();

  const getLabelClasses = (): string => {
    const baseClasses = 'font-heading text-text-muted text-label font-label uppercase';
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

<span class={getLabelClasses()}>
  {@render children?.()}
</span>
