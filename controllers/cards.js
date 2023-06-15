const Card = require('../moduls/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы не корректные данные' });
      } else {
        res.status(500).send({ message: 'внутренняя ошибка сервера' });
      }
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.user.id)
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send(err));
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'Передан несуществующий _id карточки' });
      }
      res.status(200).send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(500).send({ message: 'внутренняя ошибка сервера' });
      }
      res.status(400).send({ message: 'Переданы не корректные данные' });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (!card) {
        console.log('test');
        return res.status(404).send({ message: 'Передан несуществующий _id карточки' });
      }
      console.log('test2');
      res.status(200).send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.log('test3');
        return res.status(500).send({ message: 'внутренняя ошибка сервера' });
      }
      res.status(400).send({ message: 'Переданы не корректные данные' });
    });
};
