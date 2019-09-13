var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/todo", err => {
  if(err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
