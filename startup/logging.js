const winston = require('winston');

module.exports = function () {
  process.on('unhandledRejection', (exeption) => {
    throw exeption;
  });
  winston.add(new winston.transports.File({
    filename: 'exeptions.log',
    handleExceptions: true,
    level: 'error',
  }));
};
