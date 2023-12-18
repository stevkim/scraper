import express from 'express';
import morgan from 'morgan';
import './db.js';

import productRouter from './routes/productRouter.js';

const app = express();
app.use(express.json());
app.use(express.static('dist'));
app.use(morgan('dev'));


app.use('/:product', productRouter);

app.listen(3000, () => {
  console.log(`Listening on port: 3000`)
});