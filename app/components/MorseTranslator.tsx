'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { textToMorse, morseToText, isValidMorse } from '../utils/morseCode';
import { playMorseCode, generateMorseAudio, downloadAudio, calculateTransmissionDuration } from '../utils/audioUtils';
import CopyButton from './CopyButton';
import { trackEvent } from '@/lib/analytics';
import SignalVisualizer from './SignalVisualizer';

const waveformOptions: { value: OscillatorType; label: string; description: string }[] = [
  { value: 'sine', label: 'Sine', description: 'Classic sidetone, smooth on long practice blocks.' },
  { value: 'square', label: 'Square', description: 'Sharper envelope that cuts through contest noise.' },
  { value: 'triangle', label: 'Triangle', description: 'Soft ramp for accessibility or therapy sessions.' },
  { value: 'sawtooth', label: 'Sawtooth', description: 'Retro radio feel for demos and classroom talks.' },
];

const resultRelatedTools = [
  {
    href: '/morse-code-audio',
    label: 'Audio translator',
    description: 'Tune WPM and WAV output for listening drills.',
  },
  {
    href: '/binary-to-morse',
    label: 'Binary to Morse',
    description: 'Convert 8-bit binary into text, then Morse.',
  },
  {
    href: '/word-decoder',
    label: 'Word decoder',
    description: 'Check hidden text before translating signals.',
  },
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
  const [actionHint, setActionHint] = useState<string | null>(null);
  const toolStartKeys = useRef<Set<string>>(new Set());
  const toolResultKeys = useRef<Set<string>>(new Set());
  const inputFocusTracked = useRef(false);
  const resultUpdateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resultUpdateSequence = useRef(0);

  const inputDirection = mode === 'textToMorse' ? 'text_to_morse' : 'morse_to_text';
  const toolEventProps = useMemo(() => ({
    input_direction: inputDirection,
    variant,
  }), [inputDirection, variant]);

  const isCompact = variant === 'compact';
  const sectionId = variant === 'full' ? 'translator' : undefined;

  useEffect(() => {
    if (!input.trim()) {
      setOutput('');
      setValidationMessage('');
      return;
    }

    const startKey = `${mode}:${variant}`;
    if (!toolStartKeys.current.has(startKey)) {
      toolStartKeys.current.add(startKey);
      trackEvent('tool_start', {
        ...toolEventProps,
        input_length: input.length,
      });
    }

    if (mode === 'textToMorse') {
      const result = textToMorse(input);
      setOutput(result);
      setValidationMessage('');
    } else {
      if (input && !isValidMorse(input)) {
        setValidationMessage('Morse input only accepts dots, dashes, slashes, and spaces.');
      } else {
        setValidationMessage('');
      }
      const result = morseToText(input);
      setOutput(result);
    }
  }, [input, mode, toolEventProps, variant]);

  useEffect(() => {
    if (!input.trim() || !output.trim() || validationMessage) return;

    const eventProps = {
      ...toolEventProps,
      input_length: input.length,
      output_length: output.length,
      event_scope: 'task',
      realtime_preview: false,
    };

    const resultKey = `${mode}:${variant}`;
    if (!toolResultKeys.current.has(resultKey)) {
      toolResultKeys.current.add(resultKey);
      trackEvent('tool_result', eventProps);
      trackEvent('tool_success', eventProps);
      trackEvent('result_action_panel_view', {
        ...eventProps,
        available_actions: showDownload && showAudio ? 'copy_audio_download_share_related' : 'copy_share_related',
      });
    }

    if (resultUpdateTimer.current) {
      clearTimeout(resultUpdateTimer.current);
    }

    resultUpdateTimer.current = setTimeout(() => {
      resultUpdateSequence.current += 1;
      trackEvent('result_update', {
        ...toolEventProps,
        input_length: input.length,
        output_length: output.length,
        event_scope: 'live_preview',
        realtime_preview: true,
        update_sequence: resultUpdateSequence.current,
      });
    }, 900);

    return () => {
      if (resultUpdateTimer.current) {
        clearTimeout(resultUpdateTimer.current);
        resultUpdateTimer.current = null;
      }
    };
  }, [input, mode, output, showAudio, showDownload, toolEventProps, validationMessage, variant]);

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
    trackEvent('swap_direction', {
      ...toolEventProps,
      input_length: input.length,
      output_length: output.length,
      new_direction: newMode === 'textToMorse' ? 'text_to_morse' : 'morse_to_text',
    });
    setMode(newMode);
    setInput(output);
    setOutput(input);
  };

  const handleClear = () => {
    trackEvent('clear_click', {
      ...toolEventProps,
      had_input: Boolean(input),
      had_output: Boolean(output),
    });
    if (!input && !output) {
      setActionHint('Enter text or pick a sample to get started');
      setTimeout(() => setActionHint(null), 2500);
      return;
    }
    setInput('');
    setOutput('');
  };

  const handlePlayAudio = async () => {
    if (!output || isPlaying) {
      if (!output) {
        trackEvent('audio_play_blocked', {
          ...toolEventProps,
          reason: 'empty_output',
        });
        setActionHint('Enter text first to play audio');
        setTimeout(() => setActionHint(null), 2500);
      }
      return;
    }
    trackEvent('audio_play', {
      ...toolEventProps,
      wpm,
      frequency,
      waveform,
    });
    setIsPlaying(true);
    try {
      const morseCode = mode === 'textToMorse' ? output : input;
      await playMorseCode(morseCode, {
        wpm,
        frequency,
        waveform,
        noiseLevel,
      });
      trackEvent('audio_play_success', {
        ...toolEventProps,
        wpm,
        frequency,
        waveform,
      });
    } catch (error) {
      trackEvent('audio_play_error', {
        ...toolEventProps,
        wpm,
        frequency,
        waveform,
        error_name: error instanceof Error ? error.name : 'unknown',
      });
      console.error('Error playing audio:', error);
    } finally {
      setIsPlaying(false);
    }
  };

  const handleDownloadAudio = async () => {
    if (!output || isGenerating) {
      if (!output) {
        trackEvent('download_wav_blocked', {
          ...toolEventProps,
          reason: 'empty_output',
        });
        setActionHint('Enter text first to download WAV');
        setTimeout(() => setActionHint(null), 2500);
      }
      return;
    }
    setIsGenerating(true);
    trackEvent('download_wav_start', {
      ...toolEventProps,
      wpm,
      frequency,
      waveform,
    });
    try {
      const morseCode = mode === 'textToMorse' ? output : input;
      const audioBlob = await generateMorseAudio(morseCode, {
        wpm,
        frequency,
        waveform,
        noiseLevel,
      });
      trackEvent('download_wav', {
        ...toolEventProps,
        wpm,
        frequency,
        waveform,
        audio_bytes: audioBlob.size,
      });
      downloadAudio(audioBlob, 'morse-code.wav');
      trackEvent('download_wav_success', {
        ...toolEventProps,
        wpm,
        frequency,
        waveform,
        audio_bytes: audioBlob.size,
      });
    } catch (error) {
      trackEvent('download_wav_error', {
        ...toolEventProps,
        wpm,
        frequency,
        waveform,
        error_name: error instanceof Error ? error.name : 'unknown',
      });
      console.error('Error generating audio:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShareOutput = async () => {
    if (!output) {
      trackEvent('share_output_blocked', {
        ...toolEventProps,
        reason: 'empty_output',
      });
      setActionHint('Enter text first to share output');
      setTimeout(() => setActionHint(null), 2500);
      return;
    }

    const shareText = `${mode === 'textToMorse' ? 'Morse' : 'Text'} output: ${output}`;
    trackEvent('share_output', {
      ...toolEventProps,
      output_length: output.length,
      share_surface: typeof navigator !== 'undefined' && 'share' in navigator ? 'native' : 'clipboard',
    });

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Morse Code Translator output',
          text: shareText,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
      }
      setActionHint('Output ready to share');
    } catch (error) {
      trackEvent('share_output_error', {
        ...toolEventProps,
        output_length: output.length,
        error_name: error instanceof Error ? error.name : 'unknown',
      });
      setActionHint('Share was canceled or blocked');
    } finally {
      setTimeout(() => setActionHint(null), 2500);
    }
  };

  const handleGuidedSample = (
    example: { label: string; value: string; mode: 'textToMorse' | 'morseToText' },
    location: string,
  ) => {
    trackEvent('empty_state_sample_click', {
      ...toolEventProps,
      sample_label: example.label,
      sample_direction: example.mode === 'textToMorse' ? 'text_to_morse' : 'morse_to_text',
      location,
    });
    setMode(example.mode);
    setInput(example.value);
    setActiveExample(example.label);
    setActionHint('Sample loaded. Copy, play, download, or share the result.');
    setTimeout(() => setActionHint(null), 2500);
  };

  const handleInputFocus = () => {
    if (inputFocusTracked.current) return;
    inputFocusTracked.current = true;
    trackEvent('input_focus', {
      ...toolEventProps,
      location: variant === 'full' ? 'home_translator' : 'compact_translator',
    });
  };

  const statCards = [
    { label: mode === 'textToMorse' ? 'Input words' : 'Input groups', value: inputWords },
    { label: 'Input characters', value: inputCharacters },
    { label: 'Output characters', value: outputCharacters },
    { label: 'Dits / Dahs', value: signalSymbols },
    { label: 'Transmission time', value: `${transmissionSeconds}s` },
  ];

  const quickExamples: { label: string; value: string; mode: 'textToMorse' | 'morseToText' }[] = [
    { label: 'Sample: SOS', value: 'SOS', mode: 'textToMorse' },
    { label: 'Sample: HAM QSO', value: '.... .- -- / .- - / 23', mode: 'morseToText' },
  ];

  useEffect(() => {
    const matchingExample = quickExamples.find(
      (example) => example.value === input && example.mode === mode,
    );
    setActiveExample(matchingExample ? matchingExample.label : null);
  }, [input, mode]);

  const translatorPanel = (
    <div className="glass-panel p-4 md:p-8 space-y-4 md:space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-1">Live Translator</p>
          <h2 className="text-xl md:text-3xl font-bold text-white">Text ↔ Morse Cockpit</h2>
        </div>
        <button
          onClick={handleModeToggle}
          className="btn-ghost text-sm px-3 py-1.5"
          type="button"
          title="Swap direction"
        >
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="hidden sm:inline">Swap</span>
          </span>
        </button>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        <div className="glass-panel--light p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-[#0b1f3a]">{mode === 'textToMorse' ? 'Text Input' : 'Morse Input'}</p>
            <span className="metric-pill text-[#0b1f3a]">{inputCharacters} chars</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={handleInputFocus}
            placeholder={mode === 'textToMorse' ? 'Type or paste text...' : 'Type morse (., - and /)'}
            className="w-full h-24 md:h-36 p-4 rounded-xl border border-[#e0e5ff] bg-white text-[#0b1f3a] focus:outline-none focus:ring-2 focus:ring-[#0058a3]"
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
          <div className="flex-1 rounded-xl border border-[#e0e5ff] bg-[#f5f7ff] text-[#0b1f3a] p-4 overflow-y-auto min-h-[5rem] md:min-h-[6rem]">
            {output || <span className="text-[#8a94b7]">Translation will appear here…</span>}
          </div>
          {output ? (
            <div className="rounded-2xl border border-[#d9e1f7] bg-white/75 p-3 space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4b587c]">Next action</p>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
                <CopyButton
                  text={output}
                  label="Copy result"
                  className="justify-center sm:justify-start"
                  eventProps={toolEventProps}
                />
                {showAudio && (
                  <button
                    onClick={handlePlayAudio}
                    className="btn-primary text-sm px-4 py-2 justify-center"
                    type="button"
                  >
                    {isPlaying ? 'Playing…' : 'Play audio'}
                  </button>
                )}
                {showDownload && (
                  <button
                    onClick={handleDownloadAudio}
                    className="btn-primary text-sm px-4 py-2 bg-[#0058a3] text-white shadow-[#0058a3]/40 hover:bg-[#0a6fd0] justify-center"
                    type="button"
                  >
                    {isGenerating ? 'Generating…' : 'Download WAV'}
                  </button>
                )}
                <button
                  onClick={handleShareOutput}
                  className="btn-ghost text-sm px-4 py-2 justify-center"
                  type="button"
                >
                  Share output
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] font-semibold text-[#0b1f3a]">
                <span className="rounded-lg bg-[#edf2ff] px-2 py-1">1 Translate</span>
                <span className="rounded-lg bg-[#fff8d6] px-2 py-1">2 Listen</span>
                <span className="rounded-lg bg-[#edf2ff] px-2 py-1">3 Copy / WAV / Share</span>
              </div>
              <div className="rounded-xl border border-[#e0e5ff] bg-[#f5f7ff] p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4b587c]">Related tools after result</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  {resultRelatedTools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="rounded-lg border border-[#0058a3]/15 bg-white px-3 py-2 text-left hover:border-[#0058a3]/45 hover:shadow-sm transition-all"
                      data-analytics-event="related_tool_click"
                      data-analytics-prop-tool={tool.label}
                      data-analytics-prop-location="translator_result_panel"
                    >
                      <span className="block text-xs font-bold text-[#0b1f3a]">{tool.label}</span>
                      <span className="mt-1 block text-[11px] leading-snug text-[#4b587c]">{tool.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-[#d9e1f7] bg-white/75 p-3 space-y-3">
              <p className="text-sm font-semibold text-[#0b1f3a]">Need a result first?</p>
              <p className="text-xs text-[#4b587c]">Type in the input box or load a sample. Result actions appear only after translation, which cuts empty clicks and keeps the task path clear.</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {quickExamples.map((example) => (
                  <button
                    key={`empty-${example.label}`}
                    onClick={() => handleGuidedSample(example, 'empty_result_panel')}
                    className="rounded-xl border border-[#0058a3]/20 bg-[#f5f7ff] px-3 py-2 text-left text-sm font-semibold text-[#0b1f3a] hover:border-[#0058a3]/50 hover:bg-white transition-colors"
                    type="button"
                  >
                    {example.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <p className="text-sm text-white/70 mb-3">Quick examples</p>
        <div className="flex flex-wrap gap-3">
          {quickExamples.map((example) => (
            <button
              key={example.label}
              onClick={() => {
                trackEvent('sample_click', {
                  ...toolEventProps,
                  sample_label: example.label,
                  sample_direction: example.mode === 'textToMorse' ? 'text_to_morse' : 'morse_to_text',
                });
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

      <div className="flex flex-wrap gap-3 items-center">
        <button
          onClick={handleClear}
          className="btn-ghost text-sm"
          type="button"
        >
          Clear
        </button>
        {actionHint && (
          <span className="text-xs text-[#ff8c00] flex items-center gap-1 animate-pulse">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {actionHint}
          </span>
        )}
      </div>
      {!input && !output && (
        <p className="text-xs text-white/50 mt-2">
          Enter text or pick a sample above; result actions appear after the first translation.
        </p>
      )}
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
          <div className="hidden lg:block">{telemetryPanel}</div>
        </div>
      )}

      {!isCompact && (
        <>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="glass-panel p-4 md:p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Speed (WPM)</h3>
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
              <p className="text-xs text-white/60">Match contest speeds or slow down for onboarding.</p>
            </div>

            <div className="glass-panel p-4 md:p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Carrier Frequency</h3>
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
              <p className="text-xs text-white/60">Align sidetone with radios or speakers.</p>
            </div>

            <div className="glass-panel p-4 md:p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Noise / QRM</h3>
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
              <p className="text-xs text-white/60">Simulate contest chaos or therapy comfort.</p>
            </div>
          </div>

          <div className="glass-panel p-4 md:p-6">
            <div className="grid gap-3 md:grid-cols-2">
              {waveformOptions.map((option) => (
                <label
                  key={option.value}
                  className={`rounded-2xl border p-3 md:p-4 cursor-pointer transition-all ${waveform === option.value ? 'border-[#ffd800] bg-white/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-base font-semibold text-white">{option.label}</p>
                    <input
                      type="radio"
                      name="waveform"
                      value={option.value}
                      checked={waveform === option.value}
                      onChange={() => setWaveform(option.value)}
                      className="accent-[#ffd800]"
                    />
                  </div>
                  <p className="text-xs text-white/60">{option.description}</p>
                </label>
              ))}
            </div>
          </div>

        </>
      )}
    </section>
  );
}
