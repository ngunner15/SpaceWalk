var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

const api = {
  base: "https://api.openweathermap.org/data/2.5/"
}

app.get('/getEarthWeather/:city', (req, res) => {
  // console.log(req.params);
  
  axios.get(`${api.base}weather?q=${req.params.city}&units=metric&APPID=${process.env.EARTH_KEY}`)
        .then(result => {
          res.json(result.data);
        });
})