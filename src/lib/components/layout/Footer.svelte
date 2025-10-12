<script lang="ts">
  import Container from '$lib/components/layout/Container.svelte';
  import Paragraph from '$lib/components/typography/Paragraph.svelte';

  interface FooterProps {
    class?: string;
  }

  let { class: className = '' }: FooterProps = $props();
</script>

<footer class="bg-white border-t border-secondary-200 {className}">
  <Container>
    <div class="py-8 text-center">
      <Paragraph class="text-secondary-500">
        © 2025 Yan Naung Oak.
      </Paragraph>
    </div>
  </Container>
</footer>
