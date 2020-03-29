const express = require('express');
const createError = require('http-errors');
const path = require('path');
const pagesRouter = require('../routes/pages');
const mailRouter = require('../routes/mail');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use('/', pagesRouter);
  app.use('/mail', mailRouter);
  app.use((req, res, next) => {
    next(createError(404));
  });
  app.use(error);
};
