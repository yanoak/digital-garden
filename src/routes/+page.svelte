<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Container, Title, Paragraph, Button } from '$lib/components';

	const titles = [
		'Data visualisation developer',
		'Data skills trainer', 
		'Data journalist'
	];

	let currentTitleIndex = 0;
	let displayedText = '';
	let isDeleting = false;
	let timeout: number;

	const typeSpeed = 75; // milliseconds per character
	const deleteSpeed = 75; // milliseconds per character
	const pauseTime = 2000; // pause between phrases

	function typeText() {
		const currentTitle = titles[currentTitleIndex];
		
		if (isDeleting) {
			// Delete characters
			displayedText = currentTitle.substring(0, displayedText.length - 1);
			
			// When done deleting, switch to typing next title
			if (displayedText === '') {
				isDeleting = false;
				currentTitleIndex = (currentTitleIndex + 1) % titles.length;
				timeout = setTimeout(typeText, pauseTime);
			} else {
				timeout = setTimeout(typeText, deleteSpeed);
			}
		} else {
			// Type characters
			displayedText = currentTitle.substring(0, displayedText.length + 1);
			
			// When done typing, start deleting after pause
			if (displayedText === currentTitle) {
				timeout = setTimeout(() => {
					isDeleting = true;
					typeText();
				}, pauseTime);
			} else {
				timeout = setTimeout(typeText, typeSpeed);
			}
		}
	}

	onMount(() => {
		// Start with first title
		displayedText = titles[0];
		timeout = setTimeout(() => {
			isDeleting = true;
			typeText();
		}, pauseTime);
	});

	onDestroy(() => {
		if (timeout) {
			clearTimeout(timeout);
		}
	});
</script>

<style>
	.cursor {
		animation: blink 1s infinite;
	}
	
	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}
</style>

<!-- Hero Section with Zen Gradient -->
<section class="zen-gradient py-30">
	<Container>
		<div class="text-left">
			<Title class="mb-8">
				Hi, I'm Yan.
				<br />
				<span class="typewriter-text">{displayedText}<span class="cursor">|</span></span> 
				<br />
				and founder of <a href="https://thibi.co" target="_blank" class="text-muted">Thibi</a>.
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

