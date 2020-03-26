const express = require('express');

const router = new express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
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

  const mailOptions = {
    from: '"Radiobox" <admin@radiobox.by>',
    to: ['admin@radiobox.by'],
    subject: 'Запрос с сайта radiobox.by',
    text: 'Магазин радиотоваров в Бресте',
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(JSON.stringify({
        message: 'Что-то пошло не так...',
        error: `${error}`,
        color: '#f3969a',
      }));
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.send(JSON.stringify({
      message: 'Сообщение успешно отправлено !',
      color: '#56cc9d',
    }));
  });
});

module.exports = router;
