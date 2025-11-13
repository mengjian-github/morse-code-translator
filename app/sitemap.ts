import type { MetadataRoute } from 'next';
import { articles } from './blog/articles';

const siteUrl = 'https://morsecodetranslator.app';

const staticPaths = [
  '',
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
  const now = new Date();

  const staticEntries = staticPaths.map((path) => ({
    url: `${siteUrl}${path || '/'}`,
    lastModified: now,
  }));

  const blogEntries = articles.map((article) => {
    const parsedDate = new Date(article.date);
    return {
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: isNaN(parsedDate.getTime()) ? now : parsedDate,
    };
  });

  return [...staticEntries, ...blogEntries];
}
