const DATE_FORMATTER = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return DATE_FORMATTER.format(d);
}

export function formatDateShort(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
  }).format(d);
}

export function getReadingTime(body: string): string {
  const wordsPerMinute = 220;
  const words = body.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min read`;
}

export function isRecentDate(date: Date | string): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  return d >= thirtyDaysAgo;
}
