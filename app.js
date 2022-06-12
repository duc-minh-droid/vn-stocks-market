const express = require('express');
const app = express();
const API = require('./modules/stockAPI')

app.get('/', function (req, res) {
  res.sendFile('./index.html', {root: __dirname})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(`http://localhost:${3000}`);
});

console.log(API)