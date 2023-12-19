import puppeteer from 'puppeteer';

async function getData(url) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(url);

  const size = await page.$('[data-id="sizeTile"]');
  const sizes = await size.$$eval('[data-id="size-available"]', (node) => node.map(n => n.innerText));

  const title = await page.$('[data-id="productTitle"]');
  const nameContent = await title.getProperty('textContent');
  const productName = await nameContent.jsonValue();

  const image = await page.$('[data-id="mainImage"]');
  const src = await image.getProperty('src');
  const imgUrl = await src.jsonValue();

  const pricing = await page.$('[data-id="pricing"]');
  const priceContent = await pricing.getProperty('textContent');
  const price = await priceContent.jsonValue();

  const onSale = await page.$('[data-id="productSalesPrice"]');
  let sale = null;
  if (onSale) {
    const saleContent = await onSale.getProperty('textContent');
    sale = await saleContent.jsonValue();
  }

  const path = new URL(url).pathname.slice(1);

  const data = await { url, imgUrl, price, sale, sizes, productName, name : path };
  browser.close();

  return await data;
}

export default getData;