import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import './db.js';
import { getProductInfo, addProduct } from './routes/productRouter.js';
import { getProductHistory } from './routes/historyRouter.js';
import { getSession, updateSession } from './routes/sessionRouter.js';
import verifyCookie from './middleware/verifyCookie.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static('dist'));
app.use(morgan('dev'));

app.use(verifyCookie);

app.get('/session', getSession);
app.put('/session', updateSession);

app.get('/product', getProductInfo);
app.post('/product', addProduct);
app.get('/product/:name/history', getProductHistory);

app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(3000, () => {
  console.log(`Listening on port: 3000`)
});