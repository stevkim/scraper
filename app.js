import express from 'express';
import morgan from 'morgan';
import './db.js';
import { getProductInfo } from './routes/productRouter.js';
import { getProductHistory, addProductHistory } from './routes/historyRouter.js';

const app = express();
app.use(express.json());
app.use(express.static('dist'));
app.use(morgan('dev'));


app.get('/product', getProductInfo);
app.get('/product/:name/history', getProductHistory);
app.post('/product/:name/history', addProductHistory)

app.listen(3000, () => {
  console.log(`Listening on port: 3000`)
});