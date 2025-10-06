<script lang="ts">
  import type { NavItem } from '$lib/types';
  import CustomLink from '$lib/components/ui/CustomLink.svelte';
  import Container from '$lib/components/layout/Container.svelte';

  interface NavigationProps {
    class?: string;
  }

  let { class: className = '' }: NavigationProps = $props();

  const navItems: NavItem[] = [
    { label: 'Essays', href: '/essays' },
    { label: 'Reading', href: '/reading' },
    { label: 'Notes', href: '/notes' },
    { label: 'Projects', href: '/projects' }
  ];
</script>

<header class="bg-white border-b border-secondary-200 shadow-sm {className}">
  <Container>
    <nav class="flex items-center justify-between py-4">
      <CustomLink href="/" class="text-2xl font-bold text-primary-600 hover:text-primary-700">
        🌱 Digital Garden
      </CustomLink>
      
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <CustomLink 
            href={item.href} 
            class="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium"
          >
            {item.label}
          </CustomLink>
        {/each}
      </div>
      
      <!-- Mobile menu button -->
      <button 
        class="md:hidden p-2 text-secondary-700 hover:text-primary-600 transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>
  </Container>
</header>
