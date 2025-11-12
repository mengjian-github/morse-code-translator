'use client';

import { useMemo } from 'react';

interface SignalVisualizerProps {
  wpm: number;
  frequency: number;
  noiseLevel?: number;
  caption?: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export default function SignalVisualizer({
  wpm,
  frequency,
  noiseLevel = 0,
  caption,
  variant = 'dark',
  className = '',
}: SignalVisualizerProps) {
  const bars = useMemo(() => {
    const total = 48;
    const freqFactor = Math.min(frequency, 1200) / 1200;
    const speedFactor = Math.max(5, Math.min(60, wpm)) / 60;
    const noise = Math.min(0.6, Math.max(0, noiseLevel));

    return Array.from({ length: total }, (_, idx) => {
      const base = (Math.sin((idx / total) * Math.PI * (8 * freqFactor + 2)) + 1) / 2;
      const speedInfluence = Math.sin(idx * speedFactor * 0.75 + speedFactor) * 0.15 + 0.5;
      const noiseInfluence = Math.sin(idx * 1.7 + noise * 5) * noise * 0.5 + 0.5;
      const amplitude = Math.min(1, Math.max(0.15, (base + speedInfluence + noiseInfluence) / 3));
      return amplitude;
    });
  }, [wpm, frequency, noiseLevel]);

  return (
    <div
      className={`signal-visualizer ${variant === 'light' ? 'bg-white/90 border-[#0058a3]/10' : ''} ${className}`}
      aria-hidden
    >
      <div className="flex items-center justify-between mb-4">
        <p className={`text-sm ${variant === 'light' ? 'text-[#0b1f3a]' : 'text-white/70'}`}>
          {caption || 'Signal preview'}
        </p>
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="metric-pill">{wpm} WPM</span>
          <span className="metric-pill">{frequency} Hz</span>
          {noiseLevel > 0 && <span className="metric-pill">Noise {Math.round(noiseLevel * 100)}%</span>}
        </div>
      </div>
      <div className="signal-visualizer__bars">
        {bars.map((height, idx) => (
          <span
            key={`bar-${idx}`}
            style={{
              height: `${height * 110}%`,
              animationDelay: `${idx * 0.03}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
