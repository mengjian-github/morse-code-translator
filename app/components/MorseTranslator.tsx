'use client';

import { useState, useEffect, useMemo } from 'react';
import { textToMorse, morseToText, isValidMorse } from '../utils/morseCode';
import { playMorseCode, generateMorseAudio, downloadAudio, calculateTransmissionDuration } from '../utils/audioUtils';
import CopyButton from './CopyButton';
import SignalVisualizer from './SignalVisualizer';

const waveformOptions: { value: OscillatorType; label: string; description: string }[] = [
  { value: 'sine', label: 'Sine', description: 'Classic sidetone, smooth on long practice blocks.' },
  { value: 'square', label: 'Square', description: 'Sharper envelope that cuts through contest noise.' },
  { value: 'triangle', label: 'Triangle', description: 'Soft ramp for accessibility or therapy sessions.' },
  { value: 'sawtooth', label: 'Sawtooth', description: 'Retro radio feel for demos and classroom talks.' },
];

interface MorseTranslatorProps {
  defaultMode?: 'textToMorse' | 'morseToText';
  showAudio?: boolean;
  showDownload?: boolean;
  className?: string;
  variant?: 'full' | 'compact';
}

export default function MorseTranslator({
  defaultMode = 'textToMorse',
  showAudio = true,
  showDownload = true,
  className = '',
  variant = 'full',
}: MorseTranslatorProps) {
  const [mode, setMode] = useState<'textToMorse' | 'morseToText'>(defaultMode);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [wpm, setWpm] = useState(22);
  const [frequency, setFrequency] = useState(640);
  const [waveform, setWaveform] = useState<OscillatorType>('sine');
  const [noiseLevel, setNoiseLevel] = useState(0.1);
  const [validationMessage, setValidationMessage] = useState('');
  const [activeExample, setActiveExample] = useState<string | null>(null);

  const isCompact = variant === 'compact';
  const sectionId = variant === 'full' ? 'translator' : undefined;

  useEffect(() => {
    if (mode === 'textToMorse') {
      setOutput(textToMorse(input));
      setValidationMessage('');
    } else {
      if (input && !isValidMorse(input)) {
        setValidationMessage('Morse input only accepts dots, dashes, slashes, and spaces.');
      } else {
        setValidationMessage('');
      }
      setOutput(morseToText(input));
    }
  }, [input, mode]);

  const morseSignal = useMemo(() => (mode === 'textToMorse' ? output : input), [input, output, mode]);
  const transmissionSeconds = useMemo(() => {
    if (!morseSignal.trim()) return 0;
    return Number((calculateTransmissionDuration(morseSignal, wpm) / 1000).toFixed(2));
  }, [morseSignal, wpm]);

  const inputWords = useMemo(() => {
    if (!input.trim()) return 0;
    return mode === 'textToMorse' ? input.trim().split(/\s+/).length : input.trim().split(' / ').length;
  }, [input, mode]);

  const signalSymbols = useMemo(() => {
    if (!morseSignal.trim()) return 0;
    return morseSignal.replace(/[^.\-]/g, '').length;
  }, [morseSignal]);

  const inputCharacters = input.length;
  const outputCharacters = output.length;

  const handleModeToggle = () => {
    const newMode = mode === 'textToMorse' ? 'morseToText' : 'textToMorse';
    setMode(newMode);
    setInput(output);
    setOutput(input);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handlePlayAudio = async () => {
    if (!output || isPlaying) return;

    setIsPlaying(true);
    try {
      const morseCode = mode === 'textToMorse' ? output : input;
      await playMorseCode(morseCode, {
        wpm,
        frequency,
        waveform,
        noiseLevel,
      });
    } catch (error) {
      console.error('Error playing audio:', error);
    } finally {
      setIsPlaying(false);
    }
  };

  const handleDownloadAudio = async () => {
    if (!output || isGenerating) return;

    setIsGenerating(true);
    try {
      const morseCode = mode === 'textToMorse' ? output : input;
      const audioBlob = await generateMorseAudio(morseCode, {
        wpm,
        frequency,
        waveform,
        noiseLevel,
      });
      downloadAudio(audioBlob, 'morse-code.wav');
    } catch (error) {
      console.error('Error generating audio:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const statCards = [
    { label: mode === 'textToMorse' ? 'Input words' : 'Input groups', value: inputWords },
    { label: 'Input characters', value: inputCharacters },
    { label: 'Output characters', value: outputCharacters },
    { label: 'Dits / Dahs', value: signalSymbols },
    { label: 'Transmission time', value: `${transmissionSeconds}s` },
  ];

  const quickExamples: { label: string; value: string; mode: 'textToMorse' | 'morseToText' }[] = [
    { label: 'LEARN MORSE FASTER', value: 'LEARN MORSE FASTER', mode: 'textToMorse' },
    { label: '.... .- -- / .- - / 23', value: '.... .- -- / .- - / 23', mode: 'morseToText' },
  ];

  useEffect(() => {
    const matchingExample = quickExamples.find(
      (example) => example.value === input && example.mode === mode,
    );
    setActiveExample(matchingExample ? matchingExample.label : null);
  }, [input, mode]);

  const translatorPanel = (
    <div className="glass-panel p-6 md:p-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-1">Live Translator</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Text ↔ Morse Cockpit</h2>
        </div>
        <button
          onClick={handleModeToggle}
          className="btn-ghost text-sm"
          type="button"
        >
          Swap Direction
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-panel--light p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-[#0b1f3a]">{mode === 'textToMorse' ? 'Text Input' : 'Morse Input'}</p>
            <span className="metric-pill text-[#0b1f3a]">{inputCharacters} chars</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'textToMorse' ? 'Type or paste text...' : 'Type morse (., - and /)'}
            className="w-full h-36 p-4 rounded-xl border border-[#e0e5ff] bg-white text-[#0b1f3a] focus:outline-none focus:ring-2 focus:ring-[#0058a3]"
          />
          {validationMessage && (
            <p className="mt-2 text-xs text-[#ff8c00] flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 5c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z" />
              </svg>
              {validationMessage}
            </p>
          )}
        </div>

        <div className="glass-panel--light p-4 rounded-2xl flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-[#0b1f3a]">{mode === 'textToMorse' ? 'Morse Output' : 'Text Output'}</p>
            <span className="metric-pill text-[#0b1f3a]">{outputCharacters} chars</span>
          </div>
          <div className="flex-1 rounded-xl border border-[#e0e5ff] bg-[#f5f7ff] text-[#0b1f3a] p-4 overflow-y-auto min-h-[6rem]">
            {output || <span className="text-[#8a94b7]">Translation will appear here…</span>}
          </div>
          <CopyButton text={output} label="Copy output" className="self-start" />
        </div>
      </div>

      <div>
        <p className="text-sm text-white/70 mb-3">Quick examples</p>
        <div className="flex flex-wrap gap-3">
          {quickExamples.map((example) => (
            <button
              key={example.label}
              onClick={() => {
                setMode(example.mode);
                setInput(example.value);
                setActiveExample(example.label);
              }}
              className={`signal-chip example-chip ${
                activeExample === example.label ? 'example-chip--active' : ''
              }`}
              aria-pressed={activeExample === example.label}
              type="button"
            >
              {example.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <CopyButton text={output} label="Copy" />
        <button
          onClick={handleClear}
          className="btn-ghost text-sm"
          disabled={!input && !output}
          type="button"
        >
          Clear
        </button>
        {showAudio && (
          <button
            onClick={handlePlayAudio}
            disabled={!output || isPlaying}
            className="btn-primary text-sm"
            type="button"
          >
            {isPlaying ? 'Playing…' : 'Play Audio'}
          </button>
        )}
        {showDownload && (
          <button
            onClick={handleDownloadAudio}
            disabled={!output || isGenerating}
            className="btn-primary text-sm bg-[#0058a3] text-white shadow-[#0058a3]/40 hover:bg-[#0a6fd0]"
            type="button"
          >
            {isGenerating ? 'Generating…' : 'Download WAV'}
          </button>
        )}
      </div>
    </div>
  );

  const telemetryPanel = (
    <div className="glass-panel p-6 md:p-8 space-y-6">
      <SignalVisualizer wpm={wpm} frequency={frequency} noiseLevel={noiseLevel} caption="Live signal forecast" />
      <div className="grid grid-cols-2 gap-3 text-sm">
        {statCards.slice(0, 4).map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/15 bg-white/5 p-3">
            <p className="text-white/60 text-xs uppercase tracking-[0.3em]">{stat.label}</p>
            <p className="text-xl font-semibold text-white mt-1">{stat.value}</p>
          </div>
        ))}
        <div className="col-span-2 rounded-xl border border-white/15 bg-white/5 p-3">
          <p className="text-white/60 text-xs uppercase tracking-[0.3em]">Transmission Time</p>
          <p className="text-2xl font-semibold text-white mt-1">{transmissionSeconds}s</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`${isCompact ? 'space-y-6' : 'space-y-8'} ${className}`} id={sectionId}>
      {isCompact ? (
        <div>{translatorPanel}</div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          {translatorPanel}
          {telemetryPanel}
        </div>
      )}

      {!isCompact && (
        <>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Speed (WPM)</h3>
                <span className="metric-pill">{wpm} WPM</span>
              </div>
              <input
                type="range"
                min={5}
                max={45}
                step={1}
                value={wpm}
                onChange={(e) => setWpm(Number(e.target.value))}
                className="w-full accent-[#ffd800]"
              />
              <p className="text-sm text-white/70">Match contest speeds or slow down for onboarding sessions.</p>
            </div>

            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Carrier Frequency</h3>
                <span className="metric-pill">{frequency} Hz</span>
              </div>
              <input
                type="range"
                min={300}
                max={1200}
                step={10}
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full accent-[#ffd800]"
              />
              <p className="text-sm text-white/70">Align sidetone with radios, cochlear implants, or classroom speakers.</p>
            </div>

            <div className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Noise / QRM Simulation</h3>
                <span className="metric-pill">{Math.round(noiseLevel * 100)}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={0.6}
                step={0.05}
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(Number(e.target.value))}
                className="w-full accent-[#ffd800]"
              />
              <p className="text-sm text-white/70">Simulate contest chaos or therapy comfort levels with one slider.</p>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {waveformOptions.map((option) => (
                <label
                  key={option.value}
                  className={`rounded-2xl border p-4 cursor-pointer transition-all ${waveform === option.value ? 'border-[#ffd800] bg-white/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-lg font-semibold text-white">{option.label}</p>
                    <input
                      type="radio"
                      name="waveform"
                      value={option.value}
                      checked={waveform === option.value}
                      onChange={() => setWaveform(option.value)}
                      className="accent-[#ffd800]"
                    />
                  </div>
                  <p className="text-sm text-white/70">{option.description}</p>
                </label>
              ))}
            </div>
          </div>

        </>
      )}
    </section>
  );
}
