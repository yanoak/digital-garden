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
      ? 'block bg-background p-4 overflow-x-auto border-zen border-border' 
      : 'inline bg-background px-1 py-0.5 text-sm';
    
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
