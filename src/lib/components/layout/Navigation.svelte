<script lang="ts">
  import type { NavItem } from '$lib/types';
  import CustomLink from '$lib/components/ui/CustomLink.svelte';
  import CustomImage from '$lib/components/ui/CustomImage.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import doorIcon from '$lib/assets/door_icon.png';
  import doorIconOpen from '$lib/assets/door_icon_open_black.png';
  import { page } from '$app/stores';

  interface NavigationProps {
    class?: string;
  }

  let { class: className = '' }: NavigationProps = $props();

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Essays', href: '/essays' },
    { label: 'Reading', href: '/reading' },
    { label: 'Notes', href: '/notes' },
    { label: 'Projects', href: '/projects' }
  ];

  let isMobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }

  // Function to check if a navigation item is active
  function isActive(href: string): boolean {
    const currentPath = $page.url.pathname;
    
    // Handle exact matches for root pages
    if (href === '/' && currentPath === '/') {
      return true;
    }
    
    // Handle section pages (e.g., /essays, /reading, etc.)
    if (href !== '/' && currentPath.startsWith(href)) {
      return true;
    }
    
    return false;
  }

  // Function to get navigation item classes
  function getNavItemClasses(href: string): string {
    const baseClasses = 'text-base transition-colors duration-300 font-heading';
    const activeClasses = isActive(href) 
      ? 'text-primary font-semibold' 
      : 'text-accent hover:text-text-hover';
    
    return `${baseClasses} ${activeClasses}`;
  }

  // Function to get mobile navigation item classes
  function getMobileNavItemClasses(href: string): string {
    const baseClasses = 'block px-3 py-2 text-base rounded-md transition-colors duration-300 font-heading';
    const activeClasses = isActive(href)
      ? 'text-primary font-semibold bg-background'
      : 'text-accent hover:text-text-hover hover:bg-background';
    
    return `${baseClasses} ${activeClasses}`;
  }
</script>

<header class="bg-white border-b border-t-0 border-l-0 border-r-0 border-zen border-border py-4 {className}">
  <Container>
    <nav class="flex justify-between items-center">
      <CustomLink href="/" class="flex items-center group">
        <div class="relative w-12 h-12">
          <CustomImage 
            src={doorIcon} 
            alt="Digital Garden" 
            width={24} 
            height={24}
            class="object-contain w-12 h-12 transition-opacity duration-300 group-hover:opacity-0"
          />
          <CustomImage 
            src={doorIconOpen} 
            alt="Digital Garden" 
            width={24} 
            height={24}
            class="object-contain absolute top-0 left-0 w-12 h-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </CustomLink>
      
      <div class="hidden items-center space-x-10 md:flex">
        {#each navItems as item}
          <CustomLink 
            href={item.href} 
            class={getNavItemClasses(item.href)}
          >
            {item.label}
          </CustomLink>
        {/each}
      </div>
      
      <!-- Mobile menu button -->
      <button 
        class="p-2 transition-colors duration-300 md:hidden text-accent hover:text-text-hover"
        aria-label="Toggle mobile menu"
        onclick={toggleMobileMenu}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          {/if}
        </svg>
      </button>
    </nav>
    
    <!-- Mobile menu dropdown -->
    {#if isMobileMenuOpen}
      <div class="bg-white border-t md:hidden border-zen border-border">
        <div class="px-2 pt-2 pb-3 space-y-1">
          {#each navItems as item}
            <a 
              href={item.href} 
              class={getMobileNavItemClasses(item.href)}
              onclick={closeMobileMenu}
            >
              {item.label}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </Container>
</header>
