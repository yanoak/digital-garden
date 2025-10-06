# Digital Garden 🌱

A personal digital garden built with SvelteKit where I share essays, book reviews, notes, and project write-ups.

## What's a Digital Garden?

Unlike a traditional blog with reverse-chronological posts, a digital garden is a collection of evolving notes and ideas that grow over time. Content is interconnected, iterative, and embraces learning in public.

## Structure

This digital garden is organized into four main sections:

- **📝 Essays**: Long-form writing on topics from technology to philosophy
- **📚 Book Reviews**: Thoughts and takeaways from books
- **📓 Notes**: Quick thoughts, learnings, and observations
- **🚀 Projects**: Write-ups about projects and things I'm building

## Tech Stack

- **[SvelteKit](https://kit.svelte.dev/)**: Web framework for routing and server-side rendering
- **[mdsvex](https://mdsvex.pngwn.io/)**: Markdown preprocessor for Svelte, allowing you to write content in Markdown
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## Adding Content

### Adding a New Essay

1. Create a new directory in `src/routes/essays/[your-essay-slug]/`
2. Add a `+page.md` file with your content
3. Update `src/routes/essays/+page.svelte` to list your new essay

### Adding Other Content

Follow the same pattern for book reviews, notes, and projects. Each content type has its own directory under `src/routes/`.

### Writing in Markdown

All content pages use Markdown with MDsveX, which means you can:

- Use standard Markdown syntax
- Include Svelte components (if needed)
- Add frontmatter for metadata

Example:

```markdown
# Your Title

Your content here with **bold** and *italic* text.

## Sections

- Lists
- Work great
```

## Project Structure

```
digital-garden/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte          # Shared layout with navigation
│   │   ├── +page.svelte            # Homepage
│   │   ├── essays/
│   │   │   ├── +page.svelte        # Essays listing page
│   │   │   └── [slug]/+page.md     # Individual essay
│   │   ├── book-reviews/
│   │   ├── notes/
│   │   └── projects/
│   ├── lib/                         # Shared components and utilities
│   └── app.html                     # HTML template
├── static/                          # Static assets
├── svelte.config.js                 # SvelteKit configuration
├── vite.config.ts                   # Vite configuration
└── package.json
```

## Deployment

This SvelteKit app can be deployed to various platforms:

- **Vercel**: Zero-config deployment
- **Netlify**: Automatic builds from git
- **GitHub Pages**: With adapter-static
- **Any Node.js hosting**: Using adapter-node

See [SvelteKit adapters documentation](https://kit.svelte.dev/docs/adapters) for more details.

## License

This project structure is open source. Feel free to use it as a template for your own digital garden!
