const express = require('express');

const router = new express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res, next) => {
  const output = `
    <h2>Cообщение с сайта radiobox.by</h2>
    <ul>  
      <li>Имя: ${req.body.name || 'Не заполнено'}</li>
      <li>Email: ${req.body.email || 'Не заполнено'}</li>
      <li>Вопрос: ${req.body.message || 'Не заполнено'}</li>
    </ul>
  `;

  const transporter = nodemailer.createTransport({
    host: 'mailbe05.hoster.by',
    port: 465,
    secure: true,
    auth: {
      user: 'admin@radiobox.by',
      pass: 'des251@@@5852416',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Radiobox" <admin@radiobox.by>',
      to: ['admin@radiobox.by'],
      subject: 'Запрос с сайта radiobox.by',
      text: 'Магазин радиотоваров в Бресте',
      html: output,
    });
    res.status(200).send('OK');
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
