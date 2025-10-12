<script lang="ts">
	import { Link, Container, Section, Heading, Paragraph } from '$lib/components';
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
<Section class="content-footer">
	<Container maxWidth="content" class="content-footer-container">
		<!-- Back Link -->
		<Link 
			href={backHref}
			class="content-footer-back-link"
		>
			<svg 
				class="content-footer-back-icon" 
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
			<div class="content-footer-related">
				<Heading level={3} class="content-footer-related-title">
					Related Content
				</Heading>
				
				<div class="content-footer-related-list">
					{#each relatedContent as item}
						<div class="content-footer-related-item">
							<Link 
								href={item.href}
								class="content-footer-related-link"
							>
								{item.title}
							</Link>
							{#if item.meta}
								<Paragraph class="content-footer-related-meta">
									{item.meta}
								</Paragraph>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</Container>
</Section>

<style>
	.content-footer {
		@apply bg-white border-t border-border py-15 px-2xl;
	}

	.content-footer-container {
		@apply mx-auto;
	}

	.content-footer-back-link {
		@apply inline-flex items-center gap-2.5 text-accent hover:text-text-hover transition-colors duration-300 mb-10;
	}

	.content-footer-back-icon {
		@apply w-4 h-4;
	}

	.content-footer-related {
		@apply mt-10;
	}

	.content-footer-related-title {
		@apply text-content-related font-heading font-semibold tracking-wider uppercase text-text mb-6;
	}

	.content-footer-related-list {
		@apply space-y-5;
	}

	.content-footer-related-item {
		@apply py-5 border-b border-background hover:pl-4 transition-all duration-300;
	}

	.content-footer-related-link {
		@apply block text-content-related font-body font-medium text-text hover:text-text-hover transition-colors duration-300 mb-2;
	}

	.content-footer-related-meta {
		@apply text-content-related-meta font-heading text-accent;
	}
</style>
