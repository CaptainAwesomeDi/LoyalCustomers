const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const PORT = 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/api/',(req,res)=>{
  res.json({wtf:'wtf?!'});
});

module.exports = app;