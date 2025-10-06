<script lang="ts">
  import type { SectionProps } from '$lib/types';

  let { 
    padding = 'lg',
    background = 'background',
    class: className = '', 
    children 
  }: SectionProps = $props();

  const getSectionClasses = (): string => {
    const baseClasses = 'w-full';
    const paddingClasses = {
      none: '',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-20',
      xl: 'py-24',
      hero: 'py-100'
    };
    const backgroundClasses = {
      white: 'bg-white',
      background: 'bg-background',
      transparent: 'bg-transparent',
      gradient: 'zen-gradient'
    };
    
    return `${baseClasses} ${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`;
  };
</script>

<section class={getSectionClasses()}>
  {@render children?.()}
</section>
