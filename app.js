<<<<<<< HEAD
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
=======
const express = require("express");
const app = express();
const port = 3000;

app.get("/" , (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
>>>>>>> 5dab58e69c03fc2e6511159ec0b733b76221eebf
