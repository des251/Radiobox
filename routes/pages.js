const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    active: { index: true },
  });
});

router.get('/resume', (req, res) => {
  res.render('resume', {
    active: { resume: true },
  });
});

router.get('/works', (req, res) => {
  res.render('works', {
    active: { works: true },
  });
});

router.get('/contacts', (req, res) => {
  res.render('contacts', {
    active: { contacts: true },
  });
});

module.exports = router;
