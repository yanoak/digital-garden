<script lang="ts">
  import type { CustomButtonProps } from '$lib/types';
  import CustomLink from './CustomLink.svelte';

  interface CustomButtonPropsExtended extends CustomButtonProps {
    href?: string;
  }

  let { 
    variant = 'primary',
    size = 'md',
    disabled = false,
    class: className = '',
    onClick,
    href,
    children 
  }: CustomButtonPropsExtended = $props();

  // Generate button classes based on variant and size
  const getButtonClasses = (): string => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
      secondary: 'bg-secondary-200 text-secondary-800 hover:bg-secondary-300 focus:ring-secondary-500',
      outline: 'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500'
    };
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
    };
    
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  };
</script>

{#if href}
  <CustomLink {href} class={getButtonClasses()}>
    {@render children?.()}
  </CustomLink>
{:else}
  <button
    class={getButtonClasses()}
    {disabled}
    {onClick}
    type="button"
  >
    {@render children?.()}
  </button>
{/if}
