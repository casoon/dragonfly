/**
 * Format Date to Readable String
 * 
 * Converts date strings or Date objects to human-readable formats.
 * 
 * @param {string|Date} dateStr - The date string or Date object to format
 * @param {Object} options - Formatting options (optional)
 * @param {string} options.locale - Locale for formatting (default: 'en-US')
 * @param {string} options.format - Format type: 'short', 'medium', 'long', 'full' (default: 'short')
 * @returns {string} Formatted date string
 * 
 * @example
 * // Basic usage - shows "Apr 22, 2024"
 * formatDate('2024-04-22')
 * 
 * @example
 * // Custom format
 * formatDate('2024-04-22', { format: 'long' })
 * // Returns: "April 22, 2024"
 * 
 * @example
 * // Different locale
 * formatDate('2024-04-22', { locale: 'de-DE' })
 * // Returns: "22. Apr. 2024"
 */
export function formatDate(dateStr, options = {}) {
  const {
    locale = 'en-US',
    format = 'short'
  } = options;
  
  const date = new Date(dateStr);
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    console.warn('Invalid date provided to formatDate:', dateStr);
    return 'Invalid Date';
  }
  
  const formatOptions = {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    medium: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    long: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    full: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
  };
  
  return date.toLocaleDateString(locale, formatOptions[format] || formatOptions.short);
}

/**
 * Format date for relative time (e.g., "2 days ago", "in 3 hours")
 * 
 * @param {string|Date} dateStr - The date to compare
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Relative time string
 * 
 * @example
 * formatRelativeDate('2024-04-20') // "2 days ago"
 */
export function formatRelativeDate(dateStr, locale = 'en-US') {
  const date = new Date(dateStr);
  const now = new Date();
  
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const diffInSeconds = (date - now) / 1000;
  
  const intervals = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2628000 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 }
  ];
  
  for (const interval of intervals) {
    const count = Math.floor(Math.abs(diffInSeconds) / interval.seconds);
    if (count >= 1) {
      return rtf.format(diffInSeconds < 0 ? -count : count, interval.unit);
    }
  }
  
  return rtf.format(Math.floor(diffInSeconds), 'second');
}

export default formatDate; 