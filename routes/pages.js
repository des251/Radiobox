const express = require('express');
const {
  serviceItems,
  team,
  testimonials,
  clients,
  photo,
} = require('../data/data');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    active: { index: true },
    meta: {
      description: 'Магазин радиотоваров в Бресте',
      keywords: 'Радиотовары, радиокомпоненты, электроника, блоки питания, шнуры, аксессуары GSM',
    },
  });
});

router.get('/resume', (req, res) => {
  res.render('resume', {
    active: { resume: true },
    meta: {
      description: 'О магазине radiobox',
      keywords: 'адрес: Куйбышева 13, контакты radiobox, отзывы radiobox, партнеры radiobox, персонал radiobox',
    },
    serviceItems: serviceItems.resume,
    team,
    testimonials,
    clients,
  });
});

router.get('/works', (req, res) => {
  res.render('works', {
    active: { works: true },
    meta: {
      description: 'Галерея radiobox',
      keywords: 'фото магазина radiobox, видео, интересные статьи',
    },
  });
});

router.get('/photo', (req, res) => {
  res.render('photo', {
    active: { works: true },
    meta: {
      description: 'Фото магазина radiobox',
      keywords: 'фото, фотогалерея',
    },
    photo,
  });
});

router.get('/contacts', (req, res) => {
  res.render('contacts', {
    active: { contacts: true },
    meta: {
      description: 'Контакты магазина radiobox',
      keywords: '+375 (29) 862 56 84, valbrestgsm@mail.ru',
    },
    serviceItems: serviceItems.contacts,
  });
});

module.exports = router;
