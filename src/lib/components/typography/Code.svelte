<script lang="ts">
  import type { TypographyProps } from '$lib/types';

  interface CodeProps extends TypographyProps {
    block?: boolean;
    language?: string;
  }

  let { 
    block = false,
    language,
    class: className = '', 
    children 
  }: CodeProps = $props();

  const getCodeClasses = (): string => {
    const baseClasses = 'font-mono';
    const blockClasses = block 
      ? 'block bg-secondary-100 p-4 rounded-lg overflow-x-auto' 
      : 'inline bg-secondary-100 px-1 py-0.5 rounded text-sm';
    
    return `${baseClasses} ${blockClasses} ${className}`;
  };
</script>

{#if block}
  <pre class={getCodeClasses()}>
    {#if language}
      <code class="language-{language}">{@render children?.()}</code>
    {:else}
      <code>{@render children?.()}</code>
    {/if}
  </pre>
{:else}
  <code class={getCodeClasses()}>
    {@render children?.()}
  </code>
{/if}
