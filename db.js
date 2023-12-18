import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/scraper-project')
  .then(() => console.log('Database connection successful'));

export default mongoose.connection;