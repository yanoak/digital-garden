<script lang="ts">
	import { Container, Section, Grid, Title, Paragraph, Heading, CustomLink, CustomButton } from '$lib/components';
</script>

<Section padding="xl" background="white">
	<Container>
		<div class="text-center mb-12">
			<Title class="mb-6">Welcome to My Digital Garden 🌱</Title>
			<Paragraph size="lg" class="max-w-3xl mx-auto">
				This is my personal digital garden where I cultivate ideas, thoughts, and projects. 
				Think of it as a public notebook where ideas grow and evolve over time.
			</Paragraph>
		</div>

		<Grid cols={4} gap="lg">
			<div class="card hover:shadow-md transition-all duration-200 hover:-translate-y-1">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">📝</div>
					<Heading level={3} class="mb-3">Essays</Heading>
					<Paragraph class="mb-6" muted>
						Long-form writing on topics that interest me, from technology to philosophy.
					</Paragraph>
					<CustomButton variant="primary" href="/essays">
						Explore Essays
					</CustomButton>
				</div>
			</div>

			<div class="card hover:shadow-md transition-all duration-200 hover:-translate-y-1">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">📚</div>
					<Heading level={3} class="mb-3">Reading</Heading>
					<Paragraph class="mb-6" muted>
						My thoughts and takeaways from books and articles I've read.
					</Paragraph>
					<CustomButton variant="primary" href="/reading">
						Read Reviews
					</CustomButton>
				</div>
			</div>

			<div class="card hover:shadow-md transition-all duration-200 hover:-translate-y-1">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">📓</div>
					<Heading level={3} class="mb-3">Notes</Heading>
					<Paragraph class="mb-6" muted>
						Quick thoughts, learnings, and observations on various topics.
					</Paragraph>
					<CustomButton variant="primary" href="/notes">
						Browse Notes
					</CustomButton>
				</div>
			</div>

			<div class="card hover:shadow-md transition-all duration-200 hover:-translate-y-1">
				<div class="card-body text-center">
					<div class="text-4xl mb-4">🚀</div>
					<Heading level={3} class="mb-3">Projects</Heading>
					<Paragraph class="mb-6" muted>
						Write-ups about projects I've built and things I'm working on.
					</Paragraph>
					<CustomButton variant="primary" href="/projects">
						View Projects
					</CustomButton>
				</div>
			</div>
		</Grid>
	</Container>
</Section>
