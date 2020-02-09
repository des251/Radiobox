const express = require('express');
const { Photo } = require('../models/photo');

const router = new express.Router();

router.get('/photo', async (req, res) => {
  try {
    const photo = await Photo.find();
    res.send(photo);
  } catch (err) {
    console.log(err.message);
  }
});

router.post('/photo', async (req, res) => {
  const photo = new Photo({
    img: req.body.img,
    alt: req.body.alt,
  });
  await photo.save();
  res.send(photo);
});


module.exports = router;
