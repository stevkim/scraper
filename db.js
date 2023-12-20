import mongoose from 'mongoose';
import updateAllProducts from './lib/update.js';

mongoose.connect('mongodb://localhost:27017/scraper-project')
  .then(() => {
    console.log('Database connection successful');
    updateAllProducts();
    setInterval(updateAllProducts, 1000 * 60 * 60 * 12);
  });

export default mongoose.connection;