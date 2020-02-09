const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports.Photo = Photo;
