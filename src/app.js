const server = require('./server')
const connectDB = require('./database/mongodb');
require('dotenv').config();
const logger = require("./logger");

const mongoDbString = process.env.MONGO_URI;
connectDB(mongoDbString);

const port = process.env.PORT || 5000;

const srv = server.listen(port, () => {
    logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
});

// Gracefull shutdown: https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357
process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    logger.info('Closing http server');
    srv.close(() => {
        logger.info('http server closed')
    });
});