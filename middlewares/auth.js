const jwt = require('jsonwebtoken');
const AuthError = require('../utils/errors/authError');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  // const { authorization } = req.headers;
  console.log(req.headers.authorization);
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
    console.log(req.headers.authorization);
    console.log('test hgjfkk');
    throw new AuthError('Необходима авторизация');
  }
  const token = req.headers.authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
    console.log('test payload');
    console.log(payload);
  } catch (err) {
    console.log('test-auth');
    return new AuthError('Необходима авторизация');
  }
  req.user = payload;
  console.log(req.user._id);
  console.log('tets finale');
  next();
};
