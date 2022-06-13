const express = require("express");
const API = require('./modules/stockAPI')

const app = express();
const port = 3000;

app.get("/" , (req, res) => res.sendFile("./index.html",{root: __dirname}));
app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`));

console.log('API')
