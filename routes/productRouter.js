import Product from '../models/product.js';
import getData from '../lib/scrape.js';

export const getProductInfo = (req, res) => {
  Product.findOne({ name: req.query.name })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    })
};

export const addProduct = (req, res) => {
  Product.exists({ name: req.body.name })
    .then(result => {
      if (!result) {
        createProductInfo(req.body.url);
      }
      res.sendStatus(200);
    })
}

const createProductInfo = async (url) => {
  const newData = await getData(url);
  Product.create(newData);
}