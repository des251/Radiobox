const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'logfile.log' }),
  ],
});

module.exports = function (err, req, res, next) {
  logger.error(err.message, {
    meta: {
      message: err.message,
      name: err.name,
      stack: err.stack,
    },
  });

  res.locals.error = err;
  res.status(err.status || 500).render('error');
};
