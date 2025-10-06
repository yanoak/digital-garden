/**
 * Date utility functions for formatting and manipulation
 */

/**
 * Format a date string to a readable format
 * @param date - Date string or Date object
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
}

/**
 * Get relative time string (e.g., "2 days ago")
 * @param date - Date string or Date object
 * @returns Relative time string
 */
export function getRelativeTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 }
  ];
  
  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count === 1 ? '' : 's'} ago`;
    }
  }
  
  return 'just now';
}

/**
 * Check if a date is today
 * @param date - Date string or Date object
 * @returns True if date is today
 */
export function isToday(date: string | Date): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  return dateObj.toDateString() === today.toDateString();
}

/**
 * Check if a date is within the last N days
 * @param date - Date string or Date object
 * @param days - Number of days to check
 * @returns True if date is within the last N days
 */
export function isWithinDays(date: string | Date, days: number): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - dateObj.getTime()) / (1000 * 60 * 60 * 24));
  return diffInDays <= days;
}
