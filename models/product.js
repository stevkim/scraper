import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  price: String,
  sale: { type: String, default: null },
  sizes: [String],
  productName: String,
  imgUrl: String,
  url: String,
});

const Product = new mongoose.model('Product', productSchema);

export default Product;
