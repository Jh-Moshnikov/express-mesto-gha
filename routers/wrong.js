const express = require('express');

const wrongRoutes = require('express').Router();

const userRoutes = require('./users');
const cardRoutes = require('./cards');

wrongRoutes.use('/users', userRoutes);
wrongRoutes.use('/cards', cardRoutes);
wrongRoutes.use('*', (req, res) => {
  res.status(404).send({ message: 'Страница не найдена' });
});
wrongRoutes.use(express.json());

module.exports = wrongRoutes;
