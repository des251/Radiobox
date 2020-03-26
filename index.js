const express = require('express');
const createError = require('http-errors');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');
const pagesRouter = require('./routes/pages');
const mailRouter = require('./routes/mail');
const error = require('./middleware/error');

const partials = [
  'head',
  'header',
  'preloader',
  'cursor',
  'footer',
  'lines',
  'chevron',
  'service-items',
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
require('./startup/logging')();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pagesRouter);
app.use('/mail', mailRouter);
app.use((req, res, next) => {
  next(createError(404));
});
app.use(error);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
