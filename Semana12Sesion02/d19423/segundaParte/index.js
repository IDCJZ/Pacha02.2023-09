const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const especie = require('./routes/especie');
const nacionalidad = require("./routes/nacionalidad")
const app = express();

app.use(bodyParser.json());

app.use('/', especie);
app.use('/', nacionalidad);


app.listen(3000, () => {
  console.log('Server started on port 3000');
});