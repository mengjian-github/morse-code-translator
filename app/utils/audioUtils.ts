/**
 * Audio utility for playing morse code sounds using Web Audio API
 */

const DEFAULT_WPM = 18;
const DEFAULT_FREQUENCY = 620; // Hz
const DEFAULT_VOLUME = 0.32;
const DEFAULT_WAVEFORM: OscillatorType = 'sine';

export interface MorseAudioOptions {
  wpm?: number;
  frequency?: number;
  waveform?: OscillatorType;
  volume?: number;
  noiseLevel?: number; // 0 - 1 range to simulate QRM/QRN
}

interface TimingEnvelope {
  dot: number;
  dash: number;
  symbolGap: number;
  letterGap: number;
  wordGap: number;
}

let audioContext: AudioContext | null = null;

function getTimingEnvelope(wpm: number = DEFAULT_WPM): TimingEnvelope {
  const constrainedWpm = Math.max(5, Math.min(60, wpm));
  const dot = 1200 / constrainedWpm; // standard PARIS timing in ms
  return {
    dot,
    dash: dot * 3,
    symbolGap: dot,
    letterGap: dot * 3,
    wordGap: dot * 7,
  };
}

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
function playTone(
  frequency: number,
  startTime: number,
  duration: number,
  waveform: OscillatorType = DEFAULT_WAVEFORM,
  volume: number = DEFAULT_VOLUME,
  noiseLevel: number = 0,
): void {
  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.frequency.value = frequency;
  oscillator.type = waveform;

  // Add fade in/out to avoid clicking
  gainNode.gain.setValueAtTime(0, startTime);
  gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.005);
  gainNode.gain.setValueAtTime(volume, startTime + duration / 1000 - 0.005);
  gainNode.gain.linearRampToValueAtTime(0, startTime + duration / 1000);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration / 1000);

  if (noiseLevel > 0) {
    const noiseBuffer = context.createBuffer(1, Math.ceil(duration / 1000 * context.sampleRate), context.sampleRate);
    const channelData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < channelData.length; i++) {
      channelData[i] = (Math.random() * 2 - 1) * noiseLevel * volume;
    }
    const noiseSource = context.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.connect(gainNode);
    noiseSource.start(startTime);
    noiseSource.stop(startTime + duration / 1000);
  }
}

/**
 * Play morse code audio
 */
export async function playMorseCode(morseCode: string, options: MorseAudioOptions = {}): Promise<void> {
  const {
    wpm = DEFAULT_WPM,
    frequency = DEFAULT_FREQUENCY,
    waveform = DEFAULT_WAVEFORM,
    volume = DEFAULT_VOLUME,
    noiseLevel = 0,
  } = options;
  const timings = getTimingEnvelope(wpm);
  const context = getAudioContext();
  let currentTime = context.currentTime;

  for (const symbol of morseCode) {
    if (symbol === '.') {
      playTone(frequency, currentTime, timings.dot, waveform, volume, noiseLevel);
      currentTime += (timings.dot + timings.symbolGap) / 1000;
    } else if (symbol === '-') {
      playTone(frequency, currentTime, timings.dash, waveform, volume, noiseLevel);
      currentTime += (timings.dash + timings.symbolGap) / 1000;
    } else if (symbol === ' ') {
      currentTime += timings.letterGap / 1000;
    } else if (symbol === '/') {
      currentTime += timings.wordGap / 1000;
    }
  }

  // Return promise that resolves when audio finishes
  const totalDuration = (currentTime - context.currentTime) * 1000;
  return new Promise(resolve => setTimeout(resolve, totalDuration));
}

/**
 * Generate morse code audio as a downloadable WAV file
 */
export async function generateMorseAudio(morseCode: string, options: MorseAudioOptions = {}): Promise<Blob> {
  const {
    wpm = DEFAULT_WPM,
    frequency = DEFAULT_FREQUENCY,
    waveform = DEFAULT_WAVEFORM,
    volume = DEFAULT_VOLUME,
    noiseLevel = 0,
  } = options;
  const timings = getTimingEnvelope(wpm);
  const sampleRate = 44100;
  const duration = calculateTransmissionDuration(morseCode, wpm);
  const numSamples = Math.floor(sampleRate * duration / 1000);
  const audioBuffer = new Float32Array(numSamples);

  let currentSample = 0;

  for (const symbol of morseCode) {
    if (symbol === '.') {
      addTone(audioBuffer, currentSample, timings.dot, sampleRate, frequency, waveform, volume, noiseLevel);
      currentSample += Math.floor((timings.dot + timings.symbolGap) * sampleRate / 1000);
    } else if (symbol === '-') {
      addTone(audioBuffer, currentSample, timings.dash, sampleRate, frequency, waveform, volume, noiseLevel);
      currentSample += Math.floor((timings.dash + timings.symbolGap) * sampleRate / 1000);
    } else if (symbol === ' ') {
      currentSample += Math.floor(timings.letterGap * sampleRate / 1000);
    } else if (symbol === '/') {
      currentSample += Math.floor(timings.wordGap * sampleRate / 1000);
    }
  }

  // Convert to WAV format
  return createWAVBlob(audioBuffer, sampleRate);
}

/**
 * Calculate total duration of morse code sequence
 */
export function calculateTransmissionDuration(morseCode: string, wpm: number = DEFAULT_WPM): number {
  const timings = getTimingEnvelope(wpm);
  let duration = 0;

  for (const symbol of morseCode) {
    if (symbol === '.') {
      duration += timings.dot + timings.symbolGap;
    } else if (symbol === '-') {
      duration += timings.dash + timings.symbolGap;
    } else if (symbol === ' ') {
      duration += timings.letterGap;
    } else if (symbol === '/') {
      duration += timings.wordGap;
    }
  }

  return duration;
}

/**
 * Add tone to audio buffer
 */
function addTone(
  buffer: Float32Array,
  startSample: number,
  duration: number,
  sampleRate: number,
  frequency: number,
  waveform: OscillatorType,
  volume: number,
  noiseLevel: number,
): void {
  const numSamples = Math.floor(duration * sampleRate / 1000);

  for (let i = 0; i < numSamples; i++) {
    const sampleIndex = startSample + i;
    if (sampleIndex < buffer.length) {
      // Generate synthetic waveform sample
      const t = i / sampleRate;
      let amplitude = volume * getWaveformSample(waveform, frequency, t);

      // Apply fade in/out envelope
      const fadeLength = Math.floor(0.005 * sampleRate);
      if (i < fadeLength) {
        amplitude *= i / fadeLength;
      } else if (i > numSamples - fadeLength) {
        amplitude *= (numSamples - i) / fadeLength;
      }

      const noise = noiseLevel > 0 ? (Math.random() * 2 - 1) * noiseLevel * volume : 0;
      buffer[sampleIndex] = amplitude + noise;
    }
  }
}

function getWaveformSample(type: OscillatorType, frequency: number, t: number): number {
  const phase = 2 * Math.PI * frequency * t;
  const cycles = frequency * t;
  switch (type) {
    case 'square':
      return Math.sign(Math.sin(phase));
    case 'triangle':
      return (2 / Math.PI) * Math.asin(Math.sin(phase));
    case 'sawtooth':
      return 2 * (cycles - Math.floor(cycles + 0.5));
    case 'sine':
    default:
      return Math.sin(phase);
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
