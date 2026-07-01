const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true });
  const events = [];
  await page.addInitScript(() => {
    window.__mctEvents = [];
  });
  const baseUrl = process.env.MCT_VERIFY_BASE_URL || 'http://127.0.0.1:4174';
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    window.__mctEvents = [];
    window.plausible = (name, payload) => window.__mctEvents.push({ sink: 'plausible', name, payload });
    window.gtag = (...args) => window.__mctEvents.push({ sink: 'gtag', args });
    window.clarity = (...args) => window.__mctEvents.push({ sink: 'clarity', args });
  });
  await page.locator('textarea').first().fill('SOS help');
  await page.waitForTimeout(1100);

  const selectors = {
    translator: '#translator',
    textarea: 'textarea',
    outputPanel: 'text=... --- ...',
    copy: 'button:has-text("Copy")',
    play: 'button:has-text("Play Audio")',
    download: 'button:has-text("Download WAV")',
    share: 'button:has-text("Share")',
    clear: 'button:has-text("Clear")',
    sample: 'button:has-text("Sample: SOS")',
    swap: 'button[title="Swap direction"]',
  };

  const boxes = {};
  for (const [key, selector] of Object.entries(selectors)) {
    const locator = page.locator(selector).first();
    const count = await locator.count();
    boxes[key] = count ? await locator.boundingBox() : null;
  }

  await page.locator(selectors.copy).first().click();
  await page.locator(selectors.share).first().click();
  await page.locator(selectors.sample).first().click();
  await page.locator(selectors.swap).first().click();
  await page.locator(selectors.clear).first().click();
  const interactionEvents = await page.evaluate(() => window.__mctEvents || []);
  await page.reload({ waitUntil: 'networkidle' });
  await page.evaluate(() => {
    window.__mctEvents = [];
    window.plausible = (name, payload) => window.__mctEvents.push({ sink: 'plausible', name, payload });
    window.gtag = (...args) => window.__mctEvents.push({ sink: 'gtag', args });
    window.clarity = (...args) => window.__mctEvents.push({ sink: 'clarity', args });
  });
  await page.locator('textarea').first().fill('TEST');
  await page.waitForTimeout(1100);
  await page.locator(selectors.download).first().click();
  await page.waitForTimeout(700);
  await page.locator(selectors.play).first().click();
  await page.waitForTimeout(300);

  const recorded = await page.evaluate(() => window.__mctEvents || []);
  const pageMetrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollHeight: document.documentElement.scrollHeight,
  }));
  await browser.close();

  const eventName = (e) => e.name || e.args?.[1];
  console.log(JSON.stringify({
    viewport: '390x844',
    boxes,
    pageMetrics,
    interactionEventNames: interactionEvents.map(eventName).filter(Boolean),
    mediaEventNames: recorded.map(eventName).filter(Boolean),
    interactionEventCount: interactionEvents.length,
    mediaEventCount: recorded.length,
  }, null, 2));
})();
