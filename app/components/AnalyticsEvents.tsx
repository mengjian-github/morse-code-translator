'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

export default function AnalyticsEvents() {
  useEffect(() => {
    const depthMarks = [25, 50, 75, 90];
    const firedDepthMarks = new Set<number>();
    const engagementTimers = [10, 30, 60, 120, 180, 300];
    const firedEngagementMarks = new Set<number>();

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

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const depth = Math.round((window.scrollY / scrollableHeight) * 100);
      const nextMark = depthMarks.find((mark) => depth >= mark && !firedDepthMarks.has(mark));
      if (!nextMark) return;

      firedDepthMarks.add(nextMark);
      trackEvent('page_scroll_depth', {
        depth_percent: nextMark,
        event_scope: 'engagement_depth',
      });
    };

    const engagementInterval = setInterval(() => {
      const secondsOnPage = Math.floor(performance.now() / 1000);
      const nextMark = engagementTimers.find((mark) => secondsOnPage >= mark && !firedEngagementMarks.has(mark));
      if (!nextMark) return;

      firedEngagementMarks.add(nextMark);
      trackEvent('page_engagement_time', {
        engagement_seconds: nextMark,
        event_scope: 'engagement_time',
      });
    }, 1000);

    document.addEventListener('click', handleClick, true);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(engagementInterval);
    };
  }, []);

  return null;
}
