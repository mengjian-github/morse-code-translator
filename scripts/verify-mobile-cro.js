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
  const emptyActionButtons = await page.locator('button:has-text("Copy"), button:has-text("Play audio"), button:has-text("Download WAV"), button:has-text("Share output")').count();
  await page.locator('button:has-text("Sample: SOS")').first().click();
  const emptyActionEvents = await page.evaluate(() => window.__mctEvents || []);
  await page.evaluate(() => {
    window.__mctEvents = [];
  });
  await page.locator('textarea').first().fill('SOS help');
  await page.waitForTimeout(1100);

  const selectors = {
    translator: '#translator',
    textarea: 'textarea',
    outputPanel: 'text=... --- ...',
    copy: 'button:has-text("Copy")',
    play: 'button:has-text("Play audio")',
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
  const emptyActionEventNames = emptyActionEvents.map(eventName).filter(Boolean);
  const requiredEmptyEvents = ['empty_state_sample_click'];
  const missingEmptyEvents = requiredEmptyEvents.filter((name) => !emptyActionEventNames.includes(name));
  console.log(JSON.stringify({
    viewport: '390x844',
    boxes,
    pageMetrics,
    emptyActionButtons,
    emptyActionEventNames,
    missingEmptyEvents,
    interactionEventNames: interactionEvents.map(eventName).filter(Boolean),
    mediaEventNames: recorded.map(eventName).filter(Boolean),
    emptyActionEventCount: emptyActionEvents.length,
    interactionEventCount: interactionEvents.length,
    mediaEventCount: recorded.length,
  }, null, 2));

  if (missingEmptyEvents.length > 0) {
    throw new Error(`Missing guided empty-state telemetry: ${missingEmptyEvents.join(', ')}`);
  }

  if (emptyActionButtons > 0) {
    throw new Error(`Empty result should show guided samples instead of unavailable action buttons; found ${emptyActionButtons}`);
  }

  if (pageMetrics.scrollWidth > pageMetrics.clientWidth) {
    throw new Error(`Mobile horizontal overflow: ${pageMetrics.scrollWidth} > ${pageMetrics.clientWidth}`);
  }
})();
