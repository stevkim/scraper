import ProductHistory from '../models/productHistory.js';

export const getProductHistory = (req, res) => {
  ProductHistory.find({ name: req.params.name })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    })
};

export const addProductHistory = (req, res) => {
  ProductHistory.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    })
}