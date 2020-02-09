const express = require('express');
const data = require('./data');

const app = express();


app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/gallery', (req, res) => {
  res.send(data);
});

app.get('/gallery/:category', (req, res) => {
  const { category } = req.params;
  res.send(data[category]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
