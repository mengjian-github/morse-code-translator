import type { Metadata } from 'next';

export const SITE_URL = 'https://morsecodetranslator.app';
export const SITE_NAME = 'Morse Code Translator';
export const DEFAULT_OG_IMAGE_ALT = 'Morse Code Translator interface preview';
export const DEFAULT_OG_IMAGE_URL = `${SITE_URL}/app-screenshot.png`;
export const SITE_LOGO_URL = `${SITE_URL}/logo.png`;

type OpenGraphShape = NonNullable<Metadata['openGraph']>;

const openGraphBase: OpenGraphShape = {
  type: 'website',
  locale: 'en_US',
  siteName: SITE_NAME,
  images: [
    {
      url: DEFAULT_OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: DEFAULT_OG_IMAGE_ALT,
    },
  ],
};

export function absoluteUrl(path = '/'): string {
  if (!path) {
    return SITE_URL;
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

type BuildOpenGraphArgs = {
  title: string;
  description: string;
  url: string;
} & Partial<Omit<OpenGraphShape, 'title' | 'description' | 'url'>>;

export function buildOpenGraphMeta({
  title,
  description,
  url,
  ...overrides
}: BuildOpenGraphArgs): OpenGraphShape {
  return {
    ...openGraphBase,
    ...overrides,
    title,
    description,
    url,
    images: overrides.images ?? openGraphBase.images,
  };
}

type SoftwareAppJsonLdArgs = {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  applicationSubCategory?: string;
  featureList?: string[];
  image?: string;
};

export function buildSoftwareAppJsonLd({
  name,
  description,
  url,
  applicationCategory,
  applicationSubCategory,
  featureList,
  image = DEFAULT_OG_IMAGE_URL,
}: SoftwareAppJsonLdArgs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${url}#software`,
    name,
    url,
    description,
    image,
    screenshot: image,
    applicationSuite: SITE_NAME,
    applicationCategory,
    ...(applicationSubCategory ? { applicationSubCategory } : {}),
    operatingSystem: 'Web',
    browserRequirements: 'Requires a modern browser with JavaScript and Web Audio support.',
    inLanguage: 'en',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      url,
      price: '0.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: SITE_LOGO_URL,
        width: 512,
        height: 512,
      },
    },
    ...(featureList?.length ? { featureList } : {}),
  } as const;
}
