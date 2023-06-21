const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routers/users');
const cardRoutes = require('./routers/cards');
const wrongRoutes = require('./routers/wrong');
// const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1/mestodb');

// app.use(auth);
app.use(userRoutes);
app.use(cardRoutes);
app.use(wrongRoutes);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
