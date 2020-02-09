const express = require('express');

const router = new express.Router();

router.get('/photo', (req, res) => {
  res.send('photo');
});


module.exports = router;
