import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollToTopButton from '../components/ScrollToTopButton';
import PictureDecoderConverter from '../components/PictureDecoderConverter';

export const metadata: Metadata = {
  title: 'Morse Code Picture Decoder - Decode Morse Code from Images',
  description: 'Free online morse code picture decoder. Upload images containing morse code patterns and decode them instantly. Extract morse code from photos, screenshots, and visual signals.',
  keywords: ['morse code picture', 'morse code image decoder', 'decode morse from picture', 'morse code photo decoder', 'image to morse code', 'visual morse decoder'],
  alternates: {
    canonical: 'https://morsecodetranslator.app/picture-decoder'
  },
  openGraph: {
    title: 'Morse Code Picture Decoder - Decode Morse Code from Images',
    description: 'Upload images containing morse code patterns and decode them instantly with our free online picture decoder.',
    url: 'https://morsecodetranslator.app/picture-decoder',
  }
};

export default function PictureDecoderPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Morse Code Picture Decoder',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free online tool to decode morse code from images, photos, and screenshots.',
    url: 'https://morsecodetranslator.app/picture-decoder'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Morse Code <span className="text-primary-600 dark:text-primary-400">Picture Decoder</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Upload and decode morse code from images, photos, screenshots, and visual morse code patterns. Extract hidden morse code messages from pictures instantly with our free online decoder.
          </p>
        </section>

        <section className="mb-16">
          <PictureDecoderConverter />
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Understanding Morse Code Picture Decoding
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Morse code picture decoding is the process of extracting and translating morse code patterns from visual images. Whether morse code appears as dots and dashes written on paper, light flashes captured in photographs, or patterns embedded in screenshots, our morse code picture decoder can identify and translate these visual signals into readable text. This technology combines optical character recognition principles with morse code translation algorithms to make visual morse code accessible to everyone.
              </p>
              <p>
                Visual morse code appears in many contexts throughout history and modern culture. During World War II, prisoners of war famously used morse code in photographs by positioning their hands or blinking in patterns during filming. Modern geocaching enthusiasts hide morse code messages in photos as puzzle elements. Escape room designers incorporate morse code pictures into their challenges. Amateur photographers create artistic morse code compositions that spell hidden messages. Our morse code picture decoder helps reveal these hidden communications regardless of how they are presented visually.
              </p>
              <p>
                The morse code picture decoder works best with clear, high-contrast images where morse code patterns are distinct and visible. Black text on white backgrounds, illuminated morse signals in dark environments, and carefully written morse code patterns all decode reliably. For handwritten morse code pictures, consistent dot and dash notation improves accuracy. When photographing morse code for decoding, ensure good lighting, minimal blur, and sufficient image resolution. Screenshots of digital morse code text typically produce excellent decoding results with our picture decoder tool.
              </p>
              <p>
                Educational applications for morse code picture decoding include historical research where students analyze wartime photographs for hidden messages, media literacy projects examining visual communication methods, and STEM education activities combining computer vision with telecommunications history. Teachers use morse code picture puzzles to engage students across multiple disciplines. Museum exhibits featuring historical morse code equipment can enhance visitor experiences by allowing guests to decode morse code pictures from archival photographs using their smartphones.
              </p>
              <p>
                Modern applications of morse code picture decoding extend beyond historical interest. Security researchers study steganography techniques where morse code patterns hide within larger images. Digital artists create works incorporating morse code that reveal messages only when decoded. Social media users share morse code picture puzzles that challenge followers to decode hidden messages. Event organizers create scavenger hunts where participants photograph morse code clues and decode them using tools like our picture decoder. The ability to decode morse code from pictures bridges traditional morse code knowledge with contemporary visual media.
              </p>
              <p>
                When using a morse code picture decoder, understanding the input format expectations helps achieve better results. Clear distinction between dots and dashes matters more than artistic style. Sequential arrangement from left to right or top to bottom maintains message order. Consistent spacing between characters prevents misinterpretation. For morse code transmitted via light signals captured in long-exposure photography, the pattern clarity depends on exposure duration and signal timing precision. Our decoder handles various visual morse code representations to accommodate different picture types and capture methods.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How to Use the Morse Code Picture Decoder
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Upload Your Image
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Click the upload button and select an image containing morse code from your device. Our picture decoder supports common formats including JPG, PNG, and GIF. For best results, use clear images with good contrast between morse code marks and background.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Extract Morse Code Text
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    If your image contains visible morse code text (dots and dashes), manually enter the extracted morse code into the decoder input field. This step works for photographs of written morse code, screenshots containing morse patterns, or any image where morse code is readable.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Decode to Readable Text
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our morse code picture decoder instantly translates the extracted morse code into plain text. The decoded message appears in real-time as you enter the morse code patterns. Use spacing between characters to ensure accurate translation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Copy and Share Results
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    After decoding morse code from your picture, use the copy button to save the decoded text. Share your findings with friends solving the same puzzle, or document decoded historical morse code photographs for research purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Types of Morse Code Pictures You Can Decode
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Written Morse Code Photos
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Photographs of morse code written on paper, whiteboards, signs, or any surface. Common in geocaching clues, escape room puzzles, educational materials, and scavenger hunt challenges where morse code is physically written and photographed.
                </p>
              </div>

              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Digital Screenshots
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Screen captures containing morse code from websites, applications, games, or digital documents. These typically decode with high accuracy due to consistent digital formatting and clear character rendering in screenshots.
                </p>
              </div>

              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Light Signal Photographs
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Long-exposure photos capturing morse code transmitted via flashlight, lighthouse signals, or LED patterns. These artistic images show morse code as light trails and require careful observation to extract the dot-dash patterns for decoding.
                </p>
              </div>

              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Historical Morse Code Documents
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Archival photographs and scanned documents containing historical morse code transmissions, telegraph records, or wartime communications. Researchers and history enthusiasts use picture decoders to translate these preserved morse code messages.
                </p>
              </div>

              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Artistic Morse Code Designs
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Creative works incorporating morse code patterns into jewelry designs, tattoo photos, artwork images, or decorative elements. Artists often embed personal messages in morse code that viewers can decode from shared pictures.
                </p>
              </div>

              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Social Media Puzzle Images
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Images shared on social platforms containing morse code challenges, where creators embed messages for followers to decode. Popular in puzzle communities, educational accounts, and interactive social media content.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Tips for Better Picture Decoding Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Ensure Good Image Quality
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use high-resolution images with minimal compression artifacts. Sharp, focused photographs decode more accurately than blurry or pixelated pictures. For smartphone photos, ensure adequate lighting and hold the camera steady to avoid motion blur.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Maximize Contrast Levels
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pictures with strong contrast between morse code marks and background produce better decoding results. Dark morse code on light backgrounds or illuminated signals in dark settings work best. Edit photos to increase contrast if needed before decoding.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Frame Morse Code Clearly
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Position morse code patterns prominently in your photograph frame. Avoid excessive background clutter that might interfere with pattern recognition. Capture the entire morse code message within a single image when possible.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Verify Spacing Consistency
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  When manually extracting morse code from pictures, pay attention to spacing between characters and words. Standard morse code uses specific spacing rules: short spaces between symbols, medium between letters, long between words. Maintaining these distinctions improves decoding accuracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions About Picture Decoding
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Can the picture decoder automatically extract morse code from images?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Currently, our tool requires manual extraction of morse code patterns from pictures. You view your image and enter the visible morse code (dots and dashes) into the decoder. Future versions may include optical character recognition for automatic extraction. This manual approach ensures accuracy across diverse image types and morse code presentations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  What image formats work with the morse code picture decoder?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our picture decoder supports all standard image formats including JPG, JPEG, PNG, GIF, and WebP. For best results, use lossless formats like PNG when possible, as they maintain morse code pattern clarity better than heavily compressed JPG images. High-resolution images generally decode more accurately than low-resolution pictures.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  How do I decode morse code from low-quality or historical photographs?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  For degraded or historical images, first try enhancing the picture using photo editing software. Increase contrast, adjust brightness, and sharpen edges to make morse code patterns more visible. Zoom in on morse code sections and carefully transcribe each dot and dash pattern. Cross-reference uncertain characters with context clues in the decoded message.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Can I decode morse code from video frames or animated images?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes, extract individual frames from videos showing morse code patterns and decode them as still images. For blinking light morse code in videos, note the timing and pattern of flashes frame by frame. Animated GIF images containing morse code can be decoded by viewing each frame. Pause videos at clear moments showing complete morse code characters for easiest transcription.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Is my uploaded picture data private and secure?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Absolutely. When you upload images to our morse code picture decoder, all processing happens locally in your browser. Your pictures never leave your device and are not sent to any servers. This client-side processing ensures complete privacy for sensitive images containing morse code messages. Your decoded content remains entirely private.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Related Morse Code Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Text to Morse Translator
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert regular text to morse code instantly with audio playback and download options.
              </p>
            </Link>

            <Link href="/binary-to-morse" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Binary to Morse Converter
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transform binary code into morse code patterns for digital encoding projects.
              </p>
            </Link>

            <Link href="/identifier-encoder" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Identifier Encoder
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Encode call signs, device IDs, and asset tags into morse code for identification systems.
              </p>
            </Link>

            <Link href="/word-decoder" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Word Decoder & Cryptogram
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Solve cryptograms and decode various cipher types including morse code puzzles.
              </p>
            </Link>

            <Link href="/cryptic-code-translator" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cryptic Code Translator
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Decrypt various encoding methods and translate cryptic codes to readable text.
              </p>
            </Link>

            <Link href="/hexadecimal-cipher" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Hexadecimal Cipher Converter
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert hexadecimal code to morse for programmer-friendly encoding workflows.
              </p>
            </Link>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Decode Morse Code from Pictures Now
          </h2>
          <p className="text-xl text-primary-50 mb-6 max-w-2xl mx-auto">
            Upload your images and extract hidden morse code messages instantly. Free, private, and easy to use.
          </p>
          <ScrollToTopButton />
        </section>
      </div>
    </>
  );
}
