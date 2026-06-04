'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const element = target?.closest<HTMLElement>('[data-analytics-event]');
      if (!element) return;

      const eventName = element.dataset.analyticsEvent;
      if (!eventName) return;

      const props: Record<string, string> = {};
      for (const [key, value] of Object.entries(element.dataset)) {
        if (!key.startsWith('analyticsProp') || value == null) continue;
        const propName = key
          .replace(/^analyticsProp/, '')
          .replace(/^[A-Z]/, (char) => char.toLowerCase())
          .replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`);
        if (propName) props[propName] = value;
      }

      trackEvent(eventName, props);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
