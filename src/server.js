const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const auth = require('./routes/auth');
const products = require('./routes/products');

const app = express()

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app
  .use(express.json())
  .use('/products', products);
  //.use('/api/v1/auth', auth);

module.exports = app;