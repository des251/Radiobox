const express = require('express');
const {
  serviceItems,
  team,
  testimonials,
  clients,
  photo,
  video,
  links,
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

router.get('/video', (req, res) => {
  res.render('video', {
    active: { works: true },
    meta: {
      description: 'Видео с youtube канала dvm',
      keywords: 'dvm, все своими руками',
    },
    video,
  });
});

router.get('/links', (req, res) => {
  res.render('links', {
    active: { works: true },
    meta: {
      description: 'Журналы Rexant',
      keywords: 'Ссылки на журналы компании Rexant',
    },
    links,
  });
});

router.get('/pop-items', (req, res) => {
  res.render('pop-items', {
    active: { works: true },
    meta: {
      description: 'Популярные товары',
      keywords: 'Электротехнические товары',
    },
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
