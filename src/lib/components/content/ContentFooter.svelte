<script lang="ts">
	import { Link } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	interface Props {
		backHref: string;
		backText?: string;
		relatedContent?: Array<{
			title: string;
			href: string;
			meta?: string;
		}>;
	}

	let { 
		backHref, 
		backText = 'Back to all content',
		relatedContent = []
	}: Props = $props();
</script>

<!-- Content Footer -->
<footer class="bg-white border-t border-border py-15 px-2xl">
	<div class="max-w-content mx-auto">
		<!-- Back Link -->
		<Link 
			href={backHref}
			class="inline-flex items-center gap-2.5 text-accent hover:text-text-hover transition-colors duration-300 mb-10"
		>
			<svg 
				class="w-4 h-4" 
				fill="none" 
				stroke="currentColor" 
				viewBox="0 0 24 24"
			>
				<path 
					stroke-linecap="round" 
					stroke-linejoin="round" 
					stroke-width="2" 
					d="M15 19l-7-7 7-7"
				/>
			</svg>
			{backText}
		</Link>

		<!-- Related Content -->
		{#if relatedContent.length > 0}
			<div class="mt-10">
				<h3 class="text-content-related font-heading font-semibold tracking-wider uppercase text-text mb-6">
					Related Content
				</h3>
				
				<div class="space-y-5">
					{#each relatedContent as item}
						<div class="py-5 border-b border-background hover:pl-4 transition-all duration-300">
							<Link 
								href={item.href}
								class="block text-content-related font-body font-medium text-text hover:text-text-hover transition-colors duration-300 mb-2"
							>
								{item.title}
							</Link>
							{#if item.meta}
								<p class="text-content-related-meta font-heading text-accent">
									{item.meta}
								</p>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</footer>
