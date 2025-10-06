<script lang="ts">
	import ContentHeader from './ContentHeader.svelte';
	import ContentFooter from './ContentFooter.svelte';
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

<div class="min-h-screen bg-background">
	<!-- Content Header -->
	<ContentHeader {metadata} />

	<!-- Article Content -->
	<article class="bg-white max-w-content mx-auto px-2xl pt-20 pb-30">
		<div class="prose prose-lg max-w-none">
			{@render children?.()}
		</div>
	</article>

	<!-- Content Footer -->
	<ContentFooter 
		{backHref} 
		{backText} 
		{relatedContent}
	/>
</div>
