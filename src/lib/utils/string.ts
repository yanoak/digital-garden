/**
 * String utility functions for formatting and manipulation
 */

/**
 * Convert a string to kebab-case
 * @param str - String to convert
 * @returns Kebab-case string
 */
export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Convert a string to title case
 * @param str - String to convert
 * @returns Title case string
 */
export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Truncate a string to a specified length
 * @param str - String to truncate
 * @param length - Maximum length
 * @param suffix - Suffix to add if truncated
 * @returns Truncated string
 */
export function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str;
  return str.substring(0, length - suffix.length) + suffix;
}

/**
 * Generate a slug from a string
 * @param str - String to convert to slug
 * @returns URL-friendly slug
 */
export function generateSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Capitalize the first letter of a string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Remove HTML tags from a string
 * @param str - String with HTML tags
 * @returns Plain text string
 */
export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

/**
 * Extract reading time estimate from text
 * @param text - Text content
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Reading time in minutes
 */
export function getReadingTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
