'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
  eventProps?: Record<string, string | number | boolean>;
}

export default function CopyButton({ text, label = 'Copy', className = '', eventProps }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [hint, setHint] = useState(false);

  const handleCopy = async () => {
    if (!text) {
      trackEvent('copy_output_blocked', {
        reason: 'empty_output',
        ...eventProps,
      });
      setHint(true);
      setTimeout(() => setHint(false), 2500);
      return;
    }

    trackEvent('copy_output', {
      output_length: text.length,
      ...eventProps,
    });

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      trackEvent('copy_output_error', {
        output_length: text.length,
        ...eventProps,
      });
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      data-action-unavailable={!text}
      title={!text ? 'Enter text first to enable copy' : undefined}
      className={`px-4 py-2 rounded-xl bg-[#0058a3] text-white font-semibold shadow-lg shadow-[#0058a3]/30 hover:bg-[#0a6fd0] data-[action-unavailable=true]:opacity-60 data-[action-unavailable=true]:cursor-help transition-all ${className}`}
      type="button"
    >
      {hint ? (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Enter text first
        </span>
      ) : copied ? (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {label}
        </span>
      )}
    </button>
  );
}
