const jwt = require('jsonwebtoken');
// const AuthError = require('../utils/errors/authError');
const { AUTH_ERROR } = require('../utils/errors/errors');

const JWT_SECRET = '55c174a9ef873cc486b909f7d5d7b3ed95e39814890f7d73442b47649fb18c49';

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(AUTH_ERROR).send({ message: 'Необходима авторизация' });
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(AUTH_ERROR).send({ message: 'Необходима авторизация' });
  }
  req.user = payload;
  next();
};
