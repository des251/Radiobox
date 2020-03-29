const hbs = require('hbs');
const fs = require('fs');
const path = require('path');

module.exports = function (app) {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'hbs');

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
    hbs.registerPartial(el, fs.readFileSync(path.join(__dirname, `../views/partials/${el}.hbs`), 'utf8'));
  });
  hbs.registerHelper('times', (n, block) => {
    let accum = '';
    for (let i = 0; i < n; i++) accum += block.fn(i);
    return accum;
  });
};
