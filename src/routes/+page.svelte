<script lang="ts">
	import { Container, Section, Grid, Title, Paragraph, Heading, Link, Button, Card, Tag, Label } from '$lib/components';
</script>

<!-- Hero Section with Zen Gradient -->
<section class="zen-gradient py-30">
	<Container>
		<div class="text-left">
			<Title class="mb-8">Welcome to My Digital Garden</Title>
			<Paragraph class="max-w-3xl mb-12 text-accent">
				This is my personal digital garden where I cultivate ideas, thoughts, and projects. 
				Think of it as a public notebook where ideas grow and evolve over time.
			</Paragraph>
			<div class="flex justify-center space-x-4">
				<Button variant="outline" size="lg" href="/essays">
					Explore Essays
				</Button>
				<Button variant="filled" size="lg" href="/projects">
					View Projects
				</Button>
			</div>
		</div>
	</Container>
</section>

<!-- Main Content Section -->
<Section padding="xl" background="background">
	<Container>
		<div class="text-left mb-16">
			<Heading class="mb-6">Content Categories</Heading>
			<Paragraph class="max-w-2xl text-accent">
				Explore different types of content organized by category
			</Paragraph>
		</div>

		<Grid cols={4} gap="lg">
			<Card hover={true} padding="lg">
				<div class="text-center">
					<div class="text-4xl mb-6">📝</div>
					<Heading level={3} class="mb-4">Essays</Heading>
					<Paragraph class="mb-8 text-accent">
						Long-form writing on topics that interest me, from technology to philosophy.
					</Paragraph>
					<div class="flex flex-wrap justify-center gap-2 mb-6">
						<Tag variant="outline" size="sm">Technology</Tag>
						<Tag variant="outline" size="sm">Philosophy</Tag>
						<Tag variant="outline" size="sm">Design</Tag>
					</div>
					<Button variant="outline" href="/essays">
						Explore Essays
					</Button>
				</div>
			</Card>

			<Card hover={true} padding="lg">
				<div class="text-center">
					<div class="text-4xl mb-6">📚</div>
					<Heading level={3} class="mb-4">Reading</Heading>
					<Paragraph class="mb-8 text-accent">
						My thoughts and takeaways from books and articles I've read.
					</Paragraph>
					<div class="flex flex-wrap justify-center gap-2 mb-6">
						<Tag variant="outline" size="sm">Books</Tag>
						<Tag variant="outline" size="sm">Articles</Tag>
						<Tag variant="outline" size="sm">Reviews</Tag>
					</div>
					<Button variant="outline" href="/reading">
						Read Reviews
					</Button>
				</div>
			</Card>

			<Card hover={true} padding="lg">
				<div class="text-center">
					<div class="text-4xl mb-6">📓</div>
					<Heading level={3} class="mb-4">Notes</Heading>
					<Paragraph class="mb-8 text-accent">
						Quick thoughts, learnings, and observations on various topics.
					</Paragraph>
					<div class="flex flex-wrap justify-center gap-2 mb-6">
						<Tag variant="outline" size="sm">Quick Notes</Tag>
						<Tag variant="outline" size="sm">Learnings</Tag>
						<Tag variant="outline" size="sm">Observations</Tag>
					</div>
					<Button variant="outline" href="/notes">
						Browse Notes
					</Button>
				</div>
			</Card>

			<Card hover={true} padding="lg">
				<div class="text-center">
					<div class="text-4xl mb-6">🚀</div>
					<Heading level={3} class="mb-4">Projects</Heading>
					<Paragraph class="mb-8 text-accent">
						Write-ups about projects I've built and things I'm working on.
					</Paragraph>
					<div class="flex flex-wrap justify-center gap-2 mb-6">
						<Tag variant="outline" size="sm">Web Apps</Tag>
						<Tag variant="outline" size="sm">Open Source</Tag>
						<Tag variant="outline" size="sm">Experiments</Tag>
					</div>
					<Button variant="outline" href="/projects">
						View Projects
					</Button>
				</div>
			</Card>
		</Grid>
	</Container>
</Section>

<!-- Design System Showcase Section -->
<Section padding="xl" background="white">
	<Container>
		<div class="text-left mb-16">
			<Heading class="mb-6">Design System Showcase</Heading>
			<Paragraph class="max-w-2xl mb-12 text-accent">
				This digital garden is built with a custom Classic Zen design system featuring clean lines, generous whitespace, and minimal aesthetics.
			</Paragraph>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Typography Showcase -->
			<Card padding="lg">
				<Label class="mb-4">Typography</Label>
				<Title class="mb-4">Title Component</Title>
				<Heading level={3} class="mb-4">Heading Component</Heading>
				<Paragraph class="mb-4">Body text with proper line height and spacing for optimal readability.</Paragraph>
				<Label>Label Component</Label>
			</Card>

			<!-- Color Palette Showcase -->
			<Card padding="lg">
				<Label class="mb-4">Color Palette</Label>
				<div class="space-y-3">
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-primary border-zen border-border"></div>
						<span class="text-sm">Primary (#04724D)</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-secondary border-zen border-border"></div>
						<span class="text-sm">Secondary (#B8DBD9)</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-accent border-zen border-border"></div>
						<span class="text-sm">Accent (#586F7C)</span>
					</div>
					<div class="flex items-center space-x-3">
						<div class="w-8 h-8 bg-background border-zen border-border"></div>
						<span class="text-sm">Background (#F4F4F9)</span>
					</div>
				</div>
			</Card>

			<!-- Component Variants Showcase -->
			<Card padding="lg">
				<Label class="mb-4">Components</Label>
				<div class="space-y-4">
					<div class="flex space-x-2">
						<Button variant="outline" size="sm">Outline</Button>
						<Button variant="filled" size="sm">Filled</Button>
						<Button variant="ghost" size="sm">Ghost</Button>
					</div>
					<div class="flex flex-wrap gap-2">
						<Tag variant="outline" size="sm">Outline Tag</Tag>
						<Tag variant="filled" size="sm">Filled Tag</Tag>
					</div>
					<div>
						<Link href="#" variant="default">Default Link</Link>
					</div>
					<div>
						<Link href="#" variant="underline">Underlined Link</Link>
					</div>
				</div>
			</Card>
		</div>
	</Container>
</Section>
