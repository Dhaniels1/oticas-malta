const { chromium } = require('playwright-core');

const sites = [
  ['GitHub Pages', 'https://dhaniels1.github.io/oticas-malta/']
];

async function inspect(browser, name, url) {
  let latest = {};
  for (let attempt = 1; attempt <= 10; attempt++) {
    const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push('PAGE ERROR: ' + error.stack));
    page.on('console', msg => {
      if (['error', 'warning'].includes(msg.type())) errors.push('CONSOLE ' + msg.type() + ': ' + msg.text());
    });
    page.on('requestfailed', req => errors.push('FAILED RESOURCE: ' + req.url() + ' ' + (req.failure()?.errorText || '')));
    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(3000);
      const title = await page.title();
      const rootLength = (await page.locator('#root').innerText()).length;
      const heroFound = await page.getByRole('heading', { name: /Um novo jeito/i }).count() > 0;
      latest = { target: name, attempt, status: response?.status(), title, rootLength, heroFound, errors };
      if (heroFound) {
        await page.getByRole('link', { name: /Explorar conceitos/i }).first().click();
        await page.getByRole('heading', { name: /Explore os conceitos/i }).waitFor({timeout: 12000});
        latest.galleryWorks = true;
        latest.galleryUrl = page.url();
        latest.conceptImages = await page.locator('.malta-generated').count();
        await page.screenshot({ path: '/tmp/' + name.replace(/\W/g, '') + '.png', fullPage: true });
        console.log(JSON.stringify(latest, null, 2));
        await page.close();
        return true;
      }
    } catch (error) {
      latest = { ...latest, exception: error.message, errors };
    }
    console.log(JSON.stringify(latest, null, 2));
    await page.close();
    if (attempt < 10) await new Promise(resolve => setTimeout(resolve, 15000));
  }
  console.error('FAILURE: React não renderizou no site ' + name, latest);
  return false;
}

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });
  let passed = true;
  for (const [name, url] of sites) {
    const ok = await inspect(browser, name, url);
    if (!ok) passed = false;
  }
  await browser.close();
  if (!passed) process.exitCode = 1;
})().catch(error => { console.error(error.stack); process.exitCode = 1; });
