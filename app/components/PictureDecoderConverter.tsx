'use client';

import { useState, useEffect } from 'react';
import { morseToText, isValidMorse } from '../utils/morseCode';
import CopyButton from './CopyButton';

export default function PictureDecoderConverter() {
  const [imagePreview, setImagePreview] = useState<string>('');
  const [morseInput, setMorseInput] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!morseInput.trim()) {
      setDecodedText('');
      setError('');
      return;
    }

    if (!isValidMorse(morseInput)) {
      setError('Invalid morse code. Use only dots (.), dashes (-), spaces, and forward slashes (/).');
      setDecodedText('');
      return;
    }

    try {
      const decoded = morseToText(morseInput);
      setDecodedText(decoded);
      setError('');
    } catch (err) {
      setError('Error decoding morse code. Please check your input.');
      setDecodedText('');
    }
  }, [morseInput]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target?.result as string);
      setError('');
    };
    reader.readAsDataURL(file);
  };

  const handleClear = () => {
    setImagePreview('');
    setMorseInput('');
    setDecodedText('');
    setError('');
  };

  const handleExample = () => {
    setMorseInput('.... . .-.. .-.. --- / .-- --- .-. .-.. -..'); // "HELLO WORLD"
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Morse Code Picture Decoder Tool
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Upload Image Containing Morse Code
        </label>
        <div className="flex items-center gap-4">
          <label className="px-4 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all cursor-pointer">
            Choose Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            JPG, PNG, GIF supported
          </span>
        </div>
      </div>

      {imagePreview && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Uploaded Image Preview
          </label>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
            <img
              src={imagePreview}
              alt="Uploaded morse code"
              className="max-w-full max-h-96 mx-auto object-contain"
            />
          </div>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Extract Morse Code from Image (Enter Manually)
        </label>
        <textarea
          value={morseInput}
          onChange={(e) => setMorseInput(e.target.value)}
          placeholder=".- -... -.-. / .... . .-.. .-.. --- (dots, dashes, and spaces)"
          className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-mono focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Decoded Text
        </label>
        <div className="w-full min-h-[80px] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
          {decodedText || <span className="text-gray-400">Decoded message will appear here...</span>}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <CopyButton text={decodedText} label="Copy Decoded Text" />
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        >
          Clear All
        </button>
        <button
          onClick={handleExample}
          className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800 transition-all font-medium"
        >
          Try Example
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How to Use:</h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>1. Upload an image containing morse code patterns</li>
          <li>2. View the uploaded image to identify morse code dots and dashes</li>
          <li>3. Manually type the morse code you see into the input field</li>
          <li>4. The decoder automatically translates morse to readable text</li>
          <li>5. Use dots (.) for short signals and dashes (-) for long signals</li>
          <li>6. Separate letters with spaces and words with forward slashes (/)</li>
        </ul>
      </div>
    </div>
  );
}
