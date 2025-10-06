<script lang="ts">
  import type { ButtonProps } from '$lib/types';

  let { 
    variant = 'outline',
    size = 'md',
    disabled = false,
    class: className = '',
    onClick,
    children,
    color = 'primary',
    href,
    external = false
  }: ButtonProps = $props();

  // Determine if link is external
  const isExternal = external || (href && (href.startsWith('http') || href.startsWith('mailto:')));
  
  // Add external link attributes
  const externalProps = isExternal ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  const getButtonClasses = (): string => {
    const baseClasses = 'inline-flex items-center justify-center font-heading font-heading-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-none';
    
    const variantClasses = {
      default: 'bg-transparent border border-zen border-primary text-primary hover:bg-primary hover:text-white hover:border-primary',
      outline: 'bg-transparent border border-zen border-primary text-primary hover:bg-primary hover:text-white hover:border-primary',
      ghost: 'bg-transparent text-accent hover:bg-accent hover:text-white',
      filled: 'bg-primary text-white border border-zen border-primary hover:bg-accent hover:text-white'
    };
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-12.5 py-3.5 text-base',
      lg: 'px-16 py-4 text-lg',
      xl: 'px-20 py-5 text-xl'
    };
    
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  };
</script>

{#if href}
  <a
    {href}
    class={getButtonClasses()}
    {...externalProps}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    class={getButtonClasses()}
    {disabled}
    onclick={onClick}
    type="button"
  >
    {@render children?.()}
  </button>
{/if}
