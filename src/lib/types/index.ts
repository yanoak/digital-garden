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

// Design System Types
export type ZenColor = 'primary' | 'secondary' | 'accent' | 'text' | 'text-muted' | 'text-hover' | 'background' | 'white' | 'border' | 'border-hover';
export type ZenSize = 'sm' | 'md' | 'lg' | 'xl';
export type ZenVariant = 'default' | 'outline' | 'ghost' | 'filled';
export type ZenWeight = 'heading' | 'heading-bold' | 'heading-black' | 'body' | 'body-medium' | 'body-bold' | 'label';

// Typography Component Props
export interface TypographyProps {
  class?: string;
  children: any;
  color?: ZenColor;
  weight?: ZenWeight;
}

export interface TitleProps extends TypographyProps {
  size?: 'default' | 'lg';
}

export interface HeadingProps extends TypographyProps {
  size?: 'default' | 'lg';
}

export interface ParagraphProps extends TypographyProps {
  size?: 'default' | 'lg';
}

export interface LabelProps extends TypographyProps {
  size?: 'default' | 'lg';
}

// Layout Component Props
export interface ContainerProps {
  class?: string;
  children: any;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'container' | 'content';
}

export interface SectionProps {
  class?: string;
  children: any;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  background?: 'white' | 'background' | 'transparent' | 'gradient';
}

export interface HeaderProps {
  class?: string;
  children: any;
}

export interface SidebarProps {
  class?: string;
  children: any;
  position?: 'left' | 'right';
}

export interface GridProps {
  class?: string;
  children: any;
  cols?: 1 | 2 | 3 | 4 | 6 | 12 | 'auto-fit';
  gap?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

// UI Component Props
export interface ButtonProps {
  variant?: ZenVariant;
  size?: ZenSize;
  disabled?: boolean;
  class?: string;
  onClick?: () => void;
  children: any;
  color?: ZenColor;
  href?: string;
  external?: boolean;
}

export interface CardProps {
  class?: string;
  children: any;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface TagProps {
  class?: string;
  children: any;
  variant?: 'default' | 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  color?: ZenColor;
}

export interface LinkProps {
  href: string;
  class?: string;
  external?: boolean;
  children: any;
  variant?: 'default' | 'underline' | 'button';
  color?: ZenColor;
}

export interface SidebarItemProps {
  class?: string;
  children: any;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

// Legacy Component Props (for backward compatibility)
export interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  class?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export interface CustomLinkProps extends LinkProps {}

export interface CustomButtonProps extends ButtonProps {}

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

