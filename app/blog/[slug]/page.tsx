import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogArticles } from '@/lib/blog/articles';
import { absoluteUrl, buildOpenGraphMeta } from '@/app/utils/seo';

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
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

  const pageTitle = `${article.title} | Morse Code Translator Blog`;
  const canonicalUrl = absoluteUrl(`/blog/${article.slug}`);
  const coverImageUrl = absoluteUrl(article.coverImage);

  return {
    title: pageTitle,
    description: article.excerpt,
    keywords: [article.category.toLowerCase(), 'morse code', article.slug.replace(/-/g, ' ')],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: buildOpenGraphMeta({
      title: pageTitle,
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/blog" className="text-primary-600 dark:text-primary-400 hover:underline">
          Blog
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">{article.title}</span>
      </nav>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100 rounded-full text-sm font-semibold">
              {article.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400">{article.readTime}</span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <time className="text-gray-500 dark:text-gray-400">{article.date}</time>
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
