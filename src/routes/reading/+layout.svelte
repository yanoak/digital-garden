<script lang="ts">
	// This layout will be used for all reading pages
	// Individual content pages will use ContentLayout, landing pages will use their own layout
	let { children }: { children: any } = $props();
</script>

{@render children?.()}
