<script lang="ts">
  import type { TypographyProps } from '$lib/types';

  interface ParagraphProps extends TypographyProps {
    size?: 'sm' | 'md' | 'lg';
    muted?: boolean;
  }

  let { 
    size = 'md',
    muted = false,
    class: className = '', 
    children 
  }: ParagraphProps = $props();

  const getParagraphClasses = (): string => {
    const baseClasses = 'leading-relaxed';
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    const colorClasses = muted ? 'text-secondary-600' : 'text-secondary-700';
    
    return `${baseClasses} ${sizeClasses[size]} ${colorClasses} ${className}`;
  };
</script>

<p class={getParagraphClasses()}>
  {@render children?.()}
</p>
