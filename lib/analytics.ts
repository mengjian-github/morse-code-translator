type AnalyticsPrimitive = string | number | boolean | null | undefined;
type AnalyticsProperties = Record<string, AnalyticsPrimitive>;

type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
  channel: string;
  referrerHost: string;
  landingPage: string;
};

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const ATTRIBUTION_STORAGE_KEY = 'mct_paid_ready_attribution';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

function safeSessionStorage(): Storage | null {
  try {
    return typeof window !== 'undefined' ? window.sessionStorage : null;
  } catch {
    return null;
  }
}

function normalizeValue(value: AnalyticsPrimitive): string | number | boolean {
  if (typeof value === 'number' || typeof value === 'boolean') return value;
  return value == null ? '' : String(value);
}

function readStoredAttribution(): Partial<Attribution> {
  const storage = safeSessionStorage();
  if (!storage) return {};

  try {
    const raw = storage.getItem(ATTRIBUTION_STORAGE_KEY);
    return raw ? JSON.parse(raw) as Partial<Attribution> : {};
  } catch {
    return {};
  }
}

function deriveChannel(source: string, medium: string): string {
  if (medium === 'organic') return 'organic_search';
  if (medium === 'cpc' || medium === 'paid' || medium === 'ppc') return 'paid';
  if (medium === 'email' || medium === 'newsletter') return 'email';
  if (medium === 'social') return 'social';
  if (source === 'chatgpt' || source.includes('openai') || source.includes('perplexity')) return 'ai_referral';
  if (medium === 'referral') return source === 'internal' ? 'internal' : 'referral';
  if (source === 'direct') return 'direct';
  return medium || 'unknown';
}

function deriveReferrerAttribution(): Pick<Attribution, 'source' | 'medium' | 'referrerHost'> {
  if (typeof document === 'undefined') return { source: 'direct', medium: 'none', referrerHost: '' };

  const referrer = document.referrer;
  if (!referrer) return { source: 'direct', medium: 'none', referrerHost: '' };

  try {
    const referrerHost = new URL(referrer).hostname.replace(/^www\./, '');
    const currentHost = window.location.hostname.replace(/^www\./, '');

    if (referrerHost === currentHost) return { source: 'internal', medium: 'referral', referrerHost };

    const searchSource = referrerHost.includes('google')
      ? 'google'
      : referrerHost.includes('bing')
        ? 'bing'
        : referrerHost.includes('duckduckgo')
          ? 'duckduckgo'
          : referrerHost.includes('yahoo')
            ? 'yahoo'
            : referrerHost.includes('yandex')
              ? 'yandex'
              : referrerHost.includes('chatgpt') || referrerHost.includes('openai')
                ? 'chatgpt'
                : referrerHost;

    const medium = ['google', 'bing', 'duckduckgo', 'yahoo', 'yandex'].includes(searchSource)
      ? 'organic'
      : searchSource === 'chatgpt'
        ? 'referral'
        : 'referral';
    return { source: searchSource, medium, referrerHost };
  } catch {
    return { source: 'referrer', medium: 'referral', referrerHost: '' };
  }
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') {
    return {
      source: 'server',
      medium: 'server',
      campaign: '',
      term: '',
      content: '',
      channel: 'server',
      referrerHost: '',
      landingPage: '',
    };
  }

  const params = new URLSearchParams(window.location.search);
  const stored = readStoredAttribution();
  const referrer = deriveReferrerAttribution();
  const hasUtm = UTM_KEYS.some((key) => params.has(key));
  const source = params.get('utm_source') || stored.source || referrer.source;
  const medium = params.get('utm_medium') || stored.medium || referrer.medium;

  const attribution: Attribution = {
    source,
    medium,
    campaign: params.get('utm_campaign') || stored.campaign || '',
    term: params.get('utm_term') || stored.term || '',
    content: params.get('utm_content') || stored.content || '',
    channel: deriveChannel(source, medium),
    referrerHost: stored.referrerHost || referrer.referrerHost,
    landingPage: stored.landingPage || `${window.location.pathname}${window.location.search}`,
  };

  if (hasUtm || !stored.source) {
    const storage = safeSessionStorage();
    try {
      storage?.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
    } catch {
      // Ignore storage failures; events still send live attribution.
    }
  }

  return attribution;
}

export function buildEventProps(properties: AnalyticsProperties = {}): Record<string, string | number | boolean> {
  const attribution = getAttribution();
  const pagePath = typeof window !== 'undefined'
    ? `${window.location.pathname}${window.location.search}`
    : '';

  return {
    page_path: pagePath,
    tool_name: 'morse_code_translator',
    source: attribution.source,
    medium: attribution.medium,
    channel: attribution.channel,
    campaign: attribution.campaign,
    term: attribution.term,
    content: attribution.content,
    referrer_host: attribution.referrerHost,
    landing_page: attribution.landingPage,
    ...Object.fromEntries(
      Object.entries(properties).map(([key, value]) => [key, normalizeValue(value)]),
    ),
  };
}

export function trackEvent(eventName: string, properties?: AnalyticsProperties) {
  if (typeof window === 'undefined') return;

  const props = buildEventProps(properties);

  window.plausible?.(eventName, { props });
  window.gtag?.('event', eventName, props);

  try {
    window.clarity?.('event', eventName);
    window.clarity?.('set', 'utm_source', String(props.source));
    window.clarity?.('set', 'utm_medium', String(props.medium));
    window.clarity?.('set', 'utm_campaign', String(props.campaign));
  } catch {
    // Clarity may not be ready yet.
  }
}

export function trackContactSupportClick(location: string) {
  trackEvent('contact_support_click', { location });
}
