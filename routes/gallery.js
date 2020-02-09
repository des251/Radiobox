const express = require('express');

const router = new express.Router();

router.get('/images', (req, res) => {
  res.send('images');
});


module.exports = router;
