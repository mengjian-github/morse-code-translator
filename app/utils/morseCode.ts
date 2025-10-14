// Morse code mapping
const morseCodeMap: { [key: string]: string } = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..',
  "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
  '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.',
  '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
  ' ': '/'
};

// Reverse mapping for morse to text
const textMap: { [key: string]: string } = Object.entries(morseCodeMap).reduce(
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

/**
 * Convert text to morse code
 */
export function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map(char => morseCodeMap[char] || char)
    .join(' ');
}

/**
 * Convert morse code to text
 */
export function morseToText(morse: string): string {
  return morse
    .split(' ')
    .map(code => textMap[code] || '')
    .join('');
}

/**
 * Validate if input is valid morse code
 */
export function isValidMorse(input: string): boolean {
  const morsePattern = /^[.\-\/\s]+$/;
  return morsePattern.test(input);
}

/**
 * Convert text to binary
 */
export function textToBinary(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}

/**
 * Convert binary to text
 */
export function binaryToText(binary: string): string {
  return binary
    .split(' ')
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join('');
}

/**
 * Convert binary to morse code
 */
export function binaryToMorse(binary: string): string {
  try {
    const text = binaryToText(binary);
    return textToMorse(text);
  } catch (error) {
    return '';
  }
}

/**
 * Convert text to hexadecimal
 */
export function textToHex(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0'))
    .join(' ');
}

/**
 * Convert hexadecimal to text
 */
export function hexToText(hex: string): string {
  return hex
    .split(' ')
    .map(h => String.fromCharCode(parseInt(h, 16)))
    .join('');
}

/**
 * Convert hexadecimal to morse code
 */
export function hexToMorse(hex: string): string {
  try {
    const text = hexToText(hex);
    return textToMorse(text);
  } catch (error) {
    return '';
  }
}

/**
 * Get morse code character map
 */
export function getMorseCodeMap(): { [key: string]: string } {
  return { ...morseCodeMap };
}

/**
 * Phone keypad mapping (T9)
 */
export const phoneKeypadMap: { [key: string]: string } = {
  '2': 'ABC', '3': 'DEF', '4': 'GHI', '5': 'JKL',
  '6': 'MNO', '7': 'PQRS', '8': 'TUV', '9': 'WXYZ',
  '0': ' ', '1': '.,?!'
};

/**
 * Convert phone keypad to text (simple mode - first letter)
 */
export function phoneKeypadToText(input: string): string {
  return input
    .split('')
    .map(num => phoneKeypadMap[num]?.[0] || num)
    .join('');
}

/**
 * Caesar cipher encode
 */
export function caesarEncode(text: string, shift: number): string {
  return text
    .split('')
    .map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - base + shift) % 26) + base);
      }
      return char;
    })
    .join('');
}

/**
 * Caesar cipher decode
 */
export function caesarDecode(text: string, shift: number): string {
  return caesarEncode(text, 26 - shift);
}
