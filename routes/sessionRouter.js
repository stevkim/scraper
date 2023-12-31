import Session from '../models/session.js';

export const getSession = (req, res) => {
  Session.findOne({ _id: req.cookies.sessionKey })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
};

export const updateSession = (req, res, next) => {
  Session.findByIdAndUpdate({ _id: req.cookies.sessionKey }, { $push: { urls: req.body }})
    .then(result => {
      if (!result) {
        Session.create({ _id: req.cookies.sessionKey, urls: [req.body]})
          .then(() => {
            next();
          })
      } else {
        next();
      }
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    })
};