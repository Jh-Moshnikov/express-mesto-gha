const jwt = require('jsonwebtoken');
const AuthError = require('../utils/errors/authError');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthError('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    console.log('test-auth');
    return next(new AuthError('Необходима авторизация'));
  }
  req.user = payload;
  next();
};
