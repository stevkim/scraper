import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  productName: { type: String, required: true, index: true },
  price: String,
  sale: String,
  date: { type: Date, default: Date.now() }
});

const ProductHistory = new mongoose.model('ProductHistory', historySchema);

export default ProductHistory;
