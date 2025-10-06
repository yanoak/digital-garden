<script lang="ts">
  import type { TypographyProps } from '$lib/types';

  let { 
    class: className = '', 
    children 
  }: TypographyProps = $props();
</script>

<h1 class="text-4xl font-bold text-primary-600 tracking-tight {className}">
  {@render children?.()}
</h1>
