# Design System Specification

This document defines the complete visual design system for the digital garden, based on the "Classic Zen" minimalist Japanese aesthetic.

## Design Philosophy

### Core Principles
- **Simplicity**: Clean lines, minimal decoration, focus on content
- **Tranquility**: Generous whitespace, subtle transitions, calm color palette
- **Clarity**: Strong hierarchy through typography and spacing, not decoration
- **Precision**: Every element intentional, nothing superfluous
- **Alignment**: Left-aligned content for better readability and natural flow

### Visual Language
- Zero border-radius for content boxes and buttons (sharp, clean corners)
- 100% Rounded corners for small tags
- Subtle 1px borders for definition
- Minimal to no shadows
- Smooth, understated transitions
- Generous breathing room around all elements
- Left-aligned text and content for natural reading flow

---

## Color Palette

### Primary Colors
```
Primary Green:   #04724D  (Dark spring green)
Secondary Blue:  #B8DBD9  (Light blue)
Accent Gray:     #586F7C  (Payne's gray)
```

### Neutrals
```
Background:      #F4F4F9  (Ghost white)
Text:            #0A0A0A  (Night)
White:           #FFFFFF
```

### Usage Guidelines
- **Primary Green (`#04724D`)**: Accent color for interactive elements, borders on hover, category headers
- **Secondary Blue (`#B8DBD9`)**: Subtle borders, dividers, tag backgrounds
- **Accent Gray (`#586F7C`)**: Secondary text, navigation items, muted content
- **Background (`#F4F4F9`)**: Main page background, subtle section backgrounds
- **Text (`#0A0A0A`)**: Primary text, headings
- **White (`#FFFFFF`)**: Card backgrounds, header background, content areas

---

## Typography

### Font Families
- **Headings**: Archivo Narrow (sans-serif)
  - Weights: 400 (regular), 600 (semibold), 700 (bold)
  - Google Fonts: `family=Archivo+Narrow:wght@400;600;700`
  
- **Body**: David Libre (serif)
  - Weights: 400 (regular), 500 (medium), 700 (bold)
  - Google Fonts: `family=David+Libre:wght@400;500;700`

### Font Loading
```css
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;600;700&family=David+Libre:wght@400;500;700&display=swap');
```

### Type Scale

#### Title (Page Headlines)
- Font: Archivo Narrow
- Size: 48-56px
- Weight: 600 (semibold)
- Line Height: 1.4
- Letter Spacing: -1px
- Usage: Hero section headlines, main page titles

#### Heading (Section Titles)
- Font: Archivo Narrow
- Size: 24-32px
- Weight: 600 (semibold)
- Line Height: 1.3
- Usage: Card titles, section headings, content titles

#### Subheading
- Font: Archivo Narrow
- Size: 18-20px
- Weight: 600 (semibold)
- Line Height: 1.4
- Usage: Subsections, content categories

#### Body (Paragraph Text)
- Font: David Libre
- Size: 17-19px
- Weight: 400 (regular)
- Line Height: 1.8
- Usage: Main content, descriptions, article body

#### Label (UI Text)
- Font: Archivo Narrow
- Size: 14-16px
- Weight: 600 (semibold)
- Letter Spacing: 2px
- Text Transform: Uppercase
- Usage: Category labels, navigation sections, metadata

#### Small (Meta Text)
- Font: Archivo Narrow
- Size: 13-14px
- Weight: 400 (regular)
- Letter Spacing: 1px
- Usage: Tags, dates, footnotes

---

## Spacing System

### Spacing Scale
```
xs:   8px    (0.5rem)
sm:   16px   (1rem)
md:   24px   (1.5rem)
lg:   32px   (2rem)
xl:   40px   (2.5rem)
2xl:  50px   (3.125rem)
3xl:  60px   (3.75rem)
4xl:  80px   (5rem)
5xl:  100px  (6.25rem)
```

### Layout Spacing
- **Section Padding**: 80px vertical, 50px horizontal
- **Container Max Width**: 1400px
- **Content Max Width**: 700px (for reading content)
- **Sidebar Width**: 260-280px
- **Grid Gap**: 30-50px
- **Card Padding**: 40px
- **Navigation Item Gap**: 40px

### Vertical Rhythm
- Large sections: 80-100px vertical padding
- Medium sections: 50-60px vertical padding
- Between elements: 30-40px margin
- Tight groupings: 15-20px margin

---

## Components

### Header
**Structure**:
- Background: White (`#FFFFFF`)
- Border Bottom: 1px solid `#B8DBD9`
- Padding: 30px 50px
- Layout: Flex (space-between)

**Logo**:
- Font: Archivo Narrow, 24px, weight 400
- Color: `#0A0A0A`
- Optional: Japanese characters prefix (e.g., "庭園")

**Navigation**:
- Font: Archivo Narrow, 16px, weight 400
- Color: `#586F7C`
- Hover: `#04724D`
- Gap: 40px
- Transition: color 300ms ease

---

### Hero Section
**Background**:
```css
background: linear-gradient(to bottom, #FFFFFF 0%, #F4F4F9 100%);
```

**Structure**:
- Padding: 100-120px vertical, 50px horizontal
- Text Align: Left (default), center only for specific hero sections
- Max Width: 700px (for reading content)

**Elements**:
- Title: See "Title" typography spec
- Subtitle/Description: See "Body" typography spec, color `#586F7C`
- Button: See "Button" component spec

---

### Button
**Primary Style** (Outlined):
- Background: Transparent
- Border: 1px solid `#04724D`
- Color: `#04724D`
- Padding: 14px 50px
- Font: Archivo Narrow, 16px, weight 600
- Border Radius: 0
- Transition: all 300ms ease

**Hover State**:
- Background: `#04724D`
- Color: `#FFFFFF`
- Border: 1px solid `#04724D`

**Variants**:
- Filled: Background `#04724D`, color white, hover: background `#586F7C`
- Ghost: No border, color `#586F7C`, hover: color `#04724D`

---

### Card
**Structure**:
- Background: White (`#FFFFFF`)
- Border: 1px solid `#B8DBD9`
- Border Radius: 0
- Padding: 40px
- Transition: border-color 300ms ease

**Hover State**:
- Border: 1px solid `#04724D`
- No transform or shadow

**Content**:
- Title: Heading component (24-26px), left-aligned
- Description: Paragraph component (17px), left-aligned
- Metadata: Small component (13-14px), left-aligned
- Tags: Tag component, left-aligned

---

### Sidebar
**Structure**:
- Background: White (`#FFFFFF`)
- Border Right: 1px solid `#B8DBD9`
- Padding: 30px 20px
- Width: 260px

**Category Header**:
- Font: Archivo Narrow, 16px, weight 600
- Color: `#0A0A0A`
- Letter Spacing: 2px
- Text Transform: Uppercase
- Margin Bottom: 25px

**Sidebar Items**:
- Padding: 14px 0
- Border Bottom: 1px solid `#F4F4F9`
- Color: `#586F7C`
- Font: David Libre, 16px, weight 400
- Transition: all 300ms ease

**Item Hover**:
- Color: `#04724D`
- Padding Left: 15px

---

### Tag
**Structure**:
- Background: Transparent
- Border: 1px solid `#B8DBD9`
- Border Radius: 0
- Padding: 6px 14px
- Font: Archivo Narrow, 13px, weight 400
- Color: `#586F7C`
- Letter Spacing: 1px
- Margin Right: 8px

**Variant - Filled**:
- Background: `#F4F4F9`
- Border: None
- Color: `#586F7C`

---

### Link
**Default State**:
- Color: `#586F7C`
- Text Decoration: None
- Transition: color 300ms ease

**Hover State**:
- Color: `#04724D`

**Active/Visited**:
- Color: `#586F7C` (same as default)

**Usage Guidelines**:
- **ONLY for inline text links** within paragraphs, descriptions, or other text content
- **NEVER nest Link components** inside Button, Card, or other interactive components
- **Use Button component with href prop** for navigation buttons instead of nested Button+Link
- **Use appropriate component variants** (Button, Card, etc.) with href prop for interactive navigation elements

---

### Grid Layout
**Two Column (Sidebar + Content)**:
```css
display: grid;
grid-template-columns: 260px 1fr;
gap: 50px;
```

**Card Grid**:
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 30px;
```

---

## Component Composition Guidelines

### Link Component Usage
The Link component should **ONLY** be used for inline text links within content. It should never be nested inside other interactive components.

**✅ Correct Usage**:
```svelte
<!-- Inline text links -->
<Paragraph>
  Read more about <Link href="/digital-gardens">digital gardens</Link> 
  and their benefits.
</Paragraph>

<!-- Standalone text links -->
<Link href="/about">About this site</Link>
```

**❌ Incorrect Usage**:
```svelte
<!-- DON'T nest Link inside Button -->
<Button variant="outline">
  <Link href="/essays">Explore Essays</Link>
</Button>

<!-- DON'T nest Link inside Card -->
<Card>
  <Link href="/project">Project Title</Link>
</Card>
```

**✅ Correct Alternatives**:
```svelte
<!-- Use Button with href prop for navigation buttons -->
<Button variant="outline" href="/essays">
  Explore Essays
</Button>

<!-- Use Card with href prop for clickable cards -->
<Card href="/project">
  Project Title
</Card>
```

### Component Hierarchy Rules
1. **Interactive components** (Button, Card, etc.) should handle their own navigation via `href` prop
2. **Link component** is only for inline text within content
3. **Never nest** Link inside other interactive components
4. **Use semantic HTML** - `<a>` tags for links, `<button>` tags for actions

---

## Alignment Guidelines

### Default Alignment
- **Text Content**: Left-aligned for optimal readability
- **Headings**: Left-aligned to maintain visual hierarchy
- **Cards**: Left-aligned content within cards
- **Navigation**: Left-aligned menu items
- **Forms**: Left-aligned labels and inputs

### Exceptions for Center Alignment
- **Hero sections**: Only when specifically designed for impact
- **Call-to-action buttons**: When part of a centered hero section
- **Decorative elements**: Icons, logos, or visual accents
- **Modal dialogs**: Center-aligned for focus

### Rationale
Left alignment provides:
- Better readability for longer text content
- Natural reading flow for Western languages
- Consistent visual rhythm across the interface
- Easier scanning and comprehension
- More professional, content-focused appearance

---

## Layout Patterns

### Page Structure
```
Header (fixed/sticky)
└─ Logo + Navigation

Hero Section (with gradient background)
└─ Title + Description + CTA Buttons

Content Section (with sidebar layout)
├─ Sidebar (left, 260px width)
│  ├─ Category Header ("CATEGORIES")
│  └─ Navigation Items (with hover effects)
└─ Main Content (right, flexible width)
   └─ Card Grid (2+ columns)
```

### Classic Zen Layout Pattern
The layout follows a two-column structure with:
- **Left Sidebar**: Fixed width (260px), white background, right border
- **Main Content**: Flexible width, background color, card-based layout, left-aligned
- **Hero Section**: Full-width gradient background with left-aligned content (center only for specific cases)
- **Header**: Full-width white background with bottom border

### Content Area
- Background: `#F4F4F9`
- Padding: 80px 50px
- Max Width: 1400px
- Margin: 0 auto

---

## Interaction Patterns

### Transitions
**Standard Duration**: 300ms
**Easing**: cubic-bezier(0.4, 0, 0.2, 1)
**Properties to Transition**:
- color
- background-color
- border-color
- padding
- transform (minimal use)

**Tailwind Classes**:
- `transition-all duration-300` for comprehensive transitions
- `transition-colors duration-300` for color-only transitions

### Hover Effects
**Navigation Items**:
- Color change only
- No underline, no background

**Cards**:
- Border color change
- No elevation or shadow

**Buttons**:
- Background and color change
- Maintain border

**Sidebar Items**:
- Color change + subtle padding shift left

### Focus States
- Use same styling as hover
- Add subtle outline for accessibility: `outline: 2px solid #04724D; outline-offset: 2px;`

---

## Responsive Behavior

### Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1400px
```

### Mobile Adaptations (< 768px)
- Sidebar becomes top navigation or hamburger menu
- Grid becomes single column
- Reduce padding: 40px → 30px
- Hero title size: 56px → 36px
- Adjust spacing scale down by ~20%

### Tablet (768px - 1024px)
- Maintain sidebar if space allows, or stack vertically
- Reduce max widths slightly
- Adjust grid to 2 columns max

---

## Accessibility Requirements

### Color Contrast
- Text on white: `#0A0A0A` (21:1 ratio) ✓
- Text on `#F4F4F9`: `#0A0A0A` (19.8:1 ratio) ✓
- Links `#586F7C`: (9.7:1 ratio) ✓
- Primary `#04724D`: (5.8:1 ratio) - use for accents only

### Typography
- Minimum body text: 17px
- Line height minimum: 1.6 (using 1.8)
- Maintain clear hierarchy

### Interactive Elements
- Minimum touch target: 44x44px
- Clear focus indicators
- Keyboard navigation support

---

## Implementation Notes

### Tailwind Configuration
Define all values in `tailwind.config.js`:
- Custom color palette with semantic naming
- Font families with proper fallbacks
- Spacing scale with generous whitespace
- Typography presets with line heights and letter spacing
- Custom border widths (`border-zen: 1px`)
- Transition timing functions (`zen: cubic-bezier(0.4, 0, 0.2, 1)`)
- Custom spacing for hero sections (`py-100: 25rem`)

### Component Library Structure
```
/src/lib/components/
├── typography/
│   ├── Title.svelte
│   ├── Heading.svelte
│   ├── Paragraph.svelte
│   ├── Label.svelte
│   └── Code.svelte
├── ui/
│   ├── Button.svelte
│   ├── Card.svelte
│   ├── Tag.svelte
│   ├── Link.svelte
│   ├── SidebarItem.svelte
│   ├── CustomImage.svelte (legacy)
│   ├── CustomLink.svelte (legacy)
│   └── CustomButton.svelte (legacy)
├── layout/
│   ├── Header.svelte
│   ├── Container.svelte
│   ├── Section.svelte
│   ├── Sidebar.svelte
│   ├── Grid.svelte
│   ├── Navigation.svelte
│   └── Footer.svelte
└── content/
    ├── ContentCard.svelte
    └── ContentList.svelte
```

### Global Styles
```css
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;600;700&family=David+Libre:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply font-body text-text bg-background leading-relaxed;
    font-family: 'David Libre', serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading tracking-tight;
    font-family: 'Archivo Narrow', sans-serif;
  }
  
  a {
    @apply text-accent hover:text-text-hover transition-colors duration-300;
  }
}
```

---

## Design Tokens (for Tailwind Config)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#04724D',
        secondary: '#B8DBD9',
        accent: '#586F7C',
        background: '#F4F4F9',
        text: '#0A0A0A',
      },
      fontFamily: {
        heading: ['Archivo Narrow', 'sans-serif'],
        body: ['David Libre', 'serif'],
      },
      spacing: {
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '2.5rem',    // 40px
        '2xl': '3.125rem', // 50px
        '3xl': '3.75rem',  // 60px
        '4xl': '5rem',     // 80px
        '5xl': '6.25rem',  // 100px
      },
      fontSize: {
        'title': ['56px', { lineHeight: '1.4', letterSpacing: '-1px' }],
        'heading': ['26px', { lineHeight: '1.3' }],
        'body': ['17px', { lineHeight: '1.8' }],
        'label': ['14px', { lineHeight: '1.4', letterSpacing: '2px' }],
        'small': ['13px', { lineHeight: '1.5', letterSpacing: '1px' }],
      },
      maxWidth: {
        'container': '1400px',
        'content': '700px',
      },
    },
  },
}
```

---

## Content Page Layout (Essays, Notes, Projects)

### Page Structure
Content pages (essays, notes, project documentation) use a focused, single-column layout optimized for reading.

**Layout Pattern**:
```
Header (sticky)
└─ Logo + Navigation

Content Header (gradient)
├─ Metadata
├─ Title
├─ Subtitle
└─ Tags

Article Content (white background)
└─ Body text + Headings + Media

Content Footer
├─ Back link
└─ Related content

Site Footer
```

---

### Content Header

**Background**:
```css
background: linear-gradient(to bottom, #FFFFFF 0%, #F4F4F9 100%);
```

**Structure**:
- Padding: 80px 50px 60px
- Max Width: 700px (centered)
- No border at bottom (seamless transition to content)

**Metadata**:
- Font: Archivo Narrow, 14px, weight 400
- Color: `#586F7C`
- Text Transform: Uppercase
- Letter Spacing: 2px
- Margin Bottom: 30px
- Format: `Type · Date · Reading Time`

**Title**:
- Font: Archivo Narrow, 52px, weight 600
- Line Height: 1.3
- Color: `#0A0A0A`
- Margin Bottom: 25px

**Subtitle/Description**:
- Font: David Libre, 20px, weight 400
- Color: `#586F7C`
- Line Height: 1.6
- Margin Bottom: 30px
- Max Width: 100% of container

**Tags**:
- Display: Flex, gap 10px
- Individual tag: See Tag component spec

---

### Article Content

**Container**:
- Background: White (`#FFFFFF`)
- Max Width: 700px (centered)
- Padding: 80px 50px 120px
- No borders or shadows

**Body Text**:
- Font: David Libre, 19px, weight 400
- Line Height: 1.9 (optimal for extended reading)
- Color: `#0A0A0A`
- Paragraph spacing: 30px bottom margin

**Reading-Optimized Spacing**:
- Between paragraphs: 30px
- Before H2: 60px
- After H2: 25px
- Before H3: 45px
- After H3: 20px
- Around blockquotes: 40px
- Around code blocks: 35px
- Around horizontal rules: 50px

---

### Content Typography

**Heading 2 (Major Sections)**:
- Font: Archivo Narrow, 32px, weight 600
- Line Height: 1.3
- Color: `#0A0A0A`
- Margin: 60px top, 25px bottom

**Heading 3 (Subsections)**:
- Font: Archivo Narrow, 24px, weight 600
- Line Height: 1.4
- Color: `#0A0A0A`
- Margin: 45px top, 20px bottom

**Blockquote**:
- Border Left: 3px solid `#04724D`
- Padding Left: 30px
- Font Style: Italic
- Font Size: 20px
- Color: `#586F7C`
- Margin: 40px vertical

**Lists (ul, ol)**:
- Padding Left: 30px
- Margin Bottom: 30px
- List Item Spacing: 12px bottom margin

**Links**:
- Color: `#04724D`
- Text Decoration: None
- Border Bottom: 1px solid `#B8DBD9`
- Transition: border-color 300ms ease
- Hover: Border Bottom Color → `#04724D`

**Inline Code**:
- Font: Monospace (Courier New)
- Background: `#F4F4F9`
- Padding: 2px 6px
- Font Size: 17px
- Color: `#04724D`

**Code Block (pre)**:
- Background: `#F4F4F9`
- Border: 1px solid `#B8DBD9`
- Padding: 25px
- Margin: 35px vertical
- Font Size: 15px
- Line Height: 1.6
- Overflow: Auto (horizontal scroll)

**Horizontal Rule**:
- Border: None
- Border Top: 1px solid `#B8DBD9`
- Margin: 50px vertical

**Section Divider** (optional ornamental):
- Text: `• • •`
- Text Align: Center
- Color: `#B8DBD9`
- Font Size: 24px
- Letter Spacing: 20px
- Margin: 60px vertical

---

### Content Footer

**Structure**:
- Background: White (`#FFFFFF`)
- Border Top: 1px solid `#B8DBD9`
- Padding: 60px 50px
- Max Width: 700px (centered)

**Back Link**:
- Font: Archivo Narrow, 16px, weight 600
- Color: `#586F7C`
- Display: Inline-flex with arrow icon
- Gap: 10px
- Hover: Color → `#04724D`
- Margin Bottom: 40px

**Related Content Section**:
- Margin Top: 40px

**Related Title**:
- Font: Archivo Narrow, 18px, weight 600
- Letter Spacing: 2px
- Text Transform: Uppercase
- Color: `#0A0A0A`
- Margin Bottom: 25px

**Related Item**:
- Padding: 20px vertical
- Border Bottom: 1px solid `#F4F4F9`
- Transition: padding-left 300ms ease
- Hover: Padding Left → 15px

**Related Item Link**:
- Font: David Libre, 18px, weight 500
- Color: `#0A0A0A`
- Display: Block
- Margin Bottom: 8px
- Hover: Color → `#04724D`

**Related Item Meta**:
- Font: Archivo Narrow, 13px, weight 400
- Color: `#586F7C`
- Letter Spacing: 1px

---

## Layout Structure Clarifications

### Section Landing Pages vs Individual Content Pages

**Section Landing Pages** (`/essays`, `/notes`, `/reading`, `/projects`):
- Use `Section`, `Container`, `Title`, and `ContentList` components
- NO metadata header
- Clean list-based layout for content discovery

**Individual Content Pages** (`/essays/sample-essay`, `/notes/sample-note`, etc.):
- Use `ContentLayout` component with `ContentHeader` and `ContentFooter`
- Include metadata header with type, date, reading time
- Full content layout optimized for reading

---

### Responsive Behavior (Content Pages)

**Mobile (< 768px)**:
- Header padding: 25px 30px
- Content header padding: 60px 30px 40px
- Title: 36px (down from 52px)
- Subtitle: 18px (down from 20px)
- Article padding: 60px 30px 80px
- Body text: 18px (down from 19px)
- H2: 28px (down from 32px)
- H3: 22px (down from 24px)
- Blockquote padding left: 20px, font size: 19px
- Content footer padding: 50px 30px

---

### Maximum Readability Guidelines

**Line Length**:
- Optimal: 65-75 characters per line
- Implementation: 700px max-width container
- Never exceed 800px for body text

**Line Height**:
- Body text: 1.9 (generous for extended reading)
- Headings: 1.3-1.4 (tighter for visual impact)

**Contrast**:
- Body text on white: `#0A0A0A` (21:1 ratio)
- Avoid colored text for paragraphs

**Distractions**:
- No sidebars during reading
- No floating elements
- No pop-ups or interruptions
- Minimal navigation (sticky header only)

**Flow**:
- Consistent vertical rhythm
- Clear visual hierarchy
- Generous whitespace
- Smooth transitions between sections

---

## Examples

### Hero Section Implementation
```svelte
<Section class="hero-gradient">
  <Container>
    <Title>A Space for Quiet Contemplation</Title>
    <Paragraph class="text-accent max-w-content">
      Where ideas settle like falling leaves, each finding its place 
      in the natural order of things.
    </Paragraph>
    <Button variant="outlined">Enter</Button>
  </Container>
</Section>
```

### Card Grid Implementation
```svelte
<Section class="bg-background">
  <Container>
    <Grid>
      <Card>
        <Heading>The Art of Note-Taking</Heading>
        <Paragraph>
          Exploring methods for capturing and connecting ideas...
        </Paragraph>
        <div class="flex gap-2 mt-4">
          <Tag>productivity</Tag>
          <Tag>learning</Tag>
        </div>
      </Card>
      <!-- More cards -->
    </Grid>
  </Container>
</Section>
```

---

*Last Updated: 6 Oct 2025*
*Version: 1.0.0*