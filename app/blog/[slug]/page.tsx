import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogArticles } from '@/lib/blog/articles';
import { SITE_NAME, SITE_URL, absoluteUrl, buildOpenGraphMeta } from '@/app/utils/seo';

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

function parseArticleDate(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (!isNaN(parsed.getTime())) {
    return parsed.toISOString().split('T')[0];
  }
  const fallback = new Date(Date.parse(dateStr));
  if (!isNaN(fallback.getTime())) {
    return fallback.toISOString().split('T')[0];
  }
  return new Date().toISOString().split('T')[0];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const canonicalTitle = article.title;
  const openGraphTitle = `${article.title} | Morse Code Translator Blog`;
  const canonicalUrl = absoluteUrl(`/blog/${article.slug}`);
  const coverImageUrl = absoluteUrl(article.coverImage);

  return {
    title: {
      absolute: canonicalTitle,
    },
    description: article.excerpt,
    keywords: [
      article.category.toLowerCase(),
      'morse code',
      article.slug.replace(/-/g, ' '),
      'morse code translator',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    openGraph: buildOpenGraphMeta({
      title: openGraphTitle,
      description: article.excerpt,
      url: canonicalUrl,
      images: [
        {
          url: coverImageUrl,
          width: 1200,
          height: 630,
          alt: article.coverImageAlt,
        },
      ],
    }),
  };
}

function getRelatedArticles(currentSlug: string, category: string) {
  const primaryMatches = blogArticles.filter(
    (item) => item.slug !== currentSlug && item.category === category
  );

  if (primaryMatches.length >= 3) {
    return primaryMatches.slice(0, 3);
  }

  const additionalArticles = blogArticles.filter(
    (item) => item.slug !== currentSlug && item.category !== category
  );

  return [...primaryMatches, ...additionalArticles].slice(0, 3);
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, article.category);
  const pageUrl = absoluteUrl(`/blog/${article.slug}`);
  const publishDate = parseArticleDate(article.date);
  const coverImageUrl = absoluteUrl(article.coverImage);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/logo.png'),
          width: 512,
          height: 512,
        },
      },
      {
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#article`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl,
        },
        headline: article.title,
        description: article.excerpt,
        image: {
          '@type': 'ImageObject',
          url: coverImageUrl,
          width: 1200,
          height: 630,
        },
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: absoluteUrl('/logo.png'),
            width: 512,
            height: 512,
          },
        },
        datePublished: publishDate,
        dateModified: publishDate,
        articleSection: article.category,
        keywords: [article.category, 'morse code', 'morse code translator'],
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
          { '@type': 'ListItem', position: 3, name: article.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
        <Link href="/" className="underline decoration-dotted underline-offset-4">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="underline decoration-dotted underline-offset-4">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white/80">{article.title}</span>
      </nav>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100 rounded-full text-sm font-semibold">
              {article.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400">{article.readTime}</span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <time className="text-gray-500 dark:text-gray-400" dateTime={publishDate}>
              {article.date}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{article.excerpt}</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={article.coverImage}
            alt={article.coverImageAlt}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="article-content mb-12">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        <footer className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
              data-analytics-event="blog_back_to_list_click"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </footer>
      </article>

      {relatedArticles.length > 0 && (
        <section className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                data-analytics-event="blog_related_article_click"
                data-analytics-prop-article={related.slug}
                data-analytics-prop-category={related.category}
              >
                <img
                  src={related.coverImage}
                  alt={related.coverImageAlt}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100 rounded text-xs font-semibold">
                      {related.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
