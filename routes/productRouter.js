import getData from '../lib/scrape.js';

export const getProductInfo = async (req, res) => {
  const result = await getData(req.query.url);
  res.status(200).json(result);
}

