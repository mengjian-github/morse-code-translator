import type { MetadataRoute } from 'next';
import { blogArticles } from '@/lib/blog/articles';

const siteUrl = 'https://morsecodetranslator.app';

export const dynamic = 'force-static';

const staticPaths = [
  '',
  '/morse-code-audio',
  '/beeper-code',
  '/binary-to-morse',
  '/blog',
  '/cryptic-code-translator',
  '/hexadecimal-cipher',
  '/identifier-encoder',
  '/picture-decoder',
  '/translator-maker-guide',
  '/word-decoder',
  '/terms',
  '/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date('2026-07-09T00:00:00.000Z');

  const staticEntries = staticPaths.map((path) => ({
    url: `${siteUrl}${path || '/'}`,
    lastModified: buildDate,
  }));

  const blogEntries = blogArticles.map((article) => {
    const parsedDate = new Date(article.date);
    return {
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: isNaN(parsedDate.getTime()) ? buildDate : parsedDate,
    };
  });

  return [...staticEntries, ...blogEntries];
}
