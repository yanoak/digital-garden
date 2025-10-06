// Content Types
export interface BaseContent {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
}

export interface Essay extends BaseContent {
  type: 'essay';
  readingTime?: number;
  featured?: boolean;
}

export interface Reading extends BaseContent {
  type: 'reading';
  author?: string;
  rating?: number;
  status: 'reading' | 'read' | 'want-to-read';
  bookCover?: string;
}

export interface Note extends BaseContent {
  type: 'note';
  category?: string;
  relatedContent?: string[];
}

export interface Project extends BaseContent {
  type: 'project';
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featuredImage?: string;
}

export type Content = Essay | Reading | Note | Project;

// Component Props
export interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  class?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export interface CustomLinkProps {
  href: string;
  class?: string;
  external?: boolean;
  children: any;
}

export interface CustomButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  class?: string;
  onClick?: () => void;
  children: any;
}

export interface TypographyProps {
  class?: string;
  children: any;
}

export interface ContainerProps {
  class?: string;
  children: any;
}

export interface SectionProps {
  class?: string;
  children: any;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Utility Types
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type Color = 'primary' | 'secondary' | 'accent';
export type Variant = 'default' | 'outline' | 'ghost';
