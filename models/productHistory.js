import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  price: String,
  sale: { type: String, default: null },
  date: { type: Date, default: Date.now() }
});

const ProductHistory = new mongoose.model('ProductHistory', historySchema);

export default ProductHistory;
