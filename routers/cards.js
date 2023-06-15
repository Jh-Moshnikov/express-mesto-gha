const cardRoutes = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  getLike,
  deleteLike,
} = require('../controllers/cards');

cardRoutes.get('/cards', getCards);
cardRoutes.post('/cards', createCard);
cardRoutes.delete('/cards/:cardId', deleteCard);
cardRoutes.put('/cards/:cardId/likes', getLike);
cardRoutes.delete('/:cardId/likes', deleteLike);

module.exports = cardRoutes;
