const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const auth = require('./routes/auth');
const products = require('./routes/products');
const shoppingCarts = require('./routes/carts');

const app = express()

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app
  .use(express.json())
  .use('/products', products)
  .use('/shopping-carts', shoppingCarts);
  //.use('/api/v1/auth', auth);

module.exports = app;