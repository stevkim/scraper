import Product from '../models/product.js';
import ProductHistory from '../models/productHistory.js';
import getData from './scrape.js';

const addProductHistory = (data) => {
  return ProductHistory.create(data);
};

const productUpdate =  async (url) => {
  const result = await getData(url);
  Product.findOneAndUpdate({ name: result.name }, result);
  addProductHistory(result);
}

const updateAllProducts = () => {
  Product.find({})
    .then(results => {
      console.log(results);
      results.forEach(entry => {
        productUpdate(entry.url);
      })
    })
}

export default updateAllProducts;