var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const axios = require('axios');
require('dotenv').config();
const cors = require("cors");

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const adminsRouter = require('./routes/admins');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter(db));
app.use('/users', usersRouter);
// app.use('/api/admins', adminsRouter(db));

module.exports = app;

app.get('/getEarthWeather/:city', async (req, res) => {
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=metric&APPID=${process.env.EARTH_KEY}`)
        .then(result => {
          res.json(result.data);
        });
})

app.get('/getMarsWeather', async (req, res) => {
  await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.NASA_KEY}&feedtype=json&ver=1.0`)
        .then(result => {
          res.json(result.data);
        });
})

app.get('/getPictureOfDay', async (req, res) => {
  await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`)
  .then(result => {
    res.json(result.data);
  });
})

app.get('/getPictureOfDate/:date', async (req, res) => {
  await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}&date=${req.params.date}`)
  .then(result => {
    res.json(result.data);
  });
})

app.get('/getPlanetDetails/:planet', async (req, res) => {
  await axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${req.params.planet}`)
        .then(result => {
          res.json(result.data);
        });
})