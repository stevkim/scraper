import { v4 as sessionKey } from 'uuid';

const verifyCookie = (req, res, next) => {
  if (!req.cookies.sessionKey) {
    res.cookie('sessionKey', sessionKey());
  }
  next();
}

export default verifyCookie;