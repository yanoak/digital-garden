<script lang="ts">
  import type { TagProps } from '$lib/types';

  let { 
    variant = 'outline',
    size = 'md',
    color = 'text-muted',
    class: className = '', 
    children 
  }: TagProps = $props();

  const getTagClasses = (): string => {
    const baseClasses = 'inline-flex items-center font-heading text-small transition-all duration-300 mr-2';
    
    const variantClasses = {
      default: 'bg-transparent border border-zen border-border',
      outline: 'bg-transparent border border-zen border-border',
      filled: 'bg-background border-0'
    };
    
    const sizeClasses = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3.5 py-1.5 text-small',
      lg: 'px-4 py-2 text-base'
    };
    
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
    
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${colorClasses[color]} ${className}`;
  };
</script>

<span class={getTagClasses()}>
  {@render children?.()}
</span>
