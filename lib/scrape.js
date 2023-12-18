import puppeteer from 'puppeteer';

async function getData(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const size = await page.$('[data-id="sizeTile"]');
  const sizes = await size.$$eval('[data-id="size-available"]', (node) => node.map(n => n.innerText));

  const productName = await page.$('[data-id="productTitle"]');
  const nameContent = await productName.getProperty('textContent');
  const product = await nameContent.jsonValue();

  const image = await page.$('[data-id="mainImage"]');
  const src = await image.getProperty('src');
  const imgUrl = await src.jsonValue();

  const pricing = await page.$('[data-id="pricing"]');
  const priceContent = await pricing.getProperty('textContent');
  const price = await priceContent.jsonValue();

  const onSale = await page.$('[data-id="productSalesPrice"]');
  const saleContent = await onSale.getProperty('textContent');
  const sale = await saleContent.jsonValue();

  const data = await { url, product, imgUrl, price, sale, sizes };
  browser.close();

  return await data;
}

export default getData();