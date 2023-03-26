const server = require('./server')
const connectDB = require('./database/mongodb');
require('dotenv').config();
// Load env vars
// dotenv.config({ path: './config/config.env' });
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const mongoDbString = process.env.MONGO_URI;
connectDB(mongoDbString);

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
  });