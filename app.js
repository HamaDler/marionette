const puppeteer = require('puppeteer');

async function scrape() {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto('https://www.keychron.com/collections/new-arrivals');
  for (i = 1; i <= 5; i++) {
    var element = await page.waitForSelector(
      '.boost-pfs-filter-products > .boost-pfs-filter-product-item:nth-child(' +
        i +
        ') > .boost-pfs-filter-product-item-inner > .boost-pfs-filter-product-bottom > div > a'
    );
    var text = await page.evaluate((element) => element.textContent, element);
    console.log(text);
  }
  browser.close();
}
scrape();
