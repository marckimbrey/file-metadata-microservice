const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const index = require('./routes/index');
//const upload = require('./routes/upload');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);







module.exports = app;
