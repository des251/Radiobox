const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const galleryRouter = require('./routes/gallery');


const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/radiobox', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => console.log('Connected to mongo db...'));
mongoose.set('useCreateIndex', true);

app.use('/', indexRouter);
app.use('/gallery', galleryRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
