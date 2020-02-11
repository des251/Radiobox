const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');
const pagesRouter = require('./routes/pages');
const photoRouter = require('./routes/photo');


hbs.registerPartial('header', fs.readFileSync(`${__dirname}/views/partials/header.hbs`, 'utf8'));

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/radiobox', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('Connected to mongo db...'));
mongoose.set('useCreateIndex', true);

app.use('/', pagesRouter);
app.use('/', photoRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
