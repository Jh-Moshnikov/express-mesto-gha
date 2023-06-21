const userRoutes = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getUsers,
  getUserId,
  updateUser,
  updateAvatar,
  getUserInfo,
  login,
  createUser,
} = require('../controllers/users');

userRoutes.get('/users', getUsers);
userRoutes.get('/me', auth, getUserInfo);
userRoutes.get('/users/:userId', auth, getUserId);
userRoutes.patch('/users/me', auth, updateUser);
userRoutes.patch('/users/me/avatar', auth, updateAvatar);
userRoutes.post('/signin', login);
userRoutes.post('/signup', createUser);
module.exports = userRoutes;
