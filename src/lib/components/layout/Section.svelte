<script lang="ts">
  import type { SectionProps } from '$lib/types';

  interface SectionPropsExtended extends SectionProps {
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    background?: 'white' | 'gray' | 'primary' | 'transparent';
  }

  let { 
    padding = 'md',
    background = 'white',
    class: className = '', 
    children 
  }: SectionPropsExtended = $props();

  const getSectionClasses = (): string => {
    const baseClasses = 'w-full';
    const paddingClasses = {
      none: '',
      sm: 'py-4',
      md: 'py-8',
      lg: 'py-12',
      xl: 'py-16'
    };
    const backgroundClasses = {
      white: 'bg-white',
      gray: 'bg-secondary-50',
      primary: 'bg-primary-50',
      transparent: 'bg-transparent'
    };
    
    return `${baseClasses} ${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`;
  };
</script>

<section class={getSectionClasses()}>
  {@render children?.()}
</section>
