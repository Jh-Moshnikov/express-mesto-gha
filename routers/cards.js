const cardRoutes = require('express').Router();

const { validationCardId, validationCard } = require('../middlewares/getValidation');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

cardRoutes.get('/cards', getCards);
cardRoutes.post('/cards', validationCard, createCard);
cardRoutes.delete('/cards/:cardId', validationCardId, deleteCard);
cardRoutes.put('/cards/:cardId/likes', validationCardId, likeCard);
cardRoutes.delete('/cards/:cardId/likes', validationCardId, dislikeCard);

module.exports = cardRoutes;
