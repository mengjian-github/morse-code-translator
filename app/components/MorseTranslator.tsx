'use client';

import { useState, useEffect } from 'react';
import { textToMorse, morseToText, isValidMorse } from '../utils/morseCode';
import { playMorseCode, generateMorseAudio, downloadAudio } from '../utils/audioUtils';
import CopyButton from './CopyButton';

interface MorseTranslatorProps {
  defaultMode?: 'textToMorse' | 'morseToText';
  showAudio?: boolean;
  showDownload?: boolean;
  className?: string;
}

export default function MorseTranslator({
  defaultMode = 'textToMorse',
  showAudio = true,
  showDownload = true,
  className = ''
}: MorseTranslatorProps) {
  const [mode, setMode] = useState<'textToMorse' | 'morseToText'>(defaultMode);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (mode === 'textToMorse') {
      setOutput(textToMorse(input));
    } else {
      setOutput(morseToText(input));
    }
  }, [input, mode]);

  const handleModeToggle = () => {
    const newMode = mode === 'textToMorse' ? 'morseToText' : 'textToMorse';
    setMode(newMode);
    // Swap input and output
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
      await playMorseCode(morseCode);
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
      const audioBlob = await generateMorseAudio(morseCode);
      downloadAudio(audioBlob, 'morse-code.wav');
    } catch (error) {
      console.error('Error generating audio:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExampleText = () => {
    setMode('textToMorse');
    setInput('HELLO WORLD');
  };

  const handleExampleMorse = () => {
    setMode('morseToText');
    setInput('... --- ...');
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 ${className}`}>
      {/* Mode Toggle */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {mode === 'textToMorse' ? 'Text to Morse Code' : 'Morse Code to Text'}
        </h2>
        <button
          onClick={handleModeToggle}
          className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
          title="Switch conversion mode"
        >
          <svg className="w-6 h-6 text-primary-700 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </button>
      </div>

      {/* Input Area */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {mode === 'textToMorse' ? 'Enter Text' : 'Enter Morse Code'}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === 'textToMorse' ? 'Type your text here...' : 'Type morse code here... (use . and - and spaces)'}
          className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Output Area */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {mode === 'textToMorse' ? 'Morse Code Output' : 'Text Output'}
        </label>
        <div className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white overflow-y-auto">
          {output || <span className="text-gray-400">Translation will appear here...</span>}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <CopyButton text={output} label="Copy" />

        <button
          onClick={handleClear}
          disabled={!input && !output}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Clear
        </button>

        {showAudio && (
          <button
            onClick={handlePlayAudio}
            disabled={!output || isPlaying}
            className="px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            {isPlaying ? (
              <>
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Playing...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Audio
              </>
            )}
          </button>
        )}

        {showDownload && (
          <button
            onClick={handleDownloadAudio}
            disabled={!output || isGenerating}
            className="px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            {isGenerating ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Generating...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Audio
              </>
            )}
          </button>
        )}
      </div>

      {/* Example Buttons */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Try these examples:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleExampleText}
            className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors font-medium"
          >
            "HELLO WORLD"
          </button>
          <button
            onClick={handleExampleMorse}
            className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors font-medium"
          >
            "... --- ..." (SOS)
          </button>
        </div>
      </div>
    </div>
  );
}
