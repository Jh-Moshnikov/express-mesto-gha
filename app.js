const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routers/users');

const cardRoutes = require('./routers/cards');

const { PORT = 3000 } = process.env;

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '648884921209fe36e4b66756',
  };

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1/mestodb');

app.use(userRoutes);
app.use(cardRoutes);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
