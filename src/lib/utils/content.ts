/**
 * Content utility functions for managing and filtering content
 */

import type { Content, Essay, Note, Project, Reading } from '$lib/types';

/**
 * Sort content by date (newest first)
 * @param content - Array of content items
 * @returns Sorted content array
 */
export function sortByDate(content: Content[]): Content[] {
  return [...content].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Filter content by type
 * @param content - Array of content items
 * @param type - Content type to filter by
 * @returns Filtered content array
 */
export function filterByType<T extends Content>(
  content: Content[],
  type: T['type']
): T[] {
  return content.filter((item): item is T => item.type === type);
}

/**
 * Filter content by tags
 * @param content - Array of content items
 * @param tags - Tags to filter by
 * @returns Filtered content array
 */
export function filterByTags(content: Content[], tags: string[]): Content[] {
  if (tags.length === 0) return content;
  
  return content.filter(item => 
    tags.some(tag => item.tags.includes(tag))
  );
}

/**
 * Search content by title and description
 * @param content - Array of content items
 * @param query - Search query
 * @returns Filtered content array
 */
export function searchContent(content: Content[], query: string): Content[] {
  if (!query.trim()) return content;
  
  const searchTerm = query.toLowerCase();
  
  return content.filter(item => 
    item.title.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get featured content
 * @param content - Array of content items
 * @returns Featured content array
 */
export function getFeaturedContent(content: Content[]): Content[] {
  return content.filter(item => {
    if (item.type === 'essay') {
      return (item as Essay).featured === true;
    }
    return false;
  });
}

/**
 * Get content by status (for projects and reading)
 * @param content - Array of content items
 * @param status - Status to filter by
 * @returns Filtered content array
 */
export function getContentByStatus(
  content: Content[],
  status: string
): Content[] {
  return content.filter(item => {
    if (item.type === 'project') {
      return (item as Project).status === status;
    }
    if (item.type === 'reading') {
      return (item as Reading).status === status;
    }
    return false;
  });
}

/**
 * Get all unique tags from content
 * @param content - Array of content items
 * @returns Array of unique tags
 */
export function getAllTags(content: Content[]): string[] {
  const allTags = content.flatMap(item => item.tags);
  return [...new Set(allTags)].sort();
}

/**
 * Group content by year
 * @param content - Array of content items
 * @returns Object with years as keys and content arrays as values
 */
export function groupByYear(content: Content[]): Record<string, Content[]> {
  return content.reduce((groups, item) => {
    const year = new Date(item.date).getFullYear().toString();
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(item);
    return groups;
  }, {} as Record<string, Content[]>);
}

/**
 * Count content items that have display: true
 * @param content - Array of content items
 * @returns Number of items with display: true
 */
export function countDisplayedContent(content: Content[]): number {
  return content.filter(item => item.display === true).length;
}
