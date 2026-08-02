export const siteConfig = {
  title: 'Ali Ncibi — Data Engineer & Data Scientist',
  shortTitle: 'Ali Ncibi',
  description:
    'Personal website and blog of Ali Ncibi — Data Engineer, Data Scientist and Computer Science Researcher focused on building impactful AI solutions.',
  author: 'Ali Ncibi',
  email: 'ali.ncibi.telephone@gmail.com',
  github: 'https://github.com/ylaxor',
  url: 'https://ylaxor.github.io',
  base: '',
  locale: 'en',
  lang: 'en',
  themeColor: '#2563eb',
  ogImage: '/og-image.png',
} as const;

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}

export function baseUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.base}${normalizedPath}` || '/';
}
