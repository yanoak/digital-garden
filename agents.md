# AI Agents Guidelines

This document outlines the rules and guidelines that all agents should follow when working on this digital garden project.

## Project Overview
This is a SvelteKit-based digital garden containing:
- Essays
- Reading (i.e. books and articles I'm reading)
- Notes
- Projects

## General Guidelines
*To be defined based on project requirements*

## Code Style

### TypeScript Guidelines
- **Use TypeScript throughout the entire project** for all files
- **Define proper type definitions** for all functions, components, and data structures
- **Use strict TypeScript configuration** with proper type checking
- **Create custom type definitions** in `/src/lib/types/` directory
- **Export types** through a central `index.ts` file in the types folder
- **Use TypeScript interfaces** for component props and data models
- **Leverage TypeScript's type inference** where appropriate
- **Document complex types** with JSDoc comments

### Styling Guidelines
- **Use Tailwind CSS exclusively** for all styling
- **Define theme in Tailwind config** (`tailwind.config.js`) for:
  - Custom colors, fonts, and spacing
  - Design tokens and CSS variables
  - Component variants and utilities
- **Use global CSS files** for theme-wide styles and base layer definitions
- **Create reusable components** instead of applying Tailwind classes directly to DOM elements
- **Pre-define design tokens** for consistent styling:
  - Typography components (Title, Paragraph, Heading, etc.)
  - Color schemes and palettes
  - Spacing and layout utilities
  - Component variants (sizes, states, themes)
- **Avoid hardcoding** Tailwind classes in templates
- **Centralize styling logic** in component files
- **Use design system approach** with consistent naming conventions

### Component Reusability Guidelines
- **Maximize component reuse** across the entire application
- **Wrap all DOM elements** in pre-defined custom components:
  - Images → `<CustomImage>` component
  - Links → `<CustomLink>` component
  - Buttons → `<CustomButton>` component
  - Form elements → `<CustomInput>`, `<CustomTextarea>`, etc.
  - Layout elements → `<Container>`, `<Section>`, `<Grid>`, etc.
- **Never use raw HTML elements** directly in templates
- **Create component variants** for different use cases rather than duplicating components
- **Maintain consistent component APIs** across similar components
- **Document component props and usage** in component files

### Component Composition Rules
- **NEVER nest Link components** inside Button, Card, or other interactive components
- **Use Button component with href prop** for navigation buttons instead of nested Button+Link
- **Link component is ONLY for inline text links** within paragraphs, descriptions, or other text content
- **Use appropriate component variants** (Button, Card, etc.) with href prop for interactive navigation elements
- **Follow semantic HTML principles** - `<a>` tags for links, `<button>` tags for actions

### Markdown Content Guidelines
- **Use MDsvelte for all markdown content** (essays, book reviews, notes, projects)
- **Leverage MDsvelte's component integration** to maintain consistent styling
- **Apply Tailwind styling through MDsvelte components** rather than inline styles
- **Use frontmatter metadata** for content organization and filtering
- **Maintain consistent markdown structure** across all content types

## File Organization

### Project Structure
- **Follow SvelteKit conventions** for routing and file organization
- **Organize content by type** in dedicated route folders:
  - `/essays/` - Personal essays and long-form content
  - `/reading/` - Book reviews and article summaries
  - `/notes/` - Quick notes and observations
  - `/projects/` - Project documentation and showcases
- **Use consistent naming** for content files (kebab-case for URLs)
- **Group related content** in subdirectories when appropriate

### Component Organization
- **Create components in `/src/lib/components/`** directory
- **Organize by functionality**:
  - `/ui/` - Basic UI components (buttons, inputs, etc.)
  - `/layout/` - Layout components (headers, footers, containers)
  - `/content/` - Content-specific components (essay cards, note previews)
  - `/typography/` - Text and heading components
- **Use descriptive component names** that indicate purpose
- **Co-locate related files** (component + styles + tests)

### Utility Functions
- **Create generalizable utility functions** in `/src/lib/utils/` directory
- **Export all utilities** through a central `index.ts` file in the utils folder
- **Organize utilities by domain** (date, string, validation, etc.)
- **Use TypeScript** for all utility functions with proper type definitions
- **Document utility functions** with JSDoc comments
- **Keep utilities pure** and testable

### Asset Management
- **Store static assets** in `/static/` directory
- **Organize images** by content type or purpose
- **Use consistent naming** for asset files
- **Optimize assets** for web delivery

### Content Structure
- **Use frontmatter** for metadata in all markdown files
- **Maintain consistent frontmatter schema** across content types
- **Include required fields**: title, date, tags, description
- **Use optional fields** for content-specific metadata

## Testing Requirements
*To be defined based on project requirements*

## Documentation Standards
*To be defined based on project requirements*

## Design System

**All visual design, styling, and UI components MUST follow the specifications in `design-system.md`.**

Before implementing any visual elements:
1. Read and reference `design-system.md`
2. Use defined color tokens, typography scales, and spacing values
3. Follow component specifications exactly
4. Never deviate from the design system without explicit approval

### Quick Reference
- Colors: See "Color Palette" section in `design-system.md`
- Typography: See "Typography" section in `design-system.md`
- Components: See "Components" section in `design-system.md`
- Spacing: Use defined spacing scale only

**No custom colors, fonts, or spacing values outside the design system.**

---
*This file should be updated as project requirements evolve.*
