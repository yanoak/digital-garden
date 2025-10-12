<script lang="ts">
	import { Container, Section, Title, Heading, Paragraph } from '$lib/components';
	import CustomButton from '$lib/components/ui/CustomButton.svelte';
	import CustomLink from '$lib/components/ui/CustomLink.svelte';
</script>

<!-- Hero Section -->
<Section class="hero-gradient">
	<Container>
		<div class="max-w-content">
			<Title>Yan Naung Oak</Title>
			<Paragraph class="mt-6 text-xl leading-relaxed text-accent">
				Data visualisation developer, data trainer, (occasional) data journalist and founder of <CustomLink href="https://site.thibi.co/" external>Thibi</CustomLink>, 
				a small data and design studio based in Southeast Asia.
			</Paragraph>
		</div>
	</Container>
</Section>

<!-- Main Content -->
<Section class="bg-background">
	<Container>
		<div class="max-w-content">
			<div class="p-10 bg-white border-zen border-border">
				<Heading class="mb-6">A bit about me</Heading>
				<Paragraph class="mb-6">
					I've always been a jack of all trades. I studied at a small liberal arts college in America for my undergrad, 
					and majored in Physics and Economics. I then did a masters in economics in Singapore, while developing a passion 
					for technology. After my masters, I got a chance to return to Myanmar, where I'm from, to be part of the nascent 
					tech scene there, which led me to work in data journalism and civic technology in a regional context.
				</Paragraph>


         <Paragraph class="mb-6">
					I was born in Yangon, Myanmar, but spent a good chunk of my life living in Singapore. I am currently based in 
					Chiang Mai, Thailand. From there, I lead a remote team of data analysts, developers, designers and data journalists 
					at <CustomLink href="https://site.thibi.co/" external>Thibi</CustomLink>, helping media and civil society organisations across Southeast Asia use data and technology more effectively 
					in their work.
				</Paragraph>


				<Paragraph class="mb-6">
					I love to write, and tinker, and see connections in seemingly random things. This digital garden is where I 
					cultivate those connections—between data and storytelling, between technology and society, between the Global 
					South and the rest of the world.
				</Paragraph>

				<Heading class="mt-12 mb-6">Here's what I've been up to for the last few years:</Heading>
				
				<div class="space-y-6">
					<div>
						<Heading class="mb-2 text-lg">Founder at <CustomLink href="https://site.thibi.co/" external>Thibi</CustomLink></Heading>
						<Paragraph class="mb-1 text-sm text-accent">2018 - Present</Paragraph>
						<Paragraph class="mb-0">
							Founded <CustomLink href="https://site.thibi.co/" external>Thibi</CustomLink> to work with media and civil society groups across Southeast Asia use data more effectively.
						</Paragraph>
					</div>

					<div>
						<Heading class="mb-2 text-lg">Mentor at School of Data</Heading>
						<Paragraph class="mb-1 text-sm text-accent">2016 - 2017</Paragraph>
						<Paragraph class="mb-0">
							Mentored open data practitioners across the Global South and built a <CustomLink href="https://openjadedata.org/" external>data portal</CustomLink> consolidating data about Myanmar's jade industry.
						</Paragraph>
					</div>

					<div>
						<Heading class="mb-2 text-lg">Civic Tech Lead at Phandeeyar</Heading>
						<Paragraph class="mb-1 text-sm text-accent">2015 - 2016</Paragraph>
						<Paragraph class="mb-0">
							Led civic tech and open data projects at Myanmar's leading tech hub.
						</Paragraph>
					</div>
				</div>

				<Heading class="mt-12 mb-6">Keep in touch:</Heading>

        <Paragraph class="mb-4">
          You can follow me on my <CustomLink href="https://livingwithshoggoths.substack.com/" external>Substack, "Living with Shoggoths",</CustomLink> 
          and on <CustomLink href="https://www.linkedin.com/in/yan-naung-oak/" external>LinkedIn</CustomLink>.
        </Paragraph>

			</div>
		</div>
	</Container>
</Section>
