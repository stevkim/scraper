import dotenv from 'dotenv';
import mongoose from 'mongoose';
import updateAllProducts from './lib/update.js';
dotenv.config();

mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:27017/${process.env.DB}`)
  .then(() => {
    console.log('Database connection successful');
    setInterval(updateAllProducts, 1000 * 60 * 60 * 12);
  });

export default mongoose.connection;
