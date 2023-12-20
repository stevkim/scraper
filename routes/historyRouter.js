import ProductHistory from '../models/productHistory.js';

export const getProductHistory = (req, res) => {
  ProductHistory.find({ name: req.params.name }).sort({ date: 'desc' })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    })
};

