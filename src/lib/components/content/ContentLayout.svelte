<script lang="ts">
	import ContentHeader from './ContentHeader.svelte';
	import ContentFooter from './ContentFooter.svelte';
	import { Container, Section } from '$lib/components';
	import type { ContentMetadata } from '$lib/types';

	interface Props {
		metadata: ContentMetadata;
		backHref: string;
		backText?: string;
		relatedContent?: Array<{
			title: string;
			href: string;
			meta?: string;
		}>;
		children: any;
	}

	let { 
		metadata, 
		backHref, 
		backText, 
		relatedContent, 
		children 
	}: Props = $props();

</script>

<div class="content-layout" >
	<!-- Content Header -->
	<ContentHeader {metadata} />

	<!-- Article Content -->
	<Section class="content-article-section">
		<Container maxWidth="content" class="content-article-container">
			<article class="content-article">
				{@render children?.()}
			</article>
		</Container>
	</Section>

	<!-- Content Footer -->
	<ContentFooter 
		{backHref} 
		{backText} 
		{relatedContent}
	/>
</div>

<style>
	.content-layout {
		@apply min-h-screen;
	}

	.content-article-section {
		@apply bg-white;
	}

	.content-article-container {
		@apply px-2xl py-20;
	}

	.content-article {
		@apply max-w-none prose prose-lg;
	}
</style>
