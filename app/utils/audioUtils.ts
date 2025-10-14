/**
 * Audio utility for playing morse code sounds using Web Audio API
 */

const FREQUENCY = 600; // Hz
const DOT_DURATION = 80; // milliseconds
const DASH_DURATION = DOT_DURATION * 3;
const SYMBOL_GAP = DOT_DURATION;
const LETTER_GAP = DOT_DURATION * 3;
const WORD_GAP = DOT_DURATION * 7;

let audioContext: AudioContext | null = null;

/**
 * Get or create audio context
 */
function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
}

/**
 * Play a tone for a specific duration
 */
function playTone(frequency: number, startTime: number, duration: number): void {
  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';

  // Add fade in/out to avoid clicking
  gainNode.gain.setValueAtTime(0, startTime);
  gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.005);
  gainNode.gain.setValueAtTime(0.3, startTime + duration / 1000 - 0.005);
  gainNode.gain.linearRampToValueAtTime(0, startTime + duration / 1000);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration / 1000);
}

/**
 * Play morse code audio
 */
export async function playMorseCode(morseCode: string): Promise<void> {
  const context = getAudioContext();
  let currentTime = context.currentTime;

  for (const symbol of morseCode) {
    if (symbol === '.') {
      playTone(FREQUENCY, currentTime, DOT_DURATION);
      currentTime += (DOT_DURATION + SYMBOL_GAP) / 1000;
    } else if (symbol === '-') {
      playTone(FREQUENCY, currentTime, DASH_DURATION);
      currentTime += (DASH_DURATION + SYMBOL_GAP) / 1000;
    } else if (symbol === ' ') {
      currentTime += LETTER_GAP / 1000;
    } else if (symbol === '/') {
      currentTime += WORD_GAP / 1000;
    }
  }

  // Return promise that resolves when audio finishes
  const totalDuration = (currentTime - context.currentTime) * 1000;
  return new Promise(resolve => setTimeout(resolve, totalDuration));
}

/**
 * Generate morse code audio as a downloadable WAV file
 */
export async function generateMorseAudio(morseCode: string): Promise<Blob> {
  const sampleRate = 44100;
  const duration = calculateDuration(morseCode);
  const numSamples = Math.floor(sampleRate * duration / 1000);
  const audioBuffer = new Float32Array(numSamples);

  let currentSample = 0;

  for (const symbol of morseCode) {
    if (symbol === '.') {
      addTone(audioBuffer, currentSample, DOT_DURATION, sampleRate);
      currentSample += Math.floor((DOT_DURATION + SYMBOL_GAP) * sampleRate / 1000);
    } else if (symbol === '-') {
      addTone(audioBuffer, currentSample, DASH_DURATION, sampleRate);
      currentSample += Math.floor((DASH_DURATION + SYMBOL_GAP) * sampleRate / 1000);
    } else if (symbol === ' ') {
      currentSample += Math.floor(LETTER_GAP * sampleRate / 1000);
    } else if (symbol === '/') {
      currentSample += Math.floor(WORD_GAP * sampleRate / 1000);
    }
  }

  // Convert to WAV format
  return createWAVBlob(audioBuffer, sampleRate);
}

/**
 * Calculate total duration of morse code sequence
 */
function calculateDuration(morseCode: string): number {
  let duration = 0;

  for (const symbol of morseCode) {
    if (symbol === '.') {
      duration += DOT_DURATION + SYMBOL_GAP;
    } else if (symbol === '-') {
      duration += DASH_DURATION + SYMBOL_GAP;
    } else if (symbol === ' ') {
      duration += LETTER_GAP;
    } else if (symbol === '/') {
      duration += WORD_GAP;
    }
  }

  return duration;
}

/**
 * Add tone to audio buffer
 */
function addTone(buffer: Float32Array, startSample: number, duration: number, sampleRate: number): void {
  const numSamples = Math.floor(duration * sampleRate / 1000);

  for (let i = 0; i < numSamples; i++) {
    const sampleIndex = startSample + i;
    if (sampleIndex < buffer.length) {
      // Generate sine wave
      const t = i / sampleRate;
      let amplitude = 0.3 * Math.sin(2 * Math.PI * FREQUENCY * t);

      // Apply fade in/out envelope
      const fadeLength = Math.floor(0.005 * sampleRate);
      if (i < fadeLength) {
        amplitude *= i / fadeLength;
      } else if (i > numSamples - fadeLength) {
        amplitude *= (numSamples - i) / fadeLength;
      }

      buffer[sampleIndex] = amplitude;
    }
  }
}

/**
 * Create WAV blob from audio buffer
 */
function createWAVBlob(audioBuffer: Float32Array, sampleRate: number): Blob {
  const numChannels = 1;
  const bitsPerSample = 16;
  const bytesPerSample = bitsPerSample / 8;
  const blockAlign = numChannels * bytesPerSample;

  const wavBuffer = new ArrayBuffer(44 + audioBuffer.length * bytesPerSample);
  const view = new DataView(wavBuffer);

  // WAV header
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + audioBuffer.length * bytesPerSample, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // fmt chunk size
  view.setUint16(20, 1, true); // audio format (PCM)
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true); // byte rate
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeString(view, 36, 'data');
  view.setUint32(40, audioBuffer.length * bytesPerSample, true);

  // Audio data
  let offset = 44;
  for (let i = 0; i < audioBuffer.length; i++) {
    const sample = Math.max(-1, Math.min(1, audioBuffer[i]));
    view.setInt16(offset, sample * 0x7FFF, true);
    offset += 2;
  }

  return new Blob([wavBuffer], { type: 'audio/wav' });
}

/**
 * Write string to DataView
 */
function writeString(view: DataView, offset: number, string: string): void {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

/**
 * Download audio file
 */
export function downloadAudio(blob: Blob, filename: string = 'morse-code.wav'): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
