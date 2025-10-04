<h1>Welcome to My Digital Garden 🌱</h1>

<p>
	This is my personal digital garden where I cultivate ideas, thoughts, and projects. Think of it as 
	a public notebook where ideas grow and evolve over time.
</p>

<div class="sections">
	<section class="card">
		<h2>📝 Essays</h2>
		<p>Long-form writing on topics that interest me, from technology to philosophy.</p>
		<a href="/essays" class="button">Explore Essays</a>
	</section>

	<section class="card">
		<h2>📚 Book Reviews</h2>
		<p>My thoughts and takeaways from books I've read.</p>
		<a href="/book-reviews" class="button">Read Reviews</a>
	</section>

	<section class="card">
		<h2>📓 Notes</h2>
		<p>Quick thoughts, learnings, and observations on various topics.</p>
		<a href="/notes" class="button">Browse Notes</a>
	</section>

	<section class="card">
		<h2>🚀 Projects</h2>
		<p>Write-ups about projects I've built and things I'm working on.</p>
		<a href="/projects" class="button">View Projects</a>
	</section>
</div>

<style>
	.sections {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.card {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.15);
	}

	.card h2 {
		margin-top: 0;
		font-size: 1.5rem;
	}

	.button {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background: #2d6a4f;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		transition: background 0.2s;
	}

	.button:hover {
		background: #1b4332;
		color: white;
	}
</style>
