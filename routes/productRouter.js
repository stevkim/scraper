import express from 'express';
import getData from '../lib/scrape.js';

const productRouter = express.Router();

productRouter.route('/')
  .get(async (req, res) => {
    const result = await getData(req.query);
    console.log(result);
    if (!result) {
      res.sendStatus(404);
    } else {
      res.status(200).json(result);
    }
  })