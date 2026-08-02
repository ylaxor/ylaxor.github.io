import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig, absoluteUrl } from '@/data/site';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: `${siteConfig.shortTitle} — Blog`,
    description: siteConfig.description,
    site: context.site,
    customData: `<language>${siteConfig.lang}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: absoluteUrl(`/blog/${post.slug}/`),
      categories: post.data.tags,
      customData: post.data.updatedDate
        ? `<lastBuildDate>${post.data.updatedDate.toUTCString()}</lastBuildDate>`
        : '',
    })),
  });
}
