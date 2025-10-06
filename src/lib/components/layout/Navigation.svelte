<script lang="ts">
  import type { NavItem } from '$lib/types';
  import CustomLink from '$lib/components/ui/CustomLink.svelte';
  import CustomImage from '$lib/components/ui/CustomImage.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import doorIcon from '$lib/assets/door_icon.png';
  import doorIconOpen from '$lib/assets/door_icon_open_black.png';

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

<header class="bg-white border-b border-t-0 border-l-0 border-r-0 border-zen border-border py-4 {className}">
  <Container>
    <nav class="flex items-center justify-between">
      <CustomLink href="/" class="flex items-center group">
        <div class="relative h-12 w-12">
          <CustomImage 
            src={doorIcon} 
            alt="Digital Garden" 
            width={24} 
            height={24}
            class="h-12 w-12 object-contain transition-opacity duration-300 group-hover:opacity-0"
          />
          <CustomImage 
            src={doorIconOpen} 
            alt="Digital Garden" 
            width={24} 
            height={24}
            class="absolute top-0 left-0 h-12 w-12 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </CustomLink>
      
      <div class="hidden md:flex items-center space-x-10">
        {#each navItems as item}
          <CustomLink 
            href={item.href} 
            class="text-base font-heading text-accent hover:text-text-hover transition-colors duration-300"
          >
            {item.label}
          </CustomLink>
        {/each}
      </div>
      
      <!-- Mobile menu button -->
      <button 
        class="md:hidden p-2 text-accent hover:text-text-hover transition-colors duration-300"
        aria-label="Toggle mobile menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>
  </Container>
</header>
