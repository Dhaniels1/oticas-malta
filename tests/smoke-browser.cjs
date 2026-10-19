const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  let failed = false;
  for (const [name, url] of [
    ['Netlify', 'https://oticas-malta-demo.netlify.app/'],
    ['GitHub Pages', 'https://dhaniels1.github.io/oticas-malta/']
  ]) {
    const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push('PAGE ERROR: ' + error.stack));
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push('CONSOLE: ' + msg.text());
    });
    page.on('requestfailed', req => errors.push('FAILED RESOURCE: ' + req.url() + ' ' + (req.failure()?.errorText || '')));
    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(3500);
      const status = response ? response.status() : 'no response';
      const title = await page.title();
      const rootText = await page.locator('#root').innerText();
      const hasHero = await page.getByRole('heading', { name: /Um novo jeito/i }).count();
      console.log(JSON.stringify({ target: name, status, title, rootLength: rootText.length, heroFound: !!hasHero, errors }, null, 2));
      await page.screenshot({ path: '/tmp/' + name.replace(/\W/g, '') + '.png', fullPage: true });
      if (!hasHero) failed = true;
    } catch (e) {
      console.error('BROWSER FAILURE ' + name, e.stack);
      console.error('Console messages:', errors);
      failed = true;
    }
    await page.close();
  }
  await browser.close();
  if (failed) process.exitCode = 1;
})().catch(e => { console.error(e); process.exitCode = 1; });
