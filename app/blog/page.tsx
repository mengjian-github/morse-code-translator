import type { Metadata } from 'next';
import Link from 'next/link';
import { blogArticles } from '@/lib/blog/articles';

export const metadata: Metadata = {
  title: 'Morse Code Blog - Tutorials, History & Learning Resources',
  description: 'Learn about morse code history, tutorials, and practical applications. Expert articles on morse code translation, radio communication, and encoding systems.',
  keywords: ['morse code blog', 'morse code history', 'learn morse code', 'morse code tutorials', 'amateur radio'],
  alternates: {
    canonical: 'https://morsecodetranslator.app/blog'
  }
};

export default function BlogPage() {
  const categories = ['All', ...Array.from(new Set(blogArticles.map((article) => article.category)))];
  const featuredArticle = blogArticles[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Morse Code <span className="text-primary-600 dark:text-primary-400">Blog</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Explore morse code history, tutorials, projects, and modern applications. Expert articles for learners, radio operators, and technology enthusiasts. Our morse code blog curates deep dives and news for every CW fan.
        </p>
      </div>

      <p className="text-center text-base text-gray-600 dark:text-gray-400 mb-8">Browse the morse code blog archive for tutorials, history timelines, and field reports updated weekly.</p>

      {/* Category Filter */}
      <section className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">Featured</span>
            <span className="text-primary-100">{featuredArticle.category}</span>
            <span className="text-primary-100">•</span>
            <span className="text-primary-100">{featuredArticle.readTime}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {featuredArticle.title}
          </h2>
          <p className="text-xl text-primary-50 mb-6">
            {featuredArticle.excerpt}
          </p>
          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Read Full Article
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Article Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={article.coverImage}
                alt={article.coverImageAlt}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-sm flex items-center gap-1"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Popular Topics */}
      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Popular Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-center">
              <div className="text-3xl mb-2">📚</div>
              <div className="font-semibold text-gray-900 dark:text-white">Learning</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">15 articles</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-center">
              <div className="text-3xl mb-2">📻</div>
              <div className="font-semibold text-gray-900 dark:text-white">Radio</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">12 articles</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-center">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-semibold text-gray-900 dark:text-white">DIY</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">10 articles</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-center">
              <div className="text-3xl mb-2">📖</div>
              <div className="font-semibold text-gray-900 dark:text-white">History</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">8 articles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <div className="bg-primary-100 dark:bg-primary-900/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Try Our Morse Code Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">📡</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Morse Translator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert text to morse code</p>
              </div>
            </Link>
            <Link href="/translator-maker-guide" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">🔧</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Maker Guide</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Build your own translator</p>
              </div>
            </Link>
            <Link href="/binary-to-morse" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">💾</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Binary Converter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Binary to morse code</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
