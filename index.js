const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');
const pagesRouter = require('./routes/pages');
const photoRouter = require('./routes/photo');

const partials = [
  'head',
  'header',
  'preloader',
  'cursor',
  'footer',
  'lines',
  'chevron',
];

partials.forEach((el) => {
  hbs.registerPartial(el, fs.readFileSync(`${__dirname}/views/partials/${el}.hbs`, 'utf8'));
});
hbs.registerHelper('times', (n, block) => {
  let accum = '';
  for (let i = 0; i < n; i++) accum += block.fn(i);
  return accum;
});

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
