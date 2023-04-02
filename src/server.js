const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const cors = require('cors')

const products = require('./Routes/products');
const shoppingCarts = require('./Routes/carts');

const app = express()

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app
  .use(express.json())
  .use(cors())
  .use('/products', products)
  .use('/shopping-carts', shoppingCarts)
  .use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
 

module.exports = app;