<script lang="ts">
	import { Container, Title, Paragraph, Button } from '$lib/components';
</script>

<!-- Hero Section with Zen Gradient -->
<section class="zen-gradient py-30">
	<Container>
		<div class="text-left">
			<Title class="mb-8">
				Hi, I'm Yan.
				<br />
				Data visualisation developer and founder of <a href="https://thibi.co" target="_blank" class="text-muted">Thibi</a>.
				<br />
				Welcome to My Digital Garden.
			</Title>
			<Paragraph class="mb-12 max-w-3xl text-accent">
				This is my personal digital garden where I cultivate ideas, thoughts, and projects. 
				Think of it as a public notebook where ideas grow and evolve over time.
			</Paragraph>
			<div class="flex flex-col items-start space-y-4">
				<Button variant="outline" size="lg" href="/essays" class="w-48 whitespace-nowrap">
					Essays
				</Button>
				<Button variant="outline" size="lg" href="/projects" class="w-48 whitespace-nowrap">
					Projects
				</Button>
				<Button variant="outline" size="lg" href="/reading" class="w-48 whitespace-nowrap">
					Book Reviews
				</Button>
			</div>
		</div>
	</Container>
</section>

