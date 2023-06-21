const userRoutes = require('express').Router();

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
userRoutes.get('/me', getUserInfo);
userRoutes.get('/users/:userId', getUserId);
userRoutes.patch('/users/me', updateUser);
userRoutes.patch('/users/me/avatar', updateAvatar);
userRoutes.post('/signin', login);
userRoutes.post('/signup', createUser);
module.exports = userRoutes;
