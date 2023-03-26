//const express = require('express');
//const dotenv = require('dotenv');
//const morgan = require('morgan');
//const connectDB = require('./database/mongodb');
//const cookieParser = require('cookie-parser');


// Route files
//const auth = require('./routes/auth');
//const products = require('./routes/products');


//const app = express()
//
//app
//.use(express.json())
//.use(cookieParser());
//
// Dev logging middleware
//if (process.env.NODE_ENV === 'development') {
//    app.use(morgan('dev'));
//  }
//
// Mount routers
// app.use('/api/v1/auth', auth);
// app.use('/api/v1/products', products);
// 
// app.use(errorHandler);
//
//const PORT = process.env.PORT || 5000;
//
//const server=app.listen(
//  PORT,
//  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
//);

// Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Error: ${err.message}`);
//   // Close server & exit process
//   server.close(() => process.exit(1));
// });



// --------------
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./database/mongodb');
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
  .use(cookieParser())
  .use('/api/v1/auth', auth)
  .use('/api/v1/products', products)
  .use(errorHandler);

module.exports = app;