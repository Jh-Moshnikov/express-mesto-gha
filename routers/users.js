const userRoutes = require('express').Router();

const {
  getUsers,
  getUserId,
  updateUser,
  updateAvatar,
  getUserInfo,
} = require('../controllers/users');

const { validationUserId, validationUserInfo, validationAvatar } = require('../middlewares/getValidation');

userRoutes.get('/users', getUsers);
userRoutes.get('/users/me', getUserInfo);
userRoutes.get('/users/:userId', validationUserId, getUserId);
userRoutes.patch('/users/me', validationUserInfo, updateUser);
userRoutes.patch('/users/me/avatar', validationAvatar, updateAvatar);
module.exports = userRoutes;
